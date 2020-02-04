// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '[') {
    // cut off the front and back brackets
    if (json === '[]') {
      return [];
    }
    var middle = json.slice(1, json.length - 2);
    // make a variable for the array
    var array = middle.split(',');
    for (var i = 0; i < array.length; i++) {
      array[i] = parseJSON(array[i]);
    }
    return array;
  } else if (json[0] === '{') {
    if (json === '{}') {
      return {};
    }
    var middle = json.slice(1, json.length - 2);
    var array = middle.split(',');
    console.log(array);
    var result = {};
    for (var i = 0; i < array.length; i++){
      var colonLoc = array[i].indexOf(':');
      result[array[i].slice(1, colonLoc - 1)] = parseJSON(array[i].slice(colonLoc + 1));
    }
    return result;
  } else if (json[0] === '"') {
    var str = "";
    var counter = 1;
    //cut off the first character
    while(json[counter] !== '"') {
      console.log('counter: ' + counter + ' json[counter]: ' + json[counter]);
      counter++;
      str += json[counter];
    }
    return str;
  } else if (json === 'null') {
    return null;
  } else if (json === 'true') {
    return true;
  } else if (json === 'false') {
    return false;
  } else if (json === '') {
    return;
  } else { // json is a number
    return Number(json);
  }
};
