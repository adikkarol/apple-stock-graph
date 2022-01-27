const puppeteer = require('puppeteer')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/data', async (req,res) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto('https://finance.yahoo.com/quote/AAPL?p=AAPL')

    const [el] = await page.$x('//*[@id="quote-header-info"]/div[3]/div[1]/div/fin-streamer[1]')
    const txt = await el.getProperty('value')
    const rawTxt = await txt.jsonValue()
    console.log({rawTxt})

    res.status(200).send({rawTxt})
})

app.get('/', async(req,res) => {
    res.send('Hello')
})
app.listen(4000, console.log('Server is listening on port 4000 ...'));