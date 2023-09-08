import express from 'express';
import * as dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello Folks !');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});