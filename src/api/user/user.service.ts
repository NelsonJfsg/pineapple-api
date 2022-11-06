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
        return await this.userEntity.insert(user);
    }



 }
