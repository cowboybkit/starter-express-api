const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json());
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.post('/scraper', async (req, res) => {
    const destUrl = req.body.destUrl
    const response = await axios.get(destUrl);
    res.send(response)
})

app.listen(process.env.PORT || 3000)