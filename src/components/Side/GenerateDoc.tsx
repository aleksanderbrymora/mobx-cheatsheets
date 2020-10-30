import { Button } from '@chakra-ui/core';
import React from 'react';
import { generateDoc } from 'src/utils/docx';

const GenerateDoc = () => {
	return <Button onClick={generateDoc}>GenerateDoc</Button>;
};

export default GenerateDoc;
