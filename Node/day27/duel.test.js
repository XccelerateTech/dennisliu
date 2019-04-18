const duel = require('./starwars').duel;
const Jedi = require('./starwars').Jedi;
const Sith = require('./starwars').Sith;

var obiwan;
var anakin;

beforeAll(() => {
    obiwan = new Jedi("Obiwan Kenobi", 70, 700);
    anakin = new Sith("Anakin Skywalker", 100, 1000);
})

describe('testing the duel function', () => {

    test('attack', () => {
        const mockObiwanAttack = jest.spyOn(obiwan, 'attack');
        const mockAnakinAttack = jest.spyOn(anakin, 'attack');
        
        mockObiwanAttack.mockImplementation(()=> {console.log('obiwan attacks')});
        mockAnakinAttack.mockImplementation(()=> {console.log('anakin attacks')});

        duel(obiwan, anakin);

        expect(mockObiwanAttack).toHaveBeenCalled();
        expect(mockAnakinAttack).toHaveBeenCalled();
        expect(mockObiwanAttack).toHaveBeenCalledWith(anakin);
        expect(mockAnakinAttack).toHaveBeenCalledWith(obiwan);
        expect(mockObiwanAttack).toHaveBeenCalledTimes(6);
        expect(mockAnakinAttack).toHaveBeenCalledTimes(6);

    })

    test('injure', () => {
        const mockAnakinInjure = jest.spyOn(anakin, 'injure');

        mockAnakinInjure.mockImplementation(()=> {console.log('anakin injuries')})

        duel(obiwan, anakin);

        expect(mockAnakinInjure).toHaveBeenCalled();
        expect(mockAnakinInjure).toHaveBeenCalledWith(anakin.health - 10);
        expect(mockAnakinInjure).toHaveBeenCalledTimes(7);
    });

    test('dead', () => {
        const mockAnakinDead = jest.spyOn(anakin, 'dead');

        mockAnakinDead.mockImplementation(()=> {console.log('anakin dead')})

        duel(obiwan, anakin);

        expect(mockAnakinDead).toHaveBeenCalled();
        expect(mockAnakinDead).toHaveBeenCalledTimes(1);
        // expect(mockAnakinDead).toHaveBeenCalledWith();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});

 describe('Anakin is rescued by Darth Sidious', () => {

    beforeEach(() => {
        jest.useFakeTimers();
    });

    test("causes a timeout to be called synchronously", function () {
        
        
        expect(setTimeout).not.toHaveBeenCalled();

        duel(obiwan, anakin);

        jest.advanceTimersByTime(5001)

        expect(setTimeout).toHaveBeenCalled();
        expect(anakin.health).toEqual(800);
    });

 });