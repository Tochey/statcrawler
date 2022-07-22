const spformat = data => {
    
    return {
        name: data.name,
        status: data.status,
        date: data.created_at,
        incident_history_update : data.incident_updates.map((e) => {
                return {
                    body : e.body,
                    status : e.status,
                    last_updated : e.updated_at
                }
        }),
        link: data.shortlink
    }
}

module.exports = spformat