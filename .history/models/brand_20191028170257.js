const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
    brandName : String,
    roleId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Company'
    }
});

const Staff = mongoose.model('Staff',staffSchema);

//create staff 
async function createStaff(username,password,roleId){

    const staff = new Staff({
        username,
        password,
        roleId
    })

    const result = await staff.save();
    console.log(result);
}

exports.createStaff = createStaff;