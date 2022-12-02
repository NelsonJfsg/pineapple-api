import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from 'typeorm';
import { RoleEntity } from './../entities/role';

@Entity()
export class UserEntity{

    //Keys
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne( (role) => RoleEntity) //Foreign
    role : RoleEntity;

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