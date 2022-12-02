//React
import { TypeOrmModule } from "@nestjs/typeorm";

//My imports
import { UserEntity } from "src/database/entities/user";
import { Pinata } from "../entities/pinata";
import { RoleEntity } from "../entities/role";

export const Connection = TypeOrmModule.forRoot({

    type : 'mysql',
    host : "localhost",
    port : 3306,
    username : "root",
    password : "",
    database : "pineappledb",
    entities : [UserEntity, RoleEntity, Pinata],
    synchronize : true,



});