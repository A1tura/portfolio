
import express from "express";
import { Server } from "net";

export const app = express();

export function bootServer(): Server {
    const server = app.listen(5000, () => {
        console.log("Listening on port 5000");
        })

    return server;
}
