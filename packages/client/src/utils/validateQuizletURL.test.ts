import { isValidQuizletURL } from './validateQuizletURL';

it('validates the quizlet url', () => {
	const url = 'https://quizlet.com/pl/221526392/longman-unit-8-flash-cards/';
	expect(isValidQuizletURL(url)).toStrictEqual({
		valid: true,
		title: 'longman-unit-8-flash-cards',
	});
});

it("doesn't validate non-quizlet url", () => {
	const url = 'https://google.com';
	expect(isValidQuizletURL(url)).toStrictEqual({
		valid: false,
		title: null,
	});
});
