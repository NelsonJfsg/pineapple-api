import { IsAlpha, IsEmail, IsNumber } from "class-validator";


export class UserCredentialModel{


    //Credential
    @IsEmail()
    email : string;

    //No restrictions
    password : string;

}