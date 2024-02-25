import { Controller, Get, Post, Delete, Body, Param, UseGuards} from '@nestjs/common';
import { createPostDto } from './dtos/create-post.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../users/get-user.decorator';
import { User } from '../users/schemas/users.schema';
import { CommunityService } from './community.service';

@UseGuards(AuthGuard('local'))
@Controller('community')
export class CommunityController {

    constructor(private readonly service: CommunityService) { }

    @Get()
    async index() {
        return await this.service.getAll();
    }
   
   
    @Post()
    async create(
        @GetUser() user: User,
        @Body() createPostDto: createPostDto) {
        return await this.service.create(createPostDto, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.service.delete(id);
    }



    
}
