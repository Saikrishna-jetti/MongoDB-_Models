const mongoose = require('mongoose');


const hotelSchema = new mongoose.Schema({
    hotelName : String,
    brandId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Brand'
    }
});

const Hotel = mongoose.model('hotel',hotelSchema);

//create staff 
async function createBrand(hotelName,brandId){

    const hotel = new Hotel({
        brandName,
        companyId
    })

    const result = await company.save();
    console.log(result);
}

exports.createBrand = createBrand;