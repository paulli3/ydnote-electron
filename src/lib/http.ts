import electron from "electron";
import * as funs from "./funs";
const url = require('url');

let cookies = {
    "YOUDAO_EAD_UUID":"d977014e-5d31-47f6-ac64-2a8a30a6dc9d",
    // "OUTFOX_SEARCH_USER_ID":"1869475932@183.15.250.152" ,
    // "youdao_session_info":"c2lkPTgwMjkzMzc5OTE2NzAzOTc1OTItMTp0aW1lPTE0ODA2NTE3OTg5NjE6cHY9MQ==" ,
    // "JSESSIONID":"abc-yuM5UolLoc6NVBaUv" ,
    // "DICT_UGC":"be3af0da19b5c5e6aa4e17bd8d90b28a" ,
    // "OUTFOX_SEARCH_USER_ID_NCOO":"1576894346.9036713" ,
    "YNOTE_SESS":"v2|kp97eJE41RpZ0MpKOMgLRkGnMeuh4qFRYm0fpLO4l5ROW0LgK0MOm0PSh4puRMqz0Om0MwL0flm06LRHOf0LUA0OGRHw4n4QB0" ,
    // "YNOTE_PERS":"v2|cqq||YNOTE||web||7776000000||1543494150268||119.139.197.119||qqD0DEFE64320812683E7321658661C8FC||gLk46B0HzG0puhHQ4PLlfRUlhfkEhfpK0lAOMJKOMz50OmhMOfhMkA0ezOMJy0HUG0JzhfpynfP40zfPLQKh4gyR" ,
    // "YNOTE_CSTK":"XRFVCfBn" ,
    // "PHPSESSID":"1rfm36bd08kau87f7mn35hpnb3" ,
    "YNOTE_LOGIN":"5||1545040080019",
};
for(let i in cookies){
    electron.session.defaultSession.cookies.set({url:"https://note.youdao.com/",name:i,value:cookies[i]},()=>{});
}

export default class http {
    private static cookie = "YNOTE_SESS=v2|kp97eJE41RpZ0MpKOMgLRkGnMeuh4qFRYm0fpLO4l5ROW0LgK0MOm0PSh4puRMqz0Om0MwL0flm06LRHOf0LUA0OGRHw4n4QB0; YNOTE_LOGIN=3||1543494150282; YNOTE_CSTK=XRFVCfBn";
    private param = {
        method:"POST",
        url : "",
        data: "",
    }
    constructor(url="")
    {
       //let a = electron.net.request("http://www.baidu.com");
        this.setUrl(url);
    }
    setGet(){
        this.param.method = "GET";
        return this;
    }
    setUrl(url:string){
        this.param.url = url;
        return this;
    }
    setData(data){
        // this.param.data= new url.URLSearchParams(data).toString();
        this.param.data=data;
        // funs.debug(this.param.data);
        return this;
    }

    // sendAsync1(data?){
    //     if (data){this.setData(data);}
    //     return new Promise<any>((succ,fail)=>{
    //         let opt = url.parse(this.param.url);
    //         opt['method']="post";
    //         // funs.debug(opt['method']="post");
    //         funs.debug(opt);
    //         const request = electron.net.request(opt);
    //         // request.write('{"a":1}');
    //         let ret = "";
    //         request.on('response', (response) => {
    //             // (`STATUS: ${response.statusCode}`);
    //             response.on("data",(data)=>{
    //                 // funs.debug(data.toString());
    //                 ret += data.toString();
    //                 //succ(data.toString());
    //             });
    //             response.on("end",()=>{
    //                 // funs.debug(ret);
    //                 succ(ret);
    //             })
    //             response.on('error', (error) => {
    //                 fail(error);
    //                 debugger;
    //                 // console.log(`ERROR: ${JSON.stringify(error)}`)
    //             });
    //         });
    //         request.setHeader("Content-Type","application/x-www-form-urlencoded");
    //         if (http.cookie){
    //             request.setHeader("Cookie",http.cookie);
    //         }
    //         if (this.param.data){
    //             request.setHeader("Content-Length",this.param.data.length);
    //         }
    //         funs.debug(request)
    //         request.end(this.param.data);    
    //         // let req = require("request");
    //         // req("http://www.baidu.com",(e)=>{
    //         //     console.log(e);
    //         // },(e)=>{
    //         //     console.log(e);
    //         // });
    //     });
    // }

    sendAsync(data?)
    {
        if (data){this.setData(data);}
        return new Promise<any>((succ,fail)=>{
            var request = require("request");
            let opt = url.parse(this.param.url);
            // funs.debug(opt);
            var options = { 
                method: this.param.method,
                url: this.param.url,
                //qs: { method: 'download' },
                headers: 
                { 
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Cookie: http.cookie 
                },
                form: this.param.data
            };
            request(options, function (error, response, body) {
                if (error) throw new Error(error);
                succ(body);
            });
        });
    }
}