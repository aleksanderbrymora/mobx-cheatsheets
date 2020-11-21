import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Quizlet {
	@Field({ nullable: true })
	title: string;

	@Field()
	fromLanguage: string;

	@Field()
	toLanguage: string;

	@Field((_type) => [WordPair], { defaultValue: [] })
	words: WordPair[];
}

@ObjectType()
export class WordPair {
	@Field()
	from: string;

	@Field()
	to: string;
}
