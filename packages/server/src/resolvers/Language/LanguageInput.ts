import { Language } from 'src/entities/Language';
import { Field, InputType } from 'type-graphql';

@InputType()
export class LanguageInput implements Partial<Language> {
	@Field()
	name: string;

	@Field({ nullable: true })
	flag: string;
}
