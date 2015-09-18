function Pizza(size, meatTop, vegTop, quantity) {
  this.size = size;
  this.meatTop = meatTop;
  this.vegTop = vegTop;
  this.quantity = quantity;
}

Pizza.prototype.cost = function() {
  if (this.size === "Small") {
    var sizeCost = 8;
  } else if (this.size === "Medium") {
    var sizeCost = 10;
  } else {
    var sizeCost = 12;
  }

  var totalCost = this.quantity * (sizeCost + (this.meatTop * 2) + (this.vegTop * 1));
  return totalCost;
}
