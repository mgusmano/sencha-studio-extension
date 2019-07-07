export default function header(fileName) {
    var html = `
<z-panel align="center" height="40px" padding="8px" background="var(--z-panel-padding)">
    header
    <div style="flex: 1 1 auto;justify-content: flex-end;display: flex;">
    <z-button text="Main" width="110px" onclick="btnMain()"></z-button>&nbsp;
    <z-button text="Home" width="110px" onclick="btnHome()"></z-button>&nbsp;
    <z-button text="Personnel" width="110px" onclick="btnPersonnel()"></z-button>&nbsp;
        <z-button text="show" width="110px" onclick="btnShow()"></z-button>&nbsp;
        <z-button text="hide" width="110px" onclick="btnHide()"></z-button>
    </div>
</z-panel>
    `
    return html;
}