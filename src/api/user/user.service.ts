//React
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


//My imports
import { UserEntity } from 'src/database/entities/user';
import { UserEntity as userEntity} from 'src/database/entities/user';
import { UserModel } from 'src/models/userModel';
import { response } from 'express';
import { exit } from 'process';


@Injectable()
export class UserService {

    //Init
    constructor(@InjectRepository(userEntity) private userEntity : Repository<UserModel>){

    }

    //This method can create an user with an object of type userModel
    async createUser(user : UserModel){
        
        if(await this.userExists(user.email)){
            return "usuario existe, imposible crear usuario";
        }else{
            console.log("Usuario no existe");
            return await this.userEntity.insert(user);
        }



    }

    
    //Check if the email recived is in db.
    async userExists(clientEmail : string) : Promise<boolean> { 
        
        let operation = await this.userEntity.find({
            select : ["name"],
            where : {email : clientEmail}
        })

        if(operation.length != 0){
            return true;
        }
        
    }

    async validateCrendentials(clientEmail : string, clientPasssord : string) : Promise<Boolean>{
        
        return await this.userEntity.find({
            select : ['email', 'password'],
            where : {email : clientEmail}
        })
        .then(response => {
            
            console.log(response);

            const [user] = response;

            if(user.email == clientEmail && user.password == clientPasssord){
                console.log("True");
                return true;
            }else{
                console.log("false");
                return false;
            }
        }).catch(err => {console.log("err: " + err); return false});


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

    deleteUser(){

    }

    encryptPassword(password : string){
       
    }

 }
