const mongoose = require('mongoose');
const { createRole } =  require('./models/roles');
const { createStaff } = require('./models/staff');
const { createCompany } = require('./models/company')
const { createBrand } = require('./models/brand');
const { } = require('./models/hotels');

mongoose.connect('mongodb://localhost/erp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected DB'))
.catch((err) => console.error('DB Not Connected', err));

createBrand('Taj','5db6c6464a860b09f819278e');