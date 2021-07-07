const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB =require('./db.js')
const review = require('./model.js')
const PORT = process.env.PORT || 8080

app.use(cors())
// app.use(bodyParser.json())
connectDB()

app.get('/', (req, res) => res.send('API is Running'))
app.use(express.json())
app.get('/reviews', (req, res) => {
    review.find({})
    .then(data => res.send(data))
    .catch(err => res.send(err.message))
})

app.post('/reviews', (req, res) => {
    let data = req.body;
    let reviewData = new review({
        title: data.title,
        desc: data.desc,
        rating: data.rating,
        name: data.name,
        url: data.url
    })
    reviewData.save()
    .then(() => res.send(reviewData))
    .catch((err) => res.send(err.message))
})

app.listen(PORT, console.log('Server Running'))