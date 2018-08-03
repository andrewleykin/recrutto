/* eslint-disable */
export default {
	namespaced: true,
	state: {
		mainData: {
			moscow: {
				shop: {
					title: '«Продукты», Ленинский проспект, д.15',
					infoBlock: [
						{
							cnt: 1
						},
						{
							cnt: 21
						},
						{
							cnt: 8
						},
						{
							cnt: 5
						}
					],
					table: {
						title: 'СОТРУДНИКИ',
						select: {
							filter: 'Показать все',
							data: [
								{
									val: 'Показать все'
								},
								{
									val: 'Кассир'
								},
								{
									val: 'Охранник'
								},
								{
									val: 'Кассир-продавец'
								},
								{
									val: 'Грузчик / Разнорабочий'
								},
								{
									val: 'Разнорабочий'
								},
								{
									val: 'Грузчик'
								},
								{
									val: 'Уборщик'
								}
							]
						},
						thead: [
							{
								val: 'ФИО',
								key: 'fio'
							},
							{
								val: 'ДОЛЖНОСТЬ',
								key: 'post'
							},
							{
								val: 'Количество смен',
								key: 'shift'
							},
							{
								val: 'ОТРАБОТАНО',
								key: 'work'
							},
							{
								val: 'ПРОГУЛ.',
								key: 'hooky'
							},
							{
								val: 'ОПОЗДАНИЙ',
								key: 'late'
							},
							{
								val: 'АДРЕС(А) ОБЪЕКТА',
								key: 'address'
							}
						],
						tbody: [
							{
								icon: '/static/img/general/man-cashier.png',
								fio: 'Иванов А.',
								post: 'Кассир',
								shift: '0',
								work: '4',
								hooky: '2/4',
								late: '12/24',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-security.png',
								fio: 'Иванов Б.',
								post: 'Охранник',
								shift: '5',
								work: '4',
								hooky: '1/1',
								late: '12/13',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-cashier.png',
								fio: 'Иванов В.',
								post: 'Кассир-продавец',
								shift: '2',
								work: 'НЕТ',
								hooky: '1/2',
								late: '12/12',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Г.',
								post: 'Грузчик / Разнорабочий',
								shift: '1',
								work: '2',
								hooky: '2/4',
								late: '22/44',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Д.',
								post: 'Разнорабочий',
								shift: '2',
								work: '5',
								hooky: '5/2',
								late: '21/21',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Е.',
								post: 'Грузчик',
								shift: '0',
								work: '4',
								hooky: '2/4',
								late: '12/24',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Ж.',
								post: 'Разнорабочий',
								shift: '5',
								work: '4',
								hooky: '1/1',
								late: '12/13',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-cashier.png',
								fio: 'Иванов З.',
								post: 'Кассир',
								shift: '2',
								work: 'НЕТ',
								hooky: '1/4',
								late: '12/12',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов И.',
								post: 'Грузчик / Разнорабочий',
								shift: '5',
								work: '3',
								hooky: '2/2',
								late: '22/44',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов К.',
								post: 'Уборщик',
								shift: '2',
								work: '2',
								hooky: '1/2',
								late: '1/21',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							}
						],
						columnIndexIcon: 1
					},
					cardblock: {
						photo: {
							src: '/static/img/general/card.png',
							alt: 'card img'
						},
						name: 'Иванов Андрей Петрович',
						post: 'Генеральный директор',
						place: '«продукты»',
						links: [
							{
								href: 'tel:+79651001010',
								text: '+7 965 100 10 10',
								class: 'phone'
							},
							{
								href: 'tel:+74955664464',
								text: '+7 495 566 44 64 (доб. 154)',
								class: 'phone'
							},
							{
								href: 'mailto:andrey.ivanov@mycompany.ru',
								text: 'andrey.ivanov@mycompany.ru',
								class: 'email'
							}
						]
					},
					dataset: [
						{
							label: 'Уволено',
							backgroundColor: 'rgba(30,176,228,0.5)',
							data: [40, 20, 52, 39, 50, 40, 39, 140, 40, 20, 52, 20]
						},
						{
							label: 'Нанято',
							backgroundColor: 'rgba(36,123,160,0.5)',
							data: [20, 60, 52, 32, 30, 50, 32, 25, 20, 30, 57, 30]
						}
					]
				}
			},
			volgograd: {
				shop: {
					title: '«Продукты», Волгоград, д.15',
					infoBlock: [
						{
							cnt: 10
						},
						{
							cnt: 11
						},
						{
							cnt: 5
						},
						{
							cnt: 2
						}
					],
					table: {
						title: 'СОТРУДНИКИ',
						select: {
							filter: 'Показать все',
							data: [
								{
									val: 'Показать все'
								},
								{
									val: 'Кассир'
								},
								{
									val: 'Охранник'
								},
								{
									val: 'Кассир-продавец'
								},
								{
									val: 'Грузчик / Разнорабочий'
								},
								{
									val: 'Разнорабочий'
								},
								{
									val: 'Грузчик'
								},
								{
									val: 'Уборщик'
								}
							]
						},
						thead: [
							{
								val: 'ФИО',
								key: 'fio'
							},
							{
								val: 'ДОЛЖНОСТЬ',
								key: 'post'
							},
							{
								val: 'Количество смен',
								key: 'shift'
							},
							{
								val: 'ОТРАБОТАНО',
								key: 'work'
							},
							{
								val: 'ПРОГУЛ.',
								key: 'hooky'
							},
							{
								val: 'ОПОЗДАНИЙ',
								key: 'late'
							},
							{
								val: 'АДРЕС(А) ОБЪЕКТА',
								key: 'address'
							}
						],
						tbody: [
							{
								icon: '/static/img/general/man-cashier.png',
								fio: 'Иванов А.',
								post: 'Кассир',
								shift: '0',
								work: '4',
								hooky: '2/4',
								late: '12/24',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-security.png',
								fio: 'Иванов Б.',
								post: 'Охранник',
								shift: '5',
								work: '4',
								hooky: '1/1',
								late: '12/13',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-cashier.png',
								fio: 'Иванов В.',
								post: 'Кассир-продавец',
								shift: '2',
								work: 'НЕТ',
								hooky: '1/2',
								late: '12/12',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Г.',
								post: 'Грузчик / Разнорабочий',
								shift: '1',
								work: '2',
								hooky: '2/4',
								late: '22/44',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Д.',
								post: 'Разнорабочий',
								shift: '2',
								work: '5',
								hooky: '5/2',
								late: '21/21',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Е.',
								post: 'Грузчик',
								shift: '0',
								work: '4',
								hooky: '2/4',
								late: '12/24',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов Ж.',
								post: 'Разнорабочий',
								shift: '5',
								work: '4',
								hooky: '1/1',
								late: '12/13',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-cashier.png',
								fio: 'Иванов З.',
								post: 'Кассир',
								shift: '2',
								work: 'НЕТ',
								hooky: '1/4',
								late: '12/12',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов И.',
								post: 'Грузчик / Разнорабочий',
								shift: '5',
								work: '3',
								hooky: '2/2',
								late: '22/44',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							},
							{
								icon: '/static/img/general/man-porter.png',
								fio: 'Иванов К.',
								post: 'Уборщик',
								shift: '2',
								work: '2',
								hooky: '1/2',
								late: '1/21',
								address: 'Москва, Ленинский пр-т, 15 ( «Продукты» )'
							}
						],
						columnIndexIcon: 1
					},
					cardblock: {
						photo: {
							src: '/static/img/general/card.png',
							alt: 'card img'
						},
						name: 'Иванов Андрей Петрович',
						post: 'Генеральный директор',
						place: '«продукты»',
						links: [
							{
								href: 'tel:+79651001010',
								text: '+7 965 100 10 10',
								class: 'phone'
							},
							{
								href: 'tel:+74955664464',
								text: '+7 495 566 44 64 (доб. 154)',
								class: 'phone'
							},
							{
								href: 'mailto:andrey.ivanov@mycompany.ru',
								text: 'andrey.ivanov@mycompany.ru',
								class: 'email'
							}
						]
					},
					dataset: [
						{
							label: 'Уволено',
							backgroundColor: 'rgba(30,176,228,0.5)',
							data: [40, 20, 52, 39, 50, 40, 39, 140, 40, 20, 52, 20]
						},
						{
							label: 'Нанято',
							backgroundColor: 'rgba(36,123,160,0.5)',
							data: [20, 60, 52, 32, 30, 50, 32, 25, 20, 30, 57, 30]
						}
					]
				}
			}
		}
	},
	getters: {
		main: (state, event) => (info) => {
			let city = info.city;
			let object = info.object;
			let cityBlock = state.mainData[city];
			if(cityBlock === undefined) {
				return state.mainData.moscow.shop
			}
			let objectBlock = cityBlock[object]; 
			if(objectBlock === undefined) {
				return state.mainData.moscow.shop
			}
			return cityBlock[object]
		}
	}
}
