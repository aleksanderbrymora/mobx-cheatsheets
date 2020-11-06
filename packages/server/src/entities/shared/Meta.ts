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
	@UpdateDateColumn({ type: 'timestamp' })
	updatedAt: Date;

	@Field()
	@CreateDateColumn({ type: 'timestamp' })
	createdAt: Date;
}
