describe('Pizza', function() {
  it('establish a pizza with a size, number of meat toppings, number of vegetable toppings', function() {
    var testPizza = new Pizza("Small", 1, 1, 2);
    expect(testPizza.size).to.equal("Small");
    expect(testPizza.meatTop).to.equal(1);
    expect(testPizza.vegTop).to.equal(1);
    expect(testPizza.quantity).to.equal(2);
  });
});
