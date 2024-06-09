import express from 'express'
import {engine} from 'express-handlebars';
import {database} from './database';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', 'views');

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (request, response) => {
  response.render('home', {
    animals: database.getAnimals()
  });
})

app.post('/animals/create', (request, response) => {
  database.addAnimal(request.body);
  response.redirect('/');
});

app.post('/animals/delete/:name', (request, response) => {
  database.removeAnimal(request.params.name);
  response.redirect('/');
});

app.post('/animals/favorite/:name', (request, response) => {
  database.favoriteAnimal(request.params.name);
  response.redirect('/');
});

app.listen(3000);
