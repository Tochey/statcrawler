const axios = require("axios");
const cheerio = require("cheerio");
let isNotificationSent = false;
const publishMessage = require('../Notifications')


const scrapeSlack = async (slackDataSetter) => {
    const page = await axios
        .get("https://status.slack.com/")
        .then((e) => e.data)
        .then((e) => {
            const $ = cheerio.load(e);
            const status = $("h1", "#current_status").text();
            const icon = $("img", ".container").attr("src");

            return {
                status: status,
                src: icon
            };
        });

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

    //validation
    //validate slack image
    if (!isNotificationSent && page.status !== 'Slack is up and running') {
        if (page.src === '/img/v2/Incident.png') {
        //send notification or publish message
        publishMessage(`Slack might be having some issues, see here: ${page.status}`)
    }
        //outage
        publishMessage(`Slack is DOWN, see here: ${page.status}`)

    }
    
    if (page.status === 'Slack is up and running' && isNotificationSent) {
        //send notification
        publishMessage(`Slack is back up and running`)
        isNotificationSent = false
    }

    if (slackDataSetter) {
        slackDataSetter({
            currStatus: page,
            incident_history: (await scrapeRss()).map((e) => {
                return e;
            }),

        })

    }


    return {
        currStatus: page,
        incident_history: (await scrapeRss()).map((e) => {
            return e;
        }),
    };
}

module.exports = scrapeSlack;
