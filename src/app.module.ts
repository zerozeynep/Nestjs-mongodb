import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from 'nest-mongodb'


@Module({
  imports: [MongoModule.forRoot('mongodb://127.0.0.1:27017', 'mongodb',{ useUnifiedTopology: true }),
            MongoModule.forFeature(['strings'])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
