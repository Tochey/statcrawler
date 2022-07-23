const axios = require('axios')

const fetchSp = async (serviceUrl , spDataSetter) => {
    let summaryResponse, incidentResponse;  
    try {
        summaryResponse = await axios.get(`${serviceUrl}/api/v2/summary.json`)
            .then((e) => e.data).then((e) => e.status);
        incidentResponse = await axios.get(`${serviceUrl}/api/v2/incidents.json`)
            .then((e) => e.data).then(e => e.incidents)
    } catch (err) {
        console.log(err)
    }
    if(spDataSetter){
        spDataSetter(summaryResponse, incidentResponse)
    }
    return [summaryResponse, incidentResponse]
}

module.exports = fetchSp