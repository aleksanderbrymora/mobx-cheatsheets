import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Language } from './Language';
import { Meta } from './shared/MetaWithLanguages';
import { TranslationGroup } from './TranslationGroup';

@Entity()
export class Word extends Meta {
	@Column()
	name: string;

	@ManyToOne(() => Language, (language) => language.words)
	language: Language;

	@ManyToOne(() => TranslationGroup, (group) => group.words)
	translations: TranslationGroup;
}
