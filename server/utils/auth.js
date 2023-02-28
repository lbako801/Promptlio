const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const expiration = "2h";

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      success: false,
      message: "No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, secret, { maxAge: expiration });
    req.user = decoded;
  } catch {
    return res.status(401).send("Invalid token");
  }

  return next();
};

const createToken = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send("Please provide username and password");
    }

    const User = await User.findOne({ username });

    if (User && (await bcrypt.compare(password, User.password))) {
      const token = jwt.sign({ username }, secret, { expiresIn: expiration });

      User.token = token;

      res.status(200).send(User);
    }
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { verifyToken, createToken };