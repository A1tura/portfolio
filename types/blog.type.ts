import { ObjectId } from "mongodb";

export namespace Blog {

    export interface BlogPost {
        title: string;
        text: string;
        createdAt: Date;
    }

    export interface BlogPostDB extends BlogPost {
        _id: ObjectId;
    }
}
