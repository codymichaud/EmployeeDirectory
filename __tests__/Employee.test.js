const Employee = require('../library/employHub');
describe('Employee', () => {
    it('Can set the name, id and email of the employee', () => {
        let test = new Employee('Cody', 1, 'cody@mail.com');
        expect(test.name).toStrictEqual('Cody'),
            expect(test.id).toEqual(1),
            expect(test.email).toEqual('cody@mail.com');
    });

    describe('getRole', () => {
        it('returns Employee', () => {
            let position = 'Employee';
            let test = new Employee('Cody', 1, 'cody@mail.com');
            expect(test.getRole()).toBe(position);
        });
    });
});