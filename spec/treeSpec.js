describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree("root");
  });

  it("should have an array of children", function() {
    expect(tree.children).toEqual(jasmine.any(Array));
  });

  it("should have a property maned parent", function() {
    expect(Object.keys(tree)).toContain("parent");
  });

  it("should have a method named 'addChild'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'traverse'", function() {
    expect(tree.traverse).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'removeSelf'", function() {
    expect(tree.removeSelf).toEqual(jasmine.any(Function));
  });  

  it("should have a method named 'contains'", function() {
    expect(tree.contains).toEqual(jasmine.any(Function));
  });

  it("should have a propety named 'payLoad'", function() {
    expect(Object.keys(tree)).toContain("payLoad");
  });    


  describe("addChild", function() {

    it("should contain a child in children array after adding new child", function() {
      tree.addChild("testChild");
      expect(tree.children[0].payLoad).toBe("testChild");
    }); 

    it("should contain mutiple children in children array after adding new children", function() {
      var first = tree.addChild("firstOne");
      var second = first.addChild("secondOne");
      var third = second.addChild("thirdOne");
      var fourth = third.addChild("fourthOne");      
      expect(third.children[0].payLoad).toBe("fourthOne");
    });    

  });

  describe("removeSelf", function() {

    it("should remove it self after adding it", function() {
      (tree.addChild("removeMe")).removeSelf();
      expect(tree.children).not.toContain("removeMe");
    }); 

    it("should return some warning when self is root", function() {
      expect(tree.removeSelf()).toBe("warning");
    }); 

    it("should remove it self after insering many children", function() {
      var first = tree.addChild("firstOne");
      var second = first.addChild("secondOne");
      var third = second.addChild("thirdOne");
      var iAmTheOne = third.addChild("iShouldBeRemoved");      
      iAmTheOne.removeSelf();             
      expect(third.children.length).toBe(0);
    });    

    it("should remove it self even if self has children", function() {
      var first = tree.addChild("firstOne");
      var iAmTheOne = first.addChild("iShouldBeRemoved");
      var third = iAmTheOne.addChild("thirdOne");
      var fourth = third.addChild("fourthOne");      
      iAmTheOne.removeSelf();             
      expect(first.children.length).toBe(0);
    });

  });

   describe("contains", function() {

    it("should return trun when you give it a value that is in the tree", function() {
      tree.addChild("iAmHere");
      expect(tree.contains("iAmHere")).toBe(true);
    }); 

    it("return false when you give it a value that is in the tree", function() {
      tree.addChild("youDontLook4Me");
      expect(tree.contains("iAmHere")).toBe(false);
    });    

  }); 

  // Add more tests here to test the functionality of tree.
  // If you're feeling frisky, have your tree nodes track their
  // parent and add a function called removeFromParent.
});