const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
    {
        id: 0,
        name: 'Sufia',
        age: 30,
        job: 'Housewife'
    },
    {
        id: 1,
        name: 'Suborna',
        age: 29,
        job: 'Housewife'
    },
    {
        id: 2,
        name: 'Sraboni',
        age: 26,
        job: 'Housewife'
    },
]

app.get('/', (req, res) => {
    res.send('Welcome to home');
})

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    res.json(newUser);
})

app.listen(port, () => {
    console.log('Port:', port);
})