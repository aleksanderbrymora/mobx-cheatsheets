import { Word } from 'src/entities/Word';
import { Field, InputType } from 'type-graphql';

@InputType()
export class WordInput implements Partial<Word> {
	@Field()
	name: string;
}
