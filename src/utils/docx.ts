import {
	BorderStyle,
	Document,
	TableCell,
	Paragraph,
	Table,
	TableRow,
	Packer,
	AlignmentType,
	TextRun,
} from 'docx';
import { cast, getType, Instance } from 'mobx-state-tree';
import { rootStore } from 'src/models/Root';
import { Word, Words } from 'src/models/Words';
import { saveAs } from 'file-saver';

const prepareChildren = (items: Instance<typeof Word>[]) => {
	const children = items.map((pair) => [
		new TextRun({
			text: pair.from,
			bold: true,
		}),
		new TextRun({
			text: '=',
		}),
		new TextRun({
			text: pair.to,
		}),
		new TextRun({
			text: '; ',
		}),
	]);
	return children.flat();
};

export const generateDoc = async () => {
	const { words, sheet } = rootStore;
	// Preparing document metadata and styles
	const doc = new Document({
		styles: {
			paragraphStyles: [
				{
					id: 'cheat',
					name: sheet.title || 'Cheat text',
					basedOn: 'Normal',
					quickFormat: true,
					run: {
						size: 3.5,
						font: 'Arial',
					},
				},
			],
		},
	});

	// preparing paragraphs
	const paragraphs = Array(3).fill(
		new TableCell({
			children: [
				new Paragraph({
					style: 'cheat',
					// Assingning the words as children (an array of pairs of words)
					children: prepareChildren(words.sortedWords),
					alignment: AlignmentType.JUSTIFIED,
				}),
			],
			margins: {
				top: 10,
				bottom: 10,
				left: 10,
				right: 10,
			},
			borders: {
				top: { size: 0.5, color: 'black', style: BorderStyle.SINGLE },
				bottom: { size: 0.5, color: 'black', style: BorderStyle.SINGLE },
				left: { size: 0.5, color: 'black', style: BorderStyle.SINGLE },
				right: { size: 0.5, color: 'black', style: BorderStyle.SINGLE },
			},
		}),
	);

	const table = new Table({
		rows: [
			new TableRow({
				children: paragraphs,
			}),
		],
		columnWidths: new Array(3).fill(3000),
	});

	doc.addSection({
		children: [table],
	});

	Packer.toBlob(doc).then((blob) => {
		console.log(blob);
		saveAs(blob, sheet.title !== '' ? sheet.title + '.docx' : 'sheet.docx');
		console.log('Document created successfully');
	});
};
