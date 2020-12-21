import { Sheet } from 'src/entities/Sheet';
import { Field, InputType } from 'type-graphql';

@InputType()
export class SheetInput implements Partial<Sheet> {
  @Field()
  title: string;
}
