import { Sheet } from '../entities/Sheet';
import { Query, Resolver } from 'type-graphql';

@Resolver(Sheet)
export class SheetResolver {
	@Query((_returns) => String)
	sheet() {
		return 'hey';
	}
}
