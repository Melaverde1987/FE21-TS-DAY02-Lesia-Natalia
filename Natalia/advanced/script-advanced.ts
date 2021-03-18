// Day 2 | Classwork | Advanced
// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

var vehicleArray: Array<any> = [];

interface VehiclesData {
  brand: string;
  model: string;
  vehicleType: string;
  color?: string;
  vehicleAge: number;
  // carPrice: number;
  vehicleImg: string;
  wheels?: number;
}

  // create a parent class called Vehicles

class Vehicles implements VehiclesData {
  brand;
  model;
  vehicleType;
  vehicleAge;
  // vehiclePrice;
  vehicleImg;
  constructor(brand, model, vehicleType, vehicleAge, vehicleImg) {
    this.brand = brand;
    this.model = model;
    this.vehicleType = vehicleType;
    this.vehicleAge = vehicleAge;
    // this.vehiclePrice = vehiclePrice;
    this.vehicleImg = vehicleImg;
    vehicleArray.push(this);
  }

  // define properties and methods for the parent class ===> consider the inheritance concept
  showVehicles() {
      return `
      <div class="card m-2">
        <img src="${this.vehicleImg}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Model: ${this.model}</h5>
          <p class="card-text">Brand: ${this.brand}</p>
          <p class="card-text">Type: ${this.vehicleType}</p>
          <p class="card-text">Age: ${this.vehicleAge}</p>
    `;
  }

  closingDiv(){
    return `</div>
    <div class="card-footer">
      <small class="text-muted">Total Price: $ {this.carPrice}</small>
    </div>
  </div>`;
  }
}

var carOne = new Vehicles("VW", "Beetle", "Oldie but Goldie", 40, "img/dan-gold-N7RiDzfF2iw-unsplash.jpg")
var carTwo = new Vehicles("Ferrari", "Yellow Style", "Sport", 1, "img/dhiva-krishna-X16zXcbxU4U-unsplash.jpg")
var carThree = new Vehicles("VW", "Golf", "Small Family", 4, "img/jose-carbajal-8xyki0bqvgw-unsplash.jpg")

/* for (let value of vehicleArray) {
  document.getElementById("showCars").innerHTML += value.showVehicles();
  //console.table(carArray);
} */

  // define 2 other child classes and name them Motorbikes and Trucks
class Motorbikes extends Vehicles {
  wheels;
  constructor(brand, model, vehicleType, vehicleAge, vehicleImg, wheels) {
    super(brand, model, vehicleType, vehicleAge, vehicleImg);
    this.wheels = wheels;
  }
  showVehicles() {
    return `${super.showVehicles()}
    <p class="card-text">Wheels: ${this.wheels}</p>`;
  }
}

var motorbikeOne = new Motorbikes("Yamaha", "V Star 1100", "Classic", 10, "img/john-torcasio-knDdOAbLKJE-unsplash.jpg", 2);

for (let value of vehicleArray) {
  document.getElementById("showCars").innerHTML += value.showVehicles() + value.closingDiv();
  console.table(vehicleArray);
}
console.table(vehicleArray);

  // Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user click on the button "show price" --- use your dummy custom formula