'use strict';
/**
* @see http://artsiom.mezin.eu/technofront/
*/
function onSubmit (form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};

	let result = request('/users', data);

	if (result === '100') {
		form.hidden = true;
		window.helloWorld.innerHTML = hello(data.user); 
	}

	console.log(data, result);
}

function hello (text) {
	return 'Привет, ' + text;
}


function filter(str){

	let rules = window.rules || [];
	str = str + '';
	rules = rules.map(rule => {
		return {
			regexp: new RegExp('\\b${rule}\\b', 'g'),
			length: rule.length
		};
	});
	rules.forEach(rule => {
		str = str.replace(rule,( new Array(rule.length + 1)).join('*'))
	});

	return str;
}

if (typeof exports === 'object') {
	exports.hello = hello;
	exports.filter = filter;
}
