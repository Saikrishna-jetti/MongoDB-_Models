const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    username : String,
    password : String,
    roleId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Role'
    }
});

const Country = mongoose.model('Country',countrySchema);

//create country
async function createCountry(countryName,regionId,language,currency){

    const country = new Country({
        countryName,
        regionId,
        language,
        currency
    })

    const result = await country.save();
    console.log(result);
}

exports.createCountry = createCountry;