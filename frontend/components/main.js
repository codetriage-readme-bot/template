'use strict';

import Menu from './menu';

let pandaMenu = new Menu({
	title: "MenuPanda",
	items: [{
		text: 'Eggs',
		href: '#eggs'
	}, {
		text: 'Meat',
		href: '#meat'
	}, {
		text: '99% food - bamboo!',
		href: '#bamboo'
	}]
});

document.body.appendChild(pandaMenu.elem);
