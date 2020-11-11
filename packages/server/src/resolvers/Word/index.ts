import { Word } from '../../entities/Word';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { WordInput } from './WordInput';

@Resolver(Word)
export class WordResolver {
	@Query((_returns) => Word, { nullable: true })
	async word(@Arg('id') id: string): Promise<Word | undefined> {
		const word = await Word.findOne(id);
		return word;
	}

	@Query((_returns) => [Word], { nullable: true })
	async words(): Promise<Word[]> {
		return await Word.find();
	}

	@Mutation((_returns) => Word)
	async addWord(@Arg('options') options: WordInput): Promise<Word> {
		return await Word.create(options).save();
	}
}
