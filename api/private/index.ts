
import testRoute from "./routes/test.route";
import blogRoute from "./routes/blog.route";

import { Router } from "express";

const router = Router();

router.use("/test", testRoute);
router.use("/blog", blogRoute);

export default router;
