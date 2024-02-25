import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Community, CommunityDocument } from './schemas/community.schema';
import { createPostDto } from './dtos/create-post.dto';




@Injectable()
export class CommunityService {

    constructor(@InjectModel(Community.name) private readonly model: Model<CommunityDocument>) {}


    async getAll(): Promise<Community[]> {
        return await this.model.find().exec();
    }

    
    async create(createPostDto: createPostDto, user): Promise<Community> {
        return await new this.model({
            user: user._id,
          ...createPostDto,
          createdAt: new Date(),
        }).save();
    }

    
    async delete(id: string): Promise<Community> {
        return await this.model.findByIdAndDelete(id).exec();
    }


}
