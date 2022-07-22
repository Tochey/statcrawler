const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");

const scrapeSlack = async () => {
  const page = await axios.get("https://status.slack.com/").then((e) => e.data);

  const $ = cheerio.load(page);

  const icon = $("img", ".container").attr("src");
  const status = $("h1", ".container").text();

  const scrapeRss = async () => {
    const feed = await axios
      .get("https://status.slack.com/feed/rss")
      .then((e) => e.data);

    const $ = cheerio.load(feed, {
      xmlMode: true,
    });

    let data = [];

    console.log($);

    $("item").map((e, text) => {
    
      data.push(
          {
          title: $(text).find('title')[0].children[0].data,
          description: $(text).find('description')[0].children[0].data.toString().toLowerCase(),
          publishdate : $(text).find('pubDate')[0].children[0].data,
          link : $(text).find('link')[0].children[0].data,
          }
      )
    });
    console.log(data);
}

    scrapeRss();

    return {
      status: status,
      image: icon,
    };
  };

module.exports = scrapeSlack;
