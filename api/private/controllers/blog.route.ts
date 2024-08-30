import { Request, Response } from "express";
import { BlogPost } from "../../../dal/blog.dal";

import { Blog } from "../../../types/blog.type";
import { ObjectId } from "mongodb";

export const create = (req: Request, res: Response): Response => {
    let { title, text } = req.body;

    if (!title || !text) {
        return res.json("You should specify all the fields");
    }

    const createdAt: Date = new Date();
    const Post: Blog.BlogPost = { title, text, createdAt };

    const blogPost = new BlogPost(Post)

    blogPost.create();

    return res.json("Created");
}

export const deletePost = async (req: Request, res: Response): Promise<Response> => {
    let {id} = req.params;

    try {
        const blogPost = new BlogPost();
        await blogPost.deletePost(new ObjectId(id));

        return res.json("successfully deleted");
    } catch (err) {
        return res.json({"error": err});
    }
}
