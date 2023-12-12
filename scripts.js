// Business Logic
function PizzaOrder(size, topping) {
    this.size = size;
    this.topping = topping;
  }
  PizzaOrder.prototype.calculateTotalCost = function() {
    const sizeOptions = {
      small: { name: "Small", price: 20 },
      medium: { name: "Medium", price: 25 },
      large: { name: "Large", price: 30 }
    };
}