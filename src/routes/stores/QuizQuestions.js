import { writable } from 'svelte/store';

const quiz = [
	{
		question: 'Какое ваше любимое новогоднее блюдо?',
		answers: [
			{ value: 'Tangerine', label: 'Мандарины' },
			{ value: 'Olivier', label: 'Оливье' },
			{ value: 'Champagne', label: 'Шампанское' },
			{ value: 'Cake', label: 'Торт' }
		],
		user_selected: null
	},
	{
		question: 'Кого бы вы хотели встретить в Новый Год?',
		answers: [
			{ value: 'Santa', label: 'Деда Мороза' },
			{ value: 'Fairy', label: 'Волшебную фею' },
			{ value: 'Deer', label: 'Северного оленя' }
		],
		user_selected: null
	},
	{
		question: 'Где вы любите встречать Новый год?',
		answers: [
			{ value: 'Chimney', label: 'Дома у камина' },
			{ value: 'Palm', label: 'На море' },
			{ value: 'Tree', label: 'В лесу под ёлкой' }
		],
		user_selected: null
	},
	{
		question: 'Какая ваша любимая новогодняя песня?',
		answers: [
			{ value: 'magic_moments', label: 'Magic moments' },
			{ value: 'let_it_snow', label: 'Let it snow!' },
			{ value: 'elochka', label: 'В лесу родилась ёлочка' },
			{ value: '5minutes', label: '5 минут... 5 минут...' },
			{ value: 'avariya', label: 'Новый Год к нам мчится! Скоро все случится!' }
		],
		user_selected: null
	}
];

const current_question = -1;

export const quiz_array = writable(quiz);
export const current_question_index = writable(current_question);
