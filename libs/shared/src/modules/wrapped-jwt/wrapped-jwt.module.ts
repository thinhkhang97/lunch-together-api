import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtModuleAsyncOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

export class WrappedJwtModule {
  public static registerAsync(options?: JwtModuleAsyncOptions) {
    return JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (_configService: ConfigService) => ({
        ...options,
        secret: _configService.get<string>('KEY'),
      }),
      inject: [ConfigService],
    });
  }
}
