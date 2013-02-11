var makeTree = function(treeData){

  var tree = {
  	parent : null,
    children : [],
    payLoad : treeData,

    addChild : function(childData){
			var newTree = makeTree(childData);
			newTree.parent = this;
			newTree.payLoad = childData;
			this.children.push(newTree);
			return newTree;
    },
    traverse : function(){
  		//visit every children. How can I test it!?
    },

    removeSelf : function(){
    	var iAmFrom = this.parent
    	if(iAmFrom === null) {
    		alert("World is Breaking!!");
    		return "warning";
    	} else {
    		var index = null;
    		for(var i = 0; i < iAmFrom.children.length; i++){
    			if(iAmFrom.children[i] === this.payLoad){
    				index = i;
    				break;
    			};
    		};
    		iAmFrom.children.splice(index, 1);
	  	};
    },

    contains : function(payLoadValue){
    	for(var i = 0; this.children.length; i++){
    		if (this.children[i].payLoad === payLoadValue){
    			return true
    			break;
    		} else { return false };
    	};
    }
  };

  return tree;
}
