import { Sheet } from '../../entities/Sheet';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { SheetInput } from './SheetInput';

@Resolver(Sheet)
export class SheetResolver {
	@Query((_returns) => Sheet, { nullable: true })
	async sheet(@Arg('id') id: string): Promise<Sheet | undefined> {
		const sheet = await Sheet.findOne(id);
		return sheet;
	}

	@Query((_returns) => [Sheet], { nullable: true })
	async sheets(): Promise<Sheet[]> {
		return await Sheet.find();
	}

	@Mutation((_returns) => Sheet)
	async addSheet(
		@Arg('options', () => SheetInput) options: SheetInput,
	): Promise<Sheet> {
		return await Sheet.create(options).save();
	}
}
