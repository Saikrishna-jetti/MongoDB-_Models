const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyName : String,
    ownerName : String
});

const Company = mongoose.model('Company', companySchema);

async function createCompany(companyName,ownerName){

    const company = new Company({
        companyName,
        ownerName
    });

}