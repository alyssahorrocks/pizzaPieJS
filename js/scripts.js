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


  // $("#addPizza").click(function() {
  //   $("#newPizzas").append("<div class="newPizza">" +
  //               "<form id="newPizza">" +
  //                 "<div class="form-group">" +
  //                   "<label for="newSize">Select a Size:</label>" +
  //                   "<input type="button" value="Small" id="newSizeSm">" +
  //                   "<input type="button" value="Medium" id="newSizeMd">" +
  //                   "<input type="button" value="Large" id="newSizeLg">" +
  //                 "</div>" +
  //
  //                 "<div class="form-group">" +
  //                   "<label class="checkbox-inline" for="newMeat">Select any Meat Toppings:</label>" +
  //                   "<input type="checkbox" id="inlineCheckbox1" value="meat1"> Organic Pepperoni" +
  //                   "<input type="checkbox" id="inlineCheckbox2" value="meat1"> Fennel Sausage" +
  //                   "<input type="checkbox" id="inlineCheckbox3" value="meat1"> BBQ Chicken" +
  //                   "<input type="checkbox" id="inlineCheckbox4" value="meat1"> Seschuan Beef" +
  //                   "<input type="checkbox" id="inlineCheckbox5" value="meat1"> Applewood Bacon" +
  //                 "</div>" +
  //
  //                 "<div class="form-group">" +
  //                   "<label class="checkbox-inline" for="newVeg">Select any Meat Toppings:</label>" +
  //                   "<input type="checkbox" id="inlineCheckbox1" value="veg1"> Sesame Kale" +
  //                   "<input type="checkbox" id="inlineCheckbox2" value="veg1"> Roasted Garlic" +
  //                   "<input type="checkbox" id="inlineCheckbox3" value="veg1"> Carmelized Onion" +
  //                   "<input type="checkbox" id="inlineCheckbox4" value="veg1"> Toasted Pine Nuts" +
  //                   "<input type="checkbox" id="inlineCheckbox5" value="veg1"> Fresh Green Peppers" +
  //                   "<input type="checkbox" id="inlineCheckbox6" value="veg1"> Heirloom Tomato Slices" +
  //                   "<input type="checkbox" id="inlineCheckbox7" value="veg1"> Rosemary Sauteed Mushrooms" +
  //                 "</div>" +
  //
  //                 "<div class="form-group">" +
  //                   "<label for="newQuantity">How many pies?</label>" +
  //                   "<input type="text" id="newQuantity" placeholder="Ex. 2">" +
  //                 "</div>" +
  //                 "<br>");
  // });
$(document).ready(function() {
  $("form#newPizza").submit(function(event) {
    var size = $("#size").val();
    var meatTop = $("input.meat:checked").length;
    var vegTop = $("input.veg:checked").length;
    var quantity = parseInt($("#newQuantity").val());
    var pie = new Pizza(size, meatTop, vegTop, quantity);

    $("ul#pizzas").append("<li>" + pie.quantity + " " + pie.size + "</li>" +
                          "<li>" + pie.meatTop + " meat topping" + "</li>" +
                          "<li>" + pie.vegTop + " vegetable topping" + "</li>");
    $("#totalCost").text("$ " + pie.cost());

    $("#checkout").show();
    event.preventDefault();
  });
});
