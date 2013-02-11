describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = makeHashTable();
  });

  it("should have a method named 'insert'", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'retrieve'", function() {
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should retrieve matching value for input key", function() {
    hashTable.insert("june","4155555555");
    expect(hashTable.retrieve("june")).toEqual("4155555555");
  });

  it("should retrieve matching value for input key", function() {
    hashTable.insert("june","4155555555");
    hashTable.insert("cat","icannotgivemynumber");
    expect(hashTable.retrieve("cat")).not.toEqual("4155555555");
  });

  it("should retrieve matching value for input key", function() {
    hashTable.insert("june","4155555555");
    hashTable.insert("cat","icannotgivemynumber");
    expect(hashTable.retrieve("cat")).toEqual("icannotgivemynumber");
  });

  it("should headle the collisions problem", function() {
    hashTable.insert("dog" , "bowwow");
    hashTable.insert("june" , "nice!");
    expect(hashFunction("dog",10)).toEqual(hashFunction("june",10));
    expect(hashTable.retrieve("june")).toBe("nice!");
  });


  // add more tests here to test the functionality of hashTable
});