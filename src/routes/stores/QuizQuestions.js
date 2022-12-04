import { writable } from 'svelte/store';

const quiz = [
	{
		question: 'Какое ваше любимое блюдо на новогоднем столе?',
		answers: [
			{ value: 'Tangerine', label: 'Мандарины' },
			{ value: 'Olivier', label: 'Оливье' },
			{ value: 'Champagne', label: 'Шампанское' },
			{ value: 'Cake', label: 'Торт' }
		],
		user_selected: null
	},
	{
		question: 'Кого бы вы хотели встретить в новый год?',
		answers: [
			{ value: 'Santa', label: 'Деда мороза' },
			{ value: 'Fairy', label: 'Волшебную фею' },
			{ value: 'Deer', label: 'Северного оленя' }
		],
		user_selected: null
	},
	{
		question: 'Где вы любите встречать Новый год?',
		answers: [
			{ value: 'Chimney', label: 'Дома у камина' },
			{ value: 'Sea', label: 'На море' },
			{ value: 'Tree', label: 'В лесу под ёлкой' }
		],
		user_selected: null
	},
	{
		question: 'Какая ваша любимая новогодняя песня?',
		answers: [
			{ value: 'Magic moments', label: 'Magic moments' },
			{ value: 'Let it snow', label: 'Let it snow!' },
			{ value: 'Elochka', label: 'В лесу родилась ёлочка' },
			{ value: '5 minutes', label: '5 минут... 5 минут...' },
			{ value: 'Novy god k nam mchitsa', label: 'Новый год к нам мчится! Скоро все случится!' }
		],
		user_selected: null
	}
];

export const quiz_array = writable(quiz);
