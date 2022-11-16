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
    constructor(@InjectRepository(userEntity) private userEntity : Repository<userEntity>){}

    createUser(user : User){
        
        return this.userEntity.insert(user);

    }

    sendThisName(name : string){
        console.log("this name: " + JSON.stringify(name));

    }

    getAllUsers(){
        console.log(this.userEntity.find().then(response => {
            console.log(response); // Logs the response
             return response;
        }));
    }

    //Check if the email recived is in db.
    userExists(user : User) : boolean { 

        //Var
        let emailToCheck = user.email;
        let userExist : boolean;

        console.log("Email: " + emailToCheck);

        //Query
        var query = this.userEntity.find({

            select : {
                email : true,
            },
            where : {
                email : emailToCheck, 
            }

        });

        //Execute and validate
        query
        .then((res) => {
            if(res.length != 0){
                console.log("Existen registros");
                
                return userExist;
            }else{

                console.log("No existen registros")
                
                this.createUser(user);
                return userExist;
            }
        });
        return userExist;
    }

 }
