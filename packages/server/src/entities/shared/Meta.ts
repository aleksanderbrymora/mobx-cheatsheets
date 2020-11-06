import { Field, ID, ObjectType } from 'type-graphql';
import {
	BaseEntity,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@ObjectType()
export abstract class Meta extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field((_type) => ID)
	readonly id: string;

	@Field()
	@UpdateDateColumn('timestamptz')
	updatedAt: string;

	@Field()
	@CreateDateColumn('timestamptz')
	createdAt: string;
}
