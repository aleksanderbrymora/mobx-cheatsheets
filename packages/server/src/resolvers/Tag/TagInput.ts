import { Tag } from 'src/entities/Tag';
import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class TagInput implements Partial<Tag> {
	@Field()
	name: string;
}
