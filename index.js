const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())

let birds = [ 
    {
        legs: 2,
        color: 'blue',
        canFly: true
    },
    {
        legs: 2,
        color: 'green',
        canFly: true
    },
    {
          legs: 2,
        color: 'green',
        canFly: false
    },
]

//route
app.get('/birds', (req, res) => {
    // console.log(req);

    res.send(birds)
})

app.post('/birds', (req, res) => {
    //ini data yg nambah manual, kalo pake database tinggal bikin kondisi buat read database
    birds.push({
        legs: req.body.legs,
        color: req.body.color,
        canFly: req.body.canFly
    })
    res.send({
        status: 'sukses bro!',
        data: birds
    })
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
