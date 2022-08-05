import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { AuthorEntity } from './author.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('book')
export class BookEntity {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '도서 id' })
    book_id: number;

    @Column()
    @ApiProperty({ description: '국제표준도서번호' })
    isbn: string;

    @Column()
    @ApiProperty({ description: '도서 제목' })
    title: string;

    /*@Column()
    @ApiProperty({ description: '작가 id' })
    auth_id: number;
    */
    @Column()
    @ManyToOne(() => AuthorEntity, (author) => author.books)
    author: AuthorEntity

}