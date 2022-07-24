const axios = require('axios')

const fetchOfficeData = async(officeDataSetter) =>  {
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

module.exports = fetchOfficeData