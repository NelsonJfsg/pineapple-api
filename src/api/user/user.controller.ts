//React
import { Controller, Post, Body, Get } from '@nestjs/common';

//My imports
import { User } from 'src/database/entities/user';
import { UserService } from "./user.service";

@Controller('/api/create-user')
export class UserController {

    //Init
    constructor(private userService : UserService){

    }

    @Post()
    createUser(@Body() user : User){
        console.log("Body: " + JSON.stringify(user));
        this.userService.createUser(user);
    }

    @Post('/name')
    sendName(@Body() name : string){
        console.log("Body: " + JSON.stringify(name));
        this.userService.sendThisName("name");
    }

    @Get('/get-all-users')
    getUsers(){
        this.userService.getAllUsers();
    }





}
