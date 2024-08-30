import { NextFunction, Request, Response } from "express";
import "dotenv/config";

export default function verifAdmin(req: Request, res: Response, next: NextFunction): void {
    const password = req.headers["authorization"];

    if (password === process.env["ADMIN_PASSWORD"]) {
        next();
    } else {
        res.json("Invalid Password").status(403);
    }

}
