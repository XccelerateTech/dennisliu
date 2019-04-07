var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

//Q1

var barcelona = players.filter(player => {
    if (player.club === "FC Barcelona") {
        console.log(player.name);
    };
});

//Q2

var barcelonaPlayer = players.map(player => {
        return player.name;
});

console.log(barcelonaPlayer);
