const axios = require("axios");
const cheerio = require("cheerio");
isNotificationSent = false;

const scrapeSlack = async (slackDataSetter  ) => {
  const page = await axios
    .get("https://status.slack.com/")
    .then((e) => e.data)
    .then((e) => {
      const $ = cheerio.load(e);
      const status = $("h1", "#current_status").text();
      const icon = $("img", ".container").attr("src");
    
      console.log()
      return {
        status : status,
        src : icon
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
if(page.status !== 'Slack is up and running'){
    
    console.log('notification sent')
    isNotificationSent = true
    // sendNotification
}

if(page.status === 'Slack is up and running' && isNotificationSent ){
    console.log('sent close noti')
    isNotificationSent = false
}

if(slackDataSetter){
    slackDataSetter({
        currStatus : page,
        incident_history: (await scrapeRss()).map((e) => {
          return e;
      }),
    
    })

}

  return {
        currStatus : page,
        incident_history: (await scrapeRss()).map((e) => {
          return e;
      }),
};
}

module.exports = scrapeSlack;
