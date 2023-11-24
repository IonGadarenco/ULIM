import express from 'express';
import routes from './routes/user.routes.js';
import { connectToDatabase } from './config/mongodb.js';
import opn from 'opn';

connectToDatabase();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/poster', routes);

const port = 3000;

app.listen(port, () => {
    console.log(`Serverul rulează pe portul ${port}`);

    // opn("http://localhost:3000/index/index.html");
});
