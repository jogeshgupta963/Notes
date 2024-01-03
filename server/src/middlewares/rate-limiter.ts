import { rateLimit } from "express-rate-limit";
// Rate limit middleware
export const rateLimiter = rateLimit({
    windowMs: 60 * 10,
    max: 15,
    message: "You have exceeded your 5 requests per 6 sec limit.",
    headers: true,
});
