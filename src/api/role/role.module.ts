//
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from 'src/database/entities/role';
import { UserEntity } from 'src/database/entities/user';

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity, UserEntity])],
    controllers: [RoleController],
    providers: [RoleService,],
})
export class RoleModule { }
