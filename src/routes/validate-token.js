import jwt from "jsonwebtoken";
import { config } from "../config.js";

const validateToken = (req, res, next) => {
  const headerToken = req.headers["authorization"];
  if (headerToken != undefined && headerToken?.startsWith("Bearer")) {
    try {
      const bearerToken = headerToken.slice(7);
      jwt.verify(bearerToken, config.secret);
      next();
    } catch (error) {
        res.status(401).json({
            msg: "Token not valid."
        })
    }
  } else {
    res.status(401).json({
      msg: "Access deny.",
    });
  }
};

export default validateToken;
