import "reflect-metadata";
import { DataSource } from "typeorm";
import { AuthorEntity } from './entity/author.entity';  // 작가 엔티티 파일의 class import
import { BookEntity } from './entity/book.entity';  // 도서  엔티티 파일의 class import

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "hDiM9@UpcXykWLT3",
    database: "type",
    synchronize: true,
    logging: false,
    entities: [AuthorEntity, BookEntity],

});