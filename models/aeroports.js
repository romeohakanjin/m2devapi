// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// aeroports
var aeroportSchema = new mongoose.Schema({
    name: String,
    terminals: [{
        name: String
        }]
});

// return models
module.exports = restful.model('aeroports', aeroportSchema);