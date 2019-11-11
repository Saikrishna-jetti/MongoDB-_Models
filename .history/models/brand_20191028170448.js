const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
    brandName : String,
    companyId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }
});

const brand = mongoose.model('Brand',brandSchema);

//create staff 
async function createBrand(brandName,companyId){

    const company = new Staff({
        brandName,
        companyId
    })

    const result = await company.save();
    console.log(result);
}

exports.createStaff = createStaff;