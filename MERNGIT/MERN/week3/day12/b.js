function calculateArea() {
    var shape = prompt("Enter Shape");
  shape=shape.toLowerCase();
    var area = 0;
    if (shape == "circle") {
      var radius = prompt("Enter radius");
      area = Math.PI * Math.pow(radius, 2);
    }	
    if (shape == "rectangle") {
      var width = prompt("Enter width");
      var length = prompt("Enter width");
      area = Math.PI * width * length;
    }
    return area;
  }