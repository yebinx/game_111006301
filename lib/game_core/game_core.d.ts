declare namespace core {
    export interface LevelDataClass {
        data: {
            expRange: number[];
            needExp: number;
            userLevel: number;
        }[];
        ids: number[];
        keys: number[];
    }
    export interface FundRewardDataClass {
        data: {
            level: number;
            levelReward: number;
            fundRewardDiamond: number;
            fundRewardGold: number;
            fundRewardSilver: number;
        }[];
        ids: number[];
        keys: number[];
    }
    export interface TrialGuideClass {
        data: {
            gameType: number;
            condition: number;
            conditionMin: number;
            conditionMax: number;
            form: number;
            randomRatio: number[];
            content: string;
        }[];
        ids: string[];
        keys: number[];
    }
    export enum COREUIID {
        /**
         * 模态框
         */
        UI_DIALOG = 0,
        UI_DIALOG_ERROR_CODE = 1,
        /**
         * 软键盘
         */
        UI_KEYBOARD = 2,
        /**键盘 */
        UI_SOFT_KEYBOARD = 3,
        /**
         * 游戏记录
         */
        UI_GAME_RECORD = 4,
        /**
         * 记录详情
         */
        UI_RECORD_DETAIL = 5,
        /**
         * 记录详情 - 捕鱼
         */
        UI_RECORD_DETAIL_HUNTER = 6,
        /**
         * 记录详情 - 桌游
         */
        UI_RECORD_DETAIL_ARCADE = 7,
        /**
         * 记录详情 - WEB
         */
        UI_RECORD_DETAIL_WEB = 8,
        /**
         * 哈希查验帮助
         */
        UI_HASH_CHECK_HELP = 9,
        /**
         * 哈希查验帮助,创世哈希
         */
        UI_HASH_CHECK_HELP_CHAIN = 10,
        /**
        * 哈希查验
        */
        UI_HASH_CHECK = 11,
        /**
        * 哈希手动查验
        */
        UI_HASH_MANUAL_CHECK = 12,
        /**
         * 桌游币安哈希查验帮助
         */
        UI_BINANCE_HASH_CHECK_HELP = 13,
        /**
        *  桌游币安哈希查验
        */
        UI_BINANCE_HASH_CHECK = 14,
        /**
         * 桌游哈希查验中心
         */
        UI_ARCADE_HASH_CHECK = 15,
        /**
        * 桌游哈希查验中心
        */
        UI_ARCADE_HASH_MANUALCHECK = 16,
        /**
         * 桌游哈希查验中心单牌查验
         */
        UI_ARCADE_HASH_CHECK_CARD = 17,
        /**
         * 桌游哈希选择卡牌查验中心
         */
        UI_ARCADE_HASH_CHECK_SELECT_CARD = 18,
        /**
         * 桌游哈希切牌界面
         */
        UI_ARCADE_HASH_CUT_CARD = 19,
        /**
         * 哈希验证说明
         */
        UI_HASH_VERIFICATION_INSTRUCTIONS = 20,
        /**
         * 完整牌堆
         */
        UI_WHOLE_CARD_STACK = 21,
        /**
         * 当前投注界面
         */
        UI_CURRENT_BET = 22,
        /**
         * 捕猎哈希验证说明
         */
        UI_HUNTER_HASH_VERIFICATION_INSTRUCTIONS = 23,
        /**哈希链验证说明 */
        UI_HASH_CHAIN_VERIFICATION_INSTRUCTIONS = 24,
        /**coinHash 验证说明*/
        UI_COIN_HASH_VERIFICATION_INSTRUCTIONS = 25,
        UI_COIN_HASH_VERIFICATION_INSTRUCTIONS2 = 26,
        /**hiloHash 验证说明*/
        UI_HILO_HASH_VERIFICATION_INSTRUCTIONS = 27,
        /**plinko 验证说明*/
        UI_PLINKO_HASH_VERIFICATION_INSTRUCTIONS = 28,
        /**slotGameHash 验证说明*/
        UI_SLOT_GAME_HASH_VERIFICATION_INSTRUCTIONS = 29,
        /**
       * @description: mines 公平模块
       * @return {*}
       */
        UI_ARCADE_HASH_MINES = 30,
        /**破产引导提示 */
        UI_BANKKRUPTCY_TIP = 31,
        /**创建房间成功 */
        UI_CREATE_ROOM_SUCCESS = 32,
        /**
        * 打开好友房创建面板
        */
        UI_FRIEND_ROOM = 200,
        /**
        * 打开好友房输入
        */
        UI_FRIEND_INPUT = 201,
        /**
        * 打开跑马灯
        */
        UI_BANNER = 202,
        /**
        * 打开个人信息面板
        */
        UI_BASEROLE_INFO = 203,
        /**
        * 打开自己个人信息面板
        */
        UI_SELFROLE_INFO = 204,
        /**
        * 打开自己个人信息面板
        */
        UI_NO_SELFROLE_INFO = 205,
        /**
        * 头像选择面板
        */
        UI_HEAD_LIST = 206,
        /**
        * 礼物盒子
        */
        UI_REWARD_BOX = 207,
        /**
        * 等级提升
        */
        UI_LEVEL_UP = 208,
        /**
        * 礼物盒子
        */
        UI_LEVEL_REWARD_ANI = 209,
        /**
        * 等级提升
        */
        UI_FUND_REWARD_ANI = 210,
        /**
        * 打开成长基金
        */
        UI_GROWTH_FUND = 211,
        /**
        * 成长基金奖励列表
        */
        UI_GROWTH_REWARDLIST = 212,
        /**
        * 成长基金帮助
        */
        UI_GROWTH_HELP = 213,
        /**
        * 成长基金领取记录
        */
        UI_GROWTH_RECORD = 214
    }
    /**
     * 游戏品牌
     */
    export enum GAME_BRAND {
        AG = "ag",
        CQ9 = "cq9",
        JDB = "jdb",
        MG = "mg",
        PG = "pg",
        PT = "pt",
        JILI = "jili",
        PP = "pp",
        ZY = "zy"
    }
    export enum BINANCE_UIID {
        UI_BINANCE_HASH_kjtubiao = "UI_BINANCE_HASH_kjtubiao"
    }
    export const COREUICF1: {
        [key: number]: game.IUIConf;
    };
    export const COREUICF_SINGLE: {
        [key: string]: game.IUIConf;
    };
    export const ResPath: {
        banner: string;
        guide_finger: string;
        guide_text: string;
        waitPrefab: string;
    };
    export class GameCoreConst {
        static getCoreUICF(): any;
        static getSkinFolder(): string;
        static bannerCacheMax: number;
        /**
         * 跳转游戏
         * @param gameId 游戏id
         * @returns
         */
        static jumpToGame(gameId: number): void;
        /**
         * 关闭窗口
         */
        static closewin(): void;
        /**
         * 打开新窗口
         * @param url
         */
        static openWin(url: string): void;
        static touchSpace: number;
        static mess_netErrorCodePush: string;
        static mess_connectSucc: string;
        static mess_enterGameSucc: string;
        static mess_enterGameFail: string;
        static mess_loginSucc: string;
        static mess_windowResize: string;
        static mess_pageHideShow: string;
        static mess_refreshLanguage: string;
        static mess_startMatchResp: string;
        /******抢庄对战 */
        static mess_qzdzFriendRoomConfigResp: string;
        static mess_qzdzCreateFriendRoomResp: string;
        static mess_qzdzFriendRoomInfoResp: string;
        static mess_qzdzJoinFriendRoomResp: string;
        /**创房 */
        static mess_friendRoomConfigResp: string;
        static mess_keyboard: string;
        static mess_netCreateRoom: string;
        static mess_netEnterRoom: string;
        static mess_netJionRoom: string;
        static mess_netChangeRoom: string;
        static mess_netLeaveRoom: string;
        static mess_netCancelMatch: string;
        static mess_netgetUserInfoResp: string;
        static mess_netsetUserInfoResp: string;
        static mess_netgetLvAwardResp: string;
        static mess_netbuyFundResp: string;
        static mess_netgetFundAwardResp: string;
        static mess_netupdateUserInfoPush: string;
        static mess_lvAwardInfoPush: string;
        static mess_netgmResp: string;
        static mess_netkickPush: string;
        static mess_netMarqueePush: string;
        static mess_delayshow: string;
        static mess_set_delayshow: string;
        /**
         * 活动基础信息登录推送
         */
        static mess_activeInfoPush: string;
        /**
         * 活动排行奖励推送
         */
        static mess_activeRankRewardsPush: string;
        /**
         * 空投红包活动奖励推送
         */
        static mess_activeKongTouRewardPush: string;
        /**
         * 活动排行榜返回
         */
        static mess_activeRankResp: string;
        /**
         * 活动操作返回
         */
        static mess_activeOperateResp: string;
        /**
         * 兑换引导推送
         */
        static mess_netexchangeGuidePush: string;
        /**
        * 聊天推送
        */
        static mess_chatPush: string;
        static mess_openBanner: string;
        static mess_openFriend: string;
        static mess_openFriendInput: string;
        static mess_openBaseRoleInfo: string;
        static mess_selectHeadIcon: string;
        static mess_changeHeadIcon: string;
        static mess_openGrowhfund: string;
        static mess_updateUserInfo: string;
        static mess_upDateGrowhfundState: string;
        static mess_loadingShow: string;
        static mess_loadingHide: string;
        /**
        * 更新金币，增量，这里不会累加到userinfo ，只是客户端做显示
        */
        static mess_updateCoinfInfo: string;
        /**
         * 游戏奖励公告，客户端自己配发
         */
        static mess_gameRewardNotice: string;
        static mess_checkRecordDetail: string;
        static mess_respGameList: string;
        static mess_respRecordList_init: string;
        static mess_respRecordList_append: string;
        static mess_respRecordDetail: string;
        /**==================活动================== */
        /**
         * 请求具体活动基础信息返回
         */
        static mess_activeBaseResp: string;
        /**==================活动================== */
        static mess_netJpResp: string;
        static mess_netJpRewardPush: string;
        static mess_netJpRecordDetail: string;
        static mess_netJpNormalDetail: string;
        static mess_netJpFreeDetail: string;
        static mess_netJpLittleDetail: string;
        /**
         * 世界boss信息请求后的回调数据
         */
        static mess_netWorldMissionInfoResp: string;
        /**
         * 世界boss任务开始
         */
        static mess_networldMissionStartPush: string;
        /**
         * 世界boss任务更新
         */
        static mess_netWorldMissionUpdatePush: string;
        /**
         * 世界boss任务奖励
         */
        static mess_netWorldMissionRewardPush: string;
        /**
         * 世界boss任务完成
         */
        static mess_netWorldMissionDonePush: string;
        /**
         * 世界boss任务停止
         */
        static mess_networldMissionStopPush: string;
        static mess_clockStart: string;
        static mess_clockHide: string;
        /**显示热门游戏按钮 */
        static mess_showHotGameBtn: string;
        /**
         * 打开兑换窗口
         * 后面附带参数
         * @param {Function}exchangeCallback 点击兑换时的回调，选填
         * @param {Function}continueCallback 点击继续时的回调，选填
         */
        static mess_openExchangeGuide: string;
        /**
        * 分数不足弹窗
        * @param tipsKey 提示文本key值
        * @param isShowDialog 是弹窗还是飘字
        */
        static mess_openRechargeGuide: string;
        /**slot哈希滚轴列表点击事件 */
        static slot_mess_rollerListClick: string;
        /**哈希验证卡牌界面卡牌点击事件 */
        static hash_mess_cardClick: string;
        /**哈希完整牌堆界面，更新事件 */
        static hash_mess_updateWholdCardStack: string;
        /**哈希加密 切牌点击事件 */
        static hash_mess_cutCardClick: string;
        /**哈希加密 切牌返回事件 */
        static hash_mess_cutCardPush: string;
        /**更新所有牌的信息 */
        static hash_mess_CardStackPush: string;
        /**投注排行榜推送 */
        static mess_netRecordPush: string;
        static hashChain_clickHistoryItem: string;
        /**哈希链验证 */
        static mess_slot_hash_chain_verify: string; /**
    
        /**打开 double 公平性界面 在子游戏 */
        static double_fair_view: string;
        /**通用公平性 */
        static mess_common_fair_view: string;
        /**打开创建房间界面 */
        static mess_open_create_room: string;
        /**点击房间历史收益按钮 */
        static mess_clickRoomHistoryProfit: string;
        /**gm设定滚轴滚动参数 */
        static mess_setSlotRollingParam: string;
    }
    /**
     * 全局数据，可变化状态
     */
    export class Global {
        static designResolution: cc.Size;
        static gameId: number;
        static clientGameId: number;
        static gameType: string;
        static language: string;
        static isLocal: boolean;
        static serverTimeOffset: number;
        static serverToken: string;
        static serverIp: string;
        static srvIpList: string[];
        static api_game_token: string;
        static api_game: string;
        static api_game_list: string[];
        static cdnList: string[];
        static cdnIndex: number;
        static bundle_domain: string;
        static httpConfig: any;
        static client_log_url: string;
        static leveCconfig: LevelDataClass;
        static fundRewardConfig: FundRewardDataClass;
        static trialGuideConfig: TrialGuideClass;
        static openRespLog: boolean;
        static referrer: string;
        static platformGameConfig: any;
        private static _gameBrand;
        /**
         * 品牌名称
         */
        static get gameBrand(): string;
        /**
         * 品牌名称
         */
        static getGameBrand(gameId?: number): string;
        /**竖版刘海高度 */
        static bangsHeight: number;
        /**横版刘海屏高度，如果是0，非刘海屏 */
        static get statusBarHeight(): number;
        /**
         * 皮肤ID
         */
        static skinId: number;
        /**大厅id，若没有就是0 */
        static lobbyId: number;
        /**小数位数 */
        static point: number;
        /**功能开关 */
        static functionSwitch: any;
        static hashWholeCardStack_frame_title: any;
        static hashWholeCardStack_str_tips: any;
        /** 哈希开奖说明页数 */
        static hashVerificationInstructionsNum: number;
        static cockNumList: number[];
        /**保存详情界面子弹哈希密文 */
        static curHashMulti: string;
    }
    export enum BannerType {
        Sys = 0,
        Plat = 1,
        Game = 2
    }
    export enum RoomState {
        Normal_Room = 0,
        Friend_Room = 1
    }
    export enum DisplayRoleInfo {
        Other = 0,
        Ower = 1
    }
    export enum RewardBoxType {
        Level = 1,
        FundReward = 2
    }
    export enum ERenderType {
        None = 0,
        Label = 1,
        Sprite = 2
    }
    /**公平性界面，页签 */
    export enum Hash_BoolType {
        explanation = 0,
        seed = 1,
        verify = 2,
        CodePublicity = 3
    }
    export enum gamecore_SEEDCOPYTYPE {
        current_serverSeedHash = 1,
        current_clientSeed = 2,
        lastTime_serverSeed = 3,
        lastTime_serverSeedHash = 4,
        lastTime_clientSeed = 5
    }
    /**提示窗口弹窗的触发条件类型 */
    export enum EPopupPromptType {
        /**token过期 */
        tokenExpired = 0,
        /**返回平台大厅 */
        goBackToGameHall = 1,
        /**登录服务器失败 */
        loginFailed = 2,
        /**进入游戏失败 */
        enterGameFailed = 3,
        /**服务器踢出推送 */
        kickedOut = 4,
        /**网络已断开 */
        netClosed = 5,
        /**服务器异常，已断开网络 */
        serverStop = 6,
        /**账号异常登陆 */
        otherLogin = 7
    }
    /**
     * 切牌展示中的牌item必须要实现的接口 一个约束条件
     */
    export interface IHashCardOfCut {
        /** 选中切牌时显示特效 */
        showCutCardEffect(): void;
        hideCutCardEffect(): void;
        /**获取牌面宽度 */
        getCardWidth(): number;
    }
    /** 哈希加密 牌类型*/
    export enum HashCardType {
        poker = 0,
        mahjong = 1,
        other = 2
    }
    /** 哈希加密用到的牌的预制资源  */
    export interface IHashCardRes {
        type: HashCardType;
        prefab?: cc.Prefab;
    }
    export interface RewardBoxParam {
        id: number;
        /**
         * bundle 名字，才能去加载对应的资源
         */
        bundle: string;
        /**
         * 礼盒图资源路径 用来加载spriteFrame
         */
        boxFrame: string;
        /**
         * 礼盒图资源路径 用来加载spriteFrame
         */
        btnFrame: string;
        /**
         * 礼盒上面展示的文字
         */
        boxLabel: string;
        /**
         * 按钮上面展示的文字
         */
        btnText: string;
        /**
         * 默认的按钮位置  1 在礼盒的下侧， 2 在礼盒的右侧（如果设置了btnPos位置这个则不生效）
         */
        btnPosType: number;
        /**
         * 设置按钮位置 可选参数
         */
        btnPos?: cc.Vec2;
        /**
         * 点击按钮的回调函数 可选 ，如果没有则默认
         */
        clickCallFun?: Function;
        /**
         * 回调函数上下文 可选
         */
        clickTarget?: object;
        /**
         * 点击按钮声音自定义  可选
         */
        clickSound?: {
            bundle: string;
            path: string;
        };
        /**
         * 按钮状态 1正常 2灰色
         */
        btnState?: number;
    }
    export interface BannerParam {
        /**
         * 跑马灯的父节点，如果不设置 默认是canvas
         */
        parent: cc.Node;
        /**
         * 相对父节点的y坐标偏移
         */
        verPos: cc.Vec2;
        horPos: cc.Vec2;
        /**
         * 节点缩放
         */
        scale: number;
        /**
         * 回调
         */
        callback?: (objInst: Banner | null) => void;
    }
    export interface GrowFundParam {
        id: number;
        name: string;
        reward: number;
        price: number;
        titleTag: string;
        icon: string;
    }
    export interface GrowListParam {
        level: string;
        exp: string;
        baiyin: number;
        huangjin: number;
        zuanshi: number;
    }
    export interface GrowHelpParam {
        id: number;
        title: string;
        description: string;
    }
    export interface GrowRecordParam {
        id: number;
        level: string;
        exp: number;
        bonus: number;
        state: number;
    }
    /**切牌界面需要传入的参数格式 */
    export interface IHashCutViewParam {
        hashInfo: any;
        cardRes?: IHashCardRes;
        cardsData: any[];
        isCutner: boolean;
        clockTime: number;
        titleStr: string;
    }
    /**牌堆数据 */
    export interface IHashWholeCardStack {
        /**游戏记录 */
        isRecord?: boolean;
        /**是否是固定的数据 */
        isConst?: boolean;
        /**need show info */
        needShowHashInfos?: any;
        /**all info */
        allHashInfos?: any;
    }
    /**哈希加密-验证中心数据 */
    export interface IHashCardVerifyCenter {
        data: protoReport.hash_card_num_type;
        isRecord?: boolean;
        datas?: any;
        index?: number;
    }
    /**单牌需要保存的数据 */
    export interface IhashCardNeedInfo {
        allHashInfos: protoReport.hash_type;
        setWidth: number;
        setHeight: number;
    }
    /**哈希链验证说明界面的数据 */
    export interface IhashChainVerification {
        history: any[];
        seed?: string;
        curToggle?: number;
        curGameNum?: number;
    }
    export interface IhashChainVerificationItemExt {
        setHeight: number;
        isDefaultPrefab: boolean;
        itemScript?: string;
        itemCanClick?: boolean;
    }
    /**登录ip信息 */
    export class IpInfo {
        /**ip */
        ip: string;
        /**国家 */
        country: string;
        /**国家代码 */
        country_zh: string;
        /**省份 */
        province: string;
        /**省份代码 */
        province_zh: string;
        /**城市 */
        city: string;
        /**城市代码 */
        city_zh: string;
    }
    export class ClientEventReportRequest {
        platform_id: number;
        platform_name: string;
        application_id: number;
        application_name: string;
        channel_id: number;
        channel_name: string;
        user_id?: number;
        user_name: string;
        device_name: string;
        event_id: number;
        event_value: number;
        device_type: number;
        device_id: string;
        package_id: number;
        app_version: string;
        version: string;
        time: string;
        sign: string;
        params: string;
        /**ip */
        login_ip: string;
        /**国家 */
        country: string;
        /**国家代码 */
        country_zh: string;
        /**省份 */
        province: string;
        /**省份代码 */
        province_zh: string;
        /**城市 */
        city: string;
        /**城市代码 */
        city_zh: string;
        sn_id: number;
        sn_name: string;
        agent_id: number;
        agent_name: string;
        event_time: string;
        event: number;
        event_name: string;
        create_time: string;
        vip_level: string;
        level: string;
        coin_type: string;
        tel: string;
        balance: number;
        fb: string;
        sn_user_id: number;
    }
    export interface IRenderType {
        type: ERenderType;
        labelKey?: string;
        labelString?: string;
        spriteFrame?: cc.SpriteFrame;
        spriteResKeeper?: game.ResKeeper;
        spriteLocalPath?: string;
        spriteBundle?: string;
        spriteRemotePath?: string;
        x?: number;
        y?: number;
    }
    export interface IcoinHashVerify {
        game_id?: number;
        toggleIndex: number;
        /**游戏记录中打开查验 */
        hashDataRecord?: protoReport.layout_hash_type;
        /**游戏中打开查验 */
        hashDataGame?: any[];
        spreadResultList?: number[];
        throwTimes?: number;
    }
    export interface IcommonFairness {
        game_id?: number;
        toggleIndex: number;
        /**游戏记录中打开查验 兼容 （hashData === hashDataRecord)*/
        hashData?: protoReport.layout_hash_type;
        /**游戏记录中打开查验 兼容 （hashData === hashDataRecord)*/
        hashDataRecord?: protoReport.layout_hash_type;
        /**游戏中打开查验 */
        hashDataGame?: any[];
        /**结果列表 */
        resultList?: number[];
        /**slot结果列表 */
        spreadResultList?: number[];
        /**结果列表长度 */
        resultTimes?: number;
        /**自定义数据 */
        customData?: any;
    }
    /**模态对话框回调目标 */
    export interface IDialogCallBackTarget {
        callback: (data: any) => void;
        target?: any;
    }
    /**模态对话框打开参数 */
    export interface IDialogArgs {
        triggerConditionType?: EPopupPromptType;
        /** 显示标题*/
        title?: string;
        /** 显示文本*/
        tips?: string;
        /**确认回调 */
        okCbTarget?: IDialogCallBackTarget;
        /**取消回调 */
        cancelCbTarget?: IDialogCallBackTarget;
        /** 是否只显示确认按钮*/
        onlyOKBtn?: boolean;
        /**是否隐藏关闭按钮 在只显示确认按钮情况下关闭按钮会隐藏，此参数失效 */
        hideCloseBtn?: boolean;
        /**文本的字体大小 */
        tipsFontSize?: number;
        /**取消按钮文本资源名（如果文本不是sprite类型，而是label类型，则是要显示的文本内容） */
        cancelCbSprFrame?: string;
        /**取消按钮背景颜色 */
        cancelCbSprBgColor?: cc.Color;
        /**确认按钮文本资源名（如果文本不是sprite类型，而是label类型，则是要显示的文本内容） */
        okCbSprFrame?: string;
        /**确认按钮背景颜色 */
        okCbSprBgColor?: cc.Color;
    }
    export class CoreUIDialog extends game.View {
        btnClose: cc.Node;
        btnOK: cc.Node;
        btnCancel: cc.Node;
        /**确定按钮图片文本 */
        btnOKSpr: cc.Sprite;
        /**取消按钮图片文本 */
        btnCancelSpr: cc.Sprite;
        labTips: cc.Label;
        autoScale: boolean;
        hScale: number;
        vScale: number;
        private _okCbTarget;
        private _cancelCbTarget;
        private _btnOK_x;
        onLoad(): void;
        layout(): void;
        onOpen(fromUI: number, ...args: any[]): void;
        onOK(): void;
        onCancel(): void;
        onEnable(): void;
        onDisable(): void;
        private _registerEvent;
        private _unRegisterEvent;
    }
    /**提示类型 */
    export enum E_TipsType {
        /**飘字类型*/
        FloatingWord = 0,
        /**普通弹窗 */
        NormalPopUp = 1
    }
    export interface ITipsArgs {
        startPos?: cc.Vec3;
        endPos?: cc.Vec3;
        fontSize?: number;
        showTime?: number;
        /**提示类型 */
        tipsType?: E_TipsType;
        /**提示信息背景图 */
        tipsBg?: cc.SpriteFrame;
        /**提示信息图标 */
        icon?: cc.SpriteFrame;
        /**提示信息图标颜色 */
        iconColor?: cc.Color;
        /**提示信息图标的scale */
        iconScale?: number;
    }
    export class TipsManager {
        private static _instance;
        private constructor();
        static getInstance(): TipsManager;
        private _toastQueue;
        private _tipBg;
        /**自定义飘字提示窗表现回调 */
        toastFunc: Function;
        /**
         * 显示模态对话框(建议不要再调用使用，已废弃。使用showPopupPrompt替代)
         * @param tips 提示文本
         * @param okCbTarget 确认回调
         * @param cancelCbTarget 取消回调
         * @param onlyOKBtn 是否只显示确认按钮
         * @param okCbSprFrame 确认文本资源名
         * @param cancelCbSprFrame 取消文本资源名
         */
        showDialog(tips: string, okCbTarget?: IDialogCallBackTarget, cancelCbTarget?: IDialogCallBackTarget, onlyOKBtn?: boolean, hideCloseBtn?: boolean, tipsFontSize?: number, okCbSprFrame?: string, cancelCbSprFrame?: string): void;
        /**
         * 弹窗错误码
         * @param tips 错误码提示文字
         * @param okCbTarget 确认回调
         */
        showErrorCode(tips: string, okCbTarget?: IDialogCallBackTarget): void;
        /**
         * 显示弹窗对话框
         * @param args 提示窗口UI的参数
         */
        showPopupPrompt(args: IDialogArgs): void;
        hideDialog(): void;
        /**
         * 显示飘字提示
         * @param tips 提示文本
         * @param tipsArgs 提示附加参数
         */
        showToast(tips: string, tipsArgs?: ITipsArgs): cc.Node;
        /**
         * 隐藏飘字提示
         * @param target 飘字节点，不填则隐藏全部
         */
        hideToast(target?: cc.Node): void;
        private _createToast;
        private getTipBg;
    }
    /**
    * 游戏记录标签
    * @param BET_RECORD 游戏记录
    * @param ACCOUNT_FLOW 账户流水
    */
    export enum GameRecordTab {
        BET_RECORD = 0,
        ACCOUNT_FLOW = 1,
        NUM = 2
    }
    export enum GameTypeID {
        ALL = 0,
        SLOT = 10,
        HUNTER = 11,
        ARCADE = 12,
        CHESS = 16,
        SLOT_HASH = 20,
        HUNTER_HASH = 51,
        ARCADE_HASH = 22,
        SLOT_TIME_HASH = 30,
        ARCADE_BAN = 42,
        SLOT_HASH_CHAIN = 50,
        ARCADE_CREATE_HASH = 52
    }
    /** 哈希查验类型 */
    export enum HashCheckType {
        SLOT = 0,
        HUNTER = 1,
        /** 桌游币安哈希查验 */
        ARCADE_BINANCEHASH = 2,
        /** 桌游哈希查验 */
        ARCADE_HASH = 3,
        /** 捕猎哈希查验 */
        HUNTER_HASH = 4,
        /** 桌游哈希查验 mines 游戏*/
        ARCADE_HASH_MiNES = 3001,
        /** 桌游哈希查验 doubel 游戏*/
        ARCADE_HASH_DOUBLE = 3002,
        /** 桌游哈希查验 coin 游戏*/
        ARCADE_HASH_COIN = 3003,
        /** 桌游哈希查验 hilo 游戏*/
        ARCADE_HASH_Hilo = 3004,
        /** 桌游哈希查验 plinko 游戏*/
        ARCADE_HASH_PLINKO = 3005,
        /** 桌游哈希查验 keno 游戏*/
        ARCADE_HASH_KENO = 3006,
        /** 桌游哈希查验 pick 游戏*/
        ARCADE_HASH_PICK = 3007,
        /** 瓜瓜乐 */
        ARCADE_HASH_GUAGUALE = 3008,
        /** 猜拳 */
        ARCADE_HASH_GUESS = 3009,
        /** 骰宝 */
        ARCADE_HASH_DICE = 3010,
        /**转盘游戏 */
        ARCADE_HASH_WHEEL = 3011
    }
    export enum SearchTimeId_Record {
        TODAY = 1,
        YESTERDAY = 2,
        LAST_3_DAYS = 3,
        LAST_7_DAYS = 4,
        NUM = 4
    }
    export enum AttackId_Record {
        /**对战类型 */
        ATTACK_TYPE = 1,
        /**收集类型 */
        COLLECT_TYPE = 2,
        /**红包类型 */
        RED_TYPE = 3,
        /**大转盘类型 */
        ROTARYTABLE_TYPE = 4,
        /**红利类型 */
        DIVIDEND_TYPE = 5,
        /**随机事件类型 */
        EVENT_TYPE = 6,
        /**红利事件类型 */
        DIVIDEND_EVENT_TYPE = 7,
        /**巨石类型 */
        REPORT_TRIGGER_REWARD_EVENT = 8
    }
    /**
     * 玩法类型id
     * @REPORT_NORMAL_SPIN_TYPE 普通转
     * @REPORT_FREE_SPIN_TYPE 免费转
     * @REPORT_RETURN_SPIN_TYPE 重转
     * @REPORT_LITTLE_GAME_TYPE 小游戏
     * @REPORT_JACKPOT_TYPE jackpot
     * @REPORT_WORLD_MISSION 世界boss
     * @REPORT_BUY_FREE_GAME 购买免费游戏
     * @REPORT_TRIGGER_REWARD_EVENT 触发奖励事件
     * @REPORT_COLLECT_REWARD 收集奖励金币
     * @REPORT_TURN_COIN 翻倍游戏
     * @REPORT_EVENT_RAWARD 奖励游戏
     * @REPORT_BUY_FREE_SPIN_TYPE 购买免费旋转
     * @REPORT_SINGLE_ROW_SPIN 单列旋转
     * @REPORT_SINGLE_ROW_SPIN_TRIGGER_FREE 单列旋转触发免费
     */
    export enum PlayTypeId_Record {
        /**普通转 */
        REPORT_NORMAL_SPIN_TYPE = 1,
        /**免费转 */
        REPORT_FREE_SPIN_TYPE = 2,
        /**重转 */
        REPORT_RETURN_SPIN_TYPE = 3,
        /**小游戏 */
        REPORT_LITTLE_GAME_TYPE = 4,
        /**jackpot */
        REPORT_JACKPOT_TYPE = 5,
        /**世界boss */
        REPORT_WORLD_MISSION = 6,
        /**购买免费游戏 */
        REPORT_BUY_FREE_GAME = 7,
        /**触发奖励事件 */
        REPORT_TRIGGER_REWARD_EVENT = 8,
        /**收集奖励金币 */
        REPORT_COLLECT_REWARD = 9,
        /**翻倍游戏 */
        REPORT_TURN_COIN = 10,
        /**奖励游戏 */
        REPORT_EVENT_RAWARD = 11,
        /**购买免费旋转 */
        REPORT_BUY_FREE_SPIN_TYPE = 12,
        /**单列旋转 */
        REPORT_SINGLE_ROW_SPIN = 13,
        /**单列旋转触发免费 */
        REPORT_SINGLE_ROW_SPIN_TRIGGER_FREE = 14
    }
    /**
     * @NONE	%%	金币
    @COIN	%%	金币
    @TIME	%%	挑选次数
    @BET	%%	金币倍数
    @FREE_TIME	%%	免费次数
     */
    export enum LITTLE_ATCADE {
        NONE = 0,
        COIN = 1,
        TIME = 2,
        BET = 3,
        FREE_TIME = 4
    }
    /**
     * 辅助类型id
    @AUXILIARY_TYPE_COIN	%%	金币
    @AUXILIARY_TYPE_INC_FREE_TIMES	%%	免费游戏次数
    @AUXILIARY_TYPE_RESULT_RATE_FACTOR	%%	结果倍率递增系数
    @AUXILIARY_TYPE_RESULT_RATE_SET	%%	结果倍率设置
    @AUXILIARY_TYPE_RANDOM_WILD	%%	随机百搭
    @AUXILIARY_TYPE_RANDOM_SCATTER	%%	随机分散
    @AUXILIARY_TYPE_ASSIGN_ROLLER	%%	指定滚轴
    @AUXILIARY_TYPE_ELEMENT_RESULT_RATE	%%	元素结果倍率影响
    @AUXILIARY_TYPE_ELEMENT_FREE_TIMES	%%	元素免费次数影响
    @AUXILIARY_TYPE_FIX_ELEMENT_POS	%%	元素固定在的位置
    @AUXILIARY_TYPE_INC_CHOOSE_NUM	%%	增加可选数量
    @AUXILIARY_TYPE_RESULT_RATE_ADD	%%	结果倍率增加
    @AUXILIARY_TYPE_COLLECT_FREETIMES	%%	收集免费次数
    @AUXILIARY_TYPE_COLLECT_SCATTER	%%	收集分散
    @AUXILIARY_TYPE_COLLECT_COIN	%%	收集金币
    @AUXILIARY_TYPE_COIN_UNIT_RATE_ADD	%%	金币倍率增加
    @AUXILIARY_TYPE_COLLECT_COIN_UNIT_RATE	%%	收集金币倍率增加
    @AUXILIARY_TYPE_MAGICAL_SYMBOLS	%%	神奇符号
    @AUXILIARY_TYPE_COIN_MULTI	%%	金币系
    @AUXILIARY_TYPE_COIN_MULTI_RESULT_RATE_SET  %%  金币系数倍率设置
    @AUXILIARY_TYPE_RANDOM_ELEMENT_POS %%  随机元素位置
    @AUXILIARY_TYPE_LUCKY_GOLD  %%  幸运金币
    @AUXILIARY_TYPE_EXTRA  %%  额外金币
     */
    export enum AuxiliaryTypeId_Record {
        AUXILIARY_TYPE_COIN = 0,
        AUXILIARY_TYPE_INC_FREE_TIMES = 1,
        AUXILIARY_TYPE_RESULT_RATE_FACTOR = 2,
        AUXILIARY_TYPE_RESULT_RATE_SET = 3,
        AUXILIARY_TYPE_RANDOM_WILD = 4,
        AUXILIARY_TYPE_RANDOM_SCATTER = 5,
        AUXILIARY_TYPE_ASSIGN_ROLLER = 6,
        AUXILIARY_TYPE_ELEMENT_RESULT_RATE = 7,
        AUXILIARY_TYPE_ELEMENT_FREE_TIMES = 8,
        AUXILIARY_TYPE_FIX_ELEMENT_POS = 9,
        AUXILIARY_TYPE_INC_CHOOSE_NUM = 10,
        AUXILIARY_TYPE_RESULT_RATE_ADD = 11,
        AUXILIARY_TYPE_COLLECT_FREETIMES = 12,
        AUXILIARY_TYPE_COLLECT_SCATTER = 13,
        AUXILIARY_TYPE_COLLECT_COIN = 14,
        AUXILIARY_TYPE_COIN_UNIT_RATE_ADD = 15,
        AUXILIARY_TYPE_COLLECT_COIN_UNIT_RATE = 16,
        AUXILIARY_TYPE_MAGICAL_SYMBOLS = 17,
        AUXILIARY_TYPE_COIN_MULTI = 18,
        AUXILIARY_TYPE_21 = 21,
        AUXILIARY_TYPE_COIN_MULTI_RESULT_RATE_SET = 23,
        AUXILIARY_TYPE_ELEMENT_EXPAND = 46,
        AUXILIARY_TYPE_RANDOM_ELEMENT_POS = 51,
        AUXILIARY_TYPE_LUCKY_GOLD = 69,
        AUXILIARY_TYPE_CAPTAIN_SUPERSPIN = 92,
        AUXILIARY_TYPE_CAPTAIN_CAPTAINEXPAND = 98,
        AUXILIARY_TYPE_CAPTAIN_SKULLEXPAND = 99,
        AUXILIARY_TYPE_CAPTAIN_FREEGAMES = 100,
        AUXILIARY_TYPE_137 = 137,
        AUXILIARY_TYPE_POWER_0 = 179,
        AUXILIARY_TYPE_POWER = 180,
        AUXILIARY_TYPE_CAPTAIN_LITTLEGAME185 = 185,
        AUXILIARY_TYPE_SWORD_DEBRIS = 216,
        AUXILIARY_TYPE_CAPTAIN_LITTLEGAME = 217,
        AUXILIARY_TYPE_EXTRA = 233,
        AUXILIARY_TYPE_TSZZGZJCS_CHANGE3_ID = 276,
        AUXILIARY_TYPE_338 = 338,
        AUXILIARY_TYPE_378 = 378,
        AUXILIARY_TYPE_379 = 379,
        AUXILIARY_TYPE_RESET_TIMES_409 = 409,
        AUXILIARY_TYPE_552 = 552
    }
    /**
     * 类型1
     * @MANUAL_TRANSACTION 人工交易
     * @API_GOLD api金币
     * @ACTIVITY_GOLD 活动金币
     * @ELECTRONIC_GAMES 电子游戏
     * @SPORTS_GAME 体育游戏
     */
    export enum Type1Id_Record {
        MANUAL_TRANSACTION = 1,
        API_GOLD = 2,
        ACTIVITY_GOLD = 3,
        ELECTRONIC_GAMES = 4,
        SPORTS_GAME = 5
    }
    /**
     * 类型2
     * @ADD 人工交易 - 增加
     * @SUB 人工交易 - 减少
     *
     * @TRANSFER_IN api金币 - 转入
     * @TRANSFER_OUT api金币 - 转出
     *
     * @LEVEL_REWARD 活动金币 - 等级奖励
     * @FUND 活动金币 - 基金
     * @BUY_FUND 活动金币 - 购买基金
     * @JIFEN 活动金币 - 积分活动奖励
     *
     * @SLOT 电子游戏 - 旋转
     * @HUNTER 电子游戏 - 捕猎
     */
    export enum Type2Id_Record {
        ADD = 1,
        SUB = 2,
        TRANSFER_IN = 1,
        TRANSFER_OUT = 2,
        LEVEL_REWARD = 1,
        FUND = 2,
        BUY_FUND = 3,
        JIFEN = 4,
        DASHANG = 5,
        KONGTOU = 6,
        JINBIAOSAI = 7,
        TIANTI = 8,
        RIRILING = 9,
        SLOT = 10,
        HUNTER = 11,
        ARCADE = 12,
        HUNTER_HASH = 51
    }
    /**
     * 游戏信息（与服务器下发字段名一样）
     * @game_id 游戏id
     * @name 游戏名
     * @game_type_id 游戏类型id
     * @game_sub_type 游戏类型名
     */
    export class GameInfo_Record {
        game_id: number;
        name: string;
        game_type_id: number;
        game_sub_type: string;
    }
    /**
     * 游戏类型信息
     * @id 游戏类型id
     * @name 游戏类型名
     */
    export class GameTypeInfo_Record {
        id: number;
        name: string;
    }
    export class RecordGridShow {
        show: number[];
    }
    /**
     * 记录列表数据
     * @data 列表数据
     * @recordNum 记录总数量（因为分批请求列表，该值 >= data.length）
     * @tabId 标签页id
     * @gameTypeId 游戏类型id
     * @gameId 游戏id
     * @searchTimeId 查询时间id
     * @sumNum 总计数据数组
     * @latelyLVII 离 ListView 边界最近 item 索引（ListViewItemIndex）
     */
    export class RecordListData {
        data: any[];
        recordNum: number;
        tabId?: number;
        gameTypeId?: number;
        gameId?: number;
        searchTimeId?: number;
        sumNum?: number[];
        latelyLVII?: number;
    }
    /**
     * 查询条件
     * @tabId 标签页id
     * @gameTypeId 游戏类型id
     * @gameId 游戏id
     * @searchTimeId 查询时间id
     * @offset 偏移量
     */
    export class SearchCondition {
        tabId?: number;
        gameTypeId?: number;
        gameId?: number;
        searchTimeId?: number;
        offset?: number;
        current_game_id: number;
    }
    export type GameType_Record_Map = Map<number, RecordListData>;
    export enum RecordSumIndex {
        BET = 0,
        BONUS = 1,
        BULLET_NUM = 0,
        BULLET_VALUE = 1,
        BONUS_VALUE = 3,
        WIN_LOSE = 2
    }
    export class RecordDI_ExtData {
        crush_rate?: number;
        roller_lv?: number;
        scatter?: number[];
        wild?: number[];
    }
    export class GameRecordData {
        private static _instance;
        private constructor();
        static getInstance(): GameRecordData;
        private _gameInfo;
        private _gameTypeInfo;
        private _id_typeGame;
        private _recordListData;
        gameRecordListData: any;
        gtComboxList: any[];
        gtComboxSelIndex: number;
        gnComboxSelIndex: number;
        stComboxSelIndex: number;
        coinComboxSelIndex: number;
        comboxInited: boolean;
        checkOrderData: any;
        checkOrderDetail: any;
        resUrl: string;
        dataSlotBase: any;
        dataSlotDetail: any;
        dataQyxzBetDsc: any;
        dataQyxzReportDsc: any;
        dataSlotRoller: any;
        dataSlotBaseCommon: any;
        dataSlotRollerCommon: any;
        curSelTabId: GameRecordTab;
        curGameTypeId: GameTypeID;
        curSC: SearchCondition;
        protoMainId: number;
        protoSubId: number;
        reset(): void;
        setGameInfo(gameId: number, info: GameInfo_Record): void;
        getGameInfo(gameId: number): GameInfo_Record;
        getGameTypeInfo(gameTypeId: number): GameTypeInfo_Record;
        generateHelpData(): void;
        getAddElements(column: number, rollerId: number): number[];
        getDelElements(rollerId: number): number[];
        /**
         * 获取某游戏类型下的游戏id列表
         * @param typeId 游戏类型id，不填则为全部类型
         */
        getGameIdList(typeId?: number): number[];
        getGameTypeIdList(): number[];
        getSearchTimeIdList(): number[];
        getGameTypeId(gameId: number): number;
        game_id2Name(gameId: number): string;
        gameType_id2Name(typeId: number): string;
        searchTime_id2Name(typeId: number): string;
        /**对战奖励类型*/
        attackTypeName(typeId: number): string;
        playType_id2Name(typeId: number): string;
        playType_id3Name(typeId: number): string;
        auxiliaryType_id2Name(typeId: number): string;
        littleArcadeName(typeId: number): string;
        roomType_idName(game_id: number, typeId: number): string;
        pokerName_idName(game_id: number, typeId: number): string;
        type1_id2Name(typeId: number): string;
        type2_id2Name(type1: number, type2: number): string;
        /**
         * 加载json格式配置文件
         * @param path 文件路径
         * @param successCb 加载成功回调
         * @param bundleName bundle名
         */
        loadCfJson(path: string, successCb?: Function, bundleName?: string): Promise<any>;
        /**是否加载了JSON */
        private isLoadJson;
        /**
         * 加载slot配置
         */
        loadSlotCf(): Promise<void>;
        /**
        * 加载其他品牌lot配置
        */
        loadBrandSlotCf(gameId: number): Promise<void>;
        dataSlotBaseOK(obj: any, path: string, bundleName: string): void;
        dataSlotRollerOK(obj: any, path: string, bundleName: string): void;
        dataQyxzBetDscOK(obj: any, path: string, bundleName: string): void;
        dataQyxzReportDscOK(obj: any, path: string, bundleName: string): void;
        dataSlotDetailOK(obj: any, path: string, bundleName: string): void;
        getoffsetAry(str: string): any[];
        /**
         * 游戏类型id对应的索引（编辑器中数组索引）
         * @param type 游戏类型id
         */
        gameType2EditorIndex(type: number): number;
        getRecordListData(tabId: number, gameTypeId: number): RecordListData;
        setRecordListData(tabId: number, gameTypeId: number, obj: RecordListData): void;
        addRecordList(tabId: number, gameTypeId: number, list: any[]): void;
        clearRecordListData(tabId?: number, gameTypeId?: number): void;
        isWin8Record(): boolean;
    }
    /**
     * 数据采集
     */
    export class DataCollectionMgr {
        private static _instance;
        private constructor();
        static get instance(): DataCollectionMgr;
        sendLoginData(): void;
    }
    export interface LobbyAppConfig {
        packet_config: {
            id: number;
            platform_id: number;
            platform_name: string;
            app_id: number;
            app_name: string;
            channel_id: number;
            device_type: number;
            pack_type: number;
            pack_name: string;
            pack_url: string;
            cur_version: string;
            min_version: string;
            max_version: string;
            res_version: string;
            md5_key: string;
            update_log: [string];
            test_white_list: string;
            white_list_switch: number;
            config_switch: number;
            recharge_switch: number;
            withdraw_switch: number;
            fb_appid: string;
            fb_secret: string;
            login_switch: number;
            template_id: number;
        };
        app_config: {
            agent_id: number;
            cdn_arr: [string];
            game_addr: string;
            loading_texture: string;
            share_textures: [string];
            recharge_texture: string;
            pre_buried_ip: [string];
            platform_addr: string;
            customer_service_addr: string;
            recharge_addr: string;
            activity_recharge_addr: string;
            withdraw_addr: string;
            clientlog: string;
            suspen_url: string;
            close_suspen_url: string;
            return_btn_url: string;
            data_dot_url: string;
        };
        login_config: {
            id: number;
            visitor_switch: number;
            phone_switch: number;
            facebook_switch: number;
            ip_blacklist: string;
            area_blacklist: string;
        };
        maintain: any;
        site: {
            id: number;
            created_at: number;
            updated_at: number;
            name: string;
            platform_id: number;
            platform_name: string;
            application_id: number;
            application_name: string;
            web_packet_name: string;
            web_packet_id: number;
            ios_download: string;
            android_download: string;
            logo: string;
        };
    }
    export interface ItokenObj {
        userId: number;
        userType: number;
        applicationId: number;
        platformId: number;
        channelId: number;
    }
    export class DataAnalysis {
        private static _instance;
        static get instance(): DataAnalysis;
        ipInfo: IpInfo;
        appEventToekn: string;
        tokenObj: ItokenObj;
        appVersion: any;
        appConfigObj: LobbyAppConfig;
        appEnvironment: string;
        lobbyDomain: string;
        appDeviceId: string;
        configInfoGet: boolean;
        ipInfoGet: boolean;
        /**错误日志 */
        private preErrorMsgArr;
        getTaskSercertKey(): string;
        init(): void;
        getUrlParams(): void;
        /**
         * 事件上报接口
         * @param eventCode 事件id
         * @param value   事件value值，比如游戏倍场
         * @param successCall  发送成功后的回调函数，可选
         * @param failCall   发送失败后的回调函数，可选
         * @param params  附加参数，如果json数据类型的可以用附加参数
         * @returns  void
         */
        httpEventReport(eventCode: number, value?: number, params?: any, successCall?: Function, failCall?: Function): void;
        private eventSignCreate;
        private parseToken;
        getAppConfig(): void;
        /**请求登录ip */
        httpGetIpInfo(): void;
        getApplicationId(): number;
        getChannelId(): number;
        /**错误上报 */
        private ErrorReport;
        listenerErrorReport(file: any, line: any, msg: any, error: any): void;
    }
    export class GameEventData {
        private static _instance;
        static get instance(): GameEventData;
        /** loading页 */
        gamepublic_loading: number;
        /** 进入选场界面 */
        gamepublic_xuanchang: number;
        /** 哈希开奖弹窗 */
        gamepublic_hash_first: number;
        /** 哈希弹窗-关闭 */
        gamepublic_hash_close: number;
        /** 选场界面-哈希按钮 */
        gamepublic_hash_open1: number;
        /** 房间界面-哈希按钮 */
        gamepublic_hash_open2: number;
        /** 进入房间事件 */
        gamepublic_selectlevel: number;
        /** 进入房间过场动画 */
        gamepublic_cutscenes: number;
        /** 成功进入游戏房间 */
        gamepublic_intoroom: number;
        /** 下注事件 */
        gamepublic_bet: number;
        /** 结算结果 */
        gamepublic_result: number;
        /** 抢庄 */
        gamepublic_qiangzhuang: number;
        /** 加倍 */
        gamepublic_double: number;
        /** 切牌 */
        gamepublic_cut: number;
        /** 开牌 */
        gamepublic_openresult: number;
        /** 再来一局 */
        gamepublic_aging: number;
        /** 自动继续游戏 */
        gamepublic_autostart: number;
        /** 点击自动投注页签 */
        gamepublic_autobet: number;
        /** 点击手动投注页签 */
        gamepublic_manual_bet: number;
        /** 点击投注额1/2按钮 */
        gamepublic_bet_amount_half: number;
        /** 点击投注额X2按钮 */
        gamepublic_bet_amount_2X: number;
        /** 点击逃跑 */
        gamepublic_runaway: number;
        /** 点击自动投注按钮 */
        gamepublic_autobutton: number;
        /** 点击自动投注页签中的取消按钮 */
        gamepublic_cancelauto: number;
        /** 点击我的投注 */
        gamepublic_mybet: number;
        /** 点击开奖历史 */
        gamepublic_lotteryhistory: number;
        /** 点击当局投注 */
        gamepublic_authorities: number;
        /** 点击公平性 */
        gamepublic_fairness: number;
        /** 游戏点击当前资讯 */
        gamepublic_currentinformation: number;
        /** 游戏点击上期资讯 */
        gamepublic_lastissue: number;
        /** 点击所有竞猜 */
        gamepublic_allquizzes: number;
        /** 点击刷新客户端种子 */
        gamepublic_clientseed: number;
        /** 游戏界面点击下拉列表 */
        gamepublic_difficulty: number;
        /** 游戏点击加速按钮 */
        gamepublic_accelerate: number;
        /** 哈希验证界面里面的验证按钮 */
        gamepublic_hashverification: number;
        /** 游戏记录里面的查验按钮 */
        gamepublic_recordverification: number;
        /** 帮助界面停留时长 */
        gamepublic_lengthofstay: number;
        /** 输入框点击事件 */
        gamepublic_Inputbox: number;
        /** 离开游戏 */
        game_quit: number;
        /** 90秒未操作，退出房间 */
        not_operated_to_quit: number;
        /** 返回游戏大厅 */
        arcade_back_hall: number;
        /** 开始游戏（快速开始） */
        game_start: number;
        /** 排行榜 */
        click_rank: number;
        /** 排行榜（本周） */
        click_rank_preweek: number;
        /** 排行榜（上周） */
        click_rank_nextweek: number;
        /** 1v1模式 */
        click_1v1_model: number;
        /** 2v2模式 */
        click_2v2_model: number;
        /** 脏的模式 */
        click_dirty_model: number;
        /** 干净的模式 */
        click_clean_model: number;
        /** 基础场 */
        click_basic_sence: number;
        /** 加倍场 */
        click_double_sence: number;
        /** vip房间模式 */
        vip_room_model: number;
        /** 创建好友房间 */
        create_friend_room: number;
        /** 加入好友房间 */
        join_friend_room: number;
        /** 疯狂加倍模式 */
        crazy_bet_model: number;
        /** 下注加倍模式 */
        nomorl_bet_model: number;
        /** 游戏内充值 */
        game_to_pay: number;
        /** 游戏余额不足，点击充值 */
        nomoney_to_pay: number;
        /** 双倍加速 */
        double_speed: number;
        /** 增加线注 */
        add_bet_line: number;
        /** 减少线注 */
        reduce_bet_line: number;
        /** 自动旋转 */
        auto_spine: number;
        /** 自动旋转次数选择1 */
        auto_spine_select_time1: number;
        /** 自动旋转开始 */
        auto_spine_model_start: number;
        /** 自动旋转取消 */
        auto_spine_model_cancel: number;
        /** slot返回大厅 */
        slot_back_hall: number;
        /** slot旋转 */
        slot_scroll: number;
        /** slot快速旋转 */
        slot_fast_scroll: number;
        /** 自动发炮 */
        shoot_auto: number;
        /** 固定目标 */
        fixed_hunt_target: number;
        /** 切换炮台1 */
        switch_gun_1: number;
        /** hunt返回大厅 */
        hunt_back_hall: number;
        /** hunt返回捕猎大厅 */
        hunt_back_gamehall: number;
        /** hunt发射 */
        hunter_bet: number;
        /** 自动模式切换 */
        auto_switch_model: number;
        /** 返回桌游大厅 */
        arcade_back_gamehall: number;
        /** slot新手引导1 */
        slot_guide_1: number;
        /** slot新手引导2 */
        slot_guide_2: number;
        /** slot新手引导3 */
        slot_guide_3: number;
        /** slot新手引导4 */
        slot_guide_4: number;
        /** hunt新手引导1 */
        hunt_guide_1: number;
        /** hunt新手引导2 */
        hunt_guide_2: number;
        /** hunt新手引导3 */
        hunt_guide_3: number;
        /** hunt新手引导4 */
        hunt_guide_4: number;
        /** 游戏记录 */
        open_game_record: number;
        /** 记录详情 */
        open_game_record_detail: number;
        /** 账户流水 */
        open_account_water: number;
        /** 个人信息 */
        open_user_info: number;
        /** 等级帮助 */
        open_level_help: number;
        /** 购买基金 */
        open_buy_fund: number;
        /** 系统设置 */
        open_seting: number;
        /** 好友开房 */
        set_friend_room: number;
        /** 游戏模式 */
        set_game_model: number;
        /** 普通模式 */
        set_normal_model: number;
        /** 欢乐模式 */
        set_happy_model: number;
        /** 心跳模式 */
        set_heart_model: number;
        /** 模式说明 */
        set_models_des: number;
        /** 帮助 */
        open_help: number;
        /** 操作介绍 */
        operation_help: number;
        /** 音效开关 */
        open_sound_set: number;
        /** 音乐 */
        click_misic: number;
        /** 音效 */
        click_sound_effect: number;
        /** 活动icon */
        click_activity_icon: number;
        /** 活动类型 */
        click_activity_type: number;
        /** 活动参与跳转游戏 */
        events_in_jump_game: number;
        /** 点击互动按钮 */
        click_interactive: number;
        /** 点击表情 */
        click_expression: number;
        /** 点击快捷语 */
        click_shortcuts: number;
        /** 点击牌桌信息 */
        click_table_information: number;
        /** 点击truco */
        click_truco: number;
        /** 点击truco6 */
        click_truco6: number;
        /** 点击truco9 */
        click_truco9: number;
        /** 点击truco12 */
        click_truco12: number;
        /** 点击correr */
        click_correr: number;
        /** 点击aceitar */
        click_aceitar: number;
        /** 点击aumentar P6 */
        click_aumentar_P6: number;
        /** 点击aumentar P9 */
        click_aumentar_P9: number;
        /** 点击aumentar P12 */
        click_aumentar_P12: number;
        /** 点击亮牌按钮 */
        click_show_cards: number;
        /** 点击结算面板详情 */
        click_detail: number;
        /** 点击记牌器 */
        click_card_recorder: number;
        /**分享界面弹出 */
        share_popup: number;
        /**点击分享按钮 */
        click_share: number;
        /**点击关闭分享弹窗按钮 */
        click_close_1: number;
        /**点击破产界面关闭按钮 */
        click_close_2: number;
        /**点击购买按钮 */
        click_shop: number;
        /**点击前去任务按钮 */
        click_task: number;
        /**点击邀请好友按钮 */
        click_invite: number;
        /**拉取游戏配置成功 */
        game_config_success: number;
        /**通知关闭闪屏，开始加载loading */
        off_screen: number;
        /**登录游戏成功 */
        request_game_success: number;
        /** 进入游戏成功 */
        enter_the_game_success: number;
        /**选择房间 */
        choose_room: number;
        /**进入房间成功 */
        successfully_entered_room: number;
        /**下注成功 */
        successful_bet: number;
        /** 结算成功 */
        settlement_successful: number;
        /** 返回大厅 */
        back_to_lobby: number;
    }
    /**
     * 大厅业务相关
     */
    export class LobbyFun {
        private static _instance;
        static get instance(): LobbyFun;
        init(): void;
        dispose(): void;
        private gameHide;
        private gameShow;
        /**字符串转化base64 字符串 */
        converBase64Str(str: string): string;
        isLobbyGame(): number;
        /**
         * 游戏发送消息给大厅
         * @param msg :game_id,imge, content,url
         */
        sendMessageToLobby(msg: string, callback?: Function, messageType?: string): void;
        /**
         * 打开网页
         * @param url
         */
        openBrowser(url: string): void;
        /**
         * 发送充值弹窗消息
         */
        sendRechargeMessage(): void;
        private sendAwaken;
    }
    export interface IProtoConf {
        bundle: string;
        path: object;
        cmd: object;
        getType(cmd: number, cc_md: number): string;
        getModuleById(cmd?: number): string;
    }
    /**
     * 具体协议接口，不同的类型需要去实现具体协议类
     */
    export interface IProto {
        bundle: string;
        protoDir: string;
        roots: IProtoRoot[];
        protoConfig: IProtoConf;
        registerMess: () => void;
        destroyMess: () => void;
        init: (call?: Function) => void;
        destroy: () => void;
    }
    /**
     * 协议的 protobuf.Root的实例 接口
     */
    export interface IProtoRoot {
        path: string;
        root: protobuf.Root;
    }
    export class ProtocolHelper implements game.IProtocolHelper {
        protoObj: IProto[];
        protoConfig: IProtoConf[];
        getHeadlen(): number;
        getHearbeat(): game.NetData;
        getPackageLen(msg: game.NetData): number;
        checkPackage(msg: game.NetData): boolean;
        getPackageId(msg: any): number[];
        static getBuffData(msg: any): any;
        /**
         * 创建游戏socket字节头
         * @param cmd 大字节头
         * @param c_cmd 小字节头
         */
        static createHeadBuff(cmd: any, c_cmd: any): ArrayBuffer;
        /**
         * 字节头和数据组合成arrayBuff
         * @param args 字节头和数据buff
         */
        static connectArrayBuff(...args: any[]): ArrayBuffer;
        /**
         * proto 导出 静态js代码 创建 游戏socket arrayBUff
         * @param cmd 字节大头
         * @param com 字节小头
         * @param type message数据类型
         * @param data 发送数据
         */
        static createGameSockBuff<T>(cmd: number, com: number, type: game.ProtoType<T>, data: any): ArrayBuffer;
        /**
         *
         * @param type proto协议类型
         * @param buff 服务器传过来的 arraybuff 数据
         * @returns 返回协议类型数据
         */
        static buffDecode<T>(type: game.ProtoType<T>, buff: (protobuf.Reader | Uint8Array)): T;
        /**
         * 协议的加载
         * @param proto 协议配置实例
         * @param callback 加载结束后的回调
         */
        load(proto: IProto, callback: () => void): void;
        /**
         * 解析数据包
         * @param buffer 服务器传过来的数据包
         */
        messDecode(buffer: any, bundle: string, moduleName?: string): any;
        /**
         * 获取数据包，用于发送给服务器
         * @param cmd 大模块
         * @param ccmd 小模块
         * @param payload 数据
         */
        getBuffPackage(cmd: number, ccmd: number, payload: any, bundle: string, moduleName?: string): any;
        geClassType(cmd: number, ccmd: number, bundle: string, moduleName?: string): any;
        /**
         * 获取protobuf.Root
         * @param moduleName 模块名，如果只有一个模块不填写
         */
        getRoot(bundle: string, moduleName?: string): protobuf.Root;
        addRootAndConfig(root: IProto, proconfig: IProtoConf): void;
        getProtoObj(bundle: string): IProto;
        getProtoConfig(bundle: string): IProtoConf;
    }
    export interface ErrorCodeCallFun {
        codekey: number;
        func: game.CallbackObject;
    }
    /**
     * 活动操作数据
     */
    export interface IActivityOperateData {
        /**
         * 兑换、红包日日领
         */
        exchange?: protoCommon.act_exchange_type;
        /**
         * 抽奖
         */
        lottery?: protoCommon.act_lottery_type;
    }
    /**
     * 具体的协议解析类，这里需要实现接口IProto
     * 协议的监听网络 事件，并且处理业务逻辑
     * 并且缓存一些通用的服务器数据，用于其他模块获取，尽量将通用的数据放在这，更清晰的获取
     */
    export class CommonProto {
        bundle: string;
        private netNode;
        private heartSendId;
        private heartRespId;
        private heartTimeArr;
        netdelaytime: number;
        userinfo: protoCommon.user_info;
        reconnectToken: string;
        infriendRoom: boolean;
        friendRoomId: number;
        /**默认0，普通房间记录，重连或者加入好友房失败需要重新进入该房间 */
        normalRoomIndex: number;
        /**游戏开关 */
        gameSwitch: protoCommon.switch_type;
        /**coin倍率 */
        coinRate: number;
        /** 当前状态是否发生了重连 */
        isReconnect: boolean;
        /**是否是正式玩 */
        isNormal: boolean;
        resultEnterGame: protoCommon.enterGameResp;
        errorCodeCallList: ErrorCodeCallFun[];
        private static _instance;
        static getInstance(): CommonProto;
        constructor();
        registerMess(): void;
        destroyMess(): void;
        setReceiveCallBack(): void;
        init(): void;
        destroy(): void;
        /**
         * 网络断开 需要重置一些数据
         */
        private netOnClose;
        /**
         * 网络连上 重置数据
         */
        private netOnConnected;
        private chatPush;
        /**发送聊天语 */
        sendChatReq(chat: string): void;
        private hearBeatResp;
        hearBeatReq(): void;
        loginReq(): void;
        private sendLoginReq;
        private getClientType;
        private loginResp;
        enterGameReq(): void;
        private enterGameResp;
        /**
         * 获取角色用户信息 请求
         * @param userid 用户userid
         */
        getUserInfoReq(userid: number | Long): void;
        private getUserInfoResp;
        /**
         * 设置角色用户信息 请求
         * @param key 更改属性key值
         * @param _value 更改属性值
         * 这里不用明确类型是因为生成的 proto 枚举 类型名更改了
         */
        setUserInfoReq(key: any, _value: string): void;
        private setUserInfoResp;
        /**
        * 获取个人等级奖励 请求
        * @param level 等级
        */
        getLvAwardReq(level: number): void;
        private getLvAwardResp;
        /**
        * 购买成长基金奖励 请求
        * @param type 成长基金奖励 类型
        */
        buyFundReq(type: protoCommon.fund_type): void;
        private buyFundResp;
        /**
        * 购买成长基金奖励 请求
        * @param lv 成长基金等级
        */
        getFundAwardReq(lv: number): void;
        private getFundAwardResp;
        /**
         * 更新玩家信息 推送
         */
        private updateUserInfoPush;
        /**
         * 更新 重连的 token 推送
         */
        private updateTokenPush;
        /**
        * 玩家升级奖励信息 推送
        */
        private lvAwardInfoPush;
        /**
         * 服务器踢出推送
         */
        private kickPush;
        private exchangeGuidePush;
        /**
         * /返回界面
         * @param msg 附带关闭游戏时的信息
         * @param isAddId 附带信息是否加游戏id头
         */
        backPage(msg?: string, isAddId?: boolean, needClose?: boolean): void;
        createFriendRoomReq(roomType?: number): void;
        private createFriendRoomResp;
        joinFriendRoomReq(id: number): void;
        private joinFriendRoomResp;
        startMatchReq(type: number, roomId?: number): void;
        private startMatchResp;
        cancelMatchReq(): void;
        private cancelMatchResp;
        enterRoomReq(type: number, roomId?: number): void;
        private enterRoomResp;
        changeRoomReq(roomId?: number): void;
        private changeRoomResp;
        leaveRoomReq(): void;
        private leaveRoomResp;
        readyReq(): void;
        /*******************抢庄类好友房****************** */
        qzdzFriendRoomConfigReq(): void;
        private qzdzFriendRoomConfigResp;
        qzdzCreateFriendRoomReq(config: protoCommon.qzdz_friend_room_config_type[]): void;
        private qzdzCreateFriendRoomResp;
        qzdzFriendRoomInfoReq(roomId: number): void;
        private qzdzFriendRoomInfoResp;
        qzdzJoinFriendRoomReq(roomId: number): void;
        private qzdzJoinFriendRoomResp;
        /**好友房配置请求 */
        friendRoomConfigReq(): void;
        /**好友房配置响应 */
        private friendRoomConfigResp;
        private marqueePush;
        GMSend(str: string): void;
        GMrespon(msg: any, err?: any): void;
        /** ********************活动相关*******************************/
        /**
         * 活动信息推送
         */
        private activeInfoPush;
        /**
         * 活动排行奖励信息推送
         */
        private activeRankRewardsPush;
        /**
         * 空投红包奖励推送
         */
        private activeKongTouRewardPush;
        /**
         * 请求具体活动基础信息
         * @param actType 活动类型
         * @param actId 活动ID
         */
        activeBaseReq(actType: number, actId: string): void;
        private activeBaseResp;
        /**
         * 请求活动排行榜
         * @param actType 活动类型
         * @param actId 活动ID
         * @param type 排行榜类型
         * @param page 请求页数
         * @param page_len 每页长度
         */
        activeRankReq(actType: number, actId: string, type: protoCommon.act_rank_type, page: number, page_len: number): void;
        private activeRankResp;
        /**
         * 活动操作
         * @param actType 活动类型
         * @param actId 活动ID
         * @param type 操作类型
         * @param cost 红包空投的值，用于判断能否抽奖
         */
        activeOperateReq(actType: number, actId: string, type: protoCommon.act_operate_type, opreateData: IActivityOperateData): void;
        private activeOperateResp;
        /** ********************活动相关*******************************/
        private netRequest;
        private cmdTransform;
        private ErrorCallPush;
        private errorCodePushHandle;
        private errorCodePush;
        private removeStartLoadingView;
    }
    export enum CurrencyId {
        BRL = 1,
        BTC = 2,
        ETH = 3,
        PHP = 4,
        TRX = 5,
        USD = 6,
        USDT = 7,
        XRP = 8
    }
    export class Nationalcurrency {
        private currencyList;
        private static _instance;
        static getInstance(): Nationalcurrency;
        /**
        * 请求货币列表
        *
        */
        reqCurrencyList(callBack?: Function): Promise<any>;
        private respCurrencyList;
        /**
         * 设置货币图标
         * @param node 设置节点
         * @param id 货币id
         */
        setCurrencyIcon(node: cc.Node, id: number, scale?: number): void;
        private loadLocalAsset;
        getCurrencyDataById(id: number): any;
        /**
         * 获指定货币数据
         * @param code 货币code
         * @returns 货币数据
         */
        getCurrencyDataByCode(code: string): any;
        /**
         * 货币icon
         * @param id 货币id
         */
        private currencyIdConvert;
        private isLoadLocalIcon;
        /**
         * 货币符号转换字符串
         * @param id 货币id
         * @returns 货币符号
         */
        currencySignConvert(id?: number): string;
        /**
         * 货币符号转换字符串
         * @param code 货币code
         * @returns 货币符号
         */
        currencySignConvertByCode(code: string): string;
        basevalueToCurrency(value: number): number;
    }
    export class RecordDetail_WebView extends game.UIView {
        bg: cc.Node;
        btnBack: cc.Node;
        webView: cc.Node;
        private _isLandscape;
        private _registerEvent;
        private _unRegisterEvent;
        /**
         * 窗口size改变
         */
        private _onResize;
        onBtnBackTouch(): void;
        start(): void;
        onOpen(fromUi: number, data: any): void;
        onDestroy(): void;
        private setWebUrl;
        /**
         * 界面布局
         * @param checkOri 是否重新检测屏幕方向 (首次布局才需要检测)
         */
        private _layout;
        private _autoScale;
    }
    export class CoreUtils {
        static getDstToStr(...args: string[]): string;
        /**
         * 加载远程资源
         *
         * @static
         * @param {cc.Node} node 节点
         * @param {string} url 资源地址
         * @param {string} assetKey 资源使用key
         * @memberof CoreUtils
         */
        static getSpriteFrame(node: cc.Node, url: string, assetKey: string): void;
        /**
        * 获取头像
        * @param node
        * @param id
        * @param data
        */
        static getHeadIcon(node: cc.Node, id: number, data: {
            atlas?: string;
            name?: string;
            url?: string;
        }, bundleName: string): void;
        /**
         * 设置灰色滤镜
         * @param node node节点 或 label、sprite组件
         * @param gray true变灰
         * @param children 子项是否变灰 默认false 只有node会有子项
         * @param interactable  当节点有bttton组件时，是否根据节点状态设置按钮事件是否被响应，如果为true，gray为true时按钮被禁用，false时开启
         */
        static setGray(node: cc.Node | cc.Label | cc.Sprite, gray?: boolean, children?: boolean, interactable?: boolean): void;
        /**
         * 设置节点全屏显示缩放,节点的宽高不能为0
         * @param node
         */
        static setNodeFullScreen(node: cc.Node): void;
        static renderNodes(datas: IRenderType[], nodeParent: cc.Node, scale?: number): void;
        static renderNode(data: IRenderType, nodeParent: cc.Node, scale?: number): cc.Node;
        /**
         * 文件是否存在
         * @param filePath 文件路径
         * @param bundleName bundleName名
         * @returns
         */
        static isFileExist(filePath: string, bundleName?: string): boolean;
        /**
         * 新建事件回调
         * @param node 节点
         * @param compName 脚本名
         * @param handlerName 方法名
         */
        static createEventHandler(node: cc.Node, compName: string, handlerName: string, customData?: string): cc.Component.EventHandler;
        /**
         * 主动触发窗口大小变化的事件
         * 主要解决初始化时，预制节点上的widget组件 resize监听事件
         */
        static sendWindowResizeEvent(): void;
        /**
         *  生成多语言图片配置
         *
         * @static
         * @param {string} bundleName
         * @memberof CoreUtils
         */
        static createI18nTextureConfig(bundleName?: string): void;
        /**下载 */
        static Download(content: any, filename: any): void;
        /**
         * 服务器传过来的筹码，转换为千分号(后台指定保留小数位)
         *  @param v 要转换的数字，默认是分制
         *  @param c 除数
         *  @param  isReserved 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理)
         *  @param  thousandSign 千分位符号
         */
        static formatNumberBySrvAssign(v: number | Long, c?: number, isReserved?: boolean, thousandSign?: string): string;
        /**转化金币展示格式多国货币
         * @param coin — 金币
         * @param places — 保留几位小数点，默认为2 参数isReserved为true才有效，isReserved默认true
         * @param c — 除数
         * @param isReserved — 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理)
         */
        static formatNumToKMBCoinRate(coin: number, c?: number, isReserved?: boolean): string;
        /**
         * 转化金币展示格式
         * @param coin 金币
         * @param c 除数
         * @param  isReserved 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理)
         */
        static formatNumToKMBBySrvAssign(coin: number, c?: number, isReserved?: boolean): string;
        /**
        * 转化金币展示格式
        * @param coin 金币
        * @param currencyId 货币符号id
        * @param places 保留几位小数点，默认为2 参数isReserved为true才有效，isReserved默认true 目前失效，由服务器传来的小数位控制
        * @param c 除数
        * @param  isReserved 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理) 目前失效，由服务器传来的小数位控制
        */
        static formatNumToKMBSgin(coin: number, currencyId?: number, places?: number, c?: number, isReserved?: boolean): string;
        /**根据浏览器截取的语言然后并返回语言缩写 */
        static getCurLanguage(): game.LanguageType;
        /**获取服务端时间 是单位 毫秒的时间戳*/
        static getServerTimestamp(): number;
        /**
         * 复制内容到剪切板
         * @param text
         */
        static copyText(text: string): void;
        static getTimestampRoller(ciphertext: string, column: number, rollerId: number): string[];
        static loadResPrefab(path: string, bundle: string, cb: Function, data: any): void;
        /**获取 commonRes 路径 */
        static getCommonResPath(): string;
        /**获取 game_core bundle version */
        private static gameCoreBundleMd5;
        static getGameCoreMd5(): string;
        static getRealBundle(bundleName: string, path?: string | string[]): string;
        /**
         * 游戏id转化，有倒数第二位其他类型的都转成0，真实的bundle在普通工程上
         * gameid 如果传入 game_1000111 那么会返回  game_1000101
         * gameid 如果传入 1000111 那么会返回  1000101
         * 如果是捕猎游戏，因为
         */
        static convertGameId(gameid: string): string;
        /** 获取当前游戏id 所属类型（返回的0 1 2 3代表不同玩法）
          * gameId ：number
         */
        static getGameModel(gameId?: number): number;
        /**
         * 替换一个字符串的第几个字符
         * @param str 需要替换的目标字符
         * @param index 第几个字符
         * @param char 替换成该字符
         * @returns
         */
        static replaceStr(str: any, index: any, char: any): string;
        static renderCock(game_id: number, sprite: cc.Sprite, data: protoReport.hash_card_num_type, curSize?: cc.Size, dis?: number, isItem?: boolean): void;
        static addChildCockPic(game_id: number, parent: cc.Node, picName: number, x: number, scaleX: number, childName: string, curSize?: cc.Size): void;
        static setCockSpriteFrameFromRemote(sprite: cc.Sprite, path: string, curSize?: cc.Size): void;
        static addChildPic(game_id: number, parent: cc.Node, picName: number, x: number, scaleX: number, childName: string, curSize?: cc.Size): void;
        /**从本地加载图片 */
        static setSpriteFrameFromLocal(resKeeper: game.ResKeeper, sprite: cc.Sprite, path: string, bundleName: string): void;
        static setSpriteFrameFromRemote(sprite: cc.Sprite, path: string, curSize?: cc.Size): void;
        /**修改加载方式 处理加载远端图片跨域问题 */
        static loadRemoteByImageElement(resKeeper: game.ResKeeper, node: cc.Node, url: string, useKey?: string, target?: any, successCall?: Function, failCall?: Function): void;
        static hideHashJiaoBiao(nodeParent: cc.Node): void;
        /**single card info */
        static renderExtInfo(data: protoReport.hash_card_num_type, nodeParent: cc.Node, x?: number, y?: number): void;
        /**是否展示游戏记录 */
        static isShowRecordDetail(bo: boolean): void;
    }
    export class BannerInfo {
        results: protoCommon.marqueePush[];
        private guideTime;
        static instance: BannerInfo;
        static getInstance(): BannerInfo;
        /**
         * 注册消息
         */
        registerMessage(): void;
        private rewardNoticeEvent;
        unRegisterMessage(): void;
        /**
        * 服务器过来的 公告
        * @param message
        * @param type
        * @param data
        */
        private marqueePush;
        /**
         * 前端配发跑马灯
         * @param msg 内容
         * @param startTime
         * @param endTime
         * @param intervalTime //间隔时间,使用于播放多次
         * @param limitTime //最大播放次数,小于等于0表示不限次数默认1次
         */
        sendMarqueePush(msg: string, startTime?: number, endTime?: number, intervalTime?: number, limitTime?: number): void;
    }
    export class BannerItem {
        /**
         * 跑马灯ID
         */
        id: number;
        /**
         * 类型, 平台: 1, 游戏: 2
         */
        type: BannerType;
        /**
         * 对应的游戏id
         */
        gameId: number;
        /**
         * 渠道id
         */
        channelId: number;
        /**
         * 优先级
         */
        priority: number;
        /**
         * 重复
         */
        repeat: number;
        /**
         * 展示内容
         */
        content: string;
        /**
         * 是否关闭(平台控制可能某一条需要马上关闭)
         */
        closeState: boolean;
        /**
         * 公告开始展示时间（在这个时间段才会展示）
         */
        startTime: number;
        /**
         * 公告结束展示时间（过了这个时间段会清除，一般是指活动公告）
         */
        endTime: number;
        /**
         * 间隔时间
         */
        intervalTime: number;
        /**
         * 最大播放次数
         */
        limitTime: number;
        /** 消息节点的起点在跑马灯左侧 默认为false 表示起点在右侧 */
        isStartPosAtLeft: boolean;
        /** 消息本身的一个类型标签 用于判断多条消息是否为同一类 */
        tag: string;
        /**某一系列的消息只能同时存在一个 新的来了就把同tag的旧的移除 */
        isExistSingle: boolean;
    }
    export class Banner extends game.View {
        rfNode: cc.Node;
        friendText: cc.RichText;
        maskNode: cc.Node;
        bgSk: sp.Skeleton;
        private defaultWidth;
        private widthOption1;
        private widthOption2;
        private isFriendCodeInCenter;
        private bannerItemList;
        private runtime;
        private pacetime;
        private isHide;
        private isruning;
        private isInFriendRoom;
        private isFristShow;
        private initParam;
        onLoad(): void;
        start(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /**
         * 初始化{}
         * @param param 参数
         */
        init(param: BannerParam): void;
        /**
         * 初始化数据
         */
        private initData;
        /**
         * 初始化ui
         */
        private initUI;
        /**
         * 注册消息
         */
        registerMessage(): void;
        unRegisterMessage(): void;
        onDestroy(): void;
        /**
         * 修正位置
         */
        private fixedLabelsPosition;
        /**
         * 开始跑马灯
         */
        private startScroll;
        private runBanner;
        private getItem;
        /**
         * 重置跑马灯的位置到开始位置
         */
        private resetPos;
        /**
         * 滚动跑马灯
         */
        private scrollAni;
        /**
         * 滚动完成
         */
        private scrollComplete;
        /**
         * 服务器过来的 公告
         * @param message
         * @param type
         * @param data
         */
        private marqueePush;
        private handleMess;
        /**
         * 排序算法规则
         * @param a
         * @param b
         */
        private sortListener;
        private sortOut;
        private rule;
        private hideAni;
        private showAni;
        /**列表中是否有数据 */
        private hasPlayData;
        /** 推送需要关闭的消息 */
        private pushCloseItem;
        /**
         * 对于一些公告 ，循环插入
         */
        private loopInsert;
    }
    export enum ReportType {
        ERROR = 0,
        INFO = 1
    }
    /**
     * 玩家行为记录
     */
    export class BehaviorRecord {
        private static _instance;
        private preErrorMsgArr;
        static get instance(): BehaviorRecord;
        private reqUrl;
        init(): void;
        errorReport(file: any, line: any, msg: any, error: any): void;
        /**
         * http 传错误日志
         * info = {
         *  "type"  : "",
            "key"   : "",
            "value" : "",
            "msg"   : "",
            }
         */
        private httpCollectDataSend;
    }
    export class CoreProto {
        bundle: string;
        protoHelper: ProtocolHelper;
        private netNode;
        jpInfos: protoReport.jpInfoType[];
        private static _instance;
        static getInstance(): CoreProto;
        constructor();
        registerMess(): void;
        destroyMess(): void;
        setReceiveCallBack(): void;
        init(call?: Function): void;
        destroy(): void;
        /**
         * 网络断开 需要重置一些数据
         */
        private netOnClose;
        private netRequest;
        private worldMissionInfoResp;
        private worldMissionStartPush;
        private worldMissionUpdatePush;
        private worldMissionRewardPush;
        private worldMissionDonePush;
        private worldMissionStopPush;
        /**
         * 请求世界boss任务信息
         * @param gameId
         */
        worldMissionInfoReq(gameId: number): void;
        jackpotInfoReq(gameid: number): void;
        private jackpotInfoResp;
        private jackpotRewardPush;
        jackpotDetail(msg: any, err?: any): any;
        normalSpinDetail(msg: any, err?: any): any;
        slot_commonGameDetail(msg: any, err?: any): any;
        littleGameDetail(msg: any, err?: any): any;
        freeSpinDetail(msg: any, err?: any): any;
        buyFreeGameDetail(msg: any, err?: any): any;
        doubleCoinDetail(msg: any, err?: any): any;
        worldMissionGameDetail(msg: any, err?: any): any;
        hunter_normalDetail(msg: any, err?: any): any;
        arcade_playerDetail(msg: any, err?: any): any;
        arcade_commonDetail(msg: any, err?: any): any;
        arcade_qzCommonDetail(msg: any, err?: any): any;
        arcade_trucoCommonDetail(msg: any, err?: any): any;
        arcade_JJCommonDetail(msg: any, err?: any): any;
        arcade_qzPlayerDetail(msg: any, err?: any): any;
        arcade_trucoPlayerDetail(msg: any, err?: any): any;
        private errorCodePush;
    }
    /**
     * 在一定时间内跳到最终值
     * 跳动设计 每次都是取差值的一般进行跳动，如果得到的jp比当前值还要小，那么就以最终值的90%
     */
    export class JpItem extends cc.Component {
        /**本地的JP 标示，有客户端初始化传过来的 */
        localId: string;
        /**
         * jp 奖池信息
         */
        jpinfo: protoReport.jpInfoType;
        private targetValue;
        private currtValue;
        private stepValue;
        private startPrecent;
        private needTime;
        private downrate;
        private intervalId;
        private coinrate;
        /**是否暂停JP值跳动 */
        private _isPause;
        /**是否显示JP值跳动节点 */
        private _isShow;
        /**
         * 是否显示JP值跳动节点(true为显示)
         */
        set isShow(v: boolean);
        /**
         * 是否暂停JP值跳动(true为暂停)
         */
        set isPause(v: boolean);
        onLoad(): void;
        start(): void;
        onDestroy(): void;
        init(jpinfo: protoReport.jpInfoType): void;
        updateData(): void;
        private setCurJpValue;
        private countStepValue;
        private changeStep;
        private updateLabel;
    }
    export class JpManager {
        jpInfoArr: protoReport.jpInfoType[];
        jpItems: JpItem[];
        jpReqTime: number;
        timeoutId: number;
        private static _instance;
        static getInstance(): JpManager;
        constructor();
        /**jp中奖信息 */
        jpRewardResp: protoReport.jackpotRewardPush;
        /**
         * jpmanager初始化
         */
        init(): void;
        /**
         * 销毁这个jpmanager 的时候数据数据
         */
        destory(): void;
        private registerEvent;
        private removeEvent;
        /**
         *  请求JP奖池值
         */
        getJpReq(): void;
        stopJpReq(): void;
        /**
         * 请求jp奖池回复
         * @param mess 消息名
         * @param result 结果
         * @param param 附加参数
         */
        private jpResp;
        /**
         * 推送 jp 中奖信息
         * @param mess 消息名
         * @param result 结果
         * @param param 附加参数
         */
        private jpRwardResp;
        /**
         * 设置初始化 jpitem 值，更新展示
         */
        private setJpItemValue;
        /**
         * 设置一个jp 展示的label
         * @param localId jpid  子项目对应的 01字符串 ，02 ，03， 04 。。。发过来
         * @param item label 节点，需要在这个label上跳动
         */
        setJpItem(localId: string, item: cc.Node): void;
        /**
         * 单独设置单个奖池的 JP奖池奖励
         * @param id jpid
         * @param value jp奖赏
         */
        private setJpInfoById;
        /**
         * 获取 该 id 的jp信息
         * @param jpid jp id
         *
         */
        getJpInfo(jpid: number): protoReport.jpInfoType;
        /**
         * 获取 该 id 的jp信息
         * @param localid 00 01 02 03 04
         */
        getJpInfoByLocalId(localid: string): protoReport.jpInfoType;
        /**
         *根据local id值获取的 label 节点
         * @param localId 是初始化 01 02 03 04
         */
        getJpItemByLocalId(localId: string): JpItem[];
        /**
         * 根据真实的 jpid 来获取 label 节点
         * @param jpid  jpinfo 服务器传过来的id
         */
        getJpItemByJpId(jpid: number): JpItem[];
        /**
         * 将本地初始化的 id 来获取 jp 的服务器id
         * @param id 子项目传过来的是末尾2位 01，02，03 ，04 获取 真正的id
         */
        transformJpId(id: string): number;
        /**
         * 服务器的jp ID 转化成本地 id  ，01 02 03
         * @param jpid 服务器传过来的真实jp id
         */
        transformLocalId(jpid: number): string;
        /**
         * 获取所有的item label 节点
         */
        getAllJpItem(): JpItem[];
    }
    export class Loading extends game.View {
        private static _instance;
        private percent;
        private waiteNode;
        private percentLabel;
        private waitePrefab;
        private logoNode;
        private mask;
        static getInstance(): Loading;
        constructor();
        layout(): void;
        /**
         * Loading初始化
         */
        init(): void;
        /**
         * 销毁这个Loading
         */
        destory(): void;
        private registerEvent;
        private removeEvent;
        private show;
        private hide;
        /**
         * 等待百分比展示
         * @param precent 0--100
         */
        loadPercent(percent: number): void;
    }
    export class NetTips implements game.INetworkTips {
        private getLabel;
        connectTips(isShow: boolean): void;
        reconnectTips(isShow: boolean): void;
        requestTips(isShow: boolean): void;
        private showTipNode;
        /**
         * 网络异常，导致网络关闭 弹出的提示框
         * @param isShow 是否展示
         * @param netnode 当前网络节点，如果isShow false 可以传null
         * @param closeState 关闭状态值 是服务器推送的 errorcode ，如果isShow false 可以传null
         */
        netCloseTips(isShow: boolean, netnode: game.NetNode, closeState: number): void;
    }
    export class WebSock implements game.ISocket {
        private _ws;
        onConnected: (event: any) => void;
        onMessage: (msg: any) => void;
        onError: (event: any) => void;
        onClosed: (event: any) => void;
        connect(options: any): boolean;
        send(buffer: game.NetData): boolean;
        close(code?: number, reason?: string): void;
    }
    /**
     * 加载公共配置和自定义配置，通过合并配置后，通过getParameter方法获取指定配置数据
     */
    export class ConfigUtils {
        /** 默认参数配置 */
        static defaultParameters: Object;
        /** 自定义参数配置 */
        static customParameters: Object;
        /** 合并参数配置 */
        /**外部bundle名称 */
        static bundleName: string;
        private static callBack;
        /**
         * 开始加载公共库配置和本地配置(本地配置需在configs文件夹下)
         * @param bundleName 外部bundle名称
         * @param callBack 加载完成回调
         */
        static startLoad(bundleName: string, callBack?: Function): void;
        /** 加载公共配置 */
        private static loadCommonConfigs;
        /** 加载自定义配置 */
        private static loadCustomConfigs;
        /**配置加载完成 */
        private static loadComplete;
        private static mergeConfig;
        /**通过配置名获取配置,没有找到返回undefined */
        static getParameter(_configName: string): any;
        static get curLanguage(): string;
        static getUseKey(className: string): string;
    }
    export class GameCore {
        netnode: game.NetNode;
        protohelper: ProtocolHelper;
        comproto: CommonProto;
        init(resolve: any, reject: any): void;
        destory(): void;
        private registerEvent;
        private removeEvent;
        private initConfig;
        /**
         * 创建跑马灯
         * @param mess 消息
         * @param data bannerparam
         * @param param 附加参数
         */
        private createBanner;
        private initLanguage;
        private EnterGame;
        private enterRoom;
        private leaveRoom;
        /**
        * 检测环境，全局值赋，加载配置，初始化socket节点
        * @param callback    异步函数回调 成功回调
        * @param reject      异步函数回调 失败回调
        */
        baseInit(callback: Function, reject: Function): Promise<void>;
        private onResize;
        /**
         * 获取配置文件
         */
        private httpGetConfig;
        private checkIsLocal;
        private initNetNode;
        /**
         * 初始化socket 并且连接
         */
        private initSocket;
        private loadCommonPop;
        private testForServer;
        static closeSplash(): void;
        private createNetDelay;
        private loadAssetBundle;
    }
    export class MControllerGameCore extends game.MController {
    }
    export class NodeUiConfigGameCore extends game.NodeUiConfig {
    }
    /**
     * 自动测试key(节点、方法)
     * @param BASE_BTN_DIALOG_OK 对话框确认按钮
     * @param BASE_BTN_DIALOG_CANCEL 对话框取消按钮
     * @param BASE_FUNC_GETUSERINFO 获取用户信息
     */
    export enum BaseAutoTestKey {
        BASE_BTN_DIALOG_OK = "BASE_BTN_DIALOG_OK",
        BASE_BTN_DIALOG_CANCEL = "BASE_BTN_DIALOG_CANCEL",
        BASE_FUNC_GETUSERINFO = "BASE_FUNC_GETUSERINFO"
    }
    /**
     * 自动测试错误码
     * @param ERR_NONE 无错误
     * @param ERR_KEYNOTFOUND 键值未配置
     * @param ERR_KEYDATANOTNODE 键值数据非节点
     * @param ERR_NODENOTFOUND 节点未找到
     * @param ERR_NODEINVALID 节点无效
     * @param ERR_UNDEFINEATTR 未定义属性
     * @param ERR_UNDEFEXECFUNC 未定义执行函数
     * @param ERR_KEYDATANOTEXECFUNC 键值数据非可执行函数
     */
    export enum AutoTestErrorCode {
        ERR_NONE = 0,
        ERR_KEYNOTFOUND = 1,
        ERR_KEYDATANOTNODE = 2,
        ERR_NODENOTFOUND = 3,
        ERR_NODEINVALID = 4,
        ERR_UNDEFINEATTR = 5,
        ERR_UNDEFEXECFUNC = 6,
        ERR_KEYDATANOTEXECFUNC = 7
    }
    /**
     * 自动测试属性码
     * @param ATTR_ACTIVE 节点是否激活、可见
     * @param ATTR_INTERACTIVE 节点是否可交互
     * @param ATTR_POSITION_WORLD 节点位置(世界坐标)
     * @param ATTR_TEXT 节点展示文本
     */
    export enum AutoTestAttrCode {
        ATTR_ACTIVE = 1,
        ATTR_INTERACTIVE = 2,
        ATTR_POSITION_WORLD = 3,
        ATTR_TEXT = 4
    }
    /**
     * 自动测试错误
     * @param code 错误码
     * @param msg 错误描述
     */
    export interface IAutoTestError {
        code: AutoTestErrorCode;
        msg?: string;
    }
    /**
     * 接口返回值
     */
    export interface IAutoTestRet {
        err?: IAutoTestError;
        result: any;
    }
    /**
     * 自动测试存储数据
     * @param target 目标（cc.Node、回调函数绑定对象）
     * @param execFunc 回调函数
     */
    export interface IAutoTestData {
        target?: any;
        execFunc?: any;
    }
    export class AutoTest {
        private static _instance;
        private constructor();
        static getInstance(): AutoTest;
        private _dataMap;
        private _enterLoginSuccess;
        private _generateError;
        /**
         * 设置键值对
         * @param key string
         * @param data 数据
         */
        setAutoTestData(key: string, data: IAutoTestData): void;
        resetAutoTestData(): void;
        /**
         * 获取key绑定节点属性
         * @param key string
         * @param attrCode 属性码
         */
        getNodeAttribute(key: string, attrCode: AutoTestAttrCode): string;
        /**
         * 执行key绑定函数
         * @param key 与函数绑定的键值
         * @param args 可变参数
         */
        execKeyFunc(key: string, ...args: any[]): string;
        /**
         * 点击key绑定节点
         * @param key 节点对应键值
         */
        clickNode(key: string): void;
        /**
         * 模拟点击
         * @param x 世界坐标系x
         * @param y 世界坐标系y
         * @param duration 按下至抬起的间隔时间（ms）
         */
        click(x: number, y: number, duration?: number): void;
        /**
         * 滑动屏幕
         * @param startPos 开始世界坐标
         * @param endPos 结束世界坐标
         * @param duration 历时（ms）
         */
        touchMove(startPos: cc.Vec2, endPos: cc.Vec2, duration?: number): void;
        /**
         * 发送gm命令
         * @param cmdStr 命令
         */
        gmSend(cmdStr: string): void;
    }
    export class HiloCardShow extends cc.Component {
        shade: cc.Node;
        tipSp: cc.Node;
        tipSpriteFrames: cc.SpriteFrame[];
        start(): void;
        upadtaCardShow(data: any): void;
    }
    export enum COPY_TYPE_ARCADE {
        CIPHERTEXT = 0
    }
    export class BinanceHashCheckCenterArcade extends game.View {
        roundId: cc.Label;
        timeText: cc.Label;
        BSC_Box: cc.Node;
        binanceBlock: cc.Label;
        copyCiphertext: cc.Label;
        copyCiphertextBtn: cc.Node;
        rollerBox: cc.Node;
        paiXingBox_baiJiaLe: cc.Prefab;
        closeBtn: cc.Node;
        rollerIconItem: cc.Prefab;
        onOpen(): void;
        layout(): void;
        upShow(): void;
        onClose(): void;
        private openHelpView;
        private openWindow;
        private copyText;
        private upIconShow;
    }
    export class BinanceHashHelpKJArcade extends game.View {
        leftBtn: cc.Node;
        rightBtn: cc.Node;
        checkBtn: cc.Node;
        checkBtnLabel: cc.Node;
        ruleSpr: cc.Sprite;
        private pageIndex;
        private minIndex;
        private maxIndex;
        /** 哈希模式 */
        private gameMode;
        private isGameId;
        onLoad(): void;
        onDestroy(): void;
        private addEvent;
        private removeEvent;
        /**
         * 检查是否第一次进入该游戏
         */
        onCheckBtnView(isGameId?: boolean): void;
        private onCheckBtn;
        setGameMode(data: any): void;
        private onLeftBtn;
        private onRightBtn;
        private setBtnClick;
        private btnList;
        setPageShow(index?: number): void;
    }
    export class BinanceHashHelpWFArcade extends game.View {
        ruleSpr: cc.Sprite;
        setPageShow(): void;
    }
    export enum BANANCEHASHHELPTYPE {
        RULE = 0,
        ROLLER = 1
    }
    export class BinanceHashHelpArcade extends game.View {
        closeBtn: cc.Node;
        toggleContainer: cc.Node;
        ruleView: cc.Node;
        rollerView: cc.Node;
        content: cc.Node;
        curIndex: BANANCEHASHHELPTYPE;
        jinRu_pageTime: number;
        onLoad(): void;
        start(): void;
        onOpen(eny: any, data: any): void;
        private addEvent;
        layout(): void;
        private onCloseBtn;
        private onToggleEvent;
        private setViewActive;
    }
    export class BinanceHash_300013 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300023 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300033 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300043 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300053 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300063 extends cc.Component {
        title: cc.Label;
        result: cc.Sprite;
        index: cc.Label;
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300073 extends cc.Component {
        label1: cc.Label;
        label2: cc.Label;
        label3: cc.Label;
        sprite1: cc.Sprite;
        sprite2: cc.Sprite;
        sprite3: cc.Sprite;
        game_id: string;
        _defaultBundleName: string;
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300083 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300093 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300103 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300113 extends cc.Component {
        init(): void;
        private setItemIcon;
    }
    export class BinanceHash_300123 extends cc.Component {
        nodeCock: cc.Node;
        nodeDragonTiger: cc.Node;
        labelResult: cc.Label;
        labelLong: cc.Label;
        labelHu: cc.Label;
        spriteLong: cc.Sprite;
        spriteHu: cc.Sprite;
        nodeRed: cc.Node;
        nodeBlue: cc.Node;
        labelRed: cc.Label;
        labelBlue: cc.Label;
        labelCenter: cc.Label;
        game_id: string;
        _defaultBundleName: string;
        protected onLoad(): void;
        init(): void;
        /**币安哈希斗鸡 */
        initGamecockResult(cardInfo: any[]): void;
        /**币安哈希龙虎斗 */
        initDragonTigerResult(cardInfo: any[]): void;
        setCock(resKeeper: game.ResKeeper, sprite: cc.Sprite, point: number): void;
        private setItemIcon;
    }
    export class CoinHashVerificationInstructions extends game.View {
        toggle: cc.ToggleContainer;
        listView: cc.Node;
        /******  种子 start  ****************************************** */
        currentTime: cc.Node;
        /**下一期服务器种子 */
        current_serverSeed: cc.Label;
        /**下一期服务器种子哈希 */
        current_serverSeedHash: cc.Label;
        /**下一期客户端种子 */
        current_clientSeed: cc.Label;
        /**下一期随机数 */
        current_nonce: cc.Label;
        lastTime: cc.Node;
        /**上一期服务器种子 */
        lastTime_serverSeed: cc.Label;
        /**上一期服务器种子哈希 */
        lastTime_serverSeedHash: cc.Label;
        /**上一期客户端种子 */
        lastTime_clientSeed: cc.Label;
        /**上一期随机数 */
        lastTime_nonce: cc.Label;
        /******  种子 end  ****************************************** */
        /******  验证 start  ****************************************** */
        /**验证 服务器种子 */
        verify_serverSeed: cc.Label;
        editServerSeedString: string;
        /**验证 服务器种子哈希 */
        verify_serverSeedHash: cc.Label;
        editServerSeedHashString: string;
        /**验证 客户端种子 */
        verify_clientSeed: cc.Label;
        editClientSeedString: string;
        /**验证 随机数 */
        verify_nonce: cc.Label;
        labelTimes: cc.Label;
        throwTimes: number;
        defaultStr: string;
        nodeCoinParent: cc.Node;
        scrollContainer: cc.Node;
        fixedContainer: cc.Node;
        timesTitleLabel: cc.Label;
        editNonceString: string;
        lotteryHash: cc.Label;
        private GuessHash_type;
        private lastData;
        private currentData;
        jinRu_pageTime: number;
        /**次数范围 */
        timesMin: number;
        timesMax: number;
        private data;
        onLoad(): void;
        /**不同游戏重置一些初始值 */
        private reset;
        onOpen(fromUI: number, data: IcoinHashVerify): void;
        /**关闭界面 */
        btnCloseCall(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /** 复制 */
        private copyText;
        /**toggle click */
        private togglesClick;
        private updatetoggle;
        private updataShowList;
        /**cur 当前一期*/
        setseed_1(): void;
        /**prev */
        setseed_2(): void;
        /***********验证界面 各个哈希数据 start******************************************************************** */
        /**验证按钮*/
        private yanzhengBtn;
        /**验证信息 */
        private setVerifyInfo;
        /**server seed */
        private editBoxServerSeed;
        /**server seed hash */
        private editBoxServerSeedHash;
        /**client seed */
        private editBoxClientSeed;
        /**随机数 */
        private editBoxNonce;
        /**投掷次数 */
        private editBoxThrowTimesChange;
        private editBoxThrowTimesEnd;
        /***********验证界面 各个哈希数据 end******************************************************************** */
        /***********验证界面   展示  start******************************************************************** */
        private getNewHashStr;
        private updateCoinHashResult;
        private handleCoinHashResult;
        showCoinList(coinsArr: number[]): void;
        /**
         * 计算 coin hash result
         * @param lotteryHashString 新的哈希值
         * @param _throwTimes 投掷次数
         * @returns
         */
        private handleCoinResult;
        private handlePlinkoHashResult;
    }
    export class HiloHashVerificationInstructions extends game.View {
        toggle: cc.ToggleContainer;
        listView: cc.Node;
        /******  种子 start  ****************************************** */
        currentTime: cc.Node;
        /**下一期服务器种子 */
        current_serverSeed: cc.Label;
        /**下一期服务器种子哈希 */
        current_serverSeedHash: cc.Label;
        /**下一期客户端种子 */
        current_clientSeed: cc.Label;
        /**下一期随机数 */
        current_nonce: cc.Label;
        lastTime: cc.Node;
        /**上一期服务器种子 */
        lastTime_serverSeed: cc.Label;
        /**上一期服务器种子哈希 */
        lastTime_serverSeedHash: cc.Label;
        /**上一期客户端种子 */
        lastTime_clientSeed: cc.Label;
        /**上一期随机数 */
        lastTime_nonce: cc.Label;
        /******  种子 end  ****************************************** */
        /******  验证 start  ****************************************** */
        /**验证 服务器种子 */
        verify_serverSeed: cc.Label;
        editServerSeedString: string;
        /**验证 服务器种子哈希 */
        verify_serverSeedHash: cc.Label;
        editServerSeedHashString: string;
        /**验证 客户端种子 */
        verify_clientSeed: cc.Label;
        editClientSeedString: string;
        /**验证 随机数 */
        verify_nonce: cc.Label;
        labelTimes: cc.Label;
        throwTimes: number;
        defaultStr: string;
        nodeCardParent: cc.Node;
        editNonceString: string;
        lotteryHash: cc.Label;
        card: cc.Prefab;
        private GuessHash_type;
        private lastData;
        private currentData;
        jinRu_pageTime: number;
        onLoad(): void;
        onOpen(fromUI: number, data: IcoinHashVerify): void;
        /**关闭界面 */
        btnCloseCall(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /** 复制 */
        private copyText;
        /**toggle click */
        private togglesClick;
        private updatetoggle;
        private updataShowList;
        /**cur 当前一期*/
        setseed_1(): void;
        /**prev */
        setseed_2(): void;
        /***********验证界面 各个哈希数据 start******************************************************************** */
        /**验证按钮*/
        private yanzhengBtn;
        /**验证信息 */
        private setVerifyInfo;
        /**server seed */
        private editBoxServerSeed;
        /**server seed hash */
        private editBoxServerSeedHash;
        /**client seed */
        private editBoxClientSeed;
        /**随机数 */
        private editBoxNonce;
        /**投掷次数 */
        private editBoxThrowTimes;
        /***********验证界面 各个哈希数据 end******************************************************************** */
        /***********验证界面   展示  start******************************************************************** */
        private updateCoinHashResult;
        showCoinList(coinsArr: any[]): void;
        /**
         * 计算 coin hash result
         * @param lotteryHashString 新的哈希值
         * @param _throwTimes 投掷次数
         * @returns
         */
        private handleCoinResult;
    }
    /**哈希特殊游戏Id配置 */
    export class HashConst {
        /**带切牌模式游戏 */
        static hashCutStageGames: number[];
        /**游戏结果唯一(无需拼凑) */
        static HandleHashInfoGames: number[];
        /**验证说明有三页 */
        static hashVerificationInstructionsNum3: number[];
        /**验证说明有四页 */
        static hashVerificationInstructionsNum4: number[];
        /**有多语言桌子的游戏id */
        static languageCommonResZZ: number[];
    }
    /** 是否可验证 */
    export enum OnOffVerify {
        /**可验证 */
        Verify = 0,
        /**不可验证 */
        notVerify = 1
    }
    /** 验证状态 */
    export enum VerifyState {
        /**未验证 */
        noneVerify = 10,
        /**已验证 */
        alreadyVerify = 11
    }
    /** 验证结果类型 */
    export enum VerifyResultType {
        /**成功 */
        succeed = 0,
        /**失败 */
        failure = 1
    }
    export enum COPY_TYPE {
        mingWenText = 0,
        miWenText = 1,
        copyMiWenText = 2
    }
    export class CardVerifyCenter extends game.View {
        mingWenText: cc.Label;
        miWenText: cc.Label;
        miWenTextCopy: cc.Label;
        cardItem_mix: cc.Node;
        cardItem_max: cc.Node;
        huanPaiLabel: cc.Node;
        shoudongChayanLabel: cc.Node;
        mingWenBox: cc.Node;
        miWentextBox: cc.Node;
        copyMiWentextBox: cc.Node;
        verifyShowType: cc.Node[];
        titleSp: cc.Sprite;
        chongzhiBtn: cc.Node;
        yanzhengBtn: cc.Node;
        paiduiBtn: cc.Node;
        chongzhiSp: cc.Sprite;
        bgSp: cc.Sprite;
        closeSp: cc.Sprite;
        copySp: cc.Sprite[];
        bgSpriteframe: cc.SpriteFrame[];
        closeSpriteframe: cc.SpriteFrame[];
        btnSpriteframe: cc.SpriteFrame[];
        cardData: protoReport.hash_card_num_type;
        thatCardData: protoReport.hash_card_num_type;
        private gameId;
        /** 是否可验证 */
        private onOffVerify;
        /** 验证状态 */
        private verifyState;
        /** 验证结果 */
        private verifyResultType;
        copyMiWentextString_1: string;
        noneVerifyColor_1: cc.Color;
        noneVerifyColor_2: cc.Color;
        succeedColor: cc.Color;
        /** 失败颜色 */
        failureColor: cc.Color;
        curItemSize: cc.Size;
        cardItem_max_size: cc.Size;
        cardItem_mix_size: cc.Size;
        needShowHashInfos: any;
        allHashInfos: any;
        private allCardDatas;
        private closeBtnPos;
        layoutLandscape(): void;
        layoutPortrait(): void;
        onLoad(): void;
        languageUpdata(): void;
        onDestroy(): void;
        loadConfig(): void;
        /**
         * UI_ARCADE_HASH_CHECK_CARD
         * @param fromUI
         * @param allCardDatas
         * @returns
         */
        onOpen(fromUI: number, allCardDatas: IHashCardVerifyCenter): void;
        initView(data: protoReport.hash_card_num_type): void;
        /**设置多语言 */
        private setLanguage;
        /**获取多语言图片 */
        private getDstStrString;
        /**初始化 */
        protected upShow(data: protoReport.hash_card_num_type): void;
        /** 图片赋值_Max */
        private upShowCardIcon_Max;
        /** 图片赋值_Mix */
        private upShowCardIcon_Mix;
        /** 获取图片地址 */
        private getCardPath;
        /**loadRemote */
        private setItemIcon;
        /** 明文 */
        private setmingWenText;
        /** 密文 */
        private setMiWentextText;
        /** 可验证  与  不可验证 */
        private setOnOffVerify;
        /** 未验证  与  已验证  */
        private setVerifyState;
        /** 验证 成功 与 失败 */
        private setVerifyResultType;
        /** 验证按钮显示状态 */
        private setyanzhengType;
        /** 重置按钮显示状态 */
        private setchongzhiTyoe;
        /** 明文按钮显示状态 */
        private setmingWenBtnType;
        /** copy密文按钮显示状态 */
        private setcopyMiWenBtnType;
        /** copy 密文text */
        private setCopyMiWenText;
        /** 各状态明文 密文 颜色变化 */
        private setLabelColor;
        /** 验证成功与失败显示*/
        private setVerifyShowType;
        /**小牌，换张牌试试 按钮*/
        private cardItemMixButton;
        /** 点击小牌 换牌完成回应 */
        private cardMixClickBack;
        /**大牌，手动查验 按钮 */
        private cardItemMaxButton;
        /** 查看完整牌堆 */
        paiduiButton(): void;
        /** 哈希开奖说明 */
        private helpButton;
        /** 复制 */
        private copyText;
        /** 验证button */
        private yanzhengButton;
        /** 重置Button */
        private chongzhiButton;
        onClose(): void;
    }
    /**
* 从游戏中打开公平性
* let lastData = GlobalData3003501.Instance.getlastData();
* let resultTimes = lastData && lastData.serverSeed ? 10 : null;
* let data: core.IcommonFairness = {
*     toggleIndex: 1,
*     game_id: game.Global.gameId,
*     hashDataGame: [GlobalData3003501.Instance.getcurrentData(), lastData],
*     resultTimes: resultTimes
* }
* game.UIManager.getInstance().open(UIID.UICF_FAIRNESS, data);
*/
    export class CommonFairness extends game.View {
        toggle: cc.ToggleContainer;
        listView: cc.Node;
        /******  种子 start  ****************************************** */
        currentTime: cc.Node;
        /**下一期服务器种子 */
        current_serverSeed: cc.Label;
        /**下一期服务器种子哈希 */
        current_serverSeedHash: cc.Label;
        /**下一期客户端种子 */
        current_clientSeed: cc.Label;
        /**下一期随机数 */
        current_nonce: cc.Label;
        lastTime: cc.Node;
        /**上一期服务器种子 */
        lastTime_serverSeed: cc.Label;
        /**上一期服务器种子哈希 */
        lastTime_serverSeedHash: cc.Label;
        /**上一期客户端种子 */
        lastTime_clientSeed: cc.Label;
        /**上一期随机数 */
        lastTime_nonce: cc.Label;
        /******  种子 end  ****************************************** */
        /******  验证 start  ****************************************** */
        /**验证 服务器种子 */
        verify_serverSeed: cc.Label;
        editServerSeedString: string;
        /**验证 服务器种子哈希 */
        verify_serverSeedHash: cc.Label;
        editServerSeedHashString: string;
        /**验证 客户端种子 */
        verify_clientSeed: cc.Label;
        editClientSeedString: string;
        /**验证 随机数 */
        verify_nonce: cc.Label;
        labelTimes: cc.Label;
        nodeResultParent: cc.Node;
        lotteryHash: cc.Label;
        /**次数范围 */
        timesMin: number;
        timesMax: number;
        resultTimes: number;
        editNonceString: string;
        defaultStr: string;
        protected data: IcommonFairness;
        protected GuessHash_type: Hash_BoolType;
        protected lastData: any;
        protected currentData: any;
        private _enterPageTime;
        onLoad(): void;
        /**不同游戏重置一些初始值 */
        init(...args: any[]): void;
        onOpen(fromUI: number, data: IcommonFairness): void;
        /**设置首先打开的页面index */
        initPage(): void;
        /**关闭界面 */
        btnCloseCall(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /** 复制 */
        protected copyText(ent: any, type: number): void;
        /**toggle click */
        protected togglesClick(target: cc.Toggle): void;
        protected updatetoggle(): void;
        protected updataShowList(): void;
        /**cur 当前一期*/
        setseed_1(): void;
        /**prev */
        setseed_2(): void;
        /***********验证界面 各个哈希数据 start******************************************************************** */
        /**验证按钮*/
        protected yanzhengBtn(): void;
        /**验证信息 */
        protected setVerifyInfo(): void;
        /**server seed */
        protected editBoxServerSeed(label: cc.Label): void;
        /**server seed end */
        protected editBoxServerSeedEnd(label: cc.Label): void;
        /**client seed */
        protected editBoxClientSeed(label: cc.Label): void;
        /**client seed end */
        protected editBoxClientSeedEnd(label: cc.Label): void;
        /**随机数 */
        protected editBoxNonce(label: cc.Label): void;
        /*** 随机数end */
        protected editBoxNonceEnd(label: cc.Label): void;
        /**编辑次数 */
        protected editBoxResultTimesChange(label: cc.Label): void;
        /**结束编辑次数 */
        protected editBoxResultTimesEnd(label: cc.Label): void;
        protected resetResultTimes(editNum: number): void;
        /***********验证界面 各个哈希数据 end******************************************************************** */
        /***********验证界面   展示  start******************************************************************** */
        protected getNewHashStr(): any;
        protected updateHashResult(): void;
        /**检查数据是否有效 */
        checkHasResult(): boolean;
        /**计算结果 */
        handleHashResult(): void;
        /**
         * 计算 game result, 本游戏的计算过程
         * @param lotteryHashString 新的哈希值
         * @param resultTimes
         * @returns
         */
        handleGameResult(lotteryHashString: string, _resultTimes: number): number[];
        showResult(arr: number[]): void;
    }
    export class CoreListView extends game.ListView {
    }
    export class CurrentBetView extends CoreListView {
    }
    export class CurrentBet extends game.View {
        closeBtn: cc.Node;
        scrollView: cc.Node;
        allBetScores: cc.Label;
        allBetNum: cc.Label;
        cutLabel: cc.Node;
        selfNode: cc.Node;
        selfRank: cc.Node;
        selfLevel: cc.Node;
        selfHead: cc.Node;
        selfUserId: cc.Label;
        selfCurrentBet: cc.Label;
        selfAllBet: cc.Label;
        selfLevelSpr: cc.SpriteFrame[];
        private recordInfo;
        private info;
        private selfInfo;
        onOpen(fromUI: number, args: any): void;
        start(): void;
        onLoad(): void;
        onDestroy(): void;
        layout(): void;
        private listInfo;
        private listUserName;
        private isFirstTime;
        /**数据处理分发 */
        private netRecordPush;
        /**ui更新 */
        private updateUI;
        /**自己ui更新 */
        selfView(): void;
        /**关闭弹窗 */
        private onCloseView;
    }
    export class CurrentBetItem extends game.ListViewItem {
        level: cc.Node;
        rank: cc.Node;
        head: cc.Node;
        userId: cc.Label;
        currentBet: cc.Label;
        allBet: cc.Label;
        levelSpr: cc.SpriteFrame[];
        updateItem(index: number, data: any): void;
        private updateViewUi;
    }
    export class HashCardItem extends game.ListViewItem {
        card: cc.Sprite;
        jiaobiao: cc.Label;
        jiaoBiaoNode: cc.Node;
        IiCoinNode: cc.Node;
        cardItemData: protoReport.hash_card_num_type;
        cardItemDatas: protoReport.hash_card_num_type[];
        idx: number;
        path: string;
        curItemSize: cc.Size;
        onLoad(): void;
        loadHashConfig(call?: Function): void;
        updateItem(index: number, data: protoReport.hash_card_num_type): void;
        private setItemIcon;
        renderJiaoBiao(index: number): void;
        private cardButton;
    }
    export class HashHunterItem extends game.ListViewItem {
        beilvVal: cc.Label;
        hashValLabel: cc.Label;
        copyTipLabel: cc.Node;
        private curBulletHash;
        start(): void;
        copyBtn(): void;
        updateItem(index: number, data: any): void;
    }
    export enum INPUT_MODE {
        NUMERIC = 0,
        SINGLE_LINE = 1
    }
    export class NumericKeypad extends cc.Component {
        label: cc.Label;
        cursorPre: cc.Prefab;
        editingDidBegan: cc.Component.EventHandler[];
        editingDidEnded: cc.Component.EventHandler[];
        textChanged: cc.Component.EventHandler[];
        editingReturn: cc.Component.EventHandler[];
        maxLength: number;
        inputMode: INPUT_MODE;
        placeholder: cc.Label;
        private lenLabel;
        private isFocus;
        cursor: cc.Node;
        private clickNum;
        private editLabel;
        private keyboardLabel;
        private editBoxLabel;
        isEnabled: boolean;
        isKeyBoard: boolean;
        private isShift;
        private isLock;
        private isCtrl;
        private horizontalAlign;
        onLoad(): void;
        private addCursor;
        private initCursor;
        private addEvent;
        private onClick;
        onBlur(): void;
        emitEditingDidEnded(editLabel: cc.Label, keyboardLabel?: cc.Label): void;
        onFocus(ent: cc.Event.EventTouch): void;
        onKeyUp(event: cc.Event.EventKeyboard): void;
        onKeyDown(event: cc.Event.EventKeyboard): void;
        private pastEvent;
        onEditBoxChanged(key: string, editLabel: cc.Label, keyboardLabel?: cc.Label): void;
        emitEditReturn(editLabel: cc.Label, keyboardLabel?: cc.Label): void;
        onBackspace(editLabel: cc.Label, keyboardLabel?: cc.Label): void;
        emitTextChanged(editLabel: cc.Label, keyboardLabel?: cc.Label, key?: string): void;
        upCursorPoint(): void;
        private getStrLen;
    }
    /**捕猎哈希配置 */
    export class HunterHashConst {
        /**服务费 */
        static serviceChargeVal: string;
    }
    export class MinesNumericKeypad extends NumericKeypad {
    }
    export class HashHunterVerifyCenter extends game.ListView {
        onLoad(): void;
        init(args: any): void;
    }
    interface allCardDatas {
        bulletHashVal: string;
        curToggle: number;
    }
    export class HashHunterVerificationInstructions extends game.View {
        leftBtn: cc.Node;
        rightBtn: cc.Node;
        lookCodeBtn: cc.Node;
        rollerList: cc.Node;
        yanzhenNode: cc.Node;
        daimaListNode: cc.Node;
        bulletHsahEditbox: MinesNumericKeypad;
        countEditbox: MinesNumericKeypad;
        topToggleContainer: cc.Node;
        shuoMingTip: cc.RichText;
        bgSptiteFrame: cc.SpriteFrame[];
        kuangSptiteFrame: cc.SpriteFrame[];
        closeBtnSprite: cc.SpriteFrame[];
        toggleSprite: cc.SpriteFrame[];
        nextPageSprite: cc.SpriteFrame[];
        descriptBtnSprites: cc.Sprite[];
        bgSp: cc.Sprite;
        titleSp: cc.Sprite;
        closeBtnBg: cc.Sprite;
        dikuangBg: cc.Sprite;
        private pageId;
        private pageNum;
        private bulletKey;
        private hashCountKey;
        private curHashBulletVal;
        private startHashBulletVal;
        private curToggle;
        private curCongif;
        private bulletHashLanguageKey;
        private isFist;
        private closeBtnPos;
        jinRu_pageTime: number;
        onLoad(): void;
        languageUpdata(): void;
        layout(): void;
        addConfig(): void;
        init(data: allCardDatas): void;
        onOpen(fromUI: number, data: allCardDatas): void;
        /**更新输入框显示 */
        updataEditboxShow(): void;
        private togglesClick;
        private onEditBoxBlur;
        private onEditBoxFinish;
        private editBoxCount;
        private upYanZhendataList;
        private updataShowView;
        private onCloseBtn;
        private onGetBtn;
        private btnPrePage;
        private btnNextPage;
        /**查看代码 */
        lookCoding(): void;
        /**查验 */
        private onCheckBtn;
        private renderBtns;
        updataLabelShow(index: number): void;
        private setPageShow;
    }
    export class HashManualCheck extends game.View {
        label_5: cc.Label;
        tipSp_5: cc.Node;
        cardItem: cc.Node;
        plaintext: cc.Label;
        ciphertext: cc.Label;
        titleSp: cc.Sprite;
        dkwzSp: cc.Sprite;
        copeSp: cc.Sprite;
        copeSp1: cc.Sprite;
        bgSp: cc.Sprite;
        closeSp: cc.Sprite;
        closeSpriteframe: cc.SpriteFrame[];
        bgSpriteframe: cc.SpriteFrame[];
        private gameId;
        private firstTipStr;
        private publicGameId;
        curItemSize: cc.Size;
        private closeBtnPos;
        onLoad(): void;
        languageUpdata(): void;
        private showTip5;
        onOpen(fromUI: number, data: protoReport.hash_card_num_type): void;
        private loadConfig;
        layout(): void;
        /** 获取图片地址 */
        private getCardPath;
        /**loadRemote */
        private setItemIcon;
        private openWindow;
        private copyBtn;
        private closeBtn;
    }
    export class ResultArcadeCardItem extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, data: any): void;
        private setItemIcon;
    }
    export class HashSelectCardItem extends game.ListViewItem {
        card: cc.Sprite;
        jiaobiao: cc.Label;
        jiaoBiaoNode: cc.Node;
        IiCoinNode: cc.Node;
        cardItemData: protoReport.hash_card_num_type;
        private curItemSize;
        onLoad(): void;
        onDestroy(): void;
        loadHashConfig(): void;
        private idx;
        updateItem(index: number, data: protoReport.hash_card_num_type, size?: cc.Size): void;
        private setItemIcon;
        onClick(): void;
    }
    export class HashSelectCardView extends game.ListView {
        content: cc.Node;
        selectcardItemFrame: cc.Prefab;
        title: cc.Label;
        private listItem;
        private frameNode;
        private curItemSize;
        onLoad(): void;
        onDestroy(): void;
        private addEvent;
        private removeEvent;
        init(args: game.IListViewArgs): void;
        currentCard(data: protoReport.hash_card_num_type): void;
        /**
         * @param card 更新的卡牌
         * @param frameNode 卡牌的框节点
         */
        private updataFrameView;
        private cardClick;
        private closeView;
    }
    export class HashSelectCard extends game.View {
        private cardData;
        private hashInfo;
        onOpen(fromUI: number, allCardDatas: IHashCardVerifyCenter): void;
        start(): void;
        layout(): void;
        upShow(): void;
        private upIconShow;
    }
    export class HashRollerIdItemSlot extends cc.Component {
        label: cc.Label;
        private index;
        private data;
        onLoad(): void;
        onDestroy(): void;
        initShow(index: number, data: any): void;
        private addEvnet;
        private removeEvent;
        private onClick;
    }
    export class HashRollerIdListSlot extends cc.Component {
        curRollerText: cc.Label;
        listBtn: cc.Node;
        list: cc.Node;
        item: cc.Prefab;
        private isShow;
        private curIndex;
        onLoad(): void;
        onDestroy(): void;
        initList(curIndex: number, datas: any[]): void;
        private addEvent;
        private removeEvent;
        private onList;
        upShowText(data: any, index?: number): void;
        private upShow;
    }
    export const spin_type_enum: string[];
    export class HashHelpRollerSlot extends cc.Component {
        content: cc.Node;
        rollerTexts: cc.Node;
        rollerList: cc.Node;
        rollerIdList: cc.Node;
        scrollView: cc.ScrollView;
        rollerItem: cc.Prefab;
        private number;
        private rollerId;
        private rollerData;
        private gameData;
        private rollerMaxRow;
        private gameId;
        private rollerModeId;
        private curRollerIndex;
        onLoad(): void;
        onDestroy(): void;
        setScrollToPercent(data: any): void;
        private addEvent;
        private removeEvent;
        private setScrollToPercentVertical;
        private loadJson;
        private upRollerShow;
        private initToggleContainer;
        /**
         * 更新滚轴列表
         * @param rollerId 使用的滚轴id
         * @param gameId 使用的滚轴游戏id
         */
        private upRoller;
    }
    export class HashIconSlot extends cc.Component {
        number: cc.Label;
        bg: cc.Node;
        icon: cc.Node;
        private data;
        onLoad(): void;
        onDestroy(): void;
        private onClickIcon;
        upIconShow(data: IHashGridParam): void;
        private setSize;
    }
    /**
 * 哈希结果格子结构体参数
 * @param gridId 图片id
 * @param number 编号
 * @param size 图片大小
 * @param offset 偏移量
 */
    export interface IHashGridParam {
        gridId: number;
        number: number;
        size?: number;
        offset?: number;
    }
    export enum COPY_TYPE_HASH_CHECK_CENTER {
        PLAINTEXT = 0,
        CIPHERTEXT = 1,
        CHECK_CIPHERTEXT = 2
    }
    export enum game_mode_type_enum {
        normal = 1,
        direct_hash = 2,
        timestamp_hash = 3
    }
    export class HashCheckCenterSlot extends game.View {
        roundId: cc.Label;
        plaintextEditBox: NumericKeypad;
        plaintext: cc.Label;
        ciphertext: cc.Label;
        copyCiphertext: cc.Label;
        plaintextDes: cc.Label;
        ciphertextDes: cc.Label;
        copyCiphertextDes: cc.Label;
        plaintextBtn: cc.Label;
        ciphertextBtn: cc.Node;
        copyCiphertextBtn: cc.Node;
        checkBtn: cc.Node;
        rollerBox: cc.Node;
        closeBtn: cc.Node;
        plaintextBox: cc.Node;
        ciphertextBox: cc.Node;
        copyCiphertextBox: cc.Node;
        vsBox: cc.Node;
        checkResultsSuccess: cc.Node;
        checkResultsFail: cc.Node;
        timestampBox: cc.Node;
        rollerId: cc.Label;
        rollerIconItem: cc.Prefab;
        root: cc.Node;
        private gameId;
        /**使用gridShow数据的游戏id 通过json配置 */
        private gridShowId;
        onOpen(): void;
        private loadJson;
        layout(): void;
        upShow(): void;
        private initShow;
        onClose(): void;
        onCheck(): void;
        private getTimestamphashToResult;
        private setTextColor;
        private initTextColor;
        private setBgBoxShow;
        private openHelpView;
        private openManualView;
        private copyText;
        private setRollerText;
        private upIconShow;
    }
    export enum TIPS_TYPE_CARD {
        one = 1,
        twe = 2,
        three = 3
    }
    export class HashTipCaption extends cc.Component {
        text: cc.Label;
        textBox: cc.Node;
        maskBox: cc.Node;
        tipSp: cc.Node;
        isFirst: boolean;
        private firstTipStr;
        private isClick;
        private publicGameId;
        upTextShow(text: string): void;
        onLoad(): void;
        languageUpdata(): void;
        onDestroy(): void;
        private addEvent;
        private romveEvent;
        private onCanvasClick;
        onClick(ent: any, type: string): void;
    }
    /*****
     * 哈希验证说明
     * 用法：
     * 打开界面调用init(pageNum);
     * 公共位置：'https://cdn-api-game.ydev.app/game_core/commonRes/arcade/3000711/zh/'
     * 图片名称：sm1.png, sm2.png, sm3.png ...
     */
    export class HashVerificationInstructions extends game.View {
        leftBtn: cc.Node;
        rightBtn: cc.Node;
        checkBtn: cc.Node;
        ruleSpr: cc.Sprite;
        checkBtnLabel: cc.Node;
        title: cc.Sprite;
        private pageId;
        private pageNum;
        private isGameId;
        private picMap;
        jinRu_pageTime: number;
        onLoad(): void;
        languageUpdata(): void;
        onOpen(eny: any, data: any): void;
        layout(): void;
        private onCloseBtn;
        private btnPrePage;
        private btnNextPage;
        /**
         * 检查是否第一次进入该游戏
         */
        onCheckBtnView(isGameId?: boolean): void;
        /**to check */
        private onCheckBtn;
        private renderBtns;
        private setPageShow;
        convertGameId(gameId: number): number;
    }
    export class HashVerifyCenterBase extends cc.Component {
        paizhuo: cc.Node;
        label: cc.Node;
        onLoad(): void;
        init(): void;
        private upShow;
    }
    export class HashVerifyCenter extends game.View {
        roundId: cc.Label;
        chayan: cc.Label;
        content1: cc.Node;
        content2: cc.Node;
        hashData: protoReport.hash_type | protoReport.qz_hash_type;
        hashInfo: any;
        onOpen(fromUI: number, allCardDatas: IHashCardVerifyCenter): void;
        onLoad(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        upShow(): void;
        private upIconShow_1;
        private upIconShow_2;
        private onCloseBtn;
        private onHashTips;
    }
    export class HashVerifyCenter_1 extends game.ListView {
        listArgsData: any;
        onLoad(): void;
        /** 排序 */
        private selectionSort;
        init(args: game.IListViewArgs): void;
        /**
         * 列表数据更新后刷新列表显示
         */
        updateList(): void;
        /**
         * 更新列表宽高
         */
        private updateContentWH;
    }
    export class HashWholeCardStackView extends game.ListView {
        listArgsData: any;
        onLoad(): void;
        loadHashConfig(): void;
        init(args: game.IListViewArgs): void;
        /**
         * 列表数据更新后刷新列表显示
         */
        updateList(): void;
        /**
         * 更新列表宽高
         */
        private updateContentWH;
    }
    export class HashWholeCardStack extends game.View {
        spriteTitle: cc.Sprite;
        labelTips: cc.Label;
        /**记录的牌堆 */
        isRecord: boolean;
        /**固定的牌堆 */
        isConst: boolean;
        needShowHashInfos: any;
        allHashInfos: any;
        /**最终真实的itemPre 可能是扑克，麻将 或者第三方传入的预制 */
        itemPre: cc.Prefab;
        onLoad(): void;
        onDestroy(): void;
        layout(): void;
        /**
         * UI_WHOLE_CARD_STACK
         * @param fromUI
         * @param datas
         */
        onOpen(fromUI: number, datas: IHashWholeCardStack): void;
        setTips(str: string): void;
        setTitle(frame: cc.SpriteFrame): void;
        hash_mess_CardStackPush(evt: string, datas: IHashWholeCardStack): void;
        /**
         *
         * @param evt
         * @param data {hash_info:{cut_index:number, hash_card_num: protoReport.hash_card_num_type[]}}
         * @returns
         */
        updateWholeCardStack(hashInfo: protoReport.hash_type): void;
        getUsefulHashInfo(hashInfo: protoReport.hash_type): any;
        initCards(datas: protoReport.hash_card_num_type[]): void;
        private onCloseBtn;
    }
    /**
     * 闹钟传参类型参数
     */
    export class ClockParamType {
        target?: object;
        endCallBack?: Function;
        enterCrucialCall?: Function;
        maxCountNum?: number;
        crucialSecond?: number;
        autoHide?: boolean;
        canShake?: boolean;
    }
    export class ClockTimer extends game.View {
        timeLabel: cc.Label;
        isShowCircle: boolean;
        mask: cc.Mask;
        radius: number;
        clockwise: boolean;
        clockParam: ClockParamType;
        startTime: number;
        timeCount: number;
        interID: number;
        private hasEnterCrucialCall;
        private isCount;
        private preTween;
        /**是否已经初始化过定时器 */
        isInitDataComplete: boolean;
        private startAngle;
        onLoad(): void;
        start(): void;
        initData(param: ClockParamType): void;
        onDestroy(): void;
        /**注册事件 */
        private registerEvent;
        /**移除注册事件 */
        private removeEvent;
        /**重置数据 */
        resetData(clockParam: ClockParamType): void;
        /**结束计时 */
        private endCount;
        /**计时 */
        tick(): void;
        protected onTimeChange(time: number): void;
        private shakeTween;
        private shakeAni;
        private _isClockShow;
        /** 便于子项目在某个阶段是否显示闹钟 （因为公共库在每次开始计时时会显示）*/
        protected set isClockShow(b: boolean);
        /**开始计时 */
        private clockStart;
        /**隐藏计时器，但不是移除 */
        clockHide(): void;
        setTimeLabelString(str: string): void;
        update(dt: number): void;
        private initCircleMask;
        private updateCircleMaskGraphic;
    }
    export class HashCutCardsList extends game.ListView {
        init(args: game.IListViewArgs): void;
        /**
         * 列表数据更新后刷新列表显示
         */
        updateList(): void;
        /**
         * 更新列表宽高
         */
        private updateContentWH;
        setListViewOnContentWidthFixed(): void;
    }
    export class HashCutCardsView extends game.View {
        /**切牌者是否已经切过了 */
        static isCuted: boolean;
        /**是否为切牌者 */
        static isCutner: boolean;
        titleLabel: cc.Label;
        closeBtn: cc.Button;
        clockLabel: cc.Label;
        clockNode: cc.Node;
        randomCutBtn: cc.Button;
        cardsList: cc.Node;
        cardsContainer: cc.Node;
        pokerPre: cc.Prefab;
        mahjongPre: cc.Prefab;
        /**最终真实的itemPre 可能是扑克，麻将 或者第三方传入的预制 */
        itemPre: cc.Prefab;
        /**哈希信息 保存着所有切牌数据 */
        hashInfo: any;
        protected onLoad(): void;
        onDestroy(): void;
        private addEvents;
        private removeEvents;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /**点击 关闭 按钮 */
        private onClickCloseBtn;
        /**点击 随机切换 按钮*/
        private onClickRandomCut;
        /**是否是切牌者 */
        private get isCutner();
        private _isCutner;
        private set isCutner(value);
        /**收到服务器推送：切牌结果 */
        private onCutCardPush;
        /** 根据子项目类型 设置item */
        setHashCardPre(res: IHashCardRes): void;
        onOpen(fromUI: number, param: IHashCutViewParam): void;
        /**
         * 添加item
         * @param data  item数据列表
         * @param colNum item列表列数
         */
        /**
         * 启动一个倒计时
         * @param time 秒
         */
        private startClock;
    }
    /**切牌界面中用到了扑克牌 */
    export class HashCardOfCut extends HashCardItem implements IHashCardOfCut {
        highLightNode: cc.Node;
        onLoad(): void;
        onEnable(): void;
        /**显示切牌特效 高亮 并调整到目标大小 实现覆盖 */
        showCutCardEffect(): void;
        hideCutCardEffect(): void;
        getCardWidth(): number;
        private onTouchend;
    }
    export class HashVerifyCenter_2_300011 extends HashVerifyCenterBase {
        init(): void;
    }
    export class HashVerifyCenter_2_300021 extends HashVerifyCenterBase {
        spriteLeftPokers: cc.Sprite[];
        spriteRightPokers: cc.Sprite[];
        init(): void;
        renderCards(sprites: cc.Sprite[], cards: protoReport.hash_card_num_type[]): void;
    }
    export class HashVerifyCenter_2_300031 extends HashVerifyCenterBase {
        paizhuoBg: cc.SpriteFrame[];
        init(): void;
    }
    export class HashVerifyCenter_2_300041 extends HashVerifyCenterBase {
        nodeCards: cc.Node[];
        init(): void;
    }
    export class HashVerifyCenter_2_300051 extends HashVerifyCenterBase {
        init(): void;
    }
    export class HashVerifyCenter_2_300061 extends HashVerifyCenterBase {
        sp: cc.Node;
        init(): void;
    }
    export class HashVerifyCenter_2_300071 extends HashVerifyCenterBase {
        nodeCards: cc.Node[];
        init(): void;
    }
    export class HashVerifyCenter_2_300081 extends HashVerifyCenterBase {
        sp: cc.Node;
        init(): void;
    }
    export class HashVerifyCenter_2_300091 extends HashVerifyCenterBase {
        resultNode: cc.Node;
        init(): void;
    }
    export class HashVerifyCenter_2_300101 extends HashVerifyCenterBase {
        nodePan: cc.Node;
        init(): void;
    }
    export class HashVerifyCenter_2_300111 extends HashVerifyCenterBase {
        container: cc.Node;
        qizi: cc.SpriteFrame;
        init(): void;
    }
    export class HashVerifyCenter_2_300121 extends HashVerifyCenterBase {
        nodeCock: cc.Node;
        init(): void;
    }
    export class HashVerifyCenter_2_3000212 extends HashVerifyCenterBase {
        spriteLeftPokers: cc.Sprite[];
        spriteRightPokers: cc.Sprite[];
        init(): void;
        renderCards(sprites: cc.Sprite[], cards: protoReport.hash_card_num_type[]): void;
    }
    export class HashVerifyCenter_2_300161 extends HashVerifyCenterBase {
        sitNum: number;
        handCardsNum: number;
        init(sitNum?: number, handCardsNum?: number): void;
        renderInfo(nodeCards: cc.Node, playerInfoDetail: protoReport.player_qz_detail_type): void;
        getCards(index: number): cc.Node;
        renderCards(sprites: cc.Sprite[], cards: protoReport.hash_card_num_type[]): void;
    }
    export class HashVerifyCenter_2_300171 extends HashVerifyCenterBase {
        sitNum: number;
        handCardsNum: number;
        init(sitNum?: number, handCardsNum?: number): void;
        renderInfo(nodeCards: cc.Node, playerInfoDetail: protoReport.player_qz_detail_type): void;
        getCards(index: number): cc.Node;
        renderCards(sprites: cc.Sprite[], cards: protoReport.hash_card_num_type[]): void;
    }
    export class HashVerifyCenter_2_300191 extends HashVerifyCenterBase {
        sitNum: number;
        handCardsNum: number;
        init(sitNum?: number, handCardsNum?: number): void;
        renderInfo(nodeCards: cc.Node, playerInfoDetail: protoReport.player_qz_detail_type): void;
        getCards(index: number): cc.Node;
        renderCards(sprites: cc.Sprite[], cards: protoReport.hash_card_num_type[]): void;
    }
    export class HashVerifyCenter_2_300201 extends HashVerifyCenterBase {
        sitNum: number;
        handCardsNum: number;
        init(sitNum?: number, handCardsNum?: number): void;
        renderInfo(nodeCards: cc.Node, playerInfoDetail: protoReport.player_qz_detail_type): void;
        getCards(index: number): cc.Node;
        renderCards(sprites: cc.Sprite[], cards: protoReport.hash_card_num_type[]): void;
    }
    export class HashVerifyCenter_2_300211 extends HashVerifyCenterBase {
        sitNum: number;
        handCardsNum: number;
        init(sitNum?: number, handCardsNum?: number): void;
        renderInfo(nodeCards: cc.Node, playerInfoDetail: protoReport.player_qz_detail_type): void;
        getCards(index: number): cc.Node;
        renderCards(sprites: cc.Sprite[], cards: protoReport.hash_card_num_type[]): void;
    }
    export class HashChainItem extends game.ListViewItem {
        labelGameNum: cc.Label;
        nodeResult: cc.Node;
        hashValLabel: cc.Label;
        _nodePrefabName: string;
        extParams: IhashChainVerificationItemExt;
        protected _dataCreateHashType: protoReport.create_hash_type;
        private isRegisterItemClick;
        copyBtn(e: cc.Event.EventTouch): void;
        updateItem(index: number, data: protoReport.create_hash_type): void;
        private onItemClick;
        renderItemNumAndSeed(index: number, data: protoReport.create_hash_type): void;
        /**默认渲染 */
        private renderDefault;
        getResultScale(): 1 | 0.6 | 0.5 | 0.4;
    }
    /***
 * 创世哈希游戏详情
 */
    export class HashChainDetail_300014 extends HashChainItem {
        cardsBanker: cc.Node;
        cardsXian: cc.Node;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
        renderCards(node: cc.Node, data: protoReport.create_hash_card_type): void;
        renderCard(sprite: cc.Sprite, data: {
            color: number;
            point: number;
        }): void;
    }
    export class HashChainDetail_300024 extends HashChainItem {
        spritesCards: cc.Sprite[];
        label: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
        renderCards(sprite: cc.Sprite, info: any): void;
        getCardTypeLanguage(cardType: number): string;
    }
    export class HashChainDetail_300054 extends HashChainItem {
        nodeCards: cc.Node;
        labelResult: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
        renderCards(sprite: cc.Sprite, info: any): void;
        getCardTypeLanguage(cardType: number): string;
    }
    export class HashChainDetail_300094 extends HashChainItem {
        sprites: cc.Sprite[];
        label: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
        getCardTypeLanguage(cardType: number): string;
        renderCards(sprite: cc.Sprite, info: any): void;
    }
    export class HashChainDetail_3001241 extends HashChainItem {
        spriteRed: cc.Sprite;
        spriteBlue: cc.Sprite;
        labelResult: cc.Label;
        /**自定义游戏结果 --斗鸡 创世哈希 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
    }
    export class HashChainDetail_3001242 extends HashChainItem {
        spriteLong: cc.Sprite;
        spriteHu: cc.Sprite;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
    }
    export class HashChainDetail_3002841 extends HashChainItem {
        result: cc.Node;
        color_1: cc.Color;
        color_2: cc.Color;
        color_3: cc.Color;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
    }
    /***
 * 创世哈希验证、历史
 */
    export class HashChainItem_300014 extends HashChainItem {
        labelBanker: cc.Label;
        labelXian: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
        getKeyByDian(dian: number): string;
    }
    export class HashChainItem_300024 extends HashChainItem {
        labelResult: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
    }
    export class HashChainItem_300054 extends HashChainItem {
        labelResult: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
    }
    export class HashChainItem_300094 extends HashChainItem {
        labelResult: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
    }
    export class HashChainItem_300124 extends HashChainItem {
        spriteBg: cc.Sprite;
        bgFrames: cc.SpriteFrame[];
        labelResult: cc.Label;
        /**自定义游戏结果 */
        renderCustomGameData(index: number, data: protoReport.create_hash_type): void;
    }
    export class MinesHash extends game.View {
        toggle: cc.ToggleContainer;
        listView: cc.Node;
        /******  种子 start  ****************************************** */
        currentTime: cc.Node;
        /**下一期服务器种子 */
        current_serverSeed: cc.Label;
        /**下一期服务器种子哈希 */
        current_serverSeedHash: cc.Label;
        /**下一期客户端种子 */
        current_clientSeed: cc.Label;
        /**下一期随机数 */
        current_nonce: cc.Label;
        lastTime: cc.Node;
        /**上一期服务器种子 */
        lastTime_serverSeed: cc.Label;
        /**上一期服务器种子哈希 */
        lastTime_serverSeedHash: cc.Label;
        /**上一期客户端种子 */
        lastTime_clientSeed: cc.Label;
        /**上一期随机数 */
        lastTime_nonce: cc.Label;
        /******  种子 end  ****************************************** */
        /******  验证 start  ****************************************** */
        /**验证 服务器种子 */
        verify_serverSeed: cc.Label;
        editServerSeedString: string;
        /**验证 服务器种子哈希 */
        verify_serverSeedHash: cc.Label;
        editServerSeedHashString: string;
        /**验证 客户端种子 */
        verify_clientSeed: cc.Label;
        editClientSeedString: string;
        /**验证 随机数 */
        verify_nonce: cc.Label;
        editNonceString: string;
        /**验证 难度 */
        verify_risk: cc.Label;
        lotteryHash: cc.Label;
        lotteryHashString: string;
        container: cc.Node;
        /******  验证 end  ****************************************** */
        private MinesHash_type;
        private lastData;
        private currentData;
        private risk;
        jinRu_pageTime: number;
        onLoad(): void;
        onOpen(fromUI: number, data: any): void;
        onClose(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /** 复制 */
        private copyText;
        private togglesClick;
        private updatatoggle;
        private updataShowList;
        setseed_1(): void;
        setseed_2(): void;
        /***********验证界面 各个哈希数据 start******************************************************************** */
        /**
         * @description: 验证按钮
         * @return {*}
         */
        private yanzhengBtn;
        private setverify;
        onEditBoxChanged(editLabel: cc.Label, keyboardLabel: cc.Label, key?: string): void;
        onEditBoxBlur(editLabel: cc.Label, keyboardLabel: cc.Label): void;
        onEditBoxFinish(editLabel: cc.Label, keyboardLabel: cc.Label): void;
        /***********验证界面 各个哈希数据 end******************************************************************** */
        /***********验证界面  宝箱 展示  start******************************************************************** */
        /**
         * @description: 重要 一共25个宝箱
         * @return {*}
         */
        private updataLayoutHash;
        /**
         * @param data
         */
        private updateItems;
    }
    export enum gameIdList {
        bjl1 = 173001141,
        bjl2 = 3000142,
        bjl3 = 3000143,
        hhdz = 3000243,
        bcbm = 3000341,
        dcdh = 3000342,
        dwsl = 3000343,
        brtb1 = 3000441,
        brtb3 = 3000443,
        brnn = 3000543,
        hjdzl = 3000641,
        yxx = 3000742,
        elszp = 3000841,
        brebg = 3000941,
        sd = 3001041,
        ft = 3001141,
        dj = 3001241,
        lhd = 3001242,
        slot = 1000000
    }
    export class HashChainCoreAlgorithm {
        private static _instance;
        static get instance(): HashChainCoreAlgorithm;
        constructor();
        /**各游戏 逻辑集合 */
        private logicMap;
        /** 原始16进制数据 */
        private srcHashVal;
        /** 包装结果对象 */
        private historyInfo;
        /**
         * 哈希值计算
         * @param HashValue 传入的哈希值
         */
        HashValueCalculation(HashValue: string): protoReport.create_hash_type;
        /**
         * slot哈希值计算
         * @param HashValue
         * @returns
         */
        slotHashValueCalculation(ciphertext: string, rollerGameId: number, rollerId: number): any;
        private getLogicFunc;
        private createLogicMap;
        /** 奔驰宝马 / 动物森林 */
        private logicForBcbm;
        /** 俄罗斯转盘 */
        private logicForElszp;
        /** 鱼虾蟹 */
        private logicForYxx;
        /** 黄金大转轮 */
        private logicForHjdzl;
        /** 百家乐 */
        private logicForBjl;
        /** 色牒 */
        private logicForSd;
        /** 番摊 */
        private logicForFt;
        /** 斗鸡 */
        private logicForDj;
        /** 红黑大战 */
        private logicForHhdz;
        /** 地产大亨 */
        private logicForDcdh;
        /** 百人骰宝 */
        private logicForBrtb;
        /** 百人牛牛 */
        private logicForBrnn;
        /** 百人二八杠 */
        private logicForBrebg;
        /** 龙虎斗 */
        private logicForLhd;
        /**slot hash chain logic */
        private logicForSlot;
        /*** 获得滚轴的长度*/
        getRollerLength(gameId: number, i: number, rollerIndex: number): number;
        private logicForSlotColumn;
        /**
         * 初始化配置
         */
        initConfig(): void;
    }
    /**
     * 创世哈希相关游戏 根据牌面数据计算牌型
     */
    export class HashChainCardTypeManager {
        private static _instance;
        static get instance(): HashChainCardTypeManager;
        constructor();
        /** 子游戏牌型处理器 */
        private handlerMap;
        /** 待处理的原始数据 */
        private data;
        /** 百人二八杠 普通点列表 */
        private brebgPointList;
        /** 初始化 */
        private initHandler;
        /**处理传入的牌面数据 为牌型赋值 */
        calcCardType(data: protoReport.create_hash_type): void;
        /**百家乐 */
        private bjlHandler;
        /** 百人牛牛 */
        private brnnHandler;
        /** 红黑大战 */
        private hhdzHandler;
        /** 龙虎斗 */
        private lhdHandler;
        /** 百人二八杠 */
        private brebgHandler;
        /**计算百家乐点数（牌数量不固定） */
        private getBjlPoint;
        /**计算百人牛牛牌类型 */
        private getBrnnType;
        /** 百人牛牛 点数转换 */
        private brnnPointTrans;
        /** 判定是否为花牌(JQK) */
        private isFlowerCard;
        /**百人牛牛检查：是否为五小牛 */
        private brnnCheck15;
        /**百人牛牛检查：是否为四炸 */
        private brnnCheck14;
        /**百人牛牛检查：是否为五花牛 */
        private brnnCheck13;
        /**百人牛牛检查：是否为四花牛 */
        private brnnCheck12;
        /**百人牛牛检查：普通点数/没牛 */
        private brnnCheck;
        /**计算红黑大战牌类型 */
        private getHhdzType;
        /** 红黑大战检查：是否为豹子 */
        private hhdzCheck6;
        /** 红黑大战检查：是否为顺金 */
        private hhdzCheck5;
        /** 红黑大战检查：是否为金花 */
        private hhdzCheck4;
        /** 红黑大战检查：是否为顺子 */
        private hhdzCheck3;
        /** 红黑大战检查：是否为对子 */
        private hhdzCheck2;
        /**
         * 红黑大战 相同牌型比较
         * @param type 两组牌的牌型
         * @param redList
         * @param blackList
         * @returns 返回值>0：第一个参数大
         */
        private hhdzCompareOfSameType;
        /**
         * 红黑大战 单张牌比较
         * @param a
         * @param b
         * @param isCompareColor 是否比较花色 默认true
         * @returns 返回值>0：第一个参数大
         */
        private hhdzCompareSingleCard;
        /** 计算 二八杠 牌型 */
        private getBrebgType;
        /** 二八杠 检查宝牌 */
        private brebgCheckDouble;
        /** 二八杠 检查点牌 */
        private brebgCheck;
        /** 点数转换： 1-13: A-K */
        private point1_13;
        /** 点数转换： 2-14: 2-A */
        private point2_14;
    }
    export class HashChainVerifyList extends game.ListView {
        onLoad(): void;
        init(args: any): void;
    }
    export class HashChainVerificationInstructions extends game.View {
        leftBtn: cc.Node;
        rightBtn: cc.Node;
        lookCodeBtn: cc.Node;
        rollerList: cc.Node;
        nodeRecord: cc.Node;
        yanzhenNode: cc.Node;
        daimaListNode: cc.Node;
        daimaSpr: cc.Sprite;
        hashChainEditbox: MinesNumericKeypad;
        countEditbox: MinesNumericKeypad;
        topToggleContainer: cc.Node;
        labelInstructionTitle: cc.Label;
        labelInstructionContent1: cc.Label;
        richTextInstructionContent2: cc.RichText;
        bgSptiteFrame: cc.SpriteFrame[];
        kuangSptiteFrame: cc.SpriteFrame[];
        closeBtnSprite: cc.SpriteFrame[];
        toggleSprite: cc.SpriteFrame[];
        nextPageSprite: cc.SpriteFrame[];
        codeBtnFrames: cc.SpriteFrame[];
        descriptBtnSprites: cc.Sprite[];
        bgSp: cc.Sprite;
        titleSp: cc.Sprite;
        closeBtnBg: cc.Sprite;
        dikuangBg: cc.Sprite;
        prefabDefault: cc.Prefab;
        yanzhengLabel: cc.Label;
        labelNum: cc.Label;
        labelResult: cc.Label;
        jmbsLabel: cc.Label;
        data: IhashChainVerification;
        prefabHashChain: cc.Prefab;
        isDefaultPrefab: boolean;
        itemScript: string;
        private pageId;
        private pageNum;
        private hashChainStartKey;
        private readonly defaultHashChainValue;
        private curToggle;
        private hashCountKey;
        private hashLanguageKey;
        private closeBtnPos;
        extParamsData: IhashChainVerificationItemExt;
        /**子游戏实现 */
        private _itemHeight;
        get itemHeight(): number;
        set itemHeight(v: number);
        jinRu_pageTime: number;
        onLoad(): void;
        onDestroy(): void;
        start(): void;
        bindEvent(): void;
        removeEvent(): void;
        /** 点击开奖历史item */
        onClickHistoryItem(e: any, data: protoReport.create_hash_type): void;
        updateLanguage(): void;
        layout(): void;
        /**初始化 */
        init(data: IhashChainVerification): void;
        onOpen(fromUI: number, ...args: any[]): void;
        renderHashChainEditBox(hashChainStartKey: string): void;
        setDefaultCount(): void;
        private togglesClick;
        private onEditBoxBlur;
        private onEditBoxFinish;
        private editBoxCount;
        private loadHashChainItem;
        /**历史数据、验证列表 */
        createList(): void;
        /**哈希链历史数据**/
        private createHashChainHistory;
        /**哈希链验证列表数据**/
        private createVerifyHashChain;
        private showHasVerifyTips;
        private updataShowView;
        private setToggleLabel;
        private onCloseBtn;
        private onGetBtn;
        private btnPrePage;
        private btnNextPage;
        /**查看代码 */
        lookCoding(): void;
        /**查验 */
        private onCheckBtn;
        private renderBtns;
        updataLabelShow(pageId: number): void;
        private setPageShow;
    }
    export enum TIPS_TYPE {
        OPEN_REWARD = 1,
        CIPHERTEXT = 2,
        CHECH_CIPHERTEXT = 3
    }
    export class HashCaption extends cc.Component {
        text: cc.Label;
        textBox: cc.Node;
        maskBox: cc.Node;
        private isClick;
        upTextShow(text: string): void;
        onLoad(): void;
        onDestroy(): void;
        private addEvent;
        private romveEvent;
        private onCanvasClick;
        onClick(ent: any, type: string): void;
    }
    export class HashChainItemSlot extends game.ListViewItem {
        nodeResult: cc.Node;
        hashValLabel: cc.Label;
        nodeCheck: cc.Node;
        nodeCopy: cc.Node;
        labelCheck: cc.Label;
        _nodePrefabName: string;
        extParams: any;
        protected _dataCreateHashType: any;
        private hashCopyBtn;
        private isRegisterItemClick;
        onLoad(): void;
        copyBtn(e: cc.Event.EventTouch): void;
        updateItem(index: number, data: any): void;
        renderBtn(hashCopyBtn?: boolean): void;
        private onItemClick;
        /**默认渲染 */
        private renderDefault;
    }
    export class HashCheckCaptionSlot extends cc.Component {
        timestampHash: cc.Node;
        directHash: cc.Node;
        plaintextT: cc.Label;
        plaintextD: cc.Label;
        ciphertextT: cc.Label;
        ciphertextD: cc.Label;
        private plaintext;
        private ciphertext;
        upShow(data: any): void;
        private openWindow;
        private copyBtn;
    }
    export class HashHelpRuleSlot extends cc.Component {
        leftBtn: cc.Node;
        rightBtn: cc.Node;
        checkBtn: cc.Node;
        ruleSpr: cc.Sprite;
        gameBtn: cc.Node;
        private pageIndex;
        private minIndex;
        private maxIndex;
        private gameMode;
        private isFristOpen;
        onLoad(): void;
        onDestroy(): void;
        private addEvent;
        private removeEvent;
        private onCheckBtn;
        private onGameBtn;
        setGameMode(data: any): void;
        private onLeftBtn;
        private onRightBtn;
        private setBtnClick;
        private setPageShow;
        /**获取多语言 */
        private getLanguage;
    }
    export class HashRuleCodeSlot extends cc.Component {
        code_direct: cc.Node;
        code_timestamp: cc.Node;
        upShow(data: any): void;
    }
    export enum HASHHELPTYPE {
        RULE = 0,
        ROLLER = 1,
        CODE = 2,
        CAPTION = 3
    }
    export class HashHelpSlot extends game.View {
        closeBtn: cc.Node;
        toggleContainer: cc.Node;
        ruleView: cc.Node;
        title_t: cc.Node;
        title_d: cc.Node;
        rollerView: cc.Node;
        codeView: cc.Node;
        captionView: cc.Node;
        root: cc.Node;
        private _rollerData;
        private _helpRuleInit;
        private _ruleCodeInit;
        private _checkCaptionInit;
        private _helpRollerInit;
        onLoad(): void;
        onOpen(eny: any, data: any): void;
        private addEvent;
        layout(): void;
        private onCloseBtn;
        private onToggleEvent;
        private setViewActive;
    }
    export enum HASHCHAINHELPTYPE {
        RULE = 0,
        VERIFY = 1,
        ROLLER = 2,
        CODE = 3
    }
    export class HashHelpSlotChain extends game.View {
        closeBtn: cc.Node;
        toggleContainer: cc.Node;
        titleSp: cc.Sprite;
        ruleView: cc.Node;
        nodeBtns: cc.Node;
        spriteLookCodeBtn: cc.Sprite;
        verifyView: cc.Node;
        spriteVerifyBtn: cc.Sprite;
        hashChainEditbox: NumericKeypad;
        countEditbox: NumericKeypad;
        rollerView: cc.Node;
        codeView: cc.Node;
        root: cc.Node;
        leftBtn: cc.Node;
        rightBtn: cc.Node;
        lookCodeBtn: cc.Node;
        labelInstructionTitle: cc.Label;
        labelInstructionContent1: cc.Label;
        labelInstructionContent2: cc.Label;
        labelInstructionContent3: cc.Label;
        sprite_gsgs_bqxl1: cc.Sprite;
        sprite_gsgs_bqxz: cc.Sprite;
        bgSptiteFrame: cc.SpriteFrame[];
        kuangSptiteFrame: cc.SpriteFrame[];
        closeBtnSprite: cc.SpriteFrame[];
        skin2ToggleFrame: cc.SpriteFrame[];
        skin3ToggleFrame: cc.SpriteFrame[];
        nextPageSprite: cc.SpriteFrame[];
        framesLookCode: cc.SpriteFrame[];
        bgSp: cc.Sprite;
        closeBtnBg: cc.Sprite;
        dikuangBg: cc.Sprite;
        private _helpRollerInit;
        /**多语言限制 */
        private onlyInLanguages;
        private jinRu_pageTime;
        private toggleIndex;
        private pageIndex;
        private pageNum;
        private hashChainStartKey;
        private readonly defaultHashChainValue;
        private curToggle;
        private hashCountKey;
        data: {
            pageIndex: number;
            toggleIndex: number;
            autoHashValueCalculation: boolean;
            seed: string;
            gameMode: any;
            gameId: number;
            rollerModeId: any;
            rollerGameId: number;
            rollerId: number;
        };
        onLoad(): void;
        start(): void;
        private setToggleLanguage;
        private setImgSpriteFrame;
        /**获取多语言 */
        private getLanguage;
        onOpen(eny: any, data: {
            pageIndex: number;
            toggleIndex: number;
            autoHashValueCalculation: boolean;
            seed: string;
            gameMode: any;
            gameId: number;
            rollerModeId: any;
            rollerGameId: number;
            rollerId: number;
        }): void;
        renderHashChainEditBox(hashChainStartKey: string): void;
        setDefaultCount(): void;
        btnCreateVerifyHashChain(): void;
        /**哈希链验证列表数据**/
        private createVerifyHashChain;
        private showHasVerifyTips;
        private addEvent;
        layout(): void;
        private onCloseBtn;
        /**查看代码 */
        private onCodeBtn;
        private onToggleEvent;
        private setViewActive;
        private onEditBoxBlur;
        private onEditBoxFinish;
        private editBoxCount;
        private btnPrePage;
        private btnNextPage;
        private setPageShow;
        private renderBtns;
        updataLabelShow(pageIndex: number): void;
    }
    export class HashManualCheckSlot extends game.View {
        topPlaintext: cc.Label;
        plaintext: cc.Label;
        ciphertext: cc.Label;
        direct: cc.Node;
        timestamp: cc.Node;
        topPlaintextDes: cc.Node;
        root: cc.Node;
        onOpen(ent: any, data: any): void;
        layout(): void;
        private closeBtn;
        private openWindow;
        private copyBtn;
        private openHelpView;
    }
    export class HashRollerItemSlot extends game.ListViewItem {
        pos: cc.Label;
        list: cc.Node;
        updateItem(index: number, data: any): void;
    }
    export class SlotGameHashVerificationInstructions extends game.View {
        toggle: cc.ToggleContainer;
        listView: cc.Node;
        /******  种子 start  ****************************************** */
        currentTime: cc.Node;
        /**下一期服务器种子 */
        current_serverSeed: cc.Label;
        /**下一期服务器种子哈希 */
        current_serverSeedHash: cc.Label;
        /**下一期客户端种子 */
        current_clientSeed: cc.Label;
        /**下一期随机数 */
        current_nonce: cc.Label;
        /******  验证 start  ****************************************** */
        /**验证 服务器种子 */
        verify_serverSeed: cc.Label;
        editServerSeedString: string;
        /**验证 服务器种子哈希 */
        verify_serverSeedHash: cc.Label;
        editServerSeedHashString: string;
        /**验证 客户端种子 */
        verify_clientSeed: cc.Label;
        editClientSeedString: string;
        /**验证 随机数 */
        verify_nonce: cc.Label;
        labelTimes: cc.Label;
        throwTimes: number;
        defaultStr: string;
        nodeCoinParent: cc.Node;
        scrollContainer: cc.Node;
        fixedContainer: cc.Node;
        timesTitleLabel: cc.Label;
        editNonceString: string;
        lotteryHash: cc.Label;
        private GuessHash_type;
        private lastData;
        private currentData;
        jinRu_pageTime: number;
        /**次数范围 */
        timesMin: number;
        timesMax: number;
        private data;
        onLoad(): void;
        /**不同游戏重置一些初始值 */
        private reset;
        onOpen(fromUI: number, data: IcoinHashVerify): void;
        /**关闭界面 */
        btnCloseCall(): void;
        layout(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /** 复制 */
        private copyText;
        /**toggle click */
        private togglesClick;
        private updatetoggle;
        private updataShowList;
        /**cur 当前一期*/
        setseed_1(): void;
        /**prev */
        setseed_2(): void;
        /***********验证界面 各个哈希数据 start******************************************************************** */
        /**验证按钮*/
        private yanzhengBtn;
        /**验证信息 */
        private setVerifyInfo;
        /**server seed */
        private editBoxServerSeed;
        /**server seed hash */
        private editBoxServerSeedHash;
        /**client seed */
        private editBoxClientSeed;
        /**随机数 */
        private editBoxNonce;
        /**投掷次数 */
        private editBoxThrowTimesChange;
        private editBoxThrowTimesEnd;
        /***********验证界面 各个哈希数据 end******************************************************************** */
        private getNewHashStr;
        private updateCoinHashResult;
        private handleCoinHashResult;
        showCoinList(coinsArr: number[]): void;
        /**
         * 计算 hash result
         * @param lotteryHashString 新的哈希值
         * @param _throwTimes 投掷次数
         * @returns
         */
        private handleCoinResult;
        private handlePlinkoHashResult;
    }
    export class CoreKeyboard extends game.View {
        verkey: cc.Node;
        horkey: cc.Node;
        onLoad(): void;
        /**
         * 只要有屏幕尺寸改变就会调用
         */
        layout(): void;
        /**
         * 切换到横屏
         */
        layoutLandscape(): void;
        /**
        * 切换到竖屏
        */
        layoutPortrait(): void;
        onclick(event: any, customEventData: any): void;
    }
    export class CoreMController extends game.MController {
    }
    export class CoreMultiDragonBonesAtlasAssets extends cc.Component {
        _dragonAtlasAssetArray: dragonBones.DragonBonesAtlasAsset[];
        set dragonAtlasAssetArray(value: dragonBones.DragonBonesAtlasAsset[]);
        get dragonAtlasAssetArray(): dragonBones.DragonBonesAtlasAsset[];
        private listTexture;
        private display;
        protected onLoad(): void;
        reset(): void;
        private resetAsset;
        private resetDisplay;
        private updateArmatureDisplayData;
        private replaceDisplay;
    }
    /**
     * 实现功能：多重（也可以只有一个）粒子节点，动态替换图集中精灵贴图，并且随机起始贴图。
     * 使用方式：将组件挂载在粒子节点的直接父节点上
     */
    export class CoreMultiPSRandomRefreshTool extends cc.Component {
        private atlas;
        private aniFps;
        /**ParticleSystem节点数量 */
        private psNodeNum;
        private emissionRate;
        /**粒子系统贴图当前下标集合 */
        private psIndexArray;
        /**粒子发射器节点集合 */
        private psArray;
        /**图集序列总帧数 */
        private count;
        /**图集序列帧集合 */
        private spriteArray;
        protected onLoad(): void;
        protected onEnable(): void;
        protected onDisable(): void;
        private refreshSprite;
    }
    export class CoreNodeUiConfig extends game.NodeUiConfig {
    }
    /**
     * 实现功能：粒子节点，动态替换图集中精灵贴图
     */
    export class CoreParticleSystemFramesRefresh extends cc.Component {
        atlas: cc.SpriteAtlas;
        private aniFps;
        private ps;
        private index;
        private count;
        /**图集序列帧集合 */
        private spriteArray;
        protected onLoad(): void;
        private refreshSprite;
    }
    export class Keyboard extends game.View {
        verkey: cc.Node;
        horkey: cc.Node;
        onLoad(): void;
        start(): void;
        /**
         * 只要有屏幕尺寸改变就会调用
         */
        layout(): void;
        /**
         * 切换到横屏
         */
        layoutLandscape(): void;
        /**
        * 切换到竖屏
        */
        layoutPortrait(): void;
        onclick(event: any, customEventData: any): void;
    }
    export class PostbirdAlertBox {
        containerClass: string;
        box: any;
        textTemplate: {
            title: string;
            content: string;
            okBtn: string;
            cancelBtn: string;
            contentColor: string;
            okBtnColor: string;
            promptTitle: string;
            promptOkBtn: string;
        };
        getAlertTemplate(): string;
        getConfirmTemplate(): string;
        getPromptTemplate(): string;
        alert(opt: any): void;
        confirm(opt: any): void;
        prompt(opt: any): void;
        colse(): void;
        removeBox(): void;
    }
    /**
 * 机顶盒控制管理器
 */
    export class TvControlManager {
        /**框框图片 */
        kuangSp: cc.SpriteFrame;
        private static _instance;
        static get instance(): TvControlManager;
        private controllerList;
        /**添加控制器 */
        addController(controller: TvControllerBase): void;
        /**移除控制器 */
        removeController(controller: TvControllerBase): void;
        private _curController;
        /**当前控制器 */
        get curController(): TvControllerBase;
        set curController(value: TvControllerBase);
        /**是否初始化 */
        isInited: boolean;
        /**是否机顶盒 */
        isTv: boolean;
        /**初始化 */
        init(): void;
        setBoxTextures(spr: cc.Sprite, call?: Function): void;
        isFirstTime: boolean;
        addEventListener(): void;
        removeEventListener(): void;
        destory(): void;
        private onKeyUp;
        keyEvent(keyCode: string): void;
        private showLogInfo;
        /**
         * 从目标节点或其父节点递归查找 controller
         * @param attachNode 目标节点
         */
        getTvControllerBase(attachNode: cc.Node): TvControllerBase;
        /**
         * 从目标节点或其父节点递归查找组件[compName]
         * @param attachNode 目标节点
         */
        getComponentInparent(attachNode: cc.Node, compName: {
            prototype: cc.Component;
        }): any;
        /**添加目标节点 */
        addTargetNode(data: ITvControlTargetData): void;
        addTargetNodes(datas: ITvControlTargetData[]): void;
        /**初始化控制器 */
        initController(compNode: cc.Node, isResetTagNode?: boolean): void;
        /**移除列表 */
        removeList(compNode: cc.Node): void;
        /**调整框框位置 */
        resetTagPos(compNode: cc.Node): void;
        /**
         * 检查目标节点[targetNode]是否有[compNames]组件
         * @param targetNode 目标节点
         * @param compNames 目标组件列表
         * @param isNeedAdd 如果没用目标组件是否添加 默认为添加
         * @returns 目标节点包含的组件名
         */
        checkComponent(targetNode: cc.Node, compNames: {
            prototype: cc.Component;
        }, isNeedAdd?: boolean): string[];
        checkComponent(targetNode: cc.Node, compNames: {
            prototype: cc.Component;
        }[], isNeedAdd?: boolean): string[];
        /**
         * 添加控制目标节点
         * @param targetNode 目标节点
         * @param isDefualt 是否为默认选中
         * @param isNeedInitCtrller 是否需要初始化控制器
         * @param customEventData 自定义事件数据
         * @param callback 回调
         * @param customFuncName 自定义方法名
         * @param nodeType 节点类型
         * @returns
         */
        addTvControlNode(targetNode: cc.Node, isDefualt?: boolean, isNeedInitCtrller?: boolean, customEventData?: string, callback?: Function, customFuncName?: string, nodeType?: EnumTvNodeType): void;
        /** 按组添加节点 */
        addTvControlNodes(list: ITvControlNodeParam[]): void;
        log(...data: any[]): void;
        reInit(): void;
    }
    /**控制目标数据 */
    export class ITvControlTargetData {
        /**需选中的目标节点 */
        targetNode: cc.Node;
        /**目标节点所属控制器 */
        compNode?: cc.Node;
        /**该选中目标节点按ok所触发的回调方法名（自定义回调）*/
        handlerFuncName?: string;
        /**节点类型 */
        type?: EnumTvNodeType;
        /**自定义数据 */
        customEventData?: string;
        /**列表item节点 */
        listItemNode?: cc.Node;
        /**是否列表 */
        isItemList?: boolean;
        /**是否默认选中节点 */
        isDefualt?: boolean;
        /**是否全方向列表 */
        isAllDirectionList?: boolean;
        /**回调操作（优先执行自定义回调handlerFuncName） */
        callback?: Function;
    }
    /**控制目标数据 */
    export class ITvControlNodeParam {
        /**需选中的目标节点 */
        targetNode: cc.Node;
        /**是否默认选中节点 */
        isDefualt?: boolean;
        isNeedInitCtrller?: boolean;
        /**自定义数据 */
        customEventData?: string;
        /**回调操作（优先执行自定义回调handlerFuncName） */
        callback?: Function;
        customFuncName?: string;
        nodeType?: EnumTvNodeType;
    }
    export class EventHandlerHelperBase {
        static addClass: (className: string) => void;
        static getAllName: () => string[];
    }
    export enum EnumEventHandle {
    }
    /**机顶盒操作事件数据 */
    export interface ITvEventData {
        /**目标节点 */
        targetNode: cc.Node;
        /**自定义数据 */
        customData?: string;
        /**操作回调 */
        callBack?: Function;
    }
    /**事件监听基类 */
    export class TvEventHandleBase extends cc.Component {
        addClass(): void;
        /**
         * 事件监听
         * @param eventData 机顶盒操作事件数据
         */
        protected baseEventListener(eventData: ITvEventData): void;
        /**退出 */
        exit(): void;
    }
    /**机顶盒 操作节点类型 */
    export enum EnumTvNodeType {
        None = 0,
        Button = 1,
        PageView = 2,
        Toggle = 3,
        ListItem = 4,
        GameList = 5,
        GameItem = 6,
        SliderOrProgressBar = 7,
        ScrollView = 8,
        SlotMenuItem = 1001,
        SlotBigWinAni = 1002
    }
    /**操作方向 */
    export enum EnumDirection {
        None = 0,
        Left = 1,
        Right = 2,
        Up = 3,
        Down = 4
    }
    export enum EnumControllerType {
        Normal = 0,
        NoButtom = 1
    }
    /**控制目标 */
    export class TvControlNode {
        private _eventHandleNode;
        get eventHandleNode(): cc.Node;
        set eventHandleNode(value: cc.Node);
        private setEventHandle;
        private _targetNode;
        get targetNode(): cc.Node;
        set targetNode(value: cc.Node);
        private _isDefualtTargetNode;
        get isDefualtTargetNode(): boolean;
        set isDefualtTargetNode(value: boolean);
        /**
        * 从目标节点或其父节点递归查找组件[compName]
        * @param attachNode 目标节点
        */
        private getComponentInparent;
        private _nodeType;
        get nodeType(): EnumTvNodeType;
        set nodeType(value: EnumTvNodeType);
        private _buttonHandleList;
        get buttonHandleList(): cc.Component.EventHandler[];
        set buttonHandleList(value: cc.Component.EventHandler[]);
        tagNode: cc.Node;
        listItemNode: cc.Node;
        callback: Function;
        customFuncName: string | Function;
        isAllDirectionList: boolean;
        private _sortId;
        get sortId(): number;
        set sortId(value: number);
        newEventHandle(): cc.Component.EventHandler;
    }
    export enum EnumEventClassName {
    }
    /**
     * 机顶盒控制类
     */
    export class TvControllerBase extends cc.Component {
        /**重置默认选中节点 */
        resetDefualtTarget(node: cc.Node): void;
        private _resetEnumAttr;
        protected get resetEnumAttr(): boolean;
        protected set resetEnumAttr(value: boolean);
        protected resetInEditor(): void;
        /**设置枚举属性 */
        private setEnumAttr;
        private isFreshed;
        private _eventHandleClass;
        get eventHandleClass(): EnumEventClassName;
        set eventHandleClass(value: EnumEventClassName);
        private _targetNodeGroup;
        private _targetNodeList;
        get targetNodeList(): TvControlNode[];
        set targetNodeList(value: TvControlNode[]);
        pureColor: cc.SpriteFrame;
        curTagNode: cc.Node;
        private originLength;
        curMaxIndex: number;
        protected callMap: Map<EnumControllerType, Function>;
        protected controllerType: EnumControllerType;
        onLoad(): void;
        setControllerType(type: EnumControllerType, call?: Function): void;
        /**将自身添加到控制器列表中 */
        protected addSelf(): void;
        /**将自身从控制器列表中移除 */
        protected removeSelf(): void;
        protected onEnable(): void;
        protected onDisable(): void;
        private isResetTagNode;
        /**初始化控制列表 */
        initControlList(isResetTagNode?: boolean): void;
        /**节点是否可视 */
        private isNodeVisiable;
        /**
         * 获取节点相对某节点坐标系或世界坐标系坐标
         * @param node 当前节点
         * @param targetNode 目标坐标系节点
         * @returns
         */
        private getNodePos;
        /**
         * 获取一个坐标对应某节点中心点的坐标
         * @param pos 原坐标
         * @param targetNode 目标节点
         * @returns
         */
        private getCenterPosOfNode;
        /**
         * 重置框框节点位置
         * @param targetNode 目标节点
         * @param parentNode 节点的父节点
         */
        private resetTagNode;
        private setNodeSize;
        setMaxIndex(curMaxIndexVal: number): void;
        /**调整位置 */
        resetPosOfTagNode(): void;
        /**创建框框节点 */
        private createTagNode;
        curControlTarget: TvControlNode;
        private _curTagIndex;
        get curTagIndex(): number;
        set curTagIndex(value: number);
        private getDefualtTargetIndex;
        /**列表是否纵向滚动 */
        private isScrollVertical;
        private offset;
        /**获取离当前目标最近的按钮 */
        private getIndexOfTheNearestTarget;
        /**切换到下一个节点 */
        switchToNextControlNode(): void;
        /**滚动列表滚动至指定节点位置 */
        private scrollToItemOffset;
        /**滚动列表 */
        private scrollToItem;
        /**
         * 判断节点是否在另一节点范围内
         * @param itemNode 节点
         * @param viewNode 视图节点
         * @returns
         */
        private isInViewArea;
        private _curDirection;
        /**当前操作方向 */
        get curDirection(): EnumDirection;
        /**当前操作方向 */
        set curDirection(value: EnumDirection);
        /**隐藏上一个选中节点 */
        hideLastControlNode(): void;
        /**触发事件 */
        triggerEventOfTarget(): void;
        /**派发事件 */
        emitEvent(eventHandle: cc.Component.EventHandler, curControlTarget: TvControlNode): void;
        /**触发列表滚动 */
        protected triggerSwicthNode(): void;
        private _isLocked;
        /**节点是否锁定 */
        get isLocked(): boolean;
        /**节点是否锁定 */
        set isLocked(value: boolean);
        /**退出 */
        exit(): void;
        removeAllList(): void;
        private tempList;
        addTargetNode(targetNode: cc.Node, handlerFunc?: string, type?: EnumTvNodeType, customEventData?: string, listItemNode?: cc.Node, isItemList?: boolean, isDefualtTargetNode?: boolean, isAllDirectionList?: boolean, callback?: Function): TvControlNode;
        /** 按组加节点 */
        addTargetNodes(nodes: ITvControlTargetData[]): void;
        private curTween;
        aniTagNode(tagNode: cc.Node): void;
    }
    export enum KEY_TYPE {
        LETTER = 0,
        NUMBER = 1,
        SIGN = 2
    }
    export class SoftKeyboard extends game.View {
        keypad: NumericKeypad;
        list: cc.Node;
        numberNode: cc.Node;
        abcNode: cc.Node;
        private editLabel;
        private inputMode;
        private keyType;
        onLoad(): void;
        start(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        layout(): void;
        onOpen(fromUI: number, obj: any): void;
        private setInputMode;
        private addLetterEvent;
        private setKeyBoardStyle;
        private onLetterItem;
        private nodeClick;
        private addNumberEvent;
        private onNumberItem;
        private okClick;
    }
    export class ToggleLabelCtrl extends cc.Component {
        normalColor: cc.Color;
        selectColor: cc.Color;
        private toggleList;
        protected onLoad(): void;
        init(targetNode: cc.Node): void;
        checkEvent(): void;
    }
    export class CoreCombox extends game.Combox {
    }
    export class CoreLanguageComp extends game.LanguageComp {
    }
    /** 单个球 */
    export class BingoBall extends cc.Component {
        bg: cc.Node;
        valueLabel: cc.Label;
        clickedNode: cc.Node;
        /**设置球视图数据 */
        setView(data: protoReport.grid_info_type): void;
        /**
         * 根据数字获取颜色值
         * @param v
         * @returns
         */
        private getColorByNumber;
        /**
         * 通过数字大小获取组内下标 共分五组 id为0~4
         * @param v
         */
        private getGroupIdByNumber;
        /**
         * 动态显示图片
         * @param target
         * @param path
         * @param call
         */
        private dynamicShowSprite;
    }
    export class AccountFlowItemL_Hunter extends game.ListViewItem {
        bg: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
    }
    export class AccountFlowItemL_Slot extends game.ListViewItem {
        bg: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
    }
    export class AccountFlowItemP_Hunter extends game.ListViewItem {
        bg: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
    }
    export class AccountFlowItemP_Slot extends game.ListViewItem {
        bg: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
    }
    export class BetRecordItemL_Arcade extends game.ListViewItem {
        bg: cc.Node;
        checkBtn: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
        onCheck(): void;
    }
    export class BetRecordItemL_Arcade2 extends game.ListViewItem {
        bg: cc.Node;
        checkBtn: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
        onCheck(): void;
    }
    export class BetRecordItemL_Hunter extends game.ListViewItem {
        bg: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
    }
    export class BetRecordItemL_Slot extends game.ListViewItem {
        bg: cc.Node;
        checkBtn: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
        onCheck(): void;
    }
    export class BetRecordItemP_Arcade extends game.ListViewItem {
        bg: cc.Node;
        checkBtn: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
        onCheck(): void;
    }
    export class BetRecordItemP_Arcade2 extends game.ListViewItem {
        bg: cc.Node;
        checkBtn: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
        onCheck(): void;
    }
    export class BetRecordItemP_Hunter extends game.ListViewItem {
        bg: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
    }
    export class BetRecordItemP_Slot extends game.ListViewItem {
        bg: cc.Node;
        checkBtn: cc.Node;
        private _labArr;
        private _init;
        updateItem(index: number, data: any, params?: any): void;
        onItemTouch(): void;
        onCheck(): void;
    }
    export class DIResultCOM extends cc.Component {
        bg: cc.Node;
        key: cc.Label;
        value: cc.Label;
        updateItem(index: number, key: string, value: string): void;
    }
    export class DIResultFullLine extends cc.Component {
        bg: cc.Node;
        elemRoot: cc.Node;
        labDesc: cc.Label[];
        private _index;
        private _game_id;
        private _data;
        private _extData;
        init(index: number, game_id: number, data: protoReport.fullLineResultListType, extData?: RecordDI_ExtData): void;
    }
    export class DetailItem extends cc.Component {
        protected _index: number;
        protected _data: any;
        updateItem(index: number, data: any, ...args: any[]): void;
    }
    /**
     * 详情item - slot
     */
    export class DIResultJP extends DetailItem {
        bg: cc.Node;
        key: cc.Label;
        value: cc.Label;
        updateItem(index: number, data: any): void;
    }
    export class DIResultJP_Hunter extends game.ListViewItem {
        bg: cc.Node;
        labDesc: cc.Label[];
        /**
         * 子类实现此方法
         * @param index 索引
         * @param data 数据
         * @param params 额外数据
         */
        updateItem(index: number, data: any, params?: any): void;
    }
    export class DIResultLG extends DetailItem {
        bg: cc.Node;
        key: cc.Label;
        value: cc.Label;
        elemRoot: cc.Node;
        updateItem(index: number, data: protoReport.rgProcessType, game_id: number): void;
    }
    /**
     * 详情item - slot
     */
    export class DIResultLG_Arcade extends DetailItem {
        bg: cc.Node;
        key: cc.Label;
        value: cc.Label;
        elemRoot: cc.Node;
        updateItem(index: number, data: protoReport.rgProcessType): void;
    }
    export class DIResultNormal extends cc.Component {
        bg: cc.Node;
        elemRoot: cc.Node;
        labDesc: cc.Label[];
        private _index;
        private _game_id;
        private _data;
        private _extData;
        init(index: number, game_id: number, data: protoReport.lineResultType, extData?: RecordDI_ExtData): void;
    }
    export class DIResultNormal_Hunter extends game.ListViewItem {
        bg: cc.Node;
        fishIcon: cc.Sprite;
        hitTag: cc.Sprite;
        labDesc: cc.Label[];
        labHashDesc: cc.Label[];
        hitTagSpf: cc.SpriteFrame[];
        bulletHash: cc.Node;
        hashBulletLabel: cc.Label;
        copyLabel: cc.Label;
        checkLabel: cc.Label;
        private _game_id;
        private curHashBulletVal;
        private bgIndex;
        start(): void;
        /**子弹哈希点击 */
        bulletHashBtn(): void;
        /**查验哈希点击 */
        checkHashBtn(): void;
        /**复制按钮 */
        copyBtnClick(): void;
        /**
         * 子类实现此方法
         * @param index 索引
         * @param data 数据
         * @param params 额外数据
         */
        updateItem(index: number, data: any, params?: any): void;
    }
    export class DIResultScatter extends cc.Component {
        bg: cc.Node;
        elemRoot: cc.Node;
        labDesc: cc.Label[];
        private _index;
        private _game_id;
        private _data;
        private _extData;
        init(index: number, game_id: number, data: protoReport.scatterResultType, extData?: RecordDI_ExtData, isShowNumber?: boolean): void;
    }
    /**
     * 详情item - slot
     */
    export class DISlot extends DetailItem {
        bg: cc.Node;
        key: cc.Label;
        value: cc.Label;
        updateItem(index: number, data: any): void;
    }
    export class GameRecordPanel extends cc.Component {
        private _target;
        tabs: cc.Node[];
        searchTime: cc.Label;
        matchNum: cc.Label;
        total: cc.Label;
        totalBet: cc.Label;
        totalWin: cc.Label;
        totalBonus: cc.Label;
        totalGain: cc.Label;
        grListView: CoreListView;
        gtCombox: CoreCombox;
        gnCombox: CoreCombox;
        stCombox: CoreCombox;
        coinCombox: CoreCombox;
        infoHeaderRoot: cc.Node;
        balance: cc.Label;
        brItemTemplate: cc.Prefab[];
        brInfoHeader: cc.Prefab[];
        afItemTemplate: cc.Prefab[];
        afInfoHeader: cc.Prefab[];
        isPanelL: boolean;
        private _infoHeaderNodes;
        /**所有货币类型 */
        allCurrencyId: number[];
        /**货币对应数值： */
        mapCurrency: Map<number, number[]>;
        private labelPoints_hunter;
        private labelPoints_slot;
        start(): void;
        private setTabShow;
        private _registerEvent;
        private _unRegisterEvent;
        private _createInfoHeaderNode;
        private _showInfoHeaderNode;
        private _hideInfoHeaderNode;
        switchInfoHeader(tabId?: number, gameTypeId?: number): void;
        bindTarget(target: GameRecord): void;
        onTabTouch(event: cc.Event.EventTouch): void;
        onSearchTouch(event: cc.Event.EventTouch): void;
        autoModifyTab(): void;
        /**
         * 选择标签
         * @param tabId 标签id
         * @param force 是否强制执行（相同选择也会响应）
         */
        selTab(tabId: number, force?: boolean): void;
        initCoinComBox(): void;
        initCombox(isSelTab?: boolean): void;
        onGameTypeSel(index: number, data: any, manual: boolean): void;
        onGameSel(index: number, data: any, manual: boolean): void;
        onSearchTimeSel(index: number, data: any, manual: boolean): void;
        onCoinTypeSel(index: number, data: any): void;
        private _refresh_tab;
        listView_isReady(tabId?: number, gameTypeId?: number): boolean;
        initListView(record: RecordListData): void;
        ReqAddListViewData(listView: game.ListView, event: game.ListViewEvent): void;
        addListViewData(tabId?: number, gameTypeId?: number): void;
        refresh_summary(tabId?: number, gameTypeId?: number, currencyData?: any[]): void;
        private _layout_summary;
        private _refresh_balance;
        onDestroy(): void;
        oriSwitchExit(): void;
        oriSwitchEnter(): void;
    }
    /**
* 请求记录列表结构体参数
* @param type2_id 游戏类型id
* @param game_id 游戏id
* @param time_kind 时间区间id
* @param offset 偏移量
* @param language 语种
*/
    export interface IReqGameRecordParam {
        type2_id?: number;
        game_id?: number;
        time_kind: number;
        offset: number;
        language: string;
        current_game_id?: number;
    }
    /**
     * 请求单号详情结构体参数
     * @param order_id 单号
     * @param isCheck
     * @param check_type 查验类型
     */
    export interface IReqOrderDetailParam {
        order_number?: string;
        order_id?: string;
        isCheck?: boolean;
        check_type?: HashCheckType;
        language?: string;
    }
    export class GameRecord extends game.UIView {
        recordPanelL: GameRecordPanel;
        recordPanelP: GameRecordPanel;
        tips: cc.Node;
        betRecordData: any[];
        accountFlowData: any[];
        private _isLandscape;
        private _recordPanel;
        onBtnClose(): void;
        private _registerEvent;
        private _unRegisterEvent;
        private _checkIsLand;
        /**
         * 窗口size改变
         */
        private _onResize;
        /**
         * 界面布局
         * @param checkOri 是否重新检测屏幕方向 (首次布局才需要检测)
         */
        private _layout;
        private _autoScale;
        showTips(): void;
        hideTips(): void;
        start(): void;
        onDestroy(): void;
        private onCheckRecordDetailAll;
        onCheckRecordDetail(eventName: string, eventData?: any, ...optionalParams: any[]): void;
        onCheckRecordDetailWeb(eventName: string, eventData?: any, ...optionalParams: any[]): void;
        /**
         * 请求游戏列表
         * @param lang 语种（zh, en）
         */
        reqGameList(lang: string): void;
        respGameList(_xhr: XMLHttpRequest, baseInfo: game.IReqInfo): void;
        checkRepeatSearch(sc: SearchCondition): boolean;
        reqGameOrder(param: IReqGameRecordParam): void;
        respGameOrder_init(_xhr: XMLHttpRequest, baseInfo: game.IReqInfo): void;
        respGameOrder_append(_xhr: XMLHttpRequest, baseInfo: game.IReqInfo): void;
        reqGameFlow(param: IReqGameRecordParam): void;
        respGameFlow_init(_xhr: XMLHttpRequest, baseInfo: game.IReqInfo): void;
        respGameFlow_append(_xhr: XMLHttpRequest, baseInfo: game.IReqInfo): void;
        reqOrderDetail(param: IReqOrderDetailParam): void;
        reqOrderDetailWeb(param: IReqOrderDetailParam): void;
        respOrderDetailWeb(_xhr: XMLHttpRequest, baseInfo: game.IReqInfo): void;
        respOrderDetail(_xhr: XMLHttpRequest, baseInfo: game.IReqInfo): void;
    }
    export class GRComboxItem extends game.ComboxItem {
        bg: cc.Node;
        text: cc.Label;
        comboxId: number;
        updateItem(index: number, data: any, params?: any): void;
        setExtParams(params: any): void;
        _itemOnTouch(): void;
        private _checkBg;
    }
    export class GameDetail extends cc.Component {
        title: cc.Node;
        detailRoot: cc.Node;
        itemTemplate: cc.Prefab;
        private _itemList;
        start(): void;
        init(): void;
    }
    export class GameDetail_Arcade extends cc.Component {
        title: cc.Node;
        detailRoot: cc.Node;
        itemTemplate: cc.Prefab;
        private _itemList;
        start(): void;
        init(): void;
    }
    export class ResultArcadeCommon_Item extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, datas: any[]): void;
    }
    export class ResultArcadeCommon_Title extends cc.Component {
        nodeRoot: cc.Node;
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        setTitleLabel(posX: number[], keys: string[]): void;
        createPlayerResultItem(): void;
        resetInfo(info: any): any[];
    }
    export class ResultCOM extends cc.Component {
        title: cc.Label;
        updateItem(title: string): void;
    }
    export class ResultRoller extends cc.Component {
        iconRoot: cc.Node;
        bg: cc.Node;
        private _iconList;
        private _replaceIconList;
        private _game_id;
        private _grid;
        private _originGrid;
        private _row;
        private _col;
        private _gridShow;
        private _rowShow;
        private _colShow;
        private _beginX;
        private _beginY;
        /**
         * 滚轴初始化
         * @param game_id 游戏id
         * @param grid 元素id格子
         * @param gridShow 滚轴展示数组
         * @param fixedGrid 是否固定滚轴
         * @param extData 扩展数据
         */
        init(game_id: number, grid: number[], gridShow: RecordGridShow[], fixedGrid?: boolean, extData?: RecordDI_ExtData, occupyPosList?: any, gridReward?: any, isShowMask?: any): void;
        private _fixOverlapGrid;
        private _generateResultGrid;
        private _getoffsetByCol;
        private _generateResultGrid_fixed;
        private _calculateBeginPos;
        private _resize;
    }
    export class ResultRoller_RandomLenth extends cc.Component {
        iconRoot: cc.Node;
        bg: cc.Node;
        private _iconList;
        private _replaceIconList;
        private _game_id;
        private _grid;
        private _originGrid;
        private _row;
        private _col;
        private _gridShow;
        private _rowShow;
        private _colShow;
        private _beginX;
        private _beginY;
        /**位置信息 */
        private occupyPosList;
        /**
         * 滚轴初始化
         * @param game_id 游戏id
         * @param grid 元素id格子
         * @param gridShow 滚轴展示数组
         * @param fixedGrid 是否固定滚轴
         * @param extData 扩展数据
         */
        init(game_id: number, grid: number[], gridShow: RecordGridShow[], fixedGrid?: boolean, extData?: RecordDI_ExtData, occupyPosList?: any): void;
        private _fixOverlapGrid;
        private _generateResultGrid;
        /**获取不定长元素长度 */
        private getRandomLength;
        /**获取不定长元素得偏移量 */
        private getRandomOffset;
        private _getoffsetByCol;
        private _generateResultGrid_fixed;
        private _calculateBeginPos;
        private _resize;
    }
    export class ResultSlotTurnCoinItem extends cc.Component {
        costLabel: cc.Label;
        rateLabel: cc.Label;
        content: cc.Node;
        bonusLabel: cc.Label;
        updateItem(detail: protoReport.doubleCoinDetailType): void;
    }
    export class GameResult extends cc.Component {
        summary: cc.Node;
        btnDrop: cc.Node;
        order: cc.Label;
        bonusType: cc.Label;
        bonus: cc.Label;
        resultRoot: cc.Node;
        rollerTemplate: cc.Prefab;
        slotHashChainInfo: cc.Prefab;
        lineResultTemplate: cc.Prefab[];
        fullLineResultTemplate: cc.Prefab[];
        scatterResultTemplate: cc.Prefab[];
        comResultTemplate: cc.Prefab[];
        lgResultTemplate: cc.Prefab;
        jpResultTemplate: cc.Prefab;
        placeholderTemplate: cc.Prefab;
        turnResultTemplate: cc.Prefab;
        private _template;
        setTitle(index: number, typeId?: number, bonus?: number): void;
        /**slot 哈希链 */
        createSlotHashChain(common_data: any): void;
        createSlotHashDetileTitle(prefab: cc.Prefab, common_data: any): void;
        turnCoinDetileTitle(prefab: cc.Prefab, detail: protoReport.doubleCoinDetailType): void;
        /**双滚轴 */
        isDoubleGrid(gameId: number): boolean;
        createRoller(game_id: number, grid: number[], gridShow: RecordGridShow[], fixedGrid?: boolean, extData?: RecordDI_ExtData, occupyPosList?: any, randomGridType?: any, gridReward?: any, common_data?: any): void;
        createRollers(game_id: number, grid: number[], gridShow: RecordGridShow[], fixedGrid?: boolean, extData?: RecordDI_ExtData, occupyPosList?: any, randomGridType?: any, gridReward?: any, isShowMask?: any, common_data?: any): void;
        createSlotHashChainItem(): void;
        turnCoinItem(detail: protoReport.doubleCoinDetailType): void;
        /**
         * 异步加载预制模板
         */
        loadTemplate(path: string): Promise<any>;
        createPlaceholder(height?: number): void;
        createDetail_lineResult(game_id: number, detail: protoReport.lineResultType[], extData?: RecordDI_ExtData): Promise<void>;
        createDetail_fullLineResult(game_id: number, detail: protoReport.fullLineResultListType[], extData?: RecordDI_ExtData): void;
        createDetail_crushLineResult(game_id: number, detail: protoReport.lineResultType[]): void;
        createDetail_crushFullLineResult(game_id: number, detail: protoReport.fullLineResultType[]): void;
        createDetail_scatterResult(game_id: number, detail: protoReport.scatterResultType[], exData?: RecordDI_ExtData, isShowNumber?: boolean): void;
        createDetail_1007401(game_id: number, detail: protoReport.allActiveLineListType[]): Promise<void>;
        createDetail_lgResult(game_id: number, detail: protoReport.rgProcessType[]): void;
        createDetail_jpResult(game_id: number, detail: protoReport.jackpotDetail): void;
        createDetail_comTitle(title: string): void;
        createDetail_comResult(game_id: number, index: number, key: string, value: string): void;
        createDetail_turnResult(detail: protoReport.doubleCoinDetailType): void;
        btnDropOnTouch(): void;
        onDestroy(): void;
    }
    export class ResultArcadeAdventureItem extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.adventure_detail): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeAdventureTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeBlackjackItem extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.blackjack_pos_detail): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeBlackjackTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeCard5Item extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.card5_detail): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeCard5Title extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeCardTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeDominoDetailItem extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roundIdx: number, data: protoReport.domino_role_detail): void;
        private setLabStr;
        private setItemIcon;
        createDominoIcon(game_id: string, parent: cc.Node, info: protoReport.card_info, iconW?: number, iconH?: number): void;
    }
    export class ResultArcadeDominoDetailTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeDominoItem extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.domino_total_detail): void;
        private setItemIcon;
        createDominoIcon(game_id: string, parent: cc.Node, info: protoReport.card_info, iconW?: number, iconH?: number): void;
    }
    export class ResultArcadeDominoTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeFlushItem extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roundCount: number, data: protoReport.flush_detail_type): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeFlushTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeMinesItem extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.mines_detail): void;
        private setLabStr;
    }
    export class ResultArcadeMinesTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeNumItem extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, data: any): void;
    }
    export class ResultArcadeNumTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadePlinkoItem extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.plinko_detail): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadePlinkoTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeRedPacketItem extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, playType: number): void;
        private setLabStr;
    }
    export class ResultArcadeRedPacketTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeRoundProcessItem extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, roundCount: number, data: protoReport.flush_process_type): void;
        private setLabStr;
    }
    export class ResultArcadeRoundProcessTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeSettleDetailItem extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.flush_detail_type): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeSettleDetailTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeThaiPokDengItem extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.thai_pok_deng_detail.thaiPokDengDetailType): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeThaiPokDengTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeItem_LudoQuick extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, roleColor: protoReport.ludo_quick_detail.ludoQuickRoleColorType, roleDetail: protoReport.ludo_quick_detail.ludoQuickDetailType): void;
        private setLabStr;
    }
    export class ResultArcadeTitle_LudoQuick extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeItem_PokDeng extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roleDetail: protoReport.pok_deng_detail.pokDengDetailType): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeTitle_PokDeng extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeItem_Scratchcards2_1401 extends cc.Component {
        bg: cc.Node;
        bet: cc.Node;
        list: cc.Node;
        private winList;
        setItemResultData(areaInfoArr: protoReport.scratchcards2_detail.Isc2_r_area_type[], bet: number): void;
        setName(fanIdx: number): string;
        private createIcons;
        private setItemIcon;
    }
    export class ResultArcadeItem_Scratchcards2_1501 extends cc.Component {
        bet: cc.Node;
        list: cc.Node;
        setItemResultData(areaInfoArr: protoReport.scratchcards2_detail.Isc2_r_area_type[], bet: number): void;
        private createIcons;
        private setItemIcon;
    }
    export class ResultArcadeTitle_Scratchcards2 extends cc.Component {
        list: cc.Node;
        resultItem: cc.Prefab[];
        createPlayerResultItem(): void;
    }
    export class ResultArcadeItem_Seotda extends cc.Component {
        result: cc.Node;
        superResult: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roleDetail: protoReport.seotda_detail.seotdaDetailType): void;
        setCardTypeStr(cardType: number): string;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeTitle_Seotda extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTrucoItem extends cc.Component {
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.truco_total_detail): void;
    }
    export class ResultArcadeTrucoTitle extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeWheel2Item extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.wheel2_detail): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeWheel2Title extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcade_LudoQuick extends cc.Component {
        bg: cc.Node;
        moneySpriteFrame: cc.SpriteFrame;
        spriteFrameArr: cc.SpriteFrame[];
        private startPosArr;
        private endPosArr;
        private posArr;
        createPlayerResultItem(): void;
        private posNum;
        private getColorbyPos;
        private initPos;
    }
    export class ResultComonArcade extends cc.Component {
        container: cc.Node;
        bg: cc.Node;
        setResultData(index: number, data: any, type: number): void;
        private setItemIcon;
    }
    export class ResultComonArcade_133000301 extends cc.Component {
        container: cc.Node;
        bg: cc.Node;
        setResultData(index: number, data: any, type: number): void;
        setLableData(parent: any, reward: any): void;
        private setItemIcon;
    }
    export class ResultComonArcade_blackjack extends cc.Component {
        container: cc.Node;
        bg: cc.Node;
        setResultData(index: number, data: protoReport.blackjack_detail): void;
        private setItemIcon;
    }
    export class ResultComonArcade_mines extends cc.Component {
        container: cc.Node;
        bg: cc.Node;
        setResultData(index: number, data: protoReport.mines_detail): void;
        private setItemIcon;
    }
    export class ResultComonArcade_mines_133001201 extends cc.Component {
        container: cc.Node;
        bg: cc.Node;
        setResultData(index: number, data: protoReport.mines_detail): void;
        private setItemIcon;
    }
    export class ResultComonArcade_pokDeng extends cc.Component {
        container: cc.Node;
        bg: cc.Node;
        setResultData(index: number, pok_deng_detail: protoReport.pok_deng_detail): void;
        private setItemIcon;
    }
    export class GameResult_Arcade extends cc.Component {
        summary: cc.Node;
        btnDrop: cc.Node;
        order: cc.Label;
        type: cc.Label;
        resultRoot: cc.Node;
        commonTemplate: cc.Prefab;
        commonTemplate_blackjack: cc.Prefab;
        commonTemplate_mines: cc.Prefab;
        commonTemplate_mines_133001201: cc.Prefab;
        commonTemplate_133000301: cc.Prefab;
        commonTemplate_pokDeng: cc.Prefab;
        templateCradTitle: cc.Prefab;
        templateNumTitle: cc.Prefab;
        templateTrucoTitle: cc.Prefab;
        templateDominoTitle: cc.Prefab;
        templateDominoDetailTitle: cc.Prefab;
        templateMinesTitle: cc.Prefab;
        templateFlushTitle: cc.Prefab;
        templateRoundProcessTitle: cc.Prefab;
        templateSettleDetailTitle: cc.Prefab;
        templateBlackjackTitle: cc.Prefab;
        templateRedPacketTitle: cc.Prefab;
        templateAdventureTitle: cc.Prefab;
        templateCard5Title: cc.Prefab;
        templateWheel2Title: cc.Prefab;
        templatePlinkoTitle: cc.Prefab;
        templateThaiPokDeng: cc.Prefab;
        templateScratchcards2Title: cc.Prefab;
        templateLudoQuick: cc.Prefab;
        templateLudoQuickTitle: cc.Prefab;
        templatePokDengTitle: cc.Prefab;
        templateSeotdaTitle: cc.Prefab;
        lgResultTemplate: cc.Prefab;
        placeholderTemplate: cc.Prefab;
        resultTitleTmp: cc.Prefab[];
        private _template;
        private _curOrderDetail;
        setTitle(): void;
        createCommonResult(): void;
        createPlayerResult(): void;
        /**
         * 异步加载预制模板
         */
        loadTemplate(path: string): Promise<any>;
        createPlaceholder(height?: number): void;
        btnDropOnTouch(): void;
        onDestroy(): void;
    }
    /**
     * 记录数据定义
     * 注：如果玩法有变动，导致该文件定义数据有变动，需手动修改该文件
     */
    /** ------------ slot相关定义 ------------------ */
    /**
     * 线模式
     * @param NORMAL 普通
     * @param FREE 免费
     */
    export enum SlotLineMode {
        NORMAL = 1,
        FREE = 2
    }
    /**
     * 线类型
     * @param LIGATURE 连线
     * @param ASSIGN 指定
     * @param ROLLER 滚轴
     * @param NO_NOSE_TAIL_LIGATURE 非首尾连线
     * @param GLOBAL_DISPERSE 全局分散
     * @param NORMAL_DISPERSE 普通分散
     * @param FREE_DISPERSE 免费分散
     * @param NO_NOSE_TAIL_ROLLER 非首尾滚轴
     * @param CLOSETO_DISPERSE 相邻分散
     * @param RANDOM_REWARD_ASSIGN 随机奖励指定
     * @param ORDER_ROLLER 有序滚轴
     * @param ROLLER_SPECIAL 滚轴X战警
     * @param MAX_LINES 满线
     * @param SERIES_ROLLER 连续滚轴
     */
    export enum SlotLineType {
        LIGATURE = 1,
        ASSIGN = 2,
        ROLLER = 3,
        NO_NOSE_TAIL_LIGATURE = 4,
        GLOBAL_DISPERSE = 5,
        NORMAL_DISPERSE = 6,
        FREE_DISPERSE = 7,
        NO_NOSE_TAIL_ROLLER = 8,
        CLOSETO_DISPERSE = 9,
        RANDOM_REWARD_ASSIGN = 10,
        ORDER_ROLLER = 11,
        ROLLER_SPECIAL = 12,
        MAX_LINES = 13,
        SERIES_ROLLER = 14
    }
    /**
     * 线方向
     * @param LEFT_2_RIGHT 左起
     * @param RIGHT_2_LEFT 右起
     */
    export enum SlotLineDir {
        LEFT_2_RIGHT = 1,
        RIGHT_2_LEFT = 2
    }
    /**
     * 记录详情
     */
    export class RecordDetail extends game.UIView {
        bg: cc.Node;
        scrollView: cc.ScrollView;
        gameDetail: GameDetail;
        gameResultTemplate: cc.Prefab;
        btnBack: cc.Node;
        private _isLandscape;
        private _curOrderData;
        private _curOrderDetail;
        private _gameResultList;
        private _registerEvent;
        private _unRegisterEvent;
        /**
         * 窗口size改变
         */
        private _onResize;
        onBtnBackTouch(event: cc.Event.EventTouch): void;
        start(): void;
        onDestroy(): void;
        /**
         * 界面布局
         * @param checkOri 是否重新检测屏幕方向 (首次布局才需要检测)
         */
        private _layout;
        private _autoScale;
        oriSwitchExit(): void;
        oriSwitchEnter(): void;
        setListViewSize(width?: number, height?: number): void;
        private _handle_GameResult;
        private _createGameResult;
        private _autoCreateGameResult;
        private _handle_jpDetail;
        /**
         *
         * @param game_id 游戏id
         * @param detail 默认数据
         * @param normalSpinDetail 普通转数据
         * @param freeSpinDetail 免费转数据
         */
        private _handle_spinDetail;
        private _handle_lgDetail;
        private _handle_turnDetail;
        private _handle_bfgDetail;
        private _handle_wmDetail;
    }
    export class RecordDetail_Aracde extends game.UIView {
        bg: cc.Node;
        scrollView: cc.ScrollView;
        gameDetail: GameDetail_Arcade;
        gameResultTemplate: cc.Prefab;
        btnBack: cc.Node;
        private _isLandscape;
        private _curOrderData;
        private _curOrderDetail;
        private _gameResultList;
        private _registerEvent;
        private _unRegisterEvent;
        /**
         * 窗口size改变
         */
        private _onResize;
        onBtnBackTouch(event: cc.Event.EventTouch): void;
        start(): void;
        onDestroy(): void;
        /**
         * 界面布局
         * @param checkOri 是否重新检测屏幕方向 (首次布局才需要检测)
         */
        private _layout;
        private _autoScale;
        oriSwitchExit(): void;
        oriSwitchEnter(): void;
        setListViewSize(width?: number, height?: number): void;
        private _createGameResult;
    }
    /**
     * 记录详情
     */
    export class RecordDetail_Hunter extends game.UIView {
        bg: cc.Node;
        listView: CoreListView;
        btnBack: cc.Node;
        contentTitle: cc.Node;
        normalResultTemplate: cc.Prefab[];
        jpResultTemplate: cc.Prefab[];
        HashResultTemplate: cc.Prefab[];
        private _isLandscape;
        private _latelyLVII;
        private _registerEvent;
        private _unRegisterEvent;
        /**
         * 窗口size改变
         */
        private _onResize;
        onBtnBackTouch(event: cc.Event.EventTouch): void;
        start(): void;
        onDestroy(): void;
        /**
         * 界面布局
         * @param checkOri 是否重新检测屏幕方向 (首次布局才需要检测)
         */
        private _layout;
        private _autoScale;
        oriSwitchExit(): void;
        oriSwitchEnter(): void;
        setListViewSize(width?: number, height?: number): void;
    }
    export class ResultArcadeItem_1 extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roundIdx: number, data: protoReport.player_qz_detail_type): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeItem_10 extends cc.Component {
        escapePoint: cc.Label;
        bet: cc.Label;
        select_area: cc.Sprite;
        spread_result: cc.Sprite;
        winloss: cc.Label;
        profit: cc.Label;
        bg: cc.Node;
        paperSprite: cc.SpriteFrame[];
        setItemResultData(index: number, data: protoReport.guess_detail): void;
        getRpsSpreadDetail(selectArea: any): cc.SpriteFrame;
    }
    export class ResultArcadeItem_2 extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roundIdx: number, data: protoReport.player_qz_detail_type): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeItem_3 extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roundIdx: number, data: protoReport.player_qz_detail_type): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeItem_4 extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roundIdx: number, data: protoReport.player_qz_detail_type): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeItem_5 extends cc.Component {
        result: cc.Node;
        bg: cc.Node;
        setItemResultData(index: number, roundIdx: number, data: protoReport.player_qz_detail_type): void;
        private setLabStr;
        private setItemIcon;
        private createIcons;
    }
    export class ResultArcadeItem_6 extends cc.Component {
        bg: cc.Node;
        container: cc.Node;
        /**
         * 根据数据刷新所有球ui
         * @param data
         */
        updateBalls(cardInfo: protoReport.card_info_type): void;
    }
    export class ResultArcadeItem_7 extends cc.Component {
        escapePoint: cc.Label;
        bet: cc.Label;
        winloss: cc.Label;
        profit: cc.Label;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.player_detail_type): void;
    }
    export class ResultArcadeItem_8 extends cc.Component {
        bg: cc.Node;
        container: cc.Node;
        /**
         * 根据数据刷新所有球ui
         * @param data
         */
        updateItems(gridsInfo: protoReport.mines_grid_type[]): void;
    }
    export class ResultArcadeItem_9 extends cc.Component {
        escapePoint: cc.Label;
        bet: cc.Label;
        winloss: cc.Label;
        profit: cc.Label;
        bg: cc.Node;
        setItemResultData(index: number, data: protoReport.scratchcards_detail): void;
    }
    export class ResultArcadeTitle_1 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_10 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_2 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_3 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_4 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_5 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_6 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        luckyCoinLabel: cc.Label;
        cardPre: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_7 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_8 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        cardPre: cc.Prefab;
        cardPre_2: cc.Prefab;
        createPlayerResultItem(): void;
    }
    export class ResultArcadeTitle_9 extends cc.Component {
        list: cc.Node;
        bg: cc.Node;
        resultItem: cc.Prefab;
        kaijiang: cc.Label;
        createPlayerResultItem(): void;
    }
    export class GMReg extends game.UIView {
        getDataParam: string;
        private _contentText;
        onLoad(): void;
        closePop(): void;
        showResult(respData: protoCommon.gmResp): string;
        updateGMResp(): void;
    }
    /**
     * GM 管理类，用于初始化GM界面
     *
     * @export
     * @class GMManager
     */
    export class GMManager {
        private static _instance;
        static get instance(): GMManager;
        /**
         * GM 节点
         */
        private GMNode;
        GMRegNode: cc.Node;
        /**
         * GM预制
         */
        private resPrefab;
        private regPrefab;
        /**
         * 初始化gm
         * @param gmConfig gm配置表
         * @returns
         */
        initGM(gmConfig: any): void;
        private gmResp;
        /**
         * 销毁
         */
        destroy(): void;
    }
    /**
     * GM
     *
     * @export
     * @class GMLayer
     * @extends {game.UIView}
     */
    export class GMLayer extends game.UIView {
        private GmBtn;
        private gmLayer;
        private blockNode;
        private contentNode;
        private cmdItem;
        private confirmBtn;
        private cancelBtn;
        private editbox;
        private toggleContainerNode;
        private toggleItem;
        private GMReg;
        /**
         * GM配置
         */
        private gmconfig;
        onLoad(): void;
        private reqMsg;
        /**
         * 初始化GM
         * @param gmConfig
         * @returns
         */
        initGM(gmConfig: any): void;
        /**
         * 布局
         */
        private layout;
        /**
         * 按钮触摸开始
         */
        private GmBtnTouchStart;
        /**
         * 按钮触摸结束
         */
        private GmBtnTouchEnd;
        /**
         * 按钮移动
         */
        private GmBtnMove;
        /**
         * 初始化命令列表
         */
        private initSlotCmdList;
        /**
         * 初始化命令列表
         */
        private initHuntCmdList;
        /**
         * 初始化命令列表
         */
        private initArcadeCmdList;
        /**
         * 初始化标题 dev sit
         */
        private initCmdTitle;
        /**
         * 添加特殊命令
         */
        private addSpecialCMD;
        private showFps;
        /**
         * cmd按钮点击监听
         */
        private cmdBtnClick;
        updateEditbox(result: any): void;
        showVillageData(result: protoCommon.gmResp): void;
        /**
         * 显示gm层
         */
        private showGMlayer;
        /**
         * 确认按钮
         */
        private confirmBtnClick;
        private netDelayTime;
        private setLagDelay;
        private netDelayCallBackExecuter;
        /**
         * GM游戏数值控制面板显示
         */
        regShow(): void;
        /**
         * resize
         */
        private resize;
        /**
         * 是否横屏
         */
        private get isLandscape();
        private openWidgetProperty;
        /**
         * 设置widget属性
         */
        private setWidget;
        onDestroy(): void;
    }
    /**
     * 字体效果
     * - 阴影
     * - 描边
     * - 描边阴影
     * - 颜色渐变
     * - 扫光效果
     * - 外发光
     */
    export class CustomLabelShader extends cc.Component {
        shadowUse: boolean;
        shadowOffset: cc.Vec2;
        shadowColor: cc.Color;
        outlineUse: boolean;
        outlineWidth: number;
        outlineColor: cc.Color;
        olShadowUse: boolean;
        olShadowOffset: cc.Vec2;
        olShadowColor: cc.Color;
        flowLightUse: boolean;
        flSpeed: number;
        flRot: number;
        flWidth: number;
        flColor: cc.Color;
        gradient: number;
        color1: cc.Color;
        color2: cc.Color;
        color3: cc.Color;
        glow: number;
        glowWidth: number;
        glowDepth: number;
        glowColor: cc.Color;
        private _mtl;
        private _time;
        onLoad(): void;
        initMat(): void;
        use(): void;
        update(dt: number): void;
    }
    export class ConfigGroup {
        static GAME_TYPE_SLOT: number;
        static GAME_TYPE_HUNTER: number;
        static GUIDE_CONDITION_JOIN_GAME_TIME: number;
        static GUIDE_CONDITION_REWARD_RATIO: number;
        static GUIDE_FORM_MARQUEE: number;
        static GUIDE_FORM_POPUP: number;
    }
    export class MenuBarCtrl {
        /**
         * ShowBackToHallBtn
         * 设置返回大厅按钮的显隐状态
         */
        SetBackBtnVisible(): void;
        /**
         * goBackToGameHall
         * 返回大厅
         */
        static goBackToGameHall(): void;
        static dialogOK(): void;
        /**
         * openHelpView
         * 打开帮助界面
         */
        openHelpView(): void;
        /**
         * openSetView
         * 打开设置界面
         */
        openSetView(): void;
        /**
         * createFriendRoom
         * 创建好友房间
         */
        createFriendRoom(): void;
        /**
         * openDataReport
         * 打开数据报表
         */
        openDataReport(): void;
    }
    export class CoreNetDelay extends game.View {
        delayLabel: cc.Label;
        timeout: number;
        widgetData: any;
        private static _instance;
        static getInstance(): CoreNetDelay;
        onLoad(): void;
        /**
         *
         * @param data 配置数据(例: { "top": 180, "left": 50 }或{"landscape": { "top": 180, "left": 50 }, "portrait": { "top": 860, "left": 50 }}, "horizontalCenter":0, "verticalCenter":0 })
         * @param point x,y的配置，如果配置了，widget不会生效
         */
        setWidget(data: any, point?: cc.Vec2): void;
        layout(): void;
        start(): void;
        onDestroy(): void;
        /**
         * 显示延迟
         *
         * @memberof PowerAndSignalLayer
         */
        UpdateDelayShow(mess: string, delay: number): void;
    }
    export class LanguageCoreComp extends game.LanguageComp {
        /**多语言限制 */
        private onlyInLanguages;
        onLoad(): void;
    }
    export class LanguageTest extends game.LanguageComp {
        /**多语言限制 */
        private onlyInLanguages;
        onLoad(): void;
    }
    type ConditionFun = (...param: any[]) => boolean;
    export class RedPoint extends cc.Component {
        /**
         * 红点对象节点
         */
        redPoint: cc.Node;
        /**
         * 是否已经初始化
         */
        isinit: boolean;
        /**
         * 目标函数上下文对象
         */
        targetObj: any;
        /**
         * 条件函数,返回boolean
         * 返回true 红点展示，返回false 红点不展示
         */
        conditionFunc: ConditionFun;
        /**
         * 目标节点
         */
        targetNode: cc.Node;
        onLoad(): void;
        /**
         * 初始化红点脚本组件
         * @param targetNode 附着的目标节点
         * @param context 条件函数 上下文
         * @param conditionFunc 条件函数 , 返回true 红点展示，返回false 红点消失
         * @param offetPos   位置偏移，相对于传进来的父节点, 可选 默认是 cc.v2(0,0)
         * @param RefreshTime 刷新条件函数的时间 ，可选 默认是 0.5s
         */
        init(targetNode: cc.Node, context: any, conditionFun: ConditionFun, offetPos?: cc.Vec2, RefreshTime?: number): void;
        private show;
        private hide;
        private schedulefunc;
        onDestroy(): void;
    }
    export class SceneIdMgr {
        private static _instance;
        private scenceId;
        private showLabel;
        static getInstance(): SceneIdMgr;
        constructor();
        /**
         * SceneIdMgr初始化
         */
        init(): void;
        /**
         * 销毁这个SceneIdMgr 的时候数据数据
         */
        destory(): void;
        private createLabel;
        private registerEvent;
        private removeEvent;
        private updateLabel;
        private enterRoom;
        private leaveRoom;
        /**
         * getSceneId 获取场景id
         */
        getSceneId(): string;
        /**
         * Show 展示和隐藏场景ID
         */
        display(show: boolean): void;
        updatePos(pos: cc.Vec2): void;
    }
    export class KeyboardBase extends TvEventHandleBase {
        private on_inputAbc_btn_tv;
        private on_inputNum_btn_tv;
        private on_inputOk_btn_tv;
    }
    export class PointerEvent extends cc.Component {
        eventHandelers: cc.Component.EventHandler[];
        /**除了button、toggle，是否可以点击 */
        canClickFlag: boolean;
        /**移入移出，改变图片 */
        canChangeFrameFlag: boolean;
        frames: cc.SpriteFrame[];
        controlTips: boolean;
        customPosition: cc.Vec3;
        customAnchor: cc.Vec2;
        tipLanguageStr: string;
        showTipPrefab: cc.Prefab;
        controlOpacity: boolean;
        minOpacity: number;
        maxOpacity: number;
        showTip: cc.Node;
        _sprite: cc.Sprite;
        protected onLoad(): void;
        start(): void;
        onDestroy(): void;
        mouseEnterFunc(): void;
        private setTips;
        mouseLevelFunc(): void;
        checkCanClick(): boolean;
        private changeOpacityToLight;
        private changeOpacityToDark;
    }
    export class FloatingWordPrompt extends cc.Component {
        description: cc.Label;
        bg: cc.Sprite;
        icon: cc.Sprite;
        /**
         * 显示飘字提示
         * @param tips 提示文本
         * @param tipsArgs 提示附加参数
         */
        initUI(tips: string, tipsArgs: ITipsArgs): void;
    }
    /**
 * 弹窗提示界面
 */
    export class PopupPrompt extends CoreUIDialog {
        /**弹窗标题 */
        titleDes: cc.Label;
        okBtnDes: cc.Label;
        cancelBtnDes: cc.Label;
        onOpen(fromUI: number, ...args: any[]): void;
    }
    /**
     * 提示管理类
     */
    export class TipsMng {
        private static _instance;
        private constructor();
        static getInstance(): TipsMng;
        /**飘字效果节点对象 */
        private floatingWordNode;
        /**
         * 提示信息UI表现
         * @param description 提示文本
         * @param tipsArgs 提示附加参数
         */
        showToast(description: string, tipsArgs?: ITipsArgs): void;
    }
    /**
     * 动画模式
     * @CB_InOut        中心 <-> 底部 进出屏幕
     * @Bottom_InOUt    底部进出屏幕
     */
    enum UIAniMode {
        CB_InOut = 0,
        Bottom_InOUt = 1
    }
    export class UIAni_PG extends game.UIAnimation {
        aniMode: UIAniMode;
        execAni_open(finish: Function): void;
        execAni_close(finish: Function): void;
        private execAni_auto;
        private execAni_CB_InOut;
        private execAni_Bottom_InOUt;
    }

}