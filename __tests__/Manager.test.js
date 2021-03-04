const Manager = require('../library/managerprof');

describe('Manager', () => {
    it('Can set the name, id, email and office Number', () => {
        const test = new Manager('Mike', 4, 'mike@mail.com', 684);
        expect(test.managName).toEqual(test.managName);
        expect(test.manageId).toEqual(test.manageId);
        expect(test.managEmail).toEqual(test.manageId);
        expect(this.manageNumb).toEqual(this.manageNumb);
    });


    describe('getRole', () => {
        it('returns Manager', () => {
            const position = 'Manager';
            const test = new Manager('Mike', 4, 'mike@mail.com', 684);
            expect(test.getRole()).toBe(position);
        })
    })
})