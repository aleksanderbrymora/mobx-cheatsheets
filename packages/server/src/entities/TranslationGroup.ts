import { Field, ObjectType } from 'type-graphql';
import { Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Meta } from './shared/Meta';
import { Tag } from './Tag';
import { Word } from './Word';

@ObjectType()
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
