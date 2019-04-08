const Song = require('../song');

let song1;
let song2;
let song3;
let song4;
let song5;

beforeAll(() => {
    song1 = new Song('a', 'aa', 'aaa');
    song2 = new Song('b', 'bb', 'bbb');
    song3 = new Song('c', 'cc', 'ccc');
    song4 = new Song('d', 'dd', 'ddd');
    song5 = new Song('e', 'ee', 'eee');
    song6 = new Song('f', 'aa', 'aaa');
    song7 = new Song('a', 'aa', 'aaa');
});

describe('testing the getDescription function', () => {

    test('song1', () => {
        expect(song1.getDescription()).toBe('The name of this song is a and it is from the album aa. It is written by aaa');
    });

    test('song2', () => {
        expect(song2.getDescription()).toBe('The name of this song is b and it is from the album bb. It is written by bbb');
    });
    
    test('song3', () => {
        expect(song3.getDescription()).toBe('The name of this song is c and it is from the album cc. It is written by ccc');
    });

    test('song4', () => {
        expect(song4.getDescription()).toBe('The name of this song is d and it is from the album dd. It is written by ddd');
    });

    test('song5', () => {
        expect(song5.getDescription()).toEqual('The name of this song is e and it is from the album ee. It is written by eee');
    });
});

describe('testing the isInSameAlbum function', () => {

    test('compare the album of song1 to song2', () => {
        expect(song1.isInSameAlbum(song2)).toBeTruthy();
        throw new Error();
    });

    test('compare the album of song1 to song2', () => {
        expect(song1.isInSameAlbum(song6)).toBeTruthy();
    });
});

describe('testing the custom matcher', () => {

    beforeEach(() => {
        expect.extend({
            toBeInTheSameAlbumAs(Song, otherSong){
                const pass = (Song.album === otherSong.album);
                if(pass){
                    return {
                        message: () => `expected ${Song.album}`,
                        pass: true,
                    };
                } else {
                    return {
                        message: () => `expected ${Song.album}, and I didn't get it....`,
                        pass: false,
                    };
                };
            }
        });
    })

    test('compare the album of song1 to song6', () => {
        expect(song1).toBeInTheSameAlbumAs(song6);
    });
});

describe('testing if same object, name, album, name', () => {

    test('song1 & 7 Equal', () => {
        expect(song1).not.toBe(song7);
        expect(song1).toEqual(song7);
    });

    test('song1 & 7 toBe', () => {
        expect(song1).toBe(song1);
        expect(song1).toEqual(song1);
    });

});
