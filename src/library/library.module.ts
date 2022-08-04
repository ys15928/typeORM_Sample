import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';
import { AuthorEntity } from './entity/author.entity';  // 작가 엔티티 파일의 class import
import { BookEntity } from './entity/book.entity';  // 도서 엔티티 파일의 class import

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity]), TypeOrmModule.forFeature([BookEntity])],
  exports: [TypeOrmModule],
  controllers: [LibraryController],
  providers: [LibraryService]
})
export class LibraryModule {}
