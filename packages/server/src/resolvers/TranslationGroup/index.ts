import axios from 'axios';
import { Arg, Query, Resolver } from 'type-graphql';
import { TranslationGroup } from '../../entities/TranslationGroup';
import { Word } from '../../entities/Word';
import { parse } from 'node-html-parser';
import { Language } from '../../entities/Language';
import { uniq } from '@cheats/utils';

@Resolver(TranslationGroup)
export class TranslationGroupResolver {
	@Query((_returns) => [TranslationGroup], { nullable: true })
	async getQuizletTranslationGroups(
		@Arg('url') url: string,
	): Promise<TranslationGroup[]> {
		const { data } = await axios.get(url);

		const root = parse(data);
		const pairs = root.querySelectorAll('.SetPageTerms-term');
		const wordPairs = pairs.map((p) => {
			const [from, to] = p.querySelectorAll('a');
			return [from.innerText, to.innerText];
		});

		const [fromLangName, toLangName] = uniq(
			root.innerHTML.match(/lang-(\w{2,3})/gi)!,
		).map((l) => l.replace('lang-', ''));

		const fromLang = await Language.create({ name: fromLangName }).save();
		const toLang = await Language.create({ name: toLangName }).save();

		const trGroups = await Promise.all(
			wordPairs.map(([from, to]) =>
				TranslationGroup.create({
					words: [
						Word.create({
							name: from,
							language: fromLang,
						}),
						Word.create({
							name: to,
							language: toLang,
						}),
					],
				}).save(),
			),
		);
		return trGroups;
	}
}
