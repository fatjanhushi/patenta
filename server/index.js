var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Fatjoni edhe 100!');
});

var server = app.listen(process.env.PORT || 5000, () =>
  console.log('Listening on port ' + server.address().port)
);
