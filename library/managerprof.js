const Employee = require('./employHub');

class Manager extends Employee {
    constructor(name, id, email, manageNum) {
        super(name, id, email);
        this.manageNumb = manageNum;
    }
}