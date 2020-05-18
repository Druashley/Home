const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const path = require('path');

const fs = require('fs');

require('dotenv/config');

//Middlewares

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());



// Import Routes

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);



//ROUTEs

// app.get('/public/css/style.css', (req, res) => {
//     //res.send('We are home');
//     fs.readFile(path.join(__dirname, '/public/css/style.css'), (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/css' });
//         res.write(data)
//         res.end();
//     });
// });

// app.get('/public/js/index.js', (req, res) => {
//     //res.send('We are home');
//     fs.readFile(path.join(__dirname, '/public/js/index.js'), (err, data) => {
//         res.writeHead(200, { 'Content-Type': 'text/javascript' });
//         res.write(data)
//         res.end();
//     });
// });

app.get('/Home', (req, res) => {
    //res.send('We are home');
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        res.end();
    });
});

app.get('/views/post.html', (req, res) => {
    //res.send('We are home');
    fs.readFile(path.join(__dirname, '/views/post.html'), (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        res.end();
    });
});

app.get('/views/contact.html', (req, res) => {
    //res.send('We are home');
    fs.readFile(path.join(__dirname, '/views/contact.html'), (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data)
        res.end();
    });
});





//Connect to DB

mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB.'));


app.listen(3000);