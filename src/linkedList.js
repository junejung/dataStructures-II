// Note: don't use an array to do this.
var makeLinkedList = function(){

  var linkedList = {
    head : null,
  
    insert : function(valOfContent){
    	var setNext = this.head
    	var newNode = {
    		content : valOfContent,
    		next : setNext
    	};
    	this.head = newNode;
    },
  
    contains : function(arg){
      for(var k = this.head; k != null; k = k.next){
        if(k.content === arg){
          return true;
        }   
      }
      return false; 
    }
  };
  return linkedList;
}



// for (i = 0; i < 5; i++)