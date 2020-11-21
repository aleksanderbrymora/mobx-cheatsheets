import { Book } from 'src/entities/Book';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class BookInput implements Partial<Book> {
	@Field((_type) => [String], { nullable: true })
	authors: string[];

	@Field()
	name: string;

	@Field((_type) => Int, { nullable: true })
	published: number;

	@Field({ nullable: true })
	publisher: string;
}
