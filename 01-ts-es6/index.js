var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
// Typage
var firstname = 'Fiorella';
var cars = ['Renault', 'Peugeot'];
var people = ['Fiorella', 'Marina'];
var valid = 1;
var unknown = 'Inconnu';
// Fonctions (ES6 arrow function)
var addition = function (a, b) { return a + b; };
// Classes (TypeScript)
var Log = function () {
    return function (target, propertyKey, descriptor) {
        // console.log(target, propertyKey, descriptor);
        // return () => {};
        var method = descriptor.value;
        descriptor.value = function () {
            console.log('CALL');
            method.apply(_this, arguments);
        };
    };
};
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
        this.wheel = 4;
    }
    Car.prototype.drive = function (driver) {
        // Template de string en ES6
        console.log("\n            ".concat(driver, " conduit la voiture ").concat(this.name, "\n        "));
    };
    __decorate([
        Log()
    ], Car.prototype, "drive", null);
    return Car;
}());
var car1 = new Car('Renault');
car1.drive('Fiorella');
car1.drive('Fiorella');
