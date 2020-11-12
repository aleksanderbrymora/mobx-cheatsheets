import { Field, InputType } from 'type-graphql';
import { Word } from '../../entities/Word';

@InputType()
export class WordInput implements Partial<Word> {
	@Field()
	name: string;
}
