import { PinataService } from './pinata.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pinata } from 'src/database/entities/pinata';
import { PinataController } from './pinata.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Pinata]),
    ],
    controllers: [
        PinataController,
    ],
    providers: [
        PinataService,
    ],
    exports: [
        TypeOrmModule
    ],
})
export class PinataModule { }
