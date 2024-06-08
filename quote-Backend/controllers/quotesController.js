const Quote = require('../models/quotesDb');

// Get a random quote
exports.getRandomQuote = async (req, res) => {
    try {
        const count = await Quote.countDocuments();
        const random = Math.floor(Math.random() * count);
        const quote = await Quote.findOne().skip(random);
        res.json(quote);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a new quote
exports.addQuote = async (req, res) => {
    const quote = new Quote({
        text: req.body.text,
        author: req.body.author
    });
    try {
        const newQuote = await quote.save();
        res.status(201).json(newQuote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a quote
exports.updateQuote = async (req, res) => {
    try {
        const updatedQuote = await Quote.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedQuote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a quote
exports.deleteQuote = async (req, res) => {
    try {
        await Quote.findByIdAndDelete(req.params.id);
        res.json({ message: 'Quote deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Search quotes by author
exports.searchByAuthor = async (req, res) => {
    try {
        const quotes = await Quote.find({ author: new RegExp(req.query.author, 'i') });
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
