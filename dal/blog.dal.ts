import { Collection, ObjectId } from "mongodb";
import { db } from "../db/db";

import { Blog as blogPostType } from "../types/blog.type";

const getCollection = (): Collection<blogPostType.BlogPostDB> => db.collection("blog-posts");

export class BlogPost {
    blogPost?: blogPostType.BlogPost;

    constructor(blogPost?: blogPostType.BlogPost) {
        this.blogPost = blogPost;
    }

    async create(): Promise<void> {
        if (this.blogPost) {
            //@ts-ignore
            await getCollection().insertOne(this.blogPost);
        }
    }

    async deletePost(_id: ObjectId): Promise<void> {
        await getCollection().deleteOne({ _id });
    }

    async getPosts(): Promise<blogPostType.BlogPostDB[]> {
        const cursor = await getCollection().find();
        const document = await cursor.toArray();

        return document;
    }
}
