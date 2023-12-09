const { app, BrowserWindow } = require("electron");
require("./index.js");
 
let mainWindow;
 
function createWindow() {
    mainWindow = new BrowserWindow({ show: false });

    mainWindow.loadURL("http://localhost:8080");

    mainWindow.on("closed", function () {
        mainWindow = null;
    });

    mainWindow.once('ready-to-show', () => {
        mainWindow.maximize();
        mainWindow.show();

        console.log(process.versions);
    });
}
 
app.on("ready", createWindow);
 
app.on("resize", function (e, x, y) {
    mainWindow.setSize(x, y);
});
 
app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
 
app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});