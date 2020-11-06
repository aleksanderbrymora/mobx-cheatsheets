import { Column, Entity, OneToMany } from 'typeorm';
import { Meta } from './shared/Meta';
import { Word } from './Word';

@Entity()
export class Language extends Meta {
	@Column()
	name: string;

	@Column({
		type: 'varchar',
		width: 20,
		nullable: true,
		comment: 'Emoji of a language flag',
	})
	flag: string;

	@OneToMany(() => Word, (word) => word.language)
	words: Word[];
}
