

const { ccclass, property } = cc._decorator;
enum GAME_ID {
    "三倍猴子_1000201" = 1000201,
    "赏金女王_111003901" = 111003901,
    "赏金女王哈希_111003921" = 111003921,
};
@ccclass
export default class StarScene extends cc.Component {

    @property({ type: cc.Enum(GAME_ID) })
    gameId: GAME_ID = GAME_ID.三倍猴子_1000201;

    @property()
    curGameId: string = "";

    gamebundle: string = "";
    curGameType: string = "";
    gamebundleVer: string = null;
    gameconfig = null;
    bundleVers = {};

    onLoad() {
        let url = game.ComUtils.getUrl();
        if (url.indexOf("api_game") > -1) {
            // 线上版本动态获取
            this.curGameId = base64.decode(game.ComUtils.getUrlParam(url, 'game_id'));
        } else if (this.curGameId == "") {
            this.curGameId = window["gameConfig"].gameID;
        }
        // this.gamebundle = "game_" + this.curGameId;


        this.curGameType = this.getgameType(this.curGameId);
        core.Global.gameId = Number(this.curGameId);
        core.Global.gameType = this.curGameType;
        core.Global.clientGameId = Number(core.CoreUtils.convertGameId(this.curGameId));
        //初始化
        this.gamebundle = "game_" + core.Global.clientGameId;
        this.intoGame();
    }

    start() {
        game.EventManager.getInstance().addEventListener(core.GameCoreConst.mess_loginSucc, this._onLoginSucc, this);
    }

    private _onLoginSucc(msg, resp) {
        console.log("aaaaaaaa", resp);
        console.log("aaaaaaaa222", msg);
    }

    protected onDestroy(): void {
        console.log("onDestroy");
    }


    /**
     * 进入子游戏配置和子游戏bundle，然后添加子游戏的层
     */
    async intoGame(): Promise<void> {
        if (this.curGameType == "") return;
        await this.loadAllVer();
        await this.loadPublicProtoJs();
        await this.baseInit();
        await this.coreInit();
        //加载子游戏版本配置
        await this.loadGameBundleConfig();
        console.log("加载子公共库:::", this.curGameType);
        await this.loadPublicBundle();
        await this.loadGameBundle();
        await this.addGamePrefab();
    }

    private _core;

    async baseInit(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this._core)
                this._core = new window['core'].GameCore();
            this._core.baseInit(resolve, reject);
        });
    }


    async coreInit(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (!this._core)
                this._core = new window['core'].GameCore();
            this._core.init(resolve, reject);
        });
    }
    /**
     * 离开游戏 并且卸载bundle
     */
    async leaveGame(): Promise<void> {
        game.ResLoader.getInstance().releaseAll(this.gamebundle);
        let bundle = cc.assetManager.getBundle(this.gamebundle);
        // 释放所有属于 Asset Bundle 的资源
        bundle.releaseAll();
        cc.assetManager.removeBundle(bundle);
    }

    /**
     * 加载子模块 公共库
     */
    async loadPublicBundle(): Promise<string> {
        // if (this.isValid == false) return;
        let httpdir = window["getOtherBundleUrl"](this.curGameType);
        let options = { version: this.bundleVers[this.curGameType] };
        console.log("加载子公共库:111 ", httpdir);
        console.log("加载子公共库:curGameType ", this.curGameType);
        var type = window["gameConfig"].gameType;
        if (type == 'slotLib' || type == 'hunterLib' || type == 'arcadeLib') {
            httpdir = this.curGameType;
            options = null;
        }
        return new Promise((resolve, reject) => {
            cc.assetManager.loadBundle(httpdir, options, (err, bundle) => {
                if (!err) {
                    console.log("加载子公共库完成");
                    resolve(null);
                } else {
                    reject(null);
                }
            });
        });
    }

    /**
     * 加载子游戏bundle
     */
    async loadGameBundle(): Promise<string> {
        //本地调试模式下  ，如果是 子游戏项目本身 ，不需要加载远端的
        var type = window["gameConfig"].gameType;
        if (type == "slot" || type == "hunter" || type == "arcade") {
            let httpgamebundle = this.gamebundle;
            return new Promise((resolve, reject) => {
                cc.assetManager.loadBundle(httpgamebundle, (err, bundle) => {
                    if (!err) {
                        console.log("加载子游戏bundle完成");
                        resolve(null);
                    } else {
                        reject();
                    }
                });
            });
        } else {
            return new Promise((resolve, reject) => {
                let httpgamebundle = window["getGameBundleUrl"](this.gamebundle, this.curGameId);
                // let httpgamebundle = "http://localhost:8092/"+this.gamebundle+"/build/web-mobile/assets/"+this.gamebundle+"/1.0.0";                
                cc.assetManager.loadBundle(httpgamebundle, { version: this.gamebundleVer }, (err, bundle) => {
                    if (!err) {
                        console.log("加载子游戏bundle完成");
                        resolve(null);
                    } else {
                        reject(null);
                    }
                });
            });
        }
    }

    /**
     * 加载游戏配置
     */
    async loadGameBundleConfig(): Promise<void> {
        let self = this;
        //本地调试模式下  ，如果是 子游戏项目本身 ，不需要加载远端的
        var type = window["gameConfig"].gameType;
        if (type == "slot" || type == "hunter" || type == "arcade") {
            return new Promise((resolve, reject) => {
                resolve();
            });
        } else {
            return new Promise((resolve, reject) => {
                let httpgamebundle = window["getGameBundleUrl"](this.gamebundle, this.curGameId) + "/bundleVer.json?ver=" + new Date().getTime();
                // let httpgamebundle = "http://localhost:8092/"+this.gamebundle+"/build/web-mobile/assets/"+this.gamebundle+"/1.0.0/bundleVer.json?ver=" + new Date().getTime();
                let reqinfo: game.IReqInfo = {
                    url: httpgamebundle,
                    method: "GET",
                    failCb: () => {
                        reject("http请求子游戏bundleVer 失败");
                    },
                    successCb: (_xhr, baseinfo) => {
                        try {
                            let responseObj = JSON.parse(_xhr.responseText);
                            self.gamebundleVer = responseObj.version;
                            resolve();
                        } catch (error) {
                            console.error("http请求解析错误");
                            reject("http请求子游戏bundleVer解析错误");
                        }
                    },
                    needSign: false,
                    isAutoRetry: false,
                }
                let http = game.HttpRequest.getInstance();
                http.send(reqinfo);
            });
        }
    }

    /**
     * 加载游戏节点
     */
    async addGamePrefab(): Promise<string> {
        console.log("添加子游戏节点");
        return new Promise((resolve, reject) => {
            new window['slot'].SlotInit().init();
            resolve(null);
        });
    }


    getgameType(gameid: string): string {
        let text = gameid.slice(0, 2);
        let type = "slot";
        switch (text) {
            case "10":
                type = "slot";
                break;
            case "20":
                type = "hunter";
                break;
            case "30":
                type = "arcade";
                break;
        }
        return type;
    }


    //加载proto js脚本库
    async loadScripts(moduleName: string, bundle: string): Promise<void> {
        let httpscript = window["getOtherBundleUrl"](bundle) + "/" + moduleName + "." + this.bundleVers[bundle] + ".js";
        return new Promise((resolve, reject) => {
            function scriptLoaded() {
                document.body.removeChild(domScript);
                domScript.removeEventListener('load', scriptLoaded, false);
                resolve();
            };
            var domScript = document.createElement('script');
            domScript.async = false;
            domScript.src = httpscript;
            domScript.addEventListener('load', scriptLoaded, false);
            document.body.appendChild(domScript);

        });
    }

    async loadSelfProtoJs(): Promise<void> {
        let httpscript = "http://localhost:8092/slot/protos/proto_slot.js";
        return new Promise((resolve, reject) => {
            function scriptLoaded() {
                document.body.removeChild(domScript);
                domScript.removeEventListener('load', scriptLoaded, false);
                resolve();
            };
            var domScript = document.createElement('script');
            domScript.async = false;
            domScript.src = httpscript;
            domScript.addEventListener('load', scriptLoaded, false);
            document.body.appendChild(domScript);

        });
    }

    async loadPublicProtoJs(): Promise<void> {
        await this.loadScripts("proto_common", "game_core");
        await this.loadScripts("proto_uc", "game_core");
        switch (this.curGameType) {
            case "slot":
                await this.loadScripts("proto_slot", "slot");
                break;
            case "hunter":
                await this.loadScripts("proto_hunter", "hunter");
                break;
            case "arcade":
                break;
        }
        // await this.loadSelfProtoJs();

        return Promise.resolve(null);
    }


    async loadVerJson(url, bundleName): Promise<void> {
        let self = this;
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open("get", url + "/bundleVer.json?ver=" + new Date().getTime());
            request.send(null);/*不发送数据到服务器*/
            request.onload = function () {/*XHR对象获取到返回信息后执行*/
                if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
                    var json = JSON.parse(request.responseText);
                    //console.log(json);
                    if (!self.bundleVers) self.bundleVers = {};
                    self.bundleVers[bundleName] = json.version;
                    resolve(null);
                } else {
                    reject(null);
                }
            }
        });
    }

    async loadAllVer(): Promise<void> {
        await this.loadVerJson(window["getOtherBundleUrl"]("base"), "base");
        await this.loadVerJson(window["getOtherBundleUrl"]("game_core"), "game_core");
        switch (this.curGameType) {
            case "slot":
                await this.loadVerJson(window["getOtherBundleUrl"]("slot"), "slot");
                break;
            case "hunter":
                await this.loadVerJson(window["getOtherBundleUrl"]("hunter"), "hunter");
                break;
            case "arcade":
                await this.loadVerJson(window["getOtherBundleUrl"]("arcade"), "arcade");
                break;
        }
        return Promise.resolve(null);
    }
}