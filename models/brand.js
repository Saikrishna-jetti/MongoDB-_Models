const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
    brandName : String,
    companyId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }
});

const Brand = mongoose.model('Brand',brandSchema);

//create staff 
async function createBrand(brandName,companyId){

    const company = new Brand({
        brandName,
        companyId
    })

    const result = await company.save();
    console.log(result);
}

exports.createBrand = createBrand;