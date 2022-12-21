const express = require('express')
const bodyParser = require('body-parser');
const cloudflareScraper =  require('cloudflare-scraper');

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo! Hello 123')
})
app.post('/scraper', async (req, res) => {
    const destUrl = req.body
    console.log('destUrl', destUrl)
    try {
        const response = await cloudflareScraper.get(destUrl);
        res.send(response)
    } catch (error) {
        res.send(error.toString())
    }
    
})

app.listen(process.env.PORT || 3000)