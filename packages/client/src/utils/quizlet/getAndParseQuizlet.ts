import cheerio from 'cheerio';

/**
 * Fetches a quizlet page html, cause the cors prevents it from doing it in the browser
 * I'm hitting my graphql server for that with simple fetch command,
 * because for some reason I can't be bothered to implement a propper one...
 * @param {string} url a url to fetch html from
 */
export const getQuizletPage = async (url: string) => {
	const query = `query GetQuizletPage($url: String!) { getQuizletPage(url: $url) }`;
	const res = await fetch(
		process.env.NODE_ENV !== 'production' ? 'http://localhost:4000/' : '',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({ query, variables: { url } }),
		},
	);
	const page = await res.text();
	return page;
};

export const getQuizletWords = async (url: string) => {
	const text = await getQuizletPage(url);
	const $ = cheerio.load(text);
	const pairs = $('.SetPage-term').text();
	console.log(pairs);
};

// document.querySelectorAll('.SetPageTerms-term').forEach(l => console.log(l.innerText))
