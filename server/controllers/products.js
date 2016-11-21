var products = [
    { id: 1, name: 'Coat', description: 'Winter coat in beige', price: 150 },
    { id: 2, name: 'Scarf', description: 'Red cotten scarf', price: 10 },
    { id: 3, name: 'Belt', description: 'Black leather belt', price: 50 },
    { id: 4, name: 'Hat', description: 'Ridiculous green hat', price: 20 },
];

module.exports = function(req, res) {

    setTimeout(function() {
        res.send(products);
    }, 2000);
};
