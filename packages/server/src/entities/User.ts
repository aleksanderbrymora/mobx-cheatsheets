import { Column, Entity, OneToMany } from 'typeorm';
import { Meta } from './shared/MetaWithLanguages';
import { Sheet } from './Sheet';

@Entity()
export class User extends Meta {
	@Column()
	name: string;

	@Column()
	email: string;

	@Column({ default: false })
	verified: boolean;

	@Column({ default: false })
	admin: boolean;

	@OneToMany(() => Sheet, (sheet) => sheet.createdBy)
	sheets: Sheet[];

	@OneToMany(() => Sheet, (sheet) => sheet.forkedFrom)
	forkedSheets: Sheet[];

	@Column()
	password: string;
}
