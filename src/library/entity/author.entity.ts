import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('author')
export class AuthorEntity {
    @PrimaryGeneratedColumn()
    author_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;
}