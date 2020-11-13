import { Box, Button, Heading, Text, Textarea } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'src/models/Root';

const ImportFromTxt = observer(() => {
	const { words } = useMst();

	return (
		<Box h='60vh'>
			<Heading as='h2' size='md'>
				Import from text
			</Heading>
			<Text textAlign='center' my={1}>
				Input definition, followed by a '=' (you can add the spaces around the
				'=') and the translation. Separate them with enter, like this:
			</Text>
			<pre style={{ fontSize: 14, textAlign: 'center' }}>
				definition=translation
			</pre>
			<Textarea
				mt={3}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					words.updateInput(e.target.value)
				}
				value={words.input}
				h='100%'
				placeholder={`stuff=rzeczy
more stuff=wiecej rzeczy`}
			/>
			<Button
				onClick={words.importFromTxt}
				variantColor='blue'
				isDisabled={!words.isInputValid}
				m='auto'
				display='block'
				mt={2}
			>
				Import
			</Button>
		</Box>
	);
});

export default ImportFromTxt;
