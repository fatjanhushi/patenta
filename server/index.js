var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Fatjoni gezuar ditelindjen 2020!!!!!!!!!!!!!');
});

var server = app.listen(process.env.PORT || 5000, () =>
  console.log('Listening on port ' + server.address().port)
);
