//React
import { Controller, Post, Body, Get, Redirect, Res } from '@nestjs/common';

//My imports
import { UserEntity } from 'src/database/entities/user';
import { UserModel } from 'src/models/userModel';
import { BeforeInsert } from 'typeorm';
import { UserService } from "./user.service";

@Controller('/api/auth/user')
export class UserController {

    //Init
    constructor(private userService : UserService){

    }
    
    //Sign Up
    @Post('/create-user')
    createUser(@Body() user : UserModel){
        
        return this.userService.createUser(user);
    }

    @Post('/user-exists')
    checkIfUserExists(@Body() clientEmail : UserModel){

        const {email} = clientEmail;
        
        return this.userService.userExists(email);
    }
    
    @Post('/validate-user')
    validateCredentials(@Body() user : UserModel){
        return this.userService.validateCrendentials(user.email, user.password);
    }

    @Post('/verify-credential')
    //@Redirect('http://localhost:5173/login', 302)
    getUsers(@Body() user : UserEntity){
        //return this.userService.userExists(user);
    }
    //
    
    @Post('/v')
    checkIfUserExist(@Body() user : UserEntity){
        
      

    }
    
    
    //

}
