const express = require('express')
const bodyParser = require('body-parser');
const cloudflareScraper =  require('cloudflare-scraper');

const app = express()
app.use(bodyParser.json());
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.post('/scraper', async (req, res) => {
    const destUrl = req.body.destUrl
    const response = await cloudflareScraper.get(destUrl);
    res.send(response)
})

app.listen(process.env.PORT || 3000)