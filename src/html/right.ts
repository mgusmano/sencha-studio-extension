export default function right() {
    var html = `
    <z-panel id="right" width="0px" flexdirection="column" class="right">

    <z-tabs style="flex:2">
        <z-tabpanel tabname="initialconfigs">
            <z-props id="initialconfigs"></z-props>
        </z-tabpanel>
    </z-tabs>

    <z-splitter></z-splitter>

    <z-tabs style="flex:1">
        <z-tabpanel tabname="classes">
            <z-dataview id="classes"></z-dataview>
        </z-tabpanel>
        <z-tabpanel tabname="superclasses">
            <z-props id="supers"></z-props>
        </z-tabpanel>
        <z-tabpanel tabname="superclasses">
            <z-props id="supers"></z-props>
        </z-tabpanel>
        <z-tabpanel tabname="allconfigs">
            <z-props id="allconfigs"></z-props>
        </z-tabpanel>
    </z-tabs>

</z-panel>
    `
    return html;
}