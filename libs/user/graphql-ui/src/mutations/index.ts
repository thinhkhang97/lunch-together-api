import { Provider } from '@nestjs/common';

import { Login } from './login';
import { Register } from './register';

export * from './register';

export const mutations: Provider[] = [Register, Login];
