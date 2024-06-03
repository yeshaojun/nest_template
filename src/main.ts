import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AllExceptionsFilter } from './filters/all-exceptions';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import * as bodyParser from 'body-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 日志系统
  // 全局拦截
  // app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  await app.listen(3000);
}
bootstrap();
