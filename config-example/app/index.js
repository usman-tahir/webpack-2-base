
import _ from 'lodash';

function Component () {
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'Webpack with webpack.config.js!'], ' ');
	return element;
}

document.body.appendChild(Component());