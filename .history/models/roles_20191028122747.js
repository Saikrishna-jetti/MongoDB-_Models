const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleName :  String,
    roleDescription : String
});

const Role = mongoose.model('Roles', roleSchema);


//create company 

async function createRegion(roleName,roleDescription){

    const region = new Region({
        roleName,
        roleDescription
     });
   
    const result = await region.save();
    console.log(result);
}

exports.Region = Region;
exports.createRegion = createRegion;
