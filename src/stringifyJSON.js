// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
      var output = '';

      if(obj === null ){
      	output = 'null';
      }else if(typeof obj === 'boolean'){
      	output += obj;
      }else if(typeof obj === 'function'){
      	output = '{}';
      }else if(typeof obj === 'string'){
      	output = '"'+obj+'"';
      }else if(typeof obj === 'number'){
      	output+= obj;
      }else if(Array.isArray(obj)){
      	for(var i = 0; i<obj.length; i++){
      		output+=stringifyJSON(obj[i]);
      		if(obj[i+1]!=undefined){
      			output+=',';
      		}
      	}
      	output = '[' + output + ']';
      }else if(typeof obj === 'object'){
      	for(var x in obj){
      		if(typeof obj[x] === 'function'){
      			output += '';
      		}else if(obj[x] === undefined){
      			output += '';
      		}else{
      			output += stringifyJSON(x) +':'+stringifyJSON(obj[x])+',';
      		}
      	}
      	output = '{' + output.slice(0,(output.length-1)) + '}';
      }
      return output;
};