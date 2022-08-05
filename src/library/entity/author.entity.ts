import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { BookEntity } from './book.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('author')
export class AuthorEntity {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '작가 id' })
    author_id: number;

    @Column()
    @ApiProperty({ description: '작가 성씨' })
    first_name: string;

    @Column()
    @ApiProperty({ description: '작가 이름' })
    last_name: string;

    //@OneToMany(() => BookEntity, (book) => book.auth_id)
    //books!: BookEntity[];

    @OneToMany(() => BookEntity, (book) => book.author)
    books: BookEntity[]
}