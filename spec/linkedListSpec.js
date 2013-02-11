describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head", function() {
    expect(Object.keys(linkedList)).toContain("head");
  });

  it("should have a method named 'insert'", function() {
    expect(linkedList.insert).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'contains'", function() {
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  describe("contains", function() {

    it("should return true when you give it a time that is in the linked list", function() {
      linkedList.insert("firstContent");
      var test = linkedList.contains("firstContent");
      expect(test).toBe(true);
    });

    it("should return true when you give it a time that is in the linked list no metter where it is", function() {
      linkedList.insert("firstContent");
      linkedList.insert("secondContent");
      linkedList.insert("thirdContent");
      var test = linkedList.contains("firstContent");
      expect(test).toBe(true);
    });

    it("should return true when you give it a time that is in the linked list no metter where it is", function() {
      linkedList.insert("firstContent");
      linkedList.insert("secondContent");
      linkedList.insert("thirdContent");
      var test = linkedList.contains("secondContent");
      expect(test).toBe(true);
    });

    it("should return false when you give it a time that is not in the linked list", function() {
      linkedList.insert("whatDoYouHave");
      var test = linkedList.contains("dontLookForMe");
      expect(test).toBe(false);
    });

  });
  // add more tests here to test the functionality of linkedList
});