class ExtD3_partitionDef {
    static get alias() {return ''}
    static get xtype() {return 'd3_partition'}
    static get properties() { return {
"alwaysOnTop":["boolean","number"],
"ariaAttributes":["object"],
"ariaDescribedBy":["string"],
"ariaLabel":["string"],
"ariaLabelledBy":["string"],
"axisLock":["boolean"],
"bind":["object","string"],
"border":["boolean"],
"bottom":["number","string"],
"centered":["boolean"],
"clipScene":["boolean"],
"cls":["string","string[]"],
"colorAxis":["Ext.d3.axis.Color"],
"componentCls":["string"],
"constrainAlign":["string","Ext.util.Region","Ext.dom.Element"],
"contentEl":["Ext.dom.Element","htmlelement","string"],
"controller":["string","object","Ext.app.ViewController"],
"data":["object"],
"defaultListenerScope":["boolean"],
"disabled":["boolean"],
"displayed":["boolean"],
"docked":["string"],
"draggable":["boolean","object","Ext.drag.Source"],
"expandEventName":["string","string[]"],
"flex":["number","string","object"],
"floated":["boolean"],
"focusCls":["string"],
"fullscreen":["boolean"],
"height":["number","string"],
"hidden":["boolean"],
"hideAnimation":["string","mixed"],
"hideMode":["'clip'","'display'","'offsets'","'opacity'","'visibility'"],
"hideOnMaskTap":["boolean"],
"hierarchyCls":["string"],
"html":["string","Ext.dom.Element","htmlelement"],
"id":["string"],
"instanceCls":["string","string[]"],
"interactions":["any"],
"itemId":["string"],
"keyMap":["object"],
"keyMapEnabled":["boolean"],
"keyMapTarget":["string"],
"layout":["function"],
"left":["number","string"],
"linkKey":["function"],
"listeners":["object"],
"margin":["number","string"],
"maxHeight":["number","string"],
"maxWidth":["number","string"],
"minHeight":["number","string"],
"minWidth":["number","string"],
"modal":["boolean"],
"modelValidation":["boolean"],
"name":["string"],
"nameable":["boolean"],
"nodeChildren":["function"],
"nodeClass":["function"],
"nodeKey":["function"],
"nodeText":["function","string","string[]"],
"nodeTransform":["function"],
"nodeValue":["function","string","number"],
"noParentValue":["boolean"],
"noSizeLayout":["boolean"],
"padding":["object","string","number"],
"plugins":["array","Ext.enums.Plugin","object","Ext.plugin.Abstract"],
"publishes":["string","string[]","object"],
"record":["Ext.data.Model"],
"reference":["string"],
"relative":["boolean"],
"renderLinks":["boolean"],
"renderTo":["Ext.dom.Element"],
"right":["number","string"],
"ripple":["boolean","object","string"],
"rootVisible":["boolean"],
"scrollable":["boolean","string","object"],
"selectEventName":["string","string[]"],
"selection":["Ext.data.TreeModel"],
"selfAlign":["string"],
"session":["boolean","object","Ext.data.Session"],
"shadow":["boolean"],
"shareableName":["boolean"],
"shim":["boolean"],
"showAnimation":["string","mixed"],
"size":["object"],
"sorter":["function"],
"stateful":["boolean","object","string[]"],
"statefulDefaults":["object","string[]"],
"stateId":["string"],
"store":["Ext.data.Store"],
"style":["string","object"],
"tabIndex":["number"],
"toFrontOnShow":["boolean"],
"tooltip":["string","object"],
"top":["number","string"],
"touchAction":["object"],
"tpl":["string","string[]","Ext.Template","Ext.XTemplate[]"],
"tplWriteMode":["string"],
"transitions":["any"],
"translatable":["object"],
"twoWayBindable":["string","string[]","object"],
"ui":["string","string[]"],
"userCls":["string","string[]"],
"userSelectable":["boolean","string","object"],
"viewModel":["string","object","Ext.app.ViewModel"],
"weight":["number"],
"width":["number","string"],
"x":["number"],
"xtype":["string"],
"y":["number"],
"zIndex":["number"],
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "align": "Obyect",
    "fitToParent": "Boolean",
    "config": "Object",

    }}
    static get events() { return [
{name:'added',parameters:'sender,container,index'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforetofront',parameters:'d3-partition'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'d3-partition,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'erased',parameters:'sender'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'d3-partition,event'},
{name:'focusenter',parameters:'d3-partition,event'},
{name:'focusleave',parameters:'d3-partition,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'layout',parameters:'component'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'removed',parameters:'sender,container,index'},
{name:'resize',parameters:'element,info'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'sceneresize',parameters:'component,scene,size'},
{name:'scenesetup',parameters:'component,scene'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'tofront',parameters:'d3-partition'},
{name:'topchange',parameters:'sender,value,oldValue'},
{name:'updatedata',parameters:'sender,newData'},
{name:'widthchange',parameters:'sender,value,oldValue'},
{name:'ready',parameters:''}

    ]}
    static get methods() { return [
{ name:'_addDeclaredListeners',function: function(listeners) { return this.ext._addDeclaredListeners(listeners) } },
{ name:'_fixReference',function: function() { return this.ext._fixReference() } },
{ name:'_flushStateful',function: function() { return this.ext._flushStateful() } },
{ name:'_getStateId',function: function() { return this.ext._getStateId() } },
{ name:'activatePlugin',function: function(type) { return this.ext.activatePlugin(type) } },
{ name:'addAfterListener',function: function() { return this.ext.addAfterListener() } },
{ name:'addBeforeListener',function: function() { return this.ext.addBeforeListener() } },
{ name:'addCls',function: function(cls,prefix,suffix) { return this.ext.addCls(cls,prefix,suffix) } },
{ name:'addDelegatedListener',function: function(eventName,fn,scope,options,order,caller,manager) { return this.ext.addDelegatedListener(eventName,fn,scope,options,order,caller,manager) } },
{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
{ name:'addElementReference',function: function(name,domNode) { return this.ext.addElementReference(name,domNode) } },
{ name:'addElementReferenceOnDemand',function: function(name,domNode) { return this.ext.addElementReferenceOnDemand(name,domNode) } },
{ name:'addListener',function: function(eventName,fn,scope,options,order,caller) { return this.ext.addListener(eventName,fn,scope,options,order,caller) } },
{ name:'addManagedListener',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.addManagedListener(item,ename,fn,scope,options,noDestroy) } },
{ name:'addNodeListener',function: function(eventName,handler) { return this.ext.addNodeListener(eventName,handler) } },
{ name:'addNodeListeners',function: function() { return this.ext.addNodeListeners() } },
{ name:'addPlugin',function: function(plugin) { return this.ext.addPlugin(plugin) } },
{ name:'afterEdit',function: function() { return this.ext.afterEdit() } },
{ name:'afterErase',function: function() { return this.ext.afterErase() } },
{ name:'afterRender',function: function() { return this.ext.afterRender() } },
{ name:'alignContent',function: function(options,transition) { return this.ext.alignContent(options,transition) } },
{ name:'alignTo',function: function(component,alignment,options) { return this.ext.alignTo(component,alignment,options) } },
{ name:'applyBind',function: function(binds,currentBindings) { return this.ext.applyBind(binds,currentBindings) } },
{ name:'applyCentered',function: function(centered) { return this.ext.applyCentered(centered) } },
{ name:'applyPlugins',function: function(plugins,oldPlugins) { return this.ext.applyPlugins(plugins,oldPlugins) } },
{ name:'applySession',function: function(session) { return this.ext.applySession(session) } },
{ name:'applyStyle',function: function(style,oldStyle) { return this.ext.applyStyle(style,oldStyle) } },
{ name:'applyTpl',function: function(tpl) { return this.ext.applyTpl(tpl) } },
{ name:'applyViewModel',function: function(viewModel) { return this.ext.applyViewModel(viewModel) } },
{ name:'beforeInitialize',function: function() { return this.ext.beforeInitialize() } },
{ name:'blur',function: function() { return this.ext.blur() } },
{ name:'bubble',function: function(fn,scope,args) { return this.ext.bubble(fn,scope,args) } },
{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
{ name:'center',function: function() { return this.ext.center() } },
{ name:'clearDelegatedListeners',function: function() { return this.ext.clearDelegatedListeners() } },
{ name:'clearListeners',function: function() { return this.ext.clearListeners() } },
{ name:'clearManagedListeners',function: function() { return this.ext.clearManagedListeners() } },
{ name:'clearScene',function: function() { return this.ext.clearScene() } },
{ name:'constructor',function: function(config) { return this.ext.constructor(config) } },
{ name:'createPlugin',function: function(config) { return this.ext.createPlugin(config) } },
{ name:'createRelayer',function: function(newName,beginEnd) { return this.ext.createRelayer(newName,beginEnd) } },
{ name:'createTransition',function: function(name,selection) { return this.ext.createTransition(name,selection) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
{ name:'destroyPlugin',function: function(plugin) { return this.ext.destroyPlugin(plugin) } },
{ name:'disable',function: function() { return this.ext.disable() } },
{ name:'doAddListener',function: function(name,fn,scope,options,order,caller,manager) { return this.ext.doAddListener(name,fn,scope,options,order,caller,manager) } },
{ name:'doDestroy',function: function() { return this.ext.doDestroy() } },
{ name:'doFireDelegatedEvent',function: function(eventName,args) { return this.ext.doFireDelegatedEvent(eventName,args) } },
{ name:'doFireEvent',function: function(eventName,args,bubbles) { return this.ext.doFireEvent(eventName,args,bubbles) } },
{ name:'doInheritUi',function: function() { return this.ext.doInheritUi() } },
{ name:'doUninheritUi',function: function() { return this.ext.doUninheritUi() } },
{ name:'enable',function: function() { return this.ext.enable() } },
{ name:'enableBubble',function: function(eventNames) { return this.ext.enableBubble(eventNames) } },
{ name:'findFloatParent',function: function(needsShow) { return this.ext.findFloatParent(needsShow) } },
{ name:'findFocusTarget',function: function() { return this.ext.findFocusTarget() } },
{ name:'findNode',function: function(node,selection) { return this.ext.findNode(node,selection) } },
{ name:'findPlugin',function: function(type) { return this.ext.findPlugin(type) } },
{ name:'fireAction',function: function(eventName,args,fn,scope,options,order) { return this.ext.fireAction(eventName,args,fn,scope,options,order) } },
{ name:'fireEvent',function: function(eventName,args) { return this.ext.fireEvent(eventName,args) } },
{ name:'fireEventArgs',function: function(eventName,args) { return this.ext.fireEventArgs(eventName,args) } },
{ name:'fireEventedAction',function: function(eventName,args,fn,scope,fnArgs) { return this.ext.fireEventedAction(eventName,args,fn,scope,fnArgs) } },
{ name:'focus',function: function(selectText) { return this.ext.focus(selectText) } },
{ name:'getAlignmentInfo',function: function(component,alignment) { return this.ext.getAlignmentInfo(component,alignment) } },
{ name:'getAlignRegion',function: function(component,alignment,options) { return this.ext.getAlignRegion(component,alignment,options) } },
{ name:'getAriaLabelEl',function: function(reference) { return this.ext.getAriaLabelEl(reference) } },
{ name:'getBubbleParent',function: function() { return this.ext.getBubbleParent() } },
{ name:'getClassCls',function: function() { return this.ext.getClassCls() } },
{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
{ name:'getController',function: function() { return this.ext.getController() } },
{ name:'getCurrentAlignmentInfo',function: function() { return this.ext.getCurrentAlignmentInfo() } },
{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
{ name:'getDefs',function: function() { return this.ext.getDefs() } },
{ name:'getElementConfig',function: function() { return this.ext.getElementConfig() } },
{ name:'getFloatParent',function: function() { return this.ext.getFloatParent() } },
{ name:'getFloatWrap',function: function() { return this.ext.getFloatWrap() } },
{ name:'getFocusClsEl',function: function(focusEl) { return this.ext.getFocusClsEl(focusEl) } },
{ name:'getFocusEl',function: function() { return this.ext.getFocusEl() } },
{ name:'getId',function: function() { return this.ext.getId() } },
{ name:'getInherited',function: function(inner) { return this.ext.getInherited(inner) } },
{ name:'getInheritedConfig',function: function(property,skipThis) { return this.ext.getInheritedConfig(property,skipThis) } },
{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
{ name:'getModalSibling',function: function() { return this.ext.getModalSibling() } },
{ name:'getPlugin',function: function(id) { return this.ext.getPlugin(id) } },
{ name:'getRefOwner',function: function() { return this.ext.getRefOwner() } },
{ name:'getRenderTarget',function: function() { return this.ext.getRenderTarget() } },
{ name:'getScene',function: function() { return this.ext.getScene() } },
{ name:'getScrollableClientRegion',function: function() { return this.ext.getScrollableClientRegion() } },
{ name:'getSize',function: function() { return this.ext.getSize() } },
{ name:'getStateBuilder',function: function(cache) { return this.ext.getStateBuilder(cache) } },
{ name:'getStatefulOwner',function: function() { return this.ext.getStatefulOwner() } },
{ name:'getTabIndex',function: function() { return this.ext.getTabIndex() } },
{ name:'getXTypes',function: function() { return this.ext.getXTypes() } },
{ name:'handleBlurEvent',function: function(info) { return this.ext.handleBlurEvent(info) } },
{ name:'handleFocusEvent',function: function(info) { return this.ext.handleFocusEvent(info) } },
{ name:'hasCls',function: function(className) { return this.ext.hasCls(className) } },
{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
{ name:'hasListener',function: function(eventName) { return this.ext.hasListener(eventName) } },
{ name:'hide',function: function(animation) { return this.ext.hide(animation) } },
{ name:'hideMask',function: function() { return this.ext.hideMask() } },
{ name:'hideRoot',function: function() { return this.ext.hideRoot() } },
{ name:'initBindable',function: function() { return this.ext.initBindable() } },
{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
{ name:'initDragConstraints',function: function(draggable) { return this.ext.initDragConstraints(draggable) } },
{ name:'initElement',function: function() { return this.ext.initElement() } },
{ name:'initElementListeners',function: function(elementConfig) { return this.ext.initElementListeners(elementConfig) } },
{ name:'initFocusableElement',function: function(force) { return this.ext.initFocusableElement(force) } },
{ name:'initFocusableEvents',function: function(force) { return this.ext.initFocusableEvents(force) } },
{ name:'initialize',function: function() { return this.ext.initialize() } },
{ name:'initInheritedState',function: function(inheritedState) { return this.ext.initInheritedState(inheritedState) } },
{ name:'initKeyMap',function: function() { return this.ext.initKeyMap() } },
{ name:'initUiReference',function: function(referenceName,uiCls,isInstance) { return this.ext.initUiReference(referenceName,uiCls,isInstance) } },
{ name:'insertFloatedDom',function: function(needsShow) { return this.ext.insertFloatedDom(needsShow) } },
{ name:'invalidateInheritedState',function: function() { return this.ext.invalidateInheritedState() } },
{ name:'is',function: function(selector) { return this.ext.is(selector) } },
{ name:'isAncestor',function: function(possibleDescendant) { return this.ext.isAncestor(possibleDescendant) } },
{ name:'isBlurring',function: function(e) { return this.ext.isBlurring(e) } },
{ name:'isBound',function: function(name) { return this.ext.isBound(name) } },
{ name:'isCentered',function: function() { return this.ext.isCentered() } },
{ name:'isDescendantOf',function: function(ancestor) { return this.ext.isDescendantOf(ancestor) } },
{ name:'isDestructing',function: function() { return this.ext.isDestructing() } },
{ name:'isDisabled',function: function() { return this.ext.isDisabled() } },
{ name:'isEnabled',function: function() { return this.ext.isEnabled() } },
{ name:'isFocusable',function: function(deep) { return this.ext.isFocusable(deep) } },
{ name:'isFocusing',function: function(e) { return this.ext.isFocusing(e) } },
{ name:'isHeighted',function: function() { return this.ext.isHeighted() } },
{ name:'isHidden',function: function(deep) { return this.ext.isHidden(deep) } },
{ name:'isPainted',function: function() { return this.ext.isPainted() } },
{ name:'isRecordInStore',function: function(record) { return this.ext.isRecordInStore(record) } },
{ name:'isRendered',function: function() { return this.ext.isRendered() } },
{ name:'isSuspended',function: function(event) { return this.ext.isSuspended(event) } },
{ name:'isSyncing',function: function(name) { return this.ext.isSyncing(name) } },
{ name:'isVisible',function: function(deep) { return this.ext.isVisible(deep) } },
{ name:'isWidthed',function: function() { return this.ext.isWidthed() } },
{ name:'isXType',function: function(xtype,shallow) { return this.ext.isXType(xtype,shallow) } },
{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
{ name:'loadState',function: function(state,stateful) { return this.ext.loadState(state,stateful) } },
{ name:'lookupController',function: function(skipThis) { return this.ext.lookupController(skipThis) } },
{ name:'lookupNameHolder',function: function(skipThis) { return this.ext.lookupNameHolder(skipThis) } },
{ name:'lookupReferenceHolder',function: function(skipThis) { return this.ext.lookupReferenceHolder(skipThis) } },
{ name:'lookupSession',function: function(skipThis) { return this.ext.lookupSession(skipThis) } },
{ name:'lookupTpl',function: function(name) { return this.ext.lookupTpl(name) } },
{ name:'lookupViewModel',function: function(skipThis) { return this.ext.lookupViewModel(skipThis) } },
{ name:'mon',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.mon(item,ename,fn,scope,options,noDestroy) } },
{ name:'mun',function: function(item,ename,fn,scope) { return this.ext.mun(item,ename,fn,scope) } },
{ name:'nodeFromRecord',function: function(record) { return this.ext.nodeFromRecord(record) } },
{ name:'on',function: function(eventName,fn,scope,options,order,caller) { return this.ext.on(eventName,fn,scope,options,order,caller) } },
{ name:'onAdded',function: function(parent,instanced) { return this.ext.onAdded(parent,instanced) } },
{ name:'onAfter',function: function(eventName,fn,scope,options) { return this.ext.onAfter(eventName,fn,scope,options) } },
{ name:'onBefore',function: function(eventName,fn,scope,options) { return this.ext.onBefore(eventName,fn,scope,options) } },
{ name:'onBlur',function: function(e) { return this.ext.onBlur(e) } },
{ name:'onFocus',function: function(e) { return this.ext.onFocus(e) } },
{ name:'onFocusEnter',function: function(e) { return this.ext.onFocusEnter(e) } },
{ name:'onFocusLeave',function: function(e) { return this.ext.onFocusLeave(e) } },
{ name:'onFocusMove',function: function(info) { return this.ext.onFocusMove(info) } },
{ name:'onInheritedAdd',function: function(parent,instanced) { return this.ext.onInheritedAdd(parent,instanced) } },
{ name:'onInheritedRemove',function: function(destroying) { return this.ext.onInheritedRemove(destroying) } },
{ name:'onInitialized',function: function(fn,scope,args) { return this.ext.onInitialized(fn,scope,args) } },
{ name:'onLayout',function: function() { return this.ext.onLayout() } },
{ name:'onNodeDeselect',function: function(record,selection) { return this.ext.onNodeDeselect(record,selection) } },
{ name:'onNodesAdd',function: function(selection) { return this.ext.onNodesAdd(selection) } },
{ name:'onNodeSelect',function: function(record,selection) { return this.ext.onNodeSelect(record,selection) } },
{ name:'onRender',function: function() { return this.ext.onRender() } },
{ name:'onResize',function: function(width,height,oldWidth,oldHeight) { return this.ext.onResize(width,height,oldWidth,oldHeight) } },
{ name:'onScrollEnd',function: function(x,y) { return this.ext.onScrollEnd(x,y) } },
{ name:'onScrollMove',function: function(x,y) { return this.ext.onScrollMove(x,y) } },
{ name:'onScrollStart',function: function(x,y) { return this.ext.onScrollStart(x,y) } },
{ name:'onStatefulChange',function: function() { return this.ext.onStatefulChange() } },
{ name:'owns',function: function(element) { return this.ext.owns(element) } },
{ name:'performLayout',function: function() { return this.ext.performLayout() } },
{ name:'persistState',function: function() { return this.ext.persistState() } },
{ name:'preprocessShow',function: function(component,alignment,options) { return this.ext.preprocessShow(component,alignment,options) } },
{ name:'processElementConfig',function: function() { return this.ext.processElementConfig() } },
{ name:'publishState',function: function(property,value) { return this.ext.publishState(property,value) } },
{ name:'readStateObject',function: function() { return this.ext.readStateObject() } },
{ name:'realign',function: function(component,alignment,options) { return this.ext.realign(component,alignment,options) } },
{ name:'relayEvents',function: function(origin,events,prefix) { return this.ext.relayEvents(origin,events,prefix) } },
{ name:'removeAfterListener',function: function() { return this.ext.removeAfterListener() } },
{ name:'removeBeforeListener',function: function() { return this.ext.removeBeforeListener() } },
{ name:'removeCls',function: function(cls,prefix,suffix) { return this.ext.removeCls(cls,prefix,suffix) } },
{ name:'removeDelegatedListener',function: function(eventName,fn,scope) { return this.ext.removeDelegatedListener(eventName,fn,scope) } },
{ name:'removeLinks',function: function(selection) { return this.ext.removeLinks(selection) } },
{ name:'removeListener',function: function(eventName,fn,scope,eventOptions) { return this.ext.removeListener(eventName,fn,scope,eventOptions) } },
{ name:'removeManagedListener',function: function(item,ename,fn,scope) { return this.ext.removeManagedListener(item,ename,fn,scope) } },
{ name:'removeManagedListenerItem',function: function(isClear,managedListener,item,ename,fn,scope) { return this.ext.removeManagedListenerItem(isClear,managedListener,item,ename,fn,scope) } },
{ name:'removeNodeListener',function: function(eventName,handler) { return this.ext.removeNodeListener(eventName,handler) } },
{ name:'removeNodes',function: function(selection) { return this.ext.removeNodes(selection) } },
{ name:'removePlugin',function: function(plugin,destroy) { return this.ext.removePlugin(plugin,destroy) } },
{ name:'renderLinks',function: function(update) { return this.ext.renderLinks(update) } },
{ name:'renderNodes',function: function(update) { return this.ext.renderNodes(update) } },
{ name:'renderScene',function: function(nodes,links) { return this.ext.renderScene(nodes,links) } },
{ name:'replaceCls',function: function(oldCls,newCls,prefix,suffix) { return this.ext.replaceCls(oldCls,newCls,prefix,suffix) } },
{ name:'resetFloating',function: function() { return this.ext.resetFloating() } },
{ name:'resetPositioned',function: function() { return this.ext.resetPositioned() } },
{ name:'resetZoom',function: function(instantly) { return this.ext.resetZoom(instantly) } },
{ name:'resizeHandler',function: function(size) { return this.ext.resizeHandler(size) } },
{ name:'resolveListenerScope',function: function(defaultScope) { return this.ext.resolveListenerScope(defaultScope) } },
{ name:'resolveSatelliteListenerScope',function: function(satellite,defaultScope) { return this.ext.resolveSatelliteListenerScope(satellite,defaultScope) } },
{ name:'resumeEvent',function: function(eventName) { return this.ext.resumeEvent(eventName) } },
{ name:'resumeEvents',function: function(discardQueue) { return this.ext.resumeEvents(discardQueue) } },
{ name:'revertFocus',function: function() { return this.ext.revertFocus() } },
{ name:'revertFocusTo',function: function(target) { return this.ext.revertFocusTo(target) } },
{ name:'saveState',function: function(state,stateful) { return this.ext.saveState(state,stateful) } },
{ name:'selectionFromRecord',function: function(record) { return this.ext.selectionFromRecord(record) } },
{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
{ name:'setCurrentAlignmentInfo',function: function(alignmentInfo) { return this.ext.setCurrentAlignmentInfo(alignmentInfo) } },
{ name:'setLayoutSize',function: function(size) { return this.ext.setLayoutSize(size) } },
{ name:'setListeners',function: function(listeners) { return this.ext.setListeners(listeners) } },
{ name:'setRendered',function: function(rendered,root) { return this.ext.setRendered(rendered,root) } },
{ name:'setSize',function: function(width,height) { return this.ext.setSize(width,height) } },
{ name:'setTabIndex',function: function(newTabIndex,focusEl) { return this.ext.setTabIndex(newTabIndex,focusEl) } },
{ name:'setVisibility',function: function(isVisible) { return this.ext.setVisibility(isVisible) } },
{ name:'setXY',function: function(x,y,animation) { return this.ext.setXY(x,y,animation) } },
{ name:'show',function: function(animation,options) { return this.ext.show(animation,options) } },
{ name:'showAt',function: function(x,y) { return this.ext.showAt(x,y) } },
{ name:'showBy',function: function(component,alignment,options) { return this.ext.showBy(component,alignment,options) } },
{ name:'showMask',function: function(msg) { return this.ext.showMask(msg) } },
{ name:'skipLayoutTransition',function: function() { return this.ext.skipLayoutTransition() } },
{ name:'statics',function: function() { return this.ext.statics() } },
{ name:'suspendEvent',function: function(eventName) { return this.ext.suspendEvent(eventName) } },
{ name:'suspendEvents',function: function(queueSuspended) { return this.ext.suspendEvents(queueSuspended) } },
{ name:'syncAlwaysOnTop',function: function(fromMousedown) { return this.ext.syncAlwaysOnTop(fromMousedown) } },
{ name:'syncFloatWrap',function: function() { return this.ext.syncFloatWrap() } },
{ name:'toFront',function: function(fromMousedown) { return this.ext.toFront(fromMousedown) } },
{ name:'toggleCls',function: function(className,state) { return this.ext.toggleCls(className,state) } },
{ name:'toLocalXY',function: function(event,view) { return this.ext.toLocalXY(event,view) } },
{ name:'transformStatefulConfig',function: function(instanceConfig,configurator) { return this.ext.transformStatefulConfig(instanceConfig,configurator) } },
{ name:'triggerInitialized',function: function() { return this.ext.triggerInitialized() } },
{ name:'un',function: function(eventName,fn,scope,eventOptions) { return this.ext.un(eventName,fn,scope,eventOptions) } },
{ name:'unAfter',function: function(eventName,fn,scope,options) { return this.ext.unAfter(eventName,fn,scope,options) } },
{ name:'unBefore',function: function(eventName,fn,scope,options) { return this.ext.unBefore(eventName,fn,scope,options) } },
{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
{ name:'up',function: function(selector,limit) { return this.ext.up(selector,limit) } },
{ name:'updateCls',function: function(newCls,oldCls) { return this.ext.updateCls(newCls,oldCls) } },
{ name:'updateData',function: function(newData) { return this.ext.updateData(newData) } },
{ name:'updateEventName',function: function(name,oldName,handler) { return this.ext.updateEventName(name,oldName,handler) } },
{ name:'updateHeight',function: function(height) { return this.ext.updateHeight(height) } },
{ name:'updateSession',function: function(session) { return this.ext.updateSession(session) } },
{ name:'updateViewModel',function: function(viewModel,oldViewModel) { return this.ext.updateViewModel(viewModel,oldViewModel) } },
{ name:'updateWidth',function: function(width) { return this.ext.updateWidth(width) } },
{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },
{ name:'whenVisible',function: function(fn,args) { return this.ext.whenVisible(fn,args) } },

    ]}
    constructor() {}
};