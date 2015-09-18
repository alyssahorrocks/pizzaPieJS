function Pizza(size, meatTop, vegTop, quantity) {
  this.size = size;
  this.meatTop = meatTop;
  this.vegTop = vegTop;
  this.quantity = quantity;
}

Pizza.prototype.cost = function() {
  var sizeCost = 0;

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

function resetForm() {
    $('#newQuantity').text("");
    $('input:checkbox').prop('checked', false);
    $("div.freshPizza").not(':first').remove();
}

$(document).ready(function() {
  $("#addPizza").click(function() {
    $("#pizzas").append("<div class='freshPizza'>" +
                          "<form id='newPizza'>" +
                          "<div class='form-group'>" +
                            "<label class='checkbox-inline' for='newSize'>Select ONE size:</label>" +
                            "<label class='checkbox-inline'><input type='checkbox' value='Small' class='size'>Small</label>" +
                            "<label class='checkbox-inline'><input type='checkbox' value='Medium' class='size'>Medium</label>" +
                            "<label class='checkbox-inline'><input type='checkbox' value='Large' class='size'>Large</label>" +
                          "</div>" +

                            "<div class='form-group'>" +
                              "<label class='checkbox-inline' for='newMeat'>Select any Meat Toppings:</label><br>" +
                              "<input type='checkbox' class='meat'> Organic Pepperoni<br>" +
                              "<input type='checkbox' class='meat'> Fennel Sausage<br>" +
                              "<input type='checkbox' class='meat'> BBQ Chicken<br>" +
                              "<input type='checkbox' class='meat'> Seschuan Beef<br>" +
                              "<input type='checkbox' class='meat'> Applewood Bacon<br>" +
                            "</div>" +

                            "<div class='form-group'>" +
                              "<label class='checkbox-inline' for='newVeg'>Select any Vegetable Toppings:</label><br>" +
                              "<input type='checkbox' class='veg'> Sesame Kale<br>" +
                              "<input type='checkbox' class='veg'> Roasted Garlic<br>" +
                              "<input type='checkbox' class='veg'> Carmelized Onion<br>" +
                              "<input type='checkbox' class='veg'> Toasted Pine Nuts<br>" +
                              "<input type='checkbox' class='veg'> Fresh Green Peppers<br>" +
                              "<input type='checkbox' class='veg'> Heirloom Tomato Slices<br>" +
                              "<input type='checkbox' class='veg'> Rosemary Sauteed Mushrooms<br>" +
                            "</div>" +

                            "<div class='form-group'>" +
                              "<label for='newQuantity'>How many pies?</label>" +
                              "<input type='text' id='newQuantity' placeholder='Ex. 2'>" +
                            "</div>" +
                          "</div>" +
                        "</div>" );
  });

  $("form#newPizza").submit(function(event) {
    var totalCost = 0;
    var pizzas = [];

    $("div.freshPizza").each(function() {
      var size = $(this).find("input.size:checked").val();
      var meatTop = $(this).find("input.meat:checked").length;
      var vegTop = $(this).find("input.veg:checked").length;
      var quantity = $(this).find("#newQuantity").val();

      var pie = new Pizza(size, meatTop, vegTop, quantity);
      totalCost = totalCost + pie.cost();
      pizzas.push(pie);
    });

    pizzas.forEach(function(pie) {
      $("ul#pizzas").append("<li>" + pie.quantity + " " + pie.size + "</li>" +
                              "<li>" + pie.meatTop + " meat topping" + "</li>" +
                              "<li>" + pie.vegTop + " vegetable topping" + "</li><br>");

    });

    $("#totalCost").text("$ " + totalCost);
    $("#checkout").show();

    $("#confirm").click(function() {
      alert("Order Successful! Your order will be ready for pickup in 20-120 minutes. Thank you.");
      resetForm($("#newPizza"));
    });

    event.preventDefault();
  });
});
