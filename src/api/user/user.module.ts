//React
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

//My imports
import { User } from "src/database/entities/user";
import { UserService } from './user.service';
import { UserController } from "./user.controller";
import { Role } from 'src/database/entities/role';


@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    controllers: [UserController],
    providers: [UserService],
    exports: [TypeOrmModule],
})
export class UserModule { }
