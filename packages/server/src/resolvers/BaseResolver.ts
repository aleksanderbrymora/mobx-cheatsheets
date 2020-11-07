import {
	Arg,
	ClassType,
	InputTypeOptions,
	Mutation,
	Query,
	Resolver,
} from 'type-graphql';
import { UnionFromClasses } from 'type-graphql/dist/helpers/utils';
import { BaseEntity } from 'typeorm';
import { capitalise } from '@cheats/utils';

export function createBaseResolver<ClassT extends ClassType>(
	suffix: string,
	objectTypeClass: UnionFromClasses<[ClassT, BaseEntity]>,
	inputType: InputTypeOptions,
) {
	// @Resolver({ isAbstract: true })
	// abstract class BaseResolver {
	// 	protected items: T[] = [];

	// 	@Query((type) => [objectTypeCls], { name: `getAll${suffix}` })
	// 	async getAll(@Arg('first', (type) => Int) first: number): Promise<T[]> {
	// 		return this.items.slice(0, first);
	// 	}
	// }

	@Resolver({ isAbstract: true })
	abstract class BaseResolver {
		@Query((_returns) => objectTypeClass, {
			nullable: true,
			name: `get${capitalise(suffix)}`,
		})
		async tag(@Arg('id') id: string): Promise<ClassT | undefined> {
			const tag = await objectTypeClass.findOne(id);
			return tag;
		}

		@Query((_returns) => [], {
			nullable: true,
			name: `getAll${capitalise(suffix)}`,
		})
		async tags(): Promise<ClassT[]> {
			return await objectTypeClass.find();
		}

		@Mutation((_returns) => objectTypeClass, {
			name: `add${capitalise(suffix)}`,
		})
		async addTag(@Arg('options') options: typeof inputType): Promise<ClassT> {
			return await objectTypeClass.create(options).save();
		}
	}
	return BaseResolver;
}
