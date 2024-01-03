import { Request, Response } from "express";
import { User } from "../../../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { config } from "../../../config/config";
export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) throw new Error("Email Id already exists");
        //hash
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        //create user
        const user = new User({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();
        //jwt
        const token = jwt.sign(
            {
                id: user.id,
            },
            config.JWT_SECRET!,
            {
                expiresIn: config.JWT_EXPIRATION!,
            }
        );
        res.cookie(config.COOKIE_NAME!, token, {
            httpOnly: true,
            secure: config.NODE_ENV! === "prod",
        });
        return res.status(201).json({
            success: true,
            data: user,
        });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({
                success: false,
                data: err.message,
            });
        }
    }
};
