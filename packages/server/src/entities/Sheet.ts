import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Book } from './Book';
import { MetaWithLanguages } from './shared/MetaWithLanguages';
import { TranslationGroup } from './TranslationGroup';
import { User } from './User';

@Entity()
export class Sheet extends MetaWithLanguages {
	@Column()
	title: string;

	@Column({ default: true })
	containsProfanity: boolean;

	@Column('int')
	points: number;

	@ManyToOne(() => User, (user) => user.sheets)
	createdBy: User;

	@ManyToOne(() => User, (user) => user.forkedSheets, { nullable: true })
	forkedFrom: User;

	@ManyToMany(() => TranslationGroup)
	@JoinTable()
	translationGroups: TranslationGroup[];

	@ManyToMany(() => Book, (book) => book.sheets)
	books: Book[];
}
