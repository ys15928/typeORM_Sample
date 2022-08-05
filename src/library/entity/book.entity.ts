import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity('book')
export class BookEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: '도서_id' })
    book_id: number;

    @Column()
    @ApiProperty({ description: '국제표준도서번호' })
    isbn: string;

    @Column()
    @ApiProperty({ description: '도서 제목' })
    title: string;

    @Column()
    @ApiProperty({ description: '작가 id' })
    auth_id: number;
}