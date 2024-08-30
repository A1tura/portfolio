import { Request, Response } from "express";
import { BlogPost } from "../../../dal/blog.dal";

export const getAllBlogs = async (req: Request, res: Response): Promise<Response> => {
    const blogs = await new BlogPost().getPosts();

    console.log(blogs);

    return res.json(blogs);
}
