
import express from "express";
import { Server } from "net";

import publicRoutes from "./api/public/index";
import privateRoutes from "./api/private/index";

export const app = express();

export function bootServer(): Server {
    app.use("/public/", publicRoutes);
    app.use("/private/", privateRoutes);

    const server = app.listen(5000, () => {
        console.log("Listening on port 5000");
        })

    return server;
}
