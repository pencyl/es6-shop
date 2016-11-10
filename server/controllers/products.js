var products = [
    { id: 1, name: 'Coat', price: 150 },
    { id: 2, name: 'Scarf', price: 10 },
    { id: 3, name: 'Belt', price: 50 },
    { id: 4, name: 'Hat', price: 20 },
];

module.exports = function(req, res) {

    setTimeout(function() {
        res.send(products);
    }, 2000);
};
