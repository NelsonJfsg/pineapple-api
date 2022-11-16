//React
import { Controller, Post, Body, Get, Redirect, Res } from '@nestjs/common';

//My imports
import { User } from 'src/database/entities/user';
import { UserService } from "./user.service";

@Controller('/api/auth')
export class UserController {

    //Init
    constructor(private userService : UserService){

    }

    //Login
    @Post('/name')
    sendName(@Body() name : string){
        console.log("Body: " + JSON.stringify(name));
        this.userService.sendThisName("name");
    }
    
    @Post('/verify-credential')
    //@Redirect('http://localhost:5173/login', 302)
    getUsers(@Body() user : User){
        //return this.userService.userExists(user);
    }
    //
    
    //Sign Up
    @Post('/create-user')
    createUser(@Body() user : User){
        console.log("Body: " + JSON.stringify(user));
        return this.userService.createUser(user);
    }
    
    @Post('/v')
    checkIfUserExist(@Body() user : User){
        
        console.log("CONTROLLER - CHECKIFUSEREXISTS");
        this.userService.userExists(user);

    }
    
    
    //

}
