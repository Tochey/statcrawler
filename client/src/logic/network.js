import axios from "axios";
export default class network {

    constructor(url, refreshRate) {
        this.url = url;
        this.refreshRate = refreshRate
        this.interval = []
    }


    async pollSummary(summaryDataSetter) {
        let summaryRes;
        try {
            summaryRes = await axios.get(this.url + "/api/v2/summary.json")
                .then((e) => e.data).then((e) => e.status);
        } catch (err) {
            console.log(err)
        }
        summaryDataSetter(summaryRes)
    }

    async pollIncident(incidentDataSetter) {

            let incidentRes;
            try {
                incidentRes = await axios.get(this.url + "/api/v2/incidents.json")
                .then((e) => e.data).then(e => e.incidents)
            } catch (err) {
                console.log(err)
            }
            incidentDataSetter(incidentRes)
    }


    async pollData ( incidentDataSetter, summaryDataSetter){
  
        this.pollIncident(incidentDataSetter)
        this.pollSummary(summaryDataSetter)
    
        const setIntervalId = setInterval(async () => {
            try {
            this.pollIncident(incidentDataSetter)  
            this.pollSummary(summaryDataSetter)
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
