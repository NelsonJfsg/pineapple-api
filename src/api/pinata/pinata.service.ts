import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pinata } from 'src/database/entities/pinata';
import { Pinata as pinataEntity } from 'src/database/entities/pinata';

@Injectable()
export class PinataService {

    constructor( @InjectRepository(pinataEntity) private pinataEntity : Repository<pinataEntity>){

    }


    createPinata(pinata : Pinata){
        return this.pinataEntity.insert(pinata);
    }



 }
