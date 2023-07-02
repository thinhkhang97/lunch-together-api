import { UserGraphqlUiModule } from '@lib/user/graphql-ui';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/core/src/.env',
      validationSchema: Joi.object({
        KEY: Joi.string().required(),
        DB: Joi.string().required(),
      }),
    }),
    UserGraphqlUiModule,
  ],
})
export class CoreModule {}
