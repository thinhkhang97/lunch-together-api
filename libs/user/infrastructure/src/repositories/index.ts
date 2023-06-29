import { UserRepository } from '@lib/user/domain/repositories';
import { Provider } from '@nestjs/common';

import { UserPrismaRepository } from './user.prisma-repository';

export const repositories: Provider[] = [
  {
    provide: UserRepository,
    useClass: UserPrismaRepository,
  },
];
