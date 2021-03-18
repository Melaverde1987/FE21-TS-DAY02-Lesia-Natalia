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
console.log("hi");
var Person = /** @class */ (function () {
    function Person(a, b, c) {
        this.fName = a;
        this.personAge = b;
        this.jobTitle = c;
    }
    Person.prototype.greeting = function () {
        return "Hello there, My name is " + this.fName + " and I am " + this.personAge + " years old, and I am a " + this.jobTitle;
    };
    return Person;
}());
var personOne = new Person("Mary", 30, "IT");
document.getElementById('showMsg').innerHTML = personOne.greeting();
// Basic 2 - Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”
var SalaryPerson = /** @class */ (function (_super) {
    __extends(SalaryPerson, _super);
    function SalaryPerson(a, b, c, d) {
        var _this = _super.call(this, a, b, c) || this;
        _this.salary = d;
        return _this;
    }
    SalaryPerson.prototype.showMessage = function () {
        return _super.prototype.greeting.call(this) + " and my salary is " + this.salary + " \u20AC";
    };
    return SalaryPerson;
}(Person));
var personTwo = new SalaryPerson("Elisabeth", 22, "Student", 1000);
document.getElementById('showMsg').innerHTML = personTwo.showMessage();
