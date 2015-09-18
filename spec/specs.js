describe('Pizza', function() {
  it('establish a pizza with a size, number of meat toppings, number of vegetable toppings and quantity', function() {
    var testPizza = new Pizza("Small", 1, 1, 2);
    expect(testPizza.size).to.equal("Small");
    expect(testPizza.meatTop).to.equal(1);
    expect(testPizza.vegTop).to.equal(1);
    expect(testPizza.quantity).to.equal(2);
  });

  it('calculate the cost of the pizza based on its attributes', function() {
    var testPizza = new Pizza("Medium", 1, 1, 1);
    expect(testPizza.cost()).to.equal(13);
  });
});
