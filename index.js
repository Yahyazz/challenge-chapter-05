import express from 'express';
import cors from 'cors';
import ApiCarsRoute from './src/routes/api/ApiCarsRoute.js';
import CarsRoute from './src/routes/CarsRoute.js';
import session from 'express-session';

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('./src/public'));

app.use(
  session({
    secret: 'my secret key',
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

app.use(ApiCarsRoute);
app.use(CarsRoute);

app.set('view engine', 'ejs');

app.listen(PORT, () => console.log(`Server is running on https://localhost:${PORT}`));
