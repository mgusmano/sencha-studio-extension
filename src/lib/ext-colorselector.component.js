class ExtColorselectorDef {
    static get alias() {return ''}
    static get xtype() {return 'colorselector'}
    static get properties() { return {
"alphaDecimalFormat":["string"],
"cancelButtonText":["string"],
"color":["object"],
"fieldPad":["number"],
"fieldWidth":["number"],
"format":["'hex6'","'hex8'","'#hex6'","'#hex8'","'hex6'","'hex8'","'#hex6'","'#hex8'"],
"okButtonText":["string"],
"showOkCancelButtons":["boolean"],
"showPreviousColor":["boolean"],
"value":["string"],
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "align": "Obyect",
    "fitToParent": "Boolean",
    "config": "Object",

    }}
    static get events() { return [
{name:'cancel',parameters:'colorselector'},
{name:'change',parameters:'colorselector,color,previousColor'},
{name:'ok',parameters:'colorselector,color'},
{name:'ready',parameters:''}

    ]}
    static get methods() { return [
{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
{ name:'statics',function: function() { return this.ext.statics() } },
{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },

    ]}
    constructor() {}
};