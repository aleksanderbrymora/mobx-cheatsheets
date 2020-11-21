import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Language } from './Language';
import { Meta } from './shared/Meta';
import { TranslationGroup } from './TranslationGroup';

@ObjectType()
@Entity()
export class Word extends Meta {
	@Field()
	@Column()
	name: string;

	@Field((_type) => Language)
	@ManyToOne(() => Language, (language) => language.words)
	language: Language;

	@Field((_type) => TranslationGroup)
	@ManyToOne(() => TranslationGroup, (group) => group.words)
	translations: TranslationGroup;
}
