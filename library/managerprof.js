const Employee = require('./employHub');

class Manager extends Employee {
    constructor(name, id, email, manageNum) {
        super(name, id, email);
        this.manageNumb = manageNum;
    }

    getRole() {
        return "Manager";
    }


    newEmpCard() {
        return `<div class="card">
        <div class="card-header bg-info text-light">
        <h3>${this.name}</h3>
        <h5>Manager</h5>
        </div>
        <div class="card-body" style="background-color:lightGray;">
        <ul class="list-group">
        <li class="list-group-item">Id: ${this.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item">Office #: ${this.manageNumb}</li>
        </ul>
        </div>
        </div>`;
    }
}

module.exports = Manager;