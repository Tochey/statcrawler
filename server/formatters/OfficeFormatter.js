const officeformat = (data) => {
    return {
        subtitle: data.SubTitle,
        services: data.Services.map((e) => {
            return {
                name: e.Name,
                isUp: e.IsUp,
                history: e.Messages ? e.Messages.map(((f) => {
                    return {
                        time: f.CreatedTime,
                        data: f.Lines
                    }
                })) : null,
            };
        }),
        isServicesUp: data.IsAllUp,
    };
};

module.exports = officeformat;
