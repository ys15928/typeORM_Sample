import { NestFactory } from '@nestjs/core';
import { LibraryModule } from './library/library.module';
import { setupSwagger } from './util/swagger';

async function bootstrap() {
  const app = await NestFactory.create(LibraryModule);

  setupSwagger(app);

  await app.listen(3000);
}
bootstrap();
