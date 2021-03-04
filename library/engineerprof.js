const Employee = require('./employHub');

class Engineer extends Employee {
    constructor(engName, engId, engEmail, engGithub) {
        super(engName, engId, engEmail);
        this.engGithub = engGithub;
    }

    getGithub() {
        return this.engGithub;
    }

    getRole() {
        return "Engineer";
    }

    newEmpCard() {
        return `<div class="card">
        <div class="card-header bg-info text-light">
        <h3>${this.engName}</h3>
        <h5>Manager</h5>
        </div>
        <div class="card-body" style="background-color:lightGray;">
        <ul class="list-group">
        <li class="list-group-item">Id: ${this.engId}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.engEmail}">${this.managEmail}</a></li>
        <li class="list-group-item">Github: ${this.engGithub}</li>
        </ul>
        </div>
        </div>`;
    }
}

module.exports = Engineer;