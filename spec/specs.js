describe("triangle", function(){

  it("will return equilateral if the 3 sides of the triangle entered are equal", function(){
    expect(triangle(3,3,3)).to.equal("equilateral");
  });

  it("will return isosceles if at least 2 of the sides are equal", function(){
    expect(triangle(2,3,2)).to.equal("isosceles");
  });

  it("will return scalene if none of the sides are equal", function() {
    expect(triangle(5,6,7)).to.equal("scalene");
  })

  it("will return that the inputed 3 sides do not make a valid triangle if any side is at least the lenth of the other two sides combined", function() {
    expect(triangle(2,2,8)).to.equal("This is not a valid triangle");
  });

  it("will return an error message if there is a typo in the input", function() {
    expect(triangle("amy",2,4)).to.equal("An error has occurred, please check your input!");
  });
});
