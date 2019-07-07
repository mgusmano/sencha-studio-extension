export default function details(view) {
    var html = `
    <z-panel height="200px" padding="8px" flexdirection="column">
        <z-tabs style="flex:1">

        <z-tabpanel tabname="monacocode">
            <div id="monacocode"></div>
        </z-tabpanel>

        <z-tabpanel tabname="code">
            <pre id="code"></pre>
        </z-tabpanel>


            <z-tabpanel tabname="configs">
                <z-dataview id="configs"></z-dataview>
            </z-tabpanel>

            <z-tabpanel tabname="allconfigs">
                <z-dataview id="allconfigs"></z-dataview>
            </z-tabpanel>




            <z-tabpanel tabname="initialconfigs">
                <z-props id="initialconfigs"></z-props>
            </z-tabpanel>

    

    

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