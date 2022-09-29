const axios = require('axios');
const spformat = require('./utilities/formatters/SpFormatter')
// const spformat = require('./formatters/SpFormatter');
const scrapeSlack = require('./scrapers/Slack');
class NetworkDaemon {

    constructor(refreshRate) {
        this.refreshRate = refreshRate
        this.interval = []
    }

     async fetchData (serviceUrl , spDataSetter){
        let summaryResponse, incidentResponse;  
        try {
            summaryResponse = await axios.get(`${serviceUrl}/api/v2/summary.json`)
                .then((e) => e.data).then((e) => e.status);
            incidentResponse = await axios.get(`${serviceUrl}/api/v2/incidents.json`)
                .then((e) => e.data).then(e => e.incidents)
        } catch (err) {
            console.log(err)
        }

        const response  = {
            summary : summaryResponse,
            incidents : incidentResponse.map((e) => spformat(e))
        }
        if(spDataSetter){
            spDataSetter(response)
        }

        return {
            summary : summaryResponse, 
            incident : incidentResponse
        }
    }

    async fetchOfficeData(officeDataSetter) {
        let officeResponse;
        try {
            officeResponse = await axios.get("https://portal.office.com/api/servicestatus/index")
                    .then((e) => e.data)
        } catch (err) {
            console.log(err)
        }
    
        if(officeDataSetter){
            officeDataSetter(officeResponse)
        }
    
        return officeResponse
    
    }

    async pollData(zoomDataSetter, notionDataSetter, egnyteDataSetter, goToDataSetter, jamfDataSetter, officeDataSetter, slackDataSetter) {
        console.log('populating')
        this.fetchData('https://status.zoom.us', zoomDataSetter)
        this.fetchData('https://status.notion.so', notionDataSetter)
        this.fetchData('https://status.egnyte.com', egnyteDataSetter)
        this.fetchData('https://status.logmeinremotesupport.com', goToDataSetter)
        this.fetchData('https://status.jamf.com/', jamfDataSetter)
        this.fetchOfficeData(officeDataSetter)
        scrapeSlack(slackDataSetter)
        
        const setIntervalId = setInterval(async () => {
            try {
                console.log('ping')
                this.fetchData('https://status.zoom.us', zoomDataSetter)
                this.fetchData('https://status.notion.so', notionDataSetter)
                this.fetchData('https://status.egnyte.com', egnyteDataSetter)
                this.fetchData('https://status.logmeinremotesupport.com', goToDataSetter)
                this.fetchData('https://status.jamf.com/', jamfDataSetter)
                this.fetchOfficeData(officeDataSetter)
                scrapeSlack(slackDataSetter)
            } catch (err) {
                console.error(err); // eslint-disable-line no-console
            }
        }, this.refreshRate * 1000);

        this.interval.push(setIntervalId);
    }

    clear = () => {
        this.setIntervalIds.forEach(timeoutId => {
            clearInterval(timeoutId);
        });

        this.setIntervalIds = [];
    };
}

module.exports = NetworkDaemon