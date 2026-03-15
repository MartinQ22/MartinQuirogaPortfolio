import { dirname } from "path";
import { fileURLToPath } from "url";
import jwt from "jsonwebtoken";
import { env } from "./src/config/enviroment.js";


//JSON WEB TOKENS
export function generateToken(payload) {
    return jwt.sign(payload, env.JWT_SECRET || "screto jwt", { expiresIn: '1d' })
}

export function verifyToken(token) {
    return jwt.verify(token, env.JWT_SECRET || "screto jwt")
}

export const serverRoot = dirname(fileURLToPath(import.meta.url));