const express = require('express');
const cors = require('cors');

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json({'hello': 'world'})
})

app.get('/reset-water', (req, res) => {
    res.send('Resetting water!')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})