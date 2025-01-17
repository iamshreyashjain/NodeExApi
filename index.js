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
        <h1 style="color: blue; text-align: center;">Hello, Swagger UI Page Link</h1>
        <a style="color: black; display: block; text-align: center;" href="/swagger">Swagger Link</a>
    `);
    

});

app.listen(3018, () => {
    console.log('Server started on http://localhost:3018');
});
