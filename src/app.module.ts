import { PinataModule } from './api/pinata/pinata.module';
import { PinataController } from './api/pinata/pinata.controller';
import { RoleModule } from './api/role/role.module';
import { RoleController } from './api/role/role.controller';
//React
import { Module } from '@nestjs/common';

//My imports.
import { UserModule } from './api/user/user.module';
import { UserController } from './api/user/user.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './api/user/user.service';
import { Connection } from './database/config/dbConfig';
import { RoleService } from './api/role/role.service';
import { PinataService } from './api/pinata/pinata.service';

@Module({
  imports: [
    PinataModule, 
    RoleModule, 
    Connection, 
    UserModule,
  ],
  controllers: [
    PinataController, 
    RoleController, 
    UserController, 
    AppController
  ],
  providers: [
    PinataService,
    RoleService, 
    AppService, 
    UserService
  ],
})
export class AppModule { }
