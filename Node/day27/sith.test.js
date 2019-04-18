const Sith = require('./starwars').Sith;

var anakin;

beforeAll(() => {
    anakin = new Sith("Anakin Skywalker", 100, 1000);
})

describe('testing Jedi', () => {

    test('constructor', () => {
        expect(anakin.name).toEqual("Anakin Skywalker");
        expect(anakin.power).toEqual(100);
        expect(anakin.health).toEqual(1000);
    });

    test('attack sith', () => {
        const mockSithAttack = jest.spyOn(anakin, 'attack');
        
        mockSithAttack.mockImplementation(()=> {console.log('anakin attacks')});
        anakin.attack();

        expect(mockSithAttack).toHaveBeenCalled();
    });

    test('injure', () => {

        const mockSithInjure = jest.spyOn(anakin, 'injure');
        
        mockSithInjure.mockImplementation(()=> {console.log('anakin injuries')});
        anakin.injure();

        expect(mockSithInjure).toHaveBeenCalled();
    })

    test('dead', () => {

        const mockSithDead = jest.spyOn(anakin, 'dead');
        
        mockSithDead.mockImplementation(()=> {console.log('anakin dead')});
        anakin.dead();

        expect(mockSithDead).toHaveBeenCalled();
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });
});
