const jwt = require('jsonwebtoken');

const secret = process.env.JSON_WEB_TOKEN_SECRET;
const expiration = process.env.JSON_WEB_TOKEN_EXPIRATION;

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, sercre, { maxAge: expiration });
      req.user = data;
    } catch {
      console.lof("Invalid token");
    }
    return req;
  },
  signToken: function ({ firstname, email, _id }) {
    const payload = { firstname, email, _id };
    return {
      token: jwt.sign({ data: payload }, secret, { expiresIn: expiration }),
    };
  },
  authToken: function (token) {
    try {
      let authed = jwt.verify(token, secret, {
        maxAge: process.env.JSON_WEB_TOKEN_EXPIRATION,
      });
      if (authed) {
        let decoded = jwt.decode(token);
        return decoded;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
