const tripler = require('./function').tripler

describe('testing triple', () => {

    test('I am in the test block 1, triple of 3', () => {
        expect(tripler(3)).toBe(9);
    });

    test('I am in the test block 2, triple of 5', () => {
        expect(tripler(5)).toBe(15);
    });

    test('I am in the test block 3, triple of 3333', () => {
        expect(tripler(3333)).toBe(9999);
    });

    test('I am in the test block 4, triple of 0', () => {
        expect(tripler(0)).toBe(0);
    });
    
    test('I am in the test block 4, and i fail', () => {
        throw new Error();
    });

});
