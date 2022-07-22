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

        const $ = cheerio.load(feed.trim(), {
            xml: {
                normalizeWhitespace: true,
            },
        });

        let data = [];

        $("item").map((e, text) => {
            data.push({
                title: $(text).find("title").text().replaceAll("<br />\r\n", ""),
                description: $(text)
                    .find("description")
                    .text()
                    .replaceAll("<br />\r\n", ""),
                publishdate: $(text)
                    .find("pubDate")[0]
                    .children[0].data.replaceAll("<br />\r\n", ""),
                link: $(text)
                    .find("link")[0]
                    .children[0].data.replaceAll("<br />\r\n", ""),
            });
        });
        return data;
    };

    scrapeRss();

    return {
        status: status,
        image: icon,
        incident_history: (await scrapeRss()).map((e) => {
            return e;
        }),
    };
};

module.exports = scrapeSlack;
