import { Sheet } from '../entities/Sheet';
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver(Sheet)
export class SheetResolver {
	@Query((_returns) => Sheet, { nullable: true })
	async sheet(@Arg('id') id: string) {
		const sheet = await Sheet.findOne(id);
		return sheet;
	}
}
