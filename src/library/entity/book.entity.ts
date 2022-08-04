import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('book')
export class BookEntity {
    @PrimaryGeneratedColumn()
    book_id: number;

    @Column()
    isbn: string;

    @Column()
    title: string;

    @Column()
    auth_id: string;
}