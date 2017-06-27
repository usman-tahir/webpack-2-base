'use strict';

var moment = require('moment');

function greet() {
	var day = moment().format('dddd');
	console.log('Have a great ' + day + '!');
};

// export default greet;

module.exports = greet;
