import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Pinata } from 'src/models/Pinata';
import { PinataService } from './pinata.service';

@Controller('/product/pinata')
export class PinataController {

    constructor(private pinataService : PinataService){

    }


    @Post('/create-pinata')
    createPinata(@Body() pinata : Pinata){
        return this.pinataService.createPinata(pinata);
    }

    @Delete('/delete/:id')
    deletePinata(@Param('id') id : number){
        console.log("Controller : " + id);
        return this.pinataService.deletePinata(id);
    }

    @Get('/get-all')
    getAllPinatas(){
        return this.pinataService.getAllPinatas();
    }


    @Put('/edit/:id')
    editPinata(@Param('id') id : number){
        //return this.pinataService.editPinata(id);
    }

 }
