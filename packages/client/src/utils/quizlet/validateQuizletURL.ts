const urlReg = /https?:\/\/quizlet\.com\/.*\/(.*)\//g;

export const isValidQuizletURL = (url: string) => {
	const match1 = urlReg.exec(url);
	return {
		valid: !!match1,
		title: match1 ? match1[1] : null,
	};
};
