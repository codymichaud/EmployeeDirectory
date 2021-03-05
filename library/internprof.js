const Employee = require('./employHub');

class Intern extends Employee {
    constructor(name, id, email, intEdu) {
        super(name, id, email);
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
        <h3>${this.name}</h3>
        <h5>Manager</h5>
        </div>
        <div class="card-body" style="background-color:lightGray;">
        <ul class="list-group">
        <li class="list-group-item">Id: ${this.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
        <li class="list-group-item">Education: ${this.intEdu}</li>
        </ul>
        </div>
        </div>`;
    }
}

module.exports = Intern;