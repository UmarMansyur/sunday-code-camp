import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.js';
const port = 3000;
const app = express();

app.use(morgan('dev'));
app.set('view engine', 'twig');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public', express.static('public'))
app.use('/', routes);


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
