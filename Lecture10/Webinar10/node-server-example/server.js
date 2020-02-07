const express = require('express');

const server = express();

server.get('/', function (req, res, next) {
   res.send("Hello Sahil");
})

server.get('/greet/:tod/:name', function(req, res, next){
   
   let tod;
   switch(req.params.tod) {
      case 'evening': tod = 'Evening'; break;
      case 'morning': tod = 'Morning'; break;
      default: tod = 'Morning'; break;
   }
   let greeting = "Good " + tod +', ' + req.params.name + " " + req.query.name2;
   res.send(greeting);
})

server.get('/html', function(req, res, next) {
   
   res.send(`
   <html>
      <body>
         <h1>This is a HTML page</h1>
         <i>This looks really nice</i>
      </body>
   </html>
   `)
})

server.listen(2121);