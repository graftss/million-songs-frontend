const path = require('path');
const express = require('express');
const { doQuery } = require('./query');


const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/query', (req, res) => {
  doQuery(req.body)
    .then(x => {
      console.log('finished api call: ', req.body);
      res.send(x);
    })
    .catch(e => {
      console.log('error in api call:', req.body);
      console.log(e);
    });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
