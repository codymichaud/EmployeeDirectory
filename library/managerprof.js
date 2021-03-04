const Employee = require('./employHub');

class Manager extends Employee {
    constructor(managName, managId, managEmail, manageNum) {
        super(managName, managId, managEmail);
        this.manageNumb = manageNum;
    }

    getRole() {
        return "Manager";
    }


    newEmpCard() {
        return `<div class="card">
        <div class="card-header bg-info text-light">
        <h3>${this.managName}</h3>
        <h5>Manager</h5>
        </div>
        <div class="card-body" style="background-color:lightGray;">
        <ul class="list-group">
        <li class="list-group-item">Id: ${this.managId}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.managEmail}">${this.managEmail}</a></li>
        <li class="list-group-item">Office #: ${this.manageNumb}</li>
        </ul>
        </div>
        </div>`;
    }
}

module.exports = Manager;