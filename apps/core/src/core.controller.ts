import { Controller, Get } from '@nestjs/common';

import { CoreService } from './core.service';

@Controller()
export class CoreController {
  constructor(private readonly coreService: CoreService) {}

  @Get()
  getHello(): any {
    return this.coreService.getHello();
  }
}
