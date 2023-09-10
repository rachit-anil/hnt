import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';;

dotenv.config();

const app = express();
app.use(cors());

const port = process.env.PORT;

const FAKE_DATA = {
  message: "A message from node",
};

app.get('/', (req, res) => {
  res.send(FAKE_DATA);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});