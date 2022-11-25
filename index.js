const express = require('express')
const bodyParser = require('body-parser');
const cloudflareScraper =  require('cloudflare-scraper');

const app = express()
app.use(bodyParser.json());
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo! Hello')
})
app.post('/scraper', async (req, res) => {
    const destUrl = req.body.destUrl
    console.log('destUrl', destUrl)
    try {
        const response = await cloudflareScraper.get(destUrl);
        res.send(response)
    } catch (error) {
        res.send(error.toString())
    }
    
})

app.listen(process.env.PORT || 3000)