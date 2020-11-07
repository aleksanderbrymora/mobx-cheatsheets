import { Tag } from '../../entities/Tag';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { TagInput } from './TagInput';

@Resolver(Tag)
export class TagResolver {
	@Query((_returns) => Tag, { nullable: true })
	async tag(@Arg('id') id: string): Promise<Tag | undefined> {
		const tag = await Tag.findOne(id);
		return tag;
	}

	@Query((_returns) => [Tag], { nullable: true })
	async tags(): Promise<Tag[]> {
		return await Tag.find();
	}

	@Mutation((_returns) => Tag)
	async addTag(@Arg('options') options: TagInput): Promise<Tag> {
		return await Tag.create(options).save();
	}
}
