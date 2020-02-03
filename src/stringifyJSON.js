// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'function' || obj === undefined) {
    return '';
  } else if (obj === NaN || obj === null || obj === Infinity) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj.toString() + '"';
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    var middle = '';

    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        middle += stringifyJSON(obj[i]);
      } else {
        middle += stringifyJSON(obj[i]) + ',';
      }
    }
    return '[' + middle + ']';

  } else if (typeof obj === 'object') {
    var middle = '';
    var counter = 0;
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
      } else if (counter === Object.keys(obj).length - 1) {
        middle += '"' + key + '\":' + stringifyJSON(obj[key]);
      } else {
        middle += '"' + key + '\":' + stringifyJSON(obj[key]) + ',';
      }
      counter++;
    }
    return '{' + middle + '}';
  } else {
    return;
  }
};
