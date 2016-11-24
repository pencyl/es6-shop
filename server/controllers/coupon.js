module.exports = function(req, res) {
    setTimeout(function() {
        var value;
        if (req.params.id == 0) {
            value = 0;
        } else {
            value = (Math.ceil(Math.random() * 100) / 100)
        }
        res.send({
            value: value
        });
    }, 1000);
};
