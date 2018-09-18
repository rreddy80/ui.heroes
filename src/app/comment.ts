export class Comment {
    _id: number;
    message: string;
    name: string;
    email: string;
    parent_id: number;
    replying: boolean;
    unique_id: string;
    upvotes: number;
    downvotes: number;
}