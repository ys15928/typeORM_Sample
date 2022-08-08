import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { LibraryService } from './library.service';
import { AuthorEntity } from './entity/author.entity';
import { BookEntity } from './entity/book.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('library')
export class LibraryController {
    constructor(private libraryService: LibraryService) { };

    @ApiTags('작가 API')
    @Get('getAuthor')
    @ApiOperation({ summary: '작가 전체 조회 API', description: '작가를 전체 조회합니다.' })
    getAllAuthors(): Promise<AuthorEntity[]> {
        return this.libraryService.findAuthor();
    }

    @ApiTags('작가 API')
    @Get('getAuthor:author_id')
    @ApiOperation({ summary: '특정 작가 조회 API', description: '작가id로 특정 작가 정보를 조회합니다.' })
    getOneAuthor(@Param('author_id') id: number): Promise<AuthorEntity> {
        return this.libraryService.findOneAuthor(id);
    }

    @ApiTags('작가 API')
    @Post('createAuthor')
    @ApiOperation({ summary: '작가 등록  API', description: '작가를 등록합니다.' })
    createNewAuthor(@Body() author: AuthorEntity) {
        return this.libraryService.newAuthor(author);
    }

    // ============================= 도서 APi 시작 =============================
    @ApiTags('도서 API')
    @Get('getBook')
    @ApiOperation({ summary: '도서 전체 조회 API', description: '도서를 전체 조회합니다.' })
    getAllBooks(): Promise<BookEntity[]> {
        return this.libraryService.findBook();
    }

    @ApiTags('도서 API')
    @Get('getBook:book_id')
    @ApiOperation({ summary: '특정 도서 조회 API', description: '도서id로 특정 도서 정보를 조회합니다.' })
    getOneBook(@Param('book_id') id: number): Promise<BookEntity> {
        return this.libraryService.findOneBook(id);
    }

    @ApiTags('도서 API')
    @Post('createBook')
    @ApiOperation({ summary: '도서 등록  API', description: '도서를 등록합니다.' })
    createNewBook(@Body() book: BookEntity) {
        return this.libraryService.newBook(book);
    }

    @ApiTags('도서 API')
    @Patch('updateBook:book_id')
    @ApiOperation({ summary: '도서 정보 수정  API', description: '도서 정보를 수정합니다.' })
    update(@Param('book_id') id: number, @Body() book: BookEntity) {
        return this.libraryService.updateBook(id, book);
    }

    @ApiTags('도서 API')
    @Delete('deleteBook:book_id')
    remove(@Param('book_id') id: number) {
        return this.libraryService.remove(id);
    }
}
