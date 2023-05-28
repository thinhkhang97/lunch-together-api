import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './graphql/hello-world.resolver';

@Module({
  imports: [HelloWorldResolver],
})
export class AuthModule {}
