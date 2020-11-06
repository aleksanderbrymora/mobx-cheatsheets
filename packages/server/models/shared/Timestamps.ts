import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export abstract class Timestamps {
	@Field()
	createdAt: Date;
	@Field()
	updatedAt: Date;
}
