import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from './entity/author.entity';  // 작가 엔티티 파일의 class import
import { BookEntity } from './entity/book.entity';  // 도서  엔티티 파일의 class import
import { getConnection } from "typeorm"; // 버전에 따라 안됨

@Injectable()
export class LibraryService {
    constructor(
        @InjectRepository(AuthorEntity)
        private AuthorRepository: Repository<AuthorEntity>,
        @InjectRepository(BookEntity)
        private BookRepository: Repository<BookEntity>,
    ) { }

    findAuthor(): Promise<AuthorEntity[]> {
        return this.AuthorRepository.find();
    }

    findOneAuthor(author_id: number): Promise<AuthorEntity> {
        return this.AuthorRepository.findOneBy({ author_id });
    }

    async newAuthor(author: AuthorEntity): Promise<void> {
        await this.AuthorRepository.save(author);
    }

    findBook(): Promise<BookEntity[]> {
        return this.BookRepository.find();
    }

    findOneBook(book_id: number): Promise<BookEntity> {
        return this.BookRepository.findOneBy({ book_id });
    }

    async newBook(book: BookEntity): Promise<void> {
        await this.BookRepository.save(book);
    }

    async update(book_id: number, book: BookEntity): Promise<void> {
        const existCat = await this.BookRepository.findOneBy({ book_id });
        if (existCat) {
            await getConnection()
                .createQueryBuilder()
                .update(BookEntity)
                .set({
                    isbn: book.isbn,
                    title: book.title,
                    auth_id: book.auth_id
                })
                .where("book_id = :book_id", { book_id })
                .execute();
        }
    }
}
