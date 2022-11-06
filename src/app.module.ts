import { UserModule } from './api/user/user.module';
import { UserController } from './api/user/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    UserModule,],
  controllers: [
    UserController, AppController],
  providers: [AppService],
})
export class AppModule { }
