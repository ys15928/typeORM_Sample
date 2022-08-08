import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { BookEntity } from './book.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('author')
export class AuthorEntity {
    @PrimaryGeneratedColumn('increment')
    @ApiProperty({ description: '작가 id' })
    author_id: number;

    @Column({ nullable: false })
    @ApiProperty({ description: '작가 성씨' })
    first_name: string;

    @Column({ nullable: false })
    @ApiProperty({ description: '작가 이름' })
    last_name: string;

    @Column({ nullable: false, unique: true })
    @ApiProperty({ description: '작가 고유번호' })
    author_uniqueNum: string;

    @OneToMany((type) => BookEntity, (book) => book.auth_id)
    books!: BookEntity[]
}