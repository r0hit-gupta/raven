var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema for general schema to deal with emissions.
var Cars = new Schema({
    number: {
    	type: Number,
    	required: true,
      default: 0
    },
})

module.exports =  mongoose.model('Cars', Cars);
