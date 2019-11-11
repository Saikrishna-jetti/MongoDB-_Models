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
async function createHotel(hotelName,brandId){

    const hotel = new Hotel({
        hotelName,
        brandId
    })

    const result = await hotel.save();
    console.log(result);
}

exports.createHotel = createHotel;