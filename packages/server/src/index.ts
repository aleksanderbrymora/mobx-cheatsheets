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
import { TranslationGroup } from './entities/TranslationGroup';

import { SheetResolver } from './resolvers/Sheet';
import { BookResolver } from './resolvers/Book';
import { TagResolver } from './resolvers/Tag';
import { LanguageResolver } from './resolvers/Language';
import { WordResolver } from './resolvers/Word';
import { QuizletResolver } from './resolvers/Quizlet';

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
			entities: [Book, Language, Sheet, Tag, User, Word, TranslationGroup],
			synchronize: true,
			logger: 'debug',
			dropSchema: true,
			cache: false,
			logging: 'all',
		});

		// build TypeGraphQL executable schema
		const schema = await buildSchema({
			resolvers: [
				SheetResolver,
				BookResolver,
				TagResolver,
				LanguageResolver,
				WordResolver,
				QuizletResolver,
			],
		});

		// Create GraphQL server
		const server = new ApolloServer({
			schema,
			cacheControl: {
				defaultMaxAge: 0,
			},
			tracing: true,
		});

		// Start the server
		const { url } = await server.listen(4000);
		console.log(`Server is running, GraphQL Playground available at ${url}`);
	} catch (err) {
		console.error(err);
	}
};

bootstrap();
