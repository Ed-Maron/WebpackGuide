import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';
import { cube } from './math.js';

function component() {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
	return element;
}
document.body.appendChild(component());

if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		printMe();
	})
}