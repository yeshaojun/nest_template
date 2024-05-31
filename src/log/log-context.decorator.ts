// log-context.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const LOG_CONTEXT = 'LOG_CONTEXT';

export const LogContext = (context: string) =>
  SetMetadata(LOG_CONTEXT, context);
