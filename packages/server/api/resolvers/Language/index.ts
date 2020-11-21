import { Language } from '../../entities/Language';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { LanguageInput } from './LanguageInput';

@Resolver(Language)
export class LanguageResolver {
	@Query((_returns) => Language, { nullable: true })
	async language(@Arg('id') id: string): Promise<Language | undefined> {
		const language = await Language.findOne(id);
		return language;
	}

	@Query((_returns) => [Language], { nullable: true })
	async languages(): Promise<Language[]> {
		return await Language.find();
	}

	@Mutation((_returns) => Language)
	async addLanguage(@Arg('options') options: LanguageInput): Promise<Language> {
		return await Language.create(options).save();
	}
}
