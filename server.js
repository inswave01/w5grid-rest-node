var populate = (function () {
      var result = false;
      process.argv.forEach( function ( val, index, array ) {
        if ( index === 2 ) {
          result = val;
        }
      });
      return result;
    })(),
    express = require('express'),
    people = require('./routes/people')(populate),
    app = express();

app.use( express.favicon() );
app.use( express.json() );

app.get(    '/people',      people.select );
app.get(    '/people/:_id', people.selectOne );
app.put(    '/people/:_id', people.update );
app.patch(  '/people/:_id', people.patch );
app.post(   '/people',      people.insert );
app.delete( '/people/:_id', people.remove );
app.post(   '/mixed',       people.mixed );

app.get('/**', function(req, res) {
  if ( req.url === '/' ) {
    res.sendfile('index.html');
  } else {
    res.sendfile(req.url.substring(1));
  }
});

app.listen(3000);
console.log('Listening on port 3000...');
