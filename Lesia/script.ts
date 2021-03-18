interface Person {
    personName: string;
    personAge: number;
    jobTitle: string;
    greeting: Function;
}

class PersonData implements Person {
    personName;
    personAge;
    jobTitle;

    constructor(personName, personAge, jobTitle) {
        this.personName = personName;
        this.personAge = personAge;
        this.jobTitle = jobTitle;
    }

    greeting () {
        return 'Hello there, My name is ' + this.personName + ' and I am ' + this.personAge + 'years old, and I am a ' + this.jobTitle;
    };
}

class Salary extends PersonData {
    salary: number;
    constructor(personName, personAge, jobTitle, salary) {
        super(personName, personAge, jobTitle);
        this.salary = salary;
    }
    showMessage() {
        return `${super.greeting()} and the salary is ${this.salary} `;
    }
}


var Person1 = new Salary('Anna', 25, 'IT', 2000);

document.write(Person1.showMessage());
