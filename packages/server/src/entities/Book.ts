import { Field, Int, ObjectType } from 'type-graphql';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Meta } from './shared/Meta';
import { Sheet } from './Sheet';

@ObjectType()
@Entity()
export class Book extends Meta {
	@Field()
	@Column()
	name: string;

	@Field((_type) => [String])
	@Column('simple-array')
	authors: string[];

	@Field()
	@Column()
	publisher: string;

	@Field((_type) => Int, { nullable: true })
	@Column({ nullable: true })
	published?: number;

	@Field((_type) => [Sheet])
	@ManyToMany(() => Sheet, (sheet) => sheet.books)
	@JoinTable()
	sheets: Sheet[];
}
