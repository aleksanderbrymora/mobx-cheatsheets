import { Field, Int, ObjectType } from 'type-graphql';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Book } from './Book';
import { MetaWithLanguages } from './shared/MetaWithLanguages';
import { TranslationGroup } from './TranslationGroup';
import { User } from './User';

@ObjectType()
@Entity()
export class Sheet extends MetaWithLanguages {
	@Field()
	@Column()
	title: string;

	@Field()
	@Column({ default: true })
	containsProfanity: boolean;

	@Field((_type) => Int)
	@Column('int')
	points: number;

	@Field((_type) => User)
	@ManyToOne(() => User, (user) => user.sheets)
	createdBy: User;

	@Field((_type) => User)
	@ManyToOne(() => User, (user) => user.forkedSheets, { nullable: true })
	forkedFrom: User;

	@Field((_type) => [TranslationGroup])
	@ManyToMany(() => TranslationGroup)
	@JoinTable()
	translationGroups: TranslationGroup[];

	@Field((_type) => [Book])
	@ManyToMany(() => Book, (book) => book.sheets)
	books: Book[];
}
