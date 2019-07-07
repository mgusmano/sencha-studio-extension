function getInitialConfigs(c) {
    var initialconfigs = [];
    for (var property in c.$config.values) {
        var set = 'no'
        if (c.$config.values.hasOwnProperty(property)) {
            set = 'yes'
        }
        var value = ''
        if (c.$config.values[property] != undefined) {
            if (typeof c.$config.values[property] == "string") {
                value = c.$config.values[property];
            }
            else {
                try {
                value = JSON.stringify(c.$config.values[property])
                }
                catch(e) {
                    value = ''
                }
            }
        }
        
        o = { configName: property, value1: value, set: set}
        initialconfigs.push(o)
    }
    return initialconfigs
}