export const CLUBS = [
	{
		id: 'c-1',
		img: 'https://media.istockphoto.com/photos/cheering-crowd-at-a-concert-picture-id1049022558?b=1&k=20&m=1049022558&s=170667a&w=0&h=3RejXtNiutsfWJs7sBSESAJGwyfcNq6b1aA2Ya6d9OA=',
		name: 'club 1',
		isEvent: false,
		hours: '1pm - 2am',
		event: null,
	},
	{
		id: 'c-2',
		img: 'https://media.istockphoto.com/photos/shot-of-a-nightclub-with-no-one-inside-picture-id1053941232?b=1&k=20&m=1053941232&s=170667a&w=0&h=QT35L8nzn0BUzLmD7MdKnNcdOi9iSpeE5RKduiB1gjs=',
		name: 'club 2',
		isEvent: false,
		hours: '1pm - 2am',
		event: null,
	},
	{
		id: 'c-3',
		img: 'https://media.istockphoto.com/photos/cheering-crowd-with-hands-in-air-at-music-festival-picture-id1247853982?b=1&k=20&m=1247853982&s=170667a&w=0&h=sWNEepgWwrm1gH288XfI4uCV0xI6ZZ65aXsshxEiUv4=',
		name: 'club 3',
		isEvent: false,
		hours: '1pm - 2am',
		event: null,
	},
	{
		id: 'c-4',
		img: 'https://media.istockphoto.com/photos/empty-nightclub-dance-floor-picture-id1053940970?b=1&k=20&m=1053940970&s=170667a&w=0&h=RGF0UIRbvoS4Cjw1cfMU2G0VI8O16ZEeCbbWwlx-i80=',
		name: 'club 4',
		isEvent: true,
		hours: '1pm - 2am',
		event: {
			dj: 'Ramzy',
			genre: 'pop',
		},
	},
];

export default CLUBS;
