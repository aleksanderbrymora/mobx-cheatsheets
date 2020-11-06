import { Field, ID, ObjectType } from 'type-graphql';
import { Timestamps } from './shared/Timestamps';

@ObjectType()
export class Sheet extends Timestamps {
	@Field((type) => ID)
	id: string;

	@Field()
	title: string;

	@Field()
	forkedTimes: number;

	@Field()
	lookedAtTimes: number;

	@Field()
	points: number;

	@Field()
	containsProfanity: boolean;
}
