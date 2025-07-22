import jwt from "jsonwebtoken";

export default function authenticate(req, res, next) {
  // Permite que requisições OPTIONS passem direto
  if (req.method === "OPTIONS") {
    return next();
  }

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token not found" });
  }

  try {
    const token = authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallback-secret"
    );

    if (!userId) {
      return res.status(401).json({ error: "Unauthorised." });
    }

    req.userId = userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token." });
  }
}
