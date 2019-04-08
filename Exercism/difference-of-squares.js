export class Squares {
    constructor(input) {
        this.input = input;
    }

    get squareOfSum() {
        let sum = 0;
        for (var i = this.input; i > 0; i--) {
            sum += i;
        }
        return sum**2;
    };

    get sumOfSquares() {
        let sum = 0;
        for (var i = this.input; i > 0; i--) {
            sum += i**2;
        }
        return sum;
    };

    get difference() {
        return Math.abs(this.squareOfSum - this.sumOfSquares);
    };
};
