import { ConsoleLogger } from '@nestjs/common';

import { LoggerPort } from './logger.port';

export class Logger extends ConsoleLogger implements LoggerPort {}
