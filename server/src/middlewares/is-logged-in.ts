import { NextFunction, Request, Response } from "express";
import "dotenv/config";
import jwt from "jsonwebtoken";
import mongoose, { MongooseError } from "mongoose";
import { User } from "../models/user";

interface Payload {
    id: string;
}
interface UserPayload {
    id: mongoose.ObjectId;
    name: string;
    email: string;
    password?: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: UserPayload;
        }
    }
}

async function isLoggedIn(req: Request, res: Response, next: NextFunction) {
    // fetching cookie
    const decoded = req.cookies[process.env.COOKIE_NAME!];

    if (!decoded) {
        return res.status(400).json({
            success: false,
            data: "Not authorised",
        });
    }
    try {
        const payload = jwt.verify(decoded, process.env.JWT_SECRET!) as Payload;
        //fetch user

        const user = (await User.findById(payload.id)) as UserPayload;
        req.user = user;
        next();
    } catch (err) {
        if (err instanceof MongooseError) {
            return res
                .status(500)
                .json({ success: false, data: "Server error" });
        }
        if (err instanceof Error) {
            return res.status(400).json({ success: false, data: err.message });
        }
        return res
            .status(500)
            .json({ success: false, data: "Something went wrong!!" });
    }
}

export { isLoggedIn };
