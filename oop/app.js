function Car(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}
 Car.prototype.sayHello = () => {
  console.log('hello');
 }
