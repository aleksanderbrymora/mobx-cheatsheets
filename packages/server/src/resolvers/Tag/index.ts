import { Book } from '../../entities/Book';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { BookInput } from './BookInput';

@Resolver(Book)
export class BookResolver {
	@Query((_returns) => Book, { nullable: true })
	async book(@Arg('id') id: string): Promise<Book | undefined> {
		const book = await Book.findOne(id);
		return book;
	}

	@Query((_returns) => [Book], { nullable: true })
	async books(): Promise<Book[]> {
		return await Book.find();
	}

	@Mutation((_returns) => Book)
	async addBook(@Arg('options') options: BookInput): Promise<Book> {
		return await Book.create(options).save();
	}
}
