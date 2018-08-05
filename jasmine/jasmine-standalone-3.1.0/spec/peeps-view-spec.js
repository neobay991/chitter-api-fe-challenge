'use strict';
describe("Unit Test: ", function() {
  var peepsView;

  beforeEach(function(){
    peepsView = new ViewAllPeepsView();
  });

  describe("html", function() {
    it("should wrap a peeps in html", function() {
      expect(peepsView.html()).toEqual("<div><li>ffff</li></div>")
    })
  });
});
