import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';

@Entity('author')
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    @ApiProperty({ description: '작가 id' })
    author_id: number;

    @Column()
    @ApiProperty({ description: '작가 성씨' })
    first_name: string;

    @Column()
    @ApiProperty({ description: '작가 이름' })
    last_name: string;
}