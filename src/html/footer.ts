export default function footer(filePath) {
    var html = `
    <z-panel align="center" height="40px" padding="8px" background="var(--z-panel-padding)">
        <div id="filename"></div>
    </z-panel>
    `
    return html;
}