import { Body, Controller, Post } from '@nestjs/common';
import { Pinata } from 'src/database/entities/Pinata';
import { PinataService } from './pinata.service';

@Controller('/product/pinata')
export class PinataController {

    constructor(private pinataService : PinataService){

    }


    @Post('/create')
    createPinata(@Body() pinata : Pinata){
        this.pinataService.createPinata(pinata);
    }


 }
