const data = require('./data.json');


module.exports = class PriceCalculator {
  constructor(payload) {
    this.pizzaType = payload.pizzaType;
    this.pizzaSize = payload.pizzaSize;
    this.crust = payload.crust;
    this.topping = payload.topping;
    this.quantity = payload.quantity;
  }

  calculateTotal() {
    let total = 0;

    // current pizza info
    const pizzaInfo = data.pizza[this.pizzaType];

    // calculate base pizza price
    total = (total + pizzaInfo.size[this.pizzaSize] + pizzaInfo.crust[this.crust]) * this.quantity;

    // add topping price to total
    this.topping.forEach(element => {
      total = total + data.topping[element];
    });

    return total;
  }
};
