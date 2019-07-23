function take(initNum) {
  return {
    value: initNum,
    add: function(num) {
      this.value = this.value + num;
      return this;
    },
    subtract: function(num) {
      this.value = this.value - num;
      return this;
    },
    multiplyBy: function(num) {
      this.value = this.value * num;
      return this;
    },
    divideBy: function(num) {
      this.value = this.value / num;
      return this;
    }
  }
}

// TEST CASES
console.log(
  'take(1).add(1).add(2).value === 4',
  take(1).add(1).add(2).value,
  take(1).add(1).add(2).value === 4
);
console.log(
  'take(10).add(10).subtract(2).multiplyBy(2).divideBy(2).value === 18',
  take(10).add(10).subtract(2).multiplyBy(2).divideBy(2).value,
  take(10).add(10).subtract(2).multiplyBy(2).divideBy(2).value === 18
)
