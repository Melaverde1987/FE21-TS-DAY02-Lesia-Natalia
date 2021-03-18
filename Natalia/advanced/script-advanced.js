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
    function Vehicles(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg) {
        this.brand = brand;
        this.model = model;
        this.vehicleType = vehicleType;
        this.vehicleAge = vehicleAge;
        this.vehiclePrice = vehiclePrice;
        this.vehicleImg = vehicleImg;
        vehicleArray.push(this);
    }
    // define properties and methods for the parent class ===> consider the inheritance concept
    Vehicles.prototype.showVehicles = function () {
        return "\n      <div class=\"card m-2\">\n        <img src=\"" + this.vehicleImg + "\" class=\"card-img-top\" alt=\"...\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Model: " + this.model + "</h5>\n          <p class=\"card-text\">Brand: " + this.brand + "</p>\n          <p class=\"card-text\">Type: " + this.vehicleType + "</p>\n          <p class=\"card-text\">Age: " + this.vehicleAge + "</p>\n    ";
    };
    Vehicles.prototype.calculatePrice = function () {
        if (this.vehicleAge <= 2) {
            var newPrice = this.vehiclePrice += 1000;
            return "</div>\n      <div class=\"card-footer\">\n        <small class=\"text-muted\">Price: " + newPrice + " \u20AC</small>\n      </div>\n    </div>";
        }
        else if (this.vehicleAge > 2) {
            this.vehiclePrice += 100;
            return "</div>\n      <div class=\"card-footer\" id=\"show\">\n        <small class=\"text-muted\">Price: " + this.vehiclePrice + " \u20AC</small>\n      </div>\n    </div>";
        }
    };
    Vehicles.prototype.showPrice = function () {
        return document.getElementById("show").style.background = "#F5C518";
    };
    return Vehicles;
}());
var carOne = new Vehicles("VW", "Beetle", "Oldie but Goldie", 40, 2009, "img/dan-gold-N7RiDzfF2iw-unsplash.jpg");
var carTwo = new Vehicles("Ferrari", "Yellow Style", "Sport", 1, 5009, "img/dhiva-krishna-X16zXcbxU4U-unsplash.jpg");
var carThree = new Vehicles("VW", "Golf", "Small Family", 4, 10009, "img/jose-carbajal-8xyki0bqvgw-unsplash.jpg");
/* for (let value of vehicleArray) {
  document.getElementById("showCars").innerHTML += value.showVehicles();
  //console.table(carArray);
} */
// define a Motorbikes child class
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg, wheels) {
        var _this = _super.call(this, brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg) || this;
        _this.wheels = wheels;
        return _this;
    }
    Motorbikes.prototype.showVehicles = function () {
        return _super.prototype.showVehicles.call(this) + "\n    <p class=\"card-text\">Wheels: " + this.wheels + "</p>";
    };
    return Motorbikes;
}(Vehicles));
var motorbikeOne = new Motorbikes("Yamaha", "V Star 1100", "Classic", 10, 1009, "img/john-torcasio-knDdOAbLKJE-unsplash.jpg", 2);
var motorbikeTwo = new Motorbikes("Husquarna", "Dessert Edition", "Sport", 5, 60009, "img/nick-wood-Y0u3Pj5giyI-unsplash.jpg", 3);
// define a Trucks child class
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg, trailer) {
        var _this = _super.call(this, brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg) || this;
        _this.trailer = trailer;
        return _this;
    }
    Trucks.prototype.showVehicles = function () {
        if (this.trailer == true) {
            return _super.prototype.showVehicles.call(this) + "\n      <p class=\"card-text\">Trailer: Yes</p>";
        }
        else {
            return _super.prototype.showVehicles.call(this) + "\n      <p class=\"card-text\">Trailer: No</p>";
        }
    };
    return Trucks;
}(Vehicles));
var truckOne = new Trucks("Yamaha", "V Star 1100", "Classic", 10, 300009, "img/craige-mcgonigle-E_b5-5EbPPY-unsplash.jpg", true);
var truckTwo = new Trucks("Husquarna", "Dessert Edition", "Sport", 5, 400009, "img/nicolas-peyrol-xppBmQ9WqJ4-unsplash.jpg", false);
// loop through each element in the array - to display it in the browser
for (var _i = 0, vehicleArray_1 = vehicleArray; _i < vehicleArray_1.length; _i++) {
    var value = vehicleArray_1[_i];
    document.getElementById("showCars").innerHTML += value.showVehicles() + value.calculatePrice();
}
console.table(vehicleArray); // check with console.table() which elements are inside the loop
// Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user click on the button "show price" --- use your dummy custom formula
