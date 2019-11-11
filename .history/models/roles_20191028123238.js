const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleName :  String,
    roleDescription : String
});

const Role = mongoose.model('Roles', roleSchema);

//create company 

async function createRole(roleName,roleDescription){

    const roles = new Region({
        roleName,
        roleDescription
    });
   
    const result = await roles.save();
    console.log(result);
}

exports.Role = Role;
exports.createRole = createRole;
