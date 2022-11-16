import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pinata {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    description : string;

    @Column('decimal', {precision : 5, scale : 2})
    price : number;

    @Column()
    image : string;

}