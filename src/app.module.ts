//React
import { Module } from '@nestjs/common';

//My imports.
import { UserModule } from './api/user/user.module';
import { UserController } from './api/user/user.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './api/user/user.service';
import { Connection } from './database/config/dbConfig';

@Module({
  imports: [Connection, UserModule,],
  controllers: [UserController, AppController],
  providers: [AppService, UserService],
})
export class AppModule { }
