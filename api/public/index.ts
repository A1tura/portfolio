import { Router} from "express";

import testRouter from "./routes/test.route";
import blogRouter from "./routes/blog.route";

const router = Router();

router.use("/test", testRouter);
router.use("/blog", blogRouter);

export default router;
