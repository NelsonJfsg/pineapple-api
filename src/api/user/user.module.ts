//React
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";

//My imports
import { UserEntity } from "src/database/entities/user";
import { UserService } from './user.service';
import { UserController } from "./user.controller";
import { RoleEntity } from 'src/database/entities/role';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, RoleEntity])],
    controllers: [UserController],
    providers: [UserService],
    exports: [TypeOrmModule],
})
export class UserModule { }
