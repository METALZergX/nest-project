import { Document } from "mongoose";

export interface ProductModel extends Document
{
    name: string;
    item: string;
    code: string;
    createdAt?: string;
    updatedAt?: string;
}