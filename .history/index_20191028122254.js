const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/erp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected DB'))
.catch((err) => console.error('DB Not Connected', err));

