import { IAuthor } from './author';

export interface IArticle {
    rating: number;
    comments: string[];
    _id: string;
    title: string;
    content: string;
    imageUrl: string;
    createdBy: string;
    author: IAuthor;
    created_at: string;
    updatedAt: string;
    __v: number;
}