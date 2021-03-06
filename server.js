// server.js
// where your node app starts

// init project
const express = require('express');

const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
const serveStatic = require('serve-static');

app.use(serveStatic(__dirname));

app.use('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3323, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
