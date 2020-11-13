import { gql, useLazyQuery } from '@apollo/client';
import {
	Box,
	Button,
	Heading,
	Input,
	Link,
	Stack,
	Text,
} from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { useMst } from 'src/models/Root';
import { isValidQuizletURL } from 'src/utils/quizlet/validateQuizletURL';

const QUIZLET = gql`
	query quizlet($url: String!) {
		quizlet(url: $url) {
			title
			fromLanguage
			toLanguage
			words {
				from
				to
			}
		}
	}
`;

interface QuizletType {
	quizlet: {
		title: string;
		fromLanguage: string;
		toLanguage: string;
		words: { from: string; to: string }[];
	};
}

const ImportFromQuizlet = () => {
	const { words, sheet } = useMst();
	const [getQuizlet, { loading, data }] = useLazyQuery(QUIZLET);
	const [quizlet, setQuizlet] = useState(
		'https://quizlet.com/pl/221530176/longman-rep_9-flash-cards/',
	);
	const [isValidUrl, setIsValidUrl] = useState(false);

	useEffect(() => {
		const { valid } = isValidQuizletURL(quizlet);
		if (valid) {
			setIsValidUrl(true);
		} else {
			setIsValidUrl(false);
		}
		console.log({ quizlet, isValidUrl });
	}, [quizlet]);

	useEffect(() => {
		console.log({ data });
		if (data) {
			const {
				quizlet: { fromLanguage, toLanguage, title, words: quizletWords },
			} = data as QuizletType;
			sheet.changeTitle(title);
			sheet.changeToLanuage(toLanguage);
			sheet.changeFromLanuage(fromLanguage);
			quizletWords.forEach(({ from, to }) => words.add({ from, to }));
		}
	}, [data]);

	const handleClick = () => {
		getQuizlet({ variables: { url: quizlet } });
	};

	return (
		<Box>
			<Heading as='h2' size='md' mb={2}>
				Import from Quizlet
			</Heading>
			<Text my={1}>
				Just paste in a link to the words you found on{' '}
				<Link href='https://quizlet.com'>Quizlet.com</Link>
			</Text>
			<Stack isInline spacing={2} align='center'>
				<Input
					value={quizlet}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setQuizlet(e.target.value);
					}}
					placeholder='https://quizlet.com/...'
				/>
				<Button
					onClick={handleClick}
					variantColor='blue'
					isDisabled={!isValidUrl}
					isLoading={loading}
					loadingText='Fetching'
					size='md'
				>
					Import
				</Button>
			</Stack>
		</Box>
	);
};

export default ImportFromQuizlet;
