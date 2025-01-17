const express = require('express');
const htmlPage = require('./')

var app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

var setupSwagger = require('./swagger');

setupSwagger(app);  // Ensure Swagger setup is after middleware

const userRouter = require('./routes/usersRoutes');
app.use('/users', userRouter);

const productsRouter = require('./routes/productsRoutes');
app.use('/products', productsRouter);

app.get('/', (req, res) => {
    res.send(`
        <h1 style="color: black; text-align: center;">Hello, Swagger UI Page Link</h1>
        <a style="color: blue; display: block; text-align: center;" href="https://nodeexapi.onrender.com/swagger">Swagger Link</a>
    `);
    

});

app.listen(3001, () => {
    console.log('Server started on http://localhost:3001/swagger');
});
