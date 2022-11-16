//React
import { TypeOrmModule } from "@nestjs/typeorm";

//My imports
import { User } from "src/database/entities/user";
import { Pinata } from "../entities/pinata";
import { Role } from "../entities/role";

export const Connection = TypeOrmModule.forRoot({

    type : 'mysql',
    host : "localhost",
    port : 3306,
    username : "root",
    password : "",
    database : "pineappledb",
    entities : [User, Role, Pinata],
    synchronize : true,



});