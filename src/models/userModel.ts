import { IsAlpha, IsEmail, IsNumber } from "class-validator";


export class UserModel{

    //Atributes

    //Primary key
    id : number;

    @IsNumber()
    role : number; //Foreign key

    //User information
    @IsAlpha()
    name : string;
    
    @IsAlpha()
    middleName : string;
    
    @IsAlpha()
    lastName : string;

    //Credential
    @IsEmail()
    email : string;

    //No restrictions
    password : string;

}