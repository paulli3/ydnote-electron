if (typeof require != "undefined") {
    var { ipcRenderer } = require('electron');
    ipcRenderer.on("log", (d, e) => { console.log.apply(this, e); });
    ipcRenderer.on("start", start);
}
;
$(() => {
    $("#dirlist").click((e) => { Data.showDirByParent(e.target.getAttribute("data-id")); });
    $("#dirlist1").click((e) => {
        let id = e.target.getAttribute("data-id");
        if (e.target.getAttribute("data-isdir") == "1") {
            Data.showDirByParent(id);
        }
        else {
            Data.showDetail(id);
        }
    });
});
function start() {
    console.log(typeof require);
    Data.showRootDir();
}
class Data {
    static showRootDir() {
        Data.call("_app_onGetDataList", "/", (d) => {
            let ul = $("#dirlist");
            d.forEach(v => {
                ul.append(`<li>
                    <a href="#" data-id="${v.fileEntry.id}">
                        <i class="ico-folder-close"></i>
                        ${v.fileEntry.name}
                        <strong>${v.fileEntry.dirNum + v.fileEntry.fileNum}</strong>
                    </a>
                </li>`);
            });
            $("#sidebar").scrollBar({
                barWidth: 5,
                position: "y",
                wheelDis: 20
            });
        });
    }
    static showDirByParent(id) {
        Data.call("_app_onGetDatalistByParent", id, (d) => {
            let ul = $("#dirlist1");
            ul.empty();
            d.entries.forEach(v => {
                ul.append(`<li><a href="#" data-id="${v.fileEntry.id}" data-isdir="${v.fileEntry.dir ? 1 : 0}"><i class="${v.fileEntry.dir ? 'ico-folder-close' : 'ico-file'}"></i>${v.fileEntry.name.replace(".note", "")}</a></li>`);
            });
            $("#sidebar1").scrollBar({
                barWidth: 5,
                position: "y",
                wheelDis: 10
            });
        });
    }
    static showDetail(id) {
        Data.call("_app_onGetDataviewById", id, (d) => {
            let html = xml2data.parse(d);
            console.log(d);
            $("#body").html(html);
        });
    }
    static call(msgname, param, cb) {
        console.log("call=>", msgname, param);
        ipcRenderer.send(msgname, param);
        ipcRenderer.once(msgname + "_replay", (sender, d) => {
            let ret = null;
            try {
                ret = JSON.parse(d);
            }
            catch (error) {
                ret = d;
            }
            cb(ret);
        });
    }
}
class xml2data {
    static parse(xmlstring) {
        let doc = $.parseXML(xmlstring);
        let childNodes = $(doc).find("body").get(0).children;
        let ret = "";
        for (let i = 0; i < childNodes.length; i++) {
            const v = childNodes[i];
            let funName = "parse_" + v.tagName.replace("-", "_");
            if (xml2data[funName]) {
                ret += xml2data[funName](v);
            }
        }
        return ret;
    }
    static parse_para(data) {
        let arr = {};
        let cfg = {};
        $(data).find("from").each((k, v) => {
            let sk = $(v).text();
            let ek = $(data).find("to").eq(k).text();
            let key = `${sk}-${ek}`;
            arr[key] = arr[key] ? arr[key] : {};
            let subkey = v.parentNode.nodeName.replace("-", "");
            arr[key][subkey] = $(data).find("value").eq(k).text();
            cfg[sk] = 1;
            cfg[ek] = 1;
        });
        let d = {};
        let text = $(data).find("text").text();
        let sort = (arr, cfg) => {
            let sk = cfg.shift();
            let ek = cfg[0];
            if (!sk || !ek)
                return;
            for (let i in arr) {
                let [start, end] = i.split("-");
                if (start > sk)
                    continue;
                if (end < ek)
                    continue;
                if (end == sk)
                    continue;
                let k = sk + "-" + ek;
                d[k] = d[k] ? d[k] : {};
                Object.assign(d[k], { text: text.substring(sk, ek) }, arr[i]);
            }
            sort(arr, cfg);
        };
        sort(arr, Object.keys(cfg));
        let replacetext = "";
        for (let key in d) {
            let subtext = d[key].text;
            let style = "";
            for (let subkey in d[key]) {
                let val = d[key][subkey];
                switch (subkey) {
                    case "backcolor":
                        style += `background:${val};`;
                        break;
                    case "color":
                        style += `color:${val};`;
                        break;
                    case "fontsize":
                        style += `font-size:${val}px;`;
                        break;
                    case "underline":
                        style += `text-decoration:underline;`;
                        break;
                    case "fontfamily":
                        style += `font-family:${val};`;
                        break;
                    case "href":
                        break;
                    case "bold":
                        style += `font-weight:bold;`;
                        break;
                }
            }
            if (d[key]["href"]) {
                replacetext += `<a href="${arr[key]["href"]}" style="${style}">${subtext}</a>`;
            }
            else {
                replacetext += `<span style="${style}">${subtext}</span>`;
            }
        }
        replacetext = replacetext ? "<div style=''>" + replacetext + "</div>" : "<br/>";
        return replacetext;
    }
    static parse_list_item(data) {
        return `<ul><li>${xml2data.parse_para(data)}</li></ul>`;
    }
    static parse_image(data) {
        let src = $(data).find("source").text();
        let text = $(data).find("text").text();
        let width = $(data).find("width").text();
        return `<div class="img"><img src="${src}" width="${width}" alt="${text}"</div>`;
    }
}
//# sourceMappingURL=event.js.map