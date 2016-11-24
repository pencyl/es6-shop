module.exports = function(req, res) {
    setTimeout(function() {
        res.send({
            value : (Math.ceil(Math.random() * 100) / 100)
        });
    }, 1000);
};
