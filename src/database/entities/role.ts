import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';

@Entity()
export class RoleEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
}