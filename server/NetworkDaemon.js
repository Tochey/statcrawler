const axios = require('axios');
class NetworkDaemon {


    constructor(refreshRate) {
        this.refreshRate = refreshRate
        this.interval = []
    }

    async fetchZoomData(zoomDataSetter) {
        let summaryResponse, incidentResponse;
        try {
            summaryResponse = await axios.get("https://status.zoom.us/api/v2/summary.json")
                .then((e) => e.data).then((e) => e.status);
            incidentResponse = await axios.get("https://status.zoom.us/api/v2/incidents.json")
                .then((e) => e.data).then(e => e.incidents)
        } catch (err) {
            console.log(err)
        }
        zoomDataSetter(summaryResponse,incidentResponse)
        return [summaryResponse, incidentResponse]
    }


    async fetchOfficeData(officeDataSetter) {
        let officeResponse;
        try {
            officeResponse = await axios.get("https://portal.office.com/api/servicestatus/index")
                    .then((e) => e.data)
        } catch (err) {
            console.log(err)
        }

        officeDataSetter(officeResponse)

    }


    async pollData(zoomDataSetter, officeDataSetter) {
        
        this.fetchZoomData(zoomDataSetter)
        this.fetchOfficeData(officeDataSetter)

        const setIntervalId = setInterval(async () => {
            try {
                console.log('ping')
                this.fetchZoomData(zoomDataSetter)
                this.fetchOfficeData(officeDataSetter)
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
