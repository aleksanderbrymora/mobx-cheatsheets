import { Box, Input, Stack } from '@chakra-ui/core';
import { observer } from 'mobx-react';
import React from 'react';
import { useMst } from 'src/models/Root';
import capitalize from 'lodash.capitalize';

const LanguageInputs = observer(() => {
  const {
    sheet: {
      changeFromLanguage: changeFromLanuage,
      changeToLanuage,
      fromLang,
      toLang,
    },
  } = useMst();
  return (
    <Stack spacing={3} isInline my='1rem' justifyContent='space-between'>
      <LanguageInput
        name='from'
        onChange={changeFromLanuage}
        value={fromLang}
      />
      <LanguageInput name='to' onChange={changeToLanuage} value={toLang} />
    </Stack>
  );
});

interface LanguageProps {
  name: 'from' | 'to';
  onChange: (to: string) => void;
  value: string;
}

const LanguageInput: React.FC<LanguageProps> = observer(
  ({ name, onChange, value }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    return (
      <Box>
        <label htmlFor={`language-input-${name}`}>{capitalize(name)}</label>
        <Input
          width='90%'
          data-testid='language-input'
          onChange={handleChange}
          value={value}
          placeholder={capitalize(name)}
          id={`language-input-${name}`}
        />
      </Box>
    );
  },
);

export default LanguageInputs;
