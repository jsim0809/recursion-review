// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  // document.body is the <body> text of the HTML
  // element.childNodes returns a NodeList (like an array) of the children nodes
  // element.classList returns a DOMTokenList (space separated "string") of the node's classes
  var result = [];
  var currentElement = document.body;

  var getKids = function(element) {
    if (element.classList === undefined) {

    } else if (element.classList.contains(className)) {
      result.push(element);
    }

    var children = element.childNodes;

    if (children.length > 0) {
      for (var i = 0; i < children.length; i++) {
        getKids(children[i]);
      }
    }
  };

  getKids(currentElement);
  result.flat(Infinity);

  var expectedNodeList = document.getElementsByClassName('targetClassName');
  var expectedArray = Array.prototype.slice.apply(expectedNodeList);

  return result;

};
