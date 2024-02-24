import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) {}

    async createUser(email: string, password: string): Promise<User> {

        const existingUser = await this.userModel.findOne({ email }).exec();
        if (existingUser) {

            throw new ConflictException('User with this email already exists');
        }

        return this.userModel.create({
            email,
            password,
        });
    }

    async getUser(query: object): Promise<User> {
        return await this.userModel.findOne(query).exec();
    }
}
