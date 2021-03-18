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
var myarray = [];
var Vehicle = /** @class */ (function () {
    function Vehicle(image, model, type, color, typeFuel, year, numberSeats, price) {
        this.image = image;
        this.model = model;
        this.type = type;
        this.color = color;
        this.typeFuel = typeFuel;
        this.year = year;
        this.numberSeats = numberSeats;
        this.price = price;
        myarray.push(this);
    }
    Vehicle.prototype.showPrice = function () {
        if (this.color == 'blue') {
            this.price = this.price + 500;
            return this.price;
        }
        else if (this.year == 2020) {
            this.price = this.price + 200;
            return this.price;
        }
        else if (this.numberSeats > 6) {
            this.price = this.price + 700;
            return this.price;
        }
        return this.price;
    };
    return Vehicle;
}());
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(image, model, type, color, typeFuel, year, numberSeats, numberWheel, price) {
        var _this = _super.call(this, image, model, type, color, typeFuel, year, numberSeats, price) || this;
        _this.numberWheel = numberWheel;
        return _this;
    }
    Motorbikes.prototype.showPrice = function () {
        if (this.numberWheel > 2) {
            this.price = _super.prototype.showPrice.call(this) + 100;
            return this.price;
        }
        return this.price;
    };
    return Motorbikes;
}(Vehicle));
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(image, model, type, color, typeFuel, year, numberSeats, weight, price) {
        var _this = _super.call(this, image, model, type, color, typeFuel, year, numberSeats, price) || this;
        _this.weight = weight;
        return _this;
    }
    Trucks.prototype.showPrice = function () {
        if (this.weight > 1000) {
            this.price = _super.prototype.showPrice.call(this) + 600;
            return this.price;
        }
        return this.price;
    };
    return Trucks;
}(Vehicle));
new Vehicle('https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg', 'Ferrari', 'A1', 'blue', 'Liquid fuels', 2019, 5, 2000);
new Vehicle('https://static.theceomagazine.net/wp-content/uploads/2019/12/12081609/ferrari.jpg', 'Mazda', 'B9', 'red', 'Liquid fuels', 2020, 6, 3000);
new Motorbikes('https://www.designindex.it/foto/159/vespa-150-gs-1955-02-grande.jpg', 'Vespa', 'C10', 'green', 'Liquid fuels', 2020, 6, 3, 3000);
new Trucks('https://www.daf.at/-/media/images/truck-configurator/background/backgroundvisual.jpg?mw=1200&hash=F0D7B9766E63F24BD21C1CF48EC70EF7BF6A1D70', 'Camion', 'D4', 'white', 'Liquid fuels', 2010, 6, 2000, 3000);
new Vehicle('https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg', 'Cadillac', 'B7', 'silber', 'Liquid fuels', 2018, 10, 5000);
new Vehicle('https://blog.dupontregistry.com/wp-content/uploads/2021/01/574590-scaled.jpg', 'Subaru', 'B7', 'gold', 'Liquid fuels', 2021, 4, 6000);
function largeItem() {
    var show = this.getElementsByClassName("hidden");
    for (var i = 0; i < show.length; i++) {
        show[i].classList.toggle('show');
    }
    var changeText = this.getElementsByClassName("button");
    for (var i = 0; i < changeText.length; i++) {
        if (changeText[i].innerHTML === "Show price") {
            changeText[i].innerHTML = "Hide price";
        }
        else {
            changeText[i].innerHTML = "Show price";
        }
    }
}
for (var i = 0; i < myarray.length; i++) {
    //console.table(myarray[i]);
    //document.write(myarray[i].showPrice());
    document.getElementById('row').innerHTML += "\n        <div class=\"col col-4 mb-4\">\n          <div class=\"box\">\n              <div class=\"image\">\n                  <img src=\"" + myarray[i].image + "\" alt=\"\">\n              </div>\n              <div class=\"title h5 px-3 mt-2 text-center fs-3 fw-bold\">" + myarray[i].model + "</div>\n              <div class=\"px-3 fs-7\">Color: " + myarray[i].color + "</div>\n              <div class=\"px-3 fs-7\">Type: " + myarray[i].type + "</div>\n              <div class=\"px-3 fs-7\">Type of Fuel: " + myarray[i].typeFuel + "</div>\n              <div class=\"px-3 fs-7\">Year: " + myarray[i].year + "</div>\n              <div class=\"px-3 fs-7\">Number of seats: " + myarray[i].numberSeats + "</div>\n              <div class=\"px-3 my-2 text-bold fs-3 fw-bold hidden\"><span class='badge bg-my'>Price: " + myarray[i].showPrice() + "</span></div>\n              <div class=\"button x-3 mt-3 mb-4 text-center fs-8\">Show price</div>\n          </div>\n        </div>   \n  ";
}
var items = document.getElementsByClassName("col");
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', largeItem, false);
}
