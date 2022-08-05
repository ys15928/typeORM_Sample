import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorEntity } from './entity/author.entity';  // 작가 엔티티 파일의 class import
import { BookEntity } from './entity/book.entity';  // 도서  엔티티 파일의 class import
import { AppDataSource } from './datasource';

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

    /*updateBook = async (req: Request, res: Response) => {
        const userRepo = AppDataSource.getRepository(BookEntity);

        await userRepo
            .createQueryBuilder()
            .update(BookEntity)
            .set(req.body)
            .where({ firstName: req.params.firstName })
            .execute()
            .then((data) => {
                res.json(data);
                console.log("Update User: ", data);
            })
            .catch((err) => console.log(err));
    };*/

    async remove(book_id: number): Promise<void> {
        await this.BookRepository.delete(book_id);
    }
}
