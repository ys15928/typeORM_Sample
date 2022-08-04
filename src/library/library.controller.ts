import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { LibraryService } from './library.service';
import { AuthorEntity } from './entity/author.entity';
import { BookEntity } from './entity/book.entity';

@Controller('library')
export class LibraryController {
    constructor(private libraryService: LibraryService) { };

    @Get('getAuthor')
    getAllAuthors(): Promise<AuthorEntity[]> {
        return this.libraryService.findAuthor();
    }

    @Get('getAuthor:author_id')
    getOneAuthor(@Param('author_id') id: number): Promise<AuthorEntity> {
        return this.libraryService.findOneAuthor(id);
    }

    @Post('createAuthor')
    createNewAuthor(@Body() author: AuthorEntity) {
        return this.libraryService.newAuthor(author);
    }

    @Get('getBook')
    getAllBooks(): Promise<BookEntity[]> {
        return this.libraryService.findBook();
    }

    @Get('getBook:book_id')
    getOneBook(@Param('book_id') id: number): Promise<BookEntity> {
        return this.libraryService.findOneBook(id);
    }

    @Post('createBook')
    createNewBook(@Body() book: BookEntity) {
        return this.libraryService.newBook(book);
    }

    @Patch('updateBook:book_id')
    update(@Param('book_id') id: number, @Body() book: BookEntity) {
        this.libraryService.update(id, book);
        return `This action updates a #${id} cat`;
    }
}
