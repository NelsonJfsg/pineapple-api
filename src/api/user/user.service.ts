//React
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


//My imports
import { User } from 'src/database/entities/user';
import { User as userEntity} from 'src/database/entities/user';

@Injectable()
export class UserService {

    //Init
    constructor(
        @InjectRepository(userEntity)
        private userEntity : Repository<userEntity>
    ){

    }

    async createUser(user : User){
        console.log("user to db: " + user.email);
        return await this.userEntity.insert(user);
    }

    sendThisName(name : string){
        console.log("this name: " + JSON.stringify(name));

    }

    getAllUsers(){
        console.log("This shit");
        console.log(this.userEntity.find().then(response => {
            console.log(response); // Logs the response
             return response;
        }));
    }


 }
