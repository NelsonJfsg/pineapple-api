//
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/database/entities/role';
import { User } from 'src/database/entities/user';

@Module({
    imports: [TypeOrmModule.forFeature([Role, User])],
    controllers: [RoleController],
    providers: [RoleService,],
})
export class RoleModule { }
