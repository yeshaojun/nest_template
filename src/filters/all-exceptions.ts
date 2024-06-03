import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { LogService } from 'src/log/log.service';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private log: LogService) {}
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let message = '服务器出错喽，请联系开发人员';
    if (exception instanceof HttpException) {
      const exceptionResponse = exception.getResponse();
      if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse.hasOwnProperty('message')
      ) {
        const validationErrors = exceptionResponse['message'];
        if (Array.isArray(validationErrors)) {
          message = validationErrors.join(', ');
        } else if (typeof validationErrors === 'string') {
          message = validationErrors;
        }
      }
    }
    this.log.error(message, request.url, this);
    response.json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      msg: message,
    });
  }
}
