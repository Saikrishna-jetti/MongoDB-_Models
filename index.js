const mongoose = require('mongoose');
const { createRole } =  require('./models/roles');
const { createStaff } = require('./models/staff');
const { createCompany } = require('./models/company')
const { createBrand } = require('./models/brand');
const { createHotel } = require('./models/hotels');

mongoose.connect('mongodb://localhost/erp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected DB'))
.catch((err) => console.error('DB Not Connected', err));

createHotel('Taj West End','5db6d5944c84222af4cfae83')
