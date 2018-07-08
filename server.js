const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

//middleware que se uitliza para hacer llamadas estáticas, públicos
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'MilKyBar'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'MilkyBar'
    });
})

app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));