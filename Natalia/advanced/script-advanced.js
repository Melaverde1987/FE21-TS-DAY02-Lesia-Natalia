// Day 2 | Classwork | Advanced
// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicleArray = [];
// create a parent class called Vehicles
var Vehicles = /** @class */ (function () {
    function Vehicles(brand, model, vehicleType, vehicleAge, vehicleImg) {
        this.brand = brand;
        this.model = model;
        this.vehicleType = vehicleType;
        this.vehicleAge = vehicleAge;
        // this.vehiclePrice = vehiclePrice;
        this.vehicleImg = vehicleImg;
        vehicleArray.push(this);
    }
    // define properties and methods for the parent class ===> consider the inheritance concept
    Vehicles.prototype.showVehicles = function () {
        return "\n      <div class=\"card m-2\">\n        <img src=\"" + this.vehicleImg + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Model: " + this.model + "</h5>\n          <p class=\"card-text\">Brand: " + this.brand + "</p>\n          <p class=\"card-text\">Type: " + this.vehicleType + "</p>\n          <p class=\"card-text\">Age: " + this.vehicleAge + "</p>\n    ";
    };
    Vehicles.prototype.closingDiv = function () {
        return "</div>\n    <div class=\"card-footer\">\n      <small class=\"text-muted\">Total Price: $ {this.carPrice}</small>\n    </div>\n  </div>";
    };
    return Vehicles;
}());
var carOne = new Vehicles("VW", "Beetle", "Oldie but Goldie", 40, "img/dan-gold-N7RiDzfF2iw-unsplash.jpg");
var carTwo = new Vehicles("Ferrari", "Yellow Style", "Sport", 1, "img/dhiva-krishna-X16zXcbxU4U-unsplash.jpg");
var carThree = new Vehicles("VW", "Golf", "Small Family", 4, "img/jose-carbajal-8xyki0bqvgw-unsplash.jpg");
/* for (let value of vehicleArray) {
  document.getElementById("showCars").innerHTML += value.showVehicles();
  //console.table(carArray);
} */
// define 2 other child classes and name them Motorbikes and Trucks
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(brand, model, vehicleType, vehicleAge, vehicleImg, wheels) {
        var _this = _super.call(this, brand, model, vehicleType, vehicleAge, vehicleImg) || this;
        _this.wheels = wheels;
        return _this;
    }
    Motorbikes.prototype.showVehicles = function () {
        return _super.prototype.showVehicles.call(this) + "\n    <p class=\"card-text\">Wheels: " + this.wheels + "</p>";
    };
    return Motorbikes;
}(Vehicles));
var motorbikeOne = new Motorbikes("Yamaha", "V Star 1100", "Classic", 10, "img/john-torcasio-knDdOAbLKJE-unsplash.jpg", 2);
for (var _i = 0, vehicleArray_1 = vehicleArray; _i < vehicleArray_1.length; _i++) {
    var value = vehicleArray_1[_i];
    document.getElementById("showCars").innerHTML += value.showVehicles() + value.closingDiv();
    console.table(vehicleArray);
}
console.table(vehicleArray);
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user click on the button "show price" --- use your dummy custom formula
