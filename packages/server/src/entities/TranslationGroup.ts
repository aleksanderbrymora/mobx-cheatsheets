import {
	Entity,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Tag } from './Tag';
import { Word } from './Word';

@Entity()
export class TranslationGroup {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Word, (word) => word.language)
	words: Word[];

	@ManyToMany(() => Tag, (tag) => tag.translationGroups)
	@JoinTable()
	tags: Tag[];
}
