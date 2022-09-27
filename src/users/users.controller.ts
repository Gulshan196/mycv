import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './dtos/create-user-dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private usersService:UsersService){}
    @Post('/signup')
createUser(@Body() body: createUserDto){
    this.usersService.create(body.email,body.password);
    console.log(body)
}
  @Get('/person')
  findUser(){
    return this.usersService.findAll()
    // return 'Hello'
  }
}

