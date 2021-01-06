import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from "@nestjs/microservices"


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('AppController', 'SetHello')

  async setHello(data) {
    return { helloResponse: await this.appService.setHello(data.data)}
  }

  @GrpcMethod('AppController', 'GetHello')

  async getHello() {
    return { helloResponse : await this.appService.getHello()}
  }
}
