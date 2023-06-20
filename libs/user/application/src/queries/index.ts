import { GetUserQueryHandler } from '@lib/user/application/queries/get-user/get-user.query-handler';
import { Provider } from '@nestjs/common';

export * from './get-user/get-user.query';
export const queries: Provider[] = [GetUserQueryHandler];
