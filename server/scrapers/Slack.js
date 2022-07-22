const axios = require('axios')
const cheerio = require('cheerio')
const pretty = require('pretty')


const scrapeSlack  = async () => {
   const page =  await axios.get("https://status.slack.com/")
    .then(e => e.data)

    const $ = cheerio.load(page)

const icon = $('img', '.container')
const status = $('h1', '.container').text()

    // const scrapeRss = async () => {
    //     const feed = await axios.get('https://status.slack.com/feed/rss')
    //         .then(e => e.data)

    //         const $ = cheerio.load(feed, {
    //             xmlMode: true
    //         })

    //         const arr = $('item')
    //         console.log('HERE')
    //         console.log(arr)
    // }

    // scrapeRss()

    return {
        status : status,
        image : icon
    }
}


module.exports = scrapeSlack


