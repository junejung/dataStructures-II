// Note: don't use an object to store the inserted elements.
//todo:
// -What should "MAX_SIZE" be?
// -google "collisions"
var MAX_SIZE = 10;
var makeHashTable = function(){
  var values = [];
  var hashTable = {
    values: values,
    insert : function(key, val){
      var indexNum = hashFunction(key, MAX_SIZE);
      if(values[indexNum] !== undefined)
      {
        values[indexNum].push([key, val]);
      }
      else
      {
        values[indexNum] = [[key, val]];  
      }
    },
    retrieve : function(key){
      var indexNum = hashFunction(key, MAX_SIZE);
      var arrayWeCareAbout = values[indexNum];
      var thingWeWillReturn;
      for(var i = 0; arrayWeCareAbout.length > i ; i++)
      {
        if(arrayWeCareAbout[i][0] === key){
          thingWeWillReturn = arrayWeCareAbout[i][1];
        }
      }
      return thingWeWillReturn;
    },
  };
  return hashTable;
}

// DON'T WORRY ABOUT CODE BELOW HERE

var hashFunction = function(str, maxResult){
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    char = str.charCodeAt(i);
    hash = ((hash<<5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash % maxResult;
}
