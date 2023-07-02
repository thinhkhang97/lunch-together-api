import { Provider } from '@nestjs/common';

import { UserQuery } from './user.query';

export * from './user.query';

export const queries: Provider[] = [UserQuery];
