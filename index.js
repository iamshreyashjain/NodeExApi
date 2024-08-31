const express = require('express');
var app = express();


const userRouter = require('./routes/usersRoutes');


app.use('/users', userRouter);


app.listen(3003, () => {
    console.log('Server started on http://localhost:3003');
  });
  