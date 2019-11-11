const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    username : String,
    password : String,
    roleId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Role'
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