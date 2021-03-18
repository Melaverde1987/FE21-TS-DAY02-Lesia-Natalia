// Day 2 | Classwork | Advanced
// Create an App that has to offer four different of types of vehicles and list the vehicle models based on the selected panel. Once the user clicks on some vehicle show its details and possibility to view the price

var vehicleArray: Array<any> = [];

interface VehiclesData {
  brand: string;
  model: string;
  vehicleType: string;
  color?: string;
  vehicleAge: number;
  vehiclePrice: number;
  vehicleImg: string;
  wheels?: number;
  trailer?: boolean;
}

  // create a parent class called Vehicles

class Vehicles implements VehiclesData {
  brand;
  model;
  vehicleType;
  vehicleAge;
  vehiclePrice;
  vehicleImg;
  constructor(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg) {
    this.brand = brand;
    this.model = model;
    this.vehicleType = vehicleType;
    this.vehicleAge = vehicleAge;
    this.vehiclePrice = vehiclePrice;
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

  calculatePrice() { // divide the container to insert elements in a specific area/place
    if (this.vehicleAge <= 2) {
      let newPrice = this.vehiclePrice += 1000;
      return  `</div>
      <div class="card-footer">
        <small class="text-muted">Price: ${newPrice} €</small>
      </div>
    </div>`;
    } else if (this.vehicleAge > 2) {
      this.vehiclePrice += 100;
      return `</div>
      <div class="card-footer" id="show">
        <small class="text-muted">Price: ${this.vehiclePrice} €</small>
      </div>
    </div>`;
    }
  }

  showPrice() {
    return document.getElementById("show").style.background = "#F5C518"; 
    
  }
}

var carOne = new Vehicles("VW", "Beetle", "Oldie but Goldie", 40, 2009, "img/dan-gold-N7RiDzfF2iw-unsplash.jpg")
var carTwo = new Vehicles("Ferrari", "Yellow Style", "Sport", 1, 5009, "img/dhiva-krishna-X16zXcbxU4U-unsplash.jpg")
var carThree = new Vehicles("VW", "Golf", "Small Family", 4, 10009, "img/jose-carbajal-8xyki0bqvgw-unsplash.jpg")

/* for (let value of vehicleArray) {
  document.getElementById("showCars").innerHTML += value.showVehicles();
  //console.table(carArray);
} */

  // define a Motorbikes child class
class Motorbikes extends Vehicles {
  wheels;
  constructor(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg, wheels) {
    super(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg);
    this.wheels = wheels;
  }
  showVehicles() {
    return `${super.showVehicles()}
    <p class="card-text">Wheels: ${this.wheels}</p>`;
  }
}

var motorbikeOne = new Motorbikes("Yamaha", "V Star 1100", "Classic", 10, 1009, "img/john-torcasio-knDdOAbLKJE-unsplash.jpg", 2);
var motorbikeTwo = new Motorbikes("Husquarna", "Dessert Edition", "Sport", 5, 60009, "img/nick-wood-Y0u3Pj5giyI-unsplash.jpg", 3);

  // define a Trucks child class
class Trucks extends Vehicles {
  trailer;
  constructor(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg, trailer) {
    super(brand, model, vehicleType, vehicleAge, vehiclePrice, vehicleImg);
    this.trailer = trailer;
  }
  showVehicles() {
    if (this.trailer == true) {
      return `${super.showVehicles()}
      <p class="card-text">Trailer: Yes</p>`;
    } else {
      return `${super.showVehicles()}
      <p class="card-text">Trailer: No</p>`;
    } 
  }
}

var truckOne = new Trucks("Yamaha", "V Star 1100", "Classic", 10, 300009, "img/craige-mcgonigle-E_b5-5EbPPY-unsplash.jpg", true);
var truckTwo = new Trucks("Husquarna", "Dessert Edition", "Sport", 5, 400009, "img/nicolas-peyrol-xppBmQ9WqJ4-unsplash.jpg", false);

  // loop through each element in the array - to display it in the browser
for (let value of vehicleArray) {
  document.getElementById("showCars").innerHTML += value.showVehicles() + value.calculatePrice();
}

console.table(vehicleArray); // check with console.table() which elements are inside the loop


  // Based on the personal vehicle performance model, kilometers left, number of seats, fuel type and year of production calculate the price once the user click on the button "show price" --- use your dummy custom formula
