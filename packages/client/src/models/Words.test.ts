import { Word, Words } from './Words';

const createWord = () =>
  Word.create({
    from: 'telefon',
    to: 'phone',
  });

const createWords = () =>
  Words.create({
    items: [
      {
        from: 'telefon',
        to: 'phone',
      },
      {
        from: 'torba',
        to: 'bag',
      },
    ],
  });

it('should create words instance with one word in it', () => {
  const words = createWords();

  expect(words.items[0]).toStrictEqual({
    from: 'telefon',
    to: 'phone',
  });
});

it('should add and remove items', () => {
  const words = Words.create({ items: [] });
  words.add({ from: 'torba', to: 'bag' });
  expect(words.items).toHaveLength(1);
  words.remove(words.items[0]);
  expect(words.items).toHaveLength(0);
  words.add({ from: 'torba', to: 'bag' });
  words.items[0].remove();
  expect(words.items).toHaveLength(0);
});

it('should return sorted words', () => {
  const words = createWords();

  expect(words.sortedWordsByFrom).toStrictEqual([
    {
      from: 'telefon',
      to: 'phone',
    },
    {
      from: 'torba',
      to: 'bag',
    },
  ]);

  expect(words.sortedWordsByTo).toStrictEqual([
    {
      from: 'torba',
      to: 'bag',
    },
    {
      from: 'telefon',
      to: 'phone',
    },
  ]);

  expect(words.unsortedWords).toStrictEqual([
    {
      from: 'telefon',
      to: 'phone',
    },
    {
      from: 'torba',
      to: 'bag',
    },
  ]);
});

it('can create an instance of single word', () => {
  const word = createWord();
  expect(word).toStrictEqual({
    from: 'telefon',
    to: 'phone',
  });
});

it('can update words properties', () => {
  const word = createWord();
  word.changeFrom('komórka');
  expect(word.from).toBe('komórka');
  word.changeTo('phonee');
  expect(word.to).toBe('phonee');
  // note that the `remove` method won't work here
  // as it hasn't been instanciated as a child of `Words`
  // , hence it has no parent
});

it('should flip values', () => {
  const words = createWords();
  words.flip();
  expect(words.unsortedWords).toStrictEqual([
    {
      to: 'telefon',
      from: 'phone',
    },
    {
      to: 'torba',
      from: 'bag',
    },
  ]);
});
