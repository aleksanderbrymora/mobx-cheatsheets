import axios from 'axios';
import { parse } from 'node-html-parser';
import { Arg, Query, Resolver } from 'type-graphql';
import { Quizlet, WordPair } from '../../entities/Quizlet';

@Resolver(Quizlet)
export class QuizletResolver {
	@Query((_returns) => Quizlet, { nullable: true })
	async quizlet(@Arg('url') url: string): Promise<Quizlet> {
		const { data } = await axios.get(url);

		const Q: Quizlet = {
			fromLanguage: '',
			toLanguage: '',
			title: '',
			words: [],
		};

		// Getting the words
		const root = parse(data);
		const pairs = root.querySelectorAll('.SetPageTerms-term');
		pairs.forEach((p) => {
			const [from, to] = p.querySelectorAll('a');
			const wordPair: WordPair = {
				from: from.innerText,
				to: to.innerText,
			};
			Q.words.push(wordPair);
		});

		//Getting the languages
		const [fromLang, toLang] = pairs[0]
			.querySelectorAll('span')
			.map((span) =>
				span.classNames.find((c) => c.includes('lang'))!.replace('lang-', ''),
			);

		Q.fromLanguage = fromLang;
		Q.toLanguage = toLang;

		// Getting the title
		Q.title = root.querySelector('h1').innerText;

		return Q;
	}
}
