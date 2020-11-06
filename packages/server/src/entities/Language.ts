import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { Meta } from './shared/Meta';
import { Word } from './Word';

@ObjectType()
@Entity()
export class Language extends Meta {
	@Field()
	@Column()
	name: string;

	@Field()
	@Column({
		type: 'varchar',
		width: 20,
		nullable: true,
		comment: 'Emoji of a language flag',
	})
	flag: string;

	@Field((_type) => [Word])
	@OneToMany(() => Word, (word) => word.language)
	words: Word[];
}
