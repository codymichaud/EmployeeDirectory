const Engineer = require('../library/engineerprof');
describe('Engineer', () => {
    it('Can set the name, id, email and github username', () => {
        const test = new Engineer('Tyler', 2, 'tyler@mail.com', 'tstevenson');
        expect(test.name).toEqual(test.name);
        expect(test.id).toEqual(2);
        expect(test.email).toEqual('tyler@mail.com');
        expect(test.github).toEqual(test.github);
    });

    describe('getGithub', () => {
        it('returns the github account of the engineer', () => {
            const github = 'tstevenson';
            const test = new Engineer('Tyler', 2, 'tyler@mail.com', 'tstevenson');
            expect(test.getGithub()).toBe(github);
        })
    })

    describe('getRole', () => {
        it('returns Engineer', () => {
            const position = 'Engineer';
            const test = new Engineer('Tyler', 2, 'tyler@mail.com', 'tstevenson');
            expect(test.getRole()).toBe(position);
        })
    })
})