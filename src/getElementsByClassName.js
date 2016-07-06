// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var results = [];

  var searchNode = function(node){
  	if( node.classList.contains( className )){
  		results.push( node );
  	}
  	for( var i = 0; i < node.children.length; i++ ){
  		searchNode(node.children[i]);
  	}
  };

  searchNode( document.body );
  return results;
};
