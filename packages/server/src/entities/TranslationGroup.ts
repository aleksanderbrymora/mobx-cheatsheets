import { Field } from 'type-graphql';
import {
	Entity,
	JoinTable,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Meta } from './shared/Meta';
import { Tag } from './Tag';
import { Word } from './Word';

@Entity()
export class TranslationGroup extends Meta {
	@Field((_type) => [Word])
	@OneToMany(() => Word, (word) => word.language)
	words: Word[];

	@Field((_type) => [Tag])
	@ManyToMany(() => Tag, (tag) => tag.translationGroups)
	@JoinTable()
	tags: Tag[];
}
