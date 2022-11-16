import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne} from 'typeorm';

@Entity()
export class Role{

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
}