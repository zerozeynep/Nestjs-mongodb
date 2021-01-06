import { Injectable } from '@nestjs/common';
import * as mongo from 'mongodb'
import { InjectDb, MongoModule } from 'nest-mongodb'
import { SomeString } from './someString.model'

var latestId = ""


@Injectable()
export class AppService {
  private readonly collection : mongo.Collection

  constructor(
    @InjectDb()
    private readonly db: mongo.Db ){
      this.collection = this.db.collection('strings')
    }

  async getHello() {
    const greet = await this.collection.find({_id : latestId})
    return greet;
  }
   
  async setHello(data: SomeString) {
    const result = await this.collection.insertOne({data})
    if (result.insertedCount !== 1 || result.ops.length < 1) {
      throw new Error('Insert failed!')
    }

    latestId = result.insertedId

    return latestId
    } 
}
