import express from 'express';
import api from './routes/index.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors({
  origin: '*',
  allowedHeaders: [
    'Content-Type',
  ],
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', api);

app.listen(process.env.PORT || 8001, function () {
  console.log('app listening on port ' + 8001 + '!');
});