class ExtPivotconfigformDef {
    static get alias() {return ''}
    static get xtype() {return 'pivotconfigform'}
    static get properties() { return {
"activeChildTabIndex":["number"],
"activeItem":["Ext.Component","object","string","number"],
"allowFocusingDisabledChildren":["boolean"],
"alwaysOnTop":["boolean","number"],
"anchor":["boolean"],
"anchorPosition":["string"],
"api":["object"],
"ariaAttributes":["object"],
"ariaDescribedBy":["string"],
"ariaLabel":["string"],
"ariaLabelledBy":["string"],
"autoDestroy":["boolean"],
"autoSize":["boolean"],
"axisLock":["boolean"],
"baseParams":["object"],
"bbar":["object","object[]"],
"bind":["object","string"],
"bodyBorder":["boolean"],
"bodyPadding":["number","boolean","string"],
"bodyStyle":["string","object"],
"border":["boolean"],
"bottom":["number","string"],
"buttonAlign":["string"],
"buttons":["object","Ext.Button[]"],
"buttonToolbar":["object","Ext.Toolbar"],
"cardSwitchAnimation":["string","object","boolean"],
"centered":["boolean"],
"closable":["boolean"],
"closeAction":["string"],
"closeToolText":["string"],
"cls":["string","string[]"],
"collapsed":["boolean"],
"collapsible":["'top'","'right'","'bottom'","'left'","boolean","object"],
"constrainAlign":["string","Ext.util.Region","Ext.dom.Element"],
"contentEl":["Ext.dom.Element","htmlelement","string"],
"control":["object"],
"controller":["string","object","Ext.app.ViewController"],
"data":["object"],
"defaultFocus":["string"],
"defaultListenerScope":["boolean"],
"defaults":["object"],
"defaultToolWeights":["object"],
"defaultType":["string"],
"disabled":["boolean"],
"displayed":["boolean"],
"docked":["string"],
"draggable":["boolean","object","Ext.drag.Source"],
"enableSubmissionForm":["boolean"],
"enctype":["string"],
"fieldSeparators":["boolean"],
"flex":["number","string","object"],
"floated":["boolean"],
"focusableContainer":["boolean"],
"focusCls":["string"],
"fullscreen":["boolean"],
"header":["boolean","object"],
"headerPosition":["'top'","'right'","'bottom'","'left'"],
"height":["number","string"],
"hidden":["boolean"],
"hideAnimation":["string","mixed"],
"hideMode":["'clip'","'display'","'offsets'","'opacity'","'visibility'"],
"hideOnMaskTap":["boolean"],
"html":["string","Ext.dom.Element","htmlelement"],
"icon":["string"],
"iconAlign":["'top'","'right'","'bottom'","'left'"],
"iconCls":["string"],
"id":["string"],
"inactiveChildTabIndex":["number"],
"innerCls":["string"],
"inputBorders":["boolean"],
"instanceCls":["string","string[]"],
"itemId":["string"],
"items":["array","object"],
"keyMap":["object"],
"keyMapEnabled":["boolean"],
"keyMapTarget":["string"],
"layout":["object","string"],
"lbar":["object","object[]"],
"left":["number","string"],
"listeners":["object"],
"manageBorders":["boolean"],
"margin":["number","string"],
"masked":["boolean","string","object","Ext.Mask","Ext.LoadMask"],
"maxHeight":["number","string"],
"maxWidth":["number","string"],
"method":["string"],
"minButtonWidth":["number"],
"minHeight":["number","string"],
"minWidth":["number","string"],
"modal":["boolean"],
"modelValidation":["boolean"],
"multipartDetection":["boolean"],
"name":["string"],
"nameable":["boolean"],
"nameHolder":["boolean"],
"padding":["number","string"],
"paramOrder":["string","string[]"],
"paramsAsHash":["boolean"],
"plugins":["array","Ext.enums.Plugin","object","Ext.plugin.Abstract"],
"publishes":["string","string[]","object"],
"rbar":["object","object[]"],
"record":["Ext.data.Model"],
"reference":["string"],
"referenceHolder":["boolean"],
"relative":["boolean"],
"renderTo":["Ext.dom.Element"],
"resetFocusPosition":["boolean"],
"resizable":["object"],
"right":["number","string"],
"ripple":["boolean","object","string"],
"scrollable":["boolean","string","object"],
"selfAlign":["string"],
"session":["boolean","object","Ext.data.Session"],
"shadow":["boolean"],
"shareableName":["boolean"],
"shim":["boolean"],
"showAnimation":["string","mixed"],
"standardButtons":["object"],
"standardSubmit":["boolean"],
"stateful":["boolean","object","string[]"],
"statefulDefaults":["object","string[]"],
"stateId":["string"],
"style":["string","object"],
"submitOnAction":["object"],
"tabIndex":["number"],
"tbar":["object","object[]"],
"timeout":["number"],
"title":["string","Ext.panel.Title"],
"titleAlign":["'left'","'center'","'right'"],
"toFrontOnShow":["boolean"],
"toolDefaults":["object"],
"tools":["Ext.Tool[]","object","object[]"],
"tooltip":["string","object"],
"top":["number","string"],
"touchAction":["object"],
"tpl":["string","string[]","Ext.Template","Ext.XTemplate[]"],
"tplWriteMode":["string"],
"trackResetOnLoad":["boolean"],
"translatable":["object"],
"twoWayBindable":["string","string[]","object"],
"ui":["string","string[]"],
"url":["string"],
"userCls":["string","string[]"],
"userSelectable":["boolean","string","object"],
"viewModel":["string","object","Ext.app.ViewModel"],
"weight":["number"],
"weighted":["boolean"],
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
{name:'activate',parameters:'newActiveItem,pivotconfigform,oldActiveItem'},
{name:'activeItemchange',parameters:'sender,value,oldValue'},
{name:'add',parameters:'pivotconfigform,item,index'},
{name:'added',parameters:'sender,container,index'},
{name:'beforeactiveItemchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforebottomchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecenteredchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforecollapse',parameters:'pivotconfigform'},
{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforedockedchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeexpand',parameters:'pivotconfigform'},
{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforehide',parameters:'sender'},
{name:'beforeleftchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforemaxWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminHeightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeminWidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeorientationchange',parameters:''},
{name:'beforeresizedragstart',parameters:'pivotconfigform,context'},
{name:'beforerightchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforescrollablechange',parameters:'sender,value,oldValue,undefined'},
{name:'beforeshow',parameters:'sender'},
{name:'beforesubmit',parameters:'pivotconfigform,values,options,e'},
{name:'beforetofront',parameters:'pivotconfigform'},
{name:'beforetopchange',parameters:'sender,value,oldValue,undefined'},
{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
{name:'blur',parameters:'pivotconfigform,event'},
{name:'bottomchange',parameters:'sender,value,oldValue'},
{name:'centeredchange',parameters:'sender,value,oldValue'},
{name:'collapse',parameters:'pivotconfigform'},
{name:'deactivate',parameters:'oldActiveItem,pivotconfigform,newActiveItem'},
{name:'destroy',parameters:''},
{name:'disabledchange',parameters:'sender,value,oldValue'},
{name:'dockedchange',parameters:'sender,value,oldValue'},
{name:'drawerhide',parameters:'pivotconfigform'},
{name:'drawershow',parameters:'pivotconfigform'},
{name:'erased',parameters:'sender'},
{name:'exception',parameters:'pivotconfigform,result'},
{name:'expand',parameters:'pivotconfigform'},
{name:'floatingchange',parameters:'sender,positioned'},
{name:'focus',parameters:'pivotconfigform,event'},
{name:'focusenter',parameters:'pivotconfigform,event'},
{name:'focusleave',parameters:'pivotconfigform,event'},
{name:'fullscreen',parameters:'sender'},
{name:'heightchange',parameters:'sender,value,oldValue'},
{name:'hiddenchange',parameters:'sender,value,oldValue'},
{name:'hide',parameters:'sender'},
{name:'initialize',parameters:'sender'},
{name:'leftchange',parameters:'sender,value,oldValue'},
{name:'maxHeightchange',parameters:'sender,value,oldValue'},
{name:'maxWidthchange',parameters:'sender,value,oldValue'},
{name:'minHeightchange',parameters:'sender,value,oldValue'},
{name:'minWidthchange',parameters:'sender,value,oldValue'},
{name:'move',parameters:'pivotconfigform,item,toIndex,fromIndex'},
{name:'moved',parameters:'sender,container,toIndex,fromIndex'},
{name:'orientationchange',parameters:''},
{name:'painted',parameters:'sender,element'},
{name:'positionedchange',parameters:'sender,positioned'},
{name:'remove',parameters:'pivotconfigform,item,index'},
{name:'removed',parameters:'sender,container,index'},
{name:'renderedchange',parameters:'pivotconfigform,item,rendered'},
{name:'resize',parameters:'element,info'},
{name:'resizedrag',parameters:'pivotconfigform,context'},
{name:'resizedragcancel',parameters:'pivotconfigform,context'},
{name:'resizedragend',parameters:'pivotconfigform,context'},
{name:'resizedragstart',parameters:'pivotconfigform,context'},
{name:'rightchange',parameters:'sender,value,oldValue'},
{name:'scrollablechange',parameters:'sender,value,oldValue'},
{name:'show',parameters:'sender'},
{name:'submit',parameters:'pivotconfigform,result,e'},
{name:'tofront',parameters:'pivotconfigform'},
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
{ name:'add',function: function(newItems) { return this.ext.add(newItems) } },
{ name:'addAfterListener',function: function() { return this.ext.addAfterListener() } },
{ name:'addBeforeListener',function: function() { return this.ext.addBeforeListener() } },
{ name:'addBodyCls',function: function(cls) { return this.ext.addBodyCls(cls) } },
{ name:'addCls',function: function(cls,prefix,suffix) { return this.ext.addCls(cls,prefix,suffix) } },
{ name:'addDelegatedListener',function: function(eventName,fn,scope,options,order,caller,manager) { return this.ext.addDelegatedListener(eventName,fn,scope,options,order,caller,manager) } },
{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
{ name:'addElementReference',function: function(name,domNode) { return this.ext.addElementReference(name,domNode) } },
{ name:'addElementReferenceOnDemand',function: function(name,domNode) { return this.ext.addElementReferenceOnDemand(name,domNode) } },
{ name:'addListener',function: function(eventName,fn,scope,options,order,caller) { return this.ext.addListener(eventName,fn,scope,options,order,caller) } },
{ name:'addManagedListener',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.addManagedListener(item,ename,fn,scope,options,noDestroy) } },
{ name:'addPlugin',function: function(plugin) { return this.ext.addPlugin(plugin) } },
{ name:'addTool',function: function(tool) { return this.ext.addTool(tool) } },
{ name:'afterEdit',function: function() { return this.ext.afterEdit() } },
{ name:'afterErase',function: function() { return this.ext.afterErase() } },
{ name:'afterRender',function: function() { return this.ext.afterRender() } },
{ name:'alignTo',function: function(component,alignment,options) { return this.ext.alignTo(component,alignment,options) } },
{ name:'animateActiveItem',function: function(activeItem,animation) { return this.ext.animateActiveItem(activeItem,animation) } },
{ name:'applyActiveItem',function: function(activeItem,currentActiveItem) { return this.ext.applyActiveItem(activeItem,currentActiveItem) } },
{ name:'applyBind',function: function(binds,currentBindings) { return this.ext.applyBind(binds,currentBindings) } },
{ name:'applyCentered',function: function(centered) { return this.ext.applyCentered(centered) } },
{ name:'applyControl',function: function(selectors) { return this.ext.applyControl(selectors) } },
{ name:'applyExtraParams',function: function(options) { return this.ext.applyExtraParams(options) } },
{ name:'applyItemDefaults',function: function(item) { return this.ext.applyItemDefaults(item) } },
{ name:'applyMasked',function: function(masked) { return this.ext.applyMasked(masked) } },
{ name:'applyPlugins',function: function(plugins,oldPlugins) { return this.ext.applyPlugins(plugins,oldPlugins) } },
{ name:'applySession',function: function(session) { return this.ext.applySession(session) } },
{ name:'applyStyle',function: function(style,oldStyle) { return this.ext.applyStyle(style,oldStyle) } },
{ name:'applyTpl',function: function(tpl) { return this.ext.applyTpl(tpl) } },
{ name:'applyViewModel',function: function(viewModel) { return this.ext.applyViewModel(viewModel) } },
{ name:'attachNameRef',function: function(component) { return this.ext.attachNameRef(component) } },
{ name:'attachReference',function: function(component) { return this.ext.attachReference(component) } },
{ name:'beforeAjaxSubmit',function: function(form,options,successFn,failureFn) { return this.ext.beforeAjaxSubmit(form,options,successFn,failureFn) } },
{ name:'beforeDirectSubmit',function: function(api,form,options,successFn,failureFn) { return this.ext.beforeDirectSubmit(api,form,options,successFn,failureFn) } },
{ name:'beforeInitialize',function: function() { return this.ext.beforeInitialize() } },
{ name:'beforeStandardSubmit',function: function(form,options) { return this.ext.beforeStandardSubmit(form,options) } },
{ name:'blur',function: function() { return this.ext.blur() } },
{ name:'bubble',function: function(fn,scope,args) { return this.ext.bubble(fn,scope,args) } },
{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
{ name:'center',function: function() { return this.ext.center() } },
{ name:'child',function: function(selector) { return this.ext.child(selector) } },
{ name:'clearDelegatedListeners',function: function() { return this.ext.clearDelegatedListeners() } },
{ name:'clearErrors',function: function() { return this.ext.clearErrors() } },
{ name:'clearListeners',function: function() { return this.ext.clearListeners() } },
{ name:'clearManagedListeners',function: function() { return this.ext.clearManagedListeners() } },
{ name:'close',function: function() { return this.ext.close() } },
{ name:'collapse',function: function(animation) { return this.ext.collapse(animation) } },
{ name:'constructor',function: function(config) { return this.ext.constructor(config) } },
{ name:'createPlugin',function: function(config) { return this.ext.createPlugin(config) } },
{ name:'createRelayer',function: function(newName,beginEnd) { return this.ext.createRelayer(newName,beginEnd) } },
{ name:'createSubmissionForm',function: function(form,values) { return this.ext.createSubmissionForm(form,values) } },
{ name:'destroy',function: function() { return this.ext.destroy() } },
{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
{ name:'destroyPlugin',function: function(plugin) { return this.ext.destroyPlugin(plugin) } },
{ name:'disable',function: function() { return this.ext.disable() } },
{ name:'doAdd',function: function(item,instanced) { return this.ext.doAdd(item,instanced) } },
{ name:'doAddListener',function: function(name,fn,scope,options,order,caller,manager) { return this.ext.doAddListener(name,fn,scope,options,order,caller,manager) } },
{ name:'doBeforeSubmit',function: function(me,formValues,options) { return this.ext.doBeforeSubmit(me,formValues,options) } },
{ name:'doDestroy',function: function() { return this.ext.doDestroy() } },
{ name:'doFireDelegatedEvent',function: function(eventName,args) { return this.ext.doFireDelegatedEvent(eventName,args) } },
{ name:'doFireEvent',function: function(eventName,args,bubbles) { return this.ext.doFireEvent(eventName,args,bubbles) } },
{ name:'doInheritUi',function: function() { return this.ext.doInheritUi() } },
{ name:'doInsert',function: function(index,item,instanced) { return this.ext.doInsert(index,item,instanced) } },
{ name:'doUninheritUi',function: function() { return this.ext.doUninheritUi() } },
{ name:'down',function: function(selector) { return this.ext.down(selector) } },
{ name:'enable',function: function() { return this.ext.enable() } },
{ name:'enableBubble',function: function(eventNames) { return this.ext.enableBubble(eventNames) } },
{ name:'expand',function: function(animation) { return this.ext.expand(animation) } },
{ name:'factoryItem',function: function(item) { return this.ext.factoryItem(item) } },
{ name:'fillRecord',function: function(record) { return this.ext.fillRecord(record) } },
{ name:'findDefaultFocus',function: function() { return this.ext.findDefaultFocus() } },
{ name:'findFloatParent',function: function(needsShow) { return this.ext.findFloatParent(needsShow) } },
{ name:'findFocusTarget',function: function() { return this.ext.findFocusTarget() } },
{ name:'findPlugin',function: function(type) { return this.ext.findPlugin(type) } },
{ name:'fireAction',function: function(eventName,args,fn,scope,options,order) { return this.ext.fireAction(eventName,args,fn,scope,options,order) } },
{ name:'fireEvent',function: function(eventName,args) { return this.ext.fireEvent(eventName,args) } },
{ name:'fireEventArgs',function: function(eventName,args) { return this.ext.fireEventArgs(eventName,args) } },
{ name:'fireEventedAction',function: function(eventName,args,fn,scope,fnArgs) { return this.ext.fireEventedAction(eventName,args,fn,scope,fnArgs) } },
{ name:'focus',function: function(selectText) { return this.ext.focus(selectText) } },
{ name:'focusNextField',function: function() { return this.ext.focusNextField() } },
{ name:'focusPreviousField',function: function() { return this.ext.focusPreviousField() } },
{ name:'getAlignmentInfo',function: function(component,alignment) { return this.ext.getAlignmentInfo(component,alignment) } },
{ name:'getAlignRegion',function: function(component,alignment,options) { return this.ext.getAlignRegion(component,alignment,options) } },
{ name:'getAriaLabelEl',function: function(reference) { return this.ext.getAriaLabelEl(reference) } },
{ name:'getAt',function: function(index) { return this.ext.getAt(index) } },
{ name:'getBubbleParent',function: function() { return this.ext.getBubbleParent() } },
{ name:'getClassCls',function: function() { return this.ext.getClassCls() } },
{ name:'getComponent',function: function(component) { return this.ext.getComponent(component) } },
{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
{ name:'getController',function: function() { return this.ext.getController() } },
{ name:'getCurrentAlignmentInfo',function: function() { return this.ext.getCurrentAlignmentInfo() } },
{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
{ name:'getDockedComponent',function: function(component) { return this.ext.getDockedComponent(component) } },
{ name:'getDockedItems',function: function() { return this.ext.getDockedItems() } },
{ name:'getElementConfig',function: function() { return this.ext.getElementConfig() } },
{ name:'getErrors',function: function() { return this.ext.getErrors() } },
{ name:'getFields',function: function(byName,deep) { return this.ext.getFields(byName,deep) } },
{ name:'getFirstReferences',function: function() { return this.ext.getFirstReferences() } },
{ name:'getFloatParent',function: function() { return this.ext.getFloatParent() } },
{ name:'getFloatWrap',function: function() { return this.ext.getFloatWrap() } },
{ name:'getFocusClsEl',function: function(focusEl) { return this.ext.getFocusClsEl(focusEl) } },
{ name:'getFocusedField',function: function() { return this.ext.getFocusedField() } },
{ name:'getFocusEl',function: function() { return this.ext.getFocusEl() } },
{ name:'getId',function: function() { return this.ext.getId() } },
{ name:'getInherited',function: function(inner) { return this.ext.getInherited(inner) } },
{ name:'getInheritedConfig',function: function(property,skipThis) { return this.ext.getInheritedConfig(property,skipThis) } },
{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
{ name:'getInnerItems',function: function() { return this.ext.getInnerItems() } },
{ name:'getMaxHeightElement',function: function() { return this.ext.getMaxHeightElement() } },
{ name:'getModalSibling',function: function() { return this.ext.getModalSibling() } },
{ name:'getNamedItems',function: function() { return this.ext.getNamedItems() } },
{ name:'getNextField',function: function() { return this.ext.getNextField() } },
{ name:'getParams',function: function(params) { return this.ext.getParams(params) } },
{ name:'getPlugin',function: function(id) { return this.ext.getPlugin(id) } },
{ name:'getPositionedItemTarget',function: function(item) { return this.ext.getPositionedItemTarget(item) } },
{ name:'getPreviousField',function: function() { return this.ext.getPreviousField() } },
{ name:'getReferences',function: function() { return this.ext.getReferences() } },
{ name:'getRefItems',function: function(deep) { return this.ext.getRefItems(deep) } },
{ name:'getRefOwner',function: function() { return this.ext.getRefOwner() } },
{ name:'getRenderTarget',function: function() { return this.ext.getRenderTarget() } },
{ name:'getScrollableClientRegion',function: function() { return this.ext.getScrollableClientRegion() } },
{ name:'getSize',function: function() { return this.ext.getSize() } },
{ name:'getStateBuilder',function: function(cache) { return this.ext.getStateBuilder(cache) } },
{ name:'getStatefulOwner',function: function() { return this.ext.getStatefulOwner() } },
{ name:'getTabIndex',function: function() { return this.ext.getTabIndex() } },
{ name:'getValues',function: function(enabled,all) { return this.ext.getValues(enabled,all) } },
{ name:'getXTypes',function: function() { return this.ext.getXTypes() } },
{ name:'handleBlurEvent',function: function(info) { return this.ext.handleBlurEvent(info) } },
{ name:'handleFocusEvent',function: function(info) { return this.ext.handleFocusEvent(info) } },
{ name:'has',function: function(item) { return this.ext.has(item) } },
{ name:'hasCls',function: function(className) { return this.ext.hasCls(className) } },
{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
{ name:'hasInnerItem',function: function(item) { return this.ext.hasInnerItem(item) } },
{ name:'hasListener',function: function(eventName) { return this.ext.hasListener(eventName) } },
{ name:'hide',function: function(animation) { return this.ext.hide(animation) } },
{ name:'indexOf',function: function(item) { return this.ext.indexOf(item) } },
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
{ name:'insert',function: function(index,item) { return this.ext.insert(index,item) } },
{ name:'insertAfter',function: function(item,relativeToItem) { return this.ext.insertAfter(item,relativeToItem) } },
{ name:'insertBefore',function: function(item,relativeToItem) { return this.ext.insertBefore(item,relativeToItem) } },
{ name:'insertFirst',function: function(item) { return this.ext.insertFirst(item) } },
{ name:'insertFloatedDom',function: function(needsShow) { return this.ext.insertFloatedDom(needsShow) } },
{ name:'insertInner',function: function(item,index) { return this.ext.insertInner(item,index) } },
{ name:'insertLast',function: function(item) { return this.ext.insertLast(item) } },
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
{ name:'isRendered',function: function() { return this.ext.isRendered() } },
{ name:'isSuspended',function: function(event) { return this.ext.isSuspended(event) } },
{ name:'isSyncing',function: function(name) { return this.ext.isSyncing(name) } },
{ name:'isValid',function: function() { return this.ext.isValid() } },
{ name:'isVisible',function: function(deep) { return this.ext.isVisible(deep) } },
{ name:'isWidthed',function: function() { return this.ext.isWidthed() } },
{ name:'isXType',function: function(xtype,shallow) { return this.ext.isXType(xtype,shallow) } },
{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
{ name:'load',function: function(options) { return this.ext.load(options) } },
{ name:'loadState',function: function(state,stateful) { return this.ext.loadState(state,stateful) } },
{ name:'lookup',function: function(ref) { return this.ext.lookup(ref) } },
{ name:'lookupController',function: function(skipThis) { return this.ext.lookupController(skipThis) } },
{ name:'lookupName',function: function(name) { return this.ext.lookupName(name) } },
{ name:'lookupNameHolder',function: function(skipThis) { return this.ext.lookupNameHolder(skipThis) } },
{ name:'lookupReference',function: function(ref) { return this.ext.lookupReference(ref) } },
{ name:'lookupReferenceHolder',function: function(skipThis) { return this.ext.lookupReferenceHolder(skipThis) } },
{ name:'lookupSession',function: function(skipThis) { return this.ext.lookupSession(skipThis) } },
{ name:'lookupTpl',function: function(name) { return this.ext.lookupTpl(name) } },
{ name:'lookupViewModel',function: function(skipThis) { return this.ext.lookupViewModel(skipThis) } },
{ name:'mask',function: function(mask) { return this.ext.mask(mask) } },
{ name:'mon',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.mon(item,ename,fn,scope,options,noDestroy) } },
{ name:'mun',function: function(item,ename,fn,scope) { return this.ext.mun(item,ename,fn,scope) } },
{ name:'on',function: function(eventName,fn,scope,options,order,caller) { return this.ext.on(eventName,fn,scope,options,order,caller) } },
{ name:'onAdded',function: function(parent,instanced) { return this.ext.onAdded(parent,instanced) } },
{ name:'onAfter',function: function(eventName,fn,scope,options) { return this.ext.onAfter(eventName,fn,scope,options) } },
{ name:'onBefore',function: function(eventName,fn,scope,options) { return this.ext.onBefore(eventName,fn,scope,options) } },
{ name:'onBlur',function: function(e) { return this.ext.onBlur(e) } },
{ name:'onFieldAction',function: function(field) { return this.ext.onFieldAction(field) } },
{ name:'onFirstItemAdd',function: function(item) { return this.ext.onFirstItemAdd(item) } },
{ name:'onFocus',function: function(e) { return this.ext.onFocus(e) } },
{ name:'onFocusEnter',function: function(e) { return this.ext.onFocusEnter(e) } },
{ name:'onFocusLeave',function: function(e) { return this.ext.onFocusLeave(e) } },
{ name:'onFocusMove',function: function(info) { return this.ext.onFocusMove(info) } },
{ name:'onInheritedAdd',function: function(parent,instanced) { return this.ext.onInheritedAdd(parent,instanced) } },
{ name:'onInheritedRemove',function: function(destroying) { return this.ext.onInheritedRemove(destroying) } },
{ name:'onInitialized',function: function(fn,scope,args) { return this.ext.onInitialized(fn,scope,args) } },
{ name:'onItemAdd',function: function(item,index) { return this.ext.onItemAdd(item,index) } },
{ name:'onItemMove',function: function(item,toIndex,fromIndex) { return this.ext.onItemMove(item,toIndex,fromIndex) } },
{ name:'onItemRemove',function: function(item,index,destroying) { return this.ext.onItemRemove(item,index,destroying) } },
{ name:'onRender',function: function() { return this.ext.onRender() } },
{ name:'onResize',function: function(width,height,oldWidth,oldHeight) { return this.ext.onResize(width,height,oldWidth,oldHeight) } },
{ name:'onScrollEnd',function: function(x,y) { return this.ext.onScrollEnd(x,y) } },
{ name:'onScrollMove',function: function(x,y) { return this.ext.onScrollMove(x,y) } },
{ name:'onScrollStart',function: function(x,y) { return this.ext.onScrollStart(x,y) } },
{ name:'onStatefulChange',function: function() { return this.ext.onStatefulChange() } },
{ name:'onSubmit',function: function(event) { return this.ext.onSubmit(event) } },
{ name:'owns',function: function(element) { return this.ext.owns(element) } },
{ name:'persistState',function: function() { return this.ext.persistState() } },
{ name:'preprocessShow',function: function(component,alignment,options) { return this.ext.preprocessShow(component,alignment,options) } },
{ name:'processElementConfig',function: function() { return this.ext.processElementConfig() } },
{ name:'processFocusableContainerKeyEvent',function: function(e) { return this.ext.processFocusableContainerKeyEvent(e) } },
{ name:'publishState',function: function(property,value) { return this.ext.publishState(property,value) } },
{ name:'query',function: function(selector) { return this.ext.query(selector) } },
{ name:'queryBy',function: function(fn,scope) { return this.ext.queryBy(fn,scope) } },
{ name:'queryById',function: function(id) { return this.ext.queryById(id) } },
{ name:'readStateObject',function: function() { return this.ext.readStateObject() } },
{ name:'realign',function: function(component,alignment,options) { return this.ext.realign(component,alignment,options) } },
{ name:'relayEvents',function: function(origin,events,prefix) { return this.ext.relayEvents(origin,events,prefix) } },
{ name:'remove',function: function(which,destroy) { return this.ext.remove(which,destroy) } },
{ name:'removeAfterListener',function: function() { return this.ext.removeAfterListener() } },
{ name:'removeAll',function: function(destroy,everything) { return this.ext.removeAll(destroy,everything) } },
{ name:'removeAt',function: function(index,destroy) { return this.ext.removeAt(index,destroy) } },
{ name:'removeBeforeListener',function: function() { return this.ext.removeBeforeListener() } },
{ name:'removeBodyCls',function: function(cls) { return this.ext.removeBodyCls(cls) } },
{ name:'removeCls',function: function(cls,prefix,suffix) { return this.ext.removeCls(cls,prefix,suffix) } },
{ name:'removeDelegatedListener',function: function(eventName,fn,scope) { return this.ext.removeDelegatedListener(eventName,fn,scope) } },
{ name:'removeInner',function: function(item) { return this.ext.removeInner(item) } },
{ name:'removeInnerAt',function: function(index) { return this.ext.removeInnerAt(index) } },
{ name:'removeListener',function: function(eventName,fn,scope,eventOptions) { return this.ext.removeListener(eventName,fn,scope,eventOptions) } },
{ name:'removeManagedListener',function: function(item,ename,fn,scope) { return this.ext.removeManagedListener(item,ename,fn,scope) } },
{ name:'removeManagedListenerItem',function: function(isClear,managedListener,item,ename,fn,scope) { return this.ext.removeManagedListenerItem(isClear,managedListener,item,ename,fn,scope) } },
{ name:'removePlugin',function: function(plugin,destroy) { return this.ext.removePlugin(plugin,destroy) } },
{ name:'replaceCls',function: function(oldCls,newCls,prefix,suffix) { return this.ext.replaceCls(oldCls,newCls,prefix,suffix) } },
{ name:'reset',function: function(clearInvalid) { return this.ext.reset(clearInvalid) } },
{ name:'resetFloating',function: function() { return this.ext.resetFloating() } },
{ name:'resetPositioned',function: function() { return this.ext.resetPositioned() } },
{ name:'resolveListenerScope',function: function(defaultScope) { return this.ext.resolveListenerScope(defaultScope) } },
{ name:'resolveSatelliteListenerScope',function: function(satellite,defaultScope) { return this.ext.resolveSatelliteListenerScope(satellite,defaultScope) } },
{ name:'resumeEvent',function: function(eventName) { return this.ext.resumeEvent(eventName) } },
{ name:'resumeEvents',function: function(discardQueue) { return this.ext.resumeEvents(discardQueue) } },
{ name:'revertFocus',function: function() { return this.ext.revertFocus() } },
{ name:'revertFocusTo',function: function(target) { return this.ext.revertFocusTo(target) } },
{ name:'saveState',function: function(state,stateful) { return this.ext.saveState(state,stateful) } },
{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
{ name:'setCurrentAlignmentInfo',function: function(alignmentInfo) { return this.ext.setCurrentAlignmentInfo(alignmentInfo) } },
{ name:'setErrors',function: function(errors) { return this.ext.setErrors(errors) } },
{ name:'setListeners',function: function(listeners) { return this.ext.setListeners(listeners) } },
{ name:'setRendered',function: function(rendered,root) { return this.ext.setRendered(rendered,root) } },
{ name:'setSize',function: function(width,height) { return this.ext.setSize(width,height) } },
{ name:'setTabIndex',function: function(newTabIndex,focusEl) { return this.ext.setTabIndex(newTabIndex,focusEl) } },
{ name:'setValues',function: function(values) { return this.ext.setValues(values) } },
{ name:'setVisibility',function: function(isVisible) { return this.ext.setVisibility(isVisible) } },
{ name:'setXY',function: function(x,y,animation) { return this.ext.setXY(x,y,animation) } },
{ name:'show',function: function(animation,options) { return this.ext.show(animation,options) } },
{ name:'showAt',function: function(x,y) { return this.ext.showAt(x,y) } },
{ name:'showBy',function: function(component,alignment,options) { return this.ext.showBy(component,alignment,options) } },
{ name:'statics',function: function() { return this.ext.statics() } },
{ name:'submit',function: function(options,e) { return this.ext.submit(options,e) } },
{ name:'suspendEvent',function: function(eventName) { return this.ext.suspendEvent(eventName) } },
{ name:'suspendEvents',function: function(queueSuspended) { return this.ext.suspendEvents(queueSuspended) } },
{ name:'syncAlwaysOnTop',function: function(fromMousedown) { return this.ext.syncAlwaysOnTop(fromMousedown) } },
{ name:'syncFloatWrap',function: function() { return this.ext.syncFloatWrap() } },
{ name:'syncToolableAlign',function: function() { return this.ext.syncToolableAlign() } },
{ name:'toFront',function: function(fromMousedown) { return this.ext.toFront(fromMousedown) } },
{ name:'toggleCls',function: function(className,state) { return this.ext.toggleCls(className,state) } },
{ name:'toggleCollapsed',function: function(collapsed,animation) { return this.ext.toggleCollapsed(collapsed,animation) } },
{ name:'transformStatefulConfig',function: function(instanceConfig,configurator) { return this.ext.transformStatefulConfig(instanceConfig,configurator) } },
{ name:'triggerInitialized',function: function() { return this.ext.triggerInitialized() } },
{ name:'un',function: function(eventName,fn,scope,eventOptions) { return this.ext.un(eventName,fn,scope,eventOptions) } },
{ name:'unAfter',function: function(eventName,fn,scope,options) { return this.ext.unAfter(eventName,fn,scope,options) } },
{ name:'unBefore',function: function(eventName,fn,scope,options) { return this.ext.unBefore(eventName,fn,scope,options) } },
{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
{ name:'unmask',function: function() { return this.ext.unmask() } },
{ name:'up',function: function(selector,limit) { return this.ext.up(selector,limit) } },
{ name:'updateCls',function: function(newCls,oldCls) { return this.ext.updateCls(newCls,oldCls) } },
{ name:'updateData',function: function(newData) { return this.ext.updateData(newData) } },
{ name:'updateDisabled',function: function(newDisabled) { return this.ext.updateDisabled(newDisabled) } },
{ name:'updateHeight',function: function(height) { return this.ext.updateHeight(height) } },
{ name:'updateSession',function: function(session) { return this.ext.updateSession(session) } },
{ name:'updateViewModel',function: function(viewModel,oldViewModel) { return this.ext.updateViewModel(viewModel,oldViewModel) } },
{ name:'updateWidth',function: function(width) { return this.ext.updateWidth(width) } },
{ name:'validate',function: function(skipLazy) { return this.ext.validate(skipLazy) } },
{ name:'visitPostOrder',function: function(selector,fn,scope,extraArgs) { return this.ext.visitPostOrder(selector,fn,scope,extraArgs) } },
{ name:'visitPreOrder',function: function(selector,fn,scope,extraArgs) { return this.ext.visitPreOrder(selector,fn,scope,extraArgs) } },
{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },
{ name:'whenVisible',function: function(fn,args) { return this.ext.whenVisible(fn,args) } },

    ]}
    constructor() {}
};