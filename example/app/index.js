
import _ from 'lodash';

function Component () {
	var element = document.createElement('div');

	/*
		Lodash is required for this to work
	 */
	element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

	return element;
}

document.body.appendChild(Component());