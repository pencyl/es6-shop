var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config');
var port = 3000;

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/products', require('./controllers/products'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log('Listening on port ' + port);
})
