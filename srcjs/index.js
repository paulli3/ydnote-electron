"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const funs = __importStar(require("./src/lib/funs"));
let win;
function createWindow() {
    funs.global.win = win = new electron_1.BrowserWindow({ width: 1440, height: 900, show: false, resizable: false, transparent: true, frame: false });
    win.loadFile(process.cwd() + '/srcjs/index.html');
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
    win.once('ready-to-show', () => {
        win.show();
        require("./src/mainsrc/app").init();
    });
    win.webContents.on('did-finish-load', () => {
    });
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=index.js.map