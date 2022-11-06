//React
import { Controller, Post, Body } from '@nestjs/common';

//My imports
import { User } from 'src/database/entities/user';
import { UserService } from "./user.service";

@Controller()
export class UserController {

    //Init
    constructor(private userService : UserService){

    }

    @Post()
    createUser(@Body() user : User){
        this.userService.createUser(user);
    }






}
