function stringify(obj_from_json, root){

    if (obj_from_json === null ||
        obj_from_json === undefined ||
        obj_from_json === true ||
        obj_from_json === false 
    ) {
        return obj_from_json;
    } 
    if(typeof obj_from_json == 'string' || typeof obj_from_json == 'number') {
        if (root != false) {
            return obj_from_json;
        }
    }
    if(typeof obj_from_json !== "object" || Array.isArray(obj_from_json)){
        return JSON.stringify(obj_from_json);
    }
    let props = Object
        .keys(obj_from_json)
        .map(key => `${key}: ${stringify(obj_from_json[key], false)}`)
        .join(", ");
    return `{${props}}`;
}

function getSuper2(superCfg, classes, configs, classLevel) {
    if (classLevel == undefined)
        {classLevel = 0;}
    else 
        {classLevel++;}
    var className = superCfg.cls.$className
    //console.log(className)
    var xtype = superCfg.cls.xtype
    classes.push({ name: className})
    var docs;
    try { docs = getDocs(xtype); }
    catch(e) { console.log('not found ' + xtype);docs = []; }

    var o
    var found
    var seq = 1;
    var sortable;
    //console.log(className + ' - superCfg.values: ' + Object.keys(superCfg.values).length)
    //console.dir(superCfg.values)
    sortable = []
    for (var configName in superCfg.values) {
        if (superCfg.values.hasOwnProperty(configName)) {
            sortable.push({configName: configName, configValue: superCfg.values[configName]});
        }
    }
    function compare(a, b) {
        // Use toUpperCase() to ignore character casing
        const configNameA = a.configName.toUpperCase();
        const configNameB = b.configName.toUpperCase();
      
        let comparison = 0;
        if (configNameA > configNameB) {
          comparison = 1;
        } else if (configNameA < configName) {
          comparison = -1;
        }
        return comparison;
      }
    sortable.sort(compare);

    //console.dir('sortable')
    //console.dir(sortable)

    for (var config in sortable) {

        found = docs.find(function(element) {
            return element.configName == sortable[config].configName;
        });
        if (found == undefined) {
            //console.log(sortable[config].configName + ' is missing')
            continue;
        }

        o = {}
        o.seq = seq;
        seq++;
        o.configName = sortable[config].configName;

        // found = docs.find(function(element) {
        //     return element.configName == sortable[config].configName;
        // });
        // if (found == undefined) {
        //     console.log(sortable[config].configName + ' is missing')
        //     o.type = '**not found**';
        //     o.numTypes = null;
        //     o.types = null
        // }
        // else {
            o.type = found.type;
            o.numTypes = found.num;
            o.types = found.types
        //}

        o.initialValue = stringify(sortable[config].configValue);
        o.className = className;
        o.classLevel = classLevel;
        o.xtype = xtype;

        configs.push(o);
    }

    if (superCfg.superCfg != null) {
        getSuper2(superCfg.superCfg, classes, configs, classLevel)
    }
}



function getSuper(c, zz, supers, allconfigs, initialconfigs, ultimate, obj) {
    //configurators.push({className: c.$className, configurator: configurator,  configuratorconfigs: configurator.configs})
    for (var configName in c.$config.configs) {
        if (c.$config.configs.hasOwnProperty(configName)) {
            var getter = 'get' + configName.charAt(0).toUpperCase() + configName.slice(1);
            var value = "N/A"
            var write = false
            try {
                var getterString = c[getter].toString();
                if (!getterString.includes('is a write-only config.')) {

                    //if (o[getter]() != undefined) {
                        write = true
                        value = o[getter]();
                    //}
                }
            }
            catch(e) {
                // console.log('error...')
                // console.dir(e)
                // console.dir(c)
            }

            var type = 'placeholder'; //obj.properties['type']

            // var types = obj.properties[name]
            // var type
            // if (types != null) {
            //     type = types[0].toString()
            // }
            // else {
            //     type = "undefined"
            // }
            //allconfigs.push({configName: configName, className: c.$className, value: value, write: write, types: types, type: type})
            allconfigs.push({"configName": configName, "className": c.$className, "value2": '', "type": type})
            }
    }

    //supers.push({name: c.$className, configs: theConfigs})
    supers.push({name: c.$className})

    if(c.superclass != undefined) {
        getSuper(c.superclass, c.$config.superCfg, supers, allconfigs, initialconfigs, ultimate, obj)
    }
    else {
        allconfigs.sort((a,b) => (a.configName > b.configName) ? 1 : ((b.configName > a.configName) ? -1 : 0));
        // console.log('allconfigs')
        // console.dir(allconfigs)
        //use it
        //setTimeout(function() {
            // console.log(initialconfigs.length)
            // console.log(allconfigs.length)
    

            //ultimate = [];
            var i;
            if (initialconfigs.length == 0 ) {
                console.log('allconfigs')
                console.log(allconfigs)
                ultimate = allconfigs
                //ultimate.push(allconfigs)
            }
            else {
                for (i = 0; i < initialconfigs.length; i++) { 
                    //console.log(initialconfigs[i])
                    let obj = allconfigs.find(o => o.configName === initialconfigs[i].configName);
                    //console.log(obj)
                    const object3 = {...obj, ...initialconfigs[i] }
                    //console.log(object3)
                    ultimate.push(object3)
                }
            }



            //allconfigs = [];
            //initialconfigs = [];




//                }, 3000);
        //var allconfigsDOM = document.getElementById('allconfigs');
        //allconfigsDOM.data = ultimate;

        //window.dispatchEvent(new CustomEvent('configsEvent', {detail:{configs:allconfigs}}));
        //window.dispatchEvent(new CustomEvent('supersEvent', {detail:{supers:supers, configs:configs}}));
    }
}
