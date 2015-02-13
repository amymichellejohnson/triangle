var triangle = function(side1, side2, side3) {

  if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <=side1) {
    return "This is not a valid triangle"
  } else {
    if (side1 === side2 && side1 === side3 && side2 === side3) {
      return "equilateral"
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "isosceles"
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3){
      return "scalene"
    };
  };

};

$(function() {
  $("form#triangle").submit(function(event) {
    var sidesarray = ($("input#sides").val()).split(",")
    var side1=parseInt(sidesarray[0]);
    var side2=parseInt(sidesarray[1]);
    var side3=parseInt(sidesarray[2]);

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      $(".results").text("An error has occurred, please check your input!");
    }
      else {
      var results = triangle(side1,side2,side3);
      $(".results").text(results);
    };


    $("#results").show();
    event.preventDefault();
  });
});
