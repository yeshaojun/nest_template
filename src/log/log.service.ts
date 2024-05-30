import { Injectable, Scope } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as winston from 'winston';

import * as DailyRotateFile from 'winston-daily-rotate-file';
import { LOG_CONTEXT } from './log-context.decorator';

@Injectable({ scope: Scope.TRANSIENT })
export class LogService {
  private readonly logger: winston.Logger;
  constructor(private readonly reflector: Reflector) {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        new DailyRotateFile({
          dirname: 'logs',
          filename: 'application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '10m',
          maxFiles: '14d',
        }),
      ],
    });
  }

  private getContext(target: object): string {
    const context = this.reflector.get<string>(LOG_CONTEXT, target.constructor);
    return context || target.constructor.name || 'Application';
  }

  log(message: string, context?: object) {
    const autoContext = this.getContext(context);
    this.logger.info({ message, context: autoContext });
  }

  error(message: string, trace: string, context?: object) {
    const autoContext = this.getContext(context);
    this.logger.error({ message, trace, context: autoContext });
  }

  warn(message: string, context?: object) {
    const autoContext = this.getContext(context);
    this.logger.warn({ message, context: autoContext });
  }
}
