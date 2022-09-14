import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './dtos/create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Post('/new')
createUser(@Body() body: createUserDto){
    this.usersService.create(body.firstname,body.lastname,body.age)
    console.log(body)
}
  @Get('/person')
  findUser(){
    return this.usersService.findAll()
    // return 'Hello'
  }
}

