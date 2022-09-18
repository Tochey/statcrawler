const axios = require("axios");
const spformat = require("./utilities/formatters/SpFormatter");
const scrapeSlack = require("./scrapers/Slack");
const publishMessage = require("./Notifications");
class NetworkDaemon {
    constructor(refreshRate) {
        this.refreshRate = refreshRate;
        this.interval = [];
    }

    async fetchData(serviceUrl, spDataSetter, name) {
        let summaryResponse, incidentResponse;
        try {
            summaryResponse = await axios
                .get(`${serviceUrl}/api/v2/summary.json`)
                .then((e) => e.data)
                .then((e) => {
                    return {
                        page: e.page,
                        status: e.status,
                    };
                });
            incidentResponse = await axios
                .get(`${serviceUrl}/api/v2/incidents.json`)
                .then((e) => e.data)
                .then((e) => e.incidents);
        } catch (err) {
            console.log(err);
        }

        const response = {
            summary: summaryResponse,
            incidents: incidentResponse.map((e) => spformat(e)),
        };
        if (spDataSetter) {
            spDataSetter(response);
        }
        //send out notifications
        if (summaryResponse.status.description !== "All Systems Operational") {
            publishMessage(
                `${name} seems to be having issues see here: ${summaryResponse.description}`
            );
        }

        return {
            summary: summaryResponse,
            incident: incidentResponse,
        };
    }

    async fetchOfficeData(officeDataSetter, name) {
        let officeResponse;
        try {
            officeResponse = await axios
                .get("https://portal.office.com/api/servicestatus/index")
                .then((e) => e.data);
        } catch (err) {
            console.log(err);
        }

        if (officeDataSetter) {
            officeDataSetter(officeResponse);
        }

        return officeResponse;
    }

    async pollData(
        zoomDataSetter,
        notionDataSetter,
        egnyteDataSetter,
        goToDataSetter,
        jamfDataSetter,
        officeDataSetter,
        slackDataSetter
    ) {
        await this.fetchData("https://status.zoom.us", zoomDataSetter, "Zoom");
        await this.fetchData(
            "https://status.notion.so",
            notionDataSetter,
            "Notion"
        );
        await this.fetchData(
            "https://status.egnyte.com",
            egnyteDataSetter,
            "Egnyte"
        );
        await this.fetchData(
            "https://status.logmeinremotesupport.com",
            goToDataSetter,
            "GoToAssist"
        );
        await this.fetchData("https://status.jamf.com/", jamfDataSetter, "Jamf");
        await this.fetchOfficeData(officeDataSetter, "Office");
        await scrapeSlack(slackDataSetter);
        console.log("poplated");

        const setIntervalId = setInterval(async () => {
            try {
                console.log("ping");
                this.fetchData("https://status.zoom.us", zoomDataSetter);
                this.fetchData("https://status.notion.so", notionDataSetter);
                this.fetchData("https://status.egnyte.com", egnyteDataSetter);
                this.fetchData(
                    "https://status.logmeinremotesupport.com",
                    goToDataSetter
                );
                this.fetchData("https://status.jamf.com/", jamfDataSetter);
                this.fetchOfficeData(officeDataSetter);
                scrapeSlack(slackDataSetter);
            } catch (err) {
                console.error(err); // eslint-disable-line no-console
            }
        }, this.refreshRate * 1000);

        this.interval.push(setIntervalId);
    }

    clear = () => {
        this.setIntervalIds.forEach((timeoutId) => {
            clearInterval(timeoutId);
        });

        this.setIntervalIds = [];
    };
}

module.exports = NetworkDaemon;
