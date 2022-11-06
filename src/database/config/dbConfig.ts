//React
import { TypeOrmModule } from "@nestjs/typeorm";

//My imports
import { User } from "src/database/entities/user";

export const Connection = TypeOrmModule.forRoot({

    type : 'mysql',
    host : "localhost",
    port : 3306,
    username : "root",
    password : "",
    database : "pineappledb",
    entities : [User],
    synchronize : true,



});