import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/users.schema';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dtos/signup.dto';

@Controller('auth')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('/signup')
    async createUser(@Body() signupDto: SignupDto): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(signupDto.password, saltOrRounds);
    const result = await this.usersService.createUser({
        ...signupDto,
        password: hashedPassword,
    });
    return result;
}

}