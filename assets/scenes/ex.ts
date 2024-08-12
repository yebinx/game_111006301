import { isTest } from "./test";



let language = "";
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == "language") {
        language = pair[1];
    }
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
        if (value && value._isLong) {
            return Long.fromBits(value.low, value.high, value.unsigned);
        }
        return value;
    });
    return data;
}



if (!isTest) {
    if (language == "") {
        let newUrl = window.location.origin + window.location.pathname + `?game_id=MTExMDA2MzAx&api_game=aHR0cHM6Ly9hcGktZ2FtZS5uaXVicHJvLmNvbQ==&api_game_token=R0FNRUFQSSAxOmV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpTWlhFaU9uc2laR1ZoYkdWeVgybGtJam94TENKaFoyVnVZM2xmYVdRaU9qRXhMQ0poWjJWdWRGOXBaQ0k2TVRRc0luQnNZWGxsY2w5cFpDSTZNU3dpYkdGMWJtTm9YM0psY1NJNmV5SnBjMTltY21WbElqcDBjblZsTENKMGFHbHlaRjl1WVcxbElqb2lNQ0lzSW1kaGJXVmZhV1FpT2pFeE1UQXdOak13TVN3aWJHRnVaM1ZoWjJVaU9pSjBkeUlzSW1GblpXNTBYMmxrSWpveE5Dd2ljbVYwZFhKdVgzVnliQ0k2SWlJc0luUmxjbTFwYm1Gc0lqb2lJaXdpWlhoMGNtRWlPbnNpYzNWdFgzSmxZMmhoY21kbElqcDdmU3dpYzNWdFgzZHBkR2hrY21GM0lqcDdmU3dpYm1samExOXVZVzFsSWpvaUlpd2lZWFpoZEdGeUlqb2lJaXdpZFhObFgyTnZhVzVmZEhsd1pTSTZJa0pTVENJc0luSmxZMmhoY21kbFgzUnBiV1Z6SWpvd2ZTd2ljMjRpT2pFeExDSnNZWFZ1WTJoZmNHRnlZVzF6SWpwN0ltRndjRjluWVcxbFgybGtJam9pTVRFeE1EQTJNekF4SWl3aWFYTmZibVYzWDNKdmIyMGlPaUlpTENKeWIyOXRWSGx3WlNJNklqQWlmU3dpY21WamFHRnlaMlZmZFhKc0lqb2lJaXdpYVhOZmRtbGtaVzhpT2pCOUxDSm1hWEp6ZEY5d1lYSmxiblJmYVdRaU9qQjlMQ0poZFdRaU9pSXhJaXdpWlhod0lqb3hOekU0TXpNMU9UZ3hMQ0pxZEdraU9pSmhNell5T0RSa1ppMWlZek5sTFRSbFpXTXRZVFl5TmkwMk1qYzVOMlpqWVRjNE1ESWlMQ0pwWVhRaU9qRTNNVGd5TkRrMU9ERXNJbWx6Y3lJNkluQnNZWFJtYjNKdExuTnlkbDloWkcxcGJpNTZiMjVsTUNJc0ltNWlaaUk2TVRjeE9ESTBPVFU0TVN3aWMzVmlJam9pUjBGTlJVRlFTU0o5LnhMUzlnRXRnSjRDUXVUZVhSQ295aFR0bGNGZUR4OTVHYlpkWnBKc1pMQVk=&language=tw&app_game_id=111006301&is_new_room=&roomType=0&language=tw&lobby_web=100&lobby_url=YXBpLmJlc3Q2NjYudG9w&app_token=&app_version=MS4yNC43&app_deviceId=`;
        window.history.replaceState(null, null, newUrl);
    }


    //@ts-ignore
    // core.CommonProto.prototype.loginResp = function (e, t) {

    //     let o = core.ProtocolHelper.buffDecode(protoCommon.loginResp, e);
    //     let dd = deepCopyWithoutPrototype(o);
    //     let ddd = serializeWithLong(dd);

    //     this.userinfo = o.userInfo
    //     this.reconnectToken = o.reconnectToken
    //     this.isNormal = o.isNormal
    //     this.coinRate = this.userinfo.coinRate
    //     this.isReconnect = o.isReconnect
    //     game.zLog.info("login resp : ", o)
    //     core.DataCollectionMgr.instance.sendLoginData()
    //     game.EventManager.getInstance().raiseEvent(core.GameCoreConst.mess_loginSucc)
    //     this.enterGameReq()

    // }


    //@ts-ignore
    // core.CommonProto.prototype.enterGameResp = function (t, o) {

    //     game.LogManager.getInstance().log("\u6210\u529f\u8fdb\u5165\u6e38\u620fID", core.Global.gameId);

    //     let l = core.ProtocolHelper.buffDecode(protoCommon.enterGameResp, t);
    //     let d = deepCopyWithoutPrototype(l);
    //     let dd = serializeWithLong(d);


    //     this.gameSwitch = l.switch
    //     this.resultEnterGame = l
    //     this.infriendRoom = l.isInFriendRoom
    //     this.friendRoomId = l.roomId
    //     this.userinfo.scores = l.scores
    //     game.EventManager.getInstance().raiseEvent(core.GameCoreConst.mess_enterGameSucc, l)
    //     "slot" == core.Global.gameType && (this.infriendRoom && 0 !== this.friendRoomId ? this.joinFriendRoomReq(this.friendRoomId) : this.enterRoomReq(0, 0))
    // }


    //@ts-ignore
    // core.CommonProto.prototype.enterRoomResp = function (e, t) {


    //     let o = core.ProtocolHelper.buffDecode(protoCommon.enterRoomResp, e);
    //     let d = deepCopyWithoutPrototype(o);
    //     let dd = serializeWithLong(d);

    //     game.LogManager.getInstance().log("\u8fdb\u5165\u623f\u95f4\u6210\u529f");
    //     this.infriendRoom = !1
    //     game.EventManager.getInstance().raiseEvent(core.GameCoreConst.mess_netEnterRoom, o, t, this.isReconnect)

    // }

    //@ts-ignore
    // core.CommonProto.prototype.createFriendRoomResp = function (e, t) {
    //     console.log("createFriendRoomResp", e, t);
    // }


    //@ts-ignore
    slot.SlotProtoManager.prototype.restoreResp = function (data: any): void {

        let result = core.ProtocolHelper.buffDecode(protoSlot.restoreResp, data) as protoSlot.restoreResp;
        let d = deepCopyWithoutPrototype(result);
        let ddd = serializeWithLong(d);
        console.log(ddd);
        this.restoreResult = result;
        this.canReqSpin = true;
        game.LogManager.getInstance().log("resoreResp all", result);
        this.handleHashChainInfo(result);

        let myRestore: protoSlot.restoreType;
        for (let index = 0; index < result.restore.length; index++) {
            const r = result.restore[index] as protoSlot.restoreType;
            if ((r.userInfo.userId as Long).toString() == (slot.PlayerManager.instance.userInfo.userId as Long).toString()) {
                myRestore = r;
                slot.SpinManager.instance.isSpinResp = true;
            } else {

            }
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
    slot.SlotProtoManager.prototype.spinResp = function (e: any): void {
        this.canReqSpin = !0;
        var t = core.ProtocolHelper.buffDecode(protoSlot.spinResp, e);
        let d = deepCopyWithoutPrototype(t);
        let ddd = serializeWithLong(d);
        this.requestLastGameInfo();
        console.log("dddddd", ddd);
        if (t.nextState && t.nextState.state == slot.OperationState.Free) {
            console.log(t);
            // this.requestLastGameInfo();
        }
        if (t.state == slot.OperationState.Free) {
            console.log(t);
            // this.requestLastGameInfo();
        }

        t.userId.toString() == slot.PlayerManager.instance.userInfo.userId.toString() && (game.LogManager.getInstance().log("spinResp", t), this.fixSpinRespData(t), t.hashRest > 0 && this.handleHashChainInfo(t), game.EventManager.getInstance().raiseEvent(slot.NetSlotConst.SPINRESP, t), slot.SpinManager.instance.isSpinResp = !0, t.doubleCoin ? slot.SpinManager.instance.doubleCoin = t.doubleCoin : slot.SpinManager.instance.doubleCoin = null, this.clearCheckSchedule(this.spinRespCheckScheduleKey))

    }


    //@ts-ignore
    // slot.SpinManager.prototype._requestSpin = function () {
    //     let req: protoSlot.spinReq = <protoSlot.spinReq>{};
    //     let reqType: protoSlot.spinReqType = <protoSlot.spinReqType>{};
    //     reqType.lines = this.lineNum;
    //     reqType.cost = this.getLineCostByIndex();
    //     reqType.rate = this.getRealLineRate();
    //     reqType.rateModulus = this.rateModulus;
    //     reqType.assginLine = this.assginLine;
    //     reqType.lineMultiple = this.getLinelMutiple();
    //     if (this._extra != null)
    //         reqType.extra = this._extra;
    //     let data = { req: reqType };
    //     req.req = reqType;

    //     slot.SlotProtoManager.getInstance().requestSpinFreely(data);

    //     this.isSpinResp = false;
    //     // 通知滚轴开始滚动
    //     game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_START_ROLLING);
    //     game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_MENBTS_SETSTATE, { state: false, num: 1 });

    //     this.betCost = null
    // }


    // game.NetNode.prototype.send = function (e, t, n) {
    //     return void 0 === t && (t = !1), void 0 === n && (n = !1), this._state == game.NetNodeState.Working || n ? this._socket.send(e) : this._state == game.NetNodeState.Checking || this._state == game.NetNodeState.Connecting ? (this._requests.push({
    //         resend: t,
    //         buffer: e,
    //         rqestCmd: 0,
    //         rspCmd: 0,
    //         rspObject: null
    //     }), game.LogManager.getInstance().console("NetNode socket is busy, push to send buffer, current state is " + this._state), !0) : (console.error("NetNode request error! current state is " + this._state), !1)
    // }


    // game.NetNode.prototype.request = function (e, t, n, s, r, a) {

    //     void 0 === s && (s = !1), void 0 === r && (r = !0), void 0 === a && (a = !1), (this._state == game.NetNodeState.Working || a) && this._socket.send(e);
    //     var c = this.responCmdTransform(t),
    //         u = this.requestCmdTransform(t);
    //     this._requests.push({
    //         resend: s,
    //         buffer: e,
    //         rqestCmd: u,
    //         rspCmd: c,
    //         rspObject: n
    //     }), r && this.updateNetTips(game.NetTipsType.Requesting, !0)
    // }

}