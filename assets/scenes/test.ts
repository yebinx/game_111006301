
import { CSPacket, CSPacketHead } from "../net/BaseCommand";
import NativeClass from "../net/NativeClass";
import { KN_CMD, KN_COMMAND, RoomMainCmd, RoomSubCmd, SceneSubCmd, gameFramework, mssCmd, roomCmd } from "../net/cmd";
import { MD5 } from "../utils/Md5";

export var isTest = true;

function flattenArrayByColumns(arr) {
    // 找出二维数组的最大列数  
    let maxColumns = Math.max(...arr.map(row => row.length));

    // 初始化一个空数组来存放结果  
    let result = [];

    // 遍历每一列  
    for (let col = 0; col < maxColumns; col++) {
        // 遍历每一行  
        for (let row = 0; row < arr.length; row++) {
            // 检查当前行是否有足够的列数  
            if (arr[row][col] !== undefined) {
                // 将元素添加到结果数组中  
                result.push(arr[row][col]);
            }
        }
    }

    return result;
}

function deepCopyWithoutPrototype<T extends any>(obj: T, seen = new WeakMap()): T {
    if (obj === null || typeof obj !== 'object' || obj instanceof Date) {
        return obj;
    }

    if (seen.has(obj)) {
        return seen.get(obj);
    }

    let result;
    if (Array.isArray(obj)) {
        result = [];
        seen.set(obj, result);
        obj.forEach((item, index) => {
            result[index] = deepCopyWithoutPrototype(item, seen);
        });
    } else {
        result = {};
        seen.set(obj, result);
        Object.keys(obj).forEach(key => {
            result[key] = deepCopyWithoutPrototype(obj[key], seen);
        });
    }

    return result as T;
}

export function serializeWithLong(obj: any): string {
    const processedObj = JSON.parse(JSON.stringify(obj, (key, value) => {
        if (value && value instanceof Long) {
            return {
                _isLong: true,
                low: value.low,
                high: value.high,
                unsigned: value.unsigned
            };
        }
        return value;
    }));
    return JSON.stringify(processedObj);

}

// 反序列化，自动识别并重构 Long 类型的属性
export function deserializeWithLong(jsonStr: string): any {
    const data = JSON.parse(jsonStr, (key, value) => {
        // if (value && value._isLong) {
        if (value && value.hasOwnProperty('low') && value.hasOwnProperty('high') && value.hasOwnProperty('unsigned')) {
            return Long.fromBits(value.low, value.high, value.unsigned);
        }
        return value;
    });
    return data;
}



if (isTest) {
    let language = "";
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == "language") {
            language = pair[1];
        }
    }

    if (language == "") {
        let inputParams = new URLSearchParams(window.location.search);
        inputParams.append("language", "tw");
        let newUrl = window.location.origin + window.location.pathname + "?" + inputParams.toString();
        window.history.replaceState(null, null, newUrl);
    }


    slot.SlotUtils.formatNumber = function (v: number, n: number = 2, c: number = 100, isRate: boolean = false, isReserved: boolean = true, thousandSign: string = ",", decimalPointSymbol: string = ".") {
        let rate = 1;
        if (isRate)
            rate = core.CommonProto.getInstance().coinRate;
        // let coin = isRate ? core.Nationalcurrency.getInstance().currencySignConvert() : "";
        let coin = isRate ? "R$" : "";
        return coin + game.ComUtils.formatNumber(v, n, c, isReserved, thousandSign, decimalPointSymbol);
    }

    core.DataAnalysis.prototype.httpEventReport = function (eventCode: number, value?: number, params?: any, successCall?: Function, failCall?: Function) {

    }

    //@ts-ignore
    core.CommonProto.prototype.sendLoginReq = function (e) {
        console.log("sendLoginReq");
        this.loginResp({}, {});
    }


    core.CommonProto.prototype.enterGameReq = function () {
        console.log("enterGameReq");
        this.enterGameResp({}, {});
        // sendSit();
        // getJackPot();
        ready();
        getGameInfo();
    }

    core.CommonProto.prototype.enterRoomReq = function () {
        this.enterRoomResp({}, {});

        // setTimeout(() => {
        //     //@ts-ignore
        //     slot.SlotProtoManager.getInstance().restoreResp({});
        // }, 2000);

    }

    core.CommonProto.prototype.joinFriendRoomReq = function (e) {
        this.friendRoomId = e;
        console.log("joinFriendRoomReq");
    }

    core.CommonProto.prototype.createFriendRoomReq = function (e) {
        this.roomType = e;
        console.log("createFriendRoomReq");
    }

    slot.SlotProtoManager.prototype.requestLastGameInfo = function () {

    }

    core.CommonProto.prototype.readyReq = function () {

    }

    //@ts-ignore
    slot.SlotGameManager.prototype.enterNormalRoom = function (event, dd, data, param: any) {
        if (!param) {
            if (!this.isFirstEnterRoom) {
                game.EventManager.getInstance().raiseEvent(slot.GameEventNames.RESETROOMSTATE);
                this.reEnterRoomSuccess();
                return;
            }
            this.isEnterRommSucess = true;
            if (this.resRealyList.comConfig == true) {
                // this.begin();
            }
        }
    }


    //@ts-ignore
    core.CommonProto.prototype.loginResp = function (e, t) {
        let test = `{"userInfo":{"userId":{"low":473157633,"high":42139755,"unsigned":true},"userName":"180988870059610113","scores":{"low":200000,"high":0,"unsigned":true},"lv":1,"maxLv":50,"exp":{"low":0,"high":0,"unsigned":true},"maxExp":{"low":4500,"high":0,"unsigned":true},"avatar":1,"fundType":0,"awardInfo":{"lvAward":[],"fundAward":[]},"coinType":3,"snId":{"low":11,"high":0,"unsigned":true},"agentId":{"low":14,"high":0,"unsigned":true},"coinRate":1,"walletType":1},"reconnectToken":"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTgzNjA3NDUsInVzZXJfaWQiOjE4MDk4ODg3MDA1OTYxMDExMywiZGVhbGVyX2lkIjoxLCJzbl9pZCI6MTEsImFnZW50X2lkIjoxNCwiZXh0cmEiOiJ7fSIsImlzX3BsYXRmb3JtX2xvZ2luIjpmYWxzZSwibHVpZCI6NTc1NDEzMzczMTYwODk5Mjk5fQ.CslyNYAm4wJRkEDDre3t3J-avBDqHxfE1zcfG3WhZNxUXydTEzfOnJTpP7HGkyAKLRnjC4YKdMEFTUxCC-wdsA","isNormal":false,"isReconnect":false}`;
        let o = deserializeWithLong(test);

        this.userinfo = o.userInfo
        this.reconnectToken = o.reconnectToken
        this.isNormal = o.isNormal
        this.coinRate = this.userinfo.coinRate
        this.isReconnect = o.isReconnect
        game.zLog.info("login resp : ", o)
        core.DataCollectionMgr.instance.sendLoginData()
        game.EventManager.getInstance().raiseEvent(core.GameCoreConst.mess_loginSucc)
        this.enterGameReq()

    }


    //@ts-ignore
    core.CommonProto.prototype.enterGameResp = function (t, o) {

        game.LogManager.getInstance().log("\u6210\u529f\u8fdb\u5165\u6e38\u620fID", core.Global.gameId);
        let data = `{"isInFriendRoom":false,"roomId":0,"roomType":0,"gamePlayType":1,"scores":{"low":200000,"high":0,"unsigned":true},"switch":{"gm":0,"fund":0,"lvReward":0,"rollerMode":0,"smallRoller":0,"slotMulti":1,"slotJp":1,"hunterJp":1,"doubleGame":0,"buyFreeGame":0,"gameShare":0,"shopBuy":1,"inviteFriends":1,"performTasks":1,"vipDealer":0,"guideHunterGame":0,"slotCreateRoom":0,"qyxzCreateRoom":0,"gameReward":0,"blackjackWinLose":0,"texasMutualJump":0,"tabletopJp":0,"bingoJp":0,"lotteryJp":0}}`;
        let l = deserializeWithLong(data);

        this.gameSwitch = l.switch
        this.resultEnterGame = l
        this.infriendRoom = l.isInFriendRoom
        this.friendRoomId = l.roomId
        this.userinfo.scores = l.scores
        game.EventManager.getInstance().raiseEvent(core.GameCoreConst.mess_enterGameSucc, l)
        "slot" == core.Global.gameType && (this.infriendRoom && 0 !== this.friendRoomId ? this.joinFriendRoomReq(this.friendRoomId) : this.enterRoomReq(0, 0))
    }

    //@ts-ignore
    core.CommonProto.prototype.enterRoomResp = function (e, t) {

        let data = `0`;
        var o = deserializeWithLong(data);

        game.LogManager.getInstance().log("\u8fdb\u5165\u623f\u95f4\u6210\u529f");
        this.infriendRoom = !1
        game.EventManager.getInstance().raiseEvent(core.GameCoreConst.mess_netEnterRoom, o, t, this.isReconnect)

    }

    //@ts-ignore
    core.CommonProto.prototype.createFriendRoomResp = function (e, t) {
        console.log("createFriendRoomResp", e, t);
    }



    //@ts-ignore
    slot.SlotProtoManager.prototype.restoreResp = function (data: any): void {

        // let dd = `{"restore":[{"winningAnimationConditions":[{"winType":1,"winRate":35},{"winType":2,"winRate":15},{"winType":3,"winRate":5},{"winType":4,"winRate":0}],"autoSpinTimes":[10,30,50,80,1000],"lineValue":[{"low":2,"high":0,"unsigned":false},{"low":20,"high":0,"unsigned":false}],"userInfo":{"userId":{"low":469725185,"high":42139755,"unsigned":false},"userName":"***665","avatar":1,"lv":1,"balance":{"low":200000,"high":0,"unsigned":true},"isNewer":0,"coinType":3},"state":{"state":1,"normalData":{"randomElemPos":[],"wild":[],"spinInfo":{"spinParam":{"lineList":[1],"lineCost":{"low":2,"high":0,"unsigned":true},"lineRate":30,"rateModulus":100,"lineMultiple":1},"spinResult":{"lineResult":[],"grid":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],"gridChanged":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":0,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}}},"sumSpinCoin":{"low":0,"high":0,"unsigned":true},"sumLgCoin":{"low":0,"high":0,"unsigned":true},"spinTypeTag":1,"triggerFreeSpinCoin":{"low":0,"high":0,"unsigned":true},"isNewer":0}},"betStateType":{"betState":0,"betRate":100}},{"winningAnimationConditions":[{"winType":1,"winRate":35},{"winType":2,"winRate":15},{"winType":3,"winRate":5},{"winType":4,"winRate":0}],"autoSpinTimes":[10,30,50,80,1000],"lineValue":[{"low":2,"high":0,"unsigned":false},{"low":20,"high":0,"unsigned":false}],"userInfo":{"userId":{"low":473157633,"high":42139755,"unsigned":false},"userName":"180988870059610113","avatar":1,"lv":1,"balance":{"low":200000,"high":0,"unsigned":true},"isNewer":0,"coinType":3},"state":{"state":1,"normalData":{"randomElemPos":[],"wild":[],"spinInfo":{"spinParam":{"lineList":[1],"lineCost":{"low":2,"high":0,"unsigned":true},"lineRate":30,"rateModulus":100,"lineMultiple":1},"spinResult":{"lineResult":[],"grid":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],"gridChanged":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":0,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}}},"sumSpinCoin":{"low":0,"high":0,"unsigned":true},"sumLgCoin":{"low":0,"high":0,"unsigned":true},"spinTypeTag":1,"triggerFreeSpinCoin":{"low":0,"high":0,"unsigned":true},"isNewer":1}},"betStateType":{"betState":0,"betRate":100}}],"spinCfg":[],"rollerLv":1,"gameMode":1,"ciphertext":"","hashRest":0}`
        // let result = deserializeWithLong(dd);
        let result = data;


        this.restoreResult = result;
        this.canReqSpin = true;
        game.LogManager.getInstance().log("resoreResp all", result);
        this.handleHashChainInfo(result);

        let myRestore: protoSlot.restoreType;
        for (let index = 0; index < result.restore.length; index++) {
            const r = result.restore[index] as protoSlot.restoreType;
            // if ((r.userInfo.userId as Long).toString() == (slot.PlayerManager.instance.userInfo.userId as Long).toString()) {
            myRestore = r;
            slot.SpinManager.instance.isSpinResp = true;
            // } else {

            // }
        }
        let roundId = result.roundId ? (result.roundId as Long) : Long.fromNumber(0);
        slot.SpinManager.instance.isOldSpinResp = slot.SpinManager.instance.roundId.equals(roundId);
        slot.SpinManager.instance.roundId = roundId;

        game.LogManager.getInstance().log("resoreResp my", myRestore);
        slot.SpinManager.instance.doubleCoin = null;

        slot.SpinManager.instance.rollerLv = result.rollerLv;//因为金玉满堂新加了等级rollerLv(重连刷新用)
        game.EventManager.getInstance().raiseEvent(slot.NetSlotConst.RESTORERESP, myRestore);
    }

    //@ts-ignore
    slot.SpinManager.prototype._requestSpin = function () {
        let req: protoSlot.spinReq = <protoSlot.spinReq>{};
        let reqType: protoSlot.spinReqType = <protoSlot.spinReqType>{};
        reqType.lines = this.lineNum;
        reqType.cost = this.getLineCostByIndex();
        reqType.rate = this.getRealLineRate();
        reqType.rateModulus = this.rateModulus;
        reqType.assginLine = this.assginLine;
        reqType.lineMultiple = this.getLinelMutiple();
        if (this._extra != null)
            reqType.extra = this._extra;
        let data = { req: reqType };
        req.req = reqType;


        this.isSpinResp = false;
        // 通知滚轴开始滚动
        game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_START_ROLLING);
        game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_MENBTS_SETSTATE, { state: false, num: 1 });

        let rate = core.CommonProto.getInstance().coinRate;//多国倍率

        // sendStartSpin(req.req.cost * req.req.rate * req.req.lineMultiple * req.req.lines / req.req.rateModulus * rate);
        sendStartSpin(req.req.cost * req.req.lineMultiple * req.req.lines / req.req.rateModulus * 1000);
        this.betCost = null
    }

    //@ts-ignore
    slot.SlotProtoManager.prototype.spinResp = function (e: any): void {
        this.canReqSpin = true;
        let result = e;
        // if ((result.userId as Long).toNumber() == (slot.PlayerManager.instance.userInfo.userId as Long).toNumber()) {
        game.LogManager.getInstance().log("spinResp", result);

        this.fixSpinRespData(result);
        /**服务器不返回0 */
        if (result.hashRest > 0) {
            this.handleHashChainInfo(result);
        }

        game.EventManager.getInstance().raiseEvent(slot.NetSlotConst.SPINRESP, result);
        slot.SpinManager.instance.isSpinResp = true;

        if (result.doubleCoin) {
            slot.SpinManager.instance.doubleCoin = result.doubleCoin;
        } else {
            slot.SpinManager.instance.doubleCoin = null;
        }
        this.clearCheckSchedule(this.spinRespCheckScheduleKey)
        // } else {

        // }
    }

    //@ts-ignore
    slot.SpinManager.prototype._onClickSingleStartBtnNotInGame = function () {
        // if (this._checkSpin()) {
        // 检查
        this._restAutoTimes = 0;
        this.isInAuto = false;

        this._startSpin();
        // }
    }

    slot.SlotProtoManager.prototype.requestSpinFreely = function (data) {
        if (!this.canReqSpin) return;
        this.canReqSpin = false;
        // let buff = core.ProtocolHelper.createGameSockBuff(protoSlot.cmd.msg_slot_spin, protoSlot.slot_spin_cmd.spinReq, protoSlot.spinReq, data);

        game.LogManager.getInstance().log("spinReq", data);
        sendStartSpin(0);

        // this.netNode.send2(buff);

        cc.sys.localStorage.setItem("lineCostIndex_" + core.CommonProto.getInstance().userinfo.userName + "_" + slot.GData.bundleName, slot.SpinManager.instance.lineCostIndex);
    }




    game.NetNode.prototype.connect = function (e) {
        let url = NativeClass.GetGameHostUrl();
        url = url == "" ? "wss://game2.wu6jv3.com/games/20400/1" : url;
        e = {
            autoReconnect: 5,
            // url: "wss://guest.liunky.com"
            url: url
            // url: 'wss://game2.wu6jv3.com/games/5100/1'
        }

        if (e) return this._closeCode = 0, !(!this._socket || this._state != game.NetNodeState.Closed || (this._urls.length > 0 && (this._isUrlEffect = !1, this._curUrlIndex = this._urls.indexOf(e.url)), this._isSocketInit || this.initSocket(), console.log("Start connect socket :" + e.url), this._state = game.NetNodeState.Connecting, !this._socket.connect(e) || (this._connectOptions = e, this.updateNetTips(game.NetTipsType.Connecting, !0), 0)));
    }

    //@ts-ignore
    game.NetNode.prototype.onConnected = function (e) {
        console.log("网络链接成功");
        game.EventManager.getInstance().raiseEvent(game.Const.mess_netconnected), game.zLog.info("NetNode onConnected! state = " + this._state), this.clearTimer(), this._isSocketOpen = !0, this._isUrlEffect = !0, this.onChecked(), this._connectedCallback && this._connectedCallback()
        sendCmd(KN_CMD.MDM_KN_COMMAND, KN_CMD.SUB_KN_XORKEY_REQ);
    }



    ///@ts-ignore
    game.NetNode.prototype.onClosed = function (e) {
        if (this.clearTimer(), console.log("链接断开了，链接断开了  ", e), game.EventManager.getInstance().raiseEvent(game.Const.mess_netclose), !this._disconnectCallback || this._disconnectCallback())
            if (this.isAutoReconnect()) {
                this.updateNetTips(game.NetTipsType.ReConnecting, !0);
                var t = this.nextUrl();
                t && (this._connectOptions.url = t), this.reconnect()
            } else this.closeTips();
        else console.log("disconnect return!")
    }



    var DEF_KEY = "iVXOalP0C3wTw25$jqWDolz!ymnYlPNthk3u&G0p5uffhaxKVqp!2%ZlC2C%XJGK";

    // @ts-ignore
    game.NetNode.prototype.onChecked = function () {
        this._state = game.NetNodeState.Working;
    }

    // @ts-ignore
    game.NetNode.prototype.onMessage = function (e) {
        let head = new CSPacketHead();
        head.parseHead(e);
        if (head.wMainCmdID.value != KN_CMD.MDM_KN_COMMAND && head.wSubCmdID.value != KN_CMD.SUB_KN_DETECT_SOCKET)
            console.log("收到消息了，收到消息了: ", head.wMainCmdID.value, "---", head.wSubCmdID.value);

        if (head.wMainCmdID.value == KN_CMD.MDM_SOCKET_COMMAND && head.wSubCmdID.value == KN_CMD.SUB_SOCKET_TOKEN_RES) { // 收到第一条协议
            let token = new KN_COMMAND.CMD_TokenRes();
            token.parse(e);
            var str = token.Token.value + DEF_KEY + token.Token.value + DEF_KEY + token.Token.value;
            var strmd5 = MD5.hex_md5(str);

            console.log("收到token md5: ", strmd5);
            var MD5Cmd = new KN_COMMAND.CMD_MD5();
            MD5Cmd.MD5.value = strmd5;
            sendCmd(KN_CMD.MDM_SOCKET_COMMAND, KN_CMD.SUB_SOCKET_VERIFY_REQ, MD5Cmd);

            sendLogin();
            // roomKernel.connect("wss://game2.wu6jv3.com/games/20400/1");

        }
        else if (head.wMainCmdID.value == KN_CMD.MDM_KN_COMMAND && head.wSubCmdID.value == KN_CMD.SUB_KN_DETECT_SOCKET) {
            sendCmd(KN_CMD.MDM_KN_COMMAND, KN_CMD.SUB_KN_DETECT_SOCKET);
        }
        else if (head.wMainCmdID.value == roomCmd.MDM_GR_LOGON && head.wSubCmdID.value == roomCmd.SUB_GR_LOGON_FINISH) {
            sendSit();
        }
        else if (head.wMainCmdID.value == RoomMainCmd.MDM_GF_GAME && head.wSubCmdID.value == RoomSubCmd.SUB_S_GAME_END) {
            onSpinData(e, this);
        }
        else if (head.wMainCmdID.value == roomCmd.MDM_GR_USER && head.wSubCmdID.value == roomCmd.SUB_GR_USER_COME) {
            // sendScene();
        }
        else if (head.wMainCmdID.value == RoomMainCmd.MDM_GF_FRAME && head.wSubCmdID.value == SceneSubCmd.SUB_GF_SCENE) {
            onSceneData(e, this);
        }
        // console.log(e);
    }

    //进入房间的时候请求是否有滚轴模式或有几个滚轴模式
    slot.SlotProtoManager.prototype.rollerModeDataReq = function () {

    }


    game.NetNode.prototype.send = function (e, t, n) {
        console.log("通过弃用接口发送消息");  // 通过废弃接口传输的数据会导致网络断开
        return;
        return void 0 === t && (t = !1), void 0 === n && (n = !1), this._state == game.NetNodeState.Working || n ? this._socket.send(e) : this._state == game.NetNodeState.Checking || this._state == game.NetNodeState.Connecting ? (this._requests.push({
            resend: t,
            buffer: e,
            rqestCmd: 0,
            rspCmd: 0,
            rspObject: null
        }), game.LogManager.getInstance().console("NetNode socket is busy, push to send buffer, current state is " + this._state), !0) : (console.error("NetNode request error! current state is " + this._state), !1)
    }

    //@ts-ignore
    game.NetNode.prototype.send2 = function (e, t, n) {
        return void 0 === t && (t = !1), void 0 === n && (n = !1), this._state == game.NetNodeState.Working || n ? this._socket.send(e) : this._state == game.NetNodeState.Checking || this._state == game.NetNodeState.Connecting ? (this._requests.push({
            resend: t,
            buffer: e,
            rqestCmd: 0,
            rspCmd: 0,
            rspObject: null
        }), game.LogManager.getInstance().console("NetNode socket is busy, push to send buffer, current state is " + this._state), !0) : (console.error("NetNode request error! current state is " + this._state), !1)
    }

    game.NetNode.prototype.request = function (e, t, n, s, r, a) {

        // void 0 === s && (s = !1), void 0 === r && (r = !0), void 0 === a && (a = !1), (this._state == game.NetNodeState.Working || a) && this._socket.send(e);
        // var c = this.responCmdTransform(t),
        //     u = this.requestCmdTransform(t);
        // this._requests.push({
        //     resend: s,
        //     buffer: e,
        //     rqestCmd: u,
        //     rspCmd: c,
        //     rspObject: n
        // }), r && this.updateNetTips(game.NetTipsType.Requesting, !0)
    }


    game.NetManager.prototype.send = function (e, t, n, o) {
        console.log("send废弃接口");
        void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === o && (o = 0);
        var i = this._channels[o];
        return !!i && i.send(e, t, n)
    }

    //@ts-ignore
    game.NetManager.prototype.send2 = function (e, t, n, o) {
        void 0 === t && (t = !1), void 0 === n && (n = !1), void 0 === o && (o = 0);
        var i = this._channels[o];
        return !!i && i.send2(e, t, n)
    }
}


export function sendCmd(MainCmdID, SubCmdID, Body = undefined) {
    //if (MainCmdID != 1 && SubCmdID != 1)
        console.warn("发送消息出去:::::::::::::::::::::::::::::::::::::::::::  ", MainCmdID, SubCmdID, Body);
    let pack = new CSPacket(MainCmdID, SubCmdID, Body);
    pack.setSize();
    let buf = pack.toData();
    //@ts-ignore
    game.NetManager.getInstance().send2(buf.buffer);
}


export function sendLogin() {
    var cmd = new roomCmd.CMD_GR_LogonByTPAccount();
    cmd.szTPAccount.value = NativeClass.GetUserAccount() == "" ? 'TKKSOLK172' : NativeClass.GetUserAccount();
    cmd.szPassWord.value = NativeClass.GetUserPassword() == "" ? 'TK125601' : NativeClass.GetUserPassword();
    cmd.iOperatoerID.value = NativeClass.GetOperatorId() == 0 ? '697996' : NativeClass.GetOperatorId();
    cmd.ulSessionID.value = NativeClass.GetSessionId();
    cmd.szMac.value = NativeClass.GetMac() == "" ? '123' : NativeClass.GetMac();
    cmd.szIps.value = NativeClass.GetIp() == 0 ? '127.0.0.1' : NativeClass.GetIp();

    sendCmd(roomCmd.MDM_GR_LOGON, roomCmd.SUB_GR_LOGON_ACCOUNTS, cmd);
}


export function sendSit() {
    var cmd = new roomCmd.CMD_GR_UserSitReqNoPass();
    cmd.wTableID.value = gameFramework.INVALID_TABLE;
    cmd.wChairID.value = gameFramework.INVALID_CHAIR;
    sendCmd(roomCmd.MDM_GR_USER, roomCmd.SUB_GR_USER_SIT_REQ, cmd);
}

export function ready() {
    sendCmd(RoomMainCmd.MDM_GF_FRAME, roomCmd.SUB_GF_USER_READY, null);
}

export function getGameInfo() {
    var gfInfo = new roomCmd.CMD_GF_Info();
    gfInfo.bAllowLookon.value = 0;
    gfInfo.nTotalBet.value = 2100;
    sendCmd(RoomMainCmd.MDM_GF_FRAME, roomCmd.SUB_GF_INFO, gfInfo);
}

export function getJackPot() {
    let cmdData = new roomCmd.CMD_GP_JackPot();
    cmdData.nUserId.value = 92118676;
    sendCmd(roomCmd.MDM_GR_TIGER, roomCmd.SUB_GR_JACKPOT_REQ, cmdData);
}

export function sendStartSpin(v: number) {
    console.log("sendStartSpin: ", v);
    let cmddata = new mssCmd.CMD_C_GAME_START();
    cmddata.nBet.value = v;
    sendCmd(RoomMainCmd.MDM_GF_GAME, mssCmd.SUB_C_START, cmddata);
}

export function onSceneData(e, t) {
    let sceneCmd = new mssCmd.CMD_S_GameStatus();
    sceneCmd.parse(e);
    console.log("收到游戏开始消息: ", sceneCmd);

    // let dd = `{\"restore\":[{\"winningAnimationConditions\":[{\"winType\":1,\"winRate\":35},{\"winType\":2,\"winRate\":15},{\"winType\":3,\"winRate\":5},{\"winType\":4,\"winRate\":0}],\"autoSpinTimes\":[10,30,50,80,1000],\"lineValue\":[{\"_isLong\":true,\"low\":2,\"high\":0,\"unsigned\":false},{\"_isLong\":true,\"low\":20,\"high\":0,\"unsigned\":false}],\"userInfo\":{\"userId\":{\"_isLong\":true,\"low\":469725185,\"high\":42139755,\"unsigned\":false},\"userName\":\"***665\",\"avatar\":1,\"lv\":1,\"balance\":{\"_isLong\":true,\"low\":200000,\"high\":0,\"unsigned\":true},\"isNewer\":0,\"coinType\":3},\"state\":{\"state\":1,\"normalData\":{\"randomElemPos\":[],\"wild\":[],\"spinInfo\":{\"spinParam\":{\"lineList\":[1],\"lineCost\":{\"_isLong\":true,\"low\":2,\"high\":0,\"unsigned\":true},\"lineRate\":30,\"rateModulus\":100,\"lineMultiple\":1},\"spinResult\":{\"lineResult\":[],\"grid\":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],\"gridChanged\":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],\"realGridShape\":[],\"realGridShapeChanged\":[],\"occupyPosList\":[],\"occupyPosListChanged\":[],\"clientRealGridShape\":[],\"copyColumn\":[],\"spinCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"lgCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"attachCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true}}},\"sumSpinCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"sumLgCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"spinTypeTag\":1,\"triggerFreeSpinCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"isNewer\":0}},\"betStateType\":{\"betState\":0,\"betRate\":100}}],\"spinCfg\":[],\"rollerLv\":1,\"gameMode\":1,\"ciphertext\":\"\",\"hashRest\":0}`;
    // e = deserializeWithLong(dd) as protoSlot.restoreResp;

    if (sceneCmd.uNextScene.value == 1) {
        e = freeRestore(sceneCmd);
    } else {
        e = normalRestore(sceneCmd);
    }

    var r = t._listener[1000001];
    if (null != r) {
        for (var a = 0, c = r; a < c.length; a++) {
            var u = c[a];
            t._callbackExecuter(u, e)
        }
    }
    console.log("合并之后的RestoreResp", e);
}


export function onSpinData(e, t) {
    let gameEnd = new mssCmd.CMD_S_GameEnd();
    gameEnd.parse(e);
    console.log("收到游戏结束消息: ", gameEnd);

    let resp = null;
    if (gameEnd.uCurScene.value == 0 && gameEnd.uNextScene.value == 0) {    // 普通旋转
        resp = normalSpinResp(gameEnd);
    } else if (gameEnd.uCurScene.value == 0 && gameEnd.uNextScene.value == 1) { // 普通旋转进入免费
        resp = enterFreeSpinResp(gameEnd);
    } else if (gameEnd.uCurScene.value == 1 && gameEnd.uNextScene.value == 1) {  // 免费旋转
        resp = freeSpineResp(gameEnd);
    } else if (gameEnd.uCurScene.value == 1 && gameEnd.uNextScene.value == 0) {      // 免费旋转进入普通旋转
        resp = lastFreeSpineResp(gameEnd);
    }

    var r = t._listener[1000003];
    if (null != r) {
        for (var a = 0, c = r; a < c.length; a++) {
            var u = c[a];
            t._callbackExecuter(u, resp)
        }
    }
    console.log("合并之后的SpinResp", resp);
}


// 普通旋转数据覆盖
function normalSpinResp(gameEnd, e = null) {
    if (e == null) {
        let dd = '{"updateList":[],"extra":[9,91,81,12,60],"randomElemPos":[],"triggerElemPos":[],"posRateList":[],"key":[],"userId":{"low":-1527074815,"high":42140324,"unsigned":false},"state":1,"subState":1,"spinResult":{"lineResult":[],"grid":[5,7,8,1,6,2,4,5,4,8,5,5,8,4,1],"gridChanged":[5,7,8,1,6,2,4,5,4,8,5,5,8,4,1],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":0,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}},"balance":{"low":199400,"high":0,"unsigned":true},"allCost":{"low":600,"high":0,"unsigned":true},"roundId":{"low":0,"high":0,"unsigned":true},"resultRate":1,"rollerLv":1,"spinReqParam":{"assginLine":[],"extra":[],"lines":1,"cost":{"low":20,"high":0,"unsigned":true},"rate":30,"rateModulus":100,"lineMultiple":1},"isSettled":1}';
        e = deserializeWithLong(dd) as protoSlot.spinResp;
    }

    let grid = flattenArrayByColumns(gameEnd.nIconAreaDistri);
    grid = grid.map(v => v.value);
    grid.forEach((v, k) => {
        if (v <= 0) grid[k] = 1;
        if (v > 10) grid[k] = 10;
    });
    let lineRes = gameEnd.olconAwardInfo.filter(v => v.nIconType.value > 0);
    let lineResult = [];
    lineRes.forEach((v, k) => {
        let res = new protoSlot.spinResultType.lineResultType();
        res.dir = 1;
        res.elementRate = 1;
        res.extraRate = 1;
        res.lineId = 1;
        res.lineType = 14;
        let winPos = [];
        v.nIconAwardPos.forEach((element, kk) => {
            let pos = element.value;
            let row = Math.floor(pos / 5); //AREA_COL==5
            let col = pos % 5;
            let index = col * 3 + row + 1;
            if (pos > 0 || kk == 0) {
                winPos.push(index);
            }
        });

        res.winPos = winPos;
        res.elementResult = new protoSlot.spinResultType.lineResultType.elemResultType();
        res.elementResult.elem = v.nIconType.value;
        res.elementResult.elemList.push({ elem: v.nIconType.value, elemNum: v.nLen.value });
        res.spinCoin = Long.fromNumber(v.lAwardGold.value / 1000 * 100);
        lineResult.push(res);
    });

    e.balance = Long.fromNumber(gameEnd.lUserTotalScore.value / 1000);
    e.spinResult.lineResult = lineResult;
    e.spinResult.grid = grid;
    e.spinResult.gridChanged = grid;
    e.spinResult.spinCoin = Long.fromNumber(gameEnd.lAwardGold.value / 1000 * 100);
    return e;
}

// 进入免费旋转的数据覆盖
function enterFreeSpinResp(gameEnd) {
    let dd = `{\"updateList\":[],\"extra\":[89,53,18,99,57],\"randomElemPos\":[],\"triggerElemPos\":[],\"posRateList\":[],\"key\":[],\"userId\":{\"low\":300204033,\"high\":42140735,\"unsigned\":false},\"state\":1,\"subState\":1,\"spinResult\":{\"lineResult\":[{\"lgList\":[{\"low\":-1784271787,\"high\":2,\"unsigned\":true}],\"winPos\":[5,7,11],\"lineId\":0,\"lineMode\":2,\"lineType\":5,\"spinCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"dir\":1,\"elementResult\":{\"elemList\":[{\"elem\":10,\"elemNum\":3}],\"elem\":10},\"extraRate\":1,\"elementRate\":1},{\"lgList\":[],\"winPos\":[3,6,9],\"lineId\":3,\"lineMode\":1,\"lineType\":14,\"spinCoin\":{\"low\":600,\"high\":0,\"unsigned\":true},\"dir\":1,\"elementResult\":{\"elemList\":[{\"elem\":8,\"elemNum\":3}],\"elem\":8},\"extraRate\":1,\"elementRate\":1}],\"grid\":[6,3,8,5,10,8,10,4,8,5,10,1,7,6,6],\"gridChanged\":[6,3,8,5,10,8,10,4,8,5,10,1,7,6,6],\"realGridShape\":[],\"realGridShapeChanged\":[],\"occupyPosList\":[],\"occupyPosListChanged\":[],\"clientRealGridShape\":[],\"copyColumn\":[],\"spinCoin\":{\"low\":600,\"high\":0,\"unsigned\":true},\"lgCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"attachCoin\":{\"low\":0,\"high\":0,\"unsigned\":true}},\"balance\":{\"low\":150980,\"high\":0,\"unsigned\":true},\"allCost\":{\"low\":600,\"high\":0,\"unsigned\":true},\"nextState\":{\"state\":2,\"normalData\":{\"randomElemPos\":[],\"wild\":[],\"spinInfo\":{\"spinParam\":{\"lineList\":[1],\"lineCost\":{\"low\":20,\"high\":0,\"unsigned\":true},\"lineRate\":30,\"rateModulus\":100,\"lineMultiple\":1},\"spinResult\":{\"lineResult\":[{\"lgList\":[{\"low\":-1784271787,\"high\":2,\"unsigned\":true}],\"winPos\":[5,7,11],\"lineId\":0,\"lineMode\":2,\"lineType\":5,\"spinCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"dir\":1,\"elementResult\":{\"elemList\":[{\"elem\":10,\"elemNum\":3}],\"elem\":10},\"extraRate\":1,\"elementRate\":1},{\"lgList\":[],\"winPos\":[3,6,9],\"lineId\":3,\"lineMode\":1,\"lineType\":14,\"spinCoin\":{\"low\":600,\"high\":0,\"unsigned\":true},\"dir\":1,\"elementResult\":{\"elemList\":[{\"elem\":8,\"elemNum\":3}],\"elem\":8},\"extraRate\":1,\"elementRate\":1}],\"grid\":[6,3,8,5,10,8,10,4,8,5,10,1,7,6,6],\"gridChanged\":[6,3,8,5,10,8,10,4,8,5,10,1,7,6,6],\"realGridShape\":[],\"realGridShapeChanged\":[],\"occupyPosList\":[],\"occupyPosListChanged\":[],\"clientRealGridShape\":[],\"copyColumn\":[],\"spinCoin\":{\"low\":600,\"high\":0,\"unsigned\":true},\"lgCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"attachCoin\":{\"low\":0,\"high\":0,\"unsigned\":true}}},\"sumSpinCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"sumLgCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"spinTypeTag\":1,\"triggerFreeSpinCoin\":{\"low\":600,\"high\":0,\"unsigned\":true},\"isNewer\":1},\"freeData\":{\"wild\":[],\"scatter\":[],\"elemFixPos\":[],\"elemExpand\":[],\"random\":[],\"lgHistory\":[],\"randomElemPos\":[],\"accFixGridList\":[],\"elemTran\":[],\"rollerDelElem\":[],\"allFreeSpinTimes\":[],\"lock\":[],\"randomElemRateAddition\":[],\"id\":1,\"times\":12,\"sumTimes\":12,\"ratio\":2,\"sumSpinCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"sumLgCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"spinInfo\":{\"spinParam\":{\"lineList\":[1],\"lineCost\":{\"low\":20,\"high\":0,\"unsigned\":true},\"lineRate\":30,\"rateModulus\":100,\"lineMultiple\":1},\"spinResult\":{\"lineResult\":[],\"grid\":[6,3,8,5,10,8,10,4,8,5,10,1,7,6,6],\"gridChanged\":[6,3,8,5,10,8,10,4,8,5,10,1,7,6,6],\"realGridShape\":[],\"realGridShapeChanged\":[],\"occupyPosList\":[],\"occupyPosListChanged\":[],\"clientRealGridShape\":[],\"copyColumn\":[],\"spinCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"lgCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"attachCoin\":{\"low\":0,\"high\":0,\"unsigned\":true}}},\"type\":2,\"wildNum\":0,\"winStreakNum\":0,\"eachSumSpinCoin\":{\"low\":0,\"high\":0,\"unsigned\":true},\"gameId\":0,\"isAuthoritiesRate\":true,\"elemCount\":0,\"triggerTimes\":0,\"triggerSumTimes\":0,\"nowResultRate\":1}},\"roundId\":{\"low\":0,\"high\":0,\"unsigned\":true},\"resultRate\":1,\"rollerLv\":1,\"spinReqParam\":{\"assginLine\":[],\"extra\":[],\"lines\":1,\"cost\":{\"low\":20,\"high\":0,\"unsigned\":true},\"rate\":30,\"rateModulus\":100,\"lineMultiple\":1},\"doubleCoin\":{\"curBase\":{\"low\":600,\"high\":0,\"unsigned\":true},\"nextReward\":{\"low\":1164,\"high\":0,\"unsigned\":true}},\"isSettled\":1}`;
    let e = deserializeWithLong(dd) as protoSlot.spinResp;

    e.nextState.freeData.sumTimes = gameEnd.nTotalFreeCount.value;
    e.nextState.freeData.times = gameEnd.nFreeCount.value;
    e.nextState.freeData.ratio = gameEnd.nAwardMultply.value;

    e = normalSpinResp(gameEnd, e);
    return e;
}

// 免费旋转的数据覆盖
function freeSpineResp(gameEnd) {
    let dd = `{"updateList":[{"type":25,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":24,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"sumTimes":12}},{"type":23,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"triggerSpinTypeTimes":0}},{"type":22,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"sumLgCoin":{"low":0,"high":0,"unsigned":true}}},{"type":20,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":19,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"elemCount":1}},{"type":18,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"triggerLgNum":0}},{"type":17,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":16,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"isAuthoritiesRate":true}},{"type":15,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"gameId":0}},{"type":14,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"sumSpinCoin":{"low":0,"high":0,"unsigned":true}}},{"type":13,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"winStreakNum":0}},{"type":12,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":11,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":10,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":9,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":8,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"wildNum":0}},{"type":5,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":4,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":3,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"ratio":2}},{"type":2,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"times":11}}],"extra":[111,154,143,185,197],"randomElemPos":[],"triggerElemPos":[],"posRateList":[],"key":[],"userId":{"low":-1030778879,"high":42140804,"unsigned":false},"state":2,"subState":1,"spinResult":{"lineResult":[],"grid":[6,5,2,6,6,3,4,7,4,9,2,3,5,7,7],"gridChanged":[6,5,2,6,6,3,4,7,4,9,2,3,5,7,7],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":0,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}},"balance":{"low":201040,"high":0,"unsigned":true},"allCost":{"low":600,"high":0,"unsigned":true},"roundId":{"low":0,"high":0,"unsigned":true},"resultRate":1,"rollerLv":1,"spinReqParam":{"assginLine":[],"extra":[],"lines":1,"cost":{"low":20,"high":0,"unsigned":true},"rate":30,"rateModulus":100,"lineMultiple":1},"isSettled":1}`;
    let e = deserializeWithLong(dd) as protoSlot.spinResp;
    e = normalSpinResp(gameEnd, e);

    e.updateList[20].value.times = gameEnd.nFreeCount.value;
    e.updateList[19].value.ratio = gameEnd.nWildComboMult.value;
    e.updateList[16].value.wildNum = gameEnd.nCurWildCount.value;

    return e;
}

// 最后一次的免费旋转数据覆盖
function lastFreeSpineResp(gameEnd) {
    let dd = `{"updateList":[{"type":25,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":24,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"sumTimes":12}},{"type":23,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"triggerSpinTypeTimes":0}},{"type":22,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"sumLgCoin":{"low":0,"high":0,"unsigned":true}}},{"type":20,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":19,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"elemCount":0}},{"type":18,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"triggerLgNum":0}},{"type":17,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":16,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"isAuthoritiesRate":true}},{"type":15,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"gameId":0}},{"type":14,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"sumSpinCoin":{"low":67840,"high":0,"unsigned":true}}},{"type":13,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"winStreakNum":5}},{"type":12,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":11,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":10,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":9,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":8,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"wildNum":0}},{"type":5,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":4,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[]}},{"type":3,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"ratio":10}},{"type":2,"value":{"elemFix":[],"wild":[],"scatter":[],"elemExpand":[],"diffusion":[],"lock":[],"random":[],"posRateList":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"randomElemRateAddition":[],"times":0}}],"extra":[127,128,172,157,172],"randomElemPos":[],"triggerElemPos":[],"posRateList":[],"key":[],"userId":{"low":-1030778879,"high":42140804,"unsigned":false},"state":2,"subState":1,"spinResult":{"lineResult":[{"lgList":[],"winPos":[1,4,6,7,8,9,10],"lineId":1,"lineMode":1,"lineType":14,"spinCoin":{"low":9600,"high":0,"unsigned":true},"dir":1,"elementResult":{"elemList":[{"elem":1,"elemNum":4},{"elem":9,"elemNum":3}],"elem":1},"extraRate":1,"elementRate":6},{"lgList":[],"winPos":[2,6,8,10,14],"lineId":2,"lineMode":1,"lineType":14,"spinCoin":{"low":6000,"high":0,"unsigned":true},"dir":1,"elementResult":{"elemList":[{"elem":3,"elemNum":5},{"elem":9,"elemNum":3}],"elem":3},"extraRate":1,"elementRate":1},{"lgList":[],"winPos":[3,6,8,10,15],"lineId":3,"lineMode":1,"lineType":14,"spinCoin":{"low":6000,"high":0,"unsigned":true},"dir":1,"elementResult":{"elemList":[{"elem":4,"elemNum":5},{"elem":9,"elemNum":3}],"elem":4},"extraRate":1,"elementRate":1}],"grid":[1,3,4,1,2,9,1,9,1,9,7,8,8,3,4],"gridChanged":[1,3,4,1,2,9,1,9,1,9,7,8,8,3,4],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":21600,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}},"balance":{"low":268880,"high":0,"unsigned":true},"allCost":{"low":600,"high":0,"unsigned":true},"nextState":{"state":1,"normalData":{"randomElemPos":[],"wild":[],"spinInfo":{"spinParam":{"lineList":[1],"lineCost":{"low":20,"high":0,"unsigned":true},"lineRate":30,"rateModulus":100,"lineMultiple":1},"spinResult":{"lineResult":[{"lgList":[],"winPos":[1,4,6,7,8,9,10],"lineId":1,"lineMode":1,"lineType":14,"spinCoin":{"low":9600,"high":0,"unsigned":true},"dir":1,"elementResult":{"elemList":[{"elem":1,"elemNum":4},{"elem":9,"elemNum":3}],"elem":1},"extraRate":1,"elementRate":6},{"lgList":[],"winPos":[2,6,8,10,14],"lineId":2,"lineMode":1,"lineType":14,"spinCoin":{"low":6000,"high":0,"unsigned":true},"dir":1,"elementResult":{"elemList":[{"elem":3,"elemNum":5},{"elem":9,"elemNum":3}],"elem":3},"extraRate":1,"elementRate":1},{"lgList":[],"winPos":[3,6,8,10,15],"lineId":3,"lineMode":1,"lineType":14,"spinCoin":{"low":6000,"high":0,"unsigned":true},"dir":1,"elementResult":{"elemList":[{"elem":4,"elemNum":5},{"elem":9,"elemNum":3}],"elem":4},"extraRate":1,"elementRate":1}],"grid":[1,3,4,1,2,9,1,9,1,9,7,8,8,3,4],"gridChanged":[1,3,4,1,2,9,1,9,1,9,7,8,8,3,4],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":21600,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}}},"sumSpinCoin":{"low":67840,"high":0,"unsigned":true},"sumLgCoin":{"low":0,"high":0,"unsigned":true},"spinTypeTag":1,"triggerFreeSpinCoin":{"low":1360,"high":0,"unsigned":true},"isNewer":1}},"roundId":{"low":0,"high":0,"unsigned":true},"resultRate":1,"rollerLv":1,"spinReqParam":{"assginLine":[],"extra":[],"lines":1,"cost":{"low":20,"high":0,"unsigned":true},"rate":30,"rateModulus":100,"lineMultiple":1},"isSettled":1}`;
    let e = deserializeWithLong(dd) as protoSlot.spinResp;
    e = normalSpinResp(gameEnd, e);

    e.nextState.normalData.sumSpinCoin = Long.fromNumber(gameEnd.lFreeTotalAwardGold.value);
    return e;
}



function normalRestore(sceneCmd, e = null) {
    if (e == null) {
        let dd = `{\"restore\":[{\"winningAnimationConditions\":[{\"winType\":1,\"winRate\":35},{\"winType\":2,\"winRate\":15},{\"winType\":3,\"winRate\":5},{\"winType\":4,\"winRate\":0}],\"autoSpinTimes\":[10,30,50,80,1000],\"lineValue\":[{\"_isLong\":true,\"low\":2,\"high\":0,\"unsigned\":false},{\"_isLong\":true,\"low\":20,\"high\":0,\"unsigned\":false}],\"userInfo\":{\"userId\":{\"_isLong\":true,\"low\":469725185,\"high\":42139755,\"unsigned\":false},\"userName\":\"***665\",\"avatar\":1,\"lv\":1,\"balance\":{\"_isLong\":true,\"low\":200000,\"high\":0,\"unsigned\":true},\"isNewer\":0,\"coinType\":3},\"state\":{\"state\":1,\"normalData\":{\"randomElemPos\":[],\"wild\":[],\"spinInfo\":{\"spinParam\":{\"lineList\":[1],\"lineCost\":{\"_isLong\":true,\"low\":2,\"high\":0,\"unsigned\":true},\"lineRate\":30,\"rateModulus\":100,\"lineMultiple\":1},\"spinResult\":{\"lineResult\":[],\"grid\":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],\"gridChanged\":[8,10,5,6,7,7,9,1,3,2,2,4,3,7,4],\"realGridShape\":[],\"realGridShapeChanged\":[],\"occupyPosList\":[],\"occupyPosListChanged\":[],\"clientRealGridShape\":[],\"copyColumn\":[],\"spinCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"lgCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"attachCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true}}},\"sumSpinCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"sumLgCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"spinTypeTag\":1,\"triggerFreeSpinCoin\":{\"_isLong\":true,\"low\":0,\"high\":0,\"unsigned\":true},\"isNewer\":0}},\"betStateType\":{\"betState\":0,\"betRate\":100}}],\"spinCfg\":[],\"rollerLv\":1,\"gameMode\":1,\"ciphertext\":\"\",\"hashRest\":0}`;
        e = deserializeWithLong(dd) as protoSlot.restoreResp;
    }

    let grid = flattenArrayByColumns(sceneCmd.nIconAreaDistri);
    grid = grid.map(v => v.value);
    grid.forEach((v, k) => {
        if (v <= 0) grid[k] = 1;
        if (v > 10) grid[k] = 10;
    });

    let lineRes = sceneCmd.olconAwardInfo.filter(v => v.nIconType.value > 0);
    let lineResult = [];
    lineRes.forEach((v, k) => {
        let res = new protoSlot.spinResultType.lineResultType();
        res.dir = 1;
        res.elementRate = 1;
        res.extraRate = 1;
        res.lineId = 1;
        res.lineType = 14;
        let winPos = [];
        v.nIconAwardPos.forEach((element, kk) => {
            let pos = element.value;
            let row = Math.floor(pos / 5); //AREA_COL==5
            let col = pos % 5;
            let index = col * 3 + row + 1;
            if (pos > 0 || kk == 0) {
                winPos.push(index);
            }
        });

        res.winPos = winPos;
        res.elementResult = new protoSlot.spinResultType.lineResultType.elemResultType();
        res.elementResult.elem = v.nIconType.value;
        res.elementResult.elemList.push({ elem: v.nIconType.value, elemNum: v.nLen.value });
        res.spinCoin = Long.fromNumber(v.lAwardGold.value * 100);
        lineResult.push(res);
    });
    e.restore[0].state.normalData.spinInfo.spinResult.lineResult = lineResult;
    e.restore[0].state.normalData.spinInfo.spinResult.spinCoin = Long.fromNumber(sceneCmd.lAwardGold.value / 1000 * 100);

    e.restore[0].state.normalData.spinInfo.spinResult.grid = grid;
    e.restore[0].state.normalData.spinInfo.spinResult.gridChanged = grid;
    e.restore[0].userInfo.balance = Long.fromNumber(sceneCmd.llUserTotalScore.value / 1000);

    return e;
}


function freeRestore(sceneCmd) {
    let dd = `{"restore":[{"winningAnimationConditions":[{"winType":1,"winRate":35},{"winType":2,"winRate":15},{"winType":3,"winRate":5},{"winType":4,"winRate":0}],"autoSpinTimes":[10,30,50,80,1000],"lineValue":[{"low":1,"high":0,"unsigned":false},{"low":4,"high":0,"unsigned":false},{"low":20,"high":0,"unsigned":false}],"userInfo":{"userId":{"low":-1806618623,"high":42140824,"unsigned":false},"userName":"180993463394840577","avatar":1,"lv":2,"balance":{"low":196700,"high":0,"unsigned":true},"isNewer":0,"coinType":3},"state":{"state":2,"normalData":{"randomElemPos":[],"wild":[],"spinInfo":{"spinParam":{"lineList":[1],"lineCost":{"low":20,"high":0,"unsigned":true},"lineRate":30,"rateModulus":100,"lineMultiple":1},"spinResult":{"lineResult":[{"lgList":[{"low":-1784271787,"high":2,"unsigned":true}],"winPos":[1,6,14],"lineId":0,"lineMode":2,"lineType":5,"spinCoin":{"low":0,"high":0,"unsigned":true},"dir":1,"elementResult":{"elemList":[{"elem":10,"elemNum":3}],"elem":10},"extraRate":1,"elementRate":1}],"grid":[10,2,6,5,8,10,7,1,6,4,1,2,4,10,2],"gridChanged":[10,2,6,5,8,10,7,1,6,4,1,2,4,10,2],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":0,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}}},"sumSpinCoin":{"low":0,"high":0,"unsigned":true},"sumLgCoin":{"low":0,"high":0,"unsigned":true},"spinTypeTag":1,"triggerFreeSpinCoin":{"low":0,"high":0,"unsigned":true},"isNewer":1},"freeData":{"wild":[],"scatter":[],"elemFixPos":[],"elemExpand":[],"random":[],"lgHistory":[],"randomElemPos":[],"accFixGridList":[],"elemTran":[],"rollerDelElem":[],"allFreeSpinTimes":[],"lock":[],"randomElemRateAddition":[],"id":1,"times":12,"sumTimes":12,"ratio":2,"sumSpinCoin":{"low":0,"high":0,"unsigned":true},"sumLgCoin":{"low":0,"high":0,"unsigned":true},"spinInfo":{"spinParam":{"lineList":[1],"lineCost":{"low":20,"high":0,"unsigned":true},"lineRate":30,"rateModulus":100,"lineMultiple":1},"spinResult":{"lineResult":[],"grid":[10,2,6,5,8,10,7,1,6,4,1,2,4,10,2],"gridChanged":[10,2,6,5,8,10,7,1,6,4,1,2,4,10,2],"realGridShape":[],"realGridShapeChanged":[],"occupyPosList":[],"occupyPosListChanged":[],"clientRealGridShape":[],"copyColumn":[],"spinCoin":{"low":0,"high":0,"unsigned":true},"lgCoin":{"low":0,"high":0,"unsigned":true},"attachCoin":{"low":0,"high":0,"unsigned":true}}},"type":2,"wildNum":0,"winStreakNum":0,"eachSumSpinCoin":{"low":0,"high":0,"unsigned":true},"gameId":0,"isAuthoritiesRate":true,"elemCount":0,"triggerTimes":0,"triggerSumTimes":0,"nowResultRate":1}},"betStateType":{"betState":0,"betRate":100}}],"spinCfg":[],"roundId":{"low":0,"high":0,"unsigned":true},"rollerLv":1,"gameMode":1,"ciphertext":"","hashRest":0}`;
    let e = deserializeWithLong(dd) as protoSlot.restoreResp;

    e = normalRestore(sceneCmd, e);

    e.restore[0].state.freeData.ratio = sceneCmd.nWildComboMult.value;
    e.restore[0].state.freeData.sumTimes = sceneCmd.nTotalFreeCount.value;
    e.restore[0].state.freeData.times = sceneCmd.nFreeCount.value;

    e.restore[0].state.freeData.spinInfo.spinResult.grid = e.restore[0].state.normalData.spinInfo.spinResult.grid;
    e.restore[0].state.freeData.spinInfo.spinResult.gridChanged = e.restore[0].state.normalData.spinInfo.spinResult.gridChanged;

    e.restore[0].state.freeData.wildNum = sceneCmd.nCurWildCount.value;


    return e;
}