import { Field } from 'type-graphql';
import { JoinColumn, OneToOne } from 'typeorm';
import { Language } from '../Language';
import { Meta } from './Meta';

export abstract class MetaWithLanguages extends Meta {
	@Field((_type) => Language)
	@OneToOne(() => Language)
	@JoinColumn()
	from: Language;

	@Field((_type) => Language)
	@OneToOne(() => Language)
	@JoinColumn()
	to: Language;
}
