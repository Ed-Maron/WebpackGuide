import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

function component() {
	let element = document.createElement('div');
	let btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	// let myIcon = new Image();
	// myIcon.src = Icon;
	
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}
document.body.appendChild(component());
