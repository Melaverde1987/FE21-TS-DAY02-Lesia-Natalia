var myarray: Array<Vehicle> = [];

interface VehicleData {
    image: string;
    model: string;
    type: string;
    color: string;
    typeFuel: string;
    year: number;
    numberSeats: number;
    price: number;
    showPrice?: Function;
}

class Vehicle implements VehicleData {
    image;
    model;
    type;
    color;
    typeFuel;
    year;
    numberSeats;
    price;

    constructor(image, model, type, color, typeFuel, year, numberSeats, price) {
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

    showPrice() {
        if (this.color == 'blue') {
            this.price = this.price + 500;
            return this.price;
        } else if (this.year == 2020) {
            this.price = this.price + 200;
            return this.price;
        } else if (this.numberSeats > 6) {
            this.price = this.price + 700;
            return this.price;
        }
        return this.price;

    }
    
}

class Motorbikes extends Vehicle {
    numberWheel: number;
    constructor(image, model, type, color, typeFuel, year, numberSeats, numberWheel, price) {
        super(image, model, type, color, typeFuel, year, numberSeats, price);
        this.numberWheel = numberWheel;
    }

    showPrice() {
        if (this.numberWheel > 2) {
            this.price = super.showPrice() + 100;
            return this.price;
        }
        return this.price;
    }
    
}

class Trucks extends Vehicle {
    weight: number;
    constructor(image, model, type, color, typeFuel, year, numberSeats, weight, price) {
        super(image, model, type, color, typeFuel, year, numberSeats, price);
        this.weight = weight;
    }

    showPrice() {
        if (this.weight > 1000) {
            this.price = super.showPrice() + 600;
            return this.price;
        }
        return this.price;
    }
    
}


new Vehicle('https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg','Ferrari', 'A1', 'blue', 'Liquid fuels', 2019, 5, 2000);
new Vehicle('https://static.theceomagazine.net/wp-content/uploads/2019/12/12081609/ferrari.jpg', 'Mazda', 'B9', 'red', 'Liquid fuels', 2020, 6, 3000);
new Motorbikes('https://www.designindex.it/foto/159/vespa-150-gs-1955-02-grande.jpg', 'Vespa', 'C10', 'green', 'Liquid fuels', 2020, 6, 3, 3000);
new Trucks('https://www.daf.at/-/media/images/truck-configurator/background/backgroundvisual.jpg?mw=1200&hash=F0D7B9766E63F24BD21C1CF48EC70EF7BF6A1D70', 'Camion', 'D4', 'white', 'Liquid fuels', 2010, 6, 2000, 3000);
new Vehicle('https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg', 'Cadillac', 'B7', 'silber', 'Liquid fuels', 2018, 10, 5000);
new Vehicle('https://blog.dupontregistry.com/wp-content/uploads/2021/01/574590-scaled.jpg', 'Subaru', 'B7', 'gold', 'Liquid fuels', 2021, 4, 6000);


function largeItem() {
    var show = this.getElementsByClassName("hidden");
    for (let i = 0; i < show.length; i++) {
        show[i].classList.toggle('show');
    }

    var changeText = this.getElementsByClassName("button");
    for (let i = 0; i < changeText.length; i++) {
        if (changeText[i].innerHTML === "Show price") {
            changeText[i].innerHTML = "Hide price";
        } else {
            changeText[i].innerHTML = "Show price";
        }
    }
}

for (let i = 0; i < myarray.length; i++) {
    //console.table(myarray[i]);
    //document.write(myarray[i].showPrice());
    document.getElementById('row').innerHTML += `
        <div class="col col-4 mb-4">
          <div class="box">
              <div class="image">
                  <img src="${myarray[i].image}" alt="">
              </div>
              <div class="title h5 px-3 mt-2 text-center fs-3 fw-bold">${myarray[i].model}</div>
              <div class="px-3 fs-7">Color: ${myarray[i].color}</div>
              <div class="px-3 fs-7">Type: ${myarray[i].type}</div>
              <div class="px-3 fs-7">Type of Fuel: ${myarray[i].typeFuel}</div>
              <div class="px-3 fs-7">Year: ${myarray[i].year}</div>
              <div class="px-3 fs-7">Number of seats: ${myarray[i].numberSeats}</div>
              <div class="px-3 my-2 text-bold fs-3 fw-bold hidden"><span class='badge bg-my'>Price: ${myarray[i].showPrice()}</span></div>
              <div class="button x-3 mt-3 mb-4 text-center fs-8">Show price</div>
          </div>
        </div>   
  `;
}
var items = document.getElementsByClassName("col");
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', largeItem, false);
}
