const mongoose = require('mongoose');

const staffRelationSchema = new mongoose.Schema({
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

const StaffRelation = mongoose.model('StaffRelation',staffRelationSchema);

//create staff 
async function createStaffRelation(staffId,levelaccess,levelrefId,locationlevelaccess,locationRefId){

    const staffRelation = new StaffRelation({
        staffId,
        levelaccess,
        levelrefId,
        locationlevelaccess,
        locationRefId
    })

    const result = await staffRelation.save();
    console.log(result);
}

exports.createStaffRelation = createStaffRelation;