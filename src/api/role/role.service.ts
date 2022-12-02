import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleModel } from 'src/models/roleModel';
import { Repository } from 'typeorm';

import { RoleEntity as roleEntity } from "../../database/entities/role";

@Injectable()
export class RoleService { 

    //init
    constructor(@InjectRepository(roleEntity) private roleEntity : Repository<RoleModel>){

    }

    async createRole(role : RoleModel){
        this.roleEntity.insert(role);
    }

}
