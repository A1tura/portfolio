
import testRoute from "./routes/test.route";
import { Router } from "express";

const router = Router();

router.use("/test", testRoute);

export default router;
