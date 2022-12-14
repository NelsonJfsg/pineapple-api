import { IsString,IsAlpha, IsNumber, IsAlphanumeric } from "@nestjs/class-validator";
import { isAlpha } from "class-validator/types/decorator/decorators";

export class Pinata {

    //Atributes
    id : number; //Primary key

    @IsAlpha()
    name : string;

    description : string;

    @IsNumber()
    price : number;
    
    image : string;

}