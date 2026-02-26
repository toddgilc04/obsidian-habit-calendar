export interface CalendarOption {
	key: string;
	label: string;
	color: string;
}

export interface CalendarConfig {
	title: string;
	options: CalendarOption[];
}

export const calendarsConfig: CalendarConfig[] = [
	{
		title: 'Volleyball',
		options: [
			{ key: 'home', label: 'Home', color: '#3b82f6' },
			{ key: 'court', label: 'Court', color: '#06b6d4' },
		],
	},
	{
		title: 'Gym',
		options: [
			{ key: 'gym', label: 'Gym', color: '#ef4444' },
		],
	},
	<br>
	{
		title: 'Guitar',
		options: [
			{ key: 'guitar', label: 'Guitar', color: '#196c2e' },
		],
	},
	{
		title: 'Russian',
		options: [
			{ key: 'russian', label: 'Russian', color: '#d303fc' },
		],
	},
	{
		title: 'Drawing',
		options: [
			{ key: 'drawing', label: 'Drawing', color: '#fce303' },
		],
	},
];

export const allActivityKeys = calendarsConfig.flatMap((config) =>
	config.options.map((opt) => opt.key)
);

