const express = require('express');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.json({'hello': 'world'})
})

app.get('/reset-water', (req, res) => {
    try{
        const updatedValues= prisma.water.updateMany({
            data: {
                water: 0
            }
        })
        res.json(updatedValues)
    }catch(e){
        console.log(e)
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})