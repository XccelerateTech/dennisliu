var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.use(express.static('assets'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/gallary', function (req, res) {
    res.render('gallary');
});

const menu = {
    pizza: [
        {
            name: "tomato pizza", price: "20hkd"
        },
        {
            name: "pineapple pizza", price: "200hkd"
        }
    ]
}

app.get('/menu', (req, res) =>{

    res.render('menu', menu);

});
 
app.listen(3000, () => {
    console.log('im running')
});