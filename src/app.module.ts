//React
import { Module } from '@nestjs/common';

//My imports.
import { UserModule } from './api/user/user.module'; 
import { RoleModule } from './api/role/role.module';
import { PinataModule } from './api/pinata/pinata.module';
import { Connection } from './database/config/dbConfig';

@Module({
  imports: [
    UserModule,
    RoleModule, 
    PinataModule, 
    Connection, 
  ],
  controllers: [
    //Controllers
  ],
  providers: [
    //Providers
  ],
})
export class AppModule { }
