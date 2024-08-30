import { Router } from "express";
import { create, deletePost } from "../controllers/blog.route";

const router = Router();

router.route("/create").put(create);
router.route("/delete/:id/").delete(deletePost);

export default router;
