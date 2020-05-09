import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { userDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController 
{
    constructor(private _userService: UserService)
    {}

    @Get()
    index(): any
    {
        return this._userService.getAllUsers();
    }

    @Get(':id')
    getInfo(@Param('id') id: string): any
    {
        return id;
    }

    @Post()
    create(@Body() account: userDto): any
    {
        return this._userService.createUser(account);
    }

    @Patch(':id')
    updateStatus(@Param('id') id: string, @Body() status: userDto): any
    {
        return this._userService.changeStatusUser(id, status);
    }
}