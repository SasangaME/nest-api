import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { BuildController } from './controllers/build.controller';
import { AppService } from './services/app.service';
import { BuildService } from './services/build.service';

@Module({
  imports: [],
  controllers: [AppController, BuildController],
  providers: [AppService, BuildService],
})
export class AppModule { }
