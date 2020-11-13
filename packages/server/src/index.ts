import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as TypeORM from 'typeorm';
import { buildSchema } from 'type-graphql';
import dotenv from 'dotenv';

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

const choose = <T>(dev: T, prod: T): T =>
	process.env.NODE_ENV !== 'production' ? dev : prod;

const bootstrap = async () => {
	dotenv.config();
	try {
		// create TypeORM connection
		await TypeORM.createConnection({
			type: 'postgres',
			database: choose('cheats', process.env.DB_NAME),
			username: choose('postgres', process.env.DB_USERNAME), // fill this with your username
			password: choose('postgres', process.env.DB_PASSWORD), // and password
			port: 5432, // and port
			host: choose('localhost', 'ec2-3-220-23-212.compute-1.amazonaws.com'),
			entities: [Book, Language, Sheet, Tag, User, Word, TranslationGroup],
			synchronize: true,
			logger: choose('debug', 'simple-console') as
				| 'debug'
				| 'advanced-console'
				| 'simple-console'
				| 'file',
			dropSchema: process.env.NODE_ENV !== 'production',
			cache: false,
			logging: process.env.NODE_ENV !== 'production' ? 'all' : false,
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
