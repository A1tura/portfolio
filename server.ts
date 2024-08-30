
import express from "express";
import { Server } from "net";

import publicRoutes from "./api/public/index";
import privateRoutes from "./api/private/index";

import adminAuth from "./middlewares/admin-verif";

export const app = express();

export function bootServer(): Server {
    app.use(express.urlencoded());

    app.use("/public/", publicRoutes);
    app.use("/private/", adminAuth, privateRoutes);

    const server = app.listen(3000, () => {
        console.log("Listening on port 3000");
    })

    return server;
}
