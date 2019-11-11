const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema({
    hotelName : String,
    brandId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Brand'
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