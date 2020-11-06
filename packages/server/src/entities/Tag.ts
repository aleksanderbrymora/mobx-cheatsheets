import { Field } from 'type-graphql';
import { Column, Entity, ManyToMany } from 'typeorm';
import { Meta } from './shared/Meta';
import { TranslationGroup } from './TranslationGroup';

@Entity()
export class Tag extends Meta {
	@Field()
	@Column()
	name: string;

	@Field((_type) => [TranslationGroup])
	@ManyToMany(() => TranslationGroup, (group) => group.tags)
	translationGroups: TranslationGroup[];
}
