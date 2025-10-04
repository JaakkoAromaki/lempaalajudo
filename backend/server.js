require("dotenv").config();
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET ei ole määritelty. Lisää se .env-tiedostoon.");
}
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

const users = [
  {
    email: "jaakko.aromaki@gmail.com",
    passwordHash: bcrypt.hashSync("123456", 10),
  },
];

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user)
    return res.status(401).json({ message: "Invalid email or password" });

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid)
    return res.status(401).json({ message: "Invalid email or password" });

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 3600000,
  });

  res.json({ message: "Login successful" });
});

app.get("/protected", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Protected data", user: payload });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

app.listen(PORT, () =>
  console.log(`Backend running on http://localhost:${PORT}`),
);
