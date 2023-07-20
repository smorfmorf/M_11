'use strict';
const cart = {
  items: [], // Массив товаров
  count: 0, // Количество товаров

  // Геттер для получения общей стоимости товаров
  get totalPrice() {
    return this.calculateItemPrice();
  },

  // Метод для пересчета стоимости всей корзины
  calculateItemPrice() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  },

  // Метод для увеличения количества товаров
  increaseCount(num) {
    this.count += num;
  },

  // Метод для добавления товара
  add(name, price, quantity = 1) {
    const item = {
      name,
      price,
      quantity,
    };

    this.items.push(item);
    this.increaseCount(quantity);
  },

  // Метод для очистки корзины
  clear() {
    this.items = [];
    this.count = 0;
  },

  // Метод для вывода информации о корзине
  print() {
    console.log(JSON.stringify(this.items));
    console.log('Общая стоимость корзины: ' + this.totalPrice);
  },
};

// Пример использования
cart.add('Товар 1', 10, 2);
cart.add('Товар 2', 5, 3);
cart.add('Товар 3', 8);
cart.print();

console.log('cart.totalPrice: ', cart.totalPrice);
