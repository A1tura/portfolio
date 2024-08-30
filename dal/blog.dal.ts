import { Collection } from "mongodb";
import {db} from "../db/db";

import {Blog as blogPostType} from "../types/blog.type";

const getCollection = (): Collection => db.collection("blog-posts");

export class BlogPost {
    blogPost: blogPostType.BlogPost;

    constructor(blogPost: blogPostType.BlogPost) {
        this.blogPost = blogPost;
    }

    async create(): Promise<void> {
        await getCollection().insertOne(this.blogPost);
    }
}
