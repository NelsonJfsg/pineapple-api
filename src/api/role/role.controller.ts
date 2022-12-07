//TypeOrm
import { Body, Controller, Post } from '@nestjs/common';
import { RoleModel } from 'src/models/roleModel';

//Entities

//Service
import { RoleService } from "./role.service";

@Controller('/api/role')
export class RoleController {

    constructor(private roleService : RoleService){

    }

    @Post('/create-role')
    createRole(@Body() role : RoleModel){
        return this.roleService.createRole(role);
    }
    
}
