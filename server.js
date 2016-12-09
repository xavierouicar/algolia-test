var express = require('express');
var path = require('path');
app = express();
const basicauth = require('basicauth-middleware');
app.use(basicauth('yes', 'ouicar'));
app.use(express.static(path.join(__dirname, 'dist')));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started ' + port);
