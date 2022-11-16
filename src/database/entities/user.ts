import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm';
import { Role } from './../entities/role';

@Entity()
export class User{

    //Keys
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( (type) => Role) //Foreign
    role : Role[];

    //User infromation
    @Column()
    name : string;
    
    @Column()
    lastName : string;

    @Column()
    middleName : string;
    
    //Credential
    @Column()
    email : string;
    
    @Column()
    password : string;
    
}