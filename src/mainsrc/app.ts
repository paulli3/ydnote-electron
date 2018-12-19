import * as funs from "../lib/funs";
import {app, BrowserWindow,Menu, Tray,ipcMain,net} from "electron" //= require('electron');
import http from "../lib/http";


class _app {
    private sess : string = null;
    
    private messlist;
    /**
     *
     */
    // constructor(aaa) {
    //     this.sess = aaa;
    // }

    // @funs.addEventListener("p1","p2")
    init()
    {
        funs.sendrpc("start");
        // this.onGetDataList();
    }

    initSess()
    {
        this.sess = "";
    }

    /**
     * 获取根节点数据
     */
    @funs.addEventListener()
    onGetDataList(sender,args)
    {
        // funs.debug(args);
        return new http("https://note.youdao.com/yws/api/personal/file?method=listEntireByParentPath").setData({path:args,dirOnly:true,f:true}).sendAsync()
        // .then(v=>{
        //     funs.debug(v);
        // });   
    }
    /**
     * 根据父元素id获取数据
     * @param sender 
     * @param args 
     */
    @funs.addEventListener()
    onGetDatalistByParent(sender,args)
    {
        // ?method=listPageByParentId&all=true&f=true&len=30&sort=1&isReverse=false&keyfrom=web&cstk=XRFVCfBn
        return new http("https://note.youdao.com/yws/api/personal/file/"+args+"?method=listPageByParentId&all=true&f=true&len=30&sort=1&isReverse=false").setGet().setData({all:true,f:true,len:30,sort:1,isReverse:false}).sendAsync()
        // return new http("https://note.youdao.com/yws/api/personal/file?method=listPath").setData({fileId:args}).sendAsync()
    }
    /**
     * 根据id，获取数据详情
     * @param id 
     */
    @funs.addEventListener()
    onGetDataviewById(sender,id)
    {
        return new http("http://note.youdao.com/yws/api/personal/sync?method=download").setData({fileId:id,version:"-1",convert:true,editorType:1}).sendAsync();
    }
}

module.exports = new _app;