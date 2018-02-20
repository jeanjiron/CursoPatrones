var TestBuilderPattern = /** @class */ (function () {
    function TestBuilderPattern() {
        this.shop = new Director();
        this.carBuilder = new CarBuilder();
        var car = this.shop.construc(this.carBuilder);
        car.doSomething();
    }
    return TestBuilderPattern;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.construc = function (builder) {
        builder.step1();
        builder.step2();
        return builder.getResult();
    };
    return Director;
}());
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
        this.car = undefined;
    }
    CarBuilder.prototype.step1 = function () {
        this.car = new Car();
    };
    CarBuilder.prototype.step2 = function () {
        this.car.addParts();
    };
    CarBuilder.prototype.getResult = function () {
        return this.car;
    };
    return CarBuilder;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.addParts = function () {
        this.doors = 4;
    };
    Car.prototype.doSomething = function () {
        console.log("Tengo " + this.doors + " puertas");
    };
    return Car;
}());
var test = new TestBuilderPattern();
