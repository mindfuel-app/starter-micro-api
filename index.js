const express = require('express');
const cors = require('cors');
const {PrismaClient} = require('@prisma/client/edge');
const { withAccelerate } = require( '@prisma/extension-accelerate')
const prisma = new PrismaClient().$extends(withAccelerate());
const app = express()

app.use(cors())
app.use(express.static(__dirname+'/public/'));

app.get('/', (req, res) => {
    res.send('<h1>Nothing to see here</h1>')
})

app.get('/reset-water', async(req, res) => {
    try{
        const updatedValues= await prisma.water.updateMany({
            data: {
                water: 0
            }
        })
        res.json(updatedValues)
    }catch(e){
        console.log(e)
    }
})
app.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            where: {
                name: {
                    contains: 'a'
                }
            }
        })
        res.json(users)
    } catch (e) {
        console.log(e)
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})