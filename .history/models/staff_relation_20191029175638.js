const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    staffId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Staff'
    },
    levelaccess : {
        type : String,
        enum : ['Company','Brand','Hotel'],
        default :'Brand'
    },
    levelrefId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Brand'
    },
    locationlevelaccess : {
        type : String,
        enum : ['Region','Country','City'],
        default : 'City'
    },
    locationRefId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'City'
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