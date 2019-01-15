const express = require('express');
const cors = require('../index');
const app = express();

app.use(cors({
    optionIntercept: false,
    customAllowHeaders:['token']
}));

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));