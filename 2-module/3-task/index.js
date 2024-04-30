let calculator = {
  read: function (a, b) {
    this.value_1 = a;
    this.value_2 = b;
  },
  sum: function () {
    return this.value_1 + this.value_2;
  },
  mul: function () {
    return this.value_1 * this.value_2;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
