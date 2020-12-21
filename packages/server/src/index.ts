import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as TypeORM from 'typeorm';
import { buildSchema } from 'type-graphql';
import dotenv from 'dotenv';
import PostgressConnectionStringParser from 'pg-connection-string';

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

(async () => {
  dotenv.config();

  const connectionOptions = PostgressConnectionStringParser.parse(
    process.env.DATABASE_URL || 'localhost',
  );

  // return createConnection(<ConnectionOptions>{
  //   driver: {
  //     type: process.env.TYPEORM_DRIVER_TYPE,
  //     host: connectionOptions.host,
  //     port: connectionOptions.port || 5432,
  //     username: connectionOptions.user,
  //     password: connectionOptions.password,
  //     database: connectionOptions.database,
  //   },
  //   entities: [...this.entities],
  //   subscribers: [...this.subscribers],
  // }).catch(error => console.log(error));

  try {
    // create TypeORM connection
    await TypeORM.createConnection({
      type: 'postgres',
      host: connectionOptions.host as string,
      port: parseInt(connectionOptions.port || '5432'),
      username: connectionOptions.user,
      password: connectionOptions.password,
      database: connectionOptions.database as string,
      entities: [Book, Language, Sheet, Tag, User, Word, TranslationGroup],
      synchronize: true,
      logger: choose('debug', 'simple-console') as
        | 'debug'
        | 'advanced-console'
        | 'simple-console'
        | 'file',
      dropSchema: process.env.NODE_ENV !== 'production',
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
    const { url } = await server.listen(process.env.PORT || 4000);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (err) {
    console.error(err);
  }
})();
