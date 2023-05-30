import { Module } from '@nestjs/common';
import { KernelService } from './kernel.service';

@Module({
  providers: [KernelService],
  exports: [KernelService],
})
export class KernelModule {}
