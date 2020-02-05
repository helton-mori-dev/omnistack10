const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (request,response) => {
    console.log(request.body);
    return response.json({
        message: 'teste'
    });
});

app.listen(3333);