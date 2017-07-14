'use strict';

import Menu from './menu';

let pandaMenu = new Menu({
	title: "Menu",
	items: [{
		text: 'First',
		href: '#first'
	}, {
		text: 'Meat',
		href: '#meat'
	}, {
		text: '99% food - bamboo!',
		href: '#bamboo'
	}]
});

document.body.appendChild(pandaMenu.elem);
