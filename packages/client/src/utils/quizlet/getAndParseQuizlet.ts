import cheerio from 'cheerio';

export const getQuizletPage = async (url: string) => {
	const res = await fetch(url);
	const text = await res.text();
	return text;
};

export const getQuizletWords = async (url: string) => {
	const text = await getQuizletPage(url);
	const $ = cheerio.load(text);
	const pairs = $('.SetPage-term').text();
	console.log(pairs);
};

// document.querySelectorAll('.SetPageTerms-term').forEach(l => console.log(l.innerText))
