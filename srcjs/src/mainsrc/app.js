"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const funs = __importStar(require("../lib/funs"));
const http_1 = __importDefault(require("../lib/http"));
class _app {
    constructor() {
        this.sess = null;
    }
    init() {
        funs.sendrpc("start");
    }
    initSess() {
        this.sess = "";
    }
    onGetDataList(sender, args) {
        return new http_1.default("https://note.youdao.com/yws/api/personal/file?method=listEntireByParentPath").setData({ path: args, dirOnly: true, f: true }).sendAsync();
    }
    onGetDatalistByParent(sender, args) {
        return new http_1.default("https://note.youdao.com/yws/api/personal/file/" + args + "?method=listPageByParentId&all=true&f=true&len=30&sort=1&isReverse=false").setGet().setData({ all: true, f: true, len: 30, sort: 1, isReverse: false }).sendAsync();
    }
    onGetDataviewById(sender, id) {
        return new http_1.default("http://note.youdao.com/yws/api/personal/sync?method=download").setData({ fileId: id, version: "-1", convert: true, editorType: 1 }).sendAsync();
    }
}
__decorate([
    funs.addEventListener()
], _app.prototype, "onGetDataList", null);
__decorate([
    funs.addEventListener()
], _app.prototype, "onGetDatalistByParent", null);
__decorate([
    funs.addEventListener()
], _app.prototype, "onGetDataviewById", null);
module.exports = new _app;
//# sourceMappingURL=app.js.map