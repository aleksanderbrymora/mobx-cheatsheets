import { Client, query as q } from 'faunadb';

const client = new Client({
	secret: process.env.REACT_APP_FAUNA_SECRET!,
});

export const logRes = () => {
	console.log(process.env.REACT_APP_FAUNA_SECRET);
	client
		.query(q.Create(q.Collection('sheets'), { data: { title: 'stuff' } }))
		.then((res) => console.log(res));
};
