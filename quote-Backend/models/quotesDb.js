const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    text: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    }

});

module.exports = mongoose.model('Quote', QuoteSchema);
