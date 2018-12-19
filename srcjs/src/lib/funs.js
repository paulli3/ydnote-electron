"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let global = {
    win: null
};
exports.global = global;
function debug(...d) {
    sendrpc("log", d);
}
exports.debug = debug;
function sendrpc(rpc, param) {
    global.win.webContents.send(rpc, param);
}
exports.sendrpc = sendrpc;
function addEventListener(...param) {
    return function (target, methodName) {
        let msgname = target.constructor.name + "_" + methodName;
        electron_1.ipcMain.on(msgname, (event, args) => {
            let ret = target[methodName].apply(target, [event, args, ...param]);
            ret.then(v => {
                debug("replay:" + msgname + '_replay');
                event.sender.send(msgname + '_replay', v);
            }).catch(v => {
                debug("err", v);
            });
        });
    };
}
exports.addEventListener = addEventListener;
//# sourceMappingURL=funs.js.map