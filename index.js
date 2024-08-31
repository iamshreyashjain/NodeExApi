const express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


var setupSwagger = require('./swagger');
setupSwagger(app);  // Move this after the middleware

const userRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');


app.use('/users', userRouter);
app.use('/products', productsRouter);


app.listen(3003, () => {
    console.log('Server started on http://localhost:3003');
  });
  
  