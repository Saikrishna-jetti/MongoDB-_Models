const mongoose = require('mongoose');
const { createRole } =  require('./models/roles');
const { createStaff } = require('./models/staff');

mongoose.connect('mongodb://localhost/erp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected DB'))
.catch((err) => console.error('DB Not Connected', err));

createStaff('Sai','Sai@1234','');