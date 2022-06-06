

class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }
    searchEmployee(employee) {
        const index = this._employees.findIndex(e => e.id === employee.id);

        return index < 0;
    }
    
    addEmployee(employee) {
        const index = this._employees.findIndex(e => e.id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    removeEmployee(id){
        const index = this._employees.findIndex(e => e.id === id);
        if(index >= 0){
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    maxAge(){
        if(this._employees.length !== 0) return this._employees.reduce((max, p) => p.age > max ? p.age : max, this.employees[0].age);
        else return 0;
    }

    minAge(){
        if(this._employees.length !== 0)return this._employees.reduce((min, p) => p.age < min ? p.age : min, this.employees[0].age);
        else return 0;
    }

    averageAge(){
        if(this._employees.length !== 0)return this._employees.reduce((accum, p) => accum + p.age, 0) / this.employees.length;
        else return 0;
    }

    averageSalary(){
        if(this._employees.length !== 0)return this._employees.reduce((accum, p) => accum + p.salary, 0) / this.employees.length;
        else return 0;
    }

    totalSalary(){
        if(this._employees.length !== 0)return this._employees.reduce((accum, p) => accum + p.salary, 0);
        else return 0;
    }

}
