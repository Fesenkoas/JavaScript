//Total salary, Average salary

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {

            this._salary = +salary;
    }
    toString = function () {
        return `ID: ${this.id}, ${this.firstName}, ${this.lastName}, age: ${this.age}, Salary: ${this._salary}`;
    }
}