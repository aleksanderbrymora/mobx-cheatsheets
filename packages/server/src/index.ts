import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as TypeORM from 'typeorm';
import { buildSchema } from 'type-graphql';

import { Book } from './entities/Book';
import { Language } from './entities/Language';
import { Sheet } from './entities/Sheet';
import { Tag } from './entities/Tag';
import { User } from './entities/User';
import { Word } from './entities/Word';

import { SheetResolver } from './resolvers/Sheet';
import { BookResolver } from './resolvers/Book';
import { TagResolver } from './resolvers/Tag';
import { LanguageResolver } from './resolvers/Language';

const bootstrap = async () => {
	try {
		// create TypeORM connection
		await TypeORM.createConnection({
			type: 'postgres',
			database: 'cheats',
			username: 'postgres', // fill this with your username
			password: 'postgres', // and password
			port: 5432, // and port
			host: 'localhost', // and host
			entities: [Book, Language, Sheet, Tag, User, Word],
			synchronize: true,
			logger: 'simple-console',
			logging: 'all',
			dropSchema: true,
			cache: false,
		});

		// build TypeGraphQL executable schema
		const schema = await buildSchema({
			resolvers: [SheetResolver, BookResolver, TagResolver, LanguageResolver],
		});

		// create mocked context

		// Create GraphQL server
		const server = new ApolloServer({ schema });

		// Start the server
		const { url } = await server.listen(4000);
		console.log(`Server is running, GraphQL Playground available at ${url}`);
	} catch (err) {
		console.error(err);
	}
};

bootstrap();
