const Employee = require('./employHub');

class Manager extends Employee {
    constructor(name, id, email, manageNum) {
        super(name, id, email);
        this.manageNumb = manageNum;
    }

    getRole() {
        return "Manager";
    }


    newManagerCard() {
        return `<div class="card">
        <div class="card-header bg-info text-light">
        <h3>${}`
    }
}