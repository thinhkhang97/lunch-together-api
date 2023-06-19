import { GetUserQueryHandler } from '@lib/user/application/queries';
import { Provider } from '@nestjs/common';

export * from './queries';

export const queries: Provider[] = [GetUserQueryHandler];
