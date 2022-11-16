import { Pinata } from "./Pinata";

export interface Inventory{

    //Atributes
    id : number; //Primary key
    cantidad : number;
    pinataId : number; //Foreign key

}