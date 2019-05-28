function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck = new Bird();
let beagle = new Dog();
duck.eat()
