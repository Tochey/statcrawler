// const client = require('./config/redis.config')
// const NetworkDaemon = require("./NetworkDaemon");
// const network = new NetworkDaemon(10);

// (function () {
//   network.pollData(
//     async (zoom) => {
//       client.set("zoomStatus", JSON.stringify(zoom));
//     },
//     async (notion) => {
//       client.set("notionStatus", JSON.stringify(notion));
//     },
//     (egnyte) => {
//       client.set("egnyteStatus", JSON.stringify(egnyte));
//     },
//     (goToAssist) => {
//       client.set("goToAssistStatus", JSON.stringify(goToAssist));
//     },
//     (jamf) => {
//       client.set("jamfStatus", JSON.stringify(jamf));
//     },
//     (office) => {
//       client.set("officeStatus", JSON.stringify(office));
//     },
//     (slack) => {
//       client.set("slackStatus", JSON.stringify(slack));
//     }
//   );
// })();

