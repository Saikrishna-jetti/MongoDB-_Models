const mongoose = require('mongoose');
const { createRole } =  require('./models/roles');
const { createStaff } = require('./models/staff');
const { createCompany } = require('./models/company')
const { createBrand } = require('./models/brand');

mongoose.connect('mongodb://localhost/erp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected DB'))
.catch((err) => console.error('DB Not Connected', err));

