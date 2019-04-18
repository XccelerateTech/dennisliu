export const secretHandshake = (input) => {

    var quotient = input;
    var handshakes = ["wink", "double blink", "close your eyes", "jump"];
    var binary = [];
    var handshakeArr =[];

    if (typeof input === 'number') {

        while (quotient > 0) {
            if (quotient % 2 == 0) {
                binary.push(0);
                quotient = quotient / 2;
            } else {
                binary.push(1);
                quotient = (quotient - 1) / 2;
            };
        };

        for (var i = 0; i <= binary.length; i++) {
            if (binary[i] == 1) {
                if (typeof handshakes[i] != "undefined") {
                    handshakeArr.push(handshakes[i]);
                };
            } else if (binary[4] == 1) {
                handshakeArr.reverse();
            };
        };

        return handshakeArr;

    } else {
        throw new Error('Handshake must be a number');
    }
}
