import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany } from 'typeorm';
import { Meta } from './shared/Meta';
import { Sheet } from './Sheet';

@ObjectType()
@Entity()
export class User extends Meta {
	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	email: string;

	@Field()
	@Column({ default: false })
	verified: boolean;

	@Field()
	@Column({ default: false })
	admin: boolean;

	@Field((_type) => [Sheet])
	@OneToMany(() => Sheet, (sheet) => sheet.createdBy)
	sheets: Sheet[];

	@Field((_type) => [Sheet])
	@OneToMany(() => Sheet, (sheet) => sheet.forkedFrom)
	forkedSheets: Sheet[];

	@Column()
	password: string;
}
