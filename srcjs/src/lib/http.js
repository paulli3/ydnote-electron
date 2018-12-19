"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __importDefault(require("electron"));
const url = require('url');
let cookies = {
    "YOUDAO_EAD_UUID": "d977014e-5d31-47f6-ac64-2a8a30a6dc9d",
    "YNOTE_SESS": "v2|kp97eJE41RpZ0MpKOMgLRkGnMeuh4qFRYm0fpLO4l5ROW0LgK0MOm0PSh4puRMqz0Om0MwL0flm06LRHOf0LUA0OGRHw4n4QB0",
    "YNOTE_LOGIN": "5||1545040080019",
};
for (let i in cookies) {
    electron_1.default.session.defaultSession.cookies.set({ url: "https://note.youdao.com/", name: i, value: cookies[i] }, () => { });
}
class http {
    constructor(url = "") {
        this.param = {
            method: "POST",
            url: "",
            data: "",
        };
        this.setUrl(url);
    }
    setGet() {
        this.param.method = "GET";
        return this;
    }
    setUrl(url) {
        this.param.url = url;
        return this;
    }
    setData(data) {
        this.param.data = data;
        return this;
    }
    sendAsync(data) {
        if (data) {
            this.setData(data);
        }
        return new Promise((succ, fail) => {
            var request = require("request");
            let opt = url.parse(this.param.url);
            var options = {
                method: this.param.method,
                url: this.param.url,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Cookie: http.cookie
                },
                form: this.param.data
            };
            request(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                succ(body);
            });
        });
    }
}
http.cookie = "YNOTE_SESS=v2|kp97eJE41RpZ0MpKOMgLRkGnMeuh4qFRYm0fpLO4l5ROW0LgK0MOm0PSh4puRMqz0Om0MwL0flm06LRHOf0LUA0OGRHw4n4QB0; YNOTE_LOGIN=3||1543494150282; YNOTE_CSTK=XRFVCfBn";
exports.default = http;
//# sourceMappingURL=http.js.map