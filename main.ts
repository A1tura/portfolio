
import { connect } from "./db/db";
import {bootServer, app} from "./server";

async function run(): Promise<void> {
    await connect();
    bootServer();
}

run();
