const mongoose = require('mongoose');
const { createRole } =  require('./models/roles');


mongoose.connect('mongodb://localhost/erp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected DB'))
.catch((err) => console.error('DB Not Connected', err));

createRole('Vinay','Supervisor');