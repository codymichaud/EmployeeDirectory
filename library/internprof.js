const Employee = require('./employHub');

class Intern extends Employee {
    constructor(intName, intId, intEmail, intEdu) {
        super(intName, intId, intEmail);
        this.intEdu = intEdu;
    }

    getSchool() {
        return this.intEdu;
    }

    getRole() {
        return "Intern";
    }

    newEmpCard() {
        return `<div class="card">
        <div class="card-header bg-info text-light">
        <h3>${this.intName}</h3>
        <h5>Manager</h5>
        </div>
        <div class="card-body" style="background-color:lightGray;">
        <ul class="list-group">
        <li class="list-group-item">Id: ${this.intId}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.intEmail}">${this.intEmail}</a></li>
        <li class="list-group-item">Education: ${this.intEdu}</li>
        </ul>
        </div>
        </div>`;
    }
}

module.exports = Intern;