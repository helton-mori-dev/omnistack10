const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-vckml.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

app.post('/users', (request,response) => {
    console.log(request.body);
    return response.json({
        message: 'teste'
    });
});

app.listen(3333);