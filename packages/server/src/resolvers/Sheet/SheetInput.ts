import { Sheet } from 'src/entities/Sheet';

export class SheetInput implements Partial<Sheet> {
	title: string;
}
