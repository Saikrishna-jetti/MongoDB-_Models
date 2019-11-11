const mongoose = require('mongoose');

const createCompany = new mongoose.Schema({
    companyName : String,
    ownerName : String
});
