function gambler(name, cash, bet) {
    this.name = name;
    this.cash = cash;
    this.bet = bet;
}

const A = new gambler('AAAAA', 50, 10);
A.prob = 0.6;
const B = new gambler('BBBBB', 50, 10);
B.prob = 0.4;

function casino(player1, player2) {
    var i = 0;
    var first = null;
    var second = null;
    while (player1.cash > 0 || player2.cash > 0) {
            i++;
            console.log(`- - - - - - Round ${i} - - - - - -`);
        
        if (player1.cash > 0 ) {
            if (Math.random() > player1.prob) {
                player1.cash -= player1.bet;
                console.log(`${player1.name} lost, $${player1.cash} remaining.`)
            }
        }   else if (player1.cash == 0) {
            console.log(`${player1.name} ran out of cash`)
            player1.cash -= player1.bet;
        }

        if (player2.cash > 0) {
            if (Math.random() > player2.prob) {
                player2.cash -= player2.bet;
                console.log(`${player2.name} lost, $${player2.cash} remaining.`)
            } 
        }   else if (player2.cash == 0) {
            console.log(`${player2.name} ran out of cash`)
            player2.cash -= player2.bet;
        }

        if (player1.cash == 0 && player2.cash > 0){
            first = player1;
            second = player2;
        } else if (player1.cash > 0 && player2.cash == 0) {
            first = player2;
            second = player1;
        }
    }
    console.log(`${second.name} ran out of cash`)
    console.log(`The order of players that ran out of cash: [${first.name}, ${second.name}]`)
}


casino(A, B)





//     while (player1.cash > 0 || player2.cash > 0) {
//         i++;
//         console.log(`- - - - - - Round ${i} - - - - - -`);
        
//         if (player1.cash > 0 ) {
//             if (Math.random() > player1.prob) {
//                 player1.cash -= player1.bet
//                 console.log(`${player1.name} lost, $${player1.cash} remaining.`)
//             }
//         } else {
//             console.log(`${player1.name} + ran out of cash`)
//         }


//         if (player2.cash > 0) {
//             if (Math.random() > player2.prob) {
//                 player2.cash -= player2.bet;
//                 console.log(`${player2.name} lost, $${player2.cash} remaining.`)
//             } 
//         } else {
//             console.log(`${player2.name} ran out of cash`)
//         }


//     }
//     console.log(`The order of players that ran out of cash: []`)
// }   
