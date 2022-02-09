const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const cars = [
    {
        brand: 'Mazda',
        model: 'MX5',
        topSpeed: '240',
        id: 1
    },
    {
        brand: 'Opel',
        model: 'Corsa',
        topSpeed: '170',
        id: 2
    },
    {
        brand: 'Toyota',
        model: 'Yaris',
        topSpeed: '200',
        id: 3
    }
]

app.get('/', (req, res) => {
  res.send('<input placeholder="demo">')
})

app.get('/api/cars', (req, res) => {
    res.json(cars)
})

app.post('/api/cars', (req, res) => {
    if(!req.body.brand || !req.body.model || !req.body.speed) {
        return res.status(400).json({msg: "missing parameters"});
    }

    // const newCar = {
    //     brand: req.query.brand,
    //     model: req.query.model,
    //     topSpeed: parseInt(req.query.speed),
    //     id: cars.length + 1
    // };

    const newCar = {
        brand: req.body.brand,
        model: req.body.model,
        topSpeed: parseInt(req.body.speed),
        id: cars.length + 1
    };

    cars.push(newCar);
    res.sendStatus(204);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})