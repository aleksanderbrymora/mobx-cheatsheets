import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TranslationGroup } from './TranslationGroup';
import { Word } from './Word';

@Entity()
export class Tag {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@ManyToMany(() => TranslationGroup, group => group.tags)
	translationGroups: TranslationGroup[]
}
