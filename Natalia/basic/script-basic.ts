console.log("hi");

// Basic 1 - Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”

interface PersonTypes {
  fName: string;
  personAge: number;
  jobTitle: string;
  greeting: Function;
  salary?: number;
}

class Person implements PersonTypes{
  fName;
  personAge;
  jobTitle;
  constructor(a, b, c) {
    this.fName = a;
    this.personAge = b;
    this.jobTitle = c;
  }
  greeting() {
    return `Hello there, My name is ${this.fName} and I am ${this.personAge} years old, and I am a ${this.jobTitle}`;
  }
}

let personOne = new Person("Mary", 30, "IT");
document.getElementById('showMsg').innerHTML = personOne.greeting();


// Basic 2 - Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”


class SalaryPerson extends Person {
  salary;
  constructor(a, b, c, d) {
  super(a, b, c);
  this.salary = d;
  }
  showMessage() {
    return `${super.greeting()} and my salary is ${this.salary} €`;
  }
}

let personTwo = new SalaryPerson("Elisabeth", 22, "Student", 1000);
document.getElementById('showMsg').innerHTML = personTwo.showMessage();