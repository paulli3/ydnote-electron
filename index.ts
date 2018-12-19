import {app, BrowserWindow,Menu, Tray,ipcMain,net} from "electron" //= require('electron');
import http from "./src/lib/http";
import * as funs from "./src/lib/funs";
// require('electron-debug')();
// console.log(1);
  // Keep a global reference of the window object, if you don't, the window will
  // be closed automatically when the JavaScript object is garbage collected.
let win:Electron.BrowserWindow;
// let tray = null
function createWindow () {
  
  // 创建浏览器窗口。
  //{transparent: true, frame: false}
  /**
   * transparent  bool  透明化
   * frame        bool  无边框
   *    无边框，会导致无法拖动窗口，给html使用css属性 -webkit-app-region: drag 可以使之被拖动 如 <body style="-webkit-app-region: drag"></body>
   *    请注意, 如果您已使整个窗口draggable, 则必须将按钮标记为 non-draggable, 否则用户将无法单击它们:button {-webkit-app-region: no-drag;}
   *      如果你设置自定义标题栏为 draggable, 你也需要标题栏中所有的按钮都设为 non-draggable。
   *    在无框窗口中, 拖动行为可能与选择文本冲突。 例如, 当您拖动标题栏时, 您可能会意外地选择标题栏上的文本。 为防止此操作, 您需要在可区域中禁用文本选择, 如下所选:.titlebar {-webkit-user-select: none;-webkit-app-region: drag;}
   *    
   */
  funs.global.win = win = new BrowserWindow({width:1440, height: 900,show:false,resizable: false,transparent:true,frame:false})  
  // require("./mainsrc/event");
  // 然后加载应用的 index.html。
  win.loadFile(process.cwd()+'/srcjs/index.html')
  
  // 打开开发者工具
  win.webContents.openDevTools();

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null;
  });
  win.once('ready-to-show', () => {
      win.show();
      require("./src/mainsrc/app").init();//初始化
      // funs.debug(111111);
  })
  win.webContents.on('did-finish-load', () => {
    
    // new http("http://localhost?ccc=1").sendAsync({a:1,b:2}).then(v=>funs.debug(v));

  });
 
  
  // win.webContents.debugger.sendCommand('Network.enable')
  // tray = new Tray('/path/to/my/icon')
  // const contextMenu = Menu.buildFromTemplate([
  //   {label: 'Item1', type: 'radio'},
  //   {label: 'Item2', type: 'radio'},
  //   {label: 'Item3', type: 'radio', checked: true},
  //   {label: 'Item4', type: 'radio'}
  // ])
  // tray.setToolTip('This is my application.')
  // tray.setContextMenu(contextMenu)
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})










