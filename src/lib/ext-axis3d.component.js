class ExtAxis3dDef {
    static get alias() {return ''}
    static get xtype() {return 'axis3d'}
    static get properties() { return {
"adjustByMajorUnit":["boolean"],
"background":["object"],
"center":["array"],
"chart":["Ext.chart.AbstractChart"],
"depth":["any"],
"expandRangeBy":["number"],
"fields":["array"],
"floating":["number","object"],
"grid":["object"],
"hidden":["boolean"],
"id":["string"],
"label":["object"],
"layout":["object","Ext.chart.axis.layout.Layout"],
"length":["number"],
"limits":["array","object"],
"linkedTo":["Ext.chart.axis.Axis","string","number"],
"majorTickSteps":["number"],
"margin":["number"],
"maximum":["number"],
"maxZoom":["number"],
"minimum":["number"],
"minorTickSteps":["number"],
"minZoom":["number"],
"needHighPrecision":["boolean"],
"position":["string"],
"radius":["number"],
"reconcileRange":["boolean"],
"renderer":["function"],
"rotation":["number"],
"segmenter":["object","Ext.chart.axis.segmenter.Segmenter"],
"style":["object"],
"title":["string","object"],
"titleMargin":["number"],
"totalAngle":["any"],
"visibleRange":["array"],
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "align": "Obyect",
    "fitToParent": "Boolean",
    "config": "Object",

    }}
    static get events() { return [
{name:'rangechange',parameters:'axis,range,oldRange'},
{name:'visiblerangechange',parameters:'axis,visibleRange'},
{name:'ready',parameters:''}

    ]}
    static get methods() { return [
{ name:'clearRange',function: function() { return this.ext.clearRange() } },
{ name:'getAlignment',function: function() { return this.ext.getAlignment() } },
{ name:'getCoordFor',function: function(value,field,idx,items) { return this.ext.getCoordFor(value,field,idx,items) } },
{ name:'getGridAlignment',function: function() { return this.ext.getGridAlignment() } },
{ name:'getRange',function: function(recalculate) { return this.ext.getRange(recalculate) } },
{ name:'getSurface',function: function() { return this.ext.getSurface() } },
{ name:'performLayout',function: function() { return this.ext.performLayout() } },
{ name:'processData',function: function() { return this.ext.processData() } },
{ name:'reconcileRange',function: function() { return this.ext.reconcileRange() } },
{ name:'renderFrame',function: function() { return this.ext.renderFrame() } },
{ name:'setBoundSeriesRange',function: function(range) { return this.ext.setBoundSeriesRange(range) } },

    ]}
    constructor() {}
};