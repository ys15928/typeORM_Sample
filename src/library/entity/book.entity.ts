import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { AuthorEntity } from './author.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('book')
export class BookEntity {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '도서 id' })
    book_id: number;

    @Column({ nullable: false, unique: true })
    @ApiProperty({ description: '국제표준도서번호' })
    isbn: string;

    @Column({ nullable: false })
    @ApiProperty({ description: '도서 제목' })
    title: string;

    @Column({ nullable: false })
    @ApiProperty({ description: '작가 id' })
    auth_uniqe: string;

    @ManyToOne((type) => AuthorEntity, {
        cascade: true
    })
    @JoinColumn({
        name: 'auth_unique',
        referencedColumnName: 'author_uniqueNum'
    })
    author!: AuthorEntity
}
