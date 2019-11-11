const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    username : String,
    password : String,
    roleId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Role'
    }
});

const Staff = mongoose.model('Staff',countrySchema);

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