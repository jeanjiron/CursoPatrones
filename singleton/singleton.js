var aSingleton = (function () {
    function aSingleton() {
        this.privateNumber = Math.round(Math.random() * 1000);
    }
    aSingleton.getInstance = function () {
        if (!this.instance) {
            this.instance = new aSingleton();
        }
        return this.instance;
    };
    aSingleton.prototype.privateMethod = function () {
        console.log("Iḿ a private method");
    };
    aSingleton.prototype.getRandomNumber = function () {
        return this.privateNumber;
    };
    aSingleton.prototype.publicMethod = function () {
        console.log("entrandoa a public method");
        this.privateMethod();
        console.log("saliendo de public method");
    };
    return aSingleton;
}());
var testOne = aSingleton.getInstance();
var testTwo = aSingleton.getInstance();
testTwo.publicMethod();
console.log("testOne" + testOne.getRandomNumber());
console.log("testTwo" + testTwo.getRandomNumber());
