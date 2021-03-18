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
var PersonData = /** @class */ (function () {
    function PersonData(personName, personAge, jobTitle) {
        this.personName = personName;
        this.personAge = personAge;
        this.jobTitle = jobTitle;
    }
    PersonData.prototype.greeting = function () {
        return 'Hello there, My name is ' + this.personName + ' and I am ' + this.personAge + 'years old, and I am a ' + this.jobTitle;
    };
    return PersonData;
}());
var Salary = /** @class */ (function (_super) {
    __extends(Salary, _super);
    function Salary(personName, personAge, jobTitle, salary) {
        var _this = _super.call(this, personName, personAge, jobTitle) || this;
        _this.salary = salary;
        return _this;
    }
    Salary.prototype.showMessage = function () {
        return _super.prototype.greeting.call(this) + " and the salary is " + this.salary;
    };
    return Salary;
}(PersonData));
var Person1 = new Salary('Anna', 25, 'IT', 2000);
document.write(Person1.showMessage());
