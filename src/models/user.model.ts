import { Document } from "mongoose";

export interface UserModel extends Document
{
    username: string;
    password: string;
    status: boolean;
    createdAt?: any;
    updatedAt?: any;
}