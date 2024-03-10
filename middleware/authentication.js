import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const authenticate = async (req, res, next) => {
  const AuthToken = req.headers.authorization;

  if (AuthToken == null) {
    return res.status(400).json({ msg: "Token is Missing" });
  }
  jwt.verify(AuthToken, process.env.JWT_SECRET, (err, success) => {
    if (err) {
      return res.status(401).json({ msg: "Invalid Token" });
    }

    next();
  });
};


const isAdmin = (req, res, next) => {
    if (req.user.role === 'Admin') {
      next();
    } else {
      res.status(403).json({ error: 'Permission denied. Only admins can access this resource.' });
    }
  };

export { authenticate,isAdmin };
