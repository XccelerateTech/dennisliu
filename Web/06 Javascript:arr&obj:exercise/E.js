const uefaEuro2016 = (teams, score) => {
    if (score[0] > score[1]) {
        console.log(`At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`);
    } else if (score[0] < score[1]) {
        console.log(`At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`);
    } else {
        console.log(`At match ${teams[0]} - ${teams[1]}, teams played draw.`);
    };
;}

uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) 

uefaEuro2016(['Belgium', 'Italy'],[0, 2]) 

uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) 