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
};



$(document).ready(function() {
  $("#addPizza").click(function() {
    $("#pizzas").append("<div class='pizza'>" +
                          "<form id='newPizza'>" +
                            "<div class='radio-inline'>" +
                              "<label><input type='radio' name='optradio' value='Small'id='size'>Small</label><br>" +
                              "<label><input type='radio' name='optradio' value='Medium' id='size'>Medium</label><br>" +
                              "<label><input type='radio' name='optradio' value='Large'id='size'>Large</label><br>" +
                            "</div>" +

                            "<div class='form-group'>" +
                              "<label class='checkbox-inline' for='newMeat'>Select any Meat Toppings:</label><br>" +
                              "<input type='checkbox' class='meat'> Organic Pepperoni" +
                              "<input type='checkbox' class='meat'> Fennel Sausage" +
                              "<input type='checkbox' class='meat'> BBQ Chicken" +
                              "<input type='checkbox' class='meat'> Seschuan Beef" +
                              "<input type='checkbox' class='meat'> Applewood Bacon" +
                            "</div>" +

                            "<div class='form-group'>" +
                              "<label class='checkbox-inline' for='newVeg'>Select any Vegetable Toppings:</label><br>" +
                              "<input type='checkbox' class='veg'> Sesame Kale" +
                              "<input type='checkbox' class='veg'> Roasted Garlic" +
                              "<input type='checkbox' class='veg'> Carmelized Onion" +
                              "<input type='checkbox' class='veg'> Toasted Pine Nuts" +
                              "<input type='checkbox' class='veg'> Fresh Green Peppers" +
                              "<input type='checkbox' class='veg'> Heirloom Tomato Slices" +
                              "<input type='checkbox' class='veg'> Rosemary Sauteed Mushrooms" +
                            "</div>" +

                            "<div class='form-group'>" +
                              "<label for='newQuantity'>How many pies?</label>" +
                              "<input type='text' id='newQuantity' placeholder='Ex. 2'>" +
                            "</div>" +
                          "</div>" +
                        "</div>" );
  });

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
