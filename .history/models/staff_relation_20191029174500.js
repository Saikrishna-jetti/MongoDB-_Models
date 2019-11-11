const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    staffId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Staff'
    },
    levelaccess : String,
    levelrefId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Role'
    },
    locationlevelaccess : String,
    locationRefId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Role'
    },
    listOfRoles : [{

    }]
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