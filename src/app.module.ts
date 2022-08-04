import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibraryModule } from './library/library.module'
import { TypeOrmModule } from '@nestjs/typeorm';  // typeorm 모듈 import
import { AuthorEntity } from './library/entity/author.entity';  // 작가 엔티티 파일의 class import
import { BookEntity } from './library/entity/book.entity';  // 도서  엔티티 파일의 class import

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'hDiM9@UpcXykWLT3',
      database: 'typelibrarydb',
      entities: [AuthorEntity, BookEntity],
      synchronize: true,
    }),
    LibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
  
export class AppModule {}
