export interface User{

    //Atributes

    //Primary key
    id : number;
    role : number; //Foreign key

    //User information
    name : string;
    middleName : string;
    lastName : string;

    //Credential
    email : string;
    password : string;

}