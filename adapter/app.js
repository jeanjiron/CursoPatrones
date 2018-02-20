/**
*clase anterior
*/
var AdapterShipping = /** @class */ (function () {
    function AdapterShipping() {
    }
    AdapterShipping.prototype.request = function (origen, destino, peso) {
        this.origen = origen;
        this.destino = destino;
        this.peso = peso;
        this.total = peso * 100;
        return this.total;
    };
    return AdapterShipping;
}());
/**
*clase nueva
*/
var TargetShipping = /** @class */ (function () {
    function TargetShipping() {
    }
    TargetShipping.prototype.login = function (credenciales) {
        //TODO
    };
    TargetShipping.prototype.setOrigen = function (origen) {
        this.origen = origen;
    };
    TargetShipping.prototype.setDestino = function (destino) {
        this.destino = destino;
    };
    TargetShipping.prototype.calculate = function (peso) {
        this.peso = peso;
        this.total = peso * 100;
        return this.total;
    };
    return TargetShipping;
}());
/**
*Adaptador que recibe los parametros de la forma antigua pero los procesa con la
*nueva clase
*/
var ShippingAdapter = /** @class */ (function () {
    function ShippingAdapter(credentials) {
        this.credentials = credentials;
        this.targetShipping = new TargetShipping();
        this.targetShipping.login(this.credentials);
    }
    ShippingAdapter.prototype.request = function (origen, destino, peso) {
        this.targetShipping.setOrigen(origen);
        this.targetShipping.setDestino(destino);
        return this.targetShipping.calculate(peso);
    };
    return ShippingAdapter;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.run = function () {
        var oldInterface = new AdapterShipping();
        var cost = oldInterface.request(123, 456, 6);
        console.log(cost);
        var credentials = "user/password";
        var shippingAdapter = new ShippingAdapter(credentials);
        var newCost = shippingAdapter.request(123, 456, 6);
        console.log(newCost);
    };
    return Client;
}());
var client = new Client();
client.run();
