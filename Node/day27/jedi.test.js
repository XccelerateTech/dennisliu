const Jedi = require('./starwars').Jedi;

var obiwan;

beforeAll(() => {
    obiwan = new Jedi("Obiwan Kenobi", 70, 700);
})

describe('testing Jedi', () => {

    test('constructor', () => {
        expect(obiwan.name).toEqual("Obiwan Kenobi");
        expect(obiwan.power).toEqual(70);
        expect(obiwan.health).toEqual(700);
    });

    test('attack sith', () => {
        const mockJediAttack = jest.spyOn(obiwan, 'attack');
        
        mockJediAttack.mockImplementation(()=> {console.log('obiwan attacks')});
        obiwan.attack();

        expect(mockJediAttack).toHaveBeenCalled();
    });

    test('injure', () => {

        const mockJediInjure = jest.spyOn(obiwan, 'injure');
        
        mockJediInjure.mockImplementation(()=> {console.log('obiwan injuries')});
        obiwan.injure();

        expect(mockJediInjure).toHaveBeenCalled();
    })

    test('dead', () => {

        const mockJediDead = jest.spyOn(obiwan, 'dead');
        
        mockJediDead.mockImplementation(()=> {console.log('obiwan dead')});
        obiwan.dead();

        expect(mockJediDead).toHaveBeenCalled();
    })

    afterEach(() => {
        jest.restoreAllMocks();
    });
});
