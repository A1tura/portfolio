
import {getAllBlogs} from "../controllers/blog.controller";
import { Router } from "express";

const router = Router();

router.route("/blogs").get(getAllBlogs);

export default router;
