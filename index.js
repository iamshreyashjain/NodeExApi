const express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


var setupSwagger = require('./swagger');
setupSwagger(app);  // Move this after the middleware

const userRouter = require('./routes/usersRoutes');


app.use('/users', userRouter);


app.listen(3003, () => {
    console.log('Server started on http://localhost:3003');
  });
  