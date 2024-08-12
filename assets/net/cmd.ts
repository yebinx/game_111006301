

import { BaseCommand } from "./BaseCommand";
import { STRING } from "./TypeDefine";
import def = require("./TypeDefine");

export enum MainCmd {
    MDM_KN_COMMAND = 0,
}

export enum RoomMainCmd {
    MDM_GF_GAME = 100,   // 游戏消息
    MDM_GF_FRAME = 101,   // 框架消息
}

export enum RoomSubCmd {
    SUB_C_START = 2,        // 开始游戏

    SUB_S_GAME_END = 102,    // 游戏结束(旋转结果)
    SUB_S_GAME_ERR = 103,    // 错误消息
}


export enum SceneSubCmd {
    //游戏配置
    SUB_GF_OPTION = 100,
    //场景信息
    SUB_GF_SCENE = 101,
    //游戏配置 小游戏登录 购买免费剩余次数或者断线重连也会下发
    SUB_GF_BUY_FREE_INFO = 102,
    //新增的线配置
    SUB_GF_SINGLEBET_INFO = 103,
    //用户聊天
    SUB_GF_USER_CHAT = 200,
}



export var KN_CMD = {
    MDM_KN_COMMAND: 0,  //内核命令
    SUB_KN_DETECT_SOCKET: 1,
    SUB_KN_XORKEY_REQ: 2,
    SUB_KN_CLIENT_DETECT: 4, //检测命令(客户端主动发的,服务器只回应)
    MDM_SOCKET_COMMAND: 66,
    SUB_SOCKET_TOKEN_REQ: 1,
    SUB_SOCKET_TOKEN_RES: 2,
    SUB_SOCKET_VERIFY_REQ: 3,
    SUB_SOCKET_VERIFY_RES: 4,
};

export var gameDaZhan = {
    LOGIN_KEY_LEN: 128,
    PASS_LEN: 33,
    MACHINE_LEN: 33,
    IPADDRESS_LEN: 48,
}

export var gameFramework = {
    INVALID_TABLE: 65535,
    INVALID_CHAIR: 65535,
}



export var KN_COMMAND = {
    CMD_TokenRes: function () {
        this.Token = new STRING(16);//token
    },
    CMD_MD5: function () {
        this.MD5 = new STRING(33);//token
    },
};

(function () {
    var keys = Object.keys(KN_COMMAND);
    for (var i = 0, len = keys.length; i < len; ++i) {
        if (typeof KN_COMMAND[keys[i]] === "function") {
            var cF = KN_COMMAND[keys[i]];
            cF.prototype = new BaseCommand();
            cF.prototype.constructor = cF;
            cF.prototype.size = (new cF()).size();
        }
    }
})();


//账号登录游戏 
export var roomCmd = {
    //游戏信息
    SUB_GF_INFO: 1,
    //用户同意
    SUB_GF_USER_READY: 2,
    //旁观控制
    SUB_GF_LOOKON_CONTROL: 3,
    //踢走用户
    SUB_GF_KICK_TABLE_USER: 4,

    MDM_GR_LOGON: 1,
    //航户登录
    SUB_GR_LOGON_ACCOUNTS: 1,
    //ID 登录
    SUB_GR_LOGON_USERID: 2,
    SUB_GR_RELOGON_USERID: 3,//I D 重登录
    //登陆成功
    SUB_GR_LOGON_SUCCESS: 100,
    //登陆失败
    SUB_GR_LOGON_ERROR: 101,
    //登陆完成
    SUB_GR_LOGON_FINISH: 102,

    //房间用户信息
    MDM_GR_USER: 2,

    //坐下请求
    SUB_GR_USER_SIT_REQ: 1,

    //用户进入
    SUB_GR_USER_COME: 100,
    //用户状态
    SUB_GR_USER_STATUS: 101,

    //彩金
    MDM_GR_TIGER: 15,
    SUB_GR_JACKPOT_REQ: 1,
    SUB_GR_JACKPOT_RES: 101,

    CMD_GR_LogonByTPAccount: function () {
        //广场版本
        this.dwPlazaVersion = new def.DWORD();
        //进程版本
        this.dwProcessVersion = new def.DWORD();
        //游戏等级积分版本
        this.wGLVerScore = new def.WORD();
        //游戏财富版本
        this.wGLVerGold = new def.WORD();
        //登录账号
        this.szTPAccount = new def.STRING(gameDaZhan.LOGIN_KEY_LEN);
        //登录密码
        this.szPassWord = new def.STRING(gameDaZhan.PASS_LEN)
        //设置唯一标识码
        this.szDeviceId = new def.STRING(gameDaZhan.PASS_LEN)
        //游戏类型
        this.gmtype = new def.WORD();
        //登录类型
        this.lgtype = new def.WORD();
        //登录节拍 当前的GetTickCount值,或者随机自增的整型值
        this.clock = new def.DWORD();
        //线路ID
        this.iISPID = new def.WORD();
        //运营商的独有代码
        this.iOperatoerID = new def.DWORD();
        //会话ID
        this.ulSessionID = new def.UINI64();
        //机器码
        this.szMac = new def.STRING(gameDaZhan.MACHINE_LEN)
        //ip地址-支持IPv6
        this.szIps = new def.STRING(gameDaZhan.IPADDRESS_LEN)
    },

    CMD_GR_UserSitReqNoPass: function () {
        //桌子位置
        this.wTableID = new def.WORD();
        //椅子位置
        this.wChairID = new def.WORD();
        //网络延时
        this.wNetTimelag = new def.WORD();
        //密码长度
        this.bPassLen = new def.BYTE();
    },

    CMD_GF_Info: function () {
        //旁观标志
        this.bAllowLookon = new def.BYTE();
        this.nTotalBet = new def.LONGLONG();//初始总下注
    },
    CMD_GP_JackPot: function () {
        this.nUserId = new def.INT();
    },

};


(function () {
    var keys = Object.keys(roomCmd);
    for (var i = 0, len = keys.length; i < len; ++i) {
        if (typeof roomCmd[keys[i]] === "function") {
            var cF = roomCmd[keys[i]];
            cF.prototype = new BaseCommand();
            cF.prototype.constructor = cF;
            cF.prototype.size = (new cF()).size();
        }
    }
})();

export var mssCmd = {
    SUB_C_START: 2,

    COL: 5, //5列
    ROW: 3, //每列4个图标

    //服务端下来数据
    AREA_LINE: 3,
    AREA_ROW: 5,

    NAME_LEN: 32,

    //线数
    nCurXianShu: 30,

    NodeInfo: function () {
        this.nIconType = new def.INT();
        this.lAwardGold = new def.LONGLONG();
        this.nLen = new def.INT();
        // this.nIconAwardPos = def.createTypeArray(mssCmd.AREA_ROW, def.INT);
        this.nIconAwardPos = def.createTypeArray(15, def.INT);
    },
    NodeTypeInfo:function(){
        this.iType = new def.BYTE(); //图标类型
        this.isGold = new def.BYTE(); //百搭数量
        this.nMaxColCount = new def.BYTE();//图标占最大列数
        this.nRow = new def.BYTE();//行
        this.nCol = new def.BYTE();//列
        this.isRemove = new def.BYTE(); //1 表示删除 4 表示投掷变成金百搭 3 变成金百搭 3 变成百搭
        this.isAdd = new def.BYTE(); //是否是新加图标
    },

    CMD_C_GAME_START: function () {
        ////每注值
        this.nBet = new def.DWORD();
    },
    CMD_S_GameEnd: function () {

        this.lAwardGold = new def.LONGLONG(); //当前轮分
        this.lUserTotalScore = new def.LONGLONG();       //用户金额
        this.nAwardMultply = new def.INT();      //当前轮倍数
        this.nFreeCount = new def.INT();   //当前剩余几次免费
        this.nTotalFreeCount = new def.INT();    //总共多少次免费
        this.nCurRoundFreeCount = new def.INT();   //本轮触发几次免费

        this.nCurWildCount = new def.INT();    //本轮Wild数量
        this.nTotalWildCount = new def.INT();   //总Wild数量
        this.nWildComboMult = new def.INT();    //免费期间Wild翻倍
        this.nFreeComboMult = new def.INT();     //免费期间连续翻倍
        this.lNormalTotalAwardGold = new def.LONGLONG();   //一次押注总共获得金币

        this.nIconAreaDistri = def.create2DTypeArray(mssCmd.AREA_LINE, mssCmd.AREA_ROW, def.BYTE);    //本轮图标
        // this.nIconAwardPos = def.create2DTypeArray(mssCmd.AREA_LINE, mssCmd.AREA_ROW, def.BYTE);     //中奖位置

        this.uCurScene = new def.BYTE();   //当前场景  
        this.uNextScene = new def.BYTE();   //下一个场景   //0 TGS_NORMAL  TGS_FREE  1
        this.bCostGold = new def.BYTE();   //是否扣押注  1扣 0 不扣

        this.olconAwardInfo = def.createTypeArray(11, mssCmd.NodeInfo);
        this.lFreeTotalAwardGold = new def.LONGLONG();  //免费期间总获得金币
    },
    CMD_S_GameStatus: function () {
        this.llUserTotalScore = new def.LONGLONG();       //用户金额
        this.nCurBaseScore = new def.INT(); //当前筹码==单线额度*30

        this.lAwardGold = new def.LONGLONG(); //当前轮分
        this.nAwardMultply = new def.INT(); //当前轮倍数
        this.nFreeCount = new def.INT();   //当前剩余几次免费
        this.nTotalFreeCount = new def.INT();    //总共多少次免费
        this.nCurRoundFreeCount = new def.INT();   //本轮触发几次免费

        this.nCurWildCount = new def.INT();    //本轮Wild数量
        this.nTotalWildCount = new def.INT();   //总Wild数量
        this.nWildComboMult = new def.INT();    //免费期间Wild翻倍
        this.nFreeComboMult = new def.INT();     //免费期间连续翻倍
        this.lNormalTotalAwardGold = new def.LONGLONG();   //一次押注总共获得金币

        this.nIconAreaDistri = def.create2DTypeArray(mssCmd.AREA_LINE, mssCmd.AREA_ROW, def.BYTE);    //本轮图标

        this.uCurScene = new def.BYTE();   //当前场景  
        this.uNextScene = new def.BYTE();   //下一个场景   //0 TGS_NORMAL  TGS_FREE  1

        this.olconAwardInfo = def.createTypeArray(11, mssCmd.NodeInfo);
        this.lFreeTotalAwardGold = new def.LONGLONG();
    }


};

(function () {
    var keys = Object.keys(mssCmd);
    for (var i = 0, len = keys.length; i < len; ++i) {
        if (typeof mssCmd[keys[i]] === "function") {
            var cF = mssCmd[keys[i]];
            cF.prototype = new BaseCommand();
            cF.prototype.constructor = cF;
            cF.prototype.size = (new cF()).size();
        }
    }
})();