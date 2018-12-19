import {ipcMain,net} from "electron" //= require('electron');

let global = {
    win : null
};
export {global};


export function debug(...d:Array<any>)
{
    sendrpc("log",d);
}

export function sendrpc(rpc:any,param?:any)
{
  // ipcMain.sendSync(rpc,param);
  global.win.webContents.send(rpc, param);
}

export function addEventListener(...param)
{
    //@PathParam("userId")
    return function (target,methodName){
        let msgname = target.constructor.name+"_"+methodName;
        ipcMain.on(msgname,(event,args)=>{
            // funs.debug(target,methodName,param,event,args);
            // target.constructor.name;
            let ret = target[methodName].apply(target,[event,args,...param]);
            ret.then(
              v=>{
                // debug(event.sender)
                debug("replay:"+msgname+'_replay');
                event.sender.send(msgname+'_replay', v);
              }
            ).catch(v=>{
                debug("err",v);
            });
        })
    }
}

// export function notifyRender(...param)
// {
//   return function (target,methodName,p){
 
//     debug(1111);
//     //target[methodName].apply(target,[event,param]);
//   } 
// }