class ExtCalendar_multiviewDef {
    static get alias() {return ''}
    static get xtype() {return 'calendar_multiview'}
    static get properties() { return {
"compact":["boolean"],
"compactOptions":["object"],
"defaultView":["string"],
"layout":["object","string"],
"store":["object","Ext.calendar.store.Calendars"],
"timezoneOffset":["number"],
"value":["date"],
"views":["object"],
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "align": "Obyect",
    "fitToParent": "Boolean",
    "config": "Object",

    }}
    static get events() { return [
{name:'ready',parameters:''}

    ]}
    static get methods() { return [
{ name:'moveNext',function: function() { return this.ext.moveNext() } },
{ name:'movePrevious',function: function() { return this.ext.movePrevious() } },
{ name:'navigate',function: function(amount,interval) { return this.ext.navigate(amount,interval) } },
{ name:'setView',function: function(view) { return this.ext.setView(view) } },

    ]}
    constructor() {}
};