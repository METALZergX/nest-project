import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDto } from './user.dto';
import { UserModel } from 'src/models/user.model';
import { Types } from 'mongoose';

@Injectable()
export class UserService 
{
    constructor(@InjectModel('Users') private _userModel: Model<UserModel>)
    {}

    getAllUsers(): Promise<UserModel[]>
    {
        return this._userModel.find().exec();
    }

    createUser(user: userDto): Promise<UserModel>
    {
        const newUser = new this._userModel(user);
        return newUser.save();
    }

    changeStatusUser(userId: string, userStatus: userDto): any
    {
        let id = Types.ObjectId(userId);
        return this._userModel.update({ _id: id }, { $set: userStatus });
    }

}
