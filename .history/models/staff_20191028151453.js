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

//create staff 
async function createStaff(username,password,roleId){

    const staff = new Staff({
        username,
        password,
        roleId
    })

    const result = await country.save();
    console.log(result);
}

exports.createCountry = createCountry;