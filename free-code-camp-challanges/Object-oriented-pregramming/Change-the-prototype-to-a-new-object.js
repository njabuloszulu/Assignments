function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Add your code below this line
    constructor:Dog,
    numLegs: 4,
    eat: function () {
        console.log("milk and chocolate");
    },
    describe: function () {
        console.log("My name is " +this.name);
    }
};

Dog.prototype.eat()
Dog.prototype.describe()