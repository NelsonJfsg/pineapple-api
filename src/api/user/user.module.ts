//React
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

//My imports
import { User } from "src/database/entities/user";
import { UserService } from './user.service';
import { UserController } from "./user.controller";


@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
    exports: [TypeOrmModule],
})
export class UserModule { }
