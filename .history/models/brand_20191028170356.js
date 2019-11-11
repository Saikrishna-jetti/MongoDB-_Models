const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
    brandName : String,
    roleId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }
});

const brand = mongoose.model('Brand',brandSchema);

//create staff 
async function createBrand(brandName,roleId){

    const staff = new Staff({
        username,
        password,
        roleId
    })

    const result = await staff.save();
    console.log(result);
}

exports.createStaff = createStaff;