import { Router} from "express";

import testRouter from "./routes/test.route";

const router = Router();

router.use("/test", testRouter);

export default router;
