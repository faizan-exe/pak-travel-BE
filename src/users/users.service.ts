import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/users.schema';
import  { SignupDto } from './dtos/signup.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) {}

    async createUser(userData: SignupDto): Promise<User> {
        // Check if a user with the same email already exists
        const existingUser = await this.userModel.findOne({ email: userData.email }).exec();
        if (existingUser) {
            throw new ConflictException('User with this email already exists');
        }
    

        const newUser = new this.userModel({
            ...userData, 
      
        });
    
        return newUser.save(); 
    }

    async getUser(query: object): Promise<User> {
        return await this.userModel.findOne(query).exec();
    }
}
