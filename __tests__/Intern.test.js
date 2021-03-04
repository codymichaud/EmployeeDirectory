const Intern = require('../library/internprof');

describe('Intern', () => {
    it('Can set the name, id, email and school for the new intern', () => {
        let test = new Intern('Jake', 3, 'jake@mail.com', 'EWU');
        expect(test.intName).toEqual(test.intName);
        expect(test.intId).toEqual(test.intId);
        expect(test.intEmail).toEqual(test.intEmail);
        expect(test.intEdu).toEqual(test.intEdu);
    });

    describe('getEdu', () => {
        it('returns the school the intern attends', () => {
            let school = 'EWU';
            let test = new Intern('Jake', 3, 'jake@mail.com', 'EWU');
            expect(test.getSchool()).toBe(school);
        });
    });

    describe('getRole', () => {
        it('returns Intern', () => {
            let position = 'Intern';
            let test = new Intern('Jake', 3, 'jake@mail.com', 'EWU');
            expect(test.getRole()).toBe(position);
        });
    });
});