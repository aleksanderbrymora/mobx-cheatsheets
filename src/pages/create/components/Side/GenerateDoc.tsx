import { Button } from '@chakra-ui/core';
import React from 'react';
import { generateDoc } from 'src/utils/docx';

const GenerateDoc = () => {
	return (
		<Button
			variant='solid'
			w='100%'
			mt={5}
			fontSize={20}
			py={8}
			onClick={generateDoc}
		>
			GenerateDoc
		</Button>
	);
};

export default GenerateDoc;
