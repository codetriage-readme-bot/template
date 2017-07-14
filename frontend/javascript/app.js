'use strict';

import angular from 'angular';

let users = [
	{id: "abcd", name: "vasya"},
	{id: "defa", name: "Petya"},
	{id: "1234", name: "Masha"}
];

/*console.log(pluck(users, 'name'));*/

let moduleName = location.pathname.slice(1);

let handler;
try {
	let context = require.context('bundle-loader!./routes/', true, /^\.\//);
	handler = context('./' + moduleName);
} catch (e) {
	alert(e);
}

if (handler) {
	handler(function(route) {
		route();
	});
}
