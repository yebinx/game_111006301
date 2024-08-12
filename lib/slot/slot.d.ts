declare namespace slot {
    /**
     * 滚轴滚动的方向
     */
    export enum SlotOrientation {
        Landscape = 1,
        Portrait = 2
    }
    export enum DrawLineType {
        Draw = 1,
        Picture = 2
    }
    export enum WinJPPoolInjectPoint {
        BeforeAnimation = 1,
        AfterAnimation = 2
    }
    export enum SoundAssetsConfig {
        GAME_BACK_MUSIC = "GAME_BACK_MUSIC",
        SPIN_BUTTON_SOUND = "SPIN_BUTTON_SOUND",
        FREE_GAME_BACK_MUSIC = "FREE_GAME_BACK_MUSIC",
        BOUNS_GAME_BACK_MUSIC = "BOUNS_GAME_BACK_MUSIC",
        REEL_SPIN_SOUND = "REEL_SPIN_SOUND",
        REEL_STOP_SOUND = "REEL_STOP_SOUND",
        REEL_QUICK_SOUND = "REEL_SPIN_QUICK",
        BET_PLUS_BUTTON = "BET_PLUS_BUTTON",
        BET_MINUS_BUTTON = "BET_MINUS_BUTTON",
        CLICK_REEL_STOP = "CLICK_REEL_STOP",
        Free_Start_Sound = "Free_Start_Sound",
        Bonus_Game_Start_Sound = "Bonus_Game_Start_Sound",
        CURRENCY_BUTTON = "CURRENCY_BUTTON",
        PRIZE_NORMAL = "PRIZE_NORMAL",
        PRIZE_LITTLE = "PRIZE_LITTLE",
        PRIZE_MID = "PRIZE_MID",
        PRIZE_BIG = "PRIZE_BIG",
        PRIZE_5 = "PRIZE_5",
        REEL_START = "REEL_START",
        PRIZE_END = "PRIZE_END",
        Prize_Coin = "Prize_Coin",
        Prize_rool_num = "Prize_rool_num",
        LINE_CHANGE_SOUND = "LINE_CHANGE_SOUND",
        JACKPOT_OPEN = "JACKPOT_OPEN",
        JACKPOT_START = "JACKPOT_START",
        GOLD_ROLL = "GOLD_ROLL"
    }
    /**
     * 滚轴的中奖类型
     */
    export enum WinType {
        None = 0,
        Normal = 1,
        Small = 2,
        Middle = 3,
        Great = 4,
        FullLine = 6,
        ContinusUnHitted = 7,
        BonusGame = 8,
        BonusGameGainRewards = 9,
        BonusGameOver = 10,
        FreeGameTriggered = 11
    }
    /**
     * 滚轴旋转方向
     */
    export enum RollingDirection {
        Up = -1,
        Down = 1
    }
    /**游戏状态 */
    export enum OperationState {
        None = 0,
        /**正常转 */
        Normal = 1,
        /**免费转 */
        Free = 2,
        /**重转 */
        ReSpin = 3,
        /**小游戏 */
        BonusGame = 4,
        UnchangeableBet = 5
    }
    export enum RewardsType {
        /**
         * 金币
         */
        Coin = 0,
        /**
         * 免费游戏次数
         */
        FreeGameQuantity = 1,
        /**
         * 结果倍率递增系数
         */
        ResultRateAccFactor = 2,
        /**
         * 结果倍率设置
         */
        ResultRateSetting = 3,
        /**
         * 随机百搭
         */
        RandomWild = 4,
        /**
         * 随机分散
         */
        RandomScatter = 5,
        /**
         * 指定滚轴
         */
        SpecifyReel = 6,
        /**
         * 元素结果倍率影响
         */
        ElementResultRateEffect = 7,
        /**
         * 元素免费次数影响
         */
        ElementFreeQuantityEffect = 8,
        /**
         * 元素固定在的位置
         */
        ElementFixedPos = 9,
        /**
         * 增加可选数量
         */
        AddingChoice = 10,
        /**
         * 结果倍率增加
         */
        AddingResultRate = 11,
        /**
         * 收集增加免费次数
         */
        CollectionAddingFreeQuantity = 12,
        /**
         * 收集增加扩展
         */
        /**
         * 收集增加金币
         */
        CollectionAddingCoin = 14,
        /**
         * 金币倍率增加
         */
        AddingCoinRate = 15,
        /**
         * 收集金币倍率增加
         */
        /**
         * 神奇符号
         */
        MagicalSymbol = 17,
        /**
         * 金币系数
         */
        CoinFactor = 18,
        /**
         * 收集金币系数
         */
        /**
         * 奖励小游戏
         */
        BonusGame = 20
    }
    export enum GameMode {
        /**
         * 开发版
         */
        Develop = 1,
        /**
         * 发行版
         */
        Release = 2
    }
    export enum GameEventNames {
        /**
         * 脚本加载完成事件
         */
        EVENT_DYNAMIC_SCRIPT_LOADED = "EVENT_DYNAMIC_SCRIPT_LOADED",
        /**
        * 脚本加载过程中
        */
        EVENT_DYNAMIC_SCRIPT_LOADING = "EVENT_DYNAMIC_SCRIPT_LOADING",
        /**
         * 收到了滚轴还原的信息
         */
        EVENT_LAST_GAME_INFO_GET = "EVENT_LAST_GAME_INFO_GET",
        EVENT_LOCAL_REALY_COMPLETE = "EVENT_LOCAL_REALY_COMPLETE",
        /**
         * 收到服务器发来的错误消息
         */
        EVENT_GAME_ERROR_MSG = "EVENT_GAME_ERROR_MSG",
        /**
         * 用户统计连接发SOCKET
         */
        EVENT_USERSTATISTICS_SOCKET_CONNECTED = "EVENT_USERSTATISTICS_SOCKET_CONNECTED",
        /**
         * 用户统计SOCKET连接出错
         */
        EVENT_USERSTATISTICS_SOCKET_ERROR = "EVENT_USERSTATISTICS_SOCKET_ERROR",
        /**
         * 用户统计SOCKET连接关闭
         */
        EVENT_USERSTATISTICS_SOCKET_CLOSE = "EVENT_USERSTATISTICS_SOCKET_CLOSE",
        /**
         * 必须资源加载完毕
         *
         */
        EVENT_NECESSARY_ASSETS_LOADED = "EVENT_NECESSARY_ASSETS_LOADED",
        /**
         * 玩压的线数发生了改变
         */
        EVENT_LINE_NUM_CHANGED = "EVENT_PLAYER_LINE_NUM_CHANGED",
        /**
         * 玩家的押线发生了变化
         */
        EVENT_LINE_COST_CHANGED = "EVENT_PLAYER_LINE_COST_CHANGED",
        /**
         * 更新玩家的押线
         */
        EVENT_UPDATE_LINE_COST = "EVENT_UPDATE_LINE_COST",
        /**
         * turbo状态发生了改变
         */
        EVENT_TURBO_STATUS_CHANGD = "EVENT_TURBO_STATUS_CHANGD",
        /**
         * 左右手发生了变化
         */
        EVENT_HANDS_MODE_CHANGED = "EVENT_HANDS_MODE_CHANGED",
        /**
         * 自动游戏次数发生了变化
         */
        EVENT_AUTO_TIMES_CHANGED = "EVENT_AUTO_TIMES_CHANGED",
        /**
         * 自动游戏剩余次数发生了变化
         */
        EVENT_REST_AUTO_TIMES_CHANGED = "EVENT_REST_AUTO_TIMES_CHANGED",
        /**
         * 自动游戏状态发生了变化
         */
        EVENT_AUTO_STATE_CHANGED = "EVENT_AUTO_STATE_CHANGED",
        /**
         * 开始按钮可见状态发生了改变
         */
        EVENT_START_BTN_VISIBLE_CHANGED = "EVENT_START_BTN_VISIBLE_CHANGED",
        /**
         * 玩家开始了单次游戏(按下了单次按钮)
         */
        EVENT_PLAYER_CLICKED_SINGLE_START_BTN = "EVENT_PLAYER_CLICKED_SINGLE_START_BTN",
        EVENT_WIN_SCORE_STOP = "EVENT_WIN_SCORE_STOP",
        /**
         * 玩家弹出了押线设置窗口
         */
        EVENT_LINE_SETTING_VIEW_POPUP = "EVENT_LINE_SETTING_VIEW_POPUP",
        /**
         * 玩家点击了多次游戏的按钮
         */
        EVENT_PLAYER_CLICKED_MULTI_START_BTN = "EVENT_PLAYER_CLICKED_MULTI_START_BTN",
        EVENT_PLAYER_CLICKED_SLOTMACHINE = "EVENT_PLAYER_CLICKED_SLOTMACHINE",
        EVENT_PLAYER_SLID_SLOTMACHINE = "EVENT_PLAYER_SLID_SLOTMACHINE",
        /**
        * 滚轴动作完成,包括:
        * 1. 单次旋转完成（滚轴停止了）
        * 2. 多次游戏时，完成了一次旋转并显示完了所有在押线奖励
        */
        EVENT_SLOT_MACHINE_COMPLETED = "EVENT_SLOT_MACHINE_COMPLETED",
        /**
         * 滚轴停止了旋转
         */
        EVENT_SLOT_MACHINE_STOPPED = "EVENT_SLOT_MACHINE_STOPPED",
        /**
         * 滚轴展示线完成了，目前只对免费游戏有效
         */
        EVENT_SHOW_LINE_OVER = "EVENT_SHOW_LINE_OVER",
        /**
         * 主游戏结束
         */
        /**
         * 设置跑马灯信息 传参index数组索引
         */
        EVENT_SLOT_BANNER_SETINFO = "EVENT_SLOT_BANNER_SETINFO",
        /**
         * 停止跑马灯
         */
        EVENT_SLOT_BANNER_STOP = "EVENT_SLOT_BANNER_STOP",
        /**
         * 开始跑马灯
         */
        EVENT_SLOT_BANNER_START = "EVENT_SLOT_BANNER_START",
        /**
         * 通知滚轴开始滚动
         */
        EVENT_START_ROLLING = "EVENT_START_ROLLING",
        /**
         * 滚轴结果返回了
         */
        EVENT_ROLL_RESULT_RESP = "EVENT_ROLL_RESULT_RESP",
        /**
         * 游戏类型改变了,如正常游戏，小游戏，免费游戏等
         */
        EVENT_GAME_TYPE_CHANGED = "EVENT_GAME_TYPE_CHANGED",
        /**
         * 玩家基础数据更新了
         */
        EVENT_PLAYER_DATA_UPDATED = "EVENT_PLAYER_DATA_UPDATED",
        /**
         * 点击了空白区域
         */
        EVENT_CLICKED_BLANK_AREA = "EVENT_CLICKED_BLANK_AREA",
        /**
         * 玩家金币发生了变化
         */
        EVENT_PLAYER_COIN_CHANGED = "EVENT_PLAYER_COIN_CHANGED",
        /**
         * 玩家显示的钱发生了变化
         */
        EVENT_PLAYER_SHOWING_COIN_CHANGED = "EVENT_PLAYER_SHOWING_COIN_CHANGED",
        /**
         * 玩家是否正在进行游戏的状态改变了
         */
        /**
         * 玩家赢取的金币发生了变化
         */
        EVENT_WIN_COIN_CHANGED = "EVENT_WIN_COIN_CHANGED",
        /**
         * 提前停止滚轴
         */
        EVENT_ADVANCE_STOPPING_SLOT_MACHINE = "EVENT_ADVANCE_STOPPING_SLOT_MACHINE",
        /**
         * 重置滚轴
         */
        EVENT_RESET_SCROLLER = "EVENT_RESET_SCROLLER",
        /**
         * 小游戏操作回复了
         */
        EVENT_BONUS_GAME_ACTION_RESPONSED = "EVENT_BONUS_GAME_ACTION_RESPONSED",
        /**
         * 小游戏结束了
         */
        EVENT_BONUS_GAME_FINISEH = "EVENT_BONUS_GAME_FINISEH",
        EVENT_JP_GAME_VIEW_CLOSE = "EVENT_BONUS_GAME_VIEW_CLOSE",
        /**
         * 立即停止滚轴
         */
        EVENT_STOP_SLOT_MACHINE_IMMEDIATELY = "EVENT_STOP_SLOT_MACHINE_IMMEDIATELY",
        /**
         * 游戏声音状态发生了变化
         */
        EVENT_GAME_SOUND_STATUS_UPDATED = "EVENT_GAME_SOUND_STATUS_UPDATED",
        /**
         * 按下了键盘
         */
        EVENT_KEY_DOWN = "EVENT_KEY_DOWN",
        /**
         * 触发了新的免费游戏
         */
        EVENT_NEW_FREE_GAME_TRIGGERED_TASK = "EVENT_NEW_FREE_GAME_TRIGGERED_TASK",
        /**
         * 再次触发了免费游戏
         */
        EVENT_NEW_FREE_GAME_TRIGGERED_AGAIN_TASK = "EVENT_NEW_FREE_GAME_TRIGGERED_AGAIN_TASK",
        /**
         * 触发了新的重转
         */
        /**
         * 免费游戏信息更新了
         */
        EVENT_FREE_GAME_INFO_UPDATED = "EVENT_FREE_GAME_INFO_UPDATED",
        /**
        * 免费游戏信息更新任务
        */
        EVENT_FREE_GAME_INFO_UPDATED_TASK = "EVENT_FREE_GAME_INFO_UPDATED_TASK",
        /**
        * 结算前的免费游戏信息更新任务
        */
        EVENT_FREE_GAME_INFO_UPDATED_BEFORE_REWARD_TASK = "EVENT_FREE_GAME_INFO_UPDATED_BEFORE_REWARD_TASK",
        /**
         * 显示或隐藏免费游戏信息
         */
        EVENT_SHOW_FREE_GAME_INFO = "EVENT_FREE_GAME_INFO_UPDATED",
        /**
         * 免费游戏次数更新了
         */
        EVENT_FREE_GAME_TIMES_UPDATED = "EVENT_FREE_GAME_TIMES_UPDATED",
        /**
         * 重转信息更新了
         */
        /**
         * 免费游戏结束了
         */
        EVENT_FREE_GAME_OVER = "EVENT_FREE_GAME_OVER",
        /**
         * 游戏开始刷新快速自动按钮状态（）
         */
        EVENT_COMMON_BTN_BYFREE = "EVENT_COMMON_BTN_BYFREE",
        /**
         * 触发了小游戏
         */
        EVENT_BONUS_GAME_TRIGGERED = "EVENT_BONUS_GAME_TRIGGERED",
        /**
         * 触发了游戏的各种奖励事件，如小游戏，免费游戏等
         *
         */
        /**
         * 触发了加押线
         */
        /**
         * 触发了减押线
         */
        /**
         * 显示设置押线界面
         */
        EVENT_SHOW_LINESETING_VIEW = "EVENT_SHOW_LINESETING_VIEW",
        /**
         * 关闭设置押线界面
         */
        EVENT_CLOSE_LINESETING_VIEW = "EVENT_CLOSE_LINESETING_VIEW",
        /**
         * 退出自动游戏
         */
        EVENT_CANCEL_AUTO_GAME = "EVENT_CANCEL_AUTO_GAME",
        /**
         * 重置线显示
         */
        EVENT_RESET_LINE_SHOWING = "EVENT_RESET_LINE_SHOWING",
        /**
         * 继续免费游戏，如从小游戏回到了免费游戏
         */
        EVENT_RESUME_FREE_GAME = "EVENT_RESUME_FREE_GAME",
        /**
         * 特定游戏的特殊数据更新了
         */
        EVENT_CUSTOM_DATA_UPDATED = "EVENT_CUSTOM_DATA_UPDATED",
        /**
         * 从服务器获取了特殊数据
         */
        EVENT_CUSTOM_DATA_RECEIVED = "EVENT_CUSTOM_DATA_RECEIVED",
        /**
         * JP奖池更新了
         */
        EVENT_JP_BALANCE_UPDATED = "EVENT_JP_BALANCE_UPDATED",
        /**
         * 赢得了JP奖励
         */
        EVENT_WIN_JP = "EVENT_WIN_JP",
        EVENT_WIN_MYS_JP = "EVENT_WIN_MYS_JP",
        EVENT_TRRIGER_BONUS_GAMAE = "EVENT_TRRIGER_BONUS_GAMAE",
        EVENT_RECORD = "EVENT_RECORD",
        EVENT_TRANSFER_INFO = "EVENT_TRANSFER_INFO",
        EVENT_SCREEN_FULL = "EVENT_SCREEN_FULL",
        RESIZE_STAGE = "RESIZE_STAGE",
        MONEY_NOT_ENOUGH_BREAK = "MONEY_NOT_ENOUGH_BREAK",
        EVENT_STARTBTN_WHEN_PRING = "EVENT_STARTBTN_WHEN_PRING",
        EVENT_PUB_CHIPS_PUSH = "EVENT_PUB_CHIPS_PUSH",
        EVENT_SLOT_RUN_STOPPED = "EVENT_SLOT_RUN_STOPPED",
        EVENT_SLOT_MONEY_SHOW = "EVENT_SLOT_MONEY_SHOW",
        EVENT_SLOT_REFSH_BALANCE = "EVENT_SLOT_REFSH_BALANCE",
        EVENT_JP_BALANCE_INIT = "EVENT_JP_BALANCE_INIT",
        EVENT_JP_BALANCE_REFRESH = "EVENT_JP_BALANCE_REFRESH",
        EVENT_SUBLOAD = "EVENT_SUBLOAD",
        EVENT_OTHER_PLAYER_SPIN_RESP = "EVENT_OTHER_PLAYER_SPIN_RESP",
        EVENT_OTHER_PLAYER_RESTORE_RESP = "EVENT_OTHER_PLAYER_RESTORE_RESP",
        EVENT_NORMAL_PRIZE_PLAY = "EVENT_NORMAL_PRIZE_PLAY",
        /**
         * proto加载完成
         */
        EVENT_PROTO_LOAD_COMPELETE = "EVENT_PROTO_LOAD_COMPELETE",
        /**菜单栏恢复可点击状态 */
        EVENT_MENU_INTERACTABLE = "EVENT_MENU_INTERACTABLE",
        /**
         * 其他玩家的小游戏信息
         */
        LGACTIONRESP_OTHER = "LGACTIONRESP_OTHER",
        /**
         * 重设房间状态
         */
        RESETROOMSTATE = "RESETROOMSTATE",
        /**
         * 旋转按钮禁止
         */
        EVENT_SPIN_BUTTON_STOP = "EVENT_SPIN_BUTTON_STOP",
        /**
        * 旋转按钮开启
        */
        EVENT_SPIN_BUTTON_OPEN = "EVENT_SPIN_BUTTON_OPEN",
        /**大奖特效完成播放赢分特效*/
        EVENT_BIG_PRIZE_COMPLETE = "EVENT_BIG_PRIZE_COMPLETE",
        /**
         * 显示快速模式提示弹窗
         */
        EVENT_SHOW_FAST_MODE_TIP = "EVENT_SHOW_FAST_MODE_TIP",
        /**
         * 重新渲染滚轴
         */
        EVENT_RERENDER_SLOTMACHINE = "EVENT_RERENDER_SLOTMACHINE",
        /**
         * 重连后进入房间成功
         */
        EVENT_REENTER_ROOM_SUCCESS = "EVENT_REENTER_ROOM_SUCCESS",
        /**
         * 显示大奖动画重置赢分效果
         */
        EVENT_RESET_WIN = "EVENT_RESET_WIN",
        /**
         * 中奖线为五连 （满连）
         */
        EVENT_FULL_LINE_HIT = "EVENT_FULL_LINE_HIT",
        /**
         * 换房间成功
         */
        EVENT_CHANGE_ROOM_SUCCESS = "EVENT_CHANGE_ROOM_SUCCESS",
        /**
         * 点击了滚轴
         */
        EVENT_MOUSE_DOWN_ROLLER = "EVENT_MOUSE_DOWN_ROLLER",
        /**
         * 游戏进入空闲状态，指免费游戏或小游戏或自动游戏都完结且大奖动画也结束
         */
        EVENT_GAME_STATE_TO_IDLE = "EVENT_GAME_STATE_TO_IDLE",
        /**
         * 免费游戏触发
         */
        EVENT_FREE_GAME_TRIGGERED = "EVENT_FREE_GAME_TRIGGERED",
        /**
         * 触发了免费游戏
         */
        EVENT_PLAY_FREE_GAME_ANI = "EVENT_PLAY_FREE_GAME_ANI",
        /**
         * 触发了免费游戏动画
         */
        EVENT_PLAY_FREE_GAME_ADMISSION_ANI = "EVENT_PLAY_FREE_GAME_ADMISSION_ANI",
        /**
         * 免费游戏又触发了
         */
        EVENT_NEW_FREE_GAME_TRIGGERED_AGAIN = "EVENT_NEW_FREE_GAME_TRIGGERED_AGAIN",
        /**
         * 播放中奖动画
         */
        EVENT_PLAY_REWARD_ANI = "EVENT_PLAY_REWARD_ANI",
        /**
         * 添加免费游戏任务
         */
        EVENT_FREE_GAME_OVER_TASK = "EVENT_FREE_GAME_OVER_TASK",
        /**
         * 添加bonus游戏任务
         */
        EVENT_BONUS_GAME_TASK = "EVENT_BONUS_GAME_TASK",
        /**
         * bonus游戏结束了
         */
        EVENT_BONUS_GAME_OVER_TASK = "EVENT_BONUS_GAME_OVER_TASK",
        /**
         * 跳过轮播线流程
         */
        EVENT_SKIP_LOOP_LINE_TASK = "EVENT_SKIP_LOOP_LINE_TASK",
        EVENT_JACKPOT_GAME_OVER_TASK = "EVENT_JACKPOT_GAME_OVER_TASK",
        /**
         * 选择滚轴模式
         */
        EVENT_ROLLER_MODE = "EVENT_ROLLER_MODE",
        /**
        * 设置信息栏坐标
        */
        EVENT_SET_SCORE_POINT = "EVENT_SET_SCORE_POINT",
        /**
        * 设置游戏按钮坐标
        */
        EVENT_SET_GAMECONTOROL_POINT = "EVENT_SET_GAMECONTOROL_POINT",
        /**
        * 强制更新按钮
        */
        EVENT_FORCE_UPDATE_SPIN_BUTTON = "EVENT_FORCE_UPDATE_SPIN_BUTTON",
        /**
         * 更新局ID
         */
        EVENT_UPDATE_ROUND_ID = "EVENT_UPDATE_ROUND_ID",
        /**
         *
         */
        EVENT_OPERATIONSTATE_CHANGE = "EVENT_OPERATIONSTATE_CHANGE",
        /**
         * 结算界面动画
         */
        EVENT_SETTLEMENT_ANI_PLAY = "EVENT_SETTLEMENT_ANI_PLAY",
        /**
         * 结算界面动画关闭
         */
        EVENT_SETTLEMENT_ANI_HIDE = "EVENT_SETTLEMENT_ANI_HIDE",
        /**
         * 更新赢分
          * @param num 传入金币值
          * @param isRetain 新的一局是否保持
          * @param isAdd 是否在原有数值上基础上增加传入的值
          * @param isResetDelay 是否展示后重置
          * @param complete 完成的回调
          * @param isSyncAllScore 是否同步玩家金币
         */
        EVENT_UPDATE_WINSCORE = "EVENT_UPDATE_WINSCORE",
        /**
         * 更新赢分
         */
        EVENT_SET_WINSCORE_RETAIN = "EVENT_RESET_WINSCORE_RETAIN",
        /**
         * 收到spin结果且未处理spin结果前的事件
         */
        EVENT_BEFORE_RENDER_SPINRESULT = "EVENT_BEFORE_RENDER_SPINRESULT",
        /**
         *
         */
        EVENT_FORCE_UPDATE_ALL_SCORE = "EVENT_FORCE_UPDATE_ALL_SCORE",
        /**
         * 加注按钮状态发生了变化
         */
        EVENT_ADD_BTN_STATE_CHANGE = "EVENT_ADD_BTN_STATE_CHANGE",
        /**
         * 减注按钮状态发生了变化
         */
        EVENT_SUB_BTN_STATE_CHANGE = "EVENT_SUB_BTN_STATE_CHANGE",
        /**
         * bonusgame结束触发下一次bonusgame
         */
        EVENT_TREATE_NEXT_BONUSGAME = "EVENT_TREATE_NEXT_BONUSGAME",
        /**
         * 强制更新赢分，更新为传入的值
          * @param num 传入金币值
         */
        EVENT_FORCE_UPDATE_WINSCORE = "EVENT_FORCE_UPDATE_WINSCORE",
        /**
        * 强制更新显示的押分，更新为传入的值
         * @param num 传入金币值
        */
        EVENT_FORCE_UPDATE_BETSCORE = "EVENT_FORCE_UPDATE_BETSCORE",
        /**
         * 已播放普通奖
         */
        EVENT_PLAYED_NORMAL_REWARD = "EVENT_PLAYED_NORMAL_REWARD",
        /**
         * 重连时关闭小游戏界面
         */
        EVENT_CLOSE_BONUS_LAYER = "EVENT_CLOSE_BONUS_LAYER",
        /**
         * 更新玩家分数信息
         */
        USER_INFO_UPDATA = "USER_INFO_UPDATA",
        /**
        * 通知人物升级特效任务
        */
        USER_UPLEVEL_ANI_TASK = "USER_UPLEVEL_ANI_TASK",
        /**
       * 人物升级特效
       */
        USER_UPLEVEL_ANI = "USER_UPLEVEL_ANI",
        /**
       * 免费游戏中奖表现任务,位于大奖动画之前的表现
       */
        EVENT_FREE_GAME_REWARD_TASK = "EVENT_FREE_GAME_REWARD_TASK",
        /**
       * 免费游戏的倍数中奖金币表现
       */
        EVENT_FREE_GAME_RATIO_REWARD = "EVENT_FREE_GAME_RATIO_REWARD",
        /**
       * 免费游戏初始
       */
        EVENT_INIT_FREEGAME = "EVENT_INIT_FREEGAME",
        /**
       * 改变游戏滚轴
       */
        EVENT_CHANGE_GAME_SCROLLER = "EVENT_CHANGE_GAME_SCROLLER",
        /**
         * 开始震屏效果  shakeEffect
         */
        EVENT_SHAKE_EFFECT_START = "EVENT_SHAKE_EFFECT_START",
        /**
         * 结束震屏效果  shakeEffect
         */
        EVENT_SHAKE_EFFECT_END = "EVENT_SHAKE_EFFECT_END",
        /**
         * 更新赢分时触发事件： 赢分大于押分
         */
        EVENT_WIN_MORE_THAN_BET = "EVENT_WIN_MORE_THAN_BET",
        /**
        * 改变押分成功
        */
        EVENT_CHANGE_COST_SUCCESS = "EVENT_CHANGE_COST_SUCCESS",
        /**
        * 改变押分成功
        */
        EVENT_UPDATE_FREEGAME_WIN = "EVENT_UPDATE_FREEGAME_WIN",
        /**
         * 更新角色idle动作(嗨系列2用)
         */
        EVENT_HAIXILIE_IDLE = "EVENT_HAIXILIE_IDLE",
        /**
        * 加载菜单完成
        */
        EVENT_MENU_COM = "EVENT_MENU_COM",
        /**
         * 加载玩家完成
         */
        EVENT_PLAYER_COM = "EVENT_PLAYER_COM",
        /**
         * 加载多人共玩
         */
        EVENT_PLAYERTOGHER_COM = "EVENT_PLAYERTOGHER_COM",
        /**
         * 开场tween动画
         */
        EVENT_START_ANI = "EVENT_START_ANI",
        /**
        * 过场tween动画
        */
        EVENT_STOP_ANI = "EVENT_STOP_ANI",
        /**
        *
        */
        EVENT_UPDATE_SINGLE_ROUND_WIN = "EVENT_UPDATE_SINGLE_ROUND_WIN",
        /**
        *
        */
        EVENT_BONUS_GAME_COMPLETE = "EVENT_BONUS_GAME_COMPLETE",
        /**
        *
        */
        EVENT_CONTOROLBASE_LOAD_COMPLETE = "EVENT_CONTOROLBASE_LOAD_COMPLETE",
        /**
        *
        */
        EVENT_ROLLER_MODE_DATA_RESP = "EVENT_ROLLER_MODE_DATA_RESP",
        /**
       *
       */
        EVENT_SHOW_EXCHANGE_GUIDE = "EVENT_SHOW_EXCHANGE_GUIDE",
        /**
       *
       */
        EVENT_LOAD_SINGLE_ASSET_COMPLETE = "EVENT_LOAD_SINGLE_ASSET_COMPLETE",
        /**
         * 设置弹窗2点击常速与极速
         */
        EVENT_CLICK_AUTO = "EVENT_CLICK_AUTO",
        /**
         * 点击打开菜单栏按钮
         */
        EVENT_CLICK_OPEN_MENU = "EVENT_CLICK_OPEN_MENU",
        /**
         * 点击关闭菜单栏按钮
         */
        EVENT_CLICK_CLOSE_MENU = "EVENT_CLICK_CLOSE_MENU",
        /**
         * 设置菜单栏的是否显示
         */
        EVENT_MENU_SHOW_OR_HIDE = "EVENT_MENU_SHOW_OR_HIDE",
        /**
        * 设置菜单栏的透明度
        */
        EVENT_MENU_SET_OPACITY = "EVENT_MENU_SET_OPACITY",
        /**
        * 设置钱包按钮图标的透明度
        */
        EVENT_BALANCE_SPRITE_SET_OPACITY = "EVENT_BALANCE_SPRITE_SET_OPACITY",
        /**
         * 更新分数node的位置 参数为vec2(x,y)
         */
        EVENT_UPDATE_SCORE_POSITION = "EVENT_UPDATE_SCORE_POSITION",
        /**
         * 大奖动画金币跳动是否完成
         */
        EVENT_UPDATE_COIN_SCROLLER_END = "EVENT_UPDATE_COIN_SCROLLER_END",
        /**
         * 大奖动画播放是否完成
         */
        EVENT_UPDATE_WIN_ANI_END = "EVENT_UPDATE_WIN_ANI_END",
        /**
         * 大奖动画切换
         */
        EVENT_CHANGE_WIN_TYPE = "EVENT_CHANGE_WIN_TYPE",
        /**
         * 点击元素，弹出框  回调事件
         * @data 元素的值
         */
        EVENT_CLICK_ELEMENT_VIEW = "EVENT_CLICK_ELEMENT_VIEW",
        /**
         * 轮播中触发五连
         */
        EVENT_TREAT_FULL_LINE_IN_LOOP = "EVENT_TREAT_FULL_LINE_IN_LOOP",
        /**
         * 控制按钮是否可以点击(除快速按钮)
         */
        EVENT_GAMECONTROL_ALL_BTN_CLICK = "EVENT_GAMECONTROL_ALL_BTN_CLICK",
        /**
         * 控制按钮是否可以点击(除快速按钮)--是否置灰
         */
        EVENT_GAMECONTROL_ALL_BTN_OPACITY = "EVENT_GAMECONTROL_ALL_BTN_OPACITY",
        /**
         * 控制按钮是否显示隐藏(特殊情况：3个分散及以上控制按钮隐藏)
         */
        EVENT_GAMECONTROL_CTR_BTN_SHOW_OR_HIDE = "EVENT_GAMECONTROL_CTR_BTN_SHOW_OR_HIDE",
        /**
         * 加载bonus资源完成
         */
        EVENT_LOAD_BONUS_GAME_ASSET_COMPLETE = "EVENT_LOAD_BONUS_GAME_ASSET_COMPLETE",
        /**
         * 单个赔付元素tween
         */
        EVENT_TWEEN_PAY_TABLE = "EVENT_TWEEN_PAY_TABLE",
        /**
        * 元素显示赔付
        * ID
        */
        EVENT_ELEMENT_PAY_ID_SHOW = "EVENT_ELEMENT_PAY_ID_SHOW",
        /**
        * 元素显示隐藏
        * 无ID
        */
        EVENT_ELEMENT_PAY_ID_HIDE = "EVENT_ELEMENT_PAY_ID_HIDE",
        /**
        * 元素隐藏
        * 无ID
        */
        EVENT_DEL_ELEMENT_PAY_ID_HIDE = "EVENT_DEL_ELEMENT_PAY_ID_HIDE",
        /**
         * 大奖动画文字表现形式出现
         */
        EVENT_BIGWIN_TEXT_SHOW = "EVENT_BIGWIN_TEXT_SHOW",
        /**
         * 大奖动画文字表现形式消失
         */
        EVENT_BIGWIN_TEXT_HIDE = "EVENT_BIGWIN_TEXT_HIDE",
        /**
         * 大奖动画文字最后一个表现形式消失
         */
        EVENT_BIGWIN_TEXT_LAST_HIDE = "EVENT_BIGWIN_TEXT_LAST_HIDE",
        /**改变投注倍数 */
        EVENT_BET_COST_CHANGED = "EVENT_BET_COST_CHANGED",
        /**金币不足弹窗，点击确定按钮的回调*/
        EVENT_GOLDNOTENOUGH_OKBTN = "EVENT_GOLDNOTENOUGH_OKBTN",
        /**
         * 中奖线金额显示
         */
        EVENT_WIN_LINE_COIN = "EVENT_WIN_LINE_COIN",
        /**
        * 设置哈希显示坐标
        */
        EVENT_SET_HASH_POINT = "EVENT_SET_HASH_POINT",
        EVENT_HASH_REST_UPDATE = "EVENT_HASH_REST_UPDATE",
        /**线ID和金额 */
        EVENT_CHANGE_LINE_WINCOIN = "CHANGE_LINE_WINCOIN",
        /**每局第一次消除前的掉落完成 */
        EVENT_FIRST_DROP_END = "EVENT_FIRST_DROP_END",
        /**显示中奖线动画节点*/
        EVENT_CREATOR_LINE_ANINODE = "EVENT_CREATOR_LINE_ANINODE",
        /** 手动减投注 */
        EVENT_SUBBET_CHANGE = "EVENT_SUBBET_CHANGE",
        /** 手动加投注 */
        EVENT_ADDBET_CHANGE = "EVENT_ADDBET_CHANGE",
        /** 手动最大投注 */
        EVENT_MAXBET_CHANGE = "EVENT_MAXBET_CHANGE",
        /** 手动右侧投注值 */
        EVENT_RIGHTOPTION_BETITEM_CHANGE = "EVENT_RIGHTOPTION_BETITEM_CHANGE",
        /** 手动投注item */
        EVENT_BETITEM_CHANGE = "EVENT_BETITEM_CHANGE",
        /** 点击减投注 */
        EVENT_SUBBET_CLICK = "EVENT_SUBBET_CLICK",
        /**点击加投注 */
        EVENT_ADDBET_CLICK = "EVENT_ADDBET_CLICK",
        /** 点击最大投注按钮 (派发事情给子项目做表现)*/
        EVENT_MAXBET_CLICK = "EVENT_MAXBET_CLICK",
        /** 点击右侧投注值 */
        EVENT_RIGHTOPTION_BETITEM_CLICK = "EVENT_RIGHTOPTION_BETITEM_CLICK",
        /** 点击投注item */
        EVENT_BETITEM_CLICK = "EVENT_BETITEM_CLICK",
        /**关闭余额窗口的事件回调 */
        EVENT_CLOSE_SCORE_BALANCE_VIEW = "EVENT_CLOSE_SCORE_BALANCE_VIEW",
        /**设置中奖线皮肤*/
        EVENT_SET_LINE_SKIN = "EVENT_SET_LINE_SKIN",
        /**请求的滚轴数据返回了，适用于正常网络转态下的旋转数据返回及重连成功时的旋转数据返回,旋转后收到数据前rollingResult会是空*/
        EVENT_GET_ROLLING_RESULT_RESP = "EVENT_GET_ROLLING_RESULT_RESP",
        /**设置菜单栏中 个别按钮的状态 比如在大奖中或者在滚轴中 自动按钮和加注按钮置灰 */
        EVENT_MENBTS_SETSTATE = "EVENT_MENBTS_SETSTATE",
        /** 每列 新元素掉落时（用于加动效或音效） */
        EVENT_NEW_ELEMDROP_END = "EVENT_NEW_ELEMDROP_END",
        /** 每列新元素掉落结束（用于加动效或音效） */
        EVENT_NEW_ELEMDROP_DROPEND = "EVENT_NEW_ELEMDROP_DROPEND",
        /**滚轴开始加速*/
        EVENT_SCROLLER_ONSPEED_RUNNING_START = "EVENT_SCROLLER_ONSPEED_RUNNING_START",
        /**加速结束*/
        EVENT_SCROLLER_ONSPEED_RUNNING_END = "EVENT_SCROLLER_ONSPEED_RUNNING_END",
        /**清除免费游戏结束任务，用于一个免费重转结束后中间弹出收集任务导致触发了免费重转*/
        EVENT_CLEAR_FREEGAMEOVER_TASK = "EVENT_CLEAR_FREEGAMEOVER_TASK",
        /**设置gameControl自动按钮的状态 比如在大奖中 自动按钮和加注按钮置灰 */
        EVENT_AUTOBTN_SETSTATE = "EVENT_AUTOBTN_SETSTATE",
        /**触发jackpot游戏 */
        EVENT_JACKPOT_GAME_TRIGGERED_TASK = "EVENT_JACKPOT_GAME_TRIGGERED_TASK",
        /**
         * 重新跑流程事件
         */
        EVENT_RERUN_FLOWS = "EVENT_RERUN_FLOWS",
        /** 更新购买免费转btn */
        EVENT_RENEW_BUY_FREE_BTN = "EVENT_RENEW_BUY_FREE_BTN",
        /** 翻倍功能按钮btn */
        EVENT_TURN_COIN_BTN = "EVENT_TURN_COIN_BTN",
        /** 点击购买免费后 加可扩展事件 */
        EVENT_BUY_FREE_EXPAND = "EVENT_BUY_FREE_EXPAND",
        /** 翻倍页面关闭 可扩展事件 */
        EVENT_TRUN_COIN_VIEW_CLOSE_EXPAND = "EVENT_TRUN_COIN_VIEW_CLOSE_EXPAND",
        /** 清理轮播线 */
        EVENT_CLEAR_LOOP_LINE = "EVENT_CLEAR_LOOP_LINE",
        /** 积分不足弹框 */
        EVENT_NO_MONEY_TIP_POP = "EVENT_NO_MONEY_TIP_POP",
        /**是否展示哈希密文 */
        EVENT_SHOW_HASH_LABLE = "EVENT_SHOW_HASH_LABLE",
        /**结算弹框结束之后的扩展 */
        EVENT_FREEGAME_OVER_EXPAND = "EVENT_FREEGAME_OVER_EXPAND",
        /**关闭购买免费弹框 */
        EVENT_CLOSE_BUY_FREE_VIEW = "EVENT_CLOSE_BUY_FREE_VIEW",
        /**在restore请求之前的事件 */
        EVENT_BEFORE_RESTORE_REQ = "EVENT_BEFORE_RESTORE_REQ",
        EVENT_AFTER_FREEGAME_TRIGGERED = "EVENT_AFTER_FREEGAME_TRIGGERED",
        EVENT_AFTER_FREEGAME_OVER_TRIGGERED = "EVENT_AFTER_FREEGAME_OVER_TRIGGERED",
        EVENT_AFTER_FREEGAME_TRIGGERED_AGAIN = "EVENT_AFTER_FREEGAME_TRIGGERED_AGAIN",
        /**开始消除前派发*/
        EVENT_PRE_START_ELIMINATE = "EVENT_PRE_START_ELIMINATE",
        /**单次消除后派发*/
        EVENT_AFTER_ELIMINATE = "EVENT_AFTER_ELIMINATE",
        /**余额不足，更新额外押注按钮 */
        EVENT_NO_MONEY_UPDATE_OTHER_BET_BTN = "EVENT_NO_MONEY_UPDATE_OTHER_BET_BTN"
    }
    /**
     * 加载公共配置和自定义配置，通过合并配置后，通过getParameter方法获取指定配置数据
     */
    export class GData extends cc.Component {
        /** 默认参数配置 */
        static defaultParameters: Object;
        /** 自定义参数配置 */
        static customParameters: Object;
        /** 合并参数配置 */
        private static mergeParameters;
        /**外部bundle名称 */
        static bundleName: string;
        private static callBack;
        static skinId: number;
        static isNormalGuide: boolean;
        /**
         * 原始的json配置
         */
        static sourceConfig: cc.JsonAsset[];
        /**
         * 开始加载公共库配置和本地配置(本地配置需在configs文件夹下)
         * @param bundleName 外部bundle名称
         * @param callBack 加载完成回调
         */
        static startLoad(bundleName: string, callBack: Function): void;
        /** 加载公共配置 */
        private static loadCommonConfigs;
        /** 加载自定义配置 */
        private static loadCustomConfigs;
        /**
         * 检查对象中是否包含属性
         * @param data 传入的对象
         * @param key 是否包含的属性
         * @returns
         */
        static checkObjectVal(obj: any, key: string[]): any;
        /**配置加载完成 */
        private static loadComplete;
        static mergeConfig(pub: any, diff: any): any;
        /**
         * 设置配置
         * @param _configName 配置名
         * @param conf 配置结构体
         */
        static setParameter(_configName: string, conf: any): void;
        /**通过配置名获取配置,没有找到返回undefined */
        static getParameter(_configName: string): any;
        /**当前游戏显示的语种*/
        static get curLanguage(): string;
        static getUseKey(className: string): string;
        static getJsonValue_safe(obj: any, key: string): any;
    }
    export class LayerManage {
        /** 背景层 0*/
        static background: number;
        /** 主场景层 100*/
        static scene: number;
        /** 头像层 100*/
        static brief: number;
        /** 菜单层 200*/
        static menu: number;
        /** 弹框层 200*/
        static popup: number;
        /** 特效层 300*/
        static effect: number;
        /** bonus层 300 + 1*/
        static bonus: number;
        /** 加载层 400*/
        static load: number;
        /** 提示层 500*/
        static tip: number;
        /**断网时的弹窗层  600*/
        static top: number;
        /**
         * 根据层级添加节点
         * @param _node
         * @param _index
         * @param _isScale 是否缩放节点
         */
        static addChildIndex(_node: cc.Node, _index?: number, _isScale?: boolean): void;
    }
    export enum LAYOUT {
        landscape = "landscape",
        portrait = "portrait"
    }
    export enum Orientation {
        /**
         * 固定横屏
         */
        Landscape = 0,
        /**
         * 固定竖屏
         */
        Portrait = 1,
        /**
         * 横竖
         */
        Both = 2
    }
    export enum CANVAS_SIZE {
        width_1920 = 1920,
        height_1080 = 1080,
        width_1136 = 1136,
        height_640 = 640
    }
    export enum NODE_TYPE {
        sprite = "sprite",
        label = "label",
        node = "node",
        prefab = "prefab",
        component = "component"
    }
    export enum MENU_TYPE {
        compensateTable = "compensateTable",
        back = "back",
        setting = "setting",
        record = "record",
        open = "open",
        friend = "friend",
        mode = "mode",
        feedback = "feedback"
    }
    export enum MENU_EVENT_TYPE {
        open_compensateTable = "open_compensateTable",
        open_setting = "open_setting",
        open_record = "open_record",
        open_menu = "open_menu",
        close_help = "close_help",
        close_setting = "close_setting",
        close_record = "close_record",
        open_rollerMode = "open_rollerMode"
    }
    export enum SOUND_NAME {
        /**正常游戏期间背景音乐（循环播放） */
        Game_Back_Music = "Game_Back_Music",
        /**正常获奖音效*/
        Prize_Normal = "Prize_Normal",
        /**获得大奖音效 */
        Prize_Big = "Prize_Big",
        /**获得巨奖音效 */
        Prize_Super = "Prize_Super",
        /**获得超级大奖音效 */
        Prize_Mega = "Prize_Mega",
        /**点击【旋转】按钮的音效  */
        Spin_Button_Sound = "Spin_Button_Sound",
        /**进入【旋转】按钮后，悬停时，悬停特效1播放时的音效  */
        Spin_Button_Hover = "Spin_Button_Hover",
        /**点击减投注按钮通用音效 (如果没有这个音效默认使用通用点击) */
        Bet_Minus_Button = "Bet_Minus_Button",
        /**点击加投注按钮通用音效 (如果没有这个音效默认使用通用点击) */
        Bet_Plus_Button = "Bet_Plus_Button",
        /**点击按钮通用音效  */
        Currency_Button = "Currency_Button",
        /**滚轴转动音效 */
        Reel_Spin = "Reel_Spin",
        /**滚轴停止音效 */
        Reel_Stop = "Reel_Stop",
        /**重转滚轴加速音效 */
        Reel_Quick = "Reel_Quick",
        /**轮播切换线音效 */
        Line_Switch = "Line_Switch",
        /**大奖赏币音效 */
        Coin = "Coin",
        /**中奖底部金币音效 */
        UICoin = "UICoin",
        /**分散音效 */
        Sctter = "Sctter",
        /**大奖停止*/
        Prize_Stop = "Prize_Stop",
        /**中奖底部金币结束音效 */
        UICoinEnd = "UICoinend",
        /**出现音效 */
        Appear_Wheel = "Appear_Wheel",
        /**megawin播完的循环音效 */
        Prize_Loop = "Prize_Loop",
        /**megawin播完的循环完的收尾 */
        Prize_Loop_End = "Prize_Loop_End",
        /**五连 */
        Full_Line = "Full_Line",
        /**免费结算 */
        Free_Game_Settlement = "Free_Game_Settlement",
        /**免费游戏触发 */
        Free_Start_Sound = "Free_Start_Sound",
        /**游戏急停 */
        Click_Reel_Stop = "Click_Reel_Stop",
        /**消除类全部从上方落下到滚轴完的音效 */
        Symbol_Drop = "Symbol_Drop",
        /**总展示大于两条线的音效 */
        Coin_Add = "Coin_Add",
        /**消除类全部从上方落下到滚轴完的音效 */
        Score_Appear = "Score_Appear",
        /**总展示大于两条线的音效 */
        Score_Ratio = "Score_Ratio",
        /**全部大奖总音效 */
        Prize_All = "Prize_All",
        /**全部大奖停止 */
        Prize_All_Stop = "Prize_All_Stop",
        /**bigwin金币出现*/
        Prize_Big_Coin = "Prize_Big_Coin",
        /**bigwin数字变化 */
        Prize_Big_Number = "Prize_Big_Number",
        /**bigwin文字出现 */
        Prize_Big_Text = "Prize_Big_Text",
        /**megawin金币出现 */
        Prize_Mega_Coin = "Prize_Mega_Coin",
        /**megawin数字变化 */
        Prize_Mega_Number = "Prize_Mega_Number",
        /**megawin文字出现 */
        Prize_Mega_Text = "Prize_Mega_Text",
        /**superwin金币出现 */
        Prize_Super_Coin = "Prize_Super_Coin",
        /**superwin数字变化 */
        Prize_Super_Number = "Prize_Super_Number",
        /**superwin文字出现 */
        Prize_Super_Text = "Prize_Super_Text",
        /**superwin文字出现 */
        Settle_Failed = "Settle_Failed",
        /**JP掉宝箱 */
        JP_Box_Drop = "JP_Box_Drop",
        /**JP幕布出现 */
        JP_Cloth = "JP_Cloth",
        /**JP飞到宝箱*/
        JP_Fly_To_Box = "JP_Fly_To_Box",
        /**JP 游戏的背景 */
        JP_Music = "JP_Music",
        /**JP 转到 */
        JP_Rolling = "JP_Rolling",
        /**JP 转动停止 */
        JP_Stop = "JP_Stop",
        /**JP 文字出现 */
        JP_Text_Show = "JP_Text_Show",
        /**JP 宝箱结果出现 */
        JP_Open_Box = "JP_Open_Box",
        /**JP 文字出现 人声*/
        JP_Voice = "JP_Voice",
        /**JP 金币循环音效 */
        JP_Coin_Loop = "JP_Coin_Loop",
        /**JP 金币结束音效 */
        JP_Coin_Stop = "JP_Coin_Stop",
        /**JP 金币背景音效 */
        JP_Coin_Music = "JP_Coin_Music",
        /**免费数字弹窗 */
        FreeGame_Trigger_Again = "FreeGame_Trigger_Again",
        /**点击滚轴元素音效 */
        CLICK_ELEMENT_VIEW = "Click_Element_View",
        /**转场音效 */
        TurnCoinGameIn = "turnCoinGameIn",
        /**进场跳落地加语音 */
        Mariao_in = "mariao_in",
        /**背景音乐 */
        MariaoBgMusic = "mariaoBgMusic",
        /**马里奥顶 */
        Mariao_hit = "mariao_hit",
        /**胜利加语音 */
        Mariao_win = "mariao_win",
        /**结束结算音乐 */
        MariaoSettleEnd = "marialSettleEnd",
        /**失败音效 */
        MariaoOverEffect = "mariaoOverEffect",
        /**点击头像或者数字 */
        ClickHeadOrNum = "clickHeadOrNum",
        /**点击兑换 */
        Click_DH = "click_DH",
        /**按钮点击 */
        Click_Effect = "click_Effect",
        /**免费游戏期间背景音乐（循环播放） */
        FreeGame_Back_Music = "FreeGame_Back_Music"
    }
    export enum MAIN_NODE_NAME {
        gameControl = "gameControl",
        player = "player",
        score = "score",
        scene = "scene",
        roller = "roller",
        gameHead = "gameHead",
        jackPot = "jackPot",
        menu = "menu",
        gamePlayers = "gamePlayers",
        topBar = "topBar",
        banner = "banner",
        effect = "effect",
        hashCiphertext = "hashCiphertext",
        hashEntrance = "hashEntrance",
        buySpinSlot = "buySpinSlot"
    }
    export enum WinAniType {
        None = 0,
        Normal = 1,
        Small = 2,
        Middle = 3,
        Great = 4
    }
    /**
     * 布局类，提供了layout和widget布局设置,以及根据当前分辨率缩放节点的方法
     */
    export class Layout {
        static get isLandscape(): boolean;
        static isIphonex(): boolean;
        static get canvasW(): number;
        static get canvasH(): number;
        /**
         * 根据当前分辨率缩放节点
         * @param node
         */
        static setNodeResolutionSize(node: cc.Node): void;
        /**
         * 设置横向布局
         * @param node
         * @param spacingX 相邻节点的水平间隔
         * @param containerHeight 容器高度 默认设为第一个子元素高度
         * @param direction 排列子点方向
         * @param resizeMode 缩放模式
         */
        static setHorizontalLayout(node: cc.Node, spacingX?: number, containerHeight?: number, direction?: number, resizeMode?: number): void;
        /**
        * 设置纵向布局
        * @param node
        * @param spacingY 相邻节点的垂直间隔
        * @param containerWidth 容器宽度 默认为第一个子节点宽度
        * @param direction 排列子点方向
        * @param resizeMode 缩放模式
        */
        static setVerticalLayout(node: cc.Node, spacingY?: number, containerWidth?: number, direction?: number, resizeMode?: number): void;
        /**
         * 根据配置设置Layout
         * @param node 要设置的节点
         * @param data 配置数据(例:{
                "landscape": {
                    "spacingY": 30,
                    "spacingX": 0,
                },
                "portrait": {
                    "spacingX": 30,
                    "spacingY": 0,
                                                    
                }
            })
         */
        static setLayout(node: cc.Node, data: any): void;
        /**
         * 根据配置设置widget
         * @param node
         * @param data 配置数据(例: {
                                "landscape": {
                                    "top": 180,
                                    "left": 50
                                },
                                "portrait": {
                                    "top": 860,
                                    "left": 50
                                },
                                "horizontalCenter":0,
                                "verticalCenter":0
                            })
         */
        static setWidget(node: cc.Node, data: any, target?: cc.Node): void;
        private static openWidgetProperty;
        /**
         * 等比缩放节点到屏幕大小 无黑边 可截断 返回值：最终放大比例
         * @param node 待缩放的节点
         */
        static scaling(node: cc.Node, spriteFrame?: cc.SpriteFrame): number;
        /**
         * 通过width/height属性等比缩放节点到指定矩形大小; 覆盖无黑边,返回缩放比例
         * @param node 待缩放的节点
         * @param spriteFrame 若节点图片为动态加载，这里传入动态图
         * @param rect 目标矩形尺寸，默认为全屏cc.winSize
         */
        static scalingToCoverRectBySize(node: cc.Node, spriteFrame?: cc.SpriteFrame, rect?: cc.Size): number;
        /**
         * 通过scale属性等比缩放节点到指定矩形大小; 覆盖无黑边,返回缩放比例
         * @param node 待缩放的节点
         * @param spriteFrame 若节点图片为动态加载，这里传入动态图
         * @param rect 目标矩形尺寸，默认为全屏cc.winSize
         */
        static scalingToCoverRectByScale(node: cc.Node, spriteFrame?: cc.SpriteFrame, rect?: cc.Size): number;
    }
    /**
     * 基础类，主要用于弹框显示和窗口大小改变适配
     */
    export class BaseView extends game.UIView {
        protected resize(): void;
        private onResize;
        private setLayout;
        onDestroy(): void;
        /**
         * 屏幕切换
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
    }
    /**
     * SimpleManagerTemplate
     */
    export interface SimpleManagerTemplate {
        /**
         * 初始化接口
         */
        init(): any;
        /**
         * 释放
         */
        dispose(): any;
    }
    /**
     * DataPayLine
     */
    export class DataPayLine {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: any);
        static get instance(): DataPayLine;
        private static _instance;
        constructor();
    }
    /**
     * DataElement
     */
    export class DataElement {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: any);
        static get instance(): DataElement;
        private static _instance;
        constructor();
    }
    /**
     * DataFreeLines
     */
    export class DataFreeLines {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: any);
        static get instance(): DataFreeLines;
        private static _instance;
        constructor();
    }
    /**
     * DataGame
     */
    export class DataGame {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: any);
        static get instance(): DataGame;
        private static _instance;
        constructor();
    }
    export class JTRollerData {
        elements: number[];
        roller: {
            rollerId: number;
            start: number;
            end: number;
        }[];
        constructor();
        getElementsByRollerId(rollerId: number): number[];
    }
    /**
     * DataRoller
     */
    export class DataRoller {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: {});
        getColumnElements(col: number): any;
        getColumnData(col: number): any;
        static get instance(): DataRoller;
        private static _instance;
        constructor();
    }
    export interface IDictionary {
        set(key: any, value: any): void;
        get(key: any): any;
        remove(key: any): void;
        containsKey(key: any): boolean;
        keys: any[];
        values: any[];
    }
    export class SDictionary {
        _keys: any[];
        _values: any[];
        constructor();
        set(key: any, value: any): void;
        get(key: any): any;
        remove(key: any): void;
        get keys(): any[];
        get values(): any[];
        containsKey(key: any): boolean;
        clear(): void;
        toLookup(): IDictionary;
    }
    /**
     * DataFreeRoller
     */
    export class DataFreeRoller {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: {});
        getColumnElements(col: number): any;
        getColumnData(col: number): any;
        static get instance(): DataFreeRoller;
        private static _instance;
        constructor();
    }
    export class DataSlotRandomGrid {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: any);
        static get instance(): DataSlotRandomGrid;
        private static _instance;
        constructor();
        getGridShapeAndOccupyPos(gameID: number): {
            gridShape: any[];
            occupyPos: any[];
        };
        getGridLengthRange(gameID: number): any;
    }
    export class SlotConfigManager {
        private static _instance;
        static get instance(): SlotConfigManager;
        private _dataGame;
        private _dataPayLine;
        private _dataFreePayLine;
        private _dataElement;
        private _dataRoller;
        private _dataFreeRoller;
        private _dataSlotRandomGrid;
        private _dataPos;
        private _lineCostList;
        private _autoTimesList;
        private _totalLineIds;
        private _maxLineNum;
        private _minLineNum;
        private _rewardsEffectsConditions;
        /**中奖类型（大中小普通奖励）的判断区域基础配置数值 （key:中奖类型；value:中将类型最低倍数）*/
        private _winAnimationConditionMap;
        private _gameID;
        private _registeredJPTypes;
        private _lineValueMultiples;
        private _lineRates;
        private configMap;
        private _gameIDs;
        private _defaultGameID;
        private _isMultipleGame;
        private dataGridMap;
        constructor();
        init(conf: any): void;
        initDataGame(conf: any[]): void;
        getDataGameByGameID(gameID: number): any;
        changeGameID(gameId: number): void;
        private _initConf;
        private _initMinMaxLine;
        /**
         * 奖励动画条件映射
         */
        private _initWinAnimationCondition;
        /**
         * 初始化押线信息
         */
        private _initLineCostInfo;
        /**
         * 初始化自动次数信息
         */
        private _initAutoTimesInfo;
        /**
         * 初始化奖赏线ID列表
         */
        private _initPayLineIds;
        /**
         * 初始化奖励特效条件
         */
        private _initRewardsEffectsCondition;
        /**
     * 初始化奖励特效条件
     */
        private _initlineValueMultiples;
        /**
        * 初始化奖励特效条件
        */
        private _initLineLineRate;
        private _initRateGap;
        private _initGridShape;
        /**
        * 奖赏线类名
        */
        get DataPayLine(): DataPayLine;
        set DataPayLine(data: DataPayLine);
        /**
         * 免费线路表
         */
        get DataFreePayLine(): DataFreeLines;
        set DataFreePayLine(data: DataFreeLines);
        /**
         * 基础信息类名
         */
        get DataGame(): DataGame;
        set DataGame(data: DataGame);
        /**
         * 元素表
         */
        get DataElement(): DataElement;
        set DataElement(data: DataElement);
        /**
         * 元素表
        */
        get DataRoller(): DataRoller;
        set DataRoller(data: DataRoller);
        /**
        * 元素表
        */
        get DataFreeRoller(): DataFreeRoller;
        set DataFreeRoller(data: DataFreeRoller);
        /**
        * 元素表
        */
        get DataSlotRandomGrid(): DataSlotRandomGrid;
        set DataSlotRandomGrid(data: DataSlotRandomGrid);
        /**
         * 滚轴位置信息类
         */
        get DataPos(): any;
        /**
         * 可下押线列表
         */
        get lineCostList(): number[];
        /**
         * 可自动游戏次数列表
         */
        get autoTimesList(): number[];
        /**
         * 所有奖赏线的ID列表
         */
        get totalLineIds(): number[];
        /**
         * 最大线数
         */
        get maxLineNum(): number;
        /**
         * 最小线数
         */
        get minLineNum(): number;
        /**
         * 中奖特效条件列表
         */
        get rewardsEffectsConditions(): number[];
        /**
       *
       */
        get lineValueMultiples(): number[];
        private _rateGaps;
        get rateGaps(): {
            size: number;
            level: number;
        }[];
        /**
         *
         */
        get lineRates(): number[];
        /**
         * 游戏ID
         */
        get gameID(): number;
        set gameID(data: number);
        get gameIDs(): number[];
        set defaultGameID(data: number);
        get defaultGameID(): number;
        private _gridShape;
        get gridShape(): number[][];
        /**
         * 获取奖励动画条件,中奖类型（大中小普通奖励）的判断区域基础配置数值
         * @param winType
         */
        getWinAnimationCondition(winType: number): number | undefined;
        /**
         * 注册JP奖池类型
         * @param types
         */
        registerJPTypes(...types: number[]): void;
        /**
         * 注册多套游戏的id
         * @param gameIDs 游戏id列表
         * @param defaultGameID 默认的游戏id
         */
        registerGameIds(gameIDs: number[], defaultGameID: number): void;
        get isMultipleGame(): boolean;
        get registeredJPTypes(): number[];
        dispose(): void;
    }
    export class NetSlotConst {
        static RESTORERESP: string;
        static SPINRESP: string;
        static LGDATARESP: string;
        static LGACTIONRESP: string;
        static LEAVEROOMPUSH: string;
        static ENTERROOMPUSH: string;
        static ACTIONSTOPPUSH: string;
        static USERINFOPUSH: string;
        static USERINFO_PUSH: string;
        static BUYFREESPINRESP: string;
        static BUYFREEDATARESP: string;
        static CHANGECOSTRESP: string;
        static WINAMOUNTRANKRESP: string;
        /**切换投注状态协议事件响应 */
        static CHANGEBETSTATERESP: string;
        static COLLECTCHOOSERESP: string;
        /**选择收集任务事件响应 */
        static CHOOSECOLLECTTASKESP: string;
    }
    /**
 * PlayerManager
 */
    export class PlayerManager implements SimpleManagerTemplate {
        static get instance(): PlayerManager;
        private static _instance;
        private _showingCoin;
        private _readlyCoin;
        private _lastCoin;
        get isNew(): boolean;
        set isNew(value: boolean);
        private _isNew;
        private _guideStep;
        get guideStep(): number;
        set guideStep(value: number);
        constructor();
        get userInfo(): protoCommon.user_info;
        init(): void;
        dispose(): void;
        _userInfoUpdata: any;
        userInfoPush(mess: any, result: any): void;
        get userInfoUpdata(): any;
        updateUserInfoPush(mess: string, data: protoCommon.updateUserInfoPush, error: any): void;
        private _onRollingResp;
        deductMoney(money: number): void;
        updateAllScore(msg: string, scores: number, awardScores: number): void;
        /**
         * 同步玩家显示的钱
         * @public
         * @for PlayerManager
         * @method syncShowingCoin
         * @param {number} [result = null] 要同步到的数量
         *
         */
        syncShowingCoin(result?: number): void;
        updateRealCoin(num: number): void;
        /**
         * 显示的钱
         */
        get showCoin(): number;
        onBalancePush(balance: number): void;
        /**
         *  赢得的钱
         */
        /**
         * 上一次金币
         */
        get lastCoin(): number;
    }
    export class SlotProtoManager {
        netNode: game.NetNode;
        hashRest: number;
        ciphertext: string;
        private spinRespCheckScheduleKey;
        private lgDataCheckScheduleKey;
        private lgActionCheckScheduleKey;
        private scheduleMap;
        private static _instance;
        static getInstance(): SlotProtoManager;
        constructor();
        registerMess(): void;
        destroyMess(): void;
        init(): void;
        destroy(): void;
        private setReceiveCallBack;
        private errorCodePush;
        private _rollerModeId;
        get rollerModeId(): number;
        private _isSelectModeId;
        get isSelectModeId(): number;
        private _rollerModeList;
        get rollerModeList(): number[];
        /**
     * 是否取得模式数据
     */
        isRollerModeResp: boolean;
        /**
         * 是否取得jp数据
         */
        isGetJpResp: boolean;
        restoreResult: protoSlot.restoreResp;
        private restoreResp;
        /**创世哈希玩法 */
        handleHashChainInfo(result: any): void;
        private userInfoPush;
        private enterRoomPush;
        private rollerModeResp;
        private leaveRoomPush;
        private spinResp;
        private fixSpinRespData;
        private lgDataResp;
        private lgActionResp;
        private actionStopPush;
        requestLastGameInfo(): void;
        /**是否可以旋转发送请求 (请求没有回复之前禁止再次发送)*/
        private canReqSpin;
        requestSpinFreely(data: any): void;
        requestBonusGameInfo(bonusGameId: Long): void;
        /**
         * 向服务器请求发起小游戏操作
         * @public
         * @method requestAction
         * @param {number[]} choose
         */
        requestAction(bonusGameId: Long, choose?: number[]): void;
        handleStateReq(): void;
        openRecordReq(): void;
        private sendActionStopMessage;
        rollerModeReq(modeid: number): void;
        /** 服务器返回 是否有购买次数 */
        static buyMultiNum: number;
        buyFreeImdDataReq(): void;
        buyFreeImdReq(num: number, req: protoSlot.spinReqType): void;
        buyFreeImdDataResp(data: any): void;
        buyFreeDataResp(data: any): void;
        rollerModeDataReq(): void;
        private rollerModeDataResp;
        changeCostReq(isClearTask?: boolean): void;
        private changeCostResp;
        private jtResp;
        /**
         * 赢赏数据请求
         */
        winAmountRankReq(): void;
        /**
         * 赢赏数据返回
         * @param data
         */
        private winAmountRankResp;
        /**
         * 切换投注状态请求
         * @param state 0：关闭；   1：开启
         */
        changeBetStateReq(state: number): void;
        /**
         * 切换投注状态响应数据返回
         * @param data
         */
        private changeBetStateResp;
        /**
         * 收集任务请求
         * @param taskId  任务id
         * @param targetNum 已达到的任务的收集数量
         */
        collectChooseReq(taskId: number, targetNum: number): void;
        /**
         * 收集任务数据返回
         * @param data
         */
        private collectChooseResp;
        /**
         * 选择收集任务请求
         * @param taskId  任务id
         */
        chooseCollectTaskReq(taskId: number): void;
        /**
         * 选择收集任务数据返回
         * @param data
         */
        private chooseCollectTaskResp;
        private startRespCheckSchedule;
        private clearCheckSchedule;
    }
    export class MultipleGameManager implements SimpleManagerTemplate {
        private _defaultGameID;
        private _curGameID;
        private _normalGrid;
        private _normalGridChanged;
        private _nextGrid;
        private _nextGridChanged;
        private _nextSpinResult;
        private _enabled;
        private _isChangeGame;
        init(): void;
        dispose(): void;
        get isChangeGame(): boolean;
        get curGameID(): number;
        get normalGrid(): number[];
        get normalGridChanged(): number[];
        get nextGrid(): number[];
        get nextGridChanged(): number[];
        set nextSpinResult(v: protoSlot.spinResultType);
        get nextSpinResult(): protoSlot.spinResultType;
        static get instance(): MultipleGameManager;
        private static _instance;
        render(spinResp: protoSlot.spinResp): void;
        resume(state: protoSlot.stateType, reconnect?: boolean): void;
    }
    export class SlotUtils {
        /**
         * 百搭类型
         */
        static wildType: number;
        /**
         * 弧度转换为角度。
         * @param	radian 弧度值。
         * @return	返回角度值。
         */
        static toAngle(radian: number): number;
        /**
           * 检查是否为空或未定义
           */
        static isNullOrUndefined(obj: any): boolean;
        /**
         * 判断指定元素是否是百搭元素，注意，此判断是根据策划的配置数据进行判断，可能不符合实际情况
         * @param eleId 元素ID
         */
        static isWild(eleId: number): boolean;
        static isShowHashText: boolean;
        /**是否有哈希 */
        static isHaxi(): boolean;
        /**
         * 判断指定元素是否是个分散元素
         * @param eleId 元素ＩＤ
         */
        static isScatter(eleId: number): boolean;
        /**
         * 判断指定元素是否普通元素
         * @param eleId 元素ＩＤ
         */
        static isNormalElement(eleId: number): boolean;
        /**
         * 判断是否有购买功能
         */
        static isHasBuy(): boolean;
        /**
         * 是否已显示过翻倍结果了
         */
        static isShowDoubleCoinResp: boolean;
        /**
         * 设置纹理九宫格拉伸
         * @param node
         * @param rect
         */
        static setScale9GridRect(node: cc.Node, rect: cc.Rect): void;
        /**
         * 生成包内资源的路径(ui:// 格式)
         *
         * @public
         * @static
         * @method makePackageAssetsUrl
         * @param {string} packageName 包名
         * @param {string} assetsName 资源名,不需要后缀
         * @return {string} 资源的完整路径，通过它，fairgui相关接口可以正确获取到资源，形如:ui://packageName/assetsName
         */
        static makePackageAssetsUrl(assetsName: string, FileDir?: string): string;
        /**
         * 获取元素的图片名
         * @public
         * @static
         * @method makeElementIconName
         * @param {number} ele 元素的ID
         * @param {number = 2} padLeft 需要在前面补多少位
         * @return {string}
         */
        static makeElementIconName(ele: number, padLeft?: number): string;
        /**
         * 格式化卡牌名
         * @param ele
         * @param padLeft
         * @param pre
         */
        static makeElementIconNameWithPre(ele: number, padLeft?: number, pre?: string): string;
        /**
         * 获取元素在模糊状态下的图片名
         * @publiclur
         * @static
         * @method makeElementBlurIconName
         * @param {number} ele 元素的ID
         * @param {number = 2} padLeft 需要在元素名前补多少位
         * @return {string}
         */
        static makeElementBlurIconName(ele: number, padLeft?: number): string;
        /**
         * 生成元素的暗谈图标名
         * @param ele
         * @param padLeft
         */
        static makeElementFadeIconName(ele: number, padLeft?: number): string;
        static padLeft(num: number, n: number): string;
        /**
         * 获取元素的动画名
         * @public
         * @static
         * @method makeElementAniName
         * @param {number} ele 元素的ID
         * @return {string}
         */
        static makeElementAniName(ele: number, pad?: number): string;
        /**
         * 是否为为满线
         */
        static isFullLine(): boolean;
        /**
         * 根据押线索引获取真实押线值
         */
        static getLineCostByIndex(idx: number): number;
        /**
         * 根据押线获取其在配置表中的索引
         * @param cost 押线
         */
        static getIndexByLineCost(cost: number): number;
        /**
             * 从数组查找并返回符合条件的第一个元素的索引，只返回最先查找到的满足条件的元素的索引,如果没找到则返回-1
             * @param arr 要查找的数组
             * @param conditionFun 过滤条件函数,当返回true时，则返回，否则继续查找,该函数第一个参数是数组的元素，第二个参数是当前元素的索引，第三个参数是数组本身
             * @param startIndex 开始查找的索引
             */
        static findIndexFromArray<T>(arr: T[], conditionFun: (ele: T, idx?: number, arr?: T[]) => boolean, startIndex?: number): number;
        /**
         * 获取中奖类型
         * @param win 总赢分
         * @param bet 旋转费用消耗
         * @returns 中奖类型 WinType
         */
        static getWinType(win: number, bet: number): WinType;
        /**
         * 给数字转换为千分号
         *  @param v 要转换的数字
         *  @param n 保留几位小数点，默认为2 参数isReserved为true才有效，isReserved默认true
         *  @param c 除数 默认100
         *  @param isRate 是否使用多国倍率  默认false
         *  @param  isReserved 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理)  默认true
         *  @param  thousandSign 千分位符号 默认","
         *  @param  decimalPointSymbol 小数点符号  默认"."
         */
        static formatNumber(v: number, n?: number, c?: number, isRate?: boolean, isReserved?: boolean, thousandSign?: string, decimalPointSymbol?: string): string;
        /**
         * 数字转换多国货币
         *  @param v 要转换的数字
         *  @param currencyId  当前货币类型 默认null,表示获取当前类型
         *  @param n 保留几位小数点，默认为2 参数isReserved为true才有效，isReserved默认true
         *  @param c 除数  默认100
         *  @param  isReserved 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理)  默认true
         *  @param  thousandSign 千分位符号 默认","
         *  @param  decimalPointSymbol 小数点符号 默认"."
         */
        static formatNumberCoinRate(v: number, currencyId?: number, n?: number, c?: number, isReserved?: boolean, thousandSign?: string, decimalPointSymbol?: string): string;
        /**
         * （已废弃）使用formatNumber()替代
        * 将金币数转换成显示需要的字符串()
        * @method convertToShowingCoin
        * @param {number} coin 真实的金币数，一般从服务器或配置中获取
        * @return {string}
        */
        static convertToShowingCoin(coin: number, place?: number, symbol?: string): string;
        static formatMoney(num: any, places?: number, symbol?: string, thousand?: string, decimal?: string): string;
        /**
         * 给一串数字添加千分符
         * @param x
         */
        static numberWithCommas(x: any): any;
        static Number(num: number | Long): number;
        static addFadeButtonClickEffect(...btns: cc.Node[]): void;
        static removeFadeButtonClickEffect(...btns: cc.Node[]): void;
        private static disableOpacity;
        static onBtnTouchStart(e: cc.Event.EventTouch): void;
        static onBtnTouchMoved(e: cc.Event.EventTouch): void;
        static onBtnTouchEnd(e: cc.Event.EventTouch): void;
        /** 如果有orientation固定横竖版时，获取横竖版值 */ static getLayoutFromOrientation(h: any, v: any): any;
        /**判断是否是消除类的游戏 */
        static isEliminateType(): boolean;
        /**
         *转换kmb显示
         * @param number  转换的数字
         * @param point  保留的小数位
         * @returns
         */
        static formatNumberToKMB(number: number, point?: number): string;
    }
    /**
         * <p><code>Handler</code> 是事件处理器类。</p>
         * <p>推荐使用 Handler.create() 方法从对象池创建，减少对象创建消耗。创建的 Handler 对象不再使用后，可以使用 Handler.recover() 将其回收到对象池，回收后不要再使用此对象，否则会导致不可预料的错误。</p>
         * <p><b>注意：</b>由于鼠标事件也用本对象池，不正确的回收及调用，可能会影响鼠标事件的执行。</p>
         */
    export class Handler {
        /**@private handler对象池*/
        protected static _pool: Handler[];
        /**@private */
        private static _gid;
        /** 执行域(this)。*/
        caller: Object | null;
        /** 处理方法。*/
        method: Function | null;
        /** 参数。*/
        args: any[] | null;
        /** 表示是否只执行一次。如果为true，回调后执行recover()进行回收，回收后会被再利用，默认为false 。*/
        once: boolean;
        /**@private */
        protected _id: number;
        /**
         * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
         * @param	caller 执行域。
         * @param	method 处理函数。
         * @param	args 函数参数。
         * @param	once 是否只执行一次。
         */
        constructor(caller?: Object | null, method?: Function | null, args?: any[] | null, once?: boolean);
        /**
         * 设置此对象的指定属性值。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，执行后执行recover()进行回收。
         * @return  返回 handler 本身。
         */
        setTo(caller: any, method: Function | null, args: any[] | null, once?: boolean): Handler;
        /**
         * 执行处理器。
         */
        run(): any;
        /**
         * 执行处理器，并携带额外数据。
         * @param	data 附加的回调数据，可以是单数据或者Array(作为多参)。
         */
        runWith(data: any): any;
        /**
         * 清理对象引用。
         */
        clear(): Handler;
        /**
         * 清理并回收到 Handler 对象池内。
         */
        recover(): void;
        /**
         * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
         * @param	caller 执行域(this)。
         * @param	method 回调方法。
         * @param	args 携带的参数。
         * @param	once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
         * @return  返回创建的handler实例。
         */
        static create(caller: any, method: Function | null, args?: any[] | null, once?: boolean): Handler;
    }
    /**
     * BonusGameInfo
     * 小游戏的信息
     */
    export class BonusGameInfo {
        constructor(bonusGameId: Long);
        init(info: protoSlot.lgDataResp): void;
        dispose(): void;
        /**
         * 小游戏 ID
         */
        bonusGameId: Long;
        /**
         * 剩余次数
         */
        quantity: number;
        /**
         * 当前场景ID
         */
        nowSceneId: number;
        /**
         * 相关初始值
         */
        betInfo: number;
        /**
         * 历史记录
         */
        history: protoSlot.lgResultType[];
        /**
         * 所有的本场景的中奖结果
         */
        rewardList: protoSlot.lgResultType[];
        /**
         * 总共赢的钱
         */
        sumWinCoin: number;
        /**
         * 所有的本场景的中奖结果
         */
        costInfo: number;
        /**
         * 所有的本场景的中奖结果
         */
        tenantReward: protoSlot.tenantRewardType[];
        /**
         * 倍率
         */
        rate: number;
        otherInfo: protoSlot.otherType[];
        get isComplete(): boolean;
        /**
         * 场景跳转信息
         * 如果为空，则表示还不能跳转
         */
        nextSceneInfo?: protoSlot.lgNextType;
        nextState?: protoSlot.stateType;
        initlized: boolean;
        pickCardResult: protoSlot.pickCardResultType[];
        luckyGoldResultList: protoSlot.luckyGoldResultListType[];
        lgOther2: protoSlot.lgOther2Type[];
        collectContribute?: (number | Long);
        /**
         * 初始化历史记录
         * @param history
         */
        private _initHistory;
    }
    /**
    * name
    */
    export enum globalTaskFlags {
        GLOBAL_TASK_CANCEL_WHEN_START = 0,
        GLOBAL_TASK_REWARDS_ANI_TASK = 1,
        GLOBAL_TASK_NORMAL_REWARDS_ANI_TASK = 2,
        GLOBAL_TASK_FREE_GAME_OVER = 3,
        GLOBAL_TASK_DELAYED_TASK = 4,
        GLOBAL_TASK_FREE_GAME_START = 5
    }
    /**
* GlobalAnimationManager
* 对游戏全局需要播放动画进行管理，主要管理优先级方面，如目前主要处理免费游戏触发，小游戏触发及中奖动画触发的顺序及优先级
*/
    export class GlobalQueueManager implements SimpleManagerTemplate {
        /**
         * 单例
         */
        static get instance(): GlobalQueueManager;
        private static _instance;
        continueHandler: Handler;
        private _continueInterruptHandler;
        /**
         * 等待执行的句柄的长度
         */
        get queueLen(): number;
        private _taskNameKey;
        private _taskCancelHandlerKey;
        /**
         * 将任务添加到队列
         * @param handler 任务
         * @param taskName 任务名，任务的标志，可以通过其在队列中找到指定任务
         * @param cancelHandler 当任务被取消时需要执行的回调
         */
        pushToQueue(handler: Handler, taskName?: globalTaskFlags, cancelHandler?: Handler): void;
        private _queue;
        /**
         * 通过任务名称获取任务
         */
        getTaskByName(taskName: globalTaskFlags): Handler;
        /**
         * 移除掉指定名称的任务
         * @param taskName 任务名称
         * @param ifAll 是否移除所有名称为 taskName 的任务
         */
        removeTaskByName(taskName: globalTaskFlags, ifAll?: boolean): void;
        /**
         *
         * @param taskName
         */
        removeAllTasksByName(taskName: globalTaskFlags): void;
        /**
         * 获取下一个队列任务的名称
         */
        getNextTaskName(): globalTaskFlags;
        /**
         * 初始化接口
         */
        init(): void;
        /**
         * 释放
         */
        dispose(): void;
        /**
         * 提前执行了队列
         */
        advancedQueue: boolean;
        /**
         *
         */
        reset(): void;
        execute(ifAdvance?: boolean): boolean;
        private _interruptExecute;
        private _interrupted;
        interruptAndExecut(): boolean;
    }
    /**
* BonusGameManager
*/
    export class BonusGameManager implements SimpleManagerTemplate {
        /**
         * 单例
         */
        autoEnterBonusGame: boolean;
        static get instance(): BonusGameManager;
        private static _instance;
        private static BUNUSGAME_UI_ID;
        /**
         * 当前的小游戏信息
         */
        get bonusGameInfo(): BonusGameInfo;
        private _bonusGameInfo;
        /**
         * 本次小游戏玩家所有的操作结果
         */
        /**
         * 上次小游戏操作的奖励
         */
        get lastActionResult(): protoSlot.lgResultType;
        private _lastActionResult;
        private bonusGameLayer;
        private bonusGameUIID;
        /**
         *本局是否触发了小游戏
         */
        get isTreateNewBonus(): boolean;
        set isTreateNewBonus(v: boolean);
        private _isTreateNewBonus;
        /**是否可以下一次请求 （这个判断如果卸载AbstractBonusGameView很可能被子项目重写方法导致判断失效）*/
        private _canActionReqNext;
        /**
         * 初始化接口
         */
        init(): void;
        private uidMap;
        /**
         * 释放
         */
        dispose(): void;
        get hasBonusGame(): boolean;
        /**
         * 处理小游戏数据
         */
        render(state: protoSlot.stateType, isRestore?: boolean): void;
        get doingBonusGame(): boolean;
        private _doingBonusGame;
        /**
         * 尝试进行小游戏流程，如果成功，则返回true,此时其它模块应该将控制权交给BonusGameManager
         */
        try(): boolean;
        /**
         * 滚轴停止了
         */
        onSlotMachineStopped(): void;
        /**
         * 向服务器请求发起小游戏操作
         * @public
         * @method requestAction
         * @param {number[]} choose
         */
        requestAction(choose?: number[]): boolean;
        /**
         * 小游戏完成了
         */
        onBonusGameFinished(): void;
        /**
         * 处理下一个小游戏
         * @param oldBonusGameInfo
         */
        private _treateNextBonusGame;
        /**
         * 处理下一个免费游戏
         * @param oldBonusGameInfo
         */
        private _treateNextFreeGame;
        private _planToResumeFreeGame;
        private _makeResumeFreeGameQueue;
        private _bonusGameOverHandler;
        /**
         * 请求小游戏数据
         * 如果不需要请求，则返回false，否则返回true
         */
        private _requestBonusGameInfo;
        /**
         * 小游戏数据回包
         */
        private _onBonusGameInfoResp;
        /**
         * 小游戏操作回复
         */
        get actionResp(): protoSlot.lgActionResp;
        private _actionResp;
        /**
         * 收到服务器对于玩家小游戏操作结果的回复
         * @private
         * @method _onActionResp
         * @param {protocol.LgActionResp} resp 服务器回复
         */
        private _onActionResp;
        /**
         * 开始小游戏
         */
        private _startBonusGame;
        private bonusGamePrefab;
        private useKey;
        private _showBonusUI;
        /**
         * 增加协议监听
         */
        private _addProtocolListener;
        /**
         * 移除协议监听
         */
        private _removeProtocolListener;
        constructor();
    }
    /**
     * 线类型
     */
    export enum LineType {
        /**
         * 连线
         */
        Line = 1,
        /**
         * 指定
         */
        Specified = 2,
        /**
         * 滚轴
         */
        Spin = 3,
        /**
         * 非首尾相连
         */
        NonHeadTail = 4,
        /**
         * 全局分散
         */
        GlobalScatter = 5
    }
    /**
 * 旋转结果
 */
    export class RollingResult {
        /**
         * 线的类型
         */
        lineType: LineType;
        /**
         * 线模式
         */
        lineMode: number;
        /**
         * 线ID，如果是全局分散等，则为0
         */
        lineId: number;
        /**
         * 中奖主元素ID
         */
        eleId: number;
        /**
         * 中了多少个元素
         */
        eleNum: number;
        /**
         * 赢取的金币
         */
        winCoin: number;
        /**
         * 方向
         */
        direction: number;
        /**
         * 赢的倍率(暂时无用)
         */
        /**
         * 小游戏列表
         */
        bonusGameIds: Long[];
        /**
         * 中奖位置,服务器传过来的位置
         */
        winPos: number[];
        /**
         * 中奖的元素列表,指定类型判断需包含主元素和副元素
         */
        eleList: number[];
    }
    export class SlotTimeManager {
        /**
            * 单例
            */
        autoEnterBonusGame: boolean;
        static get instance(): SlotTimeManager;
        private static _instance;
        private _interval;
        private _listionMap;
        private _startTime;
        private _fameNum;
        init(): void;
        runInterval(): void;
        fameLoop(): void;
        once(delay: number, caller: any, method: Function, args?: any[]): void;
        loop(delay: number, caller: any, method: Function, args?: any[]): void;
        frameLoop(caller: any, method: Function, args?: any[]): void;
        clear(caller: any, method: any): void;
        clearAll(caller: any): void;
        dispose(): void;
    }
    export class TimeHander {
        constructor();
        caller: any;
        method: Function;
        once: boolean;
        args: any[];
        delay: number;
        startTime: number;
    }
    export class JTContainer extends cc.Node {
        protected _owner: JTContainer;
        protected _caller: any;
        protected _childs: JTContainer[];
        constructor();
        /**
         * 绑定
         * @param owner 捆绑的对象
         * @param caller 执行域对象
         */
        bind(owner: JTContainer, caller: any): void;
        /**
         *  添加子级对象
         * @param child 被添加的对象
         */
        addContainer(child: JTContainer): number;
        /**
         * 按索引删除对象个数
         * @param index 删除的索引
         * @param count 要删除的个数
         */
        removeContainerAt(index: number, count?: number): any;
        /**
         * 移除子对象
         * @param child 要移除的对象
         */
        removeContainer(child: JTContainer): JTContainer;
        /**
         * 按索引获取子对象
         * @param index 索引
         */
        getContainerByIndex(index: number): JTContainer;
        /**
         * 子对象个数
         */
        get childsCount(): number;
        /**
         * 子对象列表
         */
        get childs(): JTContainer[];
        /**
         * 拥有者
         */
        get owner(): JTContainer;
        set owner(value: JTContainer);
        /**
         * 拥有者的执行域对象
         */
        get caller(): any;
        set caller(value: any);
        /**
         * 销毁
         */
        destroy(): boolean;
        /**
         * 清除
         */
        clear(): void;
    }
    export class JTGComponent extends JTContainer {
        protected _proxyOwner: JTContainer;
        constructor();
        /**
         * 绑定
         * @param owner 捆绑的对象
         * @param caller 执行域对象
         */
        bind(owner: JTContainer, caller: any): void;
        /**
         *  添加子级对象
         * @param child 被添加的对象
         */
        addContainer(child: JTContainer): number;
        /**
         * 按索引删除对象个数
         * @param index 删除的索引
         * @param count 要删除的个数
         */
        removeContainerAt(index: number, count?: number): any;
        /**
         * 移除子对象
         * @param child 要移除的对象
         */
        removeContainer(child: JTContainer): JTContainer;
        /**
         * 按索引获取子对象
         * @param index 索引
         */
        getContainerByIndex(index: number): JTContainer;
        /**
         * 子对象个数
         */
        get childsCount(): number;
        /**
         * 子对象列表
         */
        get childs(): JTContainer[];
        /**
        * 拥有者
        */
        get owner(): JTContainer;
        set owner(value: JTContainer);
        /**
         * 拥有者的执行域对象
         */
        get caller(): any;
        set caller(value: any);
        /**
         * 销毁
         */
        destroy(): boolean;
        /**
         * 清除
         */
        clear(): void;
    }
    export class MultiDragonBonesAtlasAssets extends cc.Component {
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
     * 资源类型
     */
    export enum JTGLoaderAssetType {
        /**
         *图片
         */
        SpriteFrame = 0,
        /**
         * 序列帧
         */
        Clip = 1,
        /**
         * 骨骼
         */
        Skeleton = 2,
        /**
         * 龙骨
         */
        DragonBones = 3,
        /**
         * 粒子
         */
        Particle = 4
    }
    /**
     * 图片参数
     */
    export interface JTGLoaderSpriteFrameParam {
        /**
         * 图片地址(如果是图集中的图，配合“SpriteAtlasUrl”使用，填图集下精灵图片名;否则填图片路径)
         */
        spriteFrameUrl: string;
        /**
         * 图集地址
         */
        SpriteAtlasUrl: string;
    }
    export interface JTGLoaderClipParam {
        /** 图集地址 */
        SpriteAtlasUrl: string | string[];
        /**  动画的帧速率。 */
        sample: number;
        /**   动画的播放速度。 */
        speed: number;
        clipName: string;
        /**缩放大小 */
        scale: number;
    }
    export interface JTGLoaderSkeletonParam {
        /**
        * 骨骼地址
        */
        url: string;
        /**
         * 预乘
         */
        premultipliedAlpha: boolean;
        /**
         * 默认皮肤名
         */
        defaultSkinName?: string;
        /**
         * 默认动作名
         */
        defautAniName: string | string[];
        /** 渲染模式(0:实时渲染；  1：共享缓存；  2：私有缓存)*/
        animationCacheMode: number;
    }
    export interface JTGLoaderDragonBonesParam {
        /**
        * 数据地址
        */
        assetUrl: string;
        /**
         * 图片地址
         */
        atlasAssetUrl: string | string[];
        /**
         * armature名
         */
        armature: any;
        /**
         * 动作名
         */
        animation: any;
        /**
         * 预乘
         */
        premultipliedAlpha: boolean;
        /** 渲染模式(0:实时渲染；  1：共享缓存；  2：私有缓存)*/
        animationCacheMode: number;
    }
    export interface JTGLoaderParam {
        assetType: JTGLoaderAssetType;
        sprite: JTGLoaderSpriteFrameParam;
        clip: JTGLoaderClipParam;
        skeleton: JTGLoaderSkeletonParam;
        dragonBones: JTGLoaderDragonBonesParam;
        /**加载完成的回调 */
        finishLoadCallback?: Function;
        /**加载完成的回调 */
        playCallback?: Function;
        /**动作是否循环播放（为空默认是：循环） */
        loop: boolean;
    }
    export class JTGLoader extends cc.Node {
        private _url;
        private _container1;
        private _container2;
        private _container3;
        private _container4;
        private _containerMask;
        private _content1;
        private _content2;
        private _content3;
        private _content4;
        private _contentMask;
        private _clipName;
        private _clip;
        private _playing;
        private _touchable;
        private _resType;
        /**如果为数组形式，表示多个动作叠加表现 */
        private _aniName;
        private useKey;
        private ccType;
        private isShowAni;
        private _playTaskCall;
        private preLoadUrl;
        private _dragonAtlasList;
        constructor();
        /**
         * 销毁节点
         */
        dispose(): void;
        set playTaskCall(call: Function);
        get playTaskCall(): Function;
        /**
         * 加载地址，赋值为空时清除资源,骨骼动画固定在cardAni文件夹下，序列帧固定在aniFrame或cardFrame文件夹下
         * 如不放指定路径下，用loadResource()方法并传入指定加载资源的类型
         */
        get url(): string;
        private param;
        setAsset(param: JTGLoaderParam): void;
        set url(value: string);
        /**
         *
         */
        set spriteTrim(v: boolean);
        get touchable(): boolean;
        set touchable(value: boolean);
        get playing(): boolean;
        set playing(value: boolean);
        stop(): void;
        /**
         * sk动作名
         */
        set aniName(name: string);
        get clipName(): string;
        set clipName(name: string);
        get texture(): cc.SpriteFrame;
        set texture(value: cc.SpriteFrame);
        get spriteNode(): cc.Node;
        get clipNode(): cc.Node;
        get skeletonNode(): cc.Node;
        get dragonBonesNode(): cc.Node;
        get maskContaNode(): cc.Node;
        /**
         *
         * @param url 加载的url
         * @param resType 加载资源类型，cc.SpriteAtlas、sp.SkeletonData、cc.SpriteFrame，其中cc.SpriteAtlas为序列帧的图集
         *
         */
        loadResource(url: string, resType: typeof cc.Asset): void;
        /**
         * load资源
         */
        protected loadRes(assetType?: cc.Asset): void;
        /**
         * 解析加载的资源是图片还是帧动画
         * @param component 返回的资源
         */
        private analysisAssetType;
        private sorSpriteFrames;
        /**
         * 节点控制
         * @param visible true显示图片节点，false显示帧动画
         */
        private activeControl;
        /**
         * load资源之前先清空原节点资源
         */
        private clearContent;
        private set maskFade(value);
    }
    export enum resType {
        img = 0,
        frame = 1,
        spine = 2,
        dragonBones = 3
    }
    export abstract class JTItemSkinLoader extends JTGComponent {
        protected _skinLoader: JTGLoader;
        constructor();
        /**
         * 安装皮肤加载器
         * @param x 皮肤加载器的X坐标
         * @param y 皮肤加载器的Y坐标
         * @param parent 皮肤加载器的父容器
         * @param isScale 是否支持自动填充父容器的宽高
         */
        setupSkinLoader(x: number, y: number, parent: JTContainer, isScale?: boolean): JTGLoader;
        /**
         * 重置皮肤加载器
         */
        reset(): void;
        /**
         * 皮肤加载器
         */
        get skinLoader(): JTGLoader;
        set skinLoader(value: JTGLoader);
        /**
         * 清除皮肤加载器
         */
        clearSkinLoader(): void;
    }
    export class JTProduct extends JTContainer {
    }
    export class JTDataInfo extends JTProduct {
        constructor();
        clone(): JTDataInfo;
    }
    export class JTElementData extends JTDataInfo {
        protected _index: number;
        protected _data: any;
        protected _changedData: any;
        constructor();
        /**
         * 元素索引
         */
        get index(): number;
        set index(value: number);
        /**
         * 元素未改变的数据
         */
        get data(): any;
        set data(value: any);
        /**
         * 元素改变过后的数据
         */
        get changedData(): any;
        set changedData(value: any);
    }
    export class JTMixItemConfig {
        /**
         * 混合元素占列数
         */
        column: number;
        /**
         * 混合元素占行数
         */
        row: number;
        /**
         * ID
         */
        id: number;
    }
    export class JTUnfixedLengthItemConfig {
        /**
         * 元素占列数
         */
        column: number;
        /**
         * 元素占行数
         */
        row: number;
        /**
         * 源ID
         */
        sourceId: number;
        /**
        * 用于显示的映射ID
        */
        mapId: number;
    }
    /**
     * 扩展列属性信息
     */
    export class JTExpandScrollerInfo {
        /**
         * 索引
         */
        index: number;
        /**
         * 行数
         */
        row: number;
        /**
         * 方向
         */
        direction: SlotOrientation;
        /**
         * 弧形中心角
         */
        curveDegree: number;
        /**
         * 位置
         */
        position: cc.Vec2;
        /**
         * 遮罩节点类型 目前JTLayerFactory.EXTEND_SCROLLER_MASK_CONTAINER_ONE及
         *  JTLayerFactory.EXTEND_SCROLLER_MASK_CONTAINER_TWO
         */
        maskContainerType: number;
        gap: number;
    }
    export class JTConfigGroup {
        /**
         * 获取滚轴的宽
         */
        private width;
        /**
         * 获取滚轴的高
         */
        private height;
        /**
         * 列数
         */
        col: number;
        /**
         * 行数
         */
        row: number;
        /**
         * 格子的宽
         */
        girdWidth: number;
        /**
         * 格子的高
         */
        girdHeight: number;
        /**
         * 格子的x间距
         * */
        /**
         * 格子的y间距
         */
        /**
         * 格子的宽加x的间距
         */
        _gapWidth: number;
        /**
         * 格子的高加y的间距
         */
        _gapHeight: number;
        /**
         * 滚轴的滚动方向，横向及竖向，横向一直无用到，不做处理
         */
        orientation: SlotOrientation;
        gapXLandscape: number;
        gapYLandscape: number;
        gapXPortrait: number;
        gapYPortrait: number;
        mixConfig: JTMixItemConfig[];
        unfixedItemConfig: JTUnfixedLengthItemConfig[];
        gridShape: number[][];
        /**
         * 滚轴是否横屏状态
         */
        isLandscape: boolean;
        get gapX(): number;
        get gapY(): number;
        isMixElement(id: number): boolean;
        getMixElementConfig(id: number): JTMixItemConfig;
        isUnfixedLengthItem(mapId: number): boolean;
        getUnfixedLengthItemConfig(sourceId: number, row: number): JTUnfixedLengthItemConfig;
        getUnfixedLengthItemConfigByMapId(mapId: number): JTUnfixedLengthItemConfig;
        /**
         * 获取格子宽加X间距
        */
        get gapWidthLandscape(): number;
        /**
        * 获取格子宽加X间距
        */
        get gapWidthPortrait(): number;
        /**
         * 获取格子宽加X间距
        */
        get gapWidth(): number;
        /**
         * 获取格子宽加X间距
        */
        get gapHeightLandscape(): number;
        /**
        * 获取格子宽加X间距
        */
        get gapHeightPortrait(): number;
        /**
             * 获取格子高加Y间距
             */
        get gapHeight(): number;
        /**
         * 获取滚轴的高
         */
        getHeight(): number;
        /**
        * 获取滚轴的宽
        */
        getWidth(): number;
    }
    export class JTElementArrayList extends JTDataInfo {
        protected _dataList: any[];
        protected _changedDataList: any[];
        protected _gridShapes: any;
        protected _occupyPosList: any;
        constructor();
        /**
         * 更新数据列表
         * @param dataList 没有转换的数据列表
         * @param changeds 转换过后的数据列表
         */
        update(dataList: any[], changeds: any[]): void;
        /**
         * 转换过后的数据列表
         */
        get changedDataList(): any[];
        set changedDataList(value: any[]);
        /**
         * 没有转换的数据列表
         */
        get dataList(): any[];
        set dataList(value: any[]);
        /**
         
         */
        get gridShapes(): any[];
        set gridShapes(value: any[]);
        /**
         *
         */
        get occupyPosList(): any[];
        set occupyPosList(value: any[]);
    }
    export abstract class JTTask extends JTContainer {
        /**
         * 数据提供者
         */
        protected _dataProvider: JTCollection<JTDataInfo>;
        /**
         * 优先级
         */
        protected _priority: number;
        /**
         * 执行函数
         */
        protected _handler: Function;
        constructor();
        /**
         * 运行任务
         */
        abstract runningTask(): any;
        /**
         * 未发生改变的数据列表
         */
        get dataList(): any[];
        /**
         * 已经发生改变所数据列表
         */
        get changedDataList(): any[];
        /**
         * 执行函数
         */
        get handler(): Function;
        set handler(value: Function);
        /**
         * 优先级
         */
        get priority(): number;
        set priority(value: number);
        /**
         * 销毁
         */
        destroy(): boolean;
        /**
         * 数据提供者
         */
        get dataProvider(): JTCollection<JTDataInfo>;
        set dataProvider(value: JTCollection<JTDataInfo>);
    }
    export abstract class JTTaskFlow extends JTTask {
        constructor();
        /**
         * 完成时调度
         */
        complete(): void;
    }
    export abstract class JTOptionTask extends JTTaskFlow {
        /**
         * 滚轴视图
         */
        protected _scrollerGroup: JTScrollerGroup;
        constructor();
        /**
         * 关联滚轴视图
         * @param s 滚轴视图
         */
        contact(s: JTGroup): void;
        /**
         * 滚轴组视图
         */
        get scrollerGroup(): JTScrollerGroup;
        /**
         * 销毁
         */
        destroy(): boolean;
    }
    export class JTContainerMode {
        static SUPPORT_RESTORE: number;
        static DEFAULT_MODE: number;
    }
    export class JTTaskContainer extends JTTask {
        protected _target: JTTask;
        protected _type: string;
        protected _mode: number;
        constructor();
        bind(owner: JTContainer, caller: any): void;
        contact(task: JTTask, type: string): void;
        runningCallTask(): boolean;
        runningTask(): boolean;
        get task(): JTTask;
        get dataProvider(): JTCollection<JTDataInfo>;
        set dataProvider(value: JTCollection<JTDataInfo>);
        get type(): string;
        set mode(value: number);
        get mode(): number;
    }
    export class JTPipelineTemplate {
        protected _indexs: any;
        protected _index: any;
        protected _type: string;
        protected _options: SDictionary;
        protected _dataListType: number;
        static OPTION: string;
        protected _taskInfo: JTTaskInfo;
        constructor();
        /**
         * 选项map数组
         */
        get options(): SDictionary;
        set options(value: SDictionary);
        /**
         * 类型
         */
        get type(): string;
        set type(value: string);
        /**
         * 索引列表
         */
        get indexs(): any;
        set indexs(value: any);
        /**
         * 数据类型
         */
        get dataListType(): number;
        set dataListType(value: number);
        /**
         * 索引
         */
        get index(): any;
        set index(value: any);
        /**
         * 装载选项
         * @param cls 选项cls类
         * @param index 选项索引
         * @param complete 选项执行函数
         */
        setupOption(cls: any, index: any, complete: Function): void;
        /**
         * 获取任务Class类
         */
        getTaskClass(): any;
        /**
         * 子级选项
         * @param cls 选项cls类
         * @param priority 优先级
         * @param complete 选项执行函数
         */
        childOption(cls: any, priority: any, complete?: Function): any;
        /**
         * 创建
         */
        create(): void;
        /**
         * 选项数组
         */
        getOptions(): any;
        /**
         * 任务数据
         */
        getTaskInfo(): JTTaskInfo;
        /**
         * 通过优先级获取子级选项
         * @param priority 优先级
         */
        getChildOption(priority: any): JTTaskInfo;
    }
    export class JTTaskInfo {
        _cls: any;
        _pipeline: JTTaskFlow;
        _handler: Function;
        set cls(value: any);
        get cls(): any;
        get pipeline(): JTTaskFlow;
        get handler(): Function;
        set pipeline(value: JTTaskFlow);
        set handler(value: Function);
        create(): JTTaskFlow;
    }
    export class JTOptionType {
        static OPTION_CREATE: number;
        static OPTION_BEGIN_RUNNING: number;
        static OPTION_RUNNING: number;
        static OPTION_OVER_RUNNING: number;
        static LENGTH_FIXED_PIPELINE: number;
    }
    export class JTLayoutPoint {
        landscapeX: number;
        landscapeY: number;
        portraitX: number;
        portraitY: number;
    }
    export abstract class JTProcedure extends JTOptionTransition {
        /**
         * 是否已收到服务器的数据，可以进行下一步操作
         */
        isDataReady: boolean;
        constructor();
        /**
         * 滚轴X和Y
         * @param x
         * @param y
         */
        setScrollerXY(sourceXLandscape: number, sourceYLandscape: number, sourceXPortrait: number, sourceYPortrait: number): void;
        /**
         * 设置真实渲染的渲染器
         * @param r
         */
        setupRender(r: JTItemRender, p: JTLayoutPoint): void;
        /**
         * 数据准备就绪
         */
        dataStandby(): void;
        continue(): void;
        /**
         * 完成函数
         */
        complete(): void;
    }
    export abstract class JTLengthFixedPipeline extends JTFuturePipeline {
        constructor();
        /**
         * 开始
         */
        start(): void;
        /**
         * 运行任务
         */
        abstract runningTask(): void;
        /**
         * 创建
         */
        create(): void;
        /**
         * 运行
         */
        running(): void;
        /**
         * 关联滚轴视图
         * @param s 滚轴视图
         */
        contact(s: JTScroller): void;
        /**
         * 装载过程函数
         * @param priority 优先级
         * @param handler 执行函数
         */
        setupProcedure(priority: number, handler?: Function): void;
        /**
         * 将要运行函数
         */
        beginRunning(): void;
        /**
         * 结束运行函数
         */
        overRunning(): void;
        /**
         * 更新渲染器列表
         */
        abstract updateRenders(): void;
    }
    export abstract class JTScheduledPipeline extends JTFuturePipeline {
        /**
         * 任务列表
         */
        protected tasks: JTTask[];
        /**
         * 工作线列表
         */
        protected workLines: JTTask[];
        /**
         * 当前任务
         */
        protected currentTask: JTTask;
        /**
         * 渲染器列表
         */
        protected _renders: JTItemSkinLoader[];
        /**
         * 是否创建
         */
        protected _isCreate: boolean;
        constructor();
        /**
         * 开始
         */
        start(): void;
        /**
         * 运行任务
         */
        runningTask(): void;
        /**
         * 获取当前任务
         */
        getCurrentTask(): JTTask;
        /**
         * 获取当前优先级
         */
        getCurrentPriority(): any;
        /**
         * 获取任务列表
         */
        getTasks(): JTTask[];
        /**
         * 设置有效渲染器
         * @param render 渲染器
         */
        setupRender(render: JTItemRender, p: JTLayoutPoint): void;
        reSetCounterIndex(): void;
        protected sortOnByPriority(a: JTTask, b: JTTask): number;
        protected sortOn(a: number, b: number): number;
        /**
         * 关联滚轴视图
         * @param s 滚轴视图
         */
        contact(s: JTGroup): void;
        /**
         * 创建
         */
        create(): void;
        /**
         * 更新有效渲染器列表
         */
        updateRenders(): void;
        updateRenderPosition(): void;
        dataStandby(): void;
        onDataStandBy(): void;
        isPending: boolean;
        setTaskPending(): void;
        continuePendingTask(): void;
        /**
         * 清除
         */
        clear(): void;
        /**初始化基本属性 （主要用于处理单列旋转后没有将其他不参与旋转的列初始化数据）*/
        clearBasicAttributes(): void;
        /**
         * 销毁
         */
        destory(): void;
        /**
         * 渲染器
         */
        get renders(): JTItemSkinLoader[];
        /**
     * 渲染器
     */
        set renders(value: JTItemSkinLoader[]);
        /**
         * 是否创建
         */
        get isCreate(): boolean;
        /**
         *
         * @param useChangeData 是否使用changedata来刷新数据
         */
        abstract lineTimeComplete(useChangeData?: boolean): any;
        abstract resetRenderPoints(): any;
        /**
         * 在滚动完成前设置索引
         * @returns 是否是渲染器
         */
        abstract setRenderBeforeComplete(render: JTItemRender): boolean;
    }
    export class JTChannelPipeline {
        private _pipelines;
        private static _librarys;
        private static currentPipeline;
        private _count;
        private _isEgoClone;
        protected _centerMapLandscape: Object;
        protected _centerMapPortrait: Object;
        protected _pointMapLandscape: Object;
        protected _pointMapPortrait: Object;
        protected _staticCenterMapPortrait: Object;
        protected _staticCenterMapLandscape: Object;
        protected _id: number;
        constructor();
        /**
         * 通过indexs获取插件模板
         * @param indexs i索引列表
         */
        getTemplate(indexs: any): JTPipelineTemplate;
        /**
         * 获取个数
         */
        getCount(): number;
        /**
         * 获取通过列表
         */
        getValues(): any[];
        /**
         * 选项
         * @param cls 选项Class类
         * @param index 选项索引
         * @param dataListType 选项数据类型
         * @param complete 执行函数
         */
        option(cls: any, index: any, dataListType: number, complete: Function): JTPipelineTemplate;
        /**
         * 通过ID获取插件通道
         * @param id 插件通道ID
         */
        static getChannelPipeline(id: number): JTChannelPipeline;
        /**
         * 所有插件库ID列表
         */
        static channelIds(): any[];
        /**
         * 创建插件通道集
         * @param id 创建插件通道集的ID
         */
        static mark(id: number): JTChannelPipeline;
        /**
         * 子级选项
         * @param cls 子级选项Class类
         * @param priority 子级选项优先级
         * @param index 子级索引
         * @param complete 执行函数
         */
        childOption(cls: any, priority: number, index?: any, complete?: Function): JTPipelineTemplate;
        /**
         * 自我克隆
         * */
        egoClone(): void;
        /**
         * 重置
         */
        reset(): void;
        /**
         * 是否自我克隆
         */
        get isEgoClone(): boolean;
        /**
        * 获取渲染器中心点Point map
        */
        get centerMapLandscape(): Object;
        /**
         * 获取渲染器X=0, Y=0的point Map
         */
        get centerMapPortrait(): Object;
        /**
         * 获取渲染器中心点Point map
         */
        get pointMapLandscape(): Object;
        /**
         * 获取渲染器X=0, Y=0的point Map
         */
        get pointMapPortrait(): Object;
        /**
         * 获取静态的中心点
         */
        get staticCenterMapPortrait(): Object;
        /**
         * 获取静态的中心点
         */
        get staticCenterMapLandscape(): Object;
        /**
         * 获取渲染中心点的point
         * @param index 索引
         */
        getRenderCenterPointPortrait(index: number): cc.Vec2;
        /**
         * 获取渲染中心点的point
         * @param index 索引
         */
        getRenderCenterPointLandscape(index: number): cc.Vec2;
        /**
         * 获取渲染器x = 0, y = 0的point
         * @param index 索引
         */
        getRenderPointLandscape(index: number): cc.Vec2;
        /**
         * 获取渲染器x = 0, y = 0的point
         * @param index 索引
         */
        getRenderPointPortrait(index: number): cc.Vec2;
        /**
        * 获取渲染中心点的point
        * @param index 索引
        */
        getRenderStaticCenterPointPortrait(index: number): cc.Vec2;
        /**
         * 获取渲染中心点的point
         * @param index 索引
         */
        getRenderStaticCenterPointLandscape(index: number): cc.Vec2;
        /**
         * 插件通道ID
         */
        get id(): number;
        set id(value: number);
        static destroy(): void;
    }
    export class JTRuleTask extends JTTask {
        protected _isLock: boolean;
        protected _time: number;
        protected _id: any;
        protected _speed: any;
        protected _condition: any;
        protected _endCall: Function;
        protected _priority: number;
        protected _skinURL: string;
        protected _isRunning: boolean;
        protected _scrollerGroup: JTLineScrollerGroup;
        protected _skinLoaders: JTGLoader[];
        constructor();
        registerComplete(): void;
        runningTask(): boolean;
        get skinURL(): string;
        isContainId(itemIndex: number, items: any[], id?: number, ignoreIndexs?: number[]): boolean;
        containIdCount(itemIndex: number, items: any[], id?: any, ignoreIndexs?: number[]): number;
        setupLock(value: boolean): void;
        set skinURL(value: string);
        get priority(): number;
        get skinLoaders(): JTGLoader[];
        set skinLoaders(value: JTGLoader[]);
        set priority(value: number);
        set condition(value: any);
        get condition(): any;
        get time(): number;
        set time(value: number);
        get isRunning(): boolean;
        set isRunning(value: boolean);
        clearSkinLoaders(): void;
        get scrollerGroup(): JTLineScrollerGroup;
        set scrollerGroup(value: JTLineScrollerGroup);
        get isLock(): boolean;
        set isLock(value: boolean);
        get speed(): any;
        set speed(value: any);
        get id(): any;
        set id(value: any);
        get endCall(): Function;
        set endCall(value: Function);
        clear(): void;
    }
    export class JTDefaultItemRender extends JTItemRender {
        protected playCount: number;
        /**
         * 是否暗淡
         */
        protected isFade: boolean;
        protected isBlur: boolean;
        /**
         * 是否程序暗淡
         */
        protected isFadeMask: boolean;
        /**列序号（从0开始） */
        static playIndex: number;
        static scatterIndex: number;
        static fullTypeIndex: number;
        protected urlPrefix: string;
        constructor();
        /**
         * 是否使用非常规元素图片
         */
        get isUseSpecialTexture(): boolean;
        setupUrlPrefix(v: string): void;
        clearUrlPrefix(): void;
        set data(value: any);
        /**
         * 设置中奖线金额显示位置
         * @param index 列号（从0开始）
         * @param scatterIndex 行号（暂未使用，未实现逻辑）
         */
        static setPlayCoinIndex(index: number, scatterIndex: number, fullTypeIndex?: number): void;
        get data(): any;
        play(line: RollingResult, indexLine: number, slotMachine: SlotMachineView): void;
        playAnimation(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        playLineCall(line?: RollingResult, slotMachine?: SlotMachineView): void;
        /**
         * 中奖线轮播时的非中奖元素播放动画
         * @param line
         * @param slotMachine
         */
        protected onPlayLineCall?(line?: RollingResult, slotMachine?: SlotMachineView): void;
        gotoAndStop(frame: number): void;
        /**
         * 格子的数据或状态改变时
         */
        protected onDataOrStageChange(): void;
        reset(): void;
    }
    export class SpinSlotData {
        index: number;
        element: number;
        packageName: string;
    }
    /**
    *不完全展示时的元素隐藏的部分位置
    */
    export enum SpinSlotHiddenSection {
        None = 0,
        Top = 1,
        Bottom = 2
    }
    /**
     * 滚动格子的动画类型
     */
    export enum SpinSlotAniType {
        /**
         * 骨骼动画
         */
        Ani = 1,
        /**
         * 组件
         */
        Component = 2,
        /**
         * 帧动画
         */
        FrameAni = 3
    }
    /**
    * BaseSpinSlotView
    */
    export class BaseSpinSlotView extends JTDefaultItemRender {
        protected aboveLoader: JTGLoader;
        protected belowLoader: JTGLoader;
        protected _realData: number;
        constructor();
        /**
         * 不完全展示时的元素隐藏的部分位置
         */
        hiddenSection: SpinSlotHiddenSection;
        /**
         * 混合元素可视行数
         */
        visibleRow: number;
        /**
         * 混合元素包含的列数
         */
        mixColumn: number;
        /**
         * 混合元素包含的行数
         */
        mixRow: number;
        /**
         * 混合元素包含的索引
         */
        mixIndexs: number[];
        /**
         * 是否使用默认中奖飘字字体
         */
        protected isUseDefaultFont: boolean;
        /**
         * 轮播中奖线时是否播放五连动画
         */
        protected isPlayFullLineAni: boolean;
        /**
         * 是否在滚动中
         */
        protected isInRolling: boolean;
        /**
         * 滚动时是否模糊化
         */
        protected isBlur: boolean;
        /**
         * 图标是否要居中
         */
        protected needCenter: boolean;
        /**
         * 图标URL
         */
        private _iconName;
        private _isPoolComponent;
        protected get iconComponent(): cc.Component;
        /**
         * 图标组件
         */
        private _iconComponent;
        /**
         * 实际数据，realData一般与data相同，特殊需求时比如非固定长度元素时data只是展示的数据
         */
        get realData(): number;
        set realData(v: number);
        /**
         * 是否是可见的渲染器
         * @returns
         */
        isVisibleRender(): boolean;
        /**
         * 图片加载器地址
         */
        get iconUrl(): string;
        /**
         * 填充数据
         * @public
         * @method setData
         * @param {SpinSlotData} [data = null] 格子的数据源
         */
        setData(data?: SpinSlotData): void;
        play(line: RollingResult, indexLine: number, slotMachine: SlotMachineView): void;
        private fixRenderProperty;
        set data(value: any);
        get data(): any;
        gotoAndStop(frame: number): void;
        /**
         * 开始滚动时的回调
         */
        onStartRoll(): void;
        /**
         * 停止滚动时的回调
         */
        onStopRoll(): void;
        private _inAni;
        /**
         * 当slot中奖状态时要播放的动画
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线F中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        playAnimation(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        stopAnimation(): void;
        private _playingRewardsAni;
        /**
         * 当slot中奖状态时要播放的中奖赏额动画，如向上飘中奖赏额等
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        playRewardsAnimation(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        protected playWinCoin(lineResult?: RollingResult, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        playIdleAnimaition(): void;
        /**播放待机动画 目前轮播时分散百搭会调用*/
        onPlayIdleAnimaition(): void;
        /**
         * 飘字动画
         */
        private fontTween;
        /**
         * 奖励数字节点
         */
        protected static winLabelNode: cc.Node;
        /**
         * 停止播放奖励动画
         */
        stopRewardsAnimation(): void;
        /**
         * 中奖时播放百搭的动画(元素为百搭，且参与了中奖时)
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        playWildAnimation(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        /**
         * 停止播放百搭的动画
         */
        stopWildAnimation(): void;
        /**
         * 中奖时播放分散的动画(元素为分散，且参与了中奖时)
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        playScatterAnimation(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        /**
        * 中奖时播放分散的动画(元素为分散，且参与了中奖时)
        *
        */
        stopScatterAnimation(): void;
        /**
         * 中奖时播放Bonus元素的动画
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        playBonusAnimation(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        /**
         * 停止播放BONUS元素的动画
         */
        stopBonusAnimation(): void;
        /**
         * 当slot中奖状态时要播放的动画
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        protected onPlayAnimation?(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        /**
         * 停止动画时的回调
         */
        protected onStopAnimation?(): void;
        /**
         * 中奖时播放分散的动画(元素为分散，且参与了中奖时)的回调
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        protected onPlayScatterAnimation?(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        /**
         * 停止播放分散的动画(元素为分散，且参与了中奖时)的回调
         */
        protected onStopScatterAnimation?(): void;
        /**
        * 百搭动画回调(元素为百搭，且参与了中奖时)
        * @param {RollingResult} [lineResult=null] 该中奖线的结果
        * @param {number} [indexInLine=null] 元素在线中的索引
        * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
        * @param {ISlotMachine} slotMachine 所在的滚轴
        */
        protected onPlayWildAnimation?(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        /**
         * 停止百搭动画时的回调
         */
        protected onStopWildAnimation?(): void;
        /**
         * Bonus动画回调(元素为Bonus元素，且参与了中奖时)
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        protected onPlayBonusAnimation?(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        /**
         * 停止Bonus动画时的回调
         */
        protected onStopBonusAnimation?(): void;
        /**
         * 当slot中奖状态时要播放的中奖赏额动画，如向上飘中奖赏额等
         * @param {RollingResult} [lineResult=null] 该中奖线的结果
         * @param {number} [indexInLine=null] 元素在线中的索引
         * @param {number} [indexInSlotMachine=null] 元素滚轴中的索引
         * @param {ISlotMachine} slotMachine 所在的滚轴
         */
        protected onPlayRewardsAnimation?(lineResult?: RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: SlotMachineView): any;
        /**
         * 停止播放奖赏动画时的回调
         */
        protected onStopRewardsAnimation?(): any;
        /**
         * 设置图标
         * @protected
         * @method setIcon
         * @param {string} [iconName=null] 图标名称,如:2005_01
         * @param {SpinSlotAniType} type 图标类型,如果未指定，则默认为：SpinSlotAniType.Ani
         * @param {string} aniName sk动作名,SpinSlotAniType.Ani才生效
         * @param {boolean} isPool 是否缓存 ,只有当动画类型为:SpinSlotAniType.Component时有意义,如果未指定，则默认为true
         * @param {Function} playTaskCall 自定义播放任务，只有SpinSlotAniType.Ani才生效，返回参数为sp.Skeleton
         */
        protected setIcon(iconName?: string, type?: SpinSlotAniType, aniName?: string, isPool?: boolean, playTaskCall?: Function): void;
        /**
         * 释放组件类型的动画图标资源
         */
        private _releaseOldIconComponent;
        /**
         * 使图标居中
         */
        /**
         * 设置普通图标（图片，普通动画)
         */
        private _setCommonIcon;
        /**
         * 设置组件类型的图标
         */
        private _setComponentIcon;
        /**
        //  * 创建组件类型的图标
        //  */
        /**
         * 播放中奖时的边框动画
         */
        /**
         * 生成图标的地址
         */
        private _makeIconUrl;
        /**
         * 添加节点在元素的上层或下层
         * @param node 节点
         * @param isAbove 是否在上层
         * @param offsetX 偏移X
         * @param offsetY 偏移Y
         */
        protected addEffectNode(node: cc.Node, isAbove: boolean, offsetX?: number, offsetY?: number): void;
        private _playingWild;
        private _playingScatter;
        isWild(): boolean;
        isScatter(): boolean;
        getElementType(): number;
        /**
         * 暂时无用了
         */
        private _isBonus;
        /**
         * 滚轴停止触发的回调
         */
        onRollEnd(): void;
        /**
        * 元素掉落触发的回调
        */
        onOldElemDropEnd(): void;
        /**
         * 新元素掉落触发的回调
         */
        onNewElemDropEnd(): void;
        /**
         * 消除掉落完成触发的回调
         */
        onDropEnd(): void;
        /**
         * 元素消除时触发回调
         */
        onEliminate(): void;
        /**
         * 元素在停止滚动前最后渲染结果的回调，子游戏可在此根据index及服务器返回的结果自行添加额外的信息，如倍数符号等
         */
        beforeRollComplete(): void;
        /**
         * 元素掉落前（启用JTRunEliminateFallByRow才调用）
         * @param indexInSlotMachine
         */
        playDropAnimation?(indexInSlotMachine: number): any;
        /**
         * 元素消失前（启用JTBeginEliminateDisppear才调用)
         * @param indexInSlotMachine
         */
        playDisappearAnimation?(indexInSlotMachine: number): any;
        /**
         * 分散加速触发时
         */
        onScattterTaskCall(): void;
        /**
         *
         * @param type （当值为JTGLoaderAssetType.Skeleton时，建议使用接口：setSkeletonAnimation）
         * @param aniName
         * @param loop 是否循环，默认循环
         * @param playCallback 播放完成的回调，循环模式不会生效
         * @param clibData { sample: number, speed: number }  可选自定义帧动画的sample和speed值
         */
        setAnimation(type: JTGLoaderAssetType, aniName: string, loop?: boolean, playCallback?: Function, clibData?: {
            sample: number;
            speed: number;
        }): void;
        /**
         * 设置播放骨骼动画
         * @param aniName 动作名
         * @param loop 是否循环，默认循环
         * @param playCallback 播放完成的回调，循环模式不会生效
         * @param animationCacheMode 渲染模式(0:实时渲染；  1：共享缓存；  2：私有缓存)（null会读取元素配置的默认值）
         * @param premultipliedAlpha 是否开启预乘（null会读取元素配置的默认值）
         * @param skinName 皮肤名称（null会读取元素配置的默认值）
         */
        setSkeletonAnimation(aniName: string | string[], loop?: boolean, playCallback?: Function, animationCacheMode?: number, premultipliedAlpha?: boolean, skinName?: string): void;
        /**
     * 设置播放骨骼动画
     * @param aniName 动作名
     * @param armatureName armatureName名称（null会读取元素配置的默认值）
     * @param loop 是否循环，默认循环
     * @param playCallback 播放完成的回调，循环模式不会生效
     * @param animationCacheMode 渲染模式(0:实时渲染；  1：共享缓存；  2：私有缓存)（null会读取元素配置的默认值）
     * @param premultipliedAlpha 是否开启预乘（null会读取元素配置的默认值）
     */
        setDragonBonesAnimation(aniName: string, armatureName?: string, loop?: boolean, playCallback?: Function, animationCacheMode?: number, premultipliedAlpha?: boolean): void;
    }
    export class JTScroller extends JTGroup {
        /**
         * 滚轴的索引值
         */
        private _index;
        /**
         * 假滚轴数据的索引值
         */
        private _imageIndex;
        private delayRate;
        /**
         * 结合假滚轴的更换真实数据的次数
         */
        private _changedTimes;
        /**
         * 索引列表
         */
        private _indexs;
        /**
         * 对应的插件通道
         */
        protected _pipeline: JTFuturePipeline;
        constructor();
        /**
         * 设置滚轴皮肤
         * @param x 皮肤X坐标
         * @param y y坐标
         * @param parent 皮肤的父容器
         * @param isScale 皮肤是否自动填充
         */
        setupSkinLoader(x: number, y: number, parent: JTContainer, isScale?: boolean): JTGLoader;
        /**
         * 开始加载游戏
         * @param speed 速度
         * @param delay 延迟
         * @param time 时间
         * @param distance 距离
         * @param beginTime 回弹时间/开始的回弹时间
         */
        start(speed: number, delay: number, time: number, distance: number, beginTime: number, endDelay: number, endDistance: number, endTime: number, endSpeed?: number, endSlowDownTime?: number, beginSpeed?: number, beginSpeedUpTime?: number): void;
        /**
         * 激活某个状态
         * @param frame 帧数/状态
         */
        enableds(frame?: number): void;
        /**
         * 判断单个滚轴中是否有分散元素
         */
        isScatter(): boolean;
        /**
         * 设置注册函数
         * @param complete 完成回调
         * @param callNext 下一个回调
         * @param beginRunning 将要运行的回调
         */
        setupRegister(complete: Function, callNext?: Function, beginRunning?: Function): void;
        /**
         *
         */
        rendersDataReady(): void;
        /**
         * 重置坐标点
         */
        resetLocaltion(): void;
        /**
         * 添加有效渲染器
         * @param render 渲染器
         * @param isAutoSize
         */
        addChildItem(render: JTItemRender, isAutoSize?: boolean): void;
        /**
         * 清理
         */
        clear(): void;
        /**
         * 安装插件
         * @param pipeline
         */
        setupPipeline(pipeline: JTFuturePipeline): void;
        /**
         * 强制更新数据列表
         * @param dataList 数据列表
         */
        forceUpdate(dataList: any[]): void;
        /**
         * 刷新渲染器列表
         * @param  r 渲染器
         * @param  isSkipEmptySource 是否跳过空元素
         */
        refreshRenders(r: JTItemRender, isSkipEmptySource?: boolean): void;
        /**
         * 跳过空元素
         * @param checkForward 在元素中向前检查
         */
        skipEmptySource(checkForward: boolean): void;
        /**
         * 检查数据是否会非0数据连着(如果有0元素的话就需要出现两个非0元素之间必须夹着一个0元素 以免出现元素高度设置很小的两个元素出现堆叠情况 参考bug = 9579)
         * @param r
         * @returns
         */
        checkLineNoZero(): void;
        /**
         * 获取滚轴相同id渲染器列表
         * @param id 渲染器ID
         */
        getSomeById(id: number): JTItemRender[];
        getSomeById2(ids: number[]): JTItemRender[];
        /**
         * 调整渲染格子，在滚轴滚动开始还原可见度，滚轴结束滚动的时候使其隐藏.
         * @param isVisible
         */
        adjustSkinRenders(isVisible: boolean): void;
        /**
         * 获取改变过后的渲染器ID列表
         * @param id 改变过后渲染器ID
         */
        getSomeChangedById(id: number): JTItemRender[];
        /**
         * 一个判断逻辑用过百搭检测
         * @param list
         * @param r
         * @param id
         */
        private setRenders;
        private setRenders2;
        /**
         * 刷新假滚轴数据的渲染器列表
         * @param list
         */
        refreshList(list?: any[]): void;
        /**
         * 滚动完成调度
         */
        scrollingComplete(): void;
        setItemsZindex(): void;
        sortItemszIndex(elemIndex?: number, elemId?: number, elemList?: any): void;
        /**
         * 强制性停止
         * @param isTween
         */
        kill(isTween: boolean, isUpdateRenders?: boolean): void;
        /**
         * 滚轴插件
         */
        get pipeline(): JTFuturePipeline;
        /**
         * 滚轴渲染器的索引列表
         */
        get indexs(): number[];
        /**
         * 滚轴索引
         */
        get index(): number;
        /**
         * 滚轴索引
         */
        set index(value: number);
        /**
         * 假滚轴的索引值
         */
        get imageIndex(): number;
        /**
         * 假滚轴的索引值
         */
        set imageIndex(value: number);
        /**
         * 假滚轴数的改变的次数
         */
        get changedTimes(): number;
        /**
         * 假滚轴数的改变的次数
         */
        set changedTimes(value: number);
        /**
         * 原滚轴X坐标
         */
        get sourceX(): number;
        /**
         * 原滚轴Y坐标
         */
        get sourceY(): number;
        /**
         * 创建
         */
        protected create(): void;
        onStopRoll(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export class JTRuleTaskManager extends JTContainer {
        protected _ruleMap: SDictionary;
        protected _historys: JTTask[];
        static TYPE_SCATTER: string;
        protected _dataProvider: JTCollection<JTDataInfo>;
        constructor();
        getRuleContainer(type: string): JTTaskContainer;
        hasOwnRunning(apt: JTTask): boolean;
        getRuleTask(type: string): JTTask;
        registerTask(type: string, task: JTTask, container?: JTTaskContainer): JTRuleTaskManager;
        get collection(): JTCollection<JTDataInfo>;
        set collection(value: JTCollection<JTDataInfo>);
        get ruleMap(): SDictionary;
        set ruleMap(value: SDictionary);
        get taskContainers(): JTTaskContainer[];
        runningCallTask(): void;
        removeRuleTask(type: string): void;
        clear(): void;
        runningRuleTasks(): void;
        get histroys(): JTTask[];
    }
    export abstract class JTOptionTransition extends JTOptionTask {
        protected _scroller: JTScroller;
        protected _ruleTaskManager: JTRuleTaskManager;
        protected _index: number;
        /**
         * 获取当前scroller
         */
        get scroller(): JTScroller;
        /**
         * 关联当前scroller
         * @param s
         */
        contact(s: JTGroup): void;
        /**
         * 获取实例化对像
         * @param type 对象类型
         * @param caller 执行域
         */
        getObject(type: number, caller: JTContainer): JTContainer;
        /**
         * 获取规则容器
         * @param type 规则类型
         */
        getRuleContainer(type: string): JTTask;
        /**
         * 判断某规则是否已经触发
         * @param apt 规则
         */
        hasOwnRunning(apt: JTTask): boolean;
        /**
         * 获取规则
         * @param type 规则类型
         */
        getRuleTask(type: string): JTTask;
        /**
         * 注册规则任务
         * @param type 规则类型
         * @param target 规则对象
         */
        registerTask(type: string, target: JTTask): JTRuleTaskManager;
        /**
         * 规则map数组
         */
        get ruleMap(): SDictionary;
        /**
         * 任务容器列表
         */
        get taskContainers(): JTTaskContainer[];
        /**
         * 移除某个规则
         * @param type 规则类型
         */
        removeRuleTask(type: string): void;
        /**
         * 预先激活规则
         */
        runningCallTask(): void;
        /**
         * 激活规则
         */
        runningRuleTasks(): void;
        /**
         * 规则运行历史记录
         */
        get histroys(): JTTask[];
        /**
         * 规则任务管理器
         */
        get ruleTaskManager(): JTRuleTaskManager;
        set ruleTaskManager(value: JTRuleTaskManager);
        /**
         * 销毁
         */
        destroy(): boolean;
    }
    export abstract class JTFuturePipeline extends JTOptionTransition {
        /**
         * 索引计算器
         */
        protected _indexCounter: number;
        /**
         * 循环回调handler
         */
        protected _loop: Handler;
        /**
         * 子级选项集
         */
        protected _options: SDictionary;
        /**
         * 初始化的x点
         */
        protected _sourceXLandscape: number;
        /**
         * 初始化的y点
         */
        protected _sourceYLandscape: number;
        /**
         * 初始化的x点
         */
        protected _sourceXPortrait: number;
        /**
         * 初始化的y点
         */
        protected _sourceYPortrait: number;
        /**
         * 渲染器列表
         */
        protected _items: JTItemSkinLoader[];
        /**
         * 索引集
         */
        protected _indexs: any[];
        constructor();
        /**
         * 开始
         */
        abstract start(): void;
        /**
         * 运行任务
         */
        abstract runningTask(): void;
        /**
         * 创建
         */
        abstract create(): void;
        /**
         * 设置滚轴x、y的坐标
         * @param x
         * @param y
         */
        setScrollerXY(sourceXLandscape: number, sourceYLandscape: number, sourceXPortrait: number, sourceYPortrait: number): void;
        /**
         * 设置滚轴x、y的坐标
         * @param x
         * @param y
         */
        resetScrollerPosition(isRunning: boolean): void;
        /**
         * 开始之前要执行的函数
         * 这个函数是在转换数据之前调用
         */
        beforeStart(): void;
        /**
         * 设置真实有效的渲染器
         * @param render 渲染器
         */
        setupRender(render: JTItemRender, p: JTLayoutPoint): void;
        /**
         * 获取当前任务
         */
        getCurrentTask(): any;
        /**
         * 关联滚轴视图
         * @param s 滚轴视图
         */
        contact(s: JTGroup): void;
        /**
         * 获取当前优先级
         */
        getCurrentPriority(): any;
        /**
         * 结束后更新真实有效的渲染器
         */
        abstract updateRenders(): void;
        abstract updateRenderPosition(): void;
        isImmediatlyJumpToOver: boolean;
        /**
         * 立即跳到最后的过程
         */
        jumpToOverRunning?(): void;
        /**
         * 连接同步滚轴列
         */
        linkSyncRunning?(indexs: number[]): void;
        /**
         * 获取计数器索引
         */
        getCounterIndex(): number;
        setCounterIndex(value: number): void;
        /**
         * 通过优先级获取选项任务
         * @param priority 优先级
         */
        getOption(priority: number): JTTask;
        /**
         * 是否拥有选项
         * @param priority 优先级
         */
        hasOwnOption(priority: number): boolean;
        /**
         * 获取选项集
         */
        get options(): SDictionary;
        /**
         * 子级选项
         * @param pipeline 通道任务
         * @param priority 优先级
         * @param complete 执行函数
         */
        childOption(pipeline: any, priority: number, complete?: Function): void;
        /**
         * 执行完成调度
         */
        complete(): void;
        /**
         * 清理
         */
        clear(): void;
        /**
         * 获取循环函数
         */
        get loop(): Handler;
        /**
         * 注册循环状态监听函数
         * @param loop 循环监听函数
         */
        addLoopListener(loop: Handler): void;
        /**
         * 移除循环监听函数
         */
        removeLoopListener(): void;
        /**
         * 原x坐标
         */
        get sourceXLandscape(): number;
        set sourceXLandscape(value: number);
        /**
         * 原y坐标
         */
        get sourceYLandscape(): number;
        set sourceYLandscape(value: number);
        /**
  * 原x坐标
  */
        get sourceXPortrait(): number;
        set sourceXPortrait(value: number);
        /**
         * 原y坐标
         */
        get sourceYPortrait(): number;
        set sourceYPortrait(value: number);
        get sourceX(): number;
        get sourceY(): number;
        /**
         * 渲染器列表
         */
        get items(): JTItemSkinLoader[];
        set items(value: JTItemSkinLoader[]);
        /**
         * 渲染器索引列表
         */
        get indexs(): any[];
        set indexs(value: any[]);
    }
    export class JTCollection<T extends JTDataInfo> extends JTDataInfo {
        protected _defaultDataList: any[];
        protected _freeDataList: any[];
        protected _refDataList: any[];
        protected _grids: T;
        protected _elements: T[];
        protected _scroller: JTGroup;
        protected _pipeline: JTFuturePipeline;
        protected _changedGrids: any;
        /**
        * 未改变的格子数据
         */
        get grids(): T;
        set grids(value: T);
        /**
        * 假数据的关联引用,关联JTGroup的sources
        */
        get refDataList(): any[];
        set refDataList(value: any[]);
        /**
     * 元素数据列表
     */
        get elements(): T[];
        set elements(value: T[]);
        /**
     * 改变过后的格子数据
     */
        get changedGrids(): T;
        set changedGrids(value: T);
        /**
     * 数据视图
     */
        set scroller(value: JTGroup);
        get scroller(): JTGroup;
        /**
         * 更新
         * dataList:原始的数据列表
         * changedDataList:改变的数据列表
         */
        update(dataList: any[], changedDataList: any[]): void;
    }
    export abstract class JTGroup extends JTItemSkinLoader {
        protected _time: number;
        protected _speed: number;
        protected _delay: number;
        protected _frameRate: number;
        protected _runningTime: number;
        protected _frameRateTime: number;
        protected _defaultFrameRate: number;
        protected _defaultFrameRateTime: number;
        protected _distance: number;
        protected _direction: string;
        protected _beginTime: number;
        protected _endTime: number;
        protected _endDistance: number;
        protected _endDelay: number;
        protected _endSpeed: number;
        protected _endSlowDownTime: number;
        protected _beginSpeedUpTime: number;
        protected _beginSpeed: number;
        protected _isRunning: boolean;
        /**是否是手动停止了(开始旋转时会置为false；只有执行了急停操作才会置为true) */
        protected _isManualStop: boolean;
        protected _isLock: boolean;
        protected _config: JTConfigGroup;
        protected _sources: any[];
        protected _renders: JTItemSkinLoader[];
        protected _items: JTItemSkinLoader[];
        protected _dataProvider: JTCollection<JTDataInfo>;
        protected _complete: Function;
        protected _nextHandler: Function;
        protected _beginRunning: Function;
        protected _isLandscape: boolean;
        static SCROLLINGUP: string;
        static SCROLLINGDOWN: string;
        static SCROLLINGLEFT: string;
        static SCROLLINGRIGHT: string;
        constructor();
        /**
         * 开始
         * @param speed 速度
         * @param delay 延迟
         * @param time 运行时间
         * @param distance 结束或者启动的回拉距离
         * @param beginTime 将要开始的时间
         */
        start(speed: number, delay: number, time: number, distance: number, beginTime: number, endDelay: number, endDistance: number, endTime: number, endSpeed?: number, endSlowDownTime?: number, beginSpeed?: number, beginSpeedUpTime?: number): void;
        setupIsOpenItems(isLock: boolean, ids: any): void;
        /**
         * 更新层级
         * @param group 需要更新层级的对象
         */
        updateLayer(group?: JTGroup): void;
        /**
         * 强制更新视图
         * @param dataList 数据列表
         */
        abstract forceUpdate(dataList: any[]): void;
        /**
         * 激活某个状态（帧）
         * @param frame 帧数（状态）
         */
        abstract enableds(frame: number): void;
        /**
         * 重置
         */
        reset(): void;
        /**
         * 执行完成函数
         */
        scrollingComplete(): void;
        /**
         * 层级排序
         */
        layerSort(): void;
        /**
         * 完成传入的回调函数
         */
        set complete(value: Function);
        get complete(): Function;
        /**
         * 下一个需要执行的传入回调函数
         */
        set nextHandler(value: Function);
        get nextHandler(): Function;
        /**
         * 将要开始的回调函数
         */
        set beginRunning(value: Function);
        get beginRunning(): Function;
        /**
         * 回弹的距离
         */
        get distance(): number;
        set distance(value: number);
        /**
     * 回弹的距离
     */
        get endDistance(): number;
        set endDistance(value: number);
        /**
         * 通过索引获取某个渲染器(注这里的索引是按数组的排序的索引和 渲染器的index无关系)
         * @param index 索引
         */
        getItem(index: number): JTItemSkinLoader;
        /**
         * 创建
         */
        protected abstract create(): void;
        /**
         * 渲染器列表
         */
        get items(): JTItemSkinLoader[];
        /**
         * 运行的时间
         */
        get time(): number;
        set time(value: number);
        /**
         * 运行的速度
         */
        get speed(): number;
        set speed(value: number);
        /**
         * 默认的帧频
         */
        get defaultFrameRate(): number;
        /**
         * 默认的帧频时间
         */
        get defaultFrameRateTime(): number;
        /**
         * 延迟
         */
        get delay(): number;
        set delay(value: number);
        /**
         * 延迟
         */
        get endDelay(): number;
        set endDelay(value: number);
        /**
         * 延迟
         */
        get endSpeed(): number;
        set endSpeed(value: number);
        /**
         * 延迟
         */
        get endSlowDownTime(): number;
        set endSlowDownTime(value: number);
        /**
         * 延迟
         */
        get beginSpeed(): number;
        set beginSpeed(value: number);
        /**
         * 延迟
         */
        get beginSpeedUpTime(): number;
        set beginSpeedUpTime(value: number);
        /**
         * 帧数
         */
        get frameRate(): number;
        set frameRate(value: number);
        /**
         * 已经运行了时间
         */
        get runningTime(): number;
        set runningTime(value: number);
        /**
         * 帧数时间值
         */
        get frameRateTime(): number;
        set frameRateTime(value: number);
        /**
         * 参数配置
         */
        get config(): JTConfigGroup;
        set config(value: JTConfigGroup);
        /**
         * 将要运行的时间
         */
        set beginTime(value: number);
        get beginTime(): number;
        /**
     * 结束时运行的时间
     */
        set endTime(value: number);
        get endTime(): number;
        /**
         * 是否已经在运行
         */
        get isRunning(): boolean;
        /**
        * 是否已经在运行
        */
        set isRunning(value: boolean);
        /**
         * 是否是手动停止了(开始旋转时会置为false；只有执行了急停操作才会置为true)
         */
        get isManualStop(): boolean;
        /**
         * 锁定
         */
        get isLock(): boolean;
        set isLock(value: boolean);
        /**
         * 方向
         */
        get direction(): string;
        set direction(value: string);
        /**
         * 原始渲染器数据列表
         */
        get dataList(): any[];
        /**
         * 改变过后渲染器数据列表
         */
        get changedDataList(): any[];
        /**
         * 假滚轴数据列表
         */
        get sources(): any[];
        set sources(value: any[]);
        /**
         * 可见的渲染器列表
         */
        get renders(): JTItemSkinLoader[];
        set renders(value: JTItemSkinLoader[]);
        /**
         * 数据提供者
         */
        get dataProvider(): JTCollection<JTDataInfo>;
        set dataProvider(value: JTCollection<JTDataInfo>);
        get isLandscape(): boolean;
        set isLandscape(value: boolean);
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export class JTLogger {
        private static Log;
        private static Warn;
        private static Error;
        static info(...msgs: any[]): void;
        static error(...msgs: any[]): void;
        static infos(msgs: any[], propertys: string[]): void;
        static warn(...msgs: any[]): void;
        private static getTime;
    }
    export abstract class JTFactory extends JTContainer {
        /**
         * 类型Map数组
         */
        protected _classMap: SDictionary;
        /**
         * 使用过的类类型列表
         */
        protected _usedClassList: any[];
        constructor();
        /**
         * type 类型
         * owner 要绑定的对象
         */
        produce(type: any, owner?: JTContainer, name?: string): JTProduct;
        /**
         * 获取没有没有使用的Class列表
         */
        getNotUsedClass(): any[];
        isVerify(type: any): boolean;
        /**
         * 通过Type获取Class类型
         * @param type 类型
         */
        getClass(type: any): any;
        /**
         * 注册全局的Class类型
         */
        protected registerClassAlias(): void;
        /**
         * 注册Class类型
         * @param type 类型
         * @param cls  class类型
         */
        registerClass(type: any, cls: any): void;
        protected get classMap(): Object;
    }
    export class JTArrayCollection extends JTCollection<JTDataInfo> {
        protected _grids: JTElementArrayList;
        protected _changedGrids: JTElementArrayList;
        protected _scroller: JTScrollerGroup;
        protected _defaultSourceDataList: JTRollerData[];
        protected _freeSourceDataList: JTRollerData[];
        static NORMAL_MODE: number;
        static FREE_MODE: number;
        protected dataMode: number;
        protected rollerId: number;
        constructor();
        /**
         * 初始化
         */
        initialize(): void;
        /**
         * 更新数据
         * @param grids 格子数据列表
         * @param changedGrids 改变过后的格子数据列表
         */
        update(grids: any[], changedGrids: any[], gridShapes?: any[], gridShapesChanged?: any[], occupyPosList?: any[], occupyPosListChanged?: any[]): void;
        protected updateSourceByGridsConfig(value: any[]): void;
        protected create(): void;
        forceUpdateDefaultDataList(value: any): void;
        /**
         * 更新原始数据列表(未转换的数据列表)
         */
        updateDataList(): void;
        /**
         * 更新转换过后的数据
         */
        updateAfterConvertDataList(): void;
        /**
         * 更新转换过后的数据
         */
        updateShapesAndOccupyList(): void;
        /**
         * 转换数据列表
         * @param values 需要转换成的数据(grids)
         */
        convertDataList(values: any[], gridShapes?: any[], occupyPosList?: any[]): void;
        getConvertDataListByGridShape(values: any[], gridShapes: any[], isConvertMore: boolean): any[];
        /**
        * 转换数据列表
        * @param values 需要转换成的数据(changedGrids)
        */
        convertChangedDataList(values: any[], gridShapes?: any[], occupyPosList?: any[]): void;
        /**
         * 把一个一维数据拆分成按指定个数的 一个二维数组
         * @param values 一维数组
         * @param count 需要按N个来拆分
         */
        getConvertToList(values: any[], count: number): any[];
        /**
         * 按参数配置来转换二维数据
         * @param value 一维数组
         */
        converToList(value: any[]): any[];
        /**
         * 将一个没有转换的一维数组，通过实例传入的类型来组装数组（二维数组）
         * @param values 原始数据列表
         */
        getConvertDataList(values: any[]): any[];
        /**
         * 将一个没有转换的一维数组转换成一个二维数组(首和尾添加元素)
         * @param values 一维数组
         * @param count 需要按N个来拆分
         */
        getConvertToMoredataList(values: any[], col: number): any[];
        /**
         * 获取随机数
         */
        getRondomId(): number;
        getRandomIDbyCol(col: number): number;
        /**随机排除0元素 */
        getRandomIDbyCol_exZero(col: number): number;
        /**
         * 更新原数据列表
         * @param grids 没有改变的格子数据列表
         * @param changeds 没有 改变的格子数据列表
         */
        updateSources(grids: any[], changeds: any[]): void;
        /**
         * 转换成二维数组(自动按参数配置转换成二维数组，<数据单位是统一的>)
         * @param value 没有转换的数据列表
         */
        converToMoredataList(value: any[]): any[];
        setDataMode(mode: number, rollerId?: number, colIndexs?: number[]): void;
        get grids(): JTElementArrayList;
        set grids(value: JTElementArrayList);
        get changedGrids(): JTElementArrayList;
        set changedGrids(value: JTElementArrayList);
        get scroller(): JTScrollerGroup;
        set scroller(value: JTScrollerGroup);
        /**
     * 默认的假数据
     */
        get defaultSourceDataList(): JTRollerData[];
        set defaultSourceDataList(value: JTRollerData[]);
        /**
         * 免费下的假数据
         */
        get freeSourceDataList(): JTRollerData[];
        set freeSourceDataList(value: JTRollerData[]);
    }
    export class JTElementCollection extends JTCollection<JTDataInfo> {
        protected _grids: JTElementArrayList;
        protected _elements: JTElementData[];
        protected _defaultSourceData: JTRollerData;
        protected _freeSourceData: JTRollerData;
        /**
         * 更新的转换过后的数据列表
         * @param grids 转换过后的未改变数据列表
         * @param changedGrids  转换过后的改变数据列表
         */
        update(grids: any[], changedGrids: any[]): void;
        resetRefDataList(mode: number, rollerId: number): void;
        /**
         * 更新未转换过后的数据列表
         * @param dataList 未转换过的未改变的数据列表
         * @param changedDataList 未转换过的改变过后的数据列表
         */
        updateSources(dataList: any[], changedDataList: any[]): void;
        updateShapesAndOccupyList(gridShapes: any[], gridShapesChanged: any[], occupyPosList: any[], occupyPosListChanged: any[]): void;
        /**
         * 安装数据模型视图
         * @param s
         */
        setupModel(s: JTScroller): void;
        /**
         * 同步假数据列表
         */
        syncRefDataList(): void;
        forceUpdateRefDataList(value: any): void;
        /**
         * 未改变的格子数据
         */
        get grids(): JTElementArrayList;
        set grids(value: JTElementArrayList);
        /**
         * 改变过后的格子数据
         */
        get changedGrids(): JTElementArrayList;
        set changedGrids(value: JTElementArrayList);
        /**
         * 元素数据列表
         */
        get elements(): JTElementData[];
        set elements(value: JTElementData[]);
        /**
         * 通过索引获取元素数据
         * @param index 索引
         */
        getElementAt(index: number): JTElementData;
        /**
         * 数据视图
         */
        set scroller(value: JTGroup);
        get scroller(): JTGroup;
        /**
         * 默认的假数据
         */
        get defaultSourceData(): JTRollerData;
        set defaultSourceData(value: JTRollerData);
        /**
        * 免费下的假数据
        */
        get freeSourceData(): JTRollerData;
        set freeSourceData(value: JTRollerData);
    }
    export class JTModelFactory extends JTFactory {
        /**
         * 渲染器数据模型
         */
        static ITEMRENDER_DATA_MODEL: number;
        /**
         * 单个滚轴数据模型
         */
        static SCROLLER_DATA_MODEL: number;
        /**
         * 单个滚轴渲染器列表数据模型
         */
        static ELEMENT_LIST_DATA_MODEL: number;
        /**
         * 滚轴组数据数据模型
         */
        static SCROLLERGROUP_DATA_MODEL: number;
        constructor();
        /**
         * 生产数据对象
         * @param type type类型
         * @param owner 要绑定的对象
         */
        produce(type: number, owner?: JTContainer): JTContainer;
        /**
         * 注册全局class类
         */
        protected registerClassAlias(): JTModelFactory;
    }
    export class JTScrollerSettings {
        /**
         * 是否是正常模式
         */
        protected _isNormal: boolean;
        /**
         * 滚轴滚动的时间
         */
        protected _time: number;
        /**
         * 开始回弹时间
         */
        protected _beginTime: number;
        /**
         * 结束回弹时间
         */
        protected _endTime: number;
        /**
         * 开始的回弹距离
         */
        protected _distance: number;
        /**
         * 结束的回弹距离
         */
        protected _endDistance: number;
        /**
         * 每列滚轴的开始延迟时间
         */
        protected _delayTime: number;
        /**
         * 每列滚轴的结束延迟时间
         */
        protected _endDelayTime: number;
        /**
         * 滚轴的速度
         */
        protected _speed: number;
        /**
         * 滚轴的速度
         */
        protected _endSpeed: number;
        /**
         * 减速时间
         */
        protected _endSlowDownTime: number;
        /**
         * 开始时的加速时间
         */
        protected _beginSpeedUpTime: number;
        /**
         * 开始速度
         */
        protected _beginSpeed: number;
        private settingConfig;
        private _sequence;
        /**
         * 滚轴滚动的时间
         */
        protected _tempTime: number;
        /**
         * 开始、结束的回弹时间
         */
        protected _tempBeginTime: number;
        /**
         * 开始、结束的回弹距离
         */
        protected _tempDistance: number;
        /**
         * 每列滚轴的延迟时间
         */
        protected _tempDelayTime: number;
        /**
         * 滚轴的速度
         */
        protected _tempSpeed: number;
        /**
         * 结束的回弹时间
         */
        protected _tempEndTime: number;
        /**
         * 结束的回弹距离
         */
        protected _tempEndDistance: number;
        /**
 * 每列滚轴的延迟时间
 */
        protected _tempEndDelayTime: number;
        /**
         *
         * @param isTogether 是否一起滚动
         * @param isNormal 是否是正常模式
         */
        constructor(isTogether?: boolean, isNormal?: boolean);
        setDefaultSettingConfig(config: any): void;
        /**
        * 滚轴滚动的时间
        */
        getTime(): number;
        /**
         * 开始回弹时间
         */
        getBeginTime(): number;
        /**
         * 结束回弹时间
         */
        getEndTime(): number;
        /**
         * 开始回弹距离
         */
        getDistance(): number;
        /**
         * 开始回弹距离
         */
        getEndDistance(): number;
        /**
         * 滚轴的速度
         */
        getSpeed(): number;
        /**
         * 滚轴的速度
         */
        getEndSpeed(): number;
        /**
         * 每列滚轴的延迟时间
         */
        getDelayTime(): number;
        /**
         * 每列滚轴的延迟时间
         */
        getEndDelayTime(): number;
        getBeginSpeed(): number;
        getBeginSpeedUpTime(): number;
        getEndSlowDownTime(): number;
        /**
         * 设定启动顺序如 [0,2,1] 即启动顺序为1，3，2，第二列最后启动
         * @param indexs
         */
        setRunSequence(indexs: number[]): void;
        getRunSequence(): number[];
        /**
       * 是否是正常模式
       */
        isNormalMode(): boolean;
        /**
         * 更新模式
         * @param isNormal 是否是正常模式(true)/ 快速模式(false)
         */
        updateMode(isNormal?: boolean): void;
        /**
         * 设置一次性滚动参数,滚动完成后会使用默认配置，不区分极速和普通模式
         * @param speed 速度
         * @param delay 开始的列延时
         * @param time 时间
         * @param distance 开始时的回弹距离
         * @param beginTime 开始时的回弹时间
         * @param endDelay 结束时的列延时
         * @param endDistance 结束时的回弹距离
         * @param endTime 结束时的回弹时间
         */
        setOnceSettings(speed: number, delay: number, time: number, distance: number, beginTime: number, endDelay: number, endDistance: number, endTime: any): void;
    }
    export class JTSprite extends JTContainer {
        protected _proxyOwner: JTContainer;
        content: cc.Sprite;
        constructor();
        /**
         * 绑定
         * @param owner 捆绑的对象
         * @param caller 执行域对象
         */
        bind(owner: JTContainer, caller: any): void;
        /**
         *  添加子级对象
         * @param child 被添加的对象
         */
        addContainer(child: JTContainer): number;
        /**
         * 按索引删除对象个数
         * @param index 删除的索引
         * @param count 要删除的个数
         */
        removeContainerAt(index: number, count?: number): any;
        /**
         * 移除子对象
         * @param child 要移除的对象
         */
        removeContainer(child: JTContainer): JTContainer;
        /**
         * 按索引获取子对象
         * @param index 索引
         */
        getContainerByIndex(index: number): JTContainer;
        /**
        * 子对象个数
        */
        get childsCount(): number;
        /**
         * 子对象列表
         */
        get childs(): JTContainer[];
        /**
        * 拥有者
        */
        get owner(): JTContainer;
        set owner(value: JTContainer);
        /**
        * 拥有者的执行域对象
        */
        get caller(): any;
        set caller(value: any);
        /**
         * 销毁
         */
        destroy(): boolean;
        /**
         * 清除
         */
        clear(): void;
    }
    export class JTGrid {
        value: number;
        row: number;
        col: number;
        x: number;
        y: number;
        width: number;
        height: number;
        static GRIDUINT: number;
    }
    export class JTTextureBounds {
        grids: JTGrid[][];
        row: number;
        col: number;
        protected _value: number;
        name: string;
        width: number;
        height: number;
        x: number;
        y: number;
        rect: cc.Rect;
        constructor();
        get value(): number;
        set value(value: number);
        config(rect: cc.Rect): void;
    }
    export class JTComputeUtils extends JTTextureBounds {
        private boundsList;
        constructor();
        addToAtlas(texture: JTTextureBounds): void;
        showLogger(): void;
        getTextureGrids(texture: JTTextureBounds): JTGrid;
        get value(): number;
        set value(value: number);
    }
    export class JTCanvasTools {
        private configMap;
        private offX;
        private offY;
        static lineWidth: number;
        computeUtils: JTComputeUtils;
        /**
         *
         * @param width 设置canvas画布宽
         * @param height 设置canvas画布高
         */
        initialize(width: number, height: number): void;
        computeSpaceToCanvas(name: string, index: number): void;
        cacheSpaceToMap(name: string, index: number): void;
        private isReally;
        getTextureBounds(name: string, rect?: cc.Rect): JTTextureBounds;
        getRect(x: number, y: number, points: cc.Vec2[]): cc.Rect;
    }
    export class JTMask extends JTGComponent {
        mask: cc.Mask;
        constructor();
        launch(s: JTScrollerGroup): void;
        redraw(s: JTScrollerGroup, x: number, y: number, width: number, height: number): void;
        changed(s: JTScrollerGroup): void;
        clear(): void;
        addContainer(child: JTContainer): number;
        removeContainerAt(index: number): JTContainer;
        removeContainer(child: JTContainer): JTContainer;
        getContainerByIndex(index: number): JTContainer;
    }
    export class JTLineMask extends JTSprite {
        private gridMasks;
        private vMasks;
        private hMasks;
        private scrollerGroup;
        constructor();
        launch(s: JTScrollerGroup): void;
        createMask(): void;
        private drawGridMask;
        private drawMask;
        showAward(rs: JTItemRender[], scroller: JTLineScrollerGroup): void;
        private getRenderNames;
        getGridMask(index: number): JTMask;
        setupGridMask(index: number, isVisible?: boolean): void;
        redraw(s: JTScrollerGroup, x: number, y: number, width: number, height: number): void;
        changed(s: JTScrollerGroup): void;
    }
    export class JTScrollerGroupMask extends JTMask {
        maskPolygon: cc.Vec2[];
        mutipleMaskPolygon: cc.Vec2[][];
        constructor();
        launch(s: JTScrollerGroup): void;
        redraw(s: JTScrollerGroup, x: number, y: number, width: number, height: number): void;
        updateMask(): void;
        setPolygon(maskPolygon: cc.Vec2[]): void;
        drawPolygon(): void;
        setMutiplePolygon(mutipleMaskPolygon: cc.Vec2[][]): void;
        drawMutiplePolygon(): void;
    }
    export class JTLayerFactory extends JTFactory {
        /**
         * 滚轴容器
         */
        static SCROLLER_CONTAINER: number;
        /**
         * 中奖线线容器
         */
        static LINE_CONTAINER: number;
        /**
         * 格子线框容器
         */
        static GIRD_CONTAINER: number;
        /**
         * 前框容器
         */
        static FRONT_FRAME_CONTAINER: number;
        /**
         * 滚轴遮罩容器
         */
        static SCROLLER_MASK_CONTAINER: number;
        /**
         * 元素上层层的特效容器，调用slotmachine.addEffect时所在的下层容器
         */
        static EFFECT_ABOVE_CONTAINER: number;
        /**
         * 线遮罩
         */
        static LINE_MASK_TYPE: number;
        /**
         * 分散容器
         */
        static SCATTER_GRID_CONTAINER: number;
        /**
         * 列容器，加速动画所在的父节点
         */
        static SKIN_LOADER_CONTAINER: number;
        static WILD_FIEXD_TYPE: number;
        static WILD_RONDOM_TYPE: number;
        /**
         * 展示时中奖元素的容器
         */
        static LAYER_SORT_PLAY_RENDER: number;
        /**
         * 展示时非中奖元素的容器
         */
        static LAYER_SORT_STOP_RENDER: number;
        static LAYER_SORT_FLEXIBLE_CONTAINER: number;
        static EXTENSIONS_SCROLLER_CONTAINER: number;
        /**
         * 动态闪光线容器
         */
        static FLASH_LINE_CONTAINER: number;
        /**
         * 元素下层层的特效容器，调用slotmachine.addEffect添加所在的上层容器
         */
        static EFFECT_BELOW_CONTAINER: number;
        /**
         * 滚轴中奖时展示的黑色蒙版
         */
        static SCOLLER_GROUP_BLACK_BACK_GROUND: number;
        /**
         * 中奖线线号的容器
         */
        static LINE_NUMBER_CONTAINER: number;
        /**
         * 分散加速时的容器
         */
        static LAYER_SORT_SCATTER_PLAY_CONTAINER: number;
        /**
         * 分散加速时的容器
         */
        static LAYER_SORT_SCATTER_STOP_CONTAINER: number;
        /**
         * 分散加速时的黑色蒙板
         */
        static SCATTER_BLACK_BACK_GROUND: number;
        /**
         * 滚轴遮罩容器
         */
        static EXTEND_SCROLLER_MASK_CONTAINER_ONE: number;
        /**
         * 滚轴遮罩容器
         */
        static EXTEND_SCROLLER_MASK_CONTAINER_TWO: number;
        private layerMap;
        private _layers;
        constructor();
        /**
         * 生产层级对象
         * @param type type类型
         * @param owner 要绑定的对象
         */
        produce(type: number, owner?: JTContainer, name?: string): JTContainer;
        /**
         * 初时化层级工厂
         * @param scroller 滚轴
         */
        initialize(scroller: JTScrollerGroup): void;
        /**
         * 生产其它没有创建的产品
         */
        produces(): void;
        updateLayer(group?: JTGroup): void;
        layerSort(): void;
        /**
         * 添加层级
         * @param type 层级类型
         * @param parent 要添加对象的父容器
         */
        addChildNode(type: number, parent: JTContainer): JTContainer;
        /**
         * 获取层级
         * @param type 层级类型
         */
        getLayer(type: number): JTContainer;
        get layers(): any[];
        /**
         * 还原初始化的层级顺序
         */
        resetLayer(): void;
        /**
         * 注册全局Class
         */
        protected registerClassAlias(): JTLayerFactory;
    }
    export class JTLineScroller extends JTScroller {
        constructor();
    }
    export abstract class JTAdvanceSkinnableLine extends JTAdvanceSkinnable {
        constructor();
    }
    export abstract class JTRuntimeSkinnable extends JTSkinnable {
        constructor();
    }
    export abstract class JTRuntimeSkinnableLine extends JTRuntimeSkinnable {
        constructor();
    }
    export abstract class JTRuntimeSkinnableGrid extends JTRuntimeSkinnable {
        constructor();
    }
    export class JTRenderMode {
        /**
         * 美术资源模式
         */
        static MODE_ART_PRIORITY: number;
        /**
         * 程序画线（品质模式）
         */
        static MODE_QUALITY_PRIORITY: number;
        /**
         * 程序画线（性能模式）
         */
        static MODE_PERFORMANCE_PRIORITY: number;
    }
    export class JTSkinnableGridArtRender extends JTAdvanceSkinnableGrid {
        constructor();
        /**
         * 获取边框资源名
         */
        getSlotFrameResName(): string;
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(bounds?: JTTextureBounds): void;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: cc.Texture2D, index?: number): void;
    }
    export class JTScatterGridRender extends JTContainer {
        /**
         * 格子框Map数组
         */
        protected _gridMap: Object;
        /**
         * 格子框容器
         */
        protected _gridContainer: JTContainer;
        /**
         * 格子框渲染器列表
         */
        protected _gridRenders: JTSkinnable[];
        /**
         * 格子框坐标点列表
         */
        protected _gridRenderPoints: cc.Vec2[];
        /**
         * 滚轴组视图
         */
        protected _scroller: JTLineScrollerGroup;
        constructor();
        /**
         * 初始化
         */
        initialize(): void;
        /**
         * 创建可扩展皮肤
         * @param type 类型
         * @param container 可护展皮肤容器
         */
        createSkinnable(type: number, container?: JTContainer): JTSkinnable;
        /**
         * 获取格子框坐标点列表
         */
        protected getGridRenderPoints(): cc.Vec2[];
        /**
         * 创建
         * @param lineUtils 线渲染器工具
         */
        create(lineUtils: JTLineRenderUtils): void;
        /**
         * 显示格子框
         * @param line 线结果
         * @param rs 中奖格子列表
         */
        showGrid(line: RollingResult, rs: JTItemRender[]): void;
        /**
         * 按索引列表显示格子框
         * @param indexs 索引列表
         */
        showGrids(indexs: any): void;
        /**
         * 隐藏格子
         * @param index 索引
         */
        hideGrid(index: number): void;
        changedSkinnable(data: any): void;
        /**
         * 格子框Map数组
         */
        get gridMap(): Object;
        /**
         * 格子框Map数组
         */
        set gridMap(value: Object);
        /**
         * 滚轴组视图
         */
        get scroller(): JTLineScrollerGroup;
        /**
         * 滚轴组视图
         */
        set scroller(value: JTLineScrollerGroup);
        /**
         * 格子渲染器列表
         */
        get gridRenders(): JTSkinnable[];
        /**
         * 格子渲染器列表
         */
        set gridRenders(value: JTSkinnable[]);
        /**
         * 格子渲染器坐标列表
         */
        get gridRenderPoints(): cc.Vec2[];
        /**
         * 格子渲染器坐标列表
         */
        set gridRenderPoints(value: cc.Vec2[]);
        /**
         * 格子渲染器容器
         */
        get gridContainer(): JTContainer;
        /**
         * 格子渲染器容器
         */
        set gridContainer(value: JTContainer);
        /**
        * 根据元素data忽略是否显示画格子框
        * @param data 可以填单个数据 也可以填数组[]
        */
        ignoreShowGridByData(render: BaseSpinSlotView, data: any): boolean;
    }
    export enum LineStyle {
        butt = 0,
        round = 1,
        square = 2
    }
    export class JTCanvasStyle {
        /**
         *
         * @param shadowColor 阴影颜色
         * @param strokeColor 画笔颜色
         * @param lineWidth 线宽
         */
        setStyle(shadowColor: string, strokeColor: string, lineWidth?: number): void;
        lineWidth: number;
        lineJoin: string;
        lineCap: string;
        miterLimit: number;
        shadowOffsetX: number;
        shadowOffsetY: number;
        shadowColor: string;
        shadowBlur: number;
        strokeStyle: string;
        static lineWidth: number;
        /**无线配置时取的颜色*/
        static strokeStyle: string;
    }
    export class JTLineDirection {
        /**
         * 左方向
         */
        static DIRECTION_LEFT: number;
        /**
         * 右方向
         */
        static DIRECTION_RIGHT: number;
    }
    export class JTLineType {
        /**
         * 普通连线规则
         */
        static LINE: number;
        /**
         * 指定规则
         */
        static APPOINT: number;
        /**
         * 滚轴规则
         */
        static SCROLLER: number;
        /**
         * 非首尾连线规则
         */
        static INCLUSIVE: number;
        /**
         * 分散（特殊ID百搭、bounds、scatter）规则
         */
        static SCATTER: number;
        /**
         * 非首尾连线（连续）规则
         */
        static INCLUSIVE_CONNTIONE: number;
        /**
         * 满线规则
         */
        static FULL_LINE: number;
        /**
         * 指定连线规则
         */
        static APPOINT_LINE: number;
        /**
         * 连线替代
         */
        static LIGATURE_REPLACE: number;
        /**
         * 非连续满线
         */
        static UN_CONNTIONE_FULL_LINE: number;
        /**
         * 替代元素全局分散
         *
         */
        static DESPERSE_REPLACE_LINE: number;
        /**
         * 最大数量滚轴
         *
         */
        static MAX_COUNT_SCROLLER: number;
        /**
         * 第二种指定规则
         *
         */
        static APPOINT_SECOND: number;
    }
    export class JTOddsUtils {
        private static oddLineMap;
        static computeOdds(localtions: number[], oddsLines: any[], ids: any[]): any[];
        static getRowValues(localtions: number[], indexs: number[]): number[];
        static compare(rowValues: number[], ids: any[], oddsIndex: number): Object[];
        private static getOddsValue;
        private static matchStr;
        static formateOdds(list: number[]): string;
        static toArrayValues(map: Object, splitIndex?: number): any[];
        static getOddsLineRenders(scroller: JTLineScrollerGroup, lineId: number, lineMode?: number, lineType?: number): JTItemRender[];
        /**
         * 获取线的元素位置索引配置，数据以1开始
         * @param scroller
         * @param lineId
         * @param lineMode
         * @param lineType
         * @returns
         */
        static getOddsLineIndexs(scroller: JTLineScrollerGroup, lineId: number, lineMode?: number, lineType?: number): number[];
        static getInclusiveContinueRenders(scroller: JTLineScrollerGroup, line: RollingResult): JTItemRender[];
        static fromArrayByIndex(list: any[], value: number, property: string): any;
        static getFiexdScrollerRenders(scroller: JTLineScrollerGroup, line: RollingResult): JTItemRender[];
        static getLineKey(line: RollingResult): string;
        static getLineString(gameID: number, lineMode: number, lineId?: number, lineType?: number, direction?: number): string;
        static getColor(lineId: number): string;
        /** 中奖线 */
        static getLineRenders(line: RollingResult, scroller: JTLineScrollerGroup): JTItemRender[];
        static getAppointLineRenders(line: RollingResult, scroller: JTLineScrollerGroup): JTItemRender[];
        static getFiexdLineRenders(line: RollingResult, scroller: JTLineScrollerGroup): JTItemRender[];
        /**
         * 根据服务器winPos获取中奖元素
         * @param line
         * @param scroller
         * @returns
         */
        static getAppointIndexRenders(line: RollingResult, scroller: JTLineScrollerGroup): JTItemRender[];
        static destroy(): void;
    }
    export class JTImage extends JTContainer {
        protected _proxyOwner: JTContainer;
        content: cc.Sprite;
        constructor();
        /**
         * 绑定
         * @param owner 捆绑的对象
         * @param caller 执行域对象
         */
        bind(owner: JTContainer, caller: any): void;
        /**
         *  添加子级对象
         * @param child 被添加的对象
         */
        addContainer(child: JTContainer): number;
        /**
         * 按索引删除对象个数
         * @param index 删除的索引
         * @param count 要删除的个数
         */
        removeContainerAt(index: number, count?: number): any;
        /**
         * 移除子对象
         * @param child 要移除的对象
         */
        removeContainer(child: JTContainer): JTContainer;
        /**
         * 按索引获取子对象
         * @param index 索引
         */
        getContainerByIndex(index: number): JTContainer;
        /**
        * 子对象个数
        */
        get childsCount(): number;
        /**
         * 子对象列表
         */
        get childs(): JTContainer[];
        /**
        * 拥有者
        */
        get owner(): JTContainer;
        set owner(value: JTContainer);
        /**
        * 拥有者的执行域对象
        */
        get caller(): any;
        set caller(value: any);
        /**
         * 销毁
         */
        destroy(): boolean;
        /**
         * 清除
         */
        clear(): void;
    }
    export class JTLineRender extends JTScatterGridRender {
        _flashLineItemRender: JTSkinnable;
        /**
         * 默认的线渲染器
         */
        protected _lineItemRender: JTSkinnable;
        /**
         * 默认的格子框渲染器
         */
        protected _gridItemRender: JTSkinnable;
        /**
         * 默认的线数字按钮渲染器
         */
        protected _lineButtonRender: JTSkinnable;
        /**
         * 格子框渲染器列表
         */
        protected _renders: JTItemRender[];
        /**
         * 画格子框渲染器的坐标点列表
         */
        protected _landscapePoints: cc.Vec2[];
        protected _portraitPoints: cc.Vec2[];
        /**
         * 线ID
         */
        protected _lineId: number;
        /**
         * 格子框坐标点列表
         */
        protected _gridPoints: cc.Vec2[];
        /**
         * canvas画布样式
         */
        protected _canvasStyle: JTCanvasStyle;
        /**
         * 中奖线结果，由外部传入引用
         */
        protected _lineResult: JTLineInfo;
        /**
         * 所有可扩展皮肤列表
         */
        protected _skinnables: JTSkinnable[];
        protected _gridIndexs: number[];
        /**
         * 初始化线和格子框列表
         * @param scroller  滚轴组视图
         * @param lineId 线ID
         * @param renders 线对应的渲染器列表格子列表
         * @param points 格子框坐标列表
         */
        initializes(scroller: JTLineScrollerGroup, lineId: number, renders: JTItemRender[], landscapePoints: cc.Vec2[], portraitPoints: cc.Vec2[]): void;
        /**
         * 获取画格子框坐标点
         */
        getGridPoints(): cc.Vec2[];
        /**
         * 获取格子框坐标列表
         */
        protected getGridRenderPoints(): cc.Vec2[];
        /**
         * 创建可扩展皮肤
         * @param type 皮肤类型
         * @param container 容器
         */
        createSkinnable(type: number, container?: JTContainer): JTSkinnable;
        /**
         * 添加可扩展皮肤到层级
         */
        addSkinnablesToLayer(): void;
        /**
         * 添加可扩展皮肤
         * @param c 父容器
         * @param s 皮肤
         */
        private addSkinnable;
        private _rollingResult;
        /**
         * 显示格子框
         * @param line 线结果
         * @param rs 中奖格子列表
         */
        showGrid(line: RollingResult, rs: JTItemRender[]): void;
        /**
         * 创建格子框
         */
        private createGridSkinnables;
        /**
         * 显示多个格子框
         * @param count 个数 0为清空
         */
        showGrids(count: any): void;
        /**检测元素是否在winPos里 */
        checkRenderInWinPos(render: BaseSpinSlotView, winPos: any): boolean;
        /**
         * 改可扩展的皮肤
         * @param line 线自定义数据
         */
        changedSkinnable(line: any): void;
        /**
         * 改变格子框列表
         * @param index 格子框索引
         * @param x 格子框X坐标
         * @param y 格子框Y坐标
         * @param width 格子框的宽
         * @param height 格子框的高
         * @param sizeGrid 格子框的改变比例 new cc.Rect (20, 5, 20, 5,0)
         */
        changedGrids(index: number, x: number, y: number, width: number, height: number, sizeGrid?: cc.Rect): JTSkinnable;
        /**
         * 隐藏某个格子框
         * @param index 格子框索引
         */
        hideGrid(index: number): void;
        /**
         * 所有可扩展皮肤列表
         */
        get skinnables(): JTSkinnable[];
        /**
         * 所有可扩展皮肤列表
         */
        set skinnables(value: JTSkinnable[]);
        /**
         * 线ID
         */
        get lineId(): number;
        /**
         * 格子框渲染器列表
         */
        get renders(): JTItemRender[];
        /**
         * 中奖线结果，由外部传入引用
         */
        get lineResult(): JTLineInfo;
        /**
         * 中奖线结果，由外部传入引用
         */
        set lineResult(value: JTLineInfo);
        /**
         * 画格子框渲染器的坐标点列表
         */
        get landscapePoints(): cc.Vec2[];
        /**
     * 画格子框渲染器的坐标点列表
     */
        get portraitPoints(): cc.Vec2[];
        /**
         * 格子框坐标点列表
         */
        get gridPoints(): cc.Vec2[];
        /**
         * 默认的线渲染器
         */
        get lineItemRender(): JTSkinnable;
        /**
         * 默认的线渲染器
         */
        set lineItemRender(value: JTSkinnable);
        /**
     * 默认的线渲染器
     */
        get flashLineItemRender(): JTSkinnable;
        /**
         * 默认的线渲染器
         */
        set flashLineItemRender(value: JTSkinnable);
        /**
         * 默认的线数字按钮渲染器
         */
        get lineButtonRender(): JTSkinnable;
        /**
         * 默认的格子框渲染器
         */
        get gridItemRender(): JTSkinnable;
        /**
         * 默认的格子框渲染器
         */
        set gridItemRender(value: JTSkinnable);
        /**
         * 格子框索引
         */
        get gridIndexs(): number[];
        /**
         * canvas画布样式
         * 默认从配置表里读取
         */
        get canvasStyle(): JTCanvasStyle;
    }
    export class FlashLight extends cc.Component {
        private material;
        private renderTime;
        private enableRender;
        private roundShowComplete;
        private percentRoundShowComplete;
        private compeltePercent;
        private loop;
        private _lineWidth;
        private _moveWidth;
        private _enableRender;
        private _moveSpeed;
        onLoad(): void;
        init(): void;
        show(loop?: boolean, percent?: number, percentComplete?: Handler): void;
        hide(): void;
        get moveSpeed(): number;
        set moveSpeed(value: number);
        get moveWidth(): number;
        get lightWidth(): number;
        set lightWidth(value: number);
        get roundTime(): number;
        set roundTime(value: number);
        getPercent(): number;
        update(dt: number): void;
    }
    export class JTLineRenderUtils {
        /**
         * 画布工具
         */
        _context: JTCanvasTools;
        /**
         * 滚轴组视图
         */
        _scroller: JTLineScrollerGroup;
        /**
         * 默认线宽
         */
        static DEFAULT_SKIN_COUNT: number;
        /**
         * 线的计数器
         */
        protected _lineCounter: JTSkinnableCounter;
        /**
         * 格子框计数器
         */
        protected _gridCounter: JTSkinnableCounter;
        /**
         * 线渲染器Map数组
         */
        protected lineMap: SDictionary;
        /**
         * 执行次数
         */
        protected exeucteTimes: number;
        /**
         * 默认总共次数
         */
        protected totalTimes: number;
        /**
         * 格子框Map数组（用于护展百搭、分散、scatter）
         */
        gridTxtMap: SDictionary;
        constructor();
        /**
         * 创建线列表
         * @param scroller 滚轴组视图
         * @param lineMap 线数组
         */
        createLines(scroller: JTLineScrollerGroup, lineMap: SDictionary): void;
        /**
         * 开始执行
         */
        private execute;
        /**
         * 执行品质格子框列表
         */
        private executeQualityGrids;
        /**
         * 所有的任务执行完毕
         */
        private executeComplete;
        /**
         * 执行性能模式
         */
        private executePerformances;
        /**
         * 计算纹理所占用的空间
         * @param list 皮肤列表
         * @param width 皮肤宽
         * @param height 皮肤高
         * @param type 类型
         */
        private computeTextureSpace;
        /**
         * 加载完毕
         * @param base64 base64系统
         * @param list 列表
         * @param type 类型
         */
        private loadComplete;
        /**
         * 获取最大的纹理尺寸大小
         * @param lineCount 线的个数
         * @param width 宽
         * @param height 高
         */
        static getMaxTextureSize(lineCount: number, width: number, height: number): JTTextureSize;
        /**
         * 创建单条线的渲染器
         * @param lineId 线ID
         * @param scroller 滚轴组视图
         */
        private createLine;
        private static flashLightPrefab;
        static flashLightAssetUrl: string;
        private static flashLightPool;
        static createSingleFlashLight(): cc.Node;
        static recoverFlashLight(node: cc.Node): void;
        static outGlowGraphicMaterialUrl: string;
        static outGlowGraphicMaterial: cc.Material;
        static loadDefaultLineAsset(): void;
        static getOutGlowGraphicEffect(): cc.Material;
    }
    class JTTextureSize {
        width: number;
        height: number;
    }
    class JTSkinnableCounter {
        arts: JTSkinnable[];
        qualitys: JTSkinnable[];
        performances: JTSkinnable[];
        counter(skinnable: JTAdvanceSkinnable): void;
        private createGridArtSkinnables;
    }
    export class JTSkinnableLineButtonRender extends JTAdvanceSkinnable {
        imgNodes: any[];
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(data?: any): void;
        /**
         * 获取渲染器模式
         */
        getRenderMode(): number;
    }
    export class JTWildTask extends JTRuleTask {
        private _progress;
        static WILD_SKIN_3X3_INDEX: number;
        static WILD_SKIN_2X3_INDEX: number;
        currentTasks: JTWildConfig[];
        configs: JTWildConfig[];
        static WILD_FIXATION: number;
        static WILD_RANDOM: number;
        static currentTask: JTWildConfig;
        constructor();
        runningTask(): boolean;
        onUpdateSort(a: JTWildConfig, b: JTWildConfig): number;
        dispose(): void;
        private runningStepCall;
        /**
         *
         * @param indexs
         * @param id
         * @param speed
         * @param time
         * @param priority
         * @param skinURL
         * @param progress
         */
        forceShowIndexs(indexs: any, id: any, speed: any, time: number, priority: number, skinURL?: string, progress?: Function): void;
        /**
         *
         * @param lineRender
         */
        changedLineGrids(lineRender: JTLineRender): void;
        /**
         * 配置百搭条件
         * @param id 百搭Id
         * @param condition 条件
         * @param speed 速度
         * @param time 时间
         * @param priority  优先级
         * @param skinURL 百搭扩展皮肤URL地址
         * @param progress 百搭扩展回调
         * @param endCall
         */
        config(id: any, condition: any, speed: any, time: number, priority: number, skinURL?: string, progress?: Function, endCall?: Function): void;
        /**
         * 百搭配置组
         * @param id  id
         * @param indexs 索引列表
         * @param count 列数
         * @param speed 速度
         * @param time 时间
         * @param priority  优先级
         * @param skinURL 皮肤地址
         * @param progress 触发的回调函数
         * @param endCall
         */
        configGroup(id: any, indexs: any[], count: any, speed: any, time: number, priority: number, skinURL?: string, progress?: Function, endCall?: Function): void;
        /**
         * 激活观察的百搭
         * @param s 某一列的scroller视图
         */
        callWatchWild(s: JTScroller): void;
        protected getMatchWildTask(index: number): JTWildConfig;
        hasOwnIndex(index: number): boolean;
        showScroller(s: JTScroller): void;
        reset(scroller: JTScrollerGroup): void;
        hideScrollers(config: JTWildConfig, scroller: JTScrollerGroup): void;
        changedVisibles(scroller: JTScrollerGroup, sVisible?: boolean, skVisible?: boolean): void;
        getWildInfo(index: number, config: JTWildConfig): JTWildInfo;
    }
    export class JTWildInfo {
        indexs: any[];
        skinIndex: number;
        constructor(indexs: any[], skinIndex: number);
    }
    export class JTWildConfig {
        id: any;
        speed: any;
        time: any;
        priority: number;
        endCall: Function;
        condition: any;
        skinURL: string;
        progress: Function;
        tasks: JTWildInfo[];
        isRunning: boolean;
        isLock: boolean;
        cols: any[];
    }
    export class JTDynamicWildTask extends JTWildTask {
        constructor();
    }
    export class JTRuleTaskType {
        static WILD_DYNAMIC_TIME_TYPE: string;
        static WILD_ONCE_TIME_TYPE: string;
        static SCATTER: string;
        static COMBINE: string;
        static RETAIN_WILD_TASK: string;
        static DYNAMIC_COMBINE: string;
        static ADVANCE_TASK: string;
        static CHANGE_SPEED_TASK: string;
        static INFINITY_TASK: string;
    }
    export class JTOnceWildTask extends JTWildTask {
        constructor();
        showScroller(s: JTScroller): void;
    }
    export class JTElementIdType {
        /**
         * 百搭类型
         */
        static TYPE_WILD: number;
        /**
         * 分散类型
         */
        static TYPE_SCATTER: number;
        /**
         * bounds类型
         */
        static TYPE_BOUNDS: number;
    }
    export class JTScrollerLineParser extends JTContainer {
        /**
         * 线渲染器工具
         */
        private _renderUtils;
        /**
         * 滚轴组视图
         */
        private _scroller;
        /**
         * 线和格子框渲染器map数组
         */
        protected _lineMap: SDictionary;
        /**
         * 播放线完成函数
         */
        private _lineComplete;
        /**
         *
         */
        private _ifStopWhenComplete;
        /**
         * 中奖的线结果
         */
        _linesResult: any[];
        /**
         * 一个公共的计时器，用于logic里面的流程需要用到timer,便于管理
         */
        private _timer;
        /**
         * 播放线的Map数组
         */
        private _playLineMap;
        /**
         * 特殊百搭ID
         */
        private _wildId;
        /**
         * 动态百搭ID
         */
        private _dynamicWildId;
        /**
         * 特殊分散ID
         */
        private _scatterId;
        /**
         * bounds ID
         */
        private _boundsId;
        private _singleLineComplete;
        /**
         * 本轮是否轮播线
         */
        private _isLoopWinInThisRound;
        /**
         *
         */
        private _isInitiative;
        /**
         * 轮播种是否总展示
         */
        private _isLoopGlobalLines;
        /**上一次显示lineid */
        showPreLineId: number;
        /**
         *
         */
        private _isSimulateProcedure;
        constructor();
        /**
         * 初始化
         */
        initialize(): void;
        /**
         * 解析线结果
         * @param lines 中奖线列表
         * @param complete 播放完成回调（如果传回调则只会播放一遍，不传则会循环播放）
         * @param ifStopWhenComplete
         */
        parse(lines: any[], complete?: Function, ifStopWhenComplete?: boolean, isLoopWinInThisRound?: boolean, isLoopGlobalLines?: boolean): void;
        autoParse(): void;
        onPlayLines(): void;
        /**
         * 转换成线格子渲染器数据
         * @param renders 格子列表
         * @param line 线结果
         */
        converToRenderInfo(renders: JTItemRender[], line: RollingResult, unRewardRenders?: JTItemRender[]): JTLineInfo;
        /**
         * 播放渲染器列表
         * @param lineInfo 线数据
         */
        playItemRenders(lineInfo: JTLineInfo, isUpdateChilds?: boolean): void;
        /**
         * 通过数值显示多少个线数字按钮
         * @param lineCount 个数，数值类型
         */
        showLineButtonGroup(lineCount: number): void;
        /**
         * 显示某个数字按钮
         * @param lineId 对应的数字ID跟线ID是一样的
         * @param isVisible 是否显示
         */
        showLineButton(lineId: number, isVisible: boolean): void;
        /** 中奖线显示 线id 按钮的状态 */
        showWinLineButtonGroup(lineCount: number): void;
        /** 中奖线显示 线id 按钮的状态 */
        showWinLineButton(lineId: number, isVisible: boolean): void;
        private onPlayStepEffect;
        /**
         * 显示线
         * @param lineId 线ID
         * @param isVisible 是否隐藏
         */
        showLine(lineId: number, isVisible: boolean, singleLineComplete?: Handler, winCount?: number, direction?: number, lineInfo?: JTLineInfo, winCoinNum?: number): JTLineRender;
        showBlackBackGround(isVisible: boolean): void;
        /**
         * 清除
         */
        clear(): void;
        /**
         * 显示一条带遮罩的线和线上的格子框，不播放元素动画
         * @param lineResult
         */
        showLineAndGrid(lineResult: RollingResult): JTLineRender;
        /**
         * 显示线带遮罩和格子框
         * @param lineResult 线结果
         */
        showMaskWithGridLine(lineResult: RollingResult, isUpdateChilds?: boolean, renderlineInfo?: JTLineInfo, bResetLayerSort?: boolean, showGrids?: boolean): JTLineRender;
        isTreatFullLine(line: RollingResult): boolean;
        /**
         * 隐藏所有格子框（包括特殊的格子框）
         */
        hideGrids(): void;
        /**
         * 按个数显示线数
         * @param lineCount 个数（数值类型）
         */
        showLines(lineCount: number): void;
        /**
         * 自动调整滚轴线层级
         * @param container
         * @param rs
         */
        adjustScrollerLineLayer(container: JTContainer, rs: JTItemRender[]): void;
        /**
         * 线map数组
         */
        get lineMap(): SDictionary;
        /**
         * 线结果列表
         */
        get lineResults(): any[];
        /**
         * 线结果列表
         */
        set lineResults(value: any[]);
        /**
         * 轮播线完成函数
         */
        get lineComplete(): Function;
        /**
         * 轮播线完成函数
         */
        set lineComplete(value: Function);
        /**
         *
         *
         */
        get isLoopWinInThisRound(): boolean;
        /**
         *
         * 本轮是否轮播线
         */
        set isLoopWinInThisRound(value: boolean);
        /**
 *
 *
 */
        get isLoopGlobalLines(): boolean;
        /**
         *
         * 本轮是否轮播线
         */
        set isLoopGlobalLines(value: boolean);
        /**
         *
         * 本轮是否轮播线
         */
        get ifStopWhenComplete(): boolean;
        /**
         * 不知道是什么东西，
         *
         */
        set ifStopWhenComplete(value: boolean);
        /**
         * 是否是主动请求后的执行结果（因为一般重连或刷新进游戏，
         * 会跑一遍任务流程，如某些流程在重连会刷新金游戏无须执行根据此条件可直接完成）
         */
        get isInitiative(): boolean;
        /**
         *
         *
         */
        set isInitiative(value: boolean);
        /**
        *
        *
        */
        get isSimulateProcedure(): boolean;
        /**
         *
         * 是否是模拟运行的结果
         */
        set isSimulateProcedure(value: boolean);
        /**
         * 轮播线Map数组
         */
        get playLineMap(): SDictionary;
        /**
         * 轮播线Map数组
         */
        set playLineMap(value: SDictionary);
        /**
         * 一个公共的计时器，用于logic里面的流程需要用到timer,便于管理
         */
        get timer(): number;
        /**
         * 一个公共的计时器，用于logic里面的流程需要用到timer,便于管理
         */
        set timer(value: number);
        set dynamicWildId(v: number[]);
        get dynamicWildId(): number[];
        /**
         * 特殊bounds ID
         */
        get boundsId(): number;
        /**
         * 特殊分散ID
         */
        get scatterId(): number;
        /**
         * 特殊百搭ID
         */
        get wildId(): number[];
        /**
         * 添加百搭元素id
         */
        pushWildIds(ids: number[]): void;
        /**
         * 删除百搭元素id
         */
        delWildIds(ids: number[]): void;
        /**
         * 检查是否非特殊Id
         * @param id 特殊ID
         */
        isSpecialId(id: number): boolean;
        /**
         * 通过特殊类型Type 获取 id
         * @param type 特殊类型ID Type
         */
        getIdByType(type: number): number[];
        getIdByType2(type: number): number;
        /**
         * 渲染器工具
         */
        get renderUtils(): JTLineRenderUtils;
        /**
         * 渲染器工具
         */
        set renderUtils(value: JTLineRenderUtils);
        get singleLineComplete(): Handler;
        set singleLineComplete(value: Handler);
    }
    export class JTLineInfo {
        /**
         * 中奖线数据
         */
        line: RollingResult;
        /**
         * 中奖元素
         */
        renders: JTItemRender[];
        /**
         * 同一条线上的非中奖元素
         */
        unRewardRenders: JTItemRender[];
    }
    export abstract class JTSkinnable extends JTContainer {
        /**
         * 默认宽
         */
        protected _defaultWidth: number;
        /**
         * 默认高
         */
        protected _defaultHeight: number;
        /**
         * 当前皮肤显示对象
         */
        protected _skinContainer: cc.Node;
        /**
         * 当前皮肤显示对象的容器Class类
         * 支持(各种Class类)
         */
        protected _skinClass: any;
        protected _singleLineComplete: Handler;
        constructor();
        /**
         * 预加载
         */
        preloader(): void;
        /**
         * 改变皮肤样式，由切换线时调度
         * @param data 中奖线的逻辑（没有 试过，自己尝试改一下）
         */
        changedSkinnable(data: any): void;
        /**更改皮肤 */
        setSkeSkin(data: any): void;
        /**
         * 显示
         */
        show(singleLineComplete?: Handler, isMask?: boolean, winCount?: number, direction?: number, lineInfo?: JTLineInfo, winCoinNum?: number): void;
        /**
         * 隐藏
         */
        hide(): void;
        /**
         * 安装默认皮肤容器Class
         * @param cls 皮肤的容器
         */
        setupDefaultSkinClass(cls: any): void;
        /**
         * 添加子显示对像到皮肤容器上
         * @param child
         */
        addChild(child: any): void;
        /**
         * 设置纹理信息
         * @param texture 纹理对像
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
        /**
         * 当前皮肤显示对象
         */
        get skinContainer(): cc.Node;
        /**
         * 当前皮肤显示对象
         */
        set skinContainer(value: cc.Node);
        /**
         * 默认高
         */
        set defaultHeight(value: number);
        /**
         * 默认高
         */
        get defaultHeight(): number;
        /**
         * 默认宽
         */
        set defaultWidth(value: number);
        /**
         * 默认宽
         */
        get defaultWidth(): number;
        /**
         * 创建完成
         * @param data
         */
        abstract createComplete(data?: any): void;
        /**
         * 遮罩设置
         */
        set mask(value: any);
        set singleLineComplete(value: Handler);
        /**
         * 单挑中奖线播放完毕
         */
        get singleLineComplete(): Handler;
    }
    export abstract class JTAdvanceSkinnable extends JTSkinnable {
        /**
         * 模式
         */
        protected _mode: number;
        constructor();
        /**
         * 模式
         */
        get mode(): number;
        /**
         * 创建完成
         * @param data 外部传入进来的数据
         */
        abstract createComplete(data?: any): void;
    }
    export abstract class JTAdvanceSkinnableGrid extends JTAdvanceSkinnable {
        constructor();
    }
    export class JTGraphics extends cc.Node {
        graphics: cc.Graphics;
        constructor();
    }
    export class JTSkinnableGridRender extends JTAdvanceSkinnableGrid {
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(bounds?: JTTextureBounds): void;
        show(): void;
        setupTexture(texture: cc.Texture2D, index?: number): void;
        changedSkinnable(data: any): void;
    }
    export class JTSkinnableRuntimeLineRender extends JTRuntimeSkinnableLine {
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(data?: any): void;
        /**
         * 显示遮罩线
         * @param count
         */
        private createMaskLine;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
        show(_singleLineComplete?: Handler, mask?: boolean, lineCount?: number, direction?: number, renders?: any): void;
        /**
         * 隐藏
         */
        hide(): void;
    }
    export class JTChildFactory extends JTFactory {
        /**
         * 线类型
         */
        static LINE_TYPE: number;
        /**
         * 框类型
         */
        static GIRD_TYPE: number;
        /**
         * 线按钮类型
         */
        static LINE_BUTTON_TYPE: number;
        /**
         * 滚轴类型
         */
        static SCROLLER_TYPE: number;
        /**
         * 渲染器类型
         */
        static ITEMRENDER_TYPE: number;
        /**
         * 分散格子类型<是依赖框类型而产成的，在---预先模式下------------使用此框必须先使用框类型>
         */
        static SCATTER_GRID_TYPE: number;
        /**
        * 分散格子类型<是依赖框类型而产成的，在---预先模式下------------使用此框必须先使用框类型>
        */
        static SCATTER_TYPE: number;
        static EXTENSIONS_SCROLLER_TYPE: number;
        /**
         * 线类型
         */
        static FLASH_LINE_TYPE: number;
        constructor();
        produce(type: number, owner?: JTContainer): JTContainer;
        protected registerClassAlias(): JTFactory;
        isExdWild(r: JTItemRender, line: RollingResult, index: number, scroller: JTLineScrollerGroup, renders?: JTItemRender[]): boolean;
        changedLine(lineRender: JTLineRender, lineInfo: JTLineInfo): void;
    }
    export class JTLayerSortContainer extends JTGComponent {
        /**
         * 需要排序的子显示对象列表
         */
        protected _childs: JTItemSkinLoader[];
        /**
         * 自定义ID列表（可以按指定ID列表）
         */
        protected _layerSortIds: number[];
        /**是否根据位置index排序 */
        protected _isSortByPosIndex: boolean;
        constructor();
        /**
         * 更新改变子显示对象列表层级
         * @param childs 显示对象列表
         * @param isUpdate 是否马上更新
         */
        updateChangedChildsLayer(childs: JTItemSkinLoader[], isUpdate?: boolean): void;
        /**
         * 更新层级
         * @param group
         */
        updateLayer(group?: JTGroup): void;
        private sortItems;
        /**
         * 层级排序
         * @param childs 需要排序的显示对象列表
         * @param sortIds 排序的ID列表
         */
        layerSort(childs?: any[], sortIds?: any[]): any[];
        /**
         * 可以重写此方法。改自定义排序ID列表
         */
        get layerSortIds(): any[];
        /**
         * 恢复默认层级排序
         */
        resetLayerSort(): void;
        /**p
         * 获取要排序的子显示对象
         */
        getChilds(): JTItemSkinLoader[];
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export abstract class JTTaskPipeline extends JTTaskFlow {
        /**
         * 选项集
         */
        protected _options: SDictionary;
        /**
         * 循环函数
         */
        protected _loop: Handler;
        constructor();
        /**
         * 开始
         */
        abstract start(): void;
        /**
         * 运行任务
         */
        abstract runningTask(): any;
        /**
         * 通过优先级获取任务
         * @param priority 优先级
         */
        getOption(priority: number): JTTask;
        /**
         * 通过优先级判断是否有XX任务
         * @param priority 优先级
         */
        hasOwnOption(priority: number): boolean;
        /**
         * 选项集
         */
        get options(): SDictionary;
        /**
         * 子级选项
         * @param cls 子级选项Class类
         * @param priority 优先级
         * @param complete 执行函数
         */
        childOption(cls: any, priority: number, complete?: Function): void;
        /**
         * 当前任务
         */
        getCurrentTask(): any;
        /**
         * 当前任务优先级
         */
        getCurrentPriority(): any;
        /**
         * 循环任务函数
         */
        get loop(): Handler;
        /**
         * 清理
         */
        clear(): void;
        /**
         * 注册循环监听函数
         * @param loop
         */
        addLoopListener(loop: Handler): void;
        /**
         * 移除循环坚挺函数
         */
        removeLoopListener(): void;
    }
    export class JTScatterTask extends JTRuleTask {
        private ranCallTask;
        protected _scatterCount: number;
        indexs: number[];
        lastIndex: number;
        rangeMin: number;
        rangeMax: number;
        rangeValue: number;
        static SLOW_VELOCITY: number;
        static FAST_VELOCITY: number;
        static DEFAULT_VELOCITY: number;
        private _scatterMap;
        private _lastScrollerTime;
        static COUNT_MODE: number;
        static INDEX_MODE: number;
        static ITEM_COUNT_MODE: number;
        static APPOINT_MODE: number;
        static FULL_CONTINUE_MODE: number;
        static MULTIPLE_ITEM_COUNT_MODE: number;
        static APPOINT_MULTIPLE_ITEM_COUNT_MODE: number;
        static LINE_MODE: number;
        static APPOINT_COUNT_MODE: number;
        private configs;
        private _currentConfig;
        private subgroupConfigMap;
        private operationState;
        private requireIndexs;
        private callIndexs;
        private tempCallIndexs;
        /**是否正在加速中 */
        onSpeedScrolling: boolean;
        /**
         * 加速期待的点亮的格子索引，目前线类型
         */
        private expectItemIndexs;
        private linkIndexs;
        constructor();
        private operationStateChange;
        isTreatScatterEvent(): boolean;
        /**
         *
         * @param id 指定的元素 指定模式下不判断此参数
         *          多种元素计数模式及多种元素的计数模式并指定列模式参数填写 id数组
         *          满列连续模式参数填 形式如[{id:9,count:3},{id:10,count:1}] id为元素，count为一列包含多少个
         * @param condition 列计数模式及元素技术模式下必须为数字，列计数模式为多少列含有指定元素时触发，元素计数模式为有多少相应元素时触发，索引模式为数组，即指定索引的滚轴含有指定元素时触发
         *                  指定模式下参数形式为如[{index:0,id:12},{index:1,id:13}]，index为索引，id为元素，即指定的列包含元素才触发
         *                  满列连续模式 参数如 [0,1]即 第1和2列全为指定元素，后续的列根据会根据前一列是否全为指定元素触发加速
         *                  多种元素计数模式 多种元素加起来达到设定数量触发加速 例：[[11, 12], 3, "30-55-1", 0, ....]  11,12元素id加起来达到3个加速
         *                  多种元素的计数模式并指定列模式 参数形式为{count:2,indexs:[1,2]}即指定2和3列的元素达到2个是触发
         *                  连线模式根据线的位置的元素达到数量后加速，后面的列如果还能连线会继续加速
         *                  指定列的元素级数量和模式 参数[{index:0,id:[12,13],count:1},{index:1,id:[12,13],count:1}]，index为索引，id为元素，count为该列数量，参数意思是第一和二列12和13元素加起来数量都为1才能触发
         * @param speed 字符串格式，如'30-50-1' 30为最小速度，50为最大速度，1为加速度 ，单位为像素/帧
         * @param time
         * @param priority 优先级，越大越先触发
         * @param skinURL 触发时该列滚轴显示的图片或动画
         * @param isTogether 不参与加速的列是否一起滚动
         * @param activateCall
         * @param progress 触发指定元素时该列滚轴要加速的回调
         * @param type  默认列计数模式
         *              JTScatterTask.INDEX_MODE 索引模式
         *              JTScatterTask.COUNT_MODE 列计数模式
         *              JTScatterTask.ITEM_COUNT_MODE 元素计数模式
         *              JTScatterTask.APPOINT_MODE 指定模式
         *              JTScatterTask.FULL_CONTINUE_MODE 满列连续模式
         *              JTScatterTask.MULTIPLE_ITEM_COUNT_MODE 多种元素的计数模式
         *              JTScatterTask.APPOINT_MULTIPLE_ITEM_COUNT_MODE 多种元素的计数模式并指定列模式
         *              JTScatterTask.LINE_MODE 连线模式
         *              JTScatterTask.APPOINT_COUNT_MODE 指定列的元素及其数量和模式
         * @param scatterIndexList 触发时加速的滚轴列表索引，默认为空，即后续的滚轴全加速
         * @param isTreatInFree 免费中是否触发加速，默认为true
         * @param isTreatInTurbo 急速模式中是否触发加速，默认为true
         * @param onlyTreatInFree 只在免费中触发加速，默认为false，当isTreatInFree为false时此参数无效
         */
        config(id: any, condition: number | number[] | any, speed: string, time: number, priority: number, skinURL?: string, isTogether?: boolean, activateCall?: Function, progress?: Function, type?: number, scatterIndexList?: Array<number>, isTreatInFree?: boolean, isTreatInTurbo?: boolean, onlyTreatInFree?: boolean): void;
        runningTask(): boolean;
        private runningLoopTask;
        private isEqualId;
        /**
         * 返回忽略计算的行索引
         * @param index 列索引
         * @returns
         */
        getIgnoreIndexs(index: number): number[];
        private getAllLineIndexs;
        private hasOwnContinueId;
        private getPlayItemIndexs;
        setupScatterTime(s: JTScroller): void;
        updateScatterTime(s: JTScroller): boolean;
        onRunningSpeedUp(s: JTScroller): boolean;
        getScatterInfo(index: number): JTScatterRunningInfo;
        onRunningSlowdown(s: JTScroller): boolean;
        callWatchScatter(s: JTScroller): void;
        launchWatch(index: number, o: JTScrollerGroup): void;
        /**
         * 线类型分散加速时获取期待加速时连成线的位置索引
         * @param col 列索引
         * @returns
         */
        getCurrentExpectItemIndex(col: number): number;
        setupVelocity(s: JTScroller, scatter: JTScatterRunningInfo, min: number, max: number, value?: number): void;
        getCurrentTask(): JTScatterConfig;
        isIgnoreItem(render: BaseSpinSlotView): boolean;
        /**
         * 调用列的分散任务结束，此为公共库调用，子项目重写onScatterComplte
         * @param s
         * @returns
         */
        callScatterComplete(s: JTScroller): void;
        private playRenders;
        removeIndexs(indexs: number[]): void;
        /**
         * 列分散任务完成
         * @param s
         */
        onScatterComplte(s: JTScroller): void;
        setLinkIndexs(indexs: number[]): void;
        private setSubgroupTask;
        private getConfigByIndex;
        clear(): void;
    }
    class JTScatterRunningInfo {
        velocity: Object;
        runningTime: number;
        step: number;
        currentStep: number;
    }
    class JTScatterConfig {
        condition: any;
        type: number;
        id: any;
        speed: any;
        isTogether: boolean;
        time: number;
        priority: number;
        skinURL: string;
        progress: Function;
        scatterIndexList: Array<number>;
        isTreatInFree: boolean;
        isTreatInTurbo: boolean;
        onlyTreatInFree: boolean;
    }
    export class JTScrollerGroup extends JTGroup {
        /**
         * 背景的空白区域支持鼠标滑动
         */
        protected _background: JTGraphics;
        /**
         * 空闲状态的滚轴列表
         */
        protected _freeList: JTItemSkinLoader[];
        /**
         * 当前正在运行的滚轴列表
         */
        protected _runnings: JTItemSkinLoader[];
        protected _isContext: boolean;
        /**
         * slot游戏默认ID列表
         */
        protected _defualtImageIds: any[];
        /**
         * 每列滚轴滚动完成函数
         */
        protected _progress: Function;
        /**
         * 是否支持空白区域鼠标点击
         */
        protected _isBackgroundFill: boolean;
        /**
         * 滚轴容器
         */
        protected _sContainer: JTGComponent;
        /**
         * 层级工厂
         */
        protected _factoryLayer: JTFactory;
        /**
         * 子级工厂
         */
        protected _factoryChild: JTFactory;
        /**
         * 数据模型工厂
         */
        protected _factoryModel: JTFactory;
        /**
         * 规则任务管理器
         */
        protected _ruleTaskManager: JTRuleTaskManager;
        /**
         * 通道管道
         */
        protected _channelPipeline: JTChannelPipeline;
        /**
         * 皮肤列表
         */
        protected _skinLoaders: JTGLoader[];
        /**
         * 默认皮肤容器
         */
        protected _skinLoaderContainer: JTGComponent;
        /**
         * 中奖格子的层级排序
         */
        protected _layerSortPlayContainer: JTLayerSortContainer;
        /**
         * 未中奖的格子层级排序
         */
        protected _layerSortStopContainer: JTLayerSortContainer;
        protected _layerSortScatterPlayContainer: JTLayerSortContainer;
        protected _layerSortScatterStopContainer: JTLayerSortContainer;
        protected _scrollerGroupMask: JTScrollerGroupMask;
        protected _pContainer: JTGComponent;
        static USE_CONVERT_MROE_LIST: number;
        static USE_CONVERT_TO_LIST: number;
        /**
         * 是否一次性开启单位滚轴滚动
         */
        protected _isOnceOpenItems: boolean;
        /**
         * 是否开启元素单位滚轴滚动
         */
        protected _isOpenItems: boolean;
        /**
         * 开启元素单位滚轴滚动的id列表
         */
        protected _openItemIds: any[];
        protected _customSourceHandler: Handler;
        protected _itemContainers: JTGComponent[];
        protected _gameID: number;
        protected _gridRenderConfig: number[][];
        protected _enabled: boolean;
        protected _freeSources: any[];
        protected _defaultSources: any[];
        protected _itemOffsets: cc.Vec2[];
        protected _isPending: boolean;
        protected _isSkipChangeTask: boolean;
        protected _inclineDegrees: number[];
        protected _isIncline: boolean;
        protected _isInclineSkew: boolean;
        protected _curveDegrees: number[];
        protected _isCurve: boolean;
        protected _expandScrollerInfo: JTExpandScrollerInfo[];
        protected _gridLengthRange: any[];
        protected _subgroupConfigs: JTSubgroupConfig[];
        constructor();
        /**
         * 安装工厂
         * @param layer 层级工厂
         * @param child 子级工厂
         * @param logic 逻辑工厂
         * @param model 数据工厂
         */
        setupFactory(layer: JTFactory, child?: JTFactory, logic?: JTFactory, model?: JTFactory): JTChannelPipeline;
        /**
         * 设置是否开启指定列滚轴滚动
         * @param isOnceOpenItems 是否一次性的开启指定列滚动
         * @param ids 开启指定列滚轴滚动的列索引列表,索引从从1开始
         */
        setupIsOpenItems(isOnceOpenItems: boolean, ids: any[]): void;
        /**
         * 添加混合元素配置
         * @param id 元素id
         * @param row 元素占行数
         * @param column 元素占列数
         */
        addMixItemConfig(id: number, row: number, column: number): void;
        /**
         * 添加额外的列信息
         * @param index 该列的索引，以0为开始
         * @param row 该列包含多少行
         * @param position 该列的位置
         * @param direction 该列的方向
         * @param maskContainerType 遮罩节点
         * @param gap 间距
         * @param curveDegree 弧形角度
         */
        addExpandScrollerInfo(index: number, row: number, position: cc.Vec2, direction: SlotOrientation, maskContainerType: number, gap?: number, curveDegree?: number): void;
        /**
         *
         * @param sourceId
         * @param mapId
         * @param column
         * @param row
         */
        addUnfixedLengthItemConfig(sourceId: number, mapId: number, column: number, row: number): void;
        /**
         * 注册子群，当把滚轴分成多个不同的子滚轴处理时，设置多个子群
         * @param subgroupId 子群ID
         * @param indexs 子群的列索引
         */
        registerSubgroup(subgroupId: number, indexs: number[]): void;
        /**
        * 是否启用
        */
        get enabled(): boolean;
        /**
         * 是否启用
         */
        set enabled(v: boolean);
        /**
         * 是否开启元素单位滚轴滚动
         */
        get isOpenItems(): boolean;
        /**
         * 开启元素单位滚轴滚动的id列表
         */
        get openItemIds(): any[];
        /**
         * 是否开启元素单位滚轴滚动
         */
        get isOnceOpenItems(): boolean;
        /**
         * 安装默认的元素列表
         * @param sourceList 默认假滚动列表
         * @param defaultList 默认ID列表
         * @param isContext
         * @param freeSourceList 免费模式的假滚动列表
         */
        setupDefaultItemList(sourceList: any[] | Function, defaultList: any[], isContext?: boolean, freeSourceList?: any[] | Function): void;
        /**
         * 安装格子配置
         * @param width 宽
         * @param height 高
         * @param row 行数
         * @param col 列数
         * @param gapX X间距
         * @param gapY Y间距
         * @param isBackgroundFill 是否支持空白区域鼠标点击
         */
        setupGridConfig(width: number, height: number, row: number, col: number, gapXLandscape?: number, gapYLandscape?: number, gapXPortrait?: number, gapYPortrait?: number, isBackgroundFill?: boolean, orientation?: SlotOrientation): void;
        /**
         * 安装函数
         * @param progress 每列滚轴滚动完成函数
         * @param complete 所有列滚轴滚动完成函数
         * @param nextHandler 下一列滚轴滚动函数
         * @param beginRunning 将要开始滚动函数
         */
        setupRegister(progress?: Function, complete?: Function, nextHandler?: Function, beginRunning?: Function): void;
        /**
         * 标记管道通道
         * @param id 管道通道ID
         */
        mark(id: number): JTChannelPipeline;
        /**
         * 改变管道通道
         * @param id 要改变的ID
         */
        changeChannelPipeline(id: number): JTChannelPipeline;
        /**
         * 切换假滚轴，分免费非免费的滚轴
         * @param isFree 是否使用免费模式的滚轴，如果没有免费假滚轴配置则默认用普通的假滚轴
         * @param rollerId 使用第几套假滚轴，默认为第一套
         */
        changeDataMode(isFree: boolean, rollerId?: number, colIndexs?: number[]): void;
        /**
         * 更新列表数据
         * @param grids 未改变的GRID列表
         * @param gridChangeds 改变的GRID列表
         */
        onUpdate(grids: any[], gridChangeds: any[], gridShapes?: any[], gridShapesChanged?: any[], occupyPosList?: any[], occupyPosListChanged?: any[]): void;
        /**
         * 更新列表数据
         * @param grids 未改变的GRID列表
         * @param gridChangeds 改变的GRID列表
         */
        reRender(grids: any[], gridChangeds: any[]): void;
        /**滚轴元素排序 */
        sortScrollerItemsIndex(): void;
        /**
         * 随机改变管道通道
         */
        randomChanged(): JTChannelPipeline;
        /**
         * 子级选项
         * @param cls 子级选项Class类
         * @param priority 子级选项优先级
         * @param indexs 索引列表
         * @param complete 执行函数
         */
        childOption(cls: any, priority: number, indexs?: any, complete?: Function): JTPipelineTemplate;
        /**
         * 选项索引列表
         * @param cls 子级选项Class类
         * @param dataListType 子级选项数据类型
         * @param indexs 索引列表
         * @param complete 执行函数
         */
        optionIndexs(cls: any, dataListType: number, indexs: any, complete?: Function): JTPipelineTemplate;
        /**
         * 单个选项
         * @param cls 子级选项Class类
         * @param dataListType 子级选项数据类型
         * @param complete 执行函数
         */
        option(cls: any, dataListType: number, complete?: Function): JTPipelineTemplate;
        /**
         * 选项集
         * @param cls 子级选项Class类
         * @param dataListType 子级选项数据类型
         * @param count 子级选项的个数
         * @param complete 执行函数
         */
        options(cls: any, dataListType: number, count: number, complete?: Function): JTPipelineTemplate;
        /**
         * 启动
         * @param settings 启动的设置
         */
        launch(settings?: JTScrollerSettings): void;
        /**
         * 启动元素单位
         * @param value 索引值
         * @param index
         * @param count 总个数
         */
        launchItem(value: number, index: number, count: number): void;
        /**
         *
         * @param settings
         */
        launchItemsBySequence(settings: JTScrollerSettings): void;
        /**
         * 启动元素单位列表
         * @param ids  id列表
         */
        launchItems(ids: any[], settings: JTScrollerSettings): void;
        /**
         * 设定一次挂起的任务计划， 当要结算挂起继续执行任务时调用continuePendingTask
         */
        setOncePendingSchedule(): void;
        rendersDataReady(): void;
        /**
         * 继续挂起的任务
         */
        continuePendingTask(): void;
        /**
         * 背景填充
         */
        backgroundFill(): void;
        /**
         * 停止所有
         * @param isTween
         */
        stopAll(isTween?: boolean): void;
        /**
         * 清理皮肤加载器列表
         */
        clearSkinLoaders(): void;
        /**
         * 清除滚轴所有皮肤
         */
        clearGroupSkinLoaders(): void;
        /**
         * 单个停止
         * @param index 单个元素的索引
         * @param isTween
         */
        stop(index: number, isTween?: boolean): void;
        /**
         * 绑定
         * @param owner 绑定的拥有者
         * @param caller 绑定的域
         */
        bind(owner: JTContainer, caller: any): void;
        /**
         * 开始
         * @param speed 速度
         * @param delay 延迟
         * @param time 运行时间
         * @param distance 回弹距离
         * @param beginTime 回弹时间
         */
        start(speed: number, delay?: number, time?: number, distance?: number, beginTime?: number, endDelayTime?: number, endDistance?: number, endTime?: number, endSpeed?: number, endSlowDownTime?: number, beginSpeed?: number, beginSpeedUpTime?: number): void;
        /**
         * 运行后增加额外运行时间,仅本次生效
         * @param time 单位 毫秒
         */
        addRunningTime(time: number): void;
        /**
         * 重置
         */
        reset(): void;
        /**
         * 获取转换列表（一维数组转换成二维数组）
         * @param values 列表
         * @param count 单个（以多少为单位进行转换）
         */
        getConvertToList(values: any[], count: number): any[];
        /**
         * 通过索引获取渲染器,index从1开始
         * @param index 渲染器索引
         */
        getRenderByIndex(index: number): JTItemRender;
        /**
         * 通过索引获取渲染器,index从0开始
         * @param index 渲染器索引
         */
        getRenderByPos(index: number): JTItemRender;
        /**
         * 通过ID获取一样的itemRender列表
         * @param id 渲染器ID
         */
        getSomesById(id: number): JTItemRender[];
        /**
         * 通过ID获取改变过后一样的渲染器列表
         * @param id 渲染器ID
         */
        getSomeChangedById(id: number): JTItemRender[];
        /**
         * 激活某个状态（帧）
         * @param frame 状态（帧）
         */
        enableds(frame?: number): void;
        /**
         * 强制刷新数据
         * 调用此方法，必须是滚轴完全初始化完成，并且在停止状态使用
         * @param dataList 数据列表
         */
        forceUpdate(dataList: any[]): void;
        /**
         * 获取随机ID
         */
        getRondomId(): number;
        /**
         * 创建
         */
        create(): void;
        /**
         * 创建滚轴列表
         */
        protected createScrollers(): void;
        /**
         * 创建滚轴通道
         * @param  s  滚轴
         * @param i  滚轴索引
         */
        protected setupScrollerPipeline(s: JTScroller, i: number): JTFuturePipeline;
        /**
         * 初始化层级
         */
        protected initializeLayer(): void;
        protected afterInitializeLayer(): void;
        protected beforeStart(): void;
        /**
         * 安装选项集
         * @param pipeline 通道
         * @param options 选项数组
         */
        protected setupOptions(pipeline: JTTaskPipeline, options: SDictionary): void;
        /**
         * 父级的滚动完成函数
         */
        superScrollerComplete(): void;
        /**
         * 滚动完成函数
         */
        scrollingComplete(): void;
        removeRunnings(s: JTScroller): void;
        /**
         * 通过规则任务类型 获取规则任务壳
         * @param type 规则任务类型
         */
        getRuleContainer(type: string): JTTask;
        /**
         * 当前规则任务是否正在运行
         * @param apt 规则任务
         */
        hasOwnRunning(apt: JTTask): boolean;
        /**
        * 通过规则任务类型获取规则任务
        * @param type 规则任务类型
        */
        getRuleTask(type: string): JTTask;
        /**滚轴是否正在加速中*/
        get isScrollOnSpeedRunning(): boolean;
        /**
         * 注册规则任务
         * @param type 规则任务类型
         * @param task 规则任务对象
         * @param container 规则任务壳
         */
        registerTask(type: string, task: JTTask, container?: JTTask): JTRuleTaskManager;
        /**
         * 运行一些需要初始化的操作（比如百搭重转，1*3的时候，未转完的时候下次登陆需要继续回到1*3的状态）
         */
        runningCallTask(): void;
        /**
         * 通过规则任务类型移除规则任务
         * @param type 规则任务类型
         */
        removeRuleTask(type: string): void;
        /**
         * 运行规则任务
         * 在开始的时候会把所有注册规则任务执行一下遍
         * 调用任务的runningTask（）方法
         */
        runningRuleTasks(): void;
        /**
         * 规则任务历史记录
         */
        get histroys(): JTTask[];
        /**
         * 规则任务管理器
         */
        get ruleTaskManager(): JTRuleTaskManager;
        /**
         * 重新更新有效渲染器列表
         */
        updateRenders(): JTItemSkinLoader[];
        /**
         * 用changeData刷新滚轴
         */
        refreshScrollers(): void;
        linkSyncItems(indexs: number[]): void;
        /**
         * 空闲运行列表
         */
        get freeList(): JTItemSkinLoader[];
        /**
         * 空闲运行列表
         */
        set freeList(value: JTItemSkinLoader[]);
        /**
         * 正在运行列表
         */
        get runnings(): JTItemSkinLoader[];
        /**
         * 正在运行列表
         */
        set runnings(value: JTItemSkinLoader[]);
        /**
         * 有效渲染器中心坐标Map数组
         */
        get centerMapLandscape(): Object;
        /**
         * 有效渲染器中心坐标Map数组
         */
        get centerMapPortrait(): Object;
        /**
         * 有效渲染器初始化坐标Map数组
         */
        get pointMapLandscape(): Object;
        /**
         * 有效渲染器初始化坐标Map数组
         */
        get pointMapPortrait(): Object;
        /**
         * 静态有效渲染器中心坐标Map数组
         */
        get staticCenterMapLandscape(): Object;
        /**
         * 静态有效渲染器中心坐标Map数组
         */
        get staticCenterMapPortrait(): Object;
        /**
         * 通过渲染器ID，匹配ID和指定渲染器个数 获取匹配连续渲染器列表
         * @param id 渲染器ID
         * @param matchId 匹配ID
         * @param count 指定渲染器个数
         */
        getMatchingContinueByIds(id: number, matchId: number[], count: number): JTItemRender[];
        /**
         * 通过渲染器id获取连续的渲染器列表
         * @param id 渲染器id
         * @param count 渲染器个数
         */
        getContinueByIds(id: number, count: number): JTItemRender[];
        /**
         * 通过渲染器索引获取渲染器中心点坐标
         * @param index 渲染器索引
         */
        getRenderCenterPoint(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器中心点坐标
         * @param index 渲染器索引
         */
        getRenderCenterPointLandscape(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器中心点坐标
         * @param index 渲染器索引
         */
        getRenderCenterPointPortrait(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器坐标
         * @param index 渲染器索引
         */
        getRenderPoint(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器坐标
         * @param index 渲染器索引
         */
        getRenderPointLandscape(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器坐标
         * @param index 渲染器索引
         */
        getRenderPointPortrait(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器中心点坐标
         * @param index 渲染器索引
         */
        getRenderStaticCenterPointLandscape(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器中心点坐标
         * @param index 渲染器索引
         */
        getRenderStaticCenterPointPortrait(index: number): cc.Vec2;
        /**
         * 通过渲染器索引获取渲染器中心点坐标
         * @param index 渲染器索引
         */
        getRenderStaticCenterPoint(index: number): cc.Vec2;
        /**
         * 获取滚轴组当前通道管道
         */
        get channelPipeline(): JTChannelPipeline;
        /**
         * 改变单个滚轴的属性的值
         * @param property 属性名
         * @param value 属性名
         */
        changeRenderValue(property: string, value: any): void;
        /**
         * 更新改变子显示对像列表的层级
         * @param childs 子级列表
         * @param isUpdate 是否马上更新层级
         */
        updateChangedChildsLayer(childs: JTItemSkinLoader[], isUpdate?: boolean): void;
        /**
         * 更新层
         * @param group
         */
        updateLayer(group?: JTGroup): void;
        /**
         * 还原层级排序
         */
        resetLayerSort(): void;
        isRenderInSortLayer(r: JTItemRender): boolean;
        /**
         * 调整滚轴坐标
         * @param index 滚轴索引
         * @param offset 偏移量
         */
        adjustScrollerPostion(index: number, offset: cc.Vec2): void;
        /**
         * 设置滚轴列的倾斜度,为斜边与水平线逆时针的夹角，垂直为90，向右倾小于90，向左倾大于90
         * 如填入参数[87,90,93]则会依次设定1，2，3列的倾斜角度为87,90,93
         * @param inclineDegrees
         * @param isSkew 元素是否设置skew倾斜
         */
        setupItemInclineDegrees(inclineDegrees: number[], isSkew?: boolean): void;
        /**
         * 设置滚轴列的弧度角度，指列的上下边缘与滚轴中心形成的夹角的度数，若垂直填0
         * 如填入参数[120,0,-120]则会依次设定1，2，3列的倾斜角度为120,0,-120
         * @param curveDegrees
         */
        setupItemCurve(curveDegrees: number[]): void;
        /**
         * 设置格子矩阵，0代表无元素，1代表有元素
        * 示例
        * [
        *  [0,1,1],[1,1,1],[0,1,1],[1,1,1],[0,1,1]
        * ]
         * @param gridRenderConfig 格子渲染器矩阵配置
         */
        setupGridRenderConfig(gridRenderConfig: number[][]): void;
        get gridRenderConfig(): number[][];
        /**
         * 设定格子图形
         * @param gridShape 格子渲染器矩阵配置
         */
        setupGridShape(gridShape: number[][]): void;
        /**
         * 层级工厂
         */
        get factoryLayer(): JTFactory;
        /**
        * 子级工厂
        */
        get factoryChild(): JTFactory;
        /**
         * 数据模型工厂
         */
        get factoryModel(): JTFactory;
        /**
         * 皮肤列表
         */
        get skinLoaders(): JTGLoader[];
        /**
         * 中奖渲染器层级排序容器
         */
        get layerSortPlayContainer(): JTLayerSortContainer;
        /**
         * 未中奖渲染器层级排序容器
         */
        get layerSortStopContainer(): JTLayerSortContainer;
        get layerSortScatterPlayContainer(): JTLayerSortContainer;
        get layerSortScatterStopContainer(): JTLayerSortContainer;
        /**
         * 皮肤列表
         */
        set skinLoaders(value: JTGLoader[]);
        /**
         * 默认皮肤列表容器
         */
        get skinLoaderContainer(): JTGComponent;
        /**
         * 默认皮肤列表容器
         */
        set skinLoaderContainer(value: JTGComponent);
        /**
         * 规则任务壳Map数组
         */
        get ruleMap(): SDictionary;
        /**
         * 规则任务壳列表
         */
        get taskContainers(): JTTaskContainer[];
        /**
         * 滚轴容器
         */
        get scrollerContainer(): JTContainer;
        /**
         * 默认的ID列表
         */
        get defaultImageIds(): any[];
        /**
         * 滚轴的遮罩容器
         */
        get scrollerGroupMask(): JTScrollerGroupMask;
        /**
        * 关联的gameID
        */
        get gameID(): number;
        /**
         * 关联的gameID
         */
        set gameID(vaule: number);
        /**
        * 关联的gameID
        */
        get freeSources(): any[];
        /**
         * 关联的gameID
         */
        set freeSources(vaule: any[]);
        /**
       * 关联的gameID
        */
        get defaultSources(): any[];
        /**
         * 关联的gameID
         */
        set defaultSources(vaule: any[]);
        /**
        * 关联的gameID
        */
        get itemOffsets(): cc.Vec2[];
        /**
         * 关联的gameID
         */
        set itemOffsets(vaule: cc.Vec2[]);
        /**
         * 滚轴容器
         */
        get pluginContainer(): JTContainer;
        /**
        *
        */
        get isSkipChangeTask(): boolean;
        /**
         *
         */
        set isSkipChangeTask(vaule: boolean);
        /**
        *
        */
        get inclineDegrees(): number[];
        /**
         *
         */
        set inclineDegrees(vaule: number[]);
        /**
        *  滚轴列是否倾斜的
        */
        get isIncline(): boolean;
        /**
         *
         */
        set isIncline(vaule: boolean);
        /**
        *  滚轴列是否倾斜的
        */
        get isInclineSkew(): boolean;
        /**
        *
        */
        get curveDegrees(): number[];
        /**
         *
         */
        set curveDegrees(vaule: number[]);
        /**
        *  滚轴列是带弯曲的
        */
        get isCurve(): boolean;
        /**
         *
         */
        set isCurve(vaule: boolean);
        /**
        *  滚轴列是带弯曲的
        */
        get expandScrollerInfo(): JTExpandScrollerInfo[];
        /**
         *
         */
        set expandScrollerInfo(vaule: JTExpandScrollerInfo[]);
        get itemContainers(): JTGComponent[];
        _isManualStopEnabled: boolean;
        /**
         * 能否手动停止滚轴
         */
        get isManualStopEnabled(): boolean;
        set isManualStopEnabled(v: boolean);
        /**
         *
         */
        get gridLengthRange(): any;
        set gridLengthRange(v: any);
        /**
         *
         */
        get subgroupConfigs(): JTSubgroupConfig[];
        set subgroupConfigs(v: JTSubgroupConfig[]);
        layoutLandscape(): void;
        layoutPortrait(): void;
        /**忽略画格子数据 */
        private _ignoreShowGridData;
        get ignoreShowGridData(): any;
        /**
        *设置忽略元素data显示格子框
        * @param data 可以填单个数字 也可以填数字数组[]
        */
        set ignoreShowGridData(data: any);
    }
    class JTSubgroupConfig {
        subgroupId: number;
        indexs: number[];
    }
    export class JTControlScrollerGroup extends JTScrollerGroup {
        /**
         * 发送回调
         */
        protected _sendCall: Function;
        /**
         * 停止回调
         */
        protected _stopCall: Function;
        /**
         * 是否鼠标按下
         */
        protected _isMouseDown: boolean;
        /**
         * 起始坐标点
         */
        protected startPoint: cc.Vec2;
        private _maskPolygon;
        private _mutipleMaskPolygon;
        constructor();
        /**
         * 设置单个遮罩多边形
         * @param points
         */
        setupMaskPolygon(points: cc.Vec2[]): void;
        get maskPolygon(): cc.Vec2[];
        /**
        * 设置多个遮罩多边形,设定多个多边形的点坐标
        * @param points
        */
        setupMutipleMaskPolygon(points: cc.Vec2[][]): void;
        get mutipleMaskPolygon(): cc.Vec2[][];
        /**
         * 注册鼠标控制函数
         * @param stopCall 滚轴停止的函数
         * @param sendCall 滚轴运行的函数
         */
        registerControl(stopCall: Function, sendCall: Function, clckRect: cc.Node): void;
        /**
         * 鼠标弹起函数
         * @param e
         */
        onMouseUpHandler(e: cc.Event.EventTouch): void;
        /**
         * 鼠标按下
         * @param e
         */
        onMouseDownHandler(e: cc.Event.EventTouch): void;
        /**
         * 鼠标单击的函数
         * @param e
         */
        onMouseClickHandler(e: cc.Event.EventTouch): void;
        /**
         * 键盘按下函数
         * @param e
         */
        onKeypressHandler(e: cc.Event.EventKeyboard): void;
        checkTouchPolygon(e: cc.Event.EventTouch): boolean;
    }
    export class JTBlackBackGround extends JTContainer {
        graphics: cc.Graphics;
        private points;
        private defalutColor;
        constructor();
        /**
         * 设定尺寸及透明度
         * @param width
         * @param height
         * @param alpha
         */
        setup(width: number, height: number, alpha?: number, color?: cc.Color): void;
        /**
         * 设定多边形黑色蒙板
         */
        setPolygon(points: cc.Vec2[]): void;
        private drawPolygon;
        private _alpha;
        set alpha(v: number);
        private drawRect;
        redraw(): void;
        get alpha(): number;
    }
    export class JTEffectContainer extends JTContainer {
        private childLayoutMap;
        constructor();
        onChildRemoved(): void;
        setupChild(child: cc.Node, landscapeX: number, landscapeY: number, portraitX: number, portraitY: number): void;
        resetChildrensPosition(): void;
    }
    export class JTParseTask extends JTTaskFlow {
        /**
         * 线解析器
         */
        protected lineParser: JTScrollerLineParser;
        constructor();
        /**
         * 运行任务（用于检查是否满足某种特定的任务）
         * 重写此方法可以针对任务特殊任务进行检测判断
         */
        runningTask(): void;
        /**
         * 完成调度
         */
        complete(): void;
        /**
         * 获取线解析器
         */
        getLineParser(): JTScrollerLineParser;
        getScrollerGroup(): JTLineScrollerGroup;
        /**
         * 获取线结果
         */
        getLineResults(): any[];
    }
    /**
* 整列的持续百搭,从免费游戏开始到结束保持状态
*/
    export class JTRetainWildTask extends JTRuleTask {
        private state;
        private configs;
        private curConfig;
        constructor();
        private onFreeGameInit;
        private treateNewFreeGame;
        private treateFreeGameOver;
        runningTask(): boolean;
        /**
         *
         * @param id 变成百搭的id
         * @param condition 暂时不用
         * @param wildIndexs 要变成整列百搭的索引列表
         * @param startCall 开始变百搭的回调
         * @param skinURL 变成百搭的资源
         * @param scrollDelay 触发变百搭多少秒开始滚动
         * @param showWildDelay 多少秒后百搭显示
         */
        config(id: any, condition: any, wildIndexs: number[], skinURL: string, startCall?: Function, scrollDelay?: number, showWildDelay?: number): void;
        setupWildScroller(s: JTScroller): void;
        checkPlayLineItem(rs: JTItemRender[]): void;
        checkStart(): boolean;
        retainWildStart(handler: Handler): void;
    }
    export class JTRetainWildConfig {
        id: any;
        condition: any;
        skinURL: string;
        scrollDelay: number;
        showWildDelay: number;
        startCall: Function;
        wildIndexs: number[];
    }
    export class JTDynamicCombineTask extends JTRuleTask {
        /**
         * 合并的列
         */
        private combineIndexs;
        private mainIndex;
        private staticIndexs;
        private urlPrefix;
        private additionTime;
        gridHeight: number;
        gridWidth: number;
        gapX: number;
        gapY: number;
        private elementChangeCall;
        private elementSplitCall;
        private elementChangeDelay;
        private elementSplitDelay;
        private isOnce;
        private isTreatFree;
        private isTreateFreeOver;
        isEnabled: boolean;
        constructor();
        /**
         * 进游戏或重连时，重置状态
         */
        private onFreeGameInit;
        private treateNewFreeGame;
        private treateFreeGameOver;
        /**
         *
         * @param combineIndexs 要合并的滚轴列索引
         * @param urlPrefix 合并后的滚轴元素的资源名字为正常元素名加上此参数前缀，如big_,则合并元素资源名为big_01,big_01_fade等
         * @param gridWidth 合并后的滚轴宽
         * @param gridHeight 合并后的滚轴高
         * @param gapX 合并后的x间距
         * @param gapY 合并后的y间距
         * @param additionTime 合并后的滚轴需延长滚动的时间 以毫米为单位
         * @param elementChangeCall 元素改变时的回调
         * @param elementSplitCall 元素连线时分裂时的回调
         * @param elementChangeDelay 元素改变回调的延时
         * @param elementSplitDelay 元素连线时分裂时的延时
         * @param defaultDataList  变大元素的假滚轴列表
         */
        config(combineIndexs: number[], urlPrefix: string, gridWidth: number, gridHeight: number, gapX: number, gapY: number, additionTime: number, elementChangeCall?: Function, elementSplitCall?: Function, elementChangeDelay?: number, elementSplitDelay?: number, defaultDataList?: number[]): void;
        registerComplete(): void;
        runningTask(): boolean;
        changeDefaultDataList(): void;
        isCombineScroller(s: JTScroller): boolean;
        isNeedStart(): boolean;
        beforeStartRun(handler: Handler): void;
        setupScroller(s: JTScroller): boolean;
        resetRenders(s: JTScroller): void;
        isNeedUpdateRenders(lineRenders: BaseSpinSlotView[]): boolean;
        updateRendersBeforeLoopLine(lineRenders: BaseSpinSlotView[], handler: Handler): void;
        private refreshStaticRenders;
        /**
         * 随机的元素选择表现完成,子游戏主动调用
         * @param id
         * @param initial
         */
        chooseElementComplete(id: number, initial?: boolean): void;
    }
    /**
* 滚动前的前置任务
*/
    export class JTAdvanceTask extends JTRuleTask {
        private startConditionCall;
        private startCall;
        /**
         *
         * @param startConditionCall 前置任务的开始条件，子游戏返回true或false，true才执行startCall
         * @param startCall 前置任务的回调 将传入一个handler，子项目执行handler.run才开始滚动
         */
        config(startConditionCall: Function, startCall: Function): void;
        checkStart(): boolean;
        start(handler: Handler): void;
    }
    export class JTChangeSpeedTask extends JTRuleTask {
        private rangeMin;
        private rangeMax;
        private rangeValue;
        static SLOW_VELOCITY: number;
        static FAST_VELOCITY: number;
        static DEFAULT_VELOCITY: number;
        private tween;
        private _runnnigInfotMap;
        constructor();
        /**
         *
         * @param rangeMin 最小速度
         * @param rangeMax 最大速度
         * @param rangeValue 加速度
         * @param time 运行时间
         */
        config(rangeMin: number, rangeMax: number, rangeValue: number, time: number, tween: cc.Tween): void;
        /**
         * 开始改变速度任务
         * @param index 列的索引
         */
        startChangeSpeed(index: number): void;
        updateTime(s: JTScroller): boolean;
        onRunningSpeedUp(s: JTScroller): boolean;
        onRunningSlowdown(s: JTScroller): boolean;
        getChangeSpeedInfo(index: number): JTChangeSpeedRunningInfo;
        onScrollingOver(s: JTScroller, call: Function): boolean;
        clear(): void;
    }
    class JTChangeSpeedRunningInfo {
        velocity: Object;
        runningTime: number;
        time: number;
        step: number;
        currentStep: number;
    }
    export class JTScrollingPipeline extends JTScheduledPipeline {
        lineTime: cc.Tween;
        scatterRule: JTScatterTask;
        dynamicWild: JTDynamicWildTask;
        onceWild: JTOnceWildTask;
        combineRule: JTCombineTask;
        retainWild: JTRetainWildTask;
        dynamicCombine: JTDynamicCombineTask;
        advanceTask: JTAdvanceTask;
        changeSpeed: JTChangeSpeedTask;
        constructor();
        start(): void;
        onDataStandBy(): void;
        clear(): void;
        updateRenders(): void;
        getConfig(): {
            gapHeight: number;
            girdHeight: number;
        };
        lineTimeComplete(useChangeData?: boolean): void;
        setRenderBeforeComplete(render: JTItemRender): boolean;
        /**
         *
         * @returns 横竖切换及层级还原时调用
         */
        updateRenderPosition(): void;
        /**
    * 重新设置有效渲染器，主要用于滚动介绍时零高度格子的坐标计算
    */
        resetRenderPoints(): void;
        /**
         * 设置元素的倾斜
         * @param render
         * @returns
         */
        adjustItemIncline(render: JTItemRender): number;
        getItemInclineProperty(y: number): {
            offsetX: number;
            skewX: number;
        };
        adjustItemCurve(render: JTItemRender): void;
    }
    export class JTCombineTask extends JTRuleTask {
        /**
         * 合并的列
         */
        private combineIndexs;
        private showScollerIndex;
        private urlPrefix;
        private reduceTime;
        gridHeight: number;
        gridWidth: number;
        gapX: number;
        gapY: number;
        private combineStartCall;
        private combineEndCall;
        private hideItemIndexs;
        combineState: JTCombineState;
        constructor();
        /**
         * 进游戏或重连时，重置状态
         */
        private onFreeGameInit;
        private treateNewFreeGame;
        private treateFreeGameOver;
        /**
         *
         * @param condition 条件，暂时无用，保留参数
         * @param combineIndexs 要合并的滚轴列索引
         * @param urlPrefix 合并后的滚轴元素的资源名字为正常元素名加上此参数前缀，如big_,则合并元素资源名为big_01,big_01_fade等
         * @param gridWidth 合并后的滚轴宽
         * @param gridHeight 合并后的滚轴高
         * @param gapX 合并后的x间距
         * @param gapY 合并后的y间距
         * @param reduceTime 合并滚轴滚动要缩短的时间 以毫米为单位
         * @param combineStartCall 合并开始时的回调
         * @param combineEndCall 合并完结分裂时的回调
         */
        config(condition: any, combineIndexs: number[], urlPrefix: string, gridWidth: number, gridHeight: number, gapX: number, gapY: number, reduceTime: number, combineStartCall?: Function, combineEndCall?: Function): void;
        runningTask(): boolean;
        private setPlayItemsConfig;
        setupCombineScroller(s: JTScroller): void;
        resetRenders(s: JTScroller): void;
        checkStart(): boolean;
        checkCanPlayLine(): boolean;
        checkPlayLineItem(rs: JTItemRender[]): void;
        runStartCombine(handler: Handler): void;
        combineComplete(handler: Handler): void;
        isCombineIndexInRunnnig(s: JTScroller): boolean;
        isCombineIndexInOver(s: JTScroller): boolean;
        isInHide(s: JTScroller): boolean;
        clear(): void;
    }
    export enum JTCombineState {
        None = 0,
        TurnStay = 1,
        Stay = 2,
        TurnNone = 3
    }
    export class JTConvertPlayLines extends JTParseTask {
        constructor();
        /**
         * 运行检测当前中奖线是哪一种玩法，并按其玩法转换成相应的渲染器列表
         */
        runningTask(): void;
        private generateSpecialLine;
        /**
         * 返回特殊的中奖元素数组，组成一条独立的中奖线
         */
        protected getSpecialLineRenders?(): BaseSpinSlotView[];
        /**
         * 修改已查找到的播放元素
         * @param rs 已查找到的一条线的中奖元素列表，可通过删除此数组的元素或添加元素到数组中实现
         * @param lineInfo 线数据
         */
        protected changeRenders?(rs: BaseSpinSlotView[], lineInfo?: RollingResult): any;
        protected enableds(): void;
    }
    export class JTComboTask extends JTParseTask {
        /**
         * 需要观察的连续ID的列表
         */
        protected ids: any[];
        /**
         * 连续ID的个数
         */
        protected count: number;
        /**
         * 任务线（当前中奖满足几种情况）
         */
        protected taskLines: any[];
        constructor();
        /**
         * 运行检查是否满足任务条件
         *
         */
        runningTask(): void;
        /**
         * 开始执行任务
         */
        executeTask(): void;
        protected sortOn(a: RollingResult, b: RollingResult): number;
        /**
         * 注册观察任务
         * @param id 连续的ID列表，可以是单个数字ID或才数组的形式
         * @param count 连续ID的个数
         */
        registerWatchTask(id: any, count: number): void;
    }
    export class JT3ComboTask extends JTComboTask {
        constructor();
    }
    /**
     * 声音管理类,封装了一些播放和暂停的方法函数
     */
    export class SoundMger {
        private static _instance;
        private path;
        private pathCom;
        private path_slot_common;
        private local;
        static get instance(): SoundMger;
        private effectVolume;
        private voiceVolume;
        private musicVolume;
        get bundleName(): string;
        getClipByPath(effectName: string): game.SoundVO | game.SoundVO[];
        /**
         * 播放音效
         * @param effectName 音效路径，bundle的sounds文件夹下面
         * @param loop 是否循环
         * @param isSpecial (该字段实现逻辑已废弃) 是否特殊音乐（可能捕猎一些长音效）
         * @param loadfinish 加载完成的回调
         * @param playHandle 播放完成的回调
         * @param volume 原始音量最大值,默认值100（0，100）
         * @returns
         */
        playEffect(effectName: string, loop?: boolean, isSpecial?: boolean, loadfinish?: Function, playHandle?: Function, volume?: number): boolean;
        /**
         * 强制播放音效
         * @param effectName
         * @param loop
         * @returns
         */
        enforcePlayEffect(effectName: string, loop?: boolean): void;
        /**
         * 设置指定单个音乐的音量大小
         * @param path 音效路径
         * @param volume 音量大小（值范围：[0,1]，当某个音乐不想被总开关控制，例如需要同步音轨，可以设置成game.SoundManager.IGNORE_VOLUME）
         */
        setSingleMusicVolume(musicName: string, volume: number): void;
        /**
         * 设置指定单个音效的音量大小
         * @param path 音效资源名 （在"sounds/"文件夹下）
         * @param volume 音量大小（值范围：[0,1]，当某个音效不想被总开关控制，例如需要同步音轨，可以设置成game.SoundManager.IGNORE_VOLUME）
         */
        setSingleEffectVolume(effectName: string, volume: number): void;
        /**
         * 播放公共音效
        * @param effectName — 音效名称，路径存放在sound下sound文件夹下面
        * @param loop — 是否循环
        * @param isSpecial — 是否特殊音乐（可能捕猎一些长音效）
        * @param playHandle — 加载完成的回调
        */
        playEffectCommon(effectName: string, loop?: boolean, loadfinish?: Function, playHandle?: Function): void;
        playEffectSlotCommon(effectName: string, loop?: boolean, loadfinish?: Function, playHandle?: Function): void;
        stopEffectSlotCommon(effectName: string): void;
        playMusicSlotCommon(musicName: string, loop?: boolean, endFunc?: Function, loadFunc?: Function, isStopPrev?: boolean): void;
        stopMusicSlotCommon(musicName: string): void;
        /**
        * 播放背景音乐
        * @param musicName 音乐名称，路径存放在resources下sounds文件夹下面
        * @param loop 是否循环播放
        * @param endFunc 播放结束后的回调 可选
        * @param loadFunc 加载完成的回调  可选
        * @param isStopPrev 是否停止之前的背景音乐（默认停止，只有一个背景音乐）
        */
        playMusic(musicName: string, loop?: boolean, endFunc?: Function, loadFunc?: Function, isStopPrev?: boolean): void;
        /**
         * 停止背景音乐 停止后会自动切换之前的bgm
         * @param musicName bgm名称
         */
        stopMusic(musicName: string): void;
        /**
        * 播放背景音乐
        * @param musicName 音乐名称，路径存放在resources下sounds文件夹下面
        * @param loop 是否循环播放
        * @param endFunc 播放结束后的回调 可选
        * @param loadFunc 加载完成的回调  可选
        * @param isStopPrev 是否停止之前的背景音乐（默认停止，只有一个背景音乐）
        */
        playMusicCommon(musicName: string, loop?: boolean, endFunc?: Function, loadFunc?: Function, isStopPrev?: boolean): void;
        /**
         * 停止背景音乐 停止后会自动切换之前的bgm
         * @param musicName bgm名称
         */
        stopMusicCommon(musicName: string): void;
        /**
         * 暂停当前背景音乐
         */
        pauseCurMusic(): void;
        /**
         * 恢复当前背景音乐
         */
        resumeCurMusic(): void;
        /**
        * 暂停背景音乐
        * @param musicName 音乐名称，路径存放在resources下sounds文件夹下面
        */
        pauseMusic(musicName?: string): void;
        /**
        * 恢复背景音乐
        * @param musicName 音乐名称，路径存放在resources下sounds文件夹下面
        */
        resumeMusic(musicName?: string): void;
        /**
         * 停止某个音效
         * @param effectName 音效名称，路径存放在resources下sounds文件夹下面
         */
        stopEffect(effectName: string): void;
        /**
        * 停止某个公共音效
        * @param effectName 音效名称，路径存放在sound下sound文件夹下面
        */
        stopEffectCommon(effectName: string): void;
        /**
         * 暂停某个音效
         * @param effectName 音效名称，路径存放在resources下sounds文件夹下面
         */
        pauseEffect(effectName: string): void;
        /**
         * 恢复某个音效
         * @param effectName 音效名称，路径存放在resources下sounds文件夹下面
         */
        resumeEffect(effectName: string): void;
        /**
         * 暂停所有背景音乐
         */
        pauseAllMusic(): void;
        /**
         * 恢复所有背景音乐
         */
        resumeAllMusic(): void;
        /**
         * 暂停所有音效
         */
        pauseAllEffect(): void;
        /**
         * 恢复所有音效
         */
        resumeAllEffect(): void;
        /**
         * 暂停所有音效和背景音乐
         */
        pauseAll(): void;
        /**
         * 恢复所有音效和背景音乐
         */
        resumeAll(): void;
    }
    export class JTGlobalDisplayLines extends JTParseTask {
        constructor();
        addEventListenner(): void;
        /**
         * 运行任务
         */
        runningTask(): void;
        /**
         * 在播总展示时同时播其他表现（如无总展示，此函数不执行），返回运行时间,单位为秒
         */
        protected runningExtendPerfomance?(): number;
        /**
         * 获取播放总展示时，延时播放大奖和普通奖的时间，返回时间单位为秒
         */
        protected getDelayPlayRewardTime?(): number;
        protected intervalComplete(interval: number): void;
        /**
         * 清除
         */
        clear(): void;
        /**
         * 播放完成调度
         */
        protected playComplete(): void;
    }
    export class JTLineMode {
        /**
         * 正常模式
         */
        static MODE_NORMAL: number;
        /**
         * 免费模式
         */
        static MODE_FREE: number;
    }
    export class JTLoopDisplayLines extends JTParseTask {
        protected _scroller: JTLineScrollerGroup;
        /**
         * 中奖需要轮播的线数组
         */
        protected _playLineMap: SDictionary;
        /**
         * 当前播放哪个线
         * 播放点
         */
        protected linePosition: number;
        /**
         * 中奖线列表
         */
        protected lineList: JTLineInfo[];
        /**
         * 中奖一条线时，只播放一次中奖线音效
         */
        private isFristPlaySound;
        private skipTask;
        private interval;
        constructor();
        private skipLoopLine;
        /**
         * 运行任务
         */
        runningTask(): void;
        /**
         * 过滤线 可以扩展
         */
        protected filterLine(): void;
        protected sortOn(a: JTLineInfo, b: JTLineInfo): number;
        complete(): void;
        /**
         * 清理轮播
         */
        clear(): void;
        /**
         * 循环赢的线
         */
        protected loopWinLine(): void;
        /**
         *
         * @param index 切换图片效果
         */
        private onChangedImageTimer;
    }
    export class JTScheduledTaskPipeline extends JTTaskPipeline {
        scroller: JTScroller;
        ruleTaskManager: JTRuleTaskManager;
        getObject(type: number, caller: JTContainer): JTContainer;
        scrollerGroup: JTScrollerGroup;
        contact(s: JTGroup): void;
        getRuleContainer(type: string): JTTask;
        hasOwnRunning(container: JTTask): boolean;
        getRuleTask(type: string): JTTask;
        registerTask(type: string, task: JTTask, container?: JTTask): JTRuleTaskManager;
        removeRuleTask(type: string): void;
        runningRuleTasks(): void;
        runningCallTask(): void;
        histroys: JTTask[];
        ruleMap: SDictionary;
        taskContainers: JTTaskContainer[];
        /**
         * 任务列表
         */
        protected tasks: JTTask[];
        /**
         * 工作线列表
         */
        protected workLines: JTTask[];
        /**
         * 当前任务
         */
        protected currentTask: JTTask;
        /**
             * 渲染器列表
             */
        renders: JTItemSkinLoader[];
        /**
         * point Map数组
         */
        pointMap: Object;
        /**
         * 中心点 数组
         */
        centerMap: Object;
        /**
         * 索引列表
         */
        indexs: any[];
        /**
         * 是否创建
         */
        isCreate: boolean;
        /**
         * 滚轴的原始X坐标
         */
        sourceX: number;
        /**
         * 滚轴的原始Y坐标
         */
        sourceY: number;
        /**
         * 滚轴里的渲染器列表
         */
        items: JTItemSkinLoader[];
        constructor();
        updateRenders(): void;
        getCounterIndex(): number;
        /**
         * 装载真实有效的渲染器
         */
        setupRender(render: JTItemRender): void;
        /**
         * 设置滚轴的X和Y坐标
         * x 滚轴的x坐标
         * y 滚轴的y坐标
         */
        setScrollerXY(x?: number, y?: number): void;
        /**
         * 转换数据之前的回调函数
         */
        beforeStart(): void;
        /**
         * 运行任务
         */
        runningTask(): void;
        /**
         * 子级选项
         * @param task 任务
         * @param priority 优先级
         * @param complete 执行函数
         */
        childOption(task: any, priority: number, complete?: Function): void;
        /**
         * 当前任务
         */
        getCurrentTask(): JTTask;
        /**
         * 当前任务优先级
         */
        getCurrentPriority(): any;
        /**
         * 开始
         */
        start(): void;
        /**
        * 开始
        */
        startWithPrioritys(prioritys: number[]): void;
        /**
         * 获取任务列表
         */
        getTasks(): JTTask[];
        protected sortOn(a: number, b: number): number;
        /**
         * 完成时调度
         */
        complete(): void;
    }
    export abstract class JTPerformanceTask extends JTParseTask {
        /**
         *
         */
        protected steps: {
            eventName: string;
            args: any;
        }[];
        /**
         * 是否等待
         */
        protected pending: boolean;
        constructor();
        abstract addEventListenner(): void;
        /**
         *
         */
        runningTask(): void;
        protected isActive(): boolean;
        /**
         * 添加子任务,监听事件的方法需在最后加一个handler回调的参数并保证执行到
         * @param eventName 事件名
         * @param args 参数可带多个
         */
        addStepTask(eventName: string, ...args: any[]): void;
        /**
         * 检查队列中是否有子任务，如果有马上执行下一步，没有直接完成整个流程
         */
        nextStep(): void;
        complete(): void;
        clear(): void;
    }
    /**
 * bonusGame任务
 */
    export class JTBonusGameTask extends JTPerformanceTask {
        addEventListenner(): void;
        runningTask(): void;
        /**
         * 触发了bonus游戏时，等待小游戏主动完成才能结束此任务
         */
        private addBonusGameTrigger;
        private treateNextBonusGame;
        /**
         * 小游戏完成了，马上触发小游戏结束事件及添加大奖事件
         * @param event
         * @param bonusGameInfo
         */
        private addBonusGameOver;
        private resetScroller;
        complete(): void;
        clear(): void;
    }
    /**
 * 中奖动画
 */
    export class JTCommonRewardTask extends JTPerformanceTask {
        private playedNormalReward;
        addEventListenner(): void;
        clear(): void;
        private hadPlayNormalReward;
        runningTask(): void;
        caculate(): void;
    }
    /**
 * 免费游戏信息
 */
    export class FreeGameInfo {
        constructor(type: OperationState, raw: protoSlot.stateCommonType);
        /**
         *
         * @param updateList 原始数据(nextState) 或 一个更新列表
         */
        update(raw: protoSlot.stateCommonType): boolean;
        updateList(list: protoSlot.stateUpdateType[]): boolean;
        updateCommonInfo(normalData: protoSlot.normalStateType): void;
        clone(): FreeGameInfo;
        private _updateByNextState;
        /**
         *
         * @param {protocol.StateUpdateType} updateList
         */
        private _updateByUpdateList;
        triggeredTimes: number;
        /**
         * 类型
         */
        type: OperationState;
        /**
         * 免费游戏重连回来单轮总赢分
         */
        eachSumSpinCoin: number;
        /**
         * 通用状态的标识
         */
        id: number;
        /**
         * 免费次数
         */
        times: number;
        /**
         * 总共中了多少免费次数的总和
         */
        sumTimes: number;
        /**
         * 结果倍率
         */
        ratio: number;
        /**
         * 获取的额外的百搭
         */
        wild: number[];
        /**
         * 获取的额外的分散
         */
        scatter: number[];
        /**
         * 元素固定在的位置[{位置,元素,剩余次数}]"-1表示无限次"
         */
        elemFixPos: protoSlot.elemFixPosType[];
        /**
         * 扩展元素
         */
        elemExpand: number[];
        /**
         * 在此模式中旋转spin总的赢钱,无特殊需求用加上了免费中触发小游戏的赢赏的sumCoin代替
         */
        sumSpinCoin?: number;
        /**
         * 在此模式中小游戏总的赢钱
         */
        sumLgCoin?: number;
        /**
         * 触发此次免费游戏的普通转赢得钱
         */
        commonSpinCoin: number;
        /**
         * 触发此次免费游戏的JP奖池的奖赏
         */
        commonJpCoin: number;
        /**
         * 触发此次免费游戏的普通转的总奖赏
         */
        get commonSpinTotalCoin(): number;
        /**
         * 此次免费游戏中总共赢得钱，包括了在小游戏中赢得钱
         */
        get sumCoin(): number;
        /**
         * 免费中总赢赏和触发局赢赏的和（免费+触发局）
         */
        get sumCoinAndTrigger(): number;
        gameID: number;
        isAuthoritiesRate: boolean;
        lgHistory: protoSlot.lgResultType[];
        /**
         * 免费和重转的重叠时的交替史
         */
        stateHistory: number[];
        handleState: protoSlot.handleStateType;
        /**
         * 获取的额外百搭数量
         */
        wildNum: number;
        /**
         * 连赢次数
         */
        winStreakNum: number;
        /**
         * 元素随机替换位置
         */
        random: protoSlot.elemPosListType[];
        /**
         * 随机元素位置
         */
        randomElemPos: protoSlot.randomElemPosType[];
        /**
         * 累计固定位置
         */
        accFixGridList: protoSlot.gridType[];
    }
    /**
* 免费游戏结束
*/
    export class JTFreeGameOverTask extends JTPerformanceTask {
        /**
         * 免费游戏结束当局是否展示大奖动画
         */
        protected isNeedCaculateReward: boolean;
        protected freeGameInfo: FreeGameInfo;
        private stepsCache;
        addEventListenner(): void;
        runningTask(): void;
        /**
         * 为免费游戏结束那局，更新已存储的免费总结算的金币值
         * @param event
         * @param coin
         */
        private updateSumSpin;
        /**
         *
         */
        protected addFreeGameOver(event: string, freeGameInfo: FreeGameInfo): void;
        protected caculateFreeGameReward(freeGameInfo: FreeGameInfo): void;
    }
    /**
* 免费游戏触发
*/
    export class JTNewFreeGameTask extends JTPerformanceTask {
        private stepsCache;
        addEventListenner(): void;
        runningTask(): void;
        /**
         *
         */
        protected addFreeGameTrigger(event: string): void;
        protected addFreeGameTriggerAgain(event: string, freeGameInfo: FreeGameInfo): void;
        protected addFreeGameInfoUpdate(event: string, freeGameInfo: FreeGameInfo): void;
        complete(): void;
    }
    export class JTFullLineAniTask extends JTParseTask {
        /**
         * 列数满足的播放条件，目前只有5连及6连动画
         */
        protected fullLineCounts: number[];
        /**
         * 持续时间,以毫秒为单位，默认1500
         */
        protected duration: number;
        constructor();
        /**
         *
         *
         */
        runningTask(): void;
    }
    export class JTTrialGuide extends JTParseTask {
        constructor();
        /**
        * 运行任务
        */
        runningTask(): void;
        /**
         * 清除
         */
        clear(): void;
        /**
         * 播放完成调度
         */
        protected playComplete(): void;
    }
    export class JTUpLevelTask extends JTPerformanceTask {
        constructor();
        addEventListenner(): void;
        /**
         * 运行任务
         */
        runningTask(): void;
        private lvAwardInfoPush;
        complete(): void;
    }
    /**
 * 免费游戏中的部分表现，目前包含在大奖前表现的倍数加成奖励
 */
    export class JTFreeGameRewardTask extends JTPerformanceTask {
        addEventListenner(): void;
        runningTask(): void;
        private addUpdateGameInfoTask;
        private caculateRatioReward;
    }
    /**
 * 合并滚轴在免费游戏完结后的拆分
 */
    export class JTCombineOverTask extends JTPerformanceTask {
        private isTreateFreeOver;
        private combineRule;
        addEventListenner(): void;
        private getCombineRule;
        runningTask(): void;
        private treateFreeOver;
        private combineScollerSplit;
        complete(): void;
    }
    /**
 *
 */
    export class JTDynamicCombineSplit extends JTPerformanceTask {
        private dynamicCombine;
        addEventListenner(): void;
        private getCombineRule;
        runningTask(): void;
    }
    /**
 * 中奖动画
 */
    export class JTChangeGameTask extends JTPerformanceTask {
        addEventListenner(): void;
        protected isActive(): boolean;
        runningTask(): void;
    }
    export class JTEliminateScoreTask extends JTPerformanceTask {
        private ratio;
        addEventListenner(): void;
        private updateFreeRatio;
        runningTask(): void;
        complete(): void;
    }
    export class JTAfterRewardTask extends JTPerformanceTask {
        constructor();
        addEventListenner(): void;
        /**
         * 运行任务
         */
        runningTask(): void;
        private updateUserInfoPush;
        private exchangeGuidePush;
    }
    export class JTBaseLogicFactroy extends JTFactory {
        /**
         *
         */
        static CHANGED_LINE_LOGIC: number;
        static EXPAND_WILD_LOGIC: number;
        static LINE_PARSE_LOGIC: number;
        /**
         * 任务通道逻辑类型
         */
        static TASK_PIPELINE_LOGIC: number;
        /**
         * 滚轴线解析
         */
        static SCROLLER_LINE_PARSE: number;
        private options;
        private handler;
        constructor();
        /**
         * 生产逻辑对象
         * @param type type类型
         * @param owner 要绑定的对象
         */
        produce(type: number, owner?: JTContainer): JTContainer;
        /**
         * 子级选项
         * @param cls 子级选项class对象
         * @param priority 子级选项优先级
         * @param complete 执行函数
         */
        childOption(cls: any, priority: number, complete?: Function): JTBaseLogicFactroy;
        /**
         * 根据优先级删除已注册流程
         * @param priority
         */
        removeChildOptionByPriority(priority: number): void;
        /**
         * 根据class类删除已注册流程
         * @param cls
         */
        removeChildOptionByClass(cls: any): void;
        /**
         * 更新函数 5连回调
         * @param call
         */
        updateHandler(call: Handler): void;
        /**
         * 注册任务流，默认为 转换线->五连->总展示->中奖动画->小游戏及其中奖动画（如果有）->免费游戏结束及其中奖动画(如果有)->
         * 新免费游戏触发(如果有,会跳过轮播线)->jp游戏->升级->引导->轮播线
         */
        registerFlowOptions(): void;
        /**
         *调整流程
         *子项目如不想重新完全注册一遍流程，可替换或删除默认流程及自行插入注册的流程
         *如替换公共库默认的流程，替换时替换的流程的优先级与默认的流程的优先级一样即可
         *比如要替换公共库的总线流程 this.childOption(JTGlobalDisplayLines0000, JTTaskPriority.JTGLOBAL_DISPLAY_LINES);
         *如要不需要某些公共库的默认流程，可调用removeChildOptionByClass方法或removeChildOptionByPriority方法删除
         *自行插入的流程在默认流程中间的，依据默认流程的优先级加或减
         *流程中最后必须包含JTLoopDisplayLines以结束全部流程
         */
        adjustFlowOptions(): void;
        /**
         * 执行5连外部回调函数
         * @param task X连任务
         * @param line 连的数据
         */
        protected play5ComboTask(task: JTComboTask, line: RollingResult): void;
        protected play3ComboTask(task: JTComboTask, line: RollingResult): void;
        /**
         * 获取选项集
         */
        getOptions(): SDictionary;
        /**
         * 注册全局Class类
         */
        protected registerClassAlias(): JTBaseLogicFactroy;
    }
    /**
     * 默认流程的先后顺序，越小代表排在前面
     * 默认的流程的优先级为整百数，为避免冲突，子项目插入的流程优先级设定在默认的流程的之间的非整百数即可
     */
    export class JTTaskPriority {
        /**
         * = 0
         */
        static JTCONVERT_PLAYLINES: number;
        /**
         * = 100
         */
        static JTFULL_LINE_ANI_TASK: number;
        /**
         * = 200
         */
        static JTDYNAMIC_COMBINE_SPLIT: number;
        /**
         * = 300
         */
        static JT3COMBO_TASK: number;
        /**
         * = 400
         */
        static JTELIMANATE_SCORE_TASk: number;
        /**
         * = 500
         */
        static JTGLOBAL_DISPLAY_LINES: number;
        /**
         * = 600
         */
        static JTFREEGAME_REWARD_TASK: number;
        /**
         * = 700
         */
        static JTCOMMON_REWARD_TASK: number;
        /**
        * = 800
        */
        static JTLEVEL_UP_TASK: number;
        /**
         * = 900
         */
        static JTBONUSGAME_TASK: number;
        /**
         * = 1000
         */
        static JTJACKPOT_GAME_TASK: number;
        /**
         * = 1100
         */
        static JTFREEGAME_OVER_TASK: number;
        /**
         * = 1200
         */
        static JTAFTER_REWARD_TASK: number;
        /**
         * = 1300
         */
        static JTCOMBINE_OVER_TASK: number;
        /**
         * = 1400
         */
        static JTTRIAL_GUIDE: number;
        /**
         * = 1500
         */
        static JTNEW_FREEGAME_TASK: number;
        /**
         * = 1600
         */
        static JTCHANGE_GAME_TASK: number;
        /**
         * = 1700
         */
        static JTLOOP_DISPLAY_LINES: number;
    }
    export class JTLineScrollerGroup extends JTControlScrollerGroup {
        protected _lineCount: number;
        protected _lineContainer: JTContainer;
        protected _flashLineContainer: JTContainer;
        protected _gridContainer: JTContainer;
        protected _frameContainer: JTContainer;
        protected _interval: number;
        protected _showTime: number;
        protected _lineParser: JTScrollerLineParser;
        protected _lineMask: JTMask;
        protected _effectBelowContainer: JTContainer;
        protected _effectAboveContainer: JTContainer;
        protected _buttonsComponent: cc.Node;
        protected _onClickLineCall: Function;
        protected _lineTime: cc.ActionInterval;
        protected _lineConfig: any;
        protected _factoryLogic: JTFactory;
        protected _taskPipeline: JTTaskPipeline;
        protected _scatterRender: JTScatterGridRender;
        protected _onceWildContainer: JTContainer;
        protected _dynamicWildContainer: JTContainer;
        protected _extensionItems: JTItemSkinLoader[];
        protected _lineNumContainer: JTContainer;
        protected _scatterblackBackGround: JTBlackBackGround;
        protected _blackBackGround: JTBlackBackGround;
        protected _showImageInterval: number;
        protected _playRenderInterval: number;
        protected _showLineDuration: number;
        constructor();
        /**
         *
         * @param layer 层级工厂
         * @param child 子级工厂
         * @param logic 逻辑工厂
         * @param model 数据工厂
         */
        setupFactory(layer: JTFactory, child?: JTFactory, logic?: JTFactory, model?: JTFactory): JTChannelPipeline;
        /**
         * 线滚轴的配置参数
         * @param config 配置
         * @param interval 轮播线的时间间隔
         * @param component //线按钮容器
         * @param lineCount //线数
         * @param showTime //线按钮点击过后线的显示间隔时间
         * @param onClickLineCall //单击线按钮回调
         */
        setupLines(config: any, interval: number, component: cc.Node, lineCount: number, showTime?: number, onClickLineCall?: Function, showImageInterval?: number, maskSize?: cc.Size, playRenderInterval?: number, showLineDuration?: number): void;
        /**
         * 单击数字按钮所触发的回调
         * @param e
         */
        private onSelectLineButtonHandler;
        /**
         * 重写ui视图创建
         */
        create(): void;
        /**
         *
         * @param lineCount
         */
        showLineButtonGroup(lineCount: number): void;
        /**
         *
         * @param lineId
         * @param isVisible
         */
        showLineButton(lineId: number, isVisible: boolean): void;
        layoutScrollerLayer(rs: JTItemRender[]): void;
        /**
         * 点击数字按钮需要用到的缓动对像
         */
        get lineTime(): cc.ActionInterval;
        /**
         * 显示线
         * @param lineId 线ID
         * @param isVisible 是否隐藏
         */
        showLine(lineId: number, isVisible: boolean): void;
        /**
         * 开始运行滚轴
         * @param speed 滚轴的速度
         * @param delay 每一列滚轴的延迟
         * @param time 滚动时间
         * @param distance 开始、结束 回弹距离
         * @param beginTime 开、结束回弹时间
         */
        start(speed: number, delay?: number, time?: number, distance?: number, beginTime?: number, endDelayTime?: number, endDistance?: number, endTime?: number, endSpeed?: number, endSlowDownTime?: number, beginSpeed?: number, beginSpeedUpTime?: number): void;
        resetLayoutScrollerLayer(): void;
        /**
         * 通过线ID获取线的渲染器
         * @param lineId 线ID
         */
        getLineRender(lineId: number): JTLineRender;
        /**
         * 解析中奖结果
         * @param lines 中奖列表
         * @param complete 播放完成调度（如果不传complete函数，表示线会一直循环切换，如果传了complete函数，则会只播放一次自动停止）
         * @param ifStopWhenComplete
         * @param isLoopWinThisRound
         * @param isInitiative
         * @param isLoopGlobalLines
         * @param isImitateTask
         */
        parse(lines: any[], complete?: Function, ifStopWhenComplete?: boolean, isLoopWinThisRound?: boolean, isInitiative?: boolean, isLoopGlobalLines?: boolean, isSimulateProcedure?: boolean): void;
        launchParse(): void;
        /**
         * 显示线数
         * @param count 线数
         */
        showLines(count: number): void;
        /**
         * 清除（目前只清除以下几种情况）
         * @1、清除点击数字按钮缓动过渡效果
         * @2、滚轴停止切换线的效果
         * @3、线的透明度
         * @4、线解析器的操作
         */
        clear(): void;
        /**
         * 线遮罩
         */
        get lineMask(): JTMask;
        /**
         * 前框容器（一些特殊游戏需要用到前框来显示一种效果）
         */
        get frameContainer(): JTContainer;
        /**
         * 前框容器（一些特殊游戏需要用到前框来显示一种效果）
         */
        set frameContainer(value: JTContainer);
        /**
         * 线容器
         */
        get lineContainer(): JTContainer;
        /**
         * 线容器
         */
        set lineContainer(value: JTContainer);
        /**
         * 线容器
         */
        get flashLineContainer(): JTContainer;
        /**
         * 线容器
         */
        set flashLineContainer(value: JTContainer);
        /**
         * 格子容器
         */
        get gridContainer(): JTContainer;
        /**
         * 格子容器
         */
        set gridContainer(value: JTContainer);
        /**
         * 任务通道
         */
        get taskPipeline(): JTTaskPipeline;
        /**
         * 中奖线切换时间
         */
        get interval(): number;
        /**
        * 中奖线切换时间
        */
        set interval(value: number);
        /**
         * MG免费游戏中播放总展示时是否需要中奖线
         */
        get isShowAllLine(): boolean;
        set isShowAllLine(v: boolean);
        private _isShowAllLine;
        /**
         * MG播放总展示的时间
         */
        get showAllLineTimes(): number;
        set showAllLineTimes(v: number);
        private _showAllLineTimes;
        /**
         * 线个数
         */
        get lineCount(): number;
        /**
         * 线配置
         */
        get lineConfig(): any;
        /**
         * 线个数
         */
        set lineCount(value: number);
        /**
         * 线按钮面板
         */
        get buttonsComponent(): cc.Node;
        /**
         * 特效容器-目前飘字是添加到此层上面的
         */
        get effectAboveContainer(): JTContainer;
        /**
         * 特效容器-目前飘字是添加到此层上面的
         */
        get effectBelowContainer(): JTContainer;
        /**
         * 线解析器
         */
        get lineParser(): JTScrollerLineParser;
        /**
         * 逻辑工厂
         */
        get factoryLogic(): JTFactory;
        /**
         * 分散和特殊元素容器
         */
        get scatterRender(): JTScatterGridRender;
        /**
         * 分散和特殊元素容器
         */
        set scatterRender(value: JTScatterGridRender);
        /**
         * 一次百搭容器
         */
        get onceWildContainer(): JTContainer;
        /**
         * 动态百搭容器
         */
        get dynamicWildContainer(): JTContainer;
        get extensionItems(): JTItemSkinLoader[];
        get lineNumContainer(): JTContainer;
        get scatterblackBackGround(): JTBlackBackGround;
        /**
        * 图片间隔时间
        */
        get showImageInterval(): number;
        /**
        * 滚轴半透明黑背景
        */
        get blackBackGround(): JTBlackBackGround;
        /**
        * 中奖线时元素的播放间隔
        */
        get playRenderInterval(): number;
        /**
        * 显示线的持续时间
        */
        get showLineDuration(): number;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /**
        * 设置程序画线透明度(无间隔画线)
        */
        get runTimeLineOpacity(): number;
        set runTimeLineOpacity(v: number);
        /**程序画线透明度(无间隔画线)*/
        protected _runTimeLineOpacity: number;
    }
    export class JTChannelScrollerGroup extends JTLineScrollerGroup {
        channels: number[];
        constructor();
        /**
         *
         * @param isTween 停止滚轴（包含了滚轴滚动、声音、线的展示）
         */
        stopAll(isTween?: boolean): void;
        /**
         * 停止正在播放的滚轴时间----该方法与addChannel结合使用
         */
        stopChannels(): void;
        /**
         * 重写滚动完成
         * 滚动完成触发
         */
        scrollingComplete(): void;
        /**
         *
         * @param channel 添加声音 ---停止与stopChannels结合使用
         */
        addChannel(channel: number): void;
    }
    export abstract class JTCreate extends JTProcedure {
        /**
         * 创建函数，继承需重写
         */
        abstract create(): void;
        private _indexCounter;
        /**
        * 运行任务
        */
        runningTask(): void;
        complete(): void;
        destroy(): boolean;
    }
    export class JTCreateScrolling extends JTCreate {
        constructor();
        create(): void;
        destroy(): boolean;
    }
    export abstract class JTBeginRunning extends JTProcedure {
        /**
         * 将要运行函数
         */
        abstract beginRunning(): void;
        /**
         * 运行任务
         */
        runningTask(): void;
    }
    export class JTEmptyBeginScrolling extends JTBeginRunning {
        constructor();
        beginRunning(): void;
    }
    export abstract class JTRunning extends JTProcedure {
        /**
         * 运行函数，继承需重写
         */
        abstract running(): void;
        /**
       * 运行任务
       */
        runningTask(): void;
    }
    export class JTEasing {
        private time;
        private beginValue;
        private changeInValue;
        private duration;
        private easingType;
        private _isRunning;
        private _isComplete;
        constructor();
        get isRunning(): boolean;
        get isComplete(): boolean;
        start(beginValue: number, endValue: number, duration: number, easingType: JTEasingType): void;
        update(dt: number): void;
        private linear;
        private easeOutCubic;
        private easeInCubic;
        getCurrentValue(): number;
    }
    export enum JTEasingType {
        linear = 0,
        easeOutCubic = 1,
        easeInCubic = 2
    }
    export class JTRunScrolling extends JTRunning {
        private timer;
        private isChangedTime;
        private isRunSlowDown;
        private isRunSpeedUp;
        private speedUpEasing;
        private slowDownEasing;
        constructor();
        running(): void;
        continue(): void;
        dataStandby(): void;
        clear(): void;
        private onEnterFrame;
        private scrollingUp;
        private scrollingDown;
        private scrollingLeft;
        private scrollingRight;
        private overSlowDown;
        private beginSpeedUp;
    }
    export abstract class JTOverRunning extends JTProcedure {
        /**
         * 结束函数，继承需重写
         */
        abstract overRunning(): void;
        /**
         * 运行任务
         */
        runningTask(): void;
    }
    export class JTOverScrolling extends JTOverRunning {
        constructor();
        overRunning(): void;
        /**
         * 滚动完成
         */
        scrollComplete(): void;
    }
    export class FreeGameRatioReward extends cc.Component {
        winEff: cc.Node;
        multipleEff: cc.Node;
        ratioNode: cc.Node;
        private _winMoney;
        private effTime;
        private multipleEffx;
        private multipleEffy;
        onLoad(): void;
        protected onDestroy(): void;
        protected layout(): void;
        set winMoney(value: number);
        get winMoney(): number;
        /**
         * 单局金币变化的动作
         * @param start 开始的金币值
         * @param end 变化到的金币值
         * @param cb 完成的回调
         */
        playScoreChangeEffect(start: number, end: number, cb?: Handler): void;
        /**
         * 单局金币消失到赢分处的动作
         * @param cb
         */
        hideScoreChangeEffect(cb: Handler): void;
        private playRatioEffect;
        playEff(ratio: number, total: number, base: number, cb: Handler): void;
        private playOver;
    }
    /**
     * 弹窗UIID
     *      - UIID(base库 0-199，core库 200-399，slot库 400-599，hunter库 600-799，arcade库 800-999，子项目 >= 1000)
     *      - 枚举名字不要随便修改因为，名字是有弹窗类型判断, 例如: UIID[`UI_BET_TYPE_${GData.getParameter("main").settingStyle}`]
     */
    export enum UIID {
        /** 赔付表弹窗 */
        UI_COMPENSATE = 500,
        /** 规则弹窗 */
        UI_RULE = 501,
        /** 押分弹窗类型1 */
        UI_BET_TYPE_1 = 502,
        /** 押分弹窗 */
        UI_BET_TYPE_2 = 503,
        /** 余额弹窗 */
        UI_BALANCE = 504,
        /** 自动旋转类型1 */
        UI_TRUN_SETTING_TYPE_1 = 505,
        /** 自动旋转类型2 */
        UI_TRUN_SETTING_TYPE_2 = 506,
        UI_LOADING_TIP = 507,
        /** 购买功能弹窗 */
        UI_BUY_SPIN_VIEW = 508,
        /** 翻倍功能弹窗 */
        UI_TURN_COIN_VIEW = 509,
        UI_JPGAME = 510,
        UI_JACKPOT_GAME = 511
    }
    export const UICF: {
        [key: number]: game.IUIConf;
    };
    export enum CommonEventNames {
        /**
         * 脚本加载完成事件
         */
        EVENT_SHOW_OR_HIDE_MENU = "EVENT_SHOW_OR_HIDE_MENU",
        /**
         *
         */
        EVENT_POP_BETOPTION = "EVENT_POP_BETOPTION",
        /**
         *
         */
        EVENT_POP_TURN_SETING = "EVENT_POP_TURN_SETING",
        /**
         *
         */
        EVENT_POP_BALANCE = "EVENT_POP_BALANCE",
        /**
         *
         */
        EVENT_WINSCORE_CHANGE = "EVENT_WINSCORE_CHANGE",
        /**
         * 点击确定关闭了loading页面
         */
        EVENT_CLOSE_LOADING_VIEW = "EVENT_CLOSE_LOADING_VIEW",
        /**
         *
         */
        EVENT_ADD_LOAD_BONUS_ASSET_ONLOADING = "EVENT_ADD_LOAD_BONUS_ASSET_ONLOADING",
        /**
         * 添加开始界面资源loading任务
         */
        EVENT_ADD_LOADTASK_ONLOADING = "EVENT_ADD_LOADTASK_ONLOADING",
        /**
         *
         */
        EVENT_CLOSE_MENU = "EVENT_CLOSE_MENU",
        EVENT_CLOSE_CHANGE_COST_TIP = "EVENT_CLOSE_CHANGE_COST_TIP",
        /**点击控制按钮 */
        EVENT_CLICK_SPIN_BTN = "EVENT_CLICK_SPIN_BTN",
        EVENT_BUY_FREE_BTN_STATE_FROM_EXTRA_BTN = "EVENT_BUY_FREE_BTN_STATE_FROM_EXTRA_BTN"
    }
    export class JTRunUnfixedLength extends JTRunning {
        private timer;
        private isChangedTime;
        private isRunSlowDown;
        private isRunSpeedUp;
        private speedUpEasing;
        private slowDownEasing;
        private startedSync;
        constructor();
        running(): void;
        continue(): void;
        dataStandby(): void;
        clear(): void;
        private onEnterFrame;
        private scrollingUp;
        private scrollingDown;
        private scrollingLeft;
        private scrollingRight;
        private refreshRenders;
        private overSlowDown;
        private beginSpeedUp;
        private startLinkSync;
    }
    export class JTOverUnfixedLength extends JTOverScrolling {
        overRunning(): void;
        scrollComplete(): void;
        private eliminate;
        private processEnd;
    }
    export class JTBeginScrolling extends JTBeginRunning {
        constructor();
        beginRunning(): void;
        beginStart(): void;
    }
    export class JTBeginUnfixedLength extends JTBeginRunning {
        beginRunning(): void;
        beginStart(): void;
    }
    export class JTUnfixedLengthPipeline extends JTScheduledPipeline {
        lineTime: cc.Tween;
        scatterRule: JTScatterTask;
        dynamicWild: JTDynamicWildTask;
        onceWild: JTOnceWildTask;
        changeSpeed: JTChangeSpeedTask;
        linkIndexs: number[];
        private originalOccupyPosData;
        occupyPosData: number[];
        private elmentLengthRange;
        /**
         * 本列的扩展列信息
         */
        extendScrollerInfo: JTExpandScrollerInfo;
        constructor();
        create(): void;
        beforeStart(): void;
        private init;
        getOccupyPosData(index: number, data: number): number;
        start(): void;
        onDataStandBy(): void;
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(useChangeData?: boolean): void;
        setRenderBeforeComplete(render: JTItemRender): boolean;
        /**
         *
         * @returns 横竖切换及层级还原时调用
         */
        updateRenderPosition(): void;
        /**
        * 重新设置有效渲染器，主要用于滚动介绍时零高度格子的坐标计算
        */
        resetRenderPoints(): void;
        setupRender(render: BaseSpinSlotView, p: JTLayoutPoint): void;
        setupStaticRenderPoint(): void;
        /**
         *
         * @param render
         * @returns
         */
        adjustExtendItemCurve(render: JTItemRender): void;
        updateRenderData(): void;
        getItemCurveProperty(x: number): {
            offsetY: number;
            angle: number;
        };
        getItemInclineProperty(y: number): {
            offsetX: number;
            skewX: number;
        };
        /**
     * 设置元素的倾斜
     * @param render
     * @returns
     */
        adjustItemIncline(render: JTItemRender): number;
        jumpToOverRunning(): void;
        linkSyncRunning(indexs: number[]): void;
    }
    export class EliminateDisappearUtils {
        /**
         * 消失的时间
         */
        static _disappearTime: number;
        /**
         * 延迟时间
         */
        static _disappreaDelayTime: number;
        constructor();
        /**
         * 消失的时间
         */
        static get disappearTime(): number;
        static set disappearTime(value: number);
        /**
         * 延迟时间
         */
        static get disappreaDelayTime(): number;
        static set disappreaDelayTime(value: number);
        static processDissppear(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 中间往两边扩散
         * @param scrollers
         * @param callBack
         */
        static processMidMoveLeftRight(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 两边往中间扩散
         * @param scrollers
         * @param callBack
         */
        static processLeftRightMoveMid(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从左往右扩散
         * @param scrollers
         * @param callBack
         */
        static processLeftMoveRight(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从右往左扩散
         * @param scrollers
         * @param callBack
         */
        static processRightMoveLeft(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从上往下扩散
         * @param scrollers
         * @param callBack
         */
        static processTopMoveBottom(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从下往上扩散
         * @param scrollers
         * @param callBack
         */
        static processBottomMoveTop(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从中间往上下扩散
         * @param scrollers
         * @param callBack
         */
        static processMidMoveTopBottom(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从左上角向右下角扩散
         * @param scrollers
         * @param callBack
         */
        static processLTMoveRB(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从右下角向左上角扩散
         * @param scrollers
         * @param callBack
         */
        static processRBMoveLT(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从左下角向右上角扩散
         * @param scrollers
         * @param callBack
         */
        static processLBMoveRT(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 从右上角向左下角扩散
         * @param scrollers
         * @param callBack
         */
        static processRTMoveLB(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 开始消失处理
         * @param arry
         * @param callBack
         */
        static startDisappear(arry: BaseSpinSlotView[][], callBack: Handler): void;
        static disappearComplete(callBack: Handler, index: number, len: number): void;
    }
    export class JTEliminatePipeline extends JTScrollingPipeline {
        updateRenderData(): void;
        jumpToOverRunning(): void;
    }
    export interface IEliminateResult {
        /**
         * 当前属于第几次消除，从0开始
         */
        index: number;
        /**
         * 本次消除的金币
         */
        curSpinCoin: number;
        /**
         * 消除后的总的消除金币
         */
        totalSpinCoin: number;
        /**
         * 消除前的总金币
         */
        preSumSpinCoin: number;
        /**
         * 消除后的倍率
         */
        crushRate: number;
        /**
         * 是否最后一次消除
         */
        isLast: boolean;
        /**
         * 中奖线
         */
        lineResult: protoSlot.spinResultType.lineResultType[];
        /**
         * 消除后余额
         */
        balance: number;
        /**
         * 本次消除倍率
         */
        curRate: number;
    }
    export class EliminateEffectUtils {
        /**
         * 速度 秒
         */
        static _speed: number;
        /**
         * 记录列索引
         */
        static lineIndex: number;
        /**
         * 每个格子缩放的时间
         */
        static _scaleTime: number;
        /**
         * 每个格子缩放的偏移基值
         */
        static _scaleTimeGap: number;
        /**
        * 每个格子掉落回弹时间参数，太小看不到效果
        */
        static _boundTime: number;
        /**
         * 消除后格子掉落时间
         */
        static _fallTime: number;
        /**
         * 消除后格子出现时间
        */
        static _appearTime: number;
        /**
         * 间隔掉落时间
        */
        static _delayDropTime: number;
        /**
         * 间隔掉落时间
        */
        static _scatterDopGapTime: number;
        /**
     * 间隔掉落时间
    */
        static _scatterWaitDropTime: number;
        static initComplete: boolean;
        /**是否从左往右掉落*/
        private static _isLeftRightFallDown;
        /**
         * 消除时的回调
         * @param items 消除的元素
         * @param callBack 消除完的回调
         * @param isLastTimeElinate 是否本局的最后一次消除
         */
        static elePlayAni: Handler;
        static timer: any;
        private static _eliminateTotalWin;
        private static _scatterWin;
        static get eliminateTotalWin(): number;
        static get scatterWin(): number;
        constructor();
        static get speed(): number;
        static set speed(value: number);
        static get scaleTime(): number;
        static set scaleTime(value: number);
        static get scaleTimeGap(): number;
        static set scaleTimeGap(value: number);
        static get boundTime(): number;
        static set boundTime(value: number);
        static get appearTime(): number;
        static set appearTime(value: number);
        static get fallTime(): number;
        static set fallTime(value: number);
        static get delayDropTime(): number;
        static set delayDropTime(value: number);
        static get scatterDopGapTime(): number;
        static set scatterDopGapTime(value: number);
        static get scatterWaitDropTime(): number;
        static set scatterWaitDropTime(value: number);
        /**是否从左往右掉落*/
        static get isLeftRightFallDown(): boolean;
        static set isLeftRightFallDown(val: boolean);
        /**
         * 消除玩法设置参数，单位时间为秒
         * @param speed 速度 单位 像素/秒
         * @param scaleTime 格子的缩放出现的时间
         * @param scaleTimeGap 格子之间缩放的间隔时间
         * @param boundTime 回弹时间
         * @param appearTime 消除后的出现时间
         * @param fallTime 消除后格子掉落时间
         * @param disappearTime 消失时的渐隐时间
         * @param disappreaDelayTime 格子之间消失间隔时间
         * @param delayDropTime 格子之间掉落间隔时间
         * @param scatterDopGapTime 加速后掉落的间隔时间
         * @param scatterWaitDropTime 加速后掉落等待时间
         */
        static setup(speed: number, scaleTime: number, scaleTimeGap: number, boundTime: number, appearTime: number, fallTime: number, disappearTime?: number, disappreaDelayTime?: number, delayDropTime?: number, scatterDopGapTime?: number, scatterWaitDropTime?: number): void;
        /**
         *  初始化，游戏开始效果 第一次进游戏的，时候掉落处理，跟游戏中消除掉落分开
         */
        static startEffect(scrollers: JTScrollerGroup, callBack: Handler, time?: number): void;
        /**
         * 第一次进游戏的 处理一排显示掉落
         * @param scrollers
         * @param callBack
         * @param time
         */
        private static processStartEffect;
        /**
         * 第一次进游戏的,每一行掉落缩放显示
         * @param scrollers
         * @param callBack
         */
        private static processScrollerPerLineShow;
        /**
         * 第一次进游戏的,每一行掉落缩放后，掉落item
         * @param r
         */
        private static scrollerRenderItemFall;
        /**
         * 第一次进游戏的,所有行-掉落完成结束
         * @param r y
         * @param callBack
         */
        private static allFallEnd;
        /**
         * 单轮消除赢分汇总
         * @returns
         */
        private static getTotalWin;
        /** 每局第一次消除前的掉落完成 */
        static resetElimate(): void;
        /**
         * 游戏中，每一列消除函数,先判断是否有中断处理
         * @param scrollers
         * @param callBack
         * @param isNextFallByRow 消除完的下一步是否是一行一行掉落出现
         */
        static processEliminateEffect(scrollers: JTScrollerGroup, callBack: Handler, isNextFallByRow: boolean): void;
        /**
         * 消除有很多阶段，记录当前阶段
         */
        private static curEliminateResultType;
        private static resultIndex;
        /**
         * 获取需要消除的元素
         */
        private static getElinateAttr;
        /**
         * 游戏中，每一列消除函数
         */
        static eliminateEffectRow(eliminateEle: number[], throughGrid: number[], scrollers: JTScrollerGroup, callBack: Handler, isNextFallByRow: boolean): void;
        /**
         * 游戏中-初始化掉落格子数据：
         * @param scroller
         * @param ellimateDatas
         */
        private static setEllimateDatas;
        /**
         * 游戏中-获取掉落的索引
         * @param index
         * @param ellimateDatas
         */
        private static getFallIndex;
        /**
         * 游戏中-消除单独item
         * @param item
         */
        private static startEliminateEffectRow;
        /**
         * 游戏中-消除后-开始每一行的掉落处理
         * @param scrollers
         * @param ellimateDatas
         * @param callBack
         */
        private static eliminateEffectRowComplete;
        /**
         * 游戏中，消除后，后续每行格子掉落
         * @param target
         * @param sy
         * @param dy
         */
        private static processElimateFall;
        /**
         * 游戏中-下一阶段消除处理
         * @param scrollers
         * @param elimateDatasDict
         * @param index
         */
        private static nextLineStep;
        /**
         * 游戏中-当前阶段，每一行的显示掉落消除处理
         */
        private static nextElimateStep;
        /**
         * 游戏中-每一行的消除后，新元素显示-掉落处理
         * @param scrollers
         * @param elimateDatasDict
         * @param index
         */
        private static fallEndIndex;
        private static fallRowIndex;
        private static nextElimateStepRow;
        /**
         * 游戏中-每一行的消除后，新元素显示掉落完成后处理
         * @param scrollers
         * @param elimateDatasDict
         * @param newDataDic
         * @param callBack
         */
        private static nextElimateStepRowComplete;
        /**
         * 元素全部掉到滚轴下方
         * @param scrollers
         * @param callBack
         */
        static beginFallAllElementToBelow(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
     * 元素全部从滚轴上方掉到滚轴中
     * @param scrollers
     * @param callBack
     */
        static beginFallAllElementFromAbove(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         * 元素下落没有回弹效果
         * @param r
         * @param y
         * @param callBack
         */
        private static fallItemWithoutBounce;
        /**
         * 游戏中-消除后-新掉落的元素填补空白
         * @param scrollers
         * @param ellimateDatas
         * @param callBack
         */
        private static eliminateEffectFall;
        /**
         * 消除类掉落到下方与从上方掉落同时并行
         * @param scrollers
         * @param callBack
         */
        static beginFallToBelowThenAboveFall(scrollers: JTScrollerGroup, callBack: Handler): void;
        /**
         *
         * @param r
         * @param y1
         * @param data
         * @param delay
         * @param startY
         * @param y2
         * @param handler
         */
        static fallAndChangeThenFall(r: BaseSpinSlotView, y1: number, data: number, delay: number, startY: number, y2: number, handler?: Handler): void;
        /**
         * 游戏中，每一列消除函数,先判断是否有中断处理
         * @param scrollers
         * @param callBack
         * @param isNextFallByRow 消除完的下一步是否是一行一行掉落出现
         */
        static processUnfixedLengthEliminateEffect(scrollers: JTScrollerGroup, callBack: Handler, isNextFallByRow: boolean): void;
        /**
     * 游戏中，每一列消除函数
     */
        static unfixedLengthEliminateEffectRow(eliminateEle: number[], throughGrid: number[], scrollers: JTScrollerGroup, callBack: Handler, isNextFallByRow: boolean): void;
        /**
         * 游戏中-消除后-新掉落的元素填补空白
         * @param scrollers
         * @param ellimateDatas
         * @param callBack
         */
        private static unfixedLengthEliminateEffectFall;
        /**
         *
         * @returns 分裂后的所有元素
         */
        static splitUnfixedLengthElements(): BaseSpinSlotView[];
        private static fixEliminateDataAfterSplit;
        private static getUnfixedLengthFallPosition;
        private static getUnfixedLengthLandscapePosition;
        /**
         * 游戏中，消除后，后续每行格子掉落
         * @param target
         * @param sy
         * @param dy
         */
        private static processElimateLandscapePull;
    }
    export class Property {
        /**
         * 设置精灵资源图片和属性
         * @param spr 渲染精灵
         * @param data 属性数据{atlas:"",spriteFrame:""}
         * @param bundleName
         */
        static setSpriteProperty(spr: cc.Sprite, data: any, bundleName?: string, complete?: Function): void;
        /**
         * 设置文本属性
         * @param label 文本
         * @param data 属性数据
         */
        static setLabelProperty(label: cc.Label, data: any): void;
        /**
         * 设置骨骼资源和属性
         * @param sk Spine动画
         * @param data 属性数据 {json: string}
         * @param bundleName
         */
        static setSpProperty(sk: sp.Skeleton, data: {
            json: string;
        }, bundleName?: string, complete?: (sk: sp.Skeleton) => void): void;
    }
    /**
* 程序主入口，初始化主界面，音乐，注册弹框配置，适配横竖屏分辨率
*/
    export class EntranceViewBase extends BaseView {
        protected isAddView: boolean;
        protected nodes: any;
        protected static _instance: EntranceViewBase;
        orientation: Orientation;
        static get instance(): EntranceViewBase;
        static set instance(val: EntranceViewBase);
        initView(): void;
        protected loadConfigComplete(): void;
        protected beforeLogin(): void;
        protected addView(): void;
        protected enterLoginSuccess(): void;
        getNode(nodeName: string): cc.Node;
        protected loadPrefab(bundleName: string, prefab: string, layer: number, name?: string, loadComplte?: Function, parent?: cc.Node): void;
        addNode(prefab: cc.Prefab | cc.Node, layer: number, nodeName?: string, parent?: cc.Node): cc.Node;
        initProto(): void;
        getEffectLayer(): cc.Node;
        /**
         * 设置节点同级索引
         * @param nodeName //节点名称目前只支持MAIN_NODE_NAME枚举下的,通过名称获取节点
         * @param index //要设置的索引值
         * @param node //(可选)要设置的节点,如果填了则使用此节点
         */
        setSiblingIndex(nodeName: string, index: number, node?: cc.Node): void;
        shakeEffect(duration: number, ratio?: number, node?: cc.Node): void;
    }
    /**
 * 程序主入口，初始化主界面，音乐，注册弹框配置，适配横竖屏分辨率
 */
    export class EntranceView extends EntranceViewBase {
        protected blurryBgNode: cc.Node;
        initView(): void;
        protected addBlurryeBG(): void;
        blurryLoadOver(spr?: cc.Sprite): void;
        setLanguage(): void;
    }
    export class SettlementAni extends BaseView {
        coinLabel: cc.Label;
        congratuteSk: sp.Skeleton;
        congratuteSk_v: sp.Skeleton;
        badLuckSk: sp.Skeleton;
        badLuckSk_v: sp.Skeleton;
        starSk: sp.Skeleton;
        private freeAdmissionPlayComplete;
        private playScheduleOnce;
        private winCoin;
        private _winMoney;
        onLoad(): void;
        onDestroy(): void;
        private playComplete;
        layout(): void;
        layoutPortrait(): void;
        layoutLandscape(): void;
        set winMoney(value: number);
        get winMoney(): number;
        play(winCoin: number, cb: Function): void;
        private playStarAni;
        private hide;
    }
    /**
* CommonMainView
*/
    export abstract class CommonMainView extends BaseView {
        constructor();
        rollerLayer: cc.Node;
        /**老虎机滚轴类 */
        slotMachine: SlotMachineView;
        isSetMask: boolean;
        private maskPoints;
        protected isReSpinWinRetain: boolean;
        onLoad(): void;
        private hasCreat;
        /**
         * 主界面的初始化接口
         * @public
         * @method init
         */
        init(): void;
        protected beforeInitSlotMachine(): void;
        protected initSlotMachineComplete(): void;
        /**
         * 创建滚轴组，可自定义
         * @returns
         */
        createScoller(): JTChannelScrollerGroup;
        /**
         * 绘制不规则多边形遮罩，特殊形状的滚轴使用，必须在onload时调用
         * @param points 多边形点必须大于等于3个点，且按顺序围成多边形
         */
        drawMask(points: cc.Vec2[]): void;
        /**
         *
         * @param gameID 滚轴对应的游戏id
         * @param scroller 滚轴
         */
        protected onSetupScroller(gameID: number, scroller: JTScrollerGroup): void;
        /**
         * 多类滚轴初始化完成的回调，可根据gameID对相应滚轴做列的偏移
         * @param gameID
         * @param scroller
         */
        onScrollerInitComplete(gameID: number, scroller: JTScrollerGroup): void;
        /**
         * 多类滚轴初始化完成时切换的当前游戏ID
         * @param gameID 当前的gameID
         */
        onMutipleScrollerInit(gameID: number): void;
        /**
         * 变更滚轴完成的回调
         * @param gameID
         * @param scroller
         */
        onChangeScrollerComplte(gameID: number, scroller: JTScrollerGroup): void;
        afterChangeScroller(gameID: number, scroller: JTScrollerGroup): void;
        private changeGameScroller;
        /**
         * 开始改变滚轴前的回调，cb调用后开始切换滚轴
         * @param gameID
         * @param cb
         */
        protected onChangeScrollerBegin?(gameID: number, cb: Handler): void;
        changeScrollerByGameID(gameID: number): void;
        /**
         * 根据游戏id设置遮罩
         * @param gameID
         * @param points
         */
        setMaskPoint(gameID: number, points: cc.Vec2[]): void;
        changeMaskPointByGameID(gameID: number): void;
        protected reEnterRoom(): void;
        protected changeCostSuccess(): void;
        /**
         * 切换押分时导致滚轴数据改变的回调
         */
        protected onChangeCost?(): void;
        /**
         * 初次进房间、切换房间、重连成功后的滚轴刷新完的回调
         */
        refreshRoom(): void;
        /**
         * 切换押分时，重置滚轴
         */
        onResetScroller(): void;
        /**
         * 滚轴线大奖等展示都完成后的回调
         */
        onScrollerFlowComplete(): void;
        /**
         * 滚动即将开始的回调
         */
        beforeScrollerStartRolling(): void;
        protected checkState(): void;
        /**初始化免费游戏*/
        onInitFreeGameAndCustomData(): void;
        protected runFlowsAfterInit(): void;
        /**
         *  初始化滚轴
         * @param slotMachine
         */
        scatterTask: JTScatterTask;
        protected onInitScroller(slotMachine: SlotMachineView): void;
        /**
         * 获取假滚轴列表，每次开始滚动时会重新取,此为示例
         * @param scroller
         */
        getCustomDefaultDataList(scroller: JTScrollerGroup): any;
        protected onWatchRunning(s: JTScroller): void;
        /**
         * 释放资源
         */
        dispose(): void;
        storeAutoGameTimes(needEvent?: boolean): void;
        /**
         * 恢复自动游戏次数
         */
        recoverAutoGameTimes(): void;
        /**
         * 容器布局前的回调
         */
        beforeLayout?(): void;
        /**
         * 容器布局后的回调
         */
        afterLayout?(): void;
        /**
         * 添加事件监听
         */
        protected addEventListener(): void;
        private testForRollingParam;
        /**
         * 移除事件监听
         */
        protected removeEventListener(): void;
        /**
         * 主界面两侧的线设置按钮容器(可选)
         */
        protected sideLineSetter?: any;
        /**
         * 主界面进行初始化时的回调
         * @param slotMachine
         * @param videoPlayer
         * @param sideLineSetter 主界面两侧的线设置器
         */
        protected abstract onInit(): any;
        /**
         * 释放资源时的回调
         */
        protected onDispose?(): void;
        /**
         * 小游戏相关事件
         * @param {BonusGameInfo} bonusGameInfo 小游戏信息
         * @param {Handler} completeHandler 处理完成后的回调(如，可能需要在触发小游戏后播放动画，此时则可以在播放完成后，调用此回调通知框架已经处理完成，继续下一步,如继续播放线动画)
         */
        protected onBonusGameTriggered?(bonusGameInfo: BonusGameInfo, completeHandler?: Handler): any;
        /**
        * 多个小游戏中的小完成，单个小游戏及最后一个小游戏的不触发
        * @param bonusGameInfo 小游戏信息
        * @param completeHandler 用户处理完成的回调句柄
        */
        protected onBonusGameComplete?(bonusGameInfo: BonusGameInfo, completeHandler?: Handler): any;
        /**
         * 小游戏结束
         * @param bonusGameInfo 小游戏信息
         * @param completeHandler 用户处理完成的回调句柄
         */
        protected onBonusGameOver?(bonusGameInfo: BonusGameInfo, completeHandler?: Handler): any;
        /**
        * 当本接口被回调时，意味着有上次的免费游戏（或重转）等待完成,请在此完成界面的相关显示初始化
        * 请自行根据freeGameInfo.id判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.id
        * @param freeGameInfo 免费游戏信息
        * @param cb 处理完成时的回调句柄
        *
        */
        protected onInitFreeGame?(freeGameInfo: FreeGameInfo, cb?: Handler): any;
        /**
         * 再次回到免费游戏
         * @param freeGameInfo
         * @param cb
         */
        protected onResumeFreeGame?(freeGameInfo: FreeGameInfo, cb?: Handler): any;
        /**
         * 触发了免费游戏
         * 请自行根据freeGameInfo.id判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.id
         * @param freeGameInfo
         * @param {Handler} completeHandler 处理完成后的回调(如，可能需要在触发小游戏后播放动画，此时则可以在播放完成后，调用此回调通知框架已经处理完成，继续下一步,如继续播放线动画)
         */
        protected onFreeGameTriggered?(freeGameInfo: FreeGameInfo, completeHandler?: Handler): void;
        /**
         * 免费游戏中又触发了免费游戏
         * @param freeGameInfo
         * @param completeHandler
         */
        protected onFreeGameTriggerAgain?(freeGameInfo: FreeGameInfo, completeHandler?: Handler): void;
        /**
         * 免费游戏更新了
         * 请自行根据freeGameInfo.id判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.id
         * @param freeGameInfo
         */
        protected onFreeGameInfoUpdated?(freeGameInfo: FreeGameInfo): void;
        /**
        * 免费游戏次数更新了
        * 请自行根据freeGameInfo.id判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.id
        * @param nowTimes
        */
        protected onFreeGameTimesUpdated?(nowTimes: number, totalTimes?: number): any;
        /**
         * 免费游戏结束了
         * 请自行根据freeGameInfo.id判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.id
         * @param freeGameInfo
         */
        protected onFreeGameOver?(freeGameInfo: FreeGameInfo, cb: Handler): any;
        /**
         * 免费游戏中触发了倍数加成奖励
         * @param ratio 倍数
         * @param total 赢得的总分
         * @param base 基础分
         * @param cb 完成后的回调
         */
        protected onFreeGameRatioReward?(ratio: number, total: number, base: any, cb: Handler): any;
        protected onInitCustomData?(data: protoSlot.handleStateType, cb: Handler): void;
        /**
         * 游戏的自定义数据更新了
         * @param data
         * @param cb
         */
        protected onCustomDataUpdate?(data: protoSlot.handleStateType, cb: Handler): any;
        /**
         * 当屏幕横竖屏发生了变化时调用
         * @public
         * @method
         * @param {ScreenMode} changedScreenMode
         */
        /**
         * 界面显示时的回调
         */
        protected onShown?(): void;
        /**
         * 界面隐藏时的回调
         */
        protected onHide?(): void;
        /**
         * 界面显示时播放动画
         */
        protected showAnimation?(): any;
        /**
         * 触发了jp游戏,子游戏在此弹出jp游戏，jp游戏的数据取slot.JackPotGameManager.instance.jpRewardPush,自己表现完成后调用cb结束
         * @param cb Jp游戏完成后调用
         */
        protected onJackPotGameTrigger?(cb: Handler): any;
        /**
         * 初始化声音,如果需要初始化自己的声音，请实现此接口
         */
        protected initSound?(): void;
        getSourceList(scroller: JTScrollerGroup): any[];
        getFreeSourceList(scroller: JTScrollerGroup): any[];
        /**
         * 小游戏结束了
         * @param bonusGameInfo
         * @param cb
         */
        private _onBonusGameOver;
        /**
         *
         * @param bonusGameInfo
         * @param cb
         */
        private _onBonusGameComplete;
        protected afterFreeGameTriggered(): void;
        protected afterFreeGameOver(): void;
        protected afterFreeGameTriggerAgain(): void;
        /**在免费模式中,只用于游戏内重连数据参考判断*/
        protected inFreeGameMode: boolean;
        /**
         * 真正处理免费游戏触发的逻辑
         */
        private _onFreeGameTrigger;
        private _onFreeGameTriggerAgain;
        private _onFreeGameOver;
        private _onBonusGameTrigger;
        private _onFreeGameTriggerOver;
        _onFreeGameRatioRewardTrigger(event: string, ratio: number, total: number, base: number, cb: Handler): void;
        private _onSingleRoundScoreComplte;
        private _onBonusGameTriggerOver;
        /**
         * 免费游戏信息更新了
         */
        private _onFreeGameInfoUpdated;
        /**
         * 免费游戏的次数更新了
         */
        private _onFreeGameTimesUpdated;
        private _onResumeFreeGame;
        /**
         * 接受到了服务器发送的customData
         */
        private _onReceiveCustomData;
        /**
         * 自定义数据更新了
         * @param cb
         */
        private _onCustomDataUpdate;
        private _onCustomDataCallBack;
        /**
         *
         * @param cb
         */
        private _onJackPotGameTrigger;
        /**
         * 展示大奖或普通奖
         * @param winType 大奖类型
         * @param money 金币数
         * @param cb 完成的回调
         * @param isUpdateWinScore 展示大奖完是否更新到赢分   默认为 true
         * @param isSyncAllScore 展示大奖完是否同步玩家金币数   默认为 true
         * @param delayCbTime complete回调延时  isUpdateWinScore为true时有效    默认为 1
         * @param add 是否需要叠加赢赏 （例: MG 在免费中有子项目自带总赢赏框的，控制栏下面显示单局赢赏否则显示总赢赏），不传默认免费中显示总赢赏
         */
        showWinAniView(winType: WinAniType, money: number, cb: Handler, isUpdateWinScore?: boolean, isSyncAllScore?: boolean, delayCbTime?: number, add?: boolean): void;
        playWinAni(winType: WinAniType, money: number, cb: Handler): void;
        /**
         * 播放五连或六连等
         * @param event
         * @param col
         */
        playFullLineAni(event: string, col: number, cb: Handler): void;
        /**
         * 公共奖励
         * @param event
         * @param money
         * @param cb
         */
        addSettlementAni(event: string, money: any, cb: Handler): void;
        /**
         *
         * @param event
         * @param data
         * @param cb
         */
        addUserUpLevelAni(event: string, data: any, cb: Handler): void;
        /**
         *
         * @param event
         * @param freeGameInfo
         * @param cb
         */
        addFreeSpinsAni(event: string, freeGameInfo: FreeGameInfo, cb: Handler): void;
        /**
         *
         * @param event
         * @param freeGameInfo
         * @param cb
         */
        addFreeAdmission(event: string, freeGameInfo: FreeGameInfo, cb: Handler): void;
        protected effectNode: cc.Node;
        /**
         * 子类重写时必须调用父类的此方法
         */
        layoutLandscape(): void;
        /**
         * 子类重写时必须调用父类的此方法
         */
        layoutPortrait(): void;
        /**上一次操作游戏的时间戳 */
        protected lastActiveTime: number;
        /**是否打开了超时弹窗界面 */
        protected isShowingPop: boolean;
        /**超时的时间 */
        private tatalTimeOut;
        /**开启超时未操作的计时器逻辑 */
        protected addUserActiveCheck(): void;
        private checkActive;
        /**显示超时提示UI窗口 */
        protected showTimeOutPrompt(): void;
        private onUserActive;
        /**检查是否可播放音效 */
        checkCanPlayEffect(): boolean;
        /**显示普通中奖提示表现(针对不同品牌公共库可以在继承类里重写这个方法,例如PT手机版的普通版的弹框)*/
        showNormalRewardTip(winCoin: any, showMoveTime?: number, numberAddTime?: number): void;
        private settlementAni;
        addsettlementAni(event: string, money: any, cb: Handler): void;
        private settlementAniPlayComplete;
        getSkin(skinId?: number): string;
        private beforeRestoreReq;
        /**断线之后清除数据和停止流程（重连之后重新创建数据等）防止掉线之后流程还继续跑 */
        protected onNetClose(): void;
    }
    export enum CustomBtnTransition {
        /**
         * 不做任何过渡
         */
        NONE = 0,
        /**
         * 颜色过渡
         */
        COLOR = 1,
        /**
         * 精灵过渡
         */
        SPRITE = 2,
        /**
         * 缩放过渡
         */
        SCALE = 3,
        /**
         * 颜色+缩放
         */
        COLOR_SCALE = 4,
        /**
         * 精灵+缩放
         */
        SPRITE_SCALE = 5
    }
    export enum CustomBtnState {
        NORMAL = 0,
        HOVER = 1,
        PRESSED = 2,
        DISABLED = 3
    }
    export enum CustomBtnLongTouchType {
        /**
         * 不支持长按
         */
        NONE = 0,
        /**
         * 单次触发
         */
        ONCE = 1,
        /**
         * 多次触发
         */
        MULTIPLE = 2
    }
    export class StateSprite {
        normalSprite: cc.SpriteFrame;
        pressedSprite: cc.SpriteFrame;
        hoverSprite: cc.SpriteFrame;
        disabledSprite: cc.SpriteFrame;
    }
    export class StateColor {
        normalColor: cc.Color;
        pressedColor: cc.Color;
        hoverColor: cc.Color;
        disabledColor: cc.Color;
    }
    export class CustomButton extends cc.Component {
        target: cc.Node;
        protected _interactable: boolean;
        get interactable(): boolean;
        set interactable(val: boolean);
        protected _enableAutoGrayEffect: boolean;
        get enableAutoGrayEffect(): boolean;
        set enableAutoGrayEffect(val: boolean);
        longTouchType: CustomBtnLongTouchType;
        triggerElapsed: number;
        triggerInterval: number;
        transition: CustomBtnTransition;
        duration: number;
        zoomScale: number;
        spriteSetIdx: number;
        spriteSet: StateSprite[];
        colorSetIdx: number;
        colorSet: StateColor[];
        clickEvents: cc.Component.EventHandler[];
        protected _pressed: boolean;
        protected _hovered: boolean;
        protected _fromColor: cc.Color;
        protected _toColor: cc.Color;
        protected _time: number;
        protected _transitionFinished: boolean;
        protected _fromScale: cc.Vec2;
        protected _toScale: cc.Vec2;
        protected _originalScale: cc.Vec2;
        protected _sprite: cc.Sprite;
        protected _curState: CustomBtnState;
        get curState(): CustomBtnState;
        protected _longTouchTime: number;
        protected _longTouchTriggered: boolean;
        /**是否冷却中防止多点触发 */
        private static _isOnCooling;
        onLoad(): void;
        protected _resetState(): void;
        onEnable(): void;
        onDisable(): void;
        switchSpriteSet(index: number): void;
        switchColorSet(index: number): void;
        protected _getTarget(): cc.Node;
        protected _onTargetScaleChanged(): void;
        protected _setTargetColor(color: cc.Color): void;
        protected _getStateColor(state: CustomBtnState): cc.Color;
        protected _getStateSprite(state: CustomBtnState): cc.SpriteFrame;
        update(dt: number): void;
        protected _registerNodeEvent(): void;
        protected _unregisterNodeEvent(): void;
        protected _registerTargetEvent(target: cc.Node): void;
        protected _unregisterTargetEvent(target: cc.Node): void;
        protected _getTargetSprite(target: cc.Node): any;
        protected _applyTarget(): void;
        protected _onTouchBegan(event: cc.Event.EventTouch): void;
        protected _onTouchMove(event: cc.Event.EventTouch): void;
        _onTouchEnded(event: cc.Event.EventTouch): void;
        _onTouchCancel(): void;
        _onMouseMoveIn(): void;
        _onMouseMoveOut(): void;
        protected _updateState(): void;
        protected _getButtonState(): CustomBtnState;
        protected _updateColorTransitionImmediately(state: CustomBtnState): void;
        protected _updateColorTransition(state: CustomBtnState): void;
        protected _updateSpriteTransition(state: CustomBtnState): void;
        protected _updateScaleTransition(state: CustomBtnState): void;
        protected _zoomUp(): void;
        protected _zoomBack(): void;
        protected _applyTransition(state: CustomBtnState): void;
        protected _updateDisabledState(force?: boolean): void;
        /**
         * 设置灰色滤镜
         * @param gray true变灰
         * @param node node节点
         * @param recursive 是否递归影响子节点
         */
        protected _switchGrayMaterial(gray: boolean, node: cc.Node, recursive: boolean): void;
        private static _setTimeOutId;
        /**获取是否冷却中*/
        static get isOnCooling(): boolean;
        /**设置是否冷却中 */
        static set isOnCooling(val: boolean);
    }
    /**老虎机滚轴类 */
    export class SlotMachineView extends cc.Component {
        scrollContain: cc.Node;
        maskLayer: cc.Node;
        private _isContext;
        isSetMask: boolean;
        get scroller(): JTChannelScrollerGroup;
        protected _scroller: JTChannelScrollerGroup;
        /**
         * 是否注册鼠标及键盘事件
         */
        protected isRegisterControl: boolean;
        static get instance(): SlotMachineView;
        static _instance: SlotMachineView;
        private scrollerMap;
        private _gameLayer;
        onLoad(): void;
        private createScroller;
        createScrollers(): void;
        changeScrollerByGameID(gameID: number): void;
        getScrollerByGameID(gameID: number): JTChannelScrollerGroup;
        set gameLayer(value: CommonMainView);
        get gameLayer(): CommonMainView;
        set isContext(value: boolean);
        get isContext(): boolean;
        beginScrolling(s: JTScroller): void;
        getScroller(): JTLineScrollerGroup;
        /**
         * 是否激活滚轴遮罩(滚轴停止后去掉遮罩，显示完整的元素)
         * @param boo
         */
        isEnabledMask(boo: boolean): void;
        scrollingComplete(): void;
        /**
         * 单个滚轴停止完成的回调
         */
        private _spinStopHandler;
        /**
         * 单个滚轴开始时的回调
         */
        private _spinStartHandler;
        /**
         * 所有滚轴开始滚动的回调
         */
        private _spinBeginHandler;
        /**
         * 所有滚轴停止时的回调
         */
        private _spinCompleteHandler;
        scrollingProgress(s: JTScroller): void;
        dispose(): void;
        /**
     * 画线的类型（原生画或者图片)
     */
        get drawLineType(): DrawLineType;
        set drawLineType(v: DrawLineType);
        private _lineIdComponent;
        /**
         * 线id容器 节点
         */
        get lineIdComponent(): cc.Node;
        set lineIdComponent(v: cc.Node);
        private _isAutoFreeGame;
        /**
         * 是否自动下一局免费游戏,已废弃
         */
        get isAutoFreeGame(): boolean;
        set isAutoFreeGame(v: boolean);
        private _isManualSpinFistFreeGame;
        /**
         * 是否需要手动请求第一次免费转
         */
        get isManualSpinFistFreeGame(): boolean;
        set isManualSpinFistFreeGame(v: boolean);
        private _isResetRewardAni;
        /**
         * 是否重置总展示的中奖动画（PT轮播时不切换动画）
         */
        get isResetRewardAni(): boolean;
        set isResetRewardAni(v: boolean);
        /** PT 是否是 免费中 再中了免费 */
        private _isFreeGameAgain;
        get isFreeGameAgain(): boolean;
        set isFreeGameAgain(v: boolean);
        private _isLoopGlobalLines;
        /**
         * 轮播中是否总展示
         */
        get isLoopGlobalLines(): boolean;
        set isLoopGlobalLines(v: boolean);
        private _drawLineType;
        /**
         * 画框的类型（原生画或使用图片)
         */
        get drawPaneType(): DrawLineType;
        private _drawPaneType;
        /**
         * 横屏下的遮罩宽
         */
        get maskWidthLandscape(): number;
        set maskWidthLandscape(v: number);
        private _maskWidthLandscape;
        /**
        * 横屏下的遮罩高
        */
        get maskHeightLandscape(): number;
        set maskHeightLandscape(v: number);
        private _maskHeightLandscape;
        /**
         * 竖屏下的遮罩高
         */
        get maskHeightPortrait(): number;
        set maskHeightPortrait(v: number);
        private _maskHeightPortrait;
        /**
         * 竖屏下的遮罩宽
         */
        get maskWidthPortrait(): number;
        set maskWidthPortrait(v: number);
        private _maskWidthPortrait;
        /**
        * spin的间隔
         */
        get spaceX(): number;
        set spaceX(v: number);
        private _spaceX;
        /**
    * spin的间隔
     */
        get spaceY(): number;
        set spaceY(v: number);
        private _spaceY;
        /**
       * 横屏下格子的X间隔
       */
        get spaceXLandscape(): number;
        set spaceXLandscape(v: number);
        private _spaceXLandscape;
        /**
         * 横屏下格子的Y间隔
         */
        get spaceYLandscape(): number;
        set spaceYLandscape(v: number);
        private _spaceYLandscape;
        /**
         * 竖屏下格子的X间隔
         */
        get spaceXPortrait(): number;
        set spaceXPortrait(v: number);
        private _spaceXPortrait;
        /**
         * 竖屏下格子的Y间隔
         */
        get spaceYPortrait(): number;
        set spaceYPortrait(v: number);
        private _spaceYPortrait;
        /**
         * X轴的格子数量
         */
        get gridRepeatX(): number;
        set gridRepeatX(v: number);
        private _gridRepeatX;
        /**
         * Y轴的格子数量
         */
        get gridRepeatY(): number;
        set gridRepeatY(v: number);
        private _gridRepeatY;
        /**
         * 格子宽度
         */
        get gridWidth(): number;
        set gridWidth(v: number);
        private _gridWidth;
        /**
         * 格子高度
         */
        get gridHeight(): number;
        set gridHeight(v: number);
        private _gridHeight;
        /**
         * 轮播线的间隔(如果游戏需要轮播过程中展示静态图标，则此时间也包含了展示静态图标的时间)
         */
        get showLineInterval(): number;
        set showLineInterval(v: number);
        private _showLineInterval;
        /**
         * 中奖时同一条线的播放元素间隔时间，以毫秒为单位
         */
        get playRenderInterval(): number;
        set playRenderInterval(v: number);
        private _playRenderInterval;
        /**
         * 轮播线后多少毫秒展示元素图标，此值应该等于０（表示不起效),且小于等于showLineInterval
         */
        get showImageInterval(): number;
        set showImageInterval(t: number);
        private _showImageInterval;
        private _showLineDuration;
        /**
         * 总展示线持续时间
         */
        get showLineDuration(): number;
        set showLineDuration(v: number);
        /**
         * 滚轴是否需要格子遮罩
         */
        get needSlotMask(): boolean;
        set needSlotMask(need: boolean);
        private _needSlotMask;
        /**
         * 整个滚动轴的方向
         */
        get orientation(): SlotOrientation;
        set orientation(direction: SlotOrientation);
        private _orientation;
        get array(): number[];
        set array(array: number[]);
        private _array;
        /**
         * 单元格渲染回调,当滚轴创建单元格时会进行回调
         */
        get itemRenderHandler(): Handler;
        set itemRenderHandler(handler: Handler);
        private _itemRenderHandler;
        /**
        * 是否在自动模式下正常轮播一次中奖线
        */
        get showLineOnceInAutoTime(): boolean;
        set showLineOnceInAutoTime(t: boolean);
        private _showLineOnceInAutoTime;
        /**当局滚轴是否会有加速*/
        get hasScrollOnSpeedRunning(): boolean;
        /**滚轴是否正在加速中*/
        get isScrollOnSpeedRunning(): boolean;
        /**
        * 程序画线中奖线是否需要动画显示(默认显示动画)
        */
        get isGraphicsLineShowAni(): boolean;
        set isGraphicsLineShowAni(need: boolean);
        private _isGraphicsLineShowAni;
        /**
        * 轮播中是否只轮播总展示
        */
        private _isJustLoopGlobalLines;
        /**轮播中是否只轮播总展示 */
        get isJustLoopGlobalLines(): boolean;
        set isJustLoopGlobalLines(value: boolean);
        /**
        * 支付线轮播中是否隐藏线
        */
        private _hideLinesOnLoop;
        /**支付线轮播中是否隐藏线 */
        get hideLinesOnLoop(): boolean;
        set hideLinesOnLoop(value: boolean);
        /**是否正在播放总展示中奖线 */
        private _onShowGlobalLine;
        /**是否正在播放总展示中奖线 */
        set onShowGlobalLine(value: boolean);
        get onShowGlobalLine(): boolean;
        /**
         * 持续未中奖动画回调
         */
        private _continuousNotWinHandler;
        /**
         * 播放总奖励时的动画回调
         */
        private _normalRewardsAnimationHandler;
        /**
         * 大奖动画播放回调
         */
        private _greatRewardsAnimationHandler;
        /**
         * 播放中奖的回调
         */
        private _middleRewardsAnimationHandler;
        /**
         * 播放小奖的回调
         */
        private _smallRewardsAnimationHandler;
        /**
         * 线上元素全部命中时的动画回调
         */
        private _fullLineAnimationHandler;
        private _settings;
        get settings(): JTScrollerSettings;
        /**
         * 开始旋转滚轴
         */
        startRolling(): void;
        rollingResultResp(): void;
        resetScroller(): void;
        setupScrollerSettings(settings: JTScrollerSettings): void;
        /**
        * 运行后增加额外运行时间,滚轴转到后调用，仅生效一次
        * @param time 单位 毫秒
        */
        addExtralRunningTime(time: number): void;
        /**
         * 滚轴停止(单个)
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any} [args=null] 回调参数, 同时，回调时会将当前停止的滚轴的索引（从0开始）附加到自定参数列表之后
         */
        onSpinStop(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 滚轴开始滚动(单个)
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any} [args=null] 回调参数, 同时，回调时会将当前开始滚动的滚轴的索引（从0开始）附加到自定参数列表之后
         */
        onSpinStart(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 滚轴开始滚动或掉落(所有)
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any} [args=null] 回调参数, 同时，回调时会将当前开始滚动的滚轴的索引（从0开始）附加到自定参数列表之后
         */
        onSpinBegin(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 滚轴结束滚动或掉落(所有)
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any} [args=null] 回调参数, 同时，回调时会将当前开始滚动的滚轴的索引（从0开始）附加到自定参数列表之后
         */
        onSpinComplete(thisObj: any, func: Function, args?: any[]): void;
        /**
        * 当玩家连续多次未中奖时需要播放的动画
        * @method onContinuousNotWinAnimation
        * @param {any} thisObj 方法调用的对象
        * @param {Function} func 回调函数
        * @param {any[]} [args=null] 回调参数
        * @example 回调示例：_onContinuousNotWinAnimation(winCoin:number, cb:Handler):void
        */
        onContinuousNotWinAnimation(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 添加播放总奖励动画时的回调
         * @method onNormalRewardsAnimation
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any[]} [args=null] 回调参数
         * @example 回调示例：_onNormalRewardsAnimation(winCoin:number, cb:Handler):void
         */
        onNormalRewardsAnimation(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 播放中奖线N个元素全中的动画(某一条线上所有元素全部命中了)
         * @method onFullLineAnimation
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any[]} [args=null] 回调参数
         * @example 回调示例：_onFullLineAnimation(winCoin:number, cb:Handler):void
         */
        onFullLineAnimation(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 播放大奖的奖励动画
         * @method onGreatRewardsAnimation
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any[]} [args=null] 回调参数
         * @example 回调示例：_onGreatRewardsAnimation(winCoin:number, cb:Handler):void
         */
        onGreatRewardsAnimation(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 播放中等奖的奖励动画
         * @method onMiddleRewardsAnimation
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any[]} [args=null] 回调参数
         * @example 回调示例：_onMiddleRewardsAnimation(winCoin:number, cb:Handler):void
         */
        onMiddleRewardsAnimation(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 播放小奖的奖励动画
         * @method onSmallRewardsAnimation
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any[]} [args=null] 回调参数
         * @example 回调示例：_onSmallRewardsAnimation(winCoin:number, cb:Handler):void
         */
        onSmallRewardsAnimation(thisObj: any, func: Function, args?: any[]): void;
        /**
         *是否播放中奖动画中
         */
        onPlayerRewardAni: boolean;
        private onRewardAnimation;
        /**
         * 渲染滚轴时的回调
         * 此接口已经废弃
         * @method onItemRender
         * @param {any} thisObj 方法调用的对象
         * @param {Function} func 回调函数
         * @param {any} [args=null] 回调参数
         */
        onItemRender(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 滚轴滚轴初始化处理完成后的回调，只会回调一次
         * @param thisObj
         * @param func
         * @param args
         */
        afterRender(thisObj: any, func: Function, args?: any[]): void;
        /**
         * 滚轴初始化完成后的回调
         */
        private _afterRender;
        /**
         * 通过元素在滚轴中的索引获取其在滚轴上的位置
         * @public
         * @for SlotMachineView
         * @method indexInSlotMachine
         * @param {number} indexInSlotMachine 元素在滚轴上的索引，播放动画时，回调函数会传入此索引
         * @return {Laya.Point} 位置信息
         */
        getPosByIndex(indexInSlotMachine: number): cc.Vec2;
        /**
         * 通过索引获取滚轴位置
         * @param {number} index 滚轴在滚轴上的索引
         */
        getSpinPosByIndex(index: number): cc.Vec2;
        /**
         * 给滚轴添加特效
         * @method addEffect
         * @param {fairygui.GObject} effect 要添加的特效
         * @param {number} index 要添加到位置索引，一般可以相关接口传递
         * @param {number} isAbove 是否添加在元素上层，默认为true
         * @param offset 加在特效层后自定义的偏移量，默认(0,0)
         */
        addEffect(effect: cc.Node, index: number, isAbove?: boolean, offset?: cc.Vec2): cc.Node;
        /**
         * 延迟渲染滚轴的单元格
         */
        lateRender(): void;
        private _defaultNormalRewardsAnimationHandler;
        /**
         * 渲染滚轴界面
         */
        render(): void;
        resetRender(): void;
        private onSelectedLineHandler;
        /**
         *
         */
        onSpinPreStop(): void;
        makeSureFreeGameOverQueueCorrect(cb: Handler): void;
        protected _addEventListener(): void;
        protected _removeEventListener(): void;
        private _stopActionCB;
        /**
         * 滑动滚轴时通知开始旋转
         */
        private _startSpin;
        /**
         * 通知滚轴的处理完成了（停止并完成了各种表现，主要通知主界面可以恢复交互界面了)
         * @param ifImmediately
         */
        _notifySlotMachineComplete(ifImmediately?: boolean): void;
        /**
         * 立即停止
         */
        protected _stopImmediatly(): void;
        protected _isAllAnimationCompleted: boolean;
        /**
         * 滚轴完成走的自定义函数，如定义了以及isRunCusParseOver为true时 代替默认的开始尝试旋转新的请求操作
         */
        cusParseTaskOverHandler: Handler;
        private _isRunCusParseOverHandler;
        set isRunCusParseOverHandler(v: boolean);
        /**
         * 是否走自定义的滚轴完成后函数，子项目可根据逻辑在spin结果后修改此值
         */
        get isRunCusParseOverHandler(): boolean;
        /**
         * 解析任务执行完
         */
        onParseTaskOver(): void;
        /**
         * 单个滚轴停止完成
         */
        private _stopCompleted;
        /**
         * 全部滚轴停止了
         */
        private _allStopped;
        /**
         * 重置线展示，主要用于自动转时，在线展示阶段，玩家手动停止了自动流程，此时需要重新按普通转的方式展示线，防止展示完一轮后，既不自动开始下次转，也不再展示线的问题
         */
        private _resetLineShowing;
        isFreeGameOver: boolean;
        /**
         * 如果不在自动游戏中，则通知滚轴完成
         */
        notifySlotMachineCompleteWhenNotInAuto(): void;
        get isRolling(): boolean;
        private _isRolling;
        private _onStartRolling;
        /**
         * 滚轴开始的声音
         */
        private _playStartSound;
        private _stopStartSound;
        /**
         * 滚轴停止的声音
         */
        private _playReelStopSound;
        private initialVec;
        private _onMouseDown;
        private _stopPlaying;
        showAllLine: boolean;
        protected _onshowLineHandler(): void;
        private _onCloseLineHandler;
        private _delayHideLine;
        private _cancelDelayHideLine;
        private _doHideLine;
        layoutLandscape(): void;
        layoutPortrait(): void;
        /**
         * 展示中奖线时回调
         * @param lineList 多条线数据
         * @param isShowMoreLine 是否显示多条线
         * @returns true会播放原来的切线音效 false不播放
         */
        onShowMoreWinLineCb(lineList: any[], isShowMoreLine: boolean): boolean;
    }
    export abstract class JTItemRender extends JTItemSkinLoader {
        protected _data: any;
        private _index;
        private _currentFrame;
        static STATE_DEFAULT: number;
        static STATE_ROLLING: number;
        static STATE_OVER: number;
        protected _isPlaying: boolean;
        protected _changedData: any;
        protected _elementData: JTElementData;
        constructor();
        /**
         * 播放中奖结果
         * @param line 线结果
         * @param indexLine 在当前线的索引值
         * @param slotMachine 滚轴的视图父容器
         */
        play(line: RollingResult, indexLine: number, slotMachine: SlotMachineView): void;
        /**
         * 跳到某个状态(理解成某一帧)
         * @param frame 状态 / 帧
         */
        gotoAndStop(frame: number): void;
        /**
         * 渲染器的基础数据(Id)
         */
        get data(): any;
        set data(value: any);
        /**
         * 渲染器改变的数据(id)
         */
        get changedData(): any;
        set changedData(value: any);
        /**
         * 渲染器在滚轴的索引
         */
        get index(): number;
        set index(value: number);
        /**
         * 渲染器元素数据
         * 包含了（原始数据、改变过后的数据、索引）
         */
        get elementData(): JTElementData;
        set elementData(value: JTElementData);
        /**
         * 当前的状态（帧）
         */
        get currentFrame(): number;
        set currentFrame(value: number);
        /**
         * 通过point设置渲染器坐标
         * @param point 坐标点对象
         */
        setXYByPoint(point: cc.Vec2): void;
        /**
         * 销毁
         */
        destory(): void;
    }
    export interface SpinElementMap {
        normalImage: string;
        normalImageScale: number;
        normalImageTrim: boolean;
        blurImage: string;
        blurImageScale: number;
        blurImageTrim: boolean;
        fadeImage: string;
        fadeImageScale: number;
        fadeImageTrim: boolean;
        /** 渲染模式(0:实时渲染；  1：共享缓存；  2：私有缓存)*/
        animationCacheMode: number;
        skeletonUrl: string;
        skeletonAniName: string;
        /**图集路径 */
        frameClipUrl: string | string[];
        /**如果为数组形式，表示多个动作叠加表现*/
        normalAniName: string | string[];
        /**如果为数组形式，表示多个动作叠加表现*/
        blurAniName: string | string[];
        /**如果为数组形式，表示多个动作叠加表现*/
        fadeAniName: string | string[];
        sample: number;
        speed: number;
        dragonAssetUrl: string;
        dragonAssetAtlasUrl: string | string[];
        dragonArmature: string;
        dragonAnimation: string;
        normalDragonArmature: string;
        normalDragonAnimation: string;
        fadeDragonArmature: string;
        fadeDragonAnimation: string;
        blurDragonArmature: string;
        blurDragonAnimation: string;
        premultipliedAlpha: boolean;
        /**多语言图片路径 */
        langTexUrl?: string;
        /**骨骼动画默认皮肤名 */
        defaultSkinName?: string;
        /**元素资源类型（0：图片； 1：序列帧； 2：骨骼； 3：龙骨） */
        LoaderAssetType?: number;
        /**增加一个混合类型：模糊状态用图0，其他是骨骼 */
        blurType?: number;
        /**元素资源_多语言种类(eg:["zh","en"])*/
        langResTypes?: string[];
        /**帧动画缩放大小 */
        clipScale?: number;
    }
    export class SpinElementManager {
        private static _instance;
        static get instance(): SpinElementManager;
        private elementMapConfig;
        constructor();
        init(): void;
        getSpinElementConfig(id: number): SpinElementMap;
        /**
         * 根据元素id和
         * @param id 元素id
         * @param frame 元素当前状态（0：默认正常停留状态；  1：滚动状态；  2：滚动结束状态）
         * @returns 返回当前状态下元素的：资源路径、缩放尺寸、是否去掉节点约束框内的透明区域
         */
        getElementImageConfig(id: number, frame: number): {
            url: string;
            scale: number;
            trim: boolean;
        };
    }
    export class JackPotGameManager {
        static get instance(): JackPotGameManager;
        private static _instance;
        startJackPotGame(cb: Handler): void;
        /**
         * 初始化接口
         */
        init(): void;
        /**
         * 释放
         */
        dispose(): void;
        get doingJackPotGame(): boolean;
        private _doingJackPotGame;
        onJackPotGameFinished(): void;
        get hasJackGame(): boolean;
        /**中JP小游戏事件 */
        private jpRwardResp;
        get jpRewardPush(): protoReport.jackpotRewardPush;
        private _jpRewardPush;
        /**
        * 增加协议监听
        */
        private _addProtocolListener;
        /**
         * 移除协议监听
         */
        private _removeProtocolListener;
    }
    export class SlotGameManager {
        private static _instance;
        static get instance(): SlotGameManager;
        constructor();
        private _gameAtlas;
        private _gmConfigData;
        private _configdata;
        private _caller;
        private _callback;
        private _cardRes;
        private resRealyList;
        private _isInfoBack;
        private isEnterRommSucess;
        isFirstEnterRoom: boolean;
        netNode: game.NetNode;
        init(): void;
        start(callBack: Function, caller: any): void;
        loadConfig(): Promise<void>;
        private enterNormalRoom;
        /**
         * 重连后重新进入房间
         */
        private reEnterRoomSuccess;
        private isNewRoom;
        private enterNewRoom;
        private hasInit;
        private begin;
        getCardByName(name: any): cc.SpriteFrame;
        private loadSigleComplete;
        private onInfoResq;
        get gmConfigData(): any;
        clear(): void;
    }
    /**
     * slot自动测试相关配置
     */
    /**
    * 自动测试key(节点、方法)
    * @param SLOT_BTN_MENU 菜单按钮
    * @param SLOT_BTN_BACK 返回按钮
    * @param SLOT_BTN_HELP 帮助按钮
    * @param SLOT_BTN_CLOSE 关闭按钮
    * @param SLOT_BTN_SET 声音按钮
    * @param SLOT_BTN_RULE 规则按钮
    * @param SLOT_BTN_FRIENDROOM 好友房按钮
    * @param SLOT_BTN_GAMERECORD 游戏记录按钮
    *
    * @param SLOT_BTN_SPIN 旋转按钮
    * @param SLOT_BTN_SPIN_QUICK 快速旋转按钮
    * @param SLOT_BTN_SPIN_AUTO 自动旋转按钮
    * @param SLOT_BTN_BET_ADD 增加押注按钮
    * @param SLOT_BTN_BET_SUB 减少押注按钮
    *
    * @param SLOT_LAB_SCORE_TOTAL 总分
    * @param SLOT_LAB_SCORE_WIN 赢分
    * @param SLOT_LAB_SCORE_BET 压分
    * @param SLOT_LAB_SPIN_AUTOTIMES 自动旋转次数
    *
    * @param SLOT_FUNC_GETPLAYERLIST 获取多人共玩信息列表
    *
    * @param SLOT_FUNC_GET_SPIN_RESULT 获取玩家spin结果
    */
    export enum SlotAutoTestKey {
        SLOT_BTN_MENU = "SLOT_BTN_MENU",
        SLOT_BTN_BACK = "SLOT_BTN_BACK",
        SLOT_BTN_HELP = "SLOT_BTN_HELP",
        SLOT_BTN_SET = "SLOT_BTN_SET",
        SLOT_BTN_FRIENDROOM = "SLOT_BTN_FRIENDROOM",
        SLOT_BTN_GAMERECORD = "SLOT_BTN_GAMERECORD",
        SLOT_BTN_RULE = "SLOT_BTN_RULE",
        SLOT_BTN_CLOSE = "SLOT_BTN_CLOSE",
        SLOT_BTN_SPIN = "SLOT_BTN_SPIN",
        SLOT_BTN_SPIN_QUICK = "SLOT_BTN_SPIN_QUICK",
        SLOT_BTN_SPIN_AUTO = "SLOT_BTN_SPIN_AUTO",
        SLOT_BTN_BET_ADD = "SLOT_BTN_BET_ADD",
        SLOT_BTN_BET_SUB = "SLOT_BTN_BET_SUB",
        SLOT_BTN_BET_ROTATION = "SLOT_BTN_BET_ROTATION",
        SLOT_BTN_BET_BET = "SLOT_BTN_BET_BET",
        SLOT_LAB_SCORE_TOTAL = "SLOT_LAB_SCORE_TOTAL",
        SLOT_LAB_SCORE_WIN = "SLOT_LAB_SCORE_WIN",
        SLOT_LAB_SCORE_BET = "SLOT_LAB_SCORE_BET",
        SLOT_LAB_SPIN_AUTOTIMES = "SLOT_LAB_SPIN_AUTOTIMES",
        SLOT_FUNC_GETPLAYERLIST = "SLOT_FUNC_GETPLAYERLIST",
        SLOT_FUNC_GET_SPIN_RESULT = "SLOT_FUNC_GET_SPIN_RESULT",
        SLOT_BTN_ROLLERMODE = "SLOT_BTN_ROLLERMODE"
    }
    export class SlotAutoTestConf {
        private static _instance;
        static getInstance(): SlotAutoTestConf;
        private constructor();
    }
    export enum GameType {
        None = 0,
        MainGame = 1,
        FreeGame = 2,
        BonusGame = 3,
        JackPotGame = 4
    }
    /**
    * 游戏的规则管理器
    */
    export class SpinManager implements SimpleManagerTemplate {
        /**在重转模式下正常显示次数（如娃娃乐) 暂时没用 po将需求更改*/
        _normalGameShowAutoTimesOnRespin: boolean;
        /**在重转中 暂时没用 po将需求更改*/
        private _onRespinTime;
        /**
         * 滚轴间隔时间
         */
        private _spinGap;
        /**
         * 上一次滚动时间
         */
        private _lastSpinTime;
        /**
         * 滚轴数据请求是否返回
         */
        isSpinResp: boolean;
        static get instance(): SpinManager;
        private static _instance;
        /**
         * 当前的游戏类型，区分是在进行主游戏还是在进行小游戏
         */
        get nowGameType(): GameType;
        /**
         * 设置正常滚轴的滚动间隔时间
         */
        setSpinGap(value: number): void;
        set nowGameType(v: GameType);
        private _nowGameType;
        private _betState;
        /** 赌注倍率翻倍 */
        get betState(): number;
        set betState(n: number);
        /**购买额外按钮状态 */
        private _extraBetRate;
        /**购买额外按钮状态 */
        get extraBetRate(): number;
        /**购买额外按钮状态 */
        set extraBetRate(value: number);
        /**
         * 自定义数据是否需要互动
         */
        get isCustomDataInterActive(): boolean;
        set isCustomDataInterActive(v: boolean);
        private _isCustomDataInterActive;
        /**特殊情况下线数更改用于子项目拓展 必须返回需要的线数（例：火爆777 免费模式线数为1 普通模式线数为20 与服务器沟通说总押注统一使用线数20倍数显示 因此需要子项目中特殊处理）*/
        setLineNumOnSpecial: Function;
        /**
         * 玩家压了多少线
         */
        get lineNum(): number;
        set lineNum(v: number);
        /** 基础倍数 */
        private _lineNum;
        /** 不乘倍率的基础投注 */
        get singleBetCost(): number;
        get betRate(): number;
        /**
         * 线注（可以加减的线注） (线注×线号=总赌注)
         */
        get betScore(): number;
        set betScore(linevalue: number);
        private _betScore;
        /**
         * 旋转费用(总赌注)  (线注×线号=总赌注)
         */
        get betCost(): number;
        set betCost(cost: number);
        private _betCost;
        /**
         * 通过给定形参计算旋转费用
         * @param lineCostIndex 投注大小索引
         */
        calcBetCost(lineCostIndex?: number): number;
        /**
         * 开始按钮可见状态
         */
        get startBtnVisible(): boolean;
        set startBtnVisible(v: boolean);
        private _startBtnVisible;
        /**
         * 押线索引，注意是索引
         */
        get lineCostIndex(): number;
        set lineCostIndex(v: number);
        private _lineCostIndex;
        /**
         * 翻倍硬币数据
         */
        set doubleCoin(data: protoSlot.doubleCoinType);
        get doubleCoin(): protoSlot.doubleCoinType;
        private _doubleCoin;
        /**
         * 线倍率(索引)
         */
        set lineRate(v: number);
        get lineRate(): number;
        private _lineRate;
        /**
         * 押分系数
         */
        set rateModulus(v: number);
        get rateModulus(): number;
        private _rateModulus;
        /**
         * PT 是否在自动游戏中（只有在弹框是否继续，点击了否才结束）
         */
        get isInNormalAutoGame(): boolean;
        set isInNormalAutoGame(value: boolean);
        private _isInNormalAutoGame;
        /**
         * 自动尝试次数，玩家的设定值，只能玩家手动设定
         */
        get autoTimes(): number;
        set autoTimes(t: number);
        private _autoTimes;
        /**
         * 剩余自动尝试次数,如果小于0表示直到环节，其它表示剩余尝试次数
         * 如果非直到，则每玩一次，剩余次数自减
         */
        get restAutoTimes(): number;
        set restAutoTimes(v: number);
        private _restAutoTimes;
        /**
         * 是否在进行自动游戏
         */
        get isInAuto(): boolean;
        set isInAuto(v: boolean);
        private _isInAuto;
        private _isInAutoInit;
        /**
         * 是否在快速模式
         */
        get isInTurbo(): boolean;
        set isInTurbo(v: boolean);
        private _isInTurbo;
        /**
         * 旋转方向(正向:1, 反方向:-1)
         */
        get rollingDirection(): RollingDirection;
        set rollingDirection(v: RollingDirection);
        private _rollingDirection;
        /**
         * 滚动结果
         */
        get rollingResult(): protoSlot.spinResp;
        private _rollingResult;
        /**
         * 平坦化后的旋转线结果，供滚轴界面显示线结果用
         */
        get flattenLineRewardsResults(): RollingResult[];
        private _flattenLineRewardsResults;
        /**
         * 一次SPIN总共赢取的奖励(包括奖池)
         */
        get totalWin(): number;
        set totalWin(win: number);
        private _totalWin;
        /**
         * 旋转赢的钱
         */
        get spinWin(): any;
        private _spinWin;
        /**
         * 本次SPIN总共赢取的奖励与押分的比率
         */
        get totalWinRate(): number;
        private _totalWinRate;
        /**
         * 滚动结果的格子索引与元素的映射spin
         */
        /**
         * 游戏当前的滚轴数据, 是一个二维数组，
         */
        get spinSlotsData(): number[];
        private _spinSlotsData;
        /**
         * 游戏当前改变后的的滚轴数据, 是一个二维数组，
         */
        get spinSlotsGridChangedData(): number[];
        private _spinSlotsGridChangedData;
        /**
         * 基础信息是否已经刷新了
         */
        get baseDataUpdated(): boolean;
        private _basedDataUpdated;
        /**
         * 是否正在进行游戏
         * 自动游戏时，需要所有次数用完后，才会退出游戏状态
         */
        get inGame(): boolean;
        set inGame(v: boolean);
        private _inGame;
        /**
         * 永久的增速比率,该比率会永久性的影响滚轴的旋转时间，比率越大，旋转时间越长
         */
        get permanentSpeedUpRate(): number;
        set permanentSpeedUpRate(v: number);
        private _permanentSpeedUpRate;
        /**
         * 是否需要播放未中奖动画（连续3次未中奖)
         */
        get needPlayUnhittedAni(): boolean;
        private _continuousUnHittedTimes;
        /**
         * 是否有线全中了
         */
        get isFullLineWin(): boolean;
        private _isFullLineWin;
        /**
         * 五连的中奖动画是否开启
         */
        get isFullLineAvailable(): boolean;
        set isFullLineAvailable(available: boolean);
        private _isFullLineAvailable;
        /**
         * 滚轴是否已经停止转动
         */
        isSlotMachineStopped: boolean;
        /**
         * 触摸滚轴或空格键是否有效
         */
        _spinTouchEnable: boolean;
        /**
         * 触摸滚轴或空格键是否有效
         */
        get spinTouchEnable(): boolean;
        set spinTouchEnable(value: boolean);
        /**
         * 更新的子游戏扩展数据
         */
        get customUpdateData(): protoSlot.handleStateType;
        private _customUpdateData;
        get minGameMoney(): number;
        set minGameMoney(num: number);
        private _minGameMoney;
        get cur_roller_mode(): number;
        private _cur_roller_mode;
        get roundId(): Long;
        set roundId(id: Long);
        private _roundId;
        isOldSpinResp: boolean;
        private _rollerLv;
        get rollerLv(): number;
        set rollerLv(value: number);
        get lineValueMultipleIndex(): number;
        set lineValueMultipleIndex(v: number);
        private _lineValueMultipleIndex;
        private _assginLine;
        get assginLine(): number[];
        set assginLine(value: number[]);
        private _invalidSpin;
        /**
         * 是否无效结果
         */
        get invalidSpin(): boolean;
        constructor();
        init(): void;
        dispose(): void;
        /**
         * 忽略快速提示
         */
        ignoreStopImmediatelyTimes(): void;
        /**
         * 重置连续不中奖的次数
         */
        resetUnHitTimes(): void;
        /**
         * 将线数设置为最大
         */
        setLineNumMax(): void;
        /**
         * 设置为最小线数
         */
        setLineNumMin(): void;
        /**
         * 押线设置为最大
         */
        setLineCostIndexMax(): void;
        /**
         * 押线设置为最小
         */
        setLineCostIndexMin(): void;
        /**
         * 请求上次的游戏数据
         */
        requestLastGameInfo(): void;
        /**
         * 请求玩家基础数据
         */
        requestPlayerData(): void;
        /**
         * 通过索引获取对应的押线
         */
        getLineCostByIndex(index?: number): number;
        initLineNumAndCost(state: protoSlot.stateType): void;
        checkGlobalQueue(): void;
        _autoTempTimesData: number;
        set tempAutoTimes(value: number);
        get tempAutoTimes(): number;
        private _planedFreeGame;
        /**
         * 触发了免费游戏或小游戏
         */
        onFreeGameTrigger(): void;
        /**
         * 每局结束后，继续下一句免费或自动游戏等操作
         * @param isAutoFreeGame 是否自动下一句免费
         * @returns
         */
        onShowLineOver(isAutoFreeGame?: boolean): void;
        /**
         * 免费游戏结束了
         */
        onFreeOrBonusGameOver(delayBalanceFreeGame?: boolean): void;
        storeAutoGameTimes(ifEvent?: boolean): void;
        switchTipsWhenSlotMachineStop(): void;
        /**
         * 恢复自动游戏次数
         */
        recoverAutoGameTimes(): void;
        autoFreeGame(): void;
        planToUpdateCustomData(): void;
        updateCustomData(): void;
        private _onCustomDataUpdate;
        private _notifyCustomDataUpdated;
        private _addEventListener;
        private _removeEventListener;
        private _initAutoTimes;
        private _initLineNum;
        private _initLineNumAndCostBySpinParam;
        private platformRate;
        /**
         * 获取真实的线倍率
         */
        getRealLineRate(): number;
        getLinelMutiple(): number;
        /**
         * 初始化押线
         */
        private _initLineCostIndex;
        private _initialized;
        lastTimeSpinResult: protoSlot.spinInfoType;
        lastTimeSpinHandle: protoSlot.handleStateType;
        /**玩家投注状态与倍率数据信息 */
        betStateType: protoSlot.betStateType;
        /**
         * 收到了现场还原信息
         */
        private _onLastGameInfoResp;
        private _onChangeCostResp;
        /**切换投注状态协议数据返回 */
        private _onChangeBetStateResp;
        /**
         * 收集任务数据返回
        */
        private _onCollectChooseResp;
        /**临时普通游戏重连数据 */
        private _tempResNomalData;
        /**临时普通游戏重连数据 */
        get tempResNomalData(): any;
        set tempResNomalData(val: any);
        /**
         * 设置自定义格子数据回调方法,带一个形参grids（适用于不规则滚轴，如：2529-群星闪耀)
         * @param grids 待修改的原始格子数据
         * @param gridChanged 待修改的原始格子数据
         * */
        static customGridsCallback: Function;
        /**
         * 设置自定义格子数据（适用于不规则滚轴，如：2529-群星闪耀)
         * @param grid 待修改的原始格子数据
         * */
        private setCustomGrids;
        /**
         * 设置自定义结果（适用于消除类)
         */
        static customResultCallBack: Function;
        getCustomResult(): any;
        /**
         * 初始化滚轴槽信息
         */
        private _initSpinSlotsData;
        private _getGridsFromLastGameInfo;
        /**
         * 玩家开始了单次滚动
         */
        private _onClickSingleStartBtn;
        /**
         * 非游戏状态下按下开始按钮
         * 此时只是简单的开始一次单次旋转
         */
        private _onClickSingleStartBtnNotInGame;
        /**
         * 游戏中按下开始按钮
         */
        private _onClickSingleStartBtnInGame;
        /**
         * 自动模式下按下了旋转按钮
         * 自动模式下必然是在游戏中
         */
        private _onClickSingleStartBtnInAuto;
        /**
         * 非自动模式下，但在游戏中按下旋转按钮
         */
        private _stopImme;
        private _onClickSingleStartBtnNotInAuto;
        get stopImme(): boolean;
        set stopImme(value: boolean);
        /**
         * 点击了滚轴界面
         */
        private _onClickSlotMachineView;
        /**
         * 滑动滚轴
         */
        private _onSlideSlotMachine;
        private _stopImmediatelyTimes;
        private _ignoreClick;
        private _checkAndShowEnableTurboView;
        /**
         * 是否可以旋转
         */
        private _checkSpin;
        /**
         *
         */
        private _isMoneyEnough;
        private _waitToResume;
        hasDumyQueue: boolean;
        private _startSpin;
        /**
         * 多次游戏
         */
        private _onClickedMultiStartBtn;
        /**
         * 自动游戏
         */
        private _doClickMultiStartBtn;
        private _resetWhenStartSpin;
        /**
         * 处理普通的开始游戏：非小游戏
         */
        private _renderNormalStart;
        renderNormalStartFreely(): void;
        private _doSingleSpinFreely;
        private _doSingleSpin;
        private _requestSpinFreely;
        /**
         * 旋转的额外参数
         */
        private _extra;
        get extra(): number[];
        set extra(value: number[]);
        private _appointRate;
        /**
         * 指定倍率
         */
        get appointRate(): number;
        set appointRate(value: number);
        private _requestSpin;
        isSlotMahcineCompleted: boolean;
        /**
         * 滚轴滚动完成了
         */
        private _onSlotMachineCompleted;
        private _switchTipStateInRolling;
        private onceWin;
        /**是否是以历史记录打开界面 */
        isLastView: boolean;
        /**本次翻硬币次数 */
        throwTimes: number;
        /**
         * 线展示完成了（目前只能免费游戏有用)
         */
        private _onShowLineOver;
        private _planedStart;
        private _planToSingleStart;
        private _checkAndStart;
        private _cancelSingleStartPlan;
        private _cancelAllPlan;
        cancelAutoGame(): void;
        private _planedAutoGame;
        private _planToAutoGame;
        /**
         * 免费游戏结束了，延迟1秒开始自动转模式直到免费次数用完
         */
        private _checkAndAutoStart;
        private _cancelAutoStartPlan;
        private _onSlotMachineStopped;
        /**
         * 滚动回复
         */
        private _onRollingResp;
        private _onBuyFreeRollingResp;
        private _renderCustomUpdateList;
        private _renderSpinResp;
        /**
         * 平坦化旋转结果
         */
        doFlattenLineRewardsResult(result: protoSlot.spinResultType): void;
        private _hasNewCustomData;
        makeDefaultDataResp(): void;
    }
    /**
* FreeGameManager
*/
    export class FreeGameManager implements SimpleManagerTemplate {
        /**
         * 单例
         */
        static get instance(): FreeGameManager;
        private static _instance;
        /**
         * 是否有免费游戏(包括重转)
         */
        get hasFreeGame(): boolean;
        /**
         * 本局是否是免费游戏(包括重转)所触发的
         */
        get isTreateFromFreeGame(): boolean;
        /**
         * 是否是非免费类型，即不是免费游戏，但玩家不能换押分，仅配合服务器用免费数据这些字段，用id=19来区分
         */
        get isNotFreeType(): boolean;
        /**
         * 免费游戏是否结算过了
         */
        get isFreeGameBalanced(): boolean;
        set isFreeGameBalanced(v: boolean);
        private _isFreeGameBalanced;
        /**
         * 是否有新触发的免费游戏
         * 1.触发时为true
         * 2.当旋转一次后，置为false
         */
        get hasNewFreeGame(): boolean;
        set hasNewFreeGame(v: boolean);
        private _hasNewFreeGame;
        /**
         * 需要延迟派发的事件(延迟至滚轴完成)
         */
        private _delayEvent;
        treatingTrigger: boolean;
        private _initialized;
        /**
         * 初始化接口
         */
        init(): void;
        /**
         * 释放
         */
        dispose(): void;
        /**
         * 拥有的免费游戏信息
         */
        get freeGameInfo(): FreeGameInfo;
        set freeGameInfo(info: FreeGameInfo);
        private _freeGameInfo;
        /**
         * 是否会处理再次触发免费游戏的事件
         */
        get willHandleTriggerAgain(): boolean;
        set willHandleTriggerAgain(v: boolean);
        private _willHandleTriggerAgain;
        /**
         *
         */
        get triggeredAgain(): boolean;
        set triggeredAgain(v: boolean);
        private _triggeredAgain;
        /**
         * 是否触发免费游戏结束
         */
        get isTreateFreeOver(): boolean;
        set isTreateFreeOver(v: boolean);
        private _isTreateFreeOver;
        /**
         *本局是否触发了免费游戏，免费中触发免费不算
         */
        get isTreateNewFree(): boolean;
        set isTreateNewFree(v: boolean);
        private _isTreateNewFree;
        /**
         * 上一次的免费游戏信息，只有当免费游戏结束后且在结算前才有数据
         */
        get lastFreeGameInfo(): FreeGameInfo;
        set lastFreeGameInfo(info: FreeGameInfo);
        private _lastFreeGameInfo;
        get isAutoNextFree(): boolean;
        set isAutoNextFree(value: boolean);
        private _isAutoNextFree;
        renderResume(state: protoSlot.stateType, needEvent?: boolean): void;
        renderBonusResume(resp: protoSlot.lgActionResp, bonusGameInfo?: BonusGameInfo): void;
        /**是不是免费游戏或者重转 用于非免费状态下发送免费请求导致协议报错 （只在收到消息时改变状态，因此请不要随意赋值更改此变量，只用于判断是否可以请求免费旋转）*/
        isFreeGame: boolean;
        /**
         * 上次免费游戏ID,只在免费游戏被打断时才会记录
         */
        /**
         * 处理免费游戏数据
         * 1.当有新的免费转触发时state.freeData将填充数据
         * 2.如果没有新的触发，只是更新当前的免费游戏数据，则通过
         */
        render(spinResp: protoSlot.spinResp, bonusGameInfo?: BonusGameInfo): void;
        onResumeFreeGameHandler(ifImmediately?: boolean): void;
        /**
         * 滚轴转动完成了,此时需要触发延迟派发的事件
         */
        onSlotMachineStopped(): void;
        /**
         * 尝试进行免费游戏流程，如果成功，则返回true,此时其它模块应该将控制权交给FreeGameManager
         */
        try(): boolean;
        /**
         * 进行一次免费游戏
         */
        private _doFreeGame;
        /**
         *
         * @param state
         */
        private _renderByNextState;
        renderReconnect(state: protoSlot.stateType): void;
        private _addEventListener;
        private _removeEventListener;
        doAniDelayCb(cb: any): void;
        /**更新押注 (有的游戏可能出现免费模式和普通模式的中奖线数不一样，因此需要更新，不然导致重连时押注对不上 例如:火爆777)*/
        private upDateLineNum;
        /**
         * 游戏是否在免费场景(由于公共库缺少判断条件所以需要子项目确认是否在哪个场景，由于子项目中可以通过id确认重转是否在免费中还是普通模式中，以此通过返回的场景来确定是否需要触发免费接口)
         * @param data
         */
        isInFreeGameScene?(data: protoSlot.stateType): boolean;
        constructor();
        private _isShowFreeOverWinAddTrigger;
        /**免费结束赢分是否加上触发局 */
        get isShowFreeOverWinAddTrigger(): boolean;
        set isShowFreeOverWinAddTrigger(bo: boolean);
    }
    export class AtlsElmentConfig {
        elmentSpriteFrame: cc.SpriteFrame;
        id: string;
    }
    /**
     * 该脚本不在扩展维护，在MG类型的项目不要再使用，PG项目中谨慎使用。
     */
    export class CommonNumAtlasBase extends cc.Component {
        private _dataStr;
        set string(value: string);
        get string(): string;
        private _anchorY;
        set anchorY(value: number);
        get anchorY(): number;
        AtlsElment: AtlsElmentConfig[];
        private _spaceX;
        set spaceX(value: number);
        get spaceX(): number;
        private _showStyle;
        private _offScale;
        private _offPosY;
        private _offPosX;
        set showStyle(value: number);
        get showStyle(): number;
        set offScale(value: number);
        get offScale(): number;
        set offPosX(value: number);
        get offPosX(): number;
        set offPosY(value: number);
        get offPosY(): number;
        private _shrink;
        set shrink(value: boolean);
        get shrink(): boolean;
        private _maxWidth;
        set maxWidth(value: number);
        get maxWidth(): number;
        private _syncRootWidth;
        set syncRootWidth(value: boolean);
        get syncRootWidth(): boolean;
        private _useOriginalSize;
        set useOriginalSize(value: boolean);
        get useOriginalSize(): boolean;
        protected pool: cc.Node[];
        protected containerNode: cc.PrivateNode;
        protected _sumChildrenWidth: number;
        get sumChildrenWidth(): number;
        private numberUnitWidth;
        /**节点色值*/
        myColor: cc.Color;
        /** “处理自适应内部"图集"字宽度” 时是否考虑节点x锚点，默认false不考虑*/
        _resetPicLabelWidthWithArchorX: boolean;
        onLoad(): void;
        private resetUnitWidth;
        private isNumberString;
        private isPunctuationString;
        protected resetPicFromNum(): void;
        private getPicElementConfig;
        /** 处理自适应内部"图集"字宽度 */
        private resetPicLabelWidth;
        /** 同步根节点宽度
         *  - 若使用根节点宽度，则根节点宽度会随子节点改变
         *  - 若不适用，则使用最大宽度
         */
        private resetRootNodeWidth;
        protected onDestroy(): void;
    }
    /**点击按钮控制 用来统一接口控制 */
    class UIBtnClickCtr {
        constructor();
        /**是否可以点击功能按键（防止同时点击多个弹出多个弹窗）*/
        private bStopClickBtn;
        /**按钮恢复点击时间*/
        private resetCanClickTime;
        /**注册点击事件 */
        registerBtnClickCb(itemNode: any, cb: any, target: any): void;
        /**注销点击事件 */
        unRegisterBtnClickCb(itemNode: any, cb: any, target: any): void;
        /**功能键按钮回调 */
        private _onClickBtnCb;
    }
    const _default: UIBtnClickCtr;
    export _default;
    export enum fastBtn_status {
        FAST = 1,
        SLOW = 2
    }
    /**
     * 控制按钮状态
     */
    export enum ctlBtn_status {
        NORMAL = 1,
        RUNNING = 2,
        AUTO = 3
    }
    export class GameControlBase extends BaseView {
        fastBtn: cc.Node;
        subBtn: cc.Node;
        ctlBtn: cc.Node;
        addBtn: cc.Node;
        setBtn: cc.Node;
        ctlBtnBG: cc.Sprite;
        autoSpinBtn: cc.Node;
        rotate: cc.Node;
        slowNode: cc.Node;
        fastNode: cc.Node;
        betBtn: cc.Node;
        backBtn: cc.Node;
        timesAtlasLabel: CommonNumAtlasBase;
        timesAtlasLabel2: cc.Label;
        betLabel: cc.Node;
        autoEffect: cc.Node;
        rotateEffect: cc.Node;
        houverEffect: cc.Node;
        autoEffect2: cc.Node;
        rotateEffect2: cc.Node;
        houverEffect2: cc.Node;
        auto_btn_slowNode: cc.SpriteFrame;
        auto_btn_fastNode: cc.SpriteFrame;
        fast_sk: sp.Skeleton;
        auto_sk: sp.Skeleton;
        denomination: string;
        private oldBetLabel;
        private changeCostTipNode;
        cancelBetBtn: cc.Node;
        confirmBetBtn: cc.Node;
        isOpenRoll: boolean;
        private timing;
        private runningRotateSpeed;
        private idleRotateSpeed;
        static _instance: GameControlBase;
        private oldRateGapIndex;
        private oldBetCost;
        private oldLineCostIndex;
        private oldLineValueMultipleIndex;
        static get instance(): GameControlBase;
        private isLongTouching;
        private arrowSpriteFame;
        private arrowHoverSpriteFame;
        private arrowGreySpriteFrame;
        private arrowBlurSpriteFrame;
        private spinSpriteFrame;
        private autoSpriteFrame;
        private autoBoxSpriteFrame;
        private BlendFactor;
        private BoxBlendFactor;
        private SpriteScale;
        private disableOpacity;
        private info;
        private addRotate;
        private addrotateTwee;
        private addRotateAndSpin;
        /**悬浮特效播放间隔时间 */
        private houverEffectPlayIntervalTime;
        /** 当前加减注索引 */
        get rateGapIndex(): number;
        set rateGapIndex(index: number);
        private _rateGapIndex;
        private _rateGapConf;
        private themeColor;
        private isUseArtWords;
        initBtn(): void;
        onLoad(): void;
        private effectMap;
        private effectMapScale;
        private effectMapHouverScale;
        private effectMapHouverAutoScale;
        private initEffect;
        /**
         * 旋转按钮关联的粒子动效
         * @param config 子项目配置
         * @param data 粒子资源
         */
        private initParticleEffect;
        addIconBtn: any[];
        private initAddIcon;
        private ctlBtnBgSetPos;
        private initControlBtn;
        private layoutBtn;
        private initTimesAtlasLabel;
        private setChildColor;
        private _btnListY;
        private initBtnListY;
        private popBottons;
        private tweenBtn;
        private initData;
        private reenterRoom;
        onEnable(): void;
        private clickAuto;
        onDisable(): void;
        private rotateTwee;
        private upRotateState;
        private upRotateStateAdd;
        onClickAutoSpinBtn(): void;
        onClickBackBtn(): void;
        /**是否开启极速旋转 */
        onClickFastBtn(): void;
        onClickBetBtn(): void;
        /**点击取消下注 */
        onClickCancelBetBtn(): void;
        /**点击确认下注 */
        onConfirmBetBtn(): void;
        onSlotMachineStopped(): void;
        private isOpenSpinButton;
        private forceUpdateSpinButton;
        setLineIndex(): void;
        startRoller(): void;
        private setCtrBtnSate;
        private stopRotate;
        private startRotate;
        private spinButtonStop;
        /**是否触发特殊模式中（特殊模式下控制按钮置灰）*/
        private _hasSpeicalMode;
        /**是否触发特殊模式中（特殊模式下控制按钮置灰）子项目中控制参数*/
        get hasSpeicalMode(): boolean;
        set hasSpeicalMode(b: boolean);
        private spinButtonOpen;
        /**
         * 设置旋转按钮图片显示样式  （目前的 正常旋转的 置灰的情况有 急停， 普通停有中奖 ， 触发特殊模式 , (免费和自动的情况待确定)）
         * @param sf 图片精灵
         */
        protected setRotateBtnSprite(sf: cc.SpriteFrame): void;
        get fastBtnState(): fastBtn_status;
        private _fastBtnState;
        set fastBtnState(val: fastBtn_status);
        _onClickSubBtn(): void;
        /**
         * 点击减注按钮 可重写
         */
        protected onClickSubBtn(): void;
        /**
         * 实际处理点击减注按钮
         */
        protected clickSubBtnHandler(): void;
        get subBtnState(): boolean;
        private _subBtnState;
        set subBtnState(val: boolean);
        /**
         * 自定义 减注按钮 禁用/解禁 时按钮表现效果
         */
        protected subBtnCanUse(interactable: boolean): void;
        /**
         * 点击单次旋转按钮
         * @returns
         */
        onClickCtlBtn(): void;
        private isClick;
        /**点击控制按钮派发事件 */
        onClickCtrBtnEvent(): void;
        private lastState;
        private nowState;
        get ctlBtnState(): ctlBtn_status;
        private _ctlBtnState;
        set ctlBtnState(val: ctlBtn_status);
        /**
         * 当开始按钮状态改变时回调
         * @param state 开始按钮的状态
         */
        onBtnsVisibleChange(state: boolean): void;
        private isPlayEffect;
        private isPlaySk;
        private isPlayEffect2;
        private isPlaySk2;
        playTouchEffect(): void;
        onMouseLeave(): void;
        _onClickAddBtn(): void;
        /**
         * 点击加注按钮 可重写
         */
        protected onClickAddBtn(): void;
        /**
         * 实际处理点击加注按钮
         */
        protected clickAddBtnHandler(): void;
        get addBtnState(): boolean;
        private _addBtnState;
        set addBtnState(val: boolean);
        /**
         * 自定义 加注按钮 禁用/解禁 时按钮表现效果
         */
        protected addBtnCanUse(interactable: boolean): void;
        onClickSetBtn(): void;
        private offX;
        private orientationChange;
        layout(): void;
        private _onResourceloaded;
        private updateCtlBtnState;
        private onStartRolling;
        /**
         * 播放按钮开始旋转的相关动画
         * @param _timeScale1 动画1的时间缩放率
         * @param _timeScale2 动画2的时间缩放率
         */
        private playAllRotateAni;
        /**
         * Skeleton动画1
         * @param _timeScale 动画1的时间缩放率
         */
        private playRotateSkAni1;
        /**
         * Skeleton动画2
         * @param _timeScale 动画2的时间缩放率
         */
        private playRotateSkAni2;
        private playRotatePsAni;
        private _updateRestTimes;
        private _changeAuto;
        protected isBtnsVisible: boolean;
        setBtnEnabled(enable: boolean, isBonusGameOver?: boolean): void;
        isAllBtnClick: boolean;
        /**
         * 控制按钮是否可以点击(除快速按钮)
         * @param event
         * @param isClick 按钮是否可以点击
         */
        private AllBtnClick;
        /**
         * 控制按钮是否可以点击(除快速按钮)--透明度
         * @param event
         * @param isShow
         */
        private AllBtnOpacity;
        /**
         * 控制按钮是否显示隐藏(特殊情况：3个分散及以上控制按钮隐藏)
         */
        private isEventHideEnable;
        private ctrBtnShowOrHide;
        /**
         * 设置最小押线索引
         */
        protected setMinBet(): void;
        /**
         * 设置最大押线索引
         */
        protected setMaxBet(): void;
        private _onSubBtnLongTouch;
        /**
         * 长按减注按钮 (可重写)
         */
        protected onSubBtnLongTouch(): void;
        private _onAddBtnLongTouch;
        /**
         * 长按加注按钮 (可重写)
         */
        protected onAddBtnLongTouch(): void;
        onTouchStart(e: cc.Event): void;
        onTouchEnd(e: any): void;
        onTouchCancel(e: any): void;
        private upEventDateBetIndex;
        updateBetIndex(index: number): void;
        updateBetBtnState(): void;
        private playScreenFlashEffect;
        showFastModeTip(): void;
        onDestroy(): void;
        /**
         * 获取当前押注的压线所在索引值
         * TODO 此处数据加工思路有待商榷
         */
        private findRateGapIndex;
        /**
         * 获取当前押注的减注值
         *      - 减注值不需要再减1
         * TODO 此处数据加工思路有待商榷
         */
        private findSubIndex;
        private syncBetSizeAndLevel;
        /**
         * 同步更新押线索引和押分总额
         */
        private updateGameControlBet;
        /**显示下注提示 */
        private showChangeCostTip;
        /**隐藏下注提示 */
        hideChangeCostTip(isChangeBet?: boolean): void;
        /**
         * 开始按钮是否可以点击
         * @param enabled
         */
        private enabledCtlBtn;
        private openMenu;
        private closeChangeCostTip;
        private buyFreeGameExpand;
        private freeGameOver;
        private onScatterTaskStart;
        private onScatterTaskEnd;
    }
    /**
 * 底部信息栏展示，自动监听数据更新显示
 */
    export class ScoreBase extends BaseView {
        winScore: cc.Label;
        allScore: cc.Label;
        betScore: cc.Label;
        winScoreBtn: cc.Node;
        balanceBtn: cc.Node;
        betScoreBtn: cc.Node;
        private _totalWin;
        isPlayNormalEff: boolean;
        private isRetainWinNum;
        private _allScoreNum;
        private _winScoreNum;
        private complete;
        private allScoreTween;
        private nodes;
        /** 数字背景图集 */
        private p_arrNodeBg;
        private scoreColor;
        private settingStyle;
        private winScoreTween;
        static get instance(): ScoreBase;
        private static _instance;
        get totalWin(): number;
        set totalWin(v: number);
        onLoad(): void;
        private onBalanceBtnClick;
        private onWinScoreBtnClick;
        /** 押注区域点击 */
        private onBetScoreBtnClick;
        private reenterRoom;
        private onEnables;
        private initScore;
        buyFreeResp(): void;
        onSlotMachineStopped(): void;
        private onShowLineOver;
        set allScoreNum(value: number);
        get allScoreNum(): number;
        set winScoreNum(value: number);
        get winScoreNum(): number;
        updateWinScore(mess?: any): void;
        updateAllScore(): void;
        forUpdateAllScore(event: string, balance: number): void;
        updateBetScore(event?: string, isChange?: boolean): void;
        private updateSocrePosition;
        forceUpdateBetScore(event: string, num: number): void;
        /**
         * 强制更新赢分
         * @param event
         * @param num
         */
        private forUpdateWinScore;
        /**
         *
         * @param event
         * @param num 传入金币值
         * @param isRetain 新的一局是否保持
         * @param isAdd 是否在原有数值上基础上增加传入的值
         * @param isResetDelay 是否展示后重置
         * @param complete 完成的回调
         * @param isSyncAllScore 是否同步玩家金币
        */
        private updateWinNum;
        private updateWinScoreRetain;
        private startRoller;
        private resWin;
        private setBalanceSpriteOpacity;
        private _delayCbTime;
        set normalWinDelayCbTime(time: number);
        /**普通中奖延时回调及更新余额 默认0.5秒 子项目可设置 */
        get normalWinDelayCbTime(): number;
        onDestroy(): void;
    }
    export class SlotBanner extends BaseView {
        /**跑马灯节点（是sprite类型）*/
        banner: cc.Sprite;
        /**跑马灯节点(是label类型) */
        bannerLabel: cc.Label;
        /**跑马灯节点(是RichText富文本类型) */
        bannerRichText: cc.RichText;
        duration: number;
        waitDuration: number;
        startPos: number;
        /**当前播放的跑马灯的位置 */
        private randomNumber;
        /**跑马灯图片形式的文本信息 */
        bannerInfo: cc.SpriteFrame[];
        /**跑马灯label形式的文本信息(存放多语言的key值列表) */
        protected bannerLabelKeyInfo: string[];
        private tween;
        private isInit;
        /**跑马灯配置数据 */
        private bannerData;
        /**跑马灯node节点 */
        private bannerNode;
        /**多张图片一起滚动 */
        private isSpriteArr;
        private banner2;
        protected onLoad(): void;
        private initSetInfo;
        private initBannerInfo;
        /**开始启动跑马灯 */
        private startPlay;
        /**
         * 设置跑马灯展示内容数据
         * index 类型可以是number 或者  number[]
         */
        setInfo(event: string, index: any): void;
        private initBanner;
        /** 正在播放跑马灯*/
        private onPlayBanner;
        /**停止跑马灯 */
        private onStopBanner;
        /**设置富文本 ImageAtlas*/
        private setRichTextImageAtlas;
        onDestroy(): void;
    }
    export class BuyFreeBtnBase extends game.View {
        btn: cc.Node;
        onLoad(): void;
        onEnable(): void;
        onDestroy(): void;
        onClick(uiid: number): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export class BuySpinSlot extends BuyFreeBtnBase {
        onClick(): void;
    }
    export class HashSlot extends game.View {
        private lastPoint;
        iconBtn: cc.Node;
        timestampText: cc.Node;
        directText: cc.Node;
        hashChainText: cc.Node;
        nodeGameNum: cc.Node;
        nodeTips: cc.Node;
        nodeTipsBg: cc.Node;
        labelTips: cc.Label;
        nodeProgress: cc.Node;
        spriteProgress: cc.Sprite;
        labelProgress: cc.Label;
        labelGameNum: cc.Label;
        curProgress: number;
        onLoad(): void;
        onDestroy(): void;
        reStoreResp(): void;
        start(): void;
        private renderHashRest;
        private createHashChaining;
        protected update(dt: number): void;
        private addEvent;
        private updateHashRest;
        private onTouchStart;
        private clickBinanceHashBtn;
        private onTouchEnd;
        private openHelpView;
        /**
         * 按钮移动
         */
        private iconTouchMove;
        layout(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export class TurnCoinSlot extends game.View {
        btn: cc.Node;
        ani: sp.Skeleton;
        private netNode;
        onLoad(): void;
        onEnable(): void;
        onDestroy(): void;
        layout(): void;
        onClick(): void;
        /**
         * 按钮移动
         */
        private iconTouchMove;
    }
    /**
     * PG 专用 scrollview
     */
    export class FixedScrollView extends cc.ScrollView {
        onLoad(): void;
        onScrollEvent(): void;
        private onEnter;
        private onLeave;
        private onTouchStart;
        private onTouchBarMove;
        _onMouseWheel(event: any, captureListeners: any): void;
    }
    /**
 * 某些项目切换压分会调用。
 * 打开赔付表界面会调用。
 * 打开规则界面会调用。
 */
    export class LoadingTip extends BaseView {
        contentParentNd: cc.Node;
        nodes: cc.Node[];
        dots: cc.Node[];
        onOpen(fromUI: number, ...args: any[]): void;
    }
    export class SPopupPrompt extends core.PopupPrompt {
        contentTips: cc.RichText;
        bgNode: cc.Node;
        /**确定按钮的原始size */
        protected okBtnOringinalSize?: cc.Size;
        /**背景框的原始size */
        protected bgOringinalSize?: cc.Size;
        /**标题的原始pos */
        protected titleOringinalPos?: cc.Vec2;
        /**描述内容的原始pos */
        protected contentOringinalPos?: cc.Vec2;
        onOpen(fromUI: number, ...args: any[]): void;
    }
    /**
 * 奖赏表
 */
    export class CompensateControl extends BaseView {
        title: cc.Sprite;
        content: cc.Node;
        scrollView: cc.ScrollView;
        closeBtn: cc.Node;
        private spriteFrames;
        onLoad(): void;
        private initContent;
        private closePop;
    }
    /**按钮名 */
    export enum EButtonName {
        /**快速 */
        FAST = 1,
        /**减少 */
        REDUCE = 2,
        /**增加 */
        ADD = 3,
        /**设置 */
        SET = 4
    }
    class ColorNode {
        targetNode: cc.Node;
        private _color;
        get color(): cc.Color;
        set color(value: cc.Color);
    }
    class ButtonNode {
        buttonName: EButtonName;
        targetNodes: ColorNode[];
    }
    export class ButtonColor extends cc.Component {
        buttonNodes: ButtonNode[];
        onLoad(): void;
    }
    export class PlayBtnBase extends BaseView {
        ctlBtn: cc.Node;
        ctlBtn_rotate: cc.Node;
        ctlBtn_stop: cc.Node;
        ctlBtn_label: cc.Node;
        ctlBtn_sprite: cc.Node;
        touchEffectNode: cc.Node;
        rotate: cc.Node;
        onLoad(): void;
        start(): void;
    }
    export class LoadingView extends BaseView {
        private confirmBtn;
        private percentLabel;
        private totoalAssetList;
        private loadAsetList;
        private percentObj;
        init(): void;
        private loadGameRes;
        private loadSingleAssetComplte;
        private loadBonusAssetComplete;
        private addLoadAssetTask;
        private addLoadBonusAssetTask;
        private close;
        private updateProgressLabel;
        updateProgress(percent: number): void;
    }
    export class LineAnimation extends cc.Component {
        /**中奖线animationAtlas配置列表 */
        private lineConfigs;
        private leftLine;
        private centerLine;
        private rightLine;
        private curLine;
        private leftLineAdjustScale;
        private centerLineAdjustScale;
        private rightLineAdjustScale;
        private site;
        private tween;
        protected onLoad(): void;
        init(lineConfigs: any): void;
        clear(): void;
        play(width: number, delay: number, site: string, loopDelay: number): void;
        getDuration(site: string): number;
        setChildLine(index: number, atlas: cc.SpriteAtlas): void;
    }
    export class LineAnimationManager implements SimpleManagerTemplate {
        static get instance(): LineAnimationManager;
        private static _instance;
        /** 中间线表现的json配置*/
        private _lineAniconfig;
        /**中奖线 数字标号 */
        private lineIdLabel;
        /**中奖线 数字标号的背景 */
        private lineIdBg;
        /**中奖线  画线动画的图集列表 */
        private atlasList;
        init(): Promise<void>;
        private loadAssetComplete;
        /**创建中奖线动画 */
        createLineAni(): LineAnimation;
        createLineIdLabel(): cc.Node;
        createLineIdBg(): cc.Node;
        dispose(): void;
    }
    export enum ANIMATION_TYPE {
        /**
         *     单个clip的序列帧动画
         */
        SPRITE_FRAMES_CLIP = 0,
        /**
         * spin动画
         */
        SKELETON = 1
    }
    export class AniParam {
        /**
         * 类型，spin或者序列帧
         */
        aniType: ANIMATION_TYPE;
        /**
         * 1、若为spin则为spin资源的地址，2、若为序列帧，则为图集的地址，也可传入多张图片的地址，参数为字符串数组
         */
        url: string | string[];
        /**
         * 公共库为slot,本地填resources
         */
        bundle: string;
        /**
         * 动画名
         * 如果为数组形式，表示多个动作叠加表现
         */
        aniName: string | string[];
        /**
         * 加载完成的回调
         */
        loadCompleteHandler?: Handler;
        /**
         * 序列帧的帧率
         */
        sample?: number;
        /**
         * 是否启用预乘
         */
        premultipliedAlpha: boolean;
        /**
         * 是否启用
         */
        isAlphaBlendMode: boolean;
        /**
          * 动画速率
          */
        timeScale: number;
        /**是否使用非图集 true:加载地址下的所有图片， false：加载图集*/
        isLoadDir: boolean;
        /** sprite的默认模式为：cc.macro.ONE_MINUS_SRC_ALPHA，如果子项目要切换模式，参数写1，为cc.macro.DST_ALPHA */
        dstBlendFactor: cc.macro.BlendFactor;
        trim: boolean;
        sizeMode: cc.Sprite.SizeMode;
        constructor(aniType: ANIMATION_TYPE, url: string, buldle: string, aniName: string | string[], sample?: number, handler?: Handler, dstBlendFactor?: number, trim?: boolean, sizeMode?: number);
    }
    export class AnimationExtend extends BaseView {
        private aniType;
        private aniComp;
        private skComp;
        private aniName;
        private defaultSkin;
        private playCompleteHandler;
        private isResLoaded;
        private isReadyPlay;
        private loop;
        onLoad(): void;
        private addAnimationComp;
        init(param: AniParam, premultipliedAlpha?: boolean, defaultSkin?: string): void;
        private loadSpriteFrames;
        private addAnimation;
        addClip(url: string | string[], bundle: string, clipName: string, sample?: number, speed?: number, isLoadDir?: boolean): void;
        private loadSekeleton;
        play(name: string | string[], loop?: boolean, complete?: Handler): void;
        stop(): void;
        hide(): void;
        private playSkeleton;
        private playSpriteFramesClip;
        private spFrameClipFinish;
    }
    export class FluxayTexture extends cc.Component {
        private _speed;
        private _time;
        private _material;
        onLoad(): void;
        update(dt: any): void;
    }
    /**
     * 实现功能：粒子节点，动态替换图集中精灵贴图
     */
    export class ParticleSystemSpriteFramesRefresh extends cc.Component {
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
    export class WinAniManager extends BaseView {
        protected winCoinLabel: CommonNumAtlasBase;
        private touchLayer;
        private aniLayer;
        private winTextLayer;
        private fluxayMaterial;
        private animationMap;
        private publicAniMap;
        private winTextMap;
        private winFontMap;
        private callBack;
        private static _instance;
        /**获取的最终奖励类型级别 */
        private winAniType;
        private curWinTextSoundName;
        private curWinCoinSoundName;
        private curWinNumSoundName;
        private isLabelTween;
        private money;
        private _curMoney;
        private coinLabelTween;
        private winTextFadeInTeen;
        private winTextFadeOutTeen;
        private aniDataMap;
        private customDataMap;
        private winEndDataMap;
        private winTextDataMap;
        private touchEnabled;
        musicVolume: number;
        private step;
        private stepList;
        private endStopTime;
        private clickHideTime;
        private delayPlaySoundTween;
        private soundType;
        /**更新赢分动画阶段时间数组[大奖时间，中奖时间，超级大奖时间]*/
        private winNumTweenAniStepTimes;
        /**是否保持相同tag的动画播放 包括粒子动画 */
        private isKeepSameTagAni;
        /**自定义层级 用于拓展自定义层级展示动画或者粒子（显示周期和阶段性大奖展示一样） , 大奖预制层级顺序[ 遮罩层 - 点击层 - 公共动画层 -(自定义层)- 动画层 - 展示大奖文本层 -滚动数字层 - 空节点层 ] */
        private customLayer;
        /**自定义结束层级 用于大奖数字赢分滚动结束或者点击时播放结束动画 */
        private winEndAniLayer;
        /**最大倍数 用于计算超级大奖以后的相对增速 默认60倍*/
        private maxRate;
        private isEmptyAnimation;
        static get instance(): WinAniManager;
        onLoad(): void;
        private onKeyDown;
        private addAniNodes;
        private loadResource;
        private generateAtlasElment;
        private loadSkeleton;
        private loadSpriteFrame;
        private loadParticleSystemClip;
        private loadParticleSystem;
        private setLoad;
        private setLoadParticle;
        private playPublicAni;
        /**上一次动画播放的tag */
        private prePlayAnisTagArr;
        private playAnimation;
        /**大奖结束动画 */
        private playWinEndAni;
        private playWinText;
        private playAniSound;
        private onTouch;
        private set curMoney(value);
        private get curMoney();
        /**
        * 动画表现入口
        * @param winType 中奖类型
        * @param money 赢的钱
        * @param opacity 透明度 用来预播放动画一次作为缓存
        */
        playWinAni(winType: number, money: number, callBack: Handler, opacity?: number): void;
        private hideAllAniNode;
        private hideAllWinText;
        private hideAllcustomAniNode;
        private hideAllwinEndAniNode;
        private updateWinCoinByTween;
        /**赢分增长动画 */
        private playNumTweenAni;
        prizeStepChange(): void;
        private numberTweenComplete;
        private changeWinFont;
        /**是否播放最后的大奖环节*/
        private isPlayLastAni;
        private playFinalAnimation;
        private hideAniAndText;
        private fadeOut;
        hide(): void;
        /**大奖动画开始播放 */
        protected playWinStart(): void;
        protected updateCoinLabel(str: string): void;
        /**
         * 大奖文字出现效果
         * @param textNode
         * @param winType
         * @returns
         */
        protected playWinTextFadeIn(textNode: cc.Node, winType: WinAniType): cc.Tween;
        /**
         * 大奖文字消失效果
         * @param textNode
         * @param winType
         * @returns
         */
        protected playWinTextFadeOut(textNode: cc.Node, winType: WinAniType): cc.Tween;
        /**
         * 点击时播放最终效果(只有点击跳转到最后的时候会调用，自然增长到最后阶段不调用)
         */
        protected onPlayFinalAnimation(): void;
        /**
         * 金币增长完成(自然增长到最后调用，点击跳到最后不调用)
         */
        protected onCoinIncreaseEnd(): void;
        /**
         * 大奖完全退出
         * @param hander 做完表现执行handler
         */
        protected playFadeOut(handler: Handler): void;
        /**
         * 获取当前大奖文字节点
         * @returns
         */
        protected getWinTextNode(): cc.Node;
        /**
         * 获取自定义层级
         * @returns
         */
        protected getCustomLayerNode(): cc.Node;
    }
    /**
 * 程序主入口，初始化主界面，音乐，注册弹框配置，适配横竖屏分辨率
 */
    export class MainView extends EntranceViewBase {
        private scenePrefab;
        private rollerPrefab;
        /**game_core_common通用飘字提示 */
        private floatingWordTip;
        private isLogin;
        protected onLoad(): void;
        private _addEvent;
        private mergeConfig;
        protected beforeLogin(): void;
        private buyFreeDataResp;
        private restoreResp;
        private addTopUi;
        /**
         * 添加
         * @returns
         */
        addGameControl(): Promise<unknown>;
        protected addView(): void;
        private loadChildView;
        layout(): void;
        /**
         * 添加游戏场景
         */
        addGameSceneView(): void;
        /**
         * 添加菜单栏
         */
        addMenuView(): Promise<unknown>;
        getEffectLayer(): cc.Node;
        protected getWinAniManagerClass(): any;
        addWinAnimationLayer(): void;
        /**
         * 添加滚轴界面
         */
        addRollerView(): void;
        /**
         * 添加分数界面
         */
        addScoreView(): Promise<unknown>;
        /**
         * 添加gm调试按钮
         */
        addGMLayer(): void;
        addBonusGameLayer(prefab: cc.Prefab): cc.Node;
        addJackPotGameLayer(prefab: cc.Prefab): cc.Node;
        /**
         * 添加哈希密文
         */
        addCiphertextView(): void;
        /**
         * 添加时间戳密文
         */
        addTimestampView(): void;
        /**
         * 添加哈希入口
         */
        addHashEntrance(): void;
        shakeEffect(duration: number, ratio?: number, node?: cc.Node): void;
        /**game_core_common通用飘字提示预制 */
        private insFloatingWordNode;
        /**
         * 显示飘字提示
         * @param tips 提示文本
         * @param tipsArgs 提示附加参数
         */
        private showToast;
        buyBtn: cc.Node;
        /**
       * 添加购买入口
       */
        addBuySpinSlot(): void;
        turnCoinBtn: cc.Node;
        /**
         *  加载翻金币按钮
         * @returns
         */
        onLoadTurnCoinBtn(): void;
        /**
         * 线展示完成了（目前只能免费游戏有用)
         */
        private _onShowLineOver;
        /** 滚轴开始滚动 */
        private onStartRolling;
        /**购买免费开始 */
        private onBuyFreeTimeStart;
        private buyFreeExpand;
        private noMoneyTipPop;
    }
    export class RemoteLoading extends BaseView {
        private totoalAssetList;
        private loadAsetList;
        onLoad(): void;
        onDestroy(): void;
        private loadGameRes;
        private loadSingleAssetComplte;
        private loadBonusAssetComplete;
        private addLoadAssetTask;
        private addLoadBonusAssetTask;
        updateProgress(percent: number): void;
    }
    export class RotationTip extends BaseView {
        icon: cc.Node;
        onLoad(): void;
        onDestroy(): void;
        /**
        * 切换到横屏
        */
        layoutLandscape(): void;
        /**
        * 切换到竖屏
        */
        layoutPortrait(): void;
        /**
         * 显示或隐藏，延时执行，因为cc.view.getCanvasSize()获取的大小尺寸更新有点滞后
         */
        private showOrHide;
        private delayShowOrHide;
    }
    export class SlotInit {
        protected blurryBgNode: cc.Node;
        init(): void;
        private isShowRecordDetail;
        protected loadConfigComplete(): void;
        protected addBlurryeBG(): void;
        private loadAssetBundle;
        private addLoadingView;
        private loadingViewComplete;
        protected blurryLoadOver(spr?: cc.Sprite): void;
        private closeLoadingView;
        protected setLanguage(): void;
        private addRotatetip;
        protected layout(): void;
    }
    export class Menu extends BaseView {
        private isOpen;
        private isOnClick;
        private isSoundOn;
        private soundOnSpriteFrame;
        private soundOffSpriteFrame;
        btn_sound_off: cc.Node;
        openBtn: cc.Node;
        menuBtn: cc.Node;
        maskBg: cc.Node;
        private info;
        private themeColor;
        onLoad(): void;
        private initItem;
        private setChildColor;
        private setAutoTest;
        private onItemClick;
        onEnable(): void;
        private buyFreeResp;
        private menuSetOpacity;
        private menuShowOrHide;
        private onStartRolling;
        private interactable;
        onDestroy(): void;
        private closeMenu;
        private open_close_Menu;
    }
    export class MyGrayMaterial extends cc.Component {
        myGrayMaterial: cc.Material;
    }
    export enum IMaterialType {
        GRAY = 1,
        NORMAL = 2
    }
    export class MyButton extends cc.Button {
        _myGrayMaterial: cc.Material;
        _updateDisabledState(force: any): void;
        _applyTransition(state: any): void;
        changeMaterial(state: any): void;
        /**
         * 置灰节点以及子节点
         * @param node
         * @param type
         */
        private grayAllChildren;
    }
    /**
 * 规则表
 */
    export class RuleView extends BaseView {
        title: cc.Sprite;
        content: cc.Node;
        scrollView: cc.ScrollView;
        closeBtn: cc.Node;
        private spriteFrames;
        onEnable(): void;
        onLoad(): void;
        private initContent;
        private closePop;
    }
    /**
     *  UI 工具库
     *    - 坐标转换
     */
    export class UIUtil {
        /**
        * 把一个世界坐标的点，转换到某个节点下的坐标
        * @param {*} node
        * @param {*} worldPoint
        */
        static convetOtherNodeSpaceAR(node: cc.Node, targetNode: cc.Node, pos?: cc.Vec2): cc.Vec2;
        /**
        * 得到一个节点的世界坐标
        * @param {*} node
        * @param {*} pos
        */
        static localConvertWorldPointAR(node: cc.Node, pos: cc.Vec2): cc.Vec2;
        /**
        * 把一个世界坐标的点，转换到某个节点下的坐标
        * @param {*} node
        * @param {*} worldPoint
        */
        static worldConvertLocalPointAR(node: cc.Node, worldPoint: cc.Vec2): cc.Vec2;
    }
    /**
     * 滑动选择组件Item
     */
    export class ScoreItem extends cc.Component {
        _index: number;
        _data: any;
        /**
         * 检测是否在node的零零点附近
         * @param node
         * @returns
         */
        checkTouch(node: cc.Node): boolean;
        /** 检测点击是否作用于该节点 */
        checkClick(e: cc.Event.EventTouch): boolean;
        private clickInNode;
    }
    /**滑动选择组件 */
    export class ScoresBetLevel extends cc.Component {
        /** -------------- 单例 -------------- **/
        static get instance(): ScoresBetLevel;
        private static _instance;
        /** -------------- 组件 -------------- **/
        threshold_n: number;
        itemTemp: cc.Node;
        /** -------------- 变量 -------------- **/
        /** 根据配置表或是服务器数据 */
        private data;
        private _last_pos_o;
        private _content;
        private _layout_o;
        private _view_o;
        private _list;
        /**选中节点下标 */
        private _selected_n;
        /**监听滑动状态 */
        private _listen_b;
        /** 滚轮结束后的setTimeOut */
        private _time_out;
        /** 其实点击的位置 */
        private startY;
        private _selectedIndex;
        get selectedIndex(): number;
        private beganCaller;
        private beganCall;
        private endCaller;
        private endCall;
        private clickTime;
        onLoad(): void;
        /**
         * 初始化视图
         */
        start(): void;
        onEnable(): void;
        onDisable(): void;
        /** 初始化数据 */
        initData(): void;
        registerScrollEvent(beganCall: Function, beganCaller: any, endCall: Function, endCaller: any): void;
        updateBetLevelValue(level: number, refresh?: boolean): void;
        /**跳转到指定item中心 */
        private _jump_to_item;
        /**刷新视图(添加子节点后调用) */
        update_view(): void;
        private _event_scrolling;
        private _event_scroll_ended;
        private _event_scroll_began;
        private _event_touch_start;
        /** 滚轮滑动事件 */
        scroll_move_event(e: cc.Event.EventTouch): void;
        /** 修正滑动item居中 */
        private reviseScrollCenter;
        /** 触摸(滑动)结束事件 */
        private _event_touch_end;
        /** 触摸(滑动)取消事件 */
        private _evenet_touch_cancel;
        /**选中节点下标 */
        get selected_n(): number;
        /**监听滑动事件状态 */
        private get listen_b();
        private set listen_b(value);
        /** 投注倍数 */
        private _betLevel;
        set betLevel(value: number);
        get betLevel(): number;
        get betLevelData(): any[];
        private initContent;
        private showItem;
        private setItemName;
        /**
         * 点击跳转对应Item
         */
        private clickJump;
        /**
         * 触摸或者滚动滑轮 跳转对应Item
         */
        private touchJump;
    }
    /**滑动选择组件 */
    export class ScoresBetSize extends cc.Component {
        /** -------------- 单例 -------------- **/
        static get instance(): ScoresBetSize;
        private static _instance;
        /** -------------- 组件 -------------- **/
        threshold_n: number;
        itemTemp: cc.Node;
        /** -------------- 变量 -------------- **/
        private _last_pos_o;
        private _content;
        private _layout_o;
        private _view_o;
        private _list;
        /**选中节点下标 */
        private _selected_n;
        /**监听滑动状态 */
        private _listen_b;
        /** 滚轮结束后的setTimeOut */
        private _time_out;
        /** 其实点击的位置 */
        private startY;
        private _selectedIndex;
        get selectedIndex(): number;
        private beganCaller;
        private beganCall;
        private endCaller;
        private endCall;
        private clickTime;
        onLoad(): void;
        /**
         * 初始化视图
         */
        start(): void;
        registerScrollEvent(beganCall: Function, beganCaller: any, endCall: Function, endCaller: any): void;
        onEnable(): void;
        onDisable(): void;
        updateBetSizeValue(size: number, refresh?: boolean): void;
        /**跳转到指定item中心 */
        private _jump_to_item;
        /**刷新视图(添加子节点后调用) */
        update_view(): void;
        private _event_scrolling;
        private _event_scroll_ended;
        private _event_scroll_began;
        private _event_touch_start;
        /** 触摸(滑动)结束事件 */
        private _event_touch_end;
        /** 触摸(滑动)取消事件 */
        private _evenet_touch_cancel;
        /** 滚轮滑动事件 */
        scroll_move_event(e: cc.Event.EventTouch): void;
        /** 修正滑动item居中 */
        private reviseScrollCenter;
        /**选中节点下标 */
        get selected_n(): number;
        /**监听滑动事件状态 */
        private get listen_b();
        private set listen_b(value);
        /** 投注大小 */
        private _betSize;
        set betSize(value: number);
        get betSize(): number;
        get betSizeData(): any[];
        /** 根据配置表或是服务器数据 */
        private data;
        initData(): void;
        private initContent;
        showItem(data: number[]): void;
        setItemName(index: number, value: number): void;
        /**
         * 点击跳转对应Item
         */
        private clickJump;
        /**
         * 触摸或者滚动滑轮 跳转对应Item
         */
        private touchJump;
    }
    /**滑动选择组件 */
    export class ScoresBetAmount extends cc.Component {
        /** --------------- 组件 --------------- */
        threshold_n: number;
        itemTemp: cc.Node;
        private static _instance;
        static get instance(): ScoresBetAmount;
        /** --------------- 内部变量 --------------- */
        private _last_pos_o;
        private _content;
        private _layout_o;
        private _view_o;
        private _list;
        /** 滚轮结束后的setTimeOut */
        private _time_out;
        /**选中节点下标 */
        private _selected_n;
        /**监听滑动状态 */
        private _listen_b;
        private isOtherRefresh;
        private curValue;
        private _selectedIndex;
        get selectedIndex(): number;
        private beganCaller;
        private beganCall;
        private endCaller;
        private endCall;
        private sumData;
        private clickTime;
        /** 其实点击的位置 */
        private startY;
        private resultFun;
        onLoad(): void;
        onEnable(): void;
        onDisable(): void;
        /**
         * 初始化视图
         */
        start(): void;
        /** 数据初始化 */
        initData(): void;
        registerScrollEvent(beganCall: Function, beganCaller: any, endCall: Function, endCaller: any): void;
        getMaxAmount(): number;
        /** 大小和倍数更新的时候  要更新这个总额 */
        updateAmountData(map: BetDataItem): void;
        forceUpdateByData(map: BetDataItem): void;
        /**
         * 跳转到指定item中心
         * @param index_n_
         * @param syncResult
         *      - true: 跳转item后是否同步结果给 size 和 level
         *      - false: 不同步原因是此处的触发就是 size 或者 level的同步触发的，所以不需要再同步
         */
        private _jump_to_item;
        /**刷新视图(添加子节点后调用) */
        update_view(): void;
        private _event_scrolling;
        private _event_scroll_ended;
        private setEndSync;
        private _event_scroll_began;
        private map;
        private onResultChange;
        private _event_touch_start;
        /** 触摸(滑动)结束事件 */
        private _event_touch_end;
        /** 触摸(滑动)取消事件 */
        private _evenet_touch_cancel;
        /** 滚轮滑动事件 */
        scroll_move_event(e: cc.Event.EventTouch): void;
        /** 修正滑动item居中 */
        private reviseScrollCenter;
        /**选中节点下标 */
        get selected_n(): number;
        /**监听滑动事件状态 */
        private get listen_b();
        private set listen_b(value);
        /** 根据配置表或是服务器数据 */
        private initContent;
        showItem(data: number[]): void;
        setItemName(index: number, value: number): void;
        /**
         * 触摸或者滚动滑轮 跳转对应Item
         * @param e
         */
        private touchJump;
        /**
         * 点击跳转对应Item
         * @param e
         */
        private clickJump;
        private setMapData;
    }
    export class BetView extends BaseView {
        private static _instance;
        static get instance(): BetView;
        baseBetLabel: cc.Label;
        maxBetBtn: cc.Node;
        confirmBtn: cc.Node;
        private closeBtn;
        winScore: cc.Label;
        allScore: cc.Label;
        betScore: cc.Label;
        private nodes;
        private curBetLabel;
        betLine_1: cc.Node;
        betLine_2: cc.Node;
        isLandscape: boolean;
        private baseBet;
        private betSizeData;
        private betLevelData;
        private oldBetCost;
        private oldBetLabel;
        private changeCostTipNode;
        onLoad(): void;
        onDestroy(): void;
        start(): void;
        private popDown;
        showChangeCostTip(): void;
        private onWinscoreChange;
        private onScrollBegan;
        private onScrollEnd;
        /**
         * 初始化数据和UI
         */
        protected onEnable(): void;
        /** 初始化 BetSize、BetLevel、BetAmount视图 */
        private syncScroes;
        private onMaxBetClick;
        /** Button挂载脚本调用 */
        onCloseBetClick(): void;
        private onConfirmBetClick;
        /** 同步押注总额 */
        updateBetAmount(): void;
        updateCurrentBetLabel(): void;
        private sumData;
        get getBetAmountLen(): number;
        private _betSizeAndLevel;
        private _betAmountArr;
        /**
         * 通过算出投注总额数据
         */
        betAmountDataArr(): void;
        get getSizeAndLevel(): BetDataItem[];
        get getBetAmountArr(): number[];
        getMapByAmount(amount: number): BetDataItem;
        private get betSize();
        private get betLevel();
    }
    export enum BetSettingType {
        SIZE = 0,
        LEVEL = 1,
        AMOUNT = 2
    }
    export interface BetDataItem {
        size: number;
        level: number;
        amount: number;
    }
    /**
 * 底部信息栏展示，自动监听数据更新显示
 */
    export class ScoreBalance extends BaseView {
        private nodes;
        closeBtn: cc.Node;
        balanceLabel: cc.Label;
        item: cc.Node;
        onLoad(): void;
        onOpen(fromUI: number, ...args: any[]): void;
        onEnable(): void;
        private popDown;
        /**
         * 当界面被关闭时回调，每次调用close时回调
         * 返回值传递给下一个界面
         */
        onClose(): void;
    }
    /**实现播放替换贴图的骨骼动画效果 */
    export class ReplaceSkeletonTex {
        /**
         * 替换骨骼新贴图并播放
         * @param sk 要替换的骨骼
         * @param url 新贴图路径
         * @param aniName 待播放的骨骼动画
         * @param loop 是否循环
         * @param bundle 新贴图所在bundle的名
         */
        static replaceNewAniTex(sk: sp.Skeleton, url: string, aniName: string, loop: boolean, bundle?: string): void;
        /**
         * 用外部图片换装(原理：替换骨骼的skin和slots的贴图)
         * @param sk   骨骼动画
         * @param texture   外部图片(替换骨骼里对应的同名贴图)
         */
        static changeSkin(sk: sp.Skeleton, texture: cc.Texture2D): void;
        /**
         * @param att  需要替换的RegionAttachment
         * @param texture   外部图片
         */
        private static updateRegion;
    }
    export class SpinSlotView extends BaseSpinSlotView {
        constructor();
        protected playWinCoin(lineResult?: RollingResult, indexInSlotMachine?: number, slotMachine?: SlotMachineView): void;
        private winLabelComp;
        private static winLabelTemp;
        private createWinLabel;
        /**
     * 跳转到某一帧的状态
     * @param frame 状态值（静止状态JTItemRender.STATE_DEFAULT：0， 滚动状态JTItemRender.STATE_ROLLING：1，  变暗状态JTItemRender.STATE_OVER：2  ）
     * @returns
     */
        gotoAndStop(frame: number): void;
        reset(): void;
        /**
         * 滚动前是否重置元素
         * @returns
         */
        isResetBeforeScrolling(): boolean;
    }
    export class JTJackPotGameTask extends JTParseTask {
        runningTask(): void;
        private finishJackPotGame;
    }
    export class JTPGGlobalDisplayLines extends JTGlobalDisplayLines {
        /**
     * 运行任务
     */
        runningTask(): void;
    }
    /**
 *
 */
    export class JTLogicFactroy extends JTBaseLogicFactroy {
        registerFlowOptions(): void;
    }
    export class SpinElementView extends BaseView {
        bgSk1: cc.Node;
        bgSk2: cc.Node;
        fadeInSk1: sp.Skeleton;
        fadeInSk2: sp.Skeleton;
        elementImage: cc.Sprite;
        elementAni: cc.Animation;
        elementSk: sp.Skeleton;
        frameBg: cc.Sprite;
        rewardPanel: cc.Node;
        elementDesc: cc.Label;
        private config;
        private rewardMap;
        private countNumAtlas;
        private rewardAtlas;
        /**赔付信息个数节点列表 */
        private numAtlasLabels;
        /**赔付信息赔率节点列表 */
        private rewardAtlasLabels;
        /**额外赔付个数显示（不展示赔付个数，比如用":"符号代替）*/
        private otherNumLabels;
        /**额外赔付倍率显示（不展示赔付倍率，比如用":"符号代替）*/
        private otherRewardLabels;
        private scroller;
        private psNode;
        protected onLoad(): void;
        /**
         * 元素赔付展示方式：
         * 1表示：常规  -- 左边数字 右边赔率
         * 2表示：只展示一个数字  -- 赔率/数字（嘻哈熊猫）
         * 3表示：左侧个数有+号展示 右侧展示赔率  -- 赔率/数字（超市大血拼，宝石传奇）
         * 4表示：需要自己设定每一个赔付位置 （麻辣火锅）
         */
        private eleStyle;
        init(scroller: JTPGScrollerGroup): void;
        private fadeInConfig;
        private isPlaySk;
        private initFadeInEffect;
        private initEffect;
        private initParticleSystem;
        private initParticleSystem_clip;
        private initSpriteFrame;
        private setLoadParticle;
        private createRewardLabel;
        private initAtlasLabel;
        private caculateReward;
        resetPosition(): void;
        show(id: number, pos: cc.Vec2, isOnLeft: boolean, target: cc.Node, selectedElement: SpinSlotView): void;
        private updateIsLeft;
        private _showCurViewId;
        /**
         * 更新指定元素的赔付或描述信息
         * @param id 元素id
         */
        private updateContent;
        hide(): void;
        private getConfig;
        private aniName;
        private addAnimation;
        private playSpriteFramesClip;
    }
    export class JTPGScrollerGroup extends JTChannelScrollerGroup {
        private elementView;
        elementBlackGround: JTBlackBackGround;
        private clickEffectNode;
        private clickAnimation;
        private clicked;
        private isInited;
        private isAssetLoaded;
        private isKeyColdDown;
        /**是否能点击元素(主要限制多点触摸带来的问题)*/
        private _canClickElem;
        /**恢复点击时间 */
        resetTime: number;
        constructor();
        /**
     * 注册鼠标控制函数
     * @param stopCall 滚轴停止的函数
     * @param sendCall 滚轴运行的函数
     */
        registerControl(stopCall: Function, sendCall: Function, clckRect: cc.Node): void;
        private onTouchStart;
        private checkTouchElement;
        private playClickEffect;
        protected initializeLayer(): void;
        private onTouchExtendScroller;
        private initElementView;
        protected afterInitializeLayer(): void;
        /**
         * 激活某个状态（帧）
         * @param frame 状态（帧）
         */
        enableds(frame?: number): void;
        /**
         *
         * @param layer 层级工厂
         * @param child 子级工厂
         * @param logic 逻辑工厂
         * @param model 数据工厂
         */
        setupFactory(layer: JTFactory, child?: JTFactory, logic?: JTFactory, model?: JTFactory): JTChannelPipeline;
        /**
         * 键盘按下函数
         * @param e
         */
        onKeypressHandler(e: cc.Event.EventKeyboard): void;
        /**
         *
         * @returns
         */
        private isRunningParseFlowTask;
        protected beforeStart(): void;
        clear(): void;
    }
    export class ReplaceFactory {
        static replaceFunction(): void;
        static btnCallBack(): void;
    }
    /**
* AbstractMainView
*/
    export class AbstractMainView extends CommonMainView {
        elementViewLayer: cc.Node;
        private isLoadingClosed;
        private startCall;
        onLoad(): void;
        protected onInit(): void;
        protected addEventListener(): void;
        protected removeEventListener(): void;
        protected beforeInitSlotMachine(): void;
        private _onRerunFlows;
        protected runFlowsAfterInit(): void;
        private parseLines;
        private onCloseLoadingView;
        /**
         * 关闭loading页面回调  以下这么写是为了需求需要 背景音乐必须关闭loading页之后重新开始播放，这么处理如果子项目中触发了免费游戏的重连onInitFreeGame接口会更早调用，
            因此如果要重新播放免费背景音乐必须要在onCloseLoadingViemListen接口中播放，有特殊需求子项目重写接口
         * @param hasFreeGame 是否有免费
         */
        protected onCloseLoadingViemListen(hasFreeGame: boolean): void;
        protected initSlotMachineComplete(): void;
        reEnterRoom(): void;
        protected changeCostSuccess(): void;
        createScoller(): JTChannelScrollerGroup;
        afterChangeScroller(gameID: number, scroller: JTScrollerGroup): void;
        /**
         * 播放五连或六连等
         * @param event
         * @param col
         */
        playFullLineAni(event: string, col: number, cb: Handler): void;
        /**
        * 公共奖励
        * @param event
        * @param money
        * @param cb
        */
        addSettlementAni(event: string, money: any, cb: Handler): void;
        /**
        *
        * @param event
        * @param data
        * @param cb
        */
        addUserUpLevelAni(event: string, data: any, cb: Handler): void;
        /**
        *
        * @param event
        * @param freeGameInfo
        * @param cb
        */
        addFreeSpinsAni(event: string, freeGameInfo: FreeGameInfo, cb: Handler): void;
        /**
        *
        * @param event
        * @param freeGameInfo
        * @param cb
        */
        addFreeAdmission(event: string, freeGameInfo: FreeGameInfo, cb: Handler): void;
        playWinAni(winType: WinAniType, money: number, cb: Handler): void;
        protected onJackPotGameTrigger(cb: Handler): void;
    }
    export class JTSkinnableRuntimeLineAnimationRender extends JTRuntimeSkinnableLine {
        private aniLines;
        private lineIdLabels;
        private lineIdBgs;
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(data?: any): void;
        private insertSplitPoint;
        private removeLines;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
        show(_singleLineComplete?: Handler, mask?: boolean, lineCount?: number, direction?: number): void;
        /**
         * 隐藏
         */
        hide(): void;
    }
    export class BuySpinView extends game.View {
        buyfreespins: cc.Node;
        scaleNode: cc.Node;
        queding: cc.Node;
        quxiao: cc.Node;
        buyCost: cc.Label;
        private netNode;
        protected btnCall: any;
        onOpen(fromUI: number, ...args: any[]): void;
        onLoad(): void;
        private setReceiveCallBack;
        onDestroy(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
        onTween(): void;
        private isClickYesBtn;
        /**
        * 购买免费游戏请求
        */
        buyFreeImdReq(event: string): void;
        buyFreeImdResp(data: any): void;
        /**
         * 关闭界面
         */
        close(isCall?: boolean): void;
        private closeView;
    }
    export class HashCiphertextSlot extends BaseView {
        ciphertext: cc.Label;
        text: cc.Node;
        ani: sp.Skeleton;
        private ciphertextStr;
        onLoad(): void;
        private addEvent;
        /**小游戏结果返回 */
        private lgActionResp;
        private buyFreeResp;
        private restoreResp;
        private spinResp;
        private onBonusGameTrigger;
        private onBonusGameOver;
        private setHashData;
        private onCopyBtn;
        private initCiphertext;
        /**更新密文 */
        upCiphertext(ciphertext?: string): void;
        private setNodePint;
        private layoutManual;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export class HashEntranceSlot extends game.View {
        private lastPoint;
        iconBtn: cc.Node;
        timestampIcon: cc.SpriteFrame;
        directIcon: cc.SpriteFrame;
        iconNode: cc.Sprite;
        timestampText: cc.Node;
        directText: cc.Node;
        hashChainText: cc.Node;
        nodeGameNum: cc.Node;
        nodeTips: cc.Node;
        nodeTipsBg: cc.Node;
        labelTips: cc.Label;
        nodeProgress: cc.Node;
        spriteProgress: cc.Sprite;
        labelProgress: cc.Label;
        labelGameNum: cc.Label;
        curProgress: number;
        onLoad(): void;
        onDestroy(): void;
        start(): void;
        private renderHashRest;
        private createHashChaining;
        protected update(dt: number): void;
        private addEvent;
        private updateHashRest;
        private onTouchStart;
        private clickBinanceHashBtn;
        private onTouchEnd;
        private openHelpView;
        /**
         * 按钮移动
         */
        private iconTouchMove;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export class HashTimestampSlot extends BaseView {
        timeText: cc.Label;
        hashText: cc.Label;
        ani: sp.Skeleton;
        private timetextStr;
        onLoad(): void;
        private addEvent;
        private buyFreeResp;
        private spinResp;
        private setHashData;
        private onBonusGameTrigger;
        private onBonusGameOver;
        private initCiphertext;
        private copyText;
        /**更新密文 */
        upCiphertext(timeText?: string, ciphertext?: string): void;
        private setNodePint;
        private layoutManual;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    /**简单的按钮控制拓展用于多语言图片切换 方便配置不用手动拖入 */
    export class CustomButtonExtendLang extends CustomButton {
        Langs: String;
        loadUrl: String;
        normalSpriteName: string;
        pressedSpriteName: string;
        hoverSpriteName: string;
        disabledSpriteName: string;
        bundleName: string;
        onLoad(): void;
        setBtnSprite(): void;
        private rePlaceLanguage;
    }
    /**
     * 实现功能：多重（也可以只有一个）粒子节点，动态替换图集中精灵贴图，并且随机起始贴图。
     * 使用方式：将组件挂载在粒子节点的直接父节点上
     */
    export class MultiPSRandomRefreshTool extends cc.Component {
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
    export class SlotListView extends game.ListView {
    }
    export class SlotMController extends game.MController {
    }
    export class MoveDirect extends cc.Component {
        moveDirection: cc.Vec2;
        moveSpeed: number;
        moveBool: boolean;
        protected onEnable(): void;
        setMoveSpeed(value: number): void;
        setMoveDirection(v2: cc.Vec2): void;
        protected update(dt: number): void;
    }
    export class SlotNodeUiConfig extends game.NodeUiConfig {
    }
    export class SlotSliderFix extends game.SliderFix {
    }
    export enum LayoutType {
        Landscape = 0,
        Portrait = 1,
        Auto = 2
    }
    export interface IBangsOffset {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    }
    export class LayoutEx {
        static layoutType: LayoutType;
        static get originDesignResolution(): cc.Size;
        static get isLandscape(): boolean;
        static init(layoutType?: LayoutType): void;
        static resize(): void;
        /**
         * 获取基于刘海的偏移量
         * @param offsetL 横板额外偏移量
         * @param offsetV 竖版额外偏移量
         */
        static getBangsOffset(offsetL?: cc.Vec2, offsetV?: cc.Vec2): IBangsOffset;
        static getLayoutType(): LayoutType;
    }
    enum MarqDirection {
        LEFT_RIGHT = 1,
        BOTTOM_TOP = 2,
        RIGHT_LEFT = 3,
        TOP_BOTTOM = 4
    }
    /**
     * 跑马灯参数
     */
    interface IMarqueenOption {
        direction?: MarqDirection;
        callBackBefore?: Function;
        callBackLater?: Function;
    }
    export class Marqueen extends cc.Component {
        mask: cc.Node;
        target: cc.Node;
        direction: MarqDirection;
        duration: number;
        waitDuration: number;
        repeat: number;
        callBackBefore: Function;
        callBackLater: Function;
        private startPos;
        private endPos;
        private tween;
        onLoad(): void;
        onEnable(): void;
        onDisable(): void;
        /**
         * 开始运行
         */
        startMarqueen(): void;
        stopMarqueen(): void;
        /**
         * 重新设置相关参数
         * @param option 参数选项
         */
        setParams(option: IMarqueenOption): void;
        private updatePosition;
        private createTween;
        private cbBefore;
        private cbLater;
    }
    export class JackPotShowCommon extends BaseView {
        private curtainSk;
        private textSk;
        onLoad(): void;
        openCurtain(handler?: Handler): void;
        closeCurtain(handler: Handler): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    export class JPGameCommon extends BaseView {
        zhuanPan: sp.Skeleton;
        box_grey: cc.SpriteFrame;
        box_open_spriteFrame: cc.SpriteFrame[];
        private isRot;
        private winningEffect;
        startText: cc.Node;
        stopText: cc.Node;
        wheel: cc.Node;
        bg_v: cc.Node;
        bg_h: cc.Node;
        bgAni: cc.Node;
        main: cc.Node;
        smallBoxSk: sp.Skeleton;
        bigBoxSk: sp.Skeleton;
        poinSk: sp.Skeleton;
        coinLabel: cc.Label;
        private isIdle;
        private acceleration;
        private targetAngle;
        jackPotShow: JackPotShowCommon;
        private _winMoney;
        private isTween;
        private tweenList;
        private tweenDelay;
        private isStopImmediately;
        private JpCallBack;
        onOpen(fromUI: number, ...args: any[]): void;
        onLoad(): void;
        initJP(): void;
        updateJP(): void;
        private fromLocalIddGetJpinfo;
        private speed;
        update(dt: any): void;
        private randJp;
        private miniTimes;
        private minorTimes;
        private majorTimes;
        private grandTimes;
        clickBack(): void;
        luckDraw(): void;
        getRandom(jpid: number): number;
        /**
         * 中奖类型  jp类型：0：mini，1：minor，2：major，3：grand
         * @param num 0-grand   1-2 magor   3-5 minor    6-9  mini
         */
        getPrizeType(num: number): number;
        /**
         * 通过中奖类型得到之前中奖次数
         * @param prizeType 中奖类型
         */
        fromTypeGetLen(prizeType: number): number;
        tvController(): void;
        /**转盘转动动画 */
        private PlaySpeedUpEffect;
        private playSlowDownEffect;
        /**
         * 转盘待机动画
         * @param jp_type(中奖格子0-9; 0:grand;1-2:major;3-5:minor;6-9:mini)
         */
        private PlaySlowTurnEffect;
        /**转盘飞到宝箱动画 */
        playWinningEffect(): void;
        private canPlay;
        private canClose;
        /**
         * 播放开箱子动画
         * @param jp_type jp类型：0：mini，1：minor，2：major，3：grand
         * @param boxLength 开的第几个宝箱 0,1,2
         */
        box_open_goldEffect(jp_type: number, boxLength: number): void;
        private playWinCoin;
        set winMoney(value: number);
        get winMoney(): number;
        private onTouch;
        private closeJackPotGame;
        /**
         * 从转盘到宝箱特效位置
         * @param prizeType 中奖类型 mini、minor、major、grand
         */
        private effect_pos;
        layout(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
    }
    /**JP动画 */
    export enum JP_EFFECT {
        JP_Start = "slow turn",
        JP_Stop = "speed up",
        JP_Activation = "activation",
        JP_Box_Open_Gold = "box_open_ gold",
        JP_Fireworks = "fireworks",
        JP_Big_Ches = "big_ches",
        JP_Big_Ches2 = "big_ches2",
        JP_Winning_Effects = "winning  effects"
    }
    export class JackPotGameCommon extends BaseView {
        private isGame;
        jackPotShow: JackPotShowCommon;
        bg_v: cc.Node;
        bg_h: cc.Node;
        bgAni: cc.Node;
        coinLabel: cc.Label;
        touchLayer: cc.Node;
        private canClose;
        private _winMoney;
        private isTween;
        private tweenList;
        private JpCallBack;
        onOpen(fromUI: number, ...args: any[]): void;
        onLoad(): void;
        private dropBox;
        clickBox(event: any): void;
        tvController(): void;
        set winMoney(value: number);
        get winMoney(): number;
        private onTouch;
        private playWinCoin;
        closeJackPotGame(): void;
        layout(): void;
        layoutLandscape(): void;
        layoutPortrait(): void;
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
    export class LabelShader1 extends core.CustomLabelShader {
    }
    /**序列帧动画多语言资源的配置信息 */
    export class languageAnimationClipDataInfo {
        language: string;
        path: string;
    }
    export class LanguageAnimation extends cc.Component {
        protected languageDataInfos: languageAnimationClipDataInfo[];
        onLoad(): void;
    }
    /**
     * 多语言数据脚本,用于有多语言的节点，需要挂载此脚本(支持label或者sprite多语言)
     */
    export class LanguageInfoBase extends cc.Component {
        id: string;
        path: string;
        atlas: string;
        spriteFrame: string;
        bundle: string;
        onlyInLanguages: string[];
        onLoad(): void;
        onDestroy(): void;
        private onRefreshLanguage;
        /**
        * 传入挂载了LanguageInfo脚本的节点，自动根据当前语言设置显示
        * @param node 可以是当前节点，也可以是包含当前节点的父节点
        */
        private createLanguage;
        /**
         * 加载回调
         * */
        protected loadSpriteComplete(...args: any[]): void;
        /**
         * 返回图集路劲
         * @param url 路劲
         * @param resName 图集名
         * @param lang 当前语言简称
         * @returns 返回图集路劲
         */
        private getCurLanguageUrl;
        /**
         * 根据id获取当前语言的文本
         * @param id
         */
        private getLanguageLabel;
        /**
         * 返回图片路劲
         * @param url 路劲
         * @returns 返回图片路劲
         */
        private getLanguageUrl;
    }
    /**
     * 多语言生成类，通过获取节点上挂载的“LanguageInfoBase”脚本，自动生成当前语言显示。
     * 也可以主动调用createLanguage方法生成,getLanguageLabel方法获取当前语言文本
     */
    export class LanguageCreate {
        private static _instance;
        static get instance(): LanguageCreate;
        /**
         * 传入挂载了LanguageInfo脚本的节点，自动根据当前语言设置显示
         * @param node 可以是当前节点，也可以是包含当前节点的父节点
         */
        createLanguage(node: cc.Node): void;
        private getCurLanguageUrl;
        /**
         * 根据id获取当前语言的文本
         * @param id
         */
        getLanguageLabel(id: string): string;
        /**
         * 根据自定义格式转换成当前语言路径(相对于resources/textures/下的路径)
         * @param url
         */
        getLanguageUrl(url: string, lang?: string): string;
    }
    /**
     * dragonBones动画资源的多语言实现方式
     * 1、set_animation：setAnimation的模式
     * 2、set_dragonAsset：设置dragonAsset的模式
     * 3、set_texture：替换龙骨贴图的模式的模式
     * 4、set_Armature：setArmature的模式
     */
    export enum DragonLanguageMode {
        /**setAnimation的模式 */
        set_animation = 0,
        /**设置dragonAsset的模式 */
        set_dragonAsset = 1,
        /**替换龙骨贴图的模式的模式 */
        set_texture = 2,
        /**setArmature的模式 */
        set_armature = 3
    }
    /**龙骨多语言资源的配置信息 */
    export class languageDragonCfgDataInfo {
        language: string;
        modelData: string;
    }
    /**
     * 多语言龙骨资源挂载脚本
     */
    export class LanguageDragonBones extends cc.Component {
        protected skLangMode: DragonLanguageMode;
        protected languageDragonCfgDataInfos: languageDragonCfgDataInfo[];
        protected onLoad(): void;
        /**重置龙骨多语言动画信息 */
        reset(): void;
    }
    /**
     * 多语言数据脚本,用于有多语言的节点，需要挂载此脚本（仅支持label节点类型多语言）
     */
    export class LanguageRecordSlot extends game.LanguageComp {
        /**多语言限制 */
        private onlyInLanguages;
        onLoad(): void;
    }
    /**
     * Skeleton动画资源的多语言实现方式
     * 1、set_animation：setAnimation的模式
     * 2、set_skeletionData：设置skeletonData的模式
     * 3、set_texture：替换骨骼贴图的模式的模式
     * 4、set_skin：setSkin的模式
     */
    export enum SkLanguageMode {
        /**setAnimation的模式 */
        set_animation = 0,
        /**设置skeletonData的模式 */
        set_skeletionData = 1,
        /**替换骨骼贴图的模式的模式 */
        set_texture = 2,
        /**setSkin的模式 */
        set_skin = 3
    }
    /**骨骼多语言资源的配置信息 */
    export class languageSkCfgDataInfo {
        language: string;
        modelData: string;
    }
    export class LanguageSkeleton extends cc.Component {
        protected skLangMode: SkLanguageMode;
        protected languageSkCfgDataInfos: languageSkCfgDataInfo[];
        onLoad(): void;
        /**
         * 根据自定义格式转换成当前语言路径
         * @param url
         */
        getLanguageUrl(url: string, lang?: string): string;
    }
    /**
     * 多语言数据脚本,用于有多语言的节点，需要挂载此脚本（仅支持label节点类型多语言）
     */
    export class LanguangeCompSlot extends game.LanguageComp {
    }
    /**
     * 多语言数据脚本,用于有多语言的节点，需要挂载此脚本（仅支持label节点类型多语言）
     */
    export class LanguangeHashSlot extends game.LanguageComp {
        /**多语言限制 */
        private onlyInLanguages;
        onLoad(): void;
    }
    export class JackPotBase extends BaseView {
        miniJp: cc.Label;
        minorJP: cc.Label;
        majorJP: cc.Label;
        grandJP: cc.Label;
        jackPot: cc.Label;
        protected isOpenMarqueen: boolean;
        private changeBoolean;
        onLoad(): void;
        /**
         * 检查jp信息是否存在
         */
        checkJpinfo(): void;
        freeGameStart(): void;
        freeGameOver(): void;
        onDestroy(): void;
        startMaqueenAuto(): void;
    }
    export class OtherBetType extends BaseView {
        openBtn: cc.Node;
        doubleNum: cc.Label;
        onLoad(): void;
        onResourceLoaded(): void;
        restoreResp(): void;
        initBtn(): void;
        /** 设置节点的透明度 子项目可重写*/
        protected setOpacity(b: boolean): void;
        startRolling(): void;
        showLineOver(): void;
        buyFreeExpand(): void;
        /** 额外押注服务器返回 */
        changeBetStateResp(e: string, result: any): void;
        /** 子项目重写  按钮状态切换 */
        protected updateBtnState(n: number): void;
        private updateBetScore;
        private isClickBn;
        /** 点击额外押注按钮开启 */
        onClickOpen(): void;
        /** 点击额外押注按钮关闭 */
        /**自动游戏状态改变 */
        private changeAuto;
        onNoMoneyUpdateBtn(): void;
        onDestroy(): void;
    }
    /**
     * 数学辅助类
     * @author zengyong
     */
    export class MathUtil {
        /**
         * 获得两点的距离
         * @param v1
         * @param v2
         */
        static getDistance(v1: cc.Vec2, v2: cc.Vec2): number;
        /**
         * 返回整数的点
         * @param v
         */
        static convertVec2Int(v: cc.Vec2): cc.Vec2;
        /**
         * 返回整数的点
         * @param x
         * @param y
         */
        static getIntVec2(x: number, y: number): cc.Vec2;
        /**
         * 返回随机范围内的数
         * @param min 最小数
         * @param max 最大数
         * @param isInteger 是否整数
         */
        static getRandomRange(min: number, max: number, isInteger?: boolean): number;
    }
    /**
     * 节点对象池
     * @author zengyong
     */
    export class NodePool {
        private static _list;
        /**
         * 存入对象池
         * @param key 标识
         * @param node 节点
         */
        static put(key: string, node: cc.Node): void;
        /**
         * 从对象池取出
         * @param key 标识
         */
        static get(key: any): cc.Node;
        /**
         * 清理
         * @param key 标识
         */
        static clear(key: string): void;
        /**
         * 清理所有
         */
        static clearAll(): void;
    }
    /**
     * 对象池
     * @author zengyong
     */
    export class ObjectPool {
        private static _list;
        static put(key: string, obj: any): void;
        static get(key: any): any;
        static clear(key: string): void;
        static clearAll(): void;
    }
    /**
     * 残影
     * @author zengyong
     */
    export class Shadow extends cc.Component {
        fade: number;
        key: string;
        lateUpdate(dt: any): void;
    }
    /**
     * 计时器
     * @author zengyong
     */
    export class Timer {
        static dt: number;
        private static _list;
        private static _isPause;
        /**
         * 暂停开关
         */
        static get isPause(): boolean;
        static set isPause(value: boolean);
        private static _getVO;
        /**
         * 计时中
         * 挂载在某个节点的update或者lateUpdate下
         *
         * @param dt 与上一帧的时间差，单位毫秒
         */
        static onTimer(dt: number): void;
        /**
         * 暂停
         * @param caller 对象
         * @param callback 回调
         */
        static pause(caller: any, callback: Function): void;
        /**
         * 暂停全部
         */
        static pauseAll(): void;
        /**
         * 继续
         * @param caller 对象
         * @param callback 回调
         */
        static resume(caller: any, callback: Function): void;
        /**
         * 继续全部
         */
        static resumeAll(): void;
        /**
         * 延时一次
         * @param caller 对象
         * @param callback 回调
         * @param delay 延时（单位秒）
         * @param args 参数
         */
        static once(caller: any, callback: Function, delay: number): void;
        /**
         * 循环
         * @param caller 对象
         * @param callback 回调
         * @param delay 延时（单位秒）
         * @param count 次数(0表示无限次数，默认0次)
         * @param args 参数
         */
        static loop(caller: any, callback: Function, delay?: number, count?: number): void;
        /**
         * 帧循环
         * @param caller 对象
         * @param callback 回调
         * @param count 次数(0表示无限次数，默认0次)
         * @param args 参数
         */
        static frameLoop(caller: any, callback: Function, count?: number): void;
        /**
         * 清除定时器
         * @param caller 对象
         * @param callback 回调
         */
        static clear(caller: any, callback: Function): void;
        /**
         * 清除全部定时器
         */
        static clearAll(): void;
    }
    /**
     * 残影效果
     * @author zengyong
     */
    export class ShadowFollow extends cc.Component {
        /**影子的容器 */
        shadowContainer: cc.Node;
        /**需要使用残影的目标节点，用来跟随位置，若不设置，默认是挂载脚本的节点 */
        targetNode: cc.Node;
        /**需要使用残影的sprite目标节点，用来渲染，若不设置，默认是挂载脚本的节点 */
        spriteNode: cc.Node;
        /**产生残影的帧间隔 */
        interval: number;
        /**残影消失速度 */
        fade: number;
        key: string;
        private _x;
        private _y;
        private _count;
        private _isOnTimer;
        onLoad(): void;
        onDisable(): void;
        lateUpdate(dt: any): void;
        startEffect(): void;
        stopEffect(): void;
        private onTimer;
    }
    /**
* AbstractBonusGameView
*/
    export abstract class AbstractBonusGameView extends BaseView {
        private _isEventInited;
        constructor();
        onLoad(): void;
        start(): void;
        /**
         * 小游戏信息
         */
        get bonusGameInfo(): BonusGameInfo;
        /**
         * 本轮小游戏总共的奖励映射表
         * 格式：
         *      {
         *          RewardsType:rewardsValue
         *      }
         */
        get totalRewardsMap(): {};
        private _totalRewardsMap;
        /**
         * 场景奖励映射表
         * 格式:
         * {
         * "sceneId":{
         *      RewardsType: rewardValue
         *  }
         * }
         */
        protected get sceneRewardsMap(): {};
        private _sceneRewardsMap;
        /**
         * 上次操作的结果列表
         * 比如，小游戏是掷色子，则此处结果列表长度为1，内容为色子点数
         * 而此次操作获得的奖励则通过
         */
        get lastOperateResults(): number[];
        private _lastOperateResults;
        /**
         * 游戏的操作历史记录
         */
        get history(): protoSlot.lgResultType[];
        /**
         * 析构函数
         */
        dispose(): void;
        /**
         * 初始化时的回调
         */
        protected onInit(): void;
        /**
         * 获取上一次小游戏操作的结果
         * @protected
         * @method getLastActionResult
         * @return {protocol.LgResultType}
         */
        protected getLastActionResult(): protoSlot.lgResultType;
        /**
         * 获取上次的小游戏操作回复
         */
        protected getLastActionResp(): protoSlot.lgActionResp;
        protected getLastRewards(rewardsType: RewardsType): number;
        /**
         * 判断当次小游戏操作是否有赢奖
         */
        protected isWin(rewards?: protoSlot.lgResultType.lgRewardType[]): boolean;
        /**
         * 获取中奖类型（大，中，小，普通）如果未中奖返回WinType.None
         */
        protected getWinType(): WinType;
        /**
         * 获取本轮小游戏所有操作的结果
         * @protected
         * @method getActionResults
         * @return {protocol.LgResultType[]}
         */
        /**
         * 玩家进行了一次小游戏操作
         * 调用此函数通知服务器:玩家进行了一次小游戏操作
         * 如果操作成功返回true,否则返回false
         */
        protected operate(choose?: number[]): boolean;
        /**
         * 切换小游戏场景
         */
        protected onChangeScene?(nextSceneInfo: protoSlot.lgNextType): void;
        /**
         * 小游戏动作结果更新回调
         */
        protected onActionResult?(): void;
        /**
         * 下一步，当小游戏完成当前场景操作后（根据文档需求自行决定是否需要由玩家手动触发），.
         * 请调用此函数进行场景跳转或回到主界面（如果没有下一个场景了）框架会判断和处理是否可以跳转
         */
        protected next(): void;
        /**
         * 添加事件监听
         */
        protected addEventListener(): void;
        /**
         * 移除事件监听
         */
        protected removeEventListener(): void;
        /**
         * 检查是否可以跳转到下一场景，如果检查成功，则进行跳转
         * 检查包括:1. 玩家是否发起了跳转的请求
         *         2. 服务器是否已经允许跳转到下一场景
         */
        private _checkAndChangeScene;
        /**
         * 跳转到下一个状态
         */
        private _goToNextState;
        /**
         * 小游戏的操作结果更新了
         */
        private _onActionResultUpdated;
        private _renderResult;
        private _renderOperateResults;
        /**
         * 处理奖励结果
         */
        private _renderResultRewards;
        /**
         * 初始化奖励
         */
        private _initRewards;
        onDestroy(): void;
    }
    export class JTGraphicsSpriteMesh extends cc.Node {
        graphics: cc.Graphics;
        private sprite;
        private loadComplete;
        private cb;
        constructor();
        private _vertices;
        private init;
        /**
         * 加载纹理
         * @param url 图片地址
         * @param anchorY
         * @param anchorX
         * @param scaleY
         * @param scaleX
         */
        private setSprite;
        setCb(cb: any): void;
        stroke(): void;
        clear(): void;
    }
    export class JTFactoryManager {
        private factoryMap;
        constructor();
    }
    export class JTSingleScheduledPipeline extends JTScheduledPipeline {
        setRenderBeforeComplete(render: JTItemRender): boolean;
        resetRenderPoints(): void;
        lineTimeComplete(): void;
        constructor();
    }
    export class JT5ComboTask extends JTComboTask {
        constructor();
        executeTask(): void;
    }
    export class JTLayerSortMaskContainer extends JTLayerSortContainer {
        private mask;
        constructor();
        /**
         * 更新改变子显示对象列表层级
         * @param childs 显示对象列表
         * @param isUpdate 是否马上更新
         */
        updateChangedChildsLayer(childs: JTItemSkinLoader[], isUpdate?: boolean): void;
        /**
         * 设置排序层级的遮罩的宽高
         */
        setupMask(width: number, height: number): void;
        drawPolygon(): void;
        drawMutiplePolygon(): void;
        /**
          * 恢复默认层级排序
          */
        resetLayerSort(): void;
    }
    export class JTSkinnableArtLineRender extends JTAdvanceSkinnableLine {
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(bounds?: JTTextureBounds): void;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: cc.Texture2D, index?: number): void;
    }
    export class JTSkinnableFlashLightLineRender extends JTRuntimeSkinnableLine {
        private flashLights;
        private loopIndex;
        constructor();
        createComplete(data?: any): void;
        /**
     * 显示遮罩线
     * @param count
     */
        private createMaskLine;
        show(_singleLineComplete?: Handler, mask?: boolean, lineCount?: number, direction?: number): void;
        private showLines;
        private clearLines;
        hide(): void;
    }
    export class JTSkinnableLineRender extends JTAdvanceSkinnableLine {
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(bounds?: JTTextureBounds): void;
        show(): void;
        setupTexture(texture: cc.Texture2D, index?: number): void;
    }
    export class JTSkinnableRuntimeArtGridRender extends JTRuntimeSkinnableGrid {
        constructor();
        /**
        * 创建完成
        * @param bounds
        */
        createComplete(data?: any): void;
    }
    export class JTSkinnableRuntimeArtLineRender extends JTRuntimeSkinnableLine {
        constructor();
        /**
        * 创建完成
        * @param bounds
        */
        createComplete(data?: any): void;
    }
    export class JTSkinnableRuntimeGraphicLineRender extends JTRuntimeSkinnableLine {
        constructor();
        private _alpha;
        private isShowMaskLine;
        private winCount;
        private direction;
        createComplete(data?: any): void;
        /**
         * graphic的透明度
         */
        set alpha(v: number);
        get alpha(): number;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
        private drawGraphicLine;
        private isHitMixRenderRect;
        /**
         * 显示遮罩线
         * @param count
         */
        private drawGraphicMaskLine;
        show(_singleLineComplete?: Handler, mask?: boolean, lineCount?: number, direction?: number, lineInfo?: JTLineInfo): void;
        /**
         * 隐藏
         */
        hide(): void;
    }
    export class JTSkinnableRuntimeGraphicsSpriteMeshLineRender extends JTRuntimeSkinnableLine {
        private lineImageNode;
        private hasAddNode;
        private lineMaskContainer;
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(data?: any): void;
        /**
         * 增加线节点
         */
        addShowLineNode(): JTGraphicsSpriteMesh;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
        show(_singleLineComplete?: Handler, mask?: boolean, lineCount?: number, direction?: number, renders?: any): void;
        /**
         * 隐藏
         */
        hide(): void;
    }
    export class JTSkinnableRuntimeGridRender extends JTRuntimeSkinnableGrid {
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(data?: any): void;
        /**
     * 设置纹理信息
     * @param texture 纹理
     * @param index 当前索引值
     */
        setupTexture(texture: any, index?: number): void;
    }
    export class JTSkinnableRuntimeMaskLineRender extends JTRuntimeSkinnableLine {
        constructor();
        createComplete(data?: any): void;
        private isHitMixRenderRect;
        /**
         * 显示遮罩线
         * @param count
         */
        private createMaskLine;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
        show(_singleLineComplete?: Handler, mask?: boolean, lineCount?: number, direction?: number, renders?: any): void;
        /**
         * 隐藏
         */
        hide(): void;
    }
    export class JTSkinnableRuntimeOutGlowGraphicGridRender extends JTAdvanceSkinnableGrid {
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(bounds?: JTTextureBounds): void;
        show(): void;
        setupTexture(texture: cc.Texture2D, index?: number): void;
        changedSkinnable(data: any): void;
    }
    export class JTSkinnableRuntimeOutGlowGraphicLineRender extends JTRuntimeSkinnableLine {
        constructor();
        private isShowMaskLine;
        private winCount;
        private direction;
        createComplete(data?: any): void;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
        private drawGraphicLine;
        private isHitMixRenderRect;
        /**
         * 显示遮罩线
         * @param count
         */
        private drawGraphicMaskLine;
        show(_singleLineComplete?: Handler, mask?: boolean, lineCount?: number, direction?: number, lineInfo?: JTLineInfo): void;
        /**
         * 隐藏
         */
        hide(): void;
    }
    export class JTSkinnableScaleGridRender extends JTAdvanceSkinnableGrid {
        private static skinnables;
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(bounds?: JTTextureBounds): void;
        setupTexture(texture: any, index?: number): void;
    }
    export class JTSkinnableScaleLineRender extends JTAdvanceSkinnableLine {
        constructor();
        /**
         * 创建完成
         * @param bounds
         */
        createComplete(bounds: JTTextureBounds): void;
        /**
         * 设置纹理信息
         * @param texture 纹理
         * @param index 当前索引值
         */
        setupTexture(texture: any, index?: number): void;
    }
    export class JTAnomalyMask extends JTMask {
        constructor();
        launch(s: JTScrollerGroup): void;
        redraw(s: JTScrollerGroup, x: number, y: number, width: number, height: number): void;
        changed(s: JTScrollerGroup): void;
    }
    export class JTLineArtMask extends JTSprite {
        private scroller;
        constructor();
        launch(s: JTScrollerGroup): void;
        private createMask;
        showAward(rs: JTItemRender[], scroller: JTLineScrollerGroup): void;
        redraw(s: JTScrollerGroup, x: number, y: number, width: number, height: number): void;
        changed(s: JTScrollerGroup): void;
    }
    export class JTWildTaskContainer extends JTTaskContainer {
        constructor();
        contact(task: JTTask, type: string): void;
        runningCallTask(): boolean;
        static callWatchWild(scroller: JTScrollerGroup): void;
        static hideScrollers(scroller: JTScrollerGroup): void;
    }
    export class JTAnomalyPipeline extends JTScheduledPipeline {
        lineTime: cc.Tween;
        scatterRule: JTScatterTask;
        dynamicWild: JTDynamicWildTask;
        onceWild: JTOnceWildTask;
        changeSpeed: JTChangeSpeedTask;
        constructor();
        start(): void;
        onDataStandBy(): void;
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(useChangeData?: boolean): void;
        /**
        * 重新设置有效渲染器，主要用于滚动介绍时零高度格子的坐标计算
        */
        resetRenderPoints(): void;
        setRenderBeforeComplete(render: JTItemRender): boolean;
        updateRenderPosition(): void;
    }
    export class JTBeginAnomaly extends JTBeginRunning {
        constructor();
        beginRunning(): void;
    }
    export class JTCreateAnomaly extends JTCreate {
        constructor();
        create(): void;
    }
    export class JTOverAnomaly extends JTOverRunning {
        constructor();
        overRunning(): void;
        complete(): void;
    }
    export class JTRunAnomaly extends JTRunning {
        private timer;
        private isChangedTime;
        private dataListType;
        constructor();
        running(): void;
        clear(): void;
        dataStandby(): void;
        protected onEnterFrame(dt: number): void;
        scrollingDown(): void;
        scrollingUp(): void;
        scrollingLeft(): void;
        scrollingRight(): void;
    }
    export class JTBeginColumnMixScrolling extends JTBeginScrolling {
    }
    export class JTScrollingColumnMixPipeline extends JTScheduledPipeline {
        lineTime: cc.Tween;
        scatterRule: JTScatterTask;
        dynamicWild: JTDynamicWildTask;
        onceWild: JTOnceWildTask;
        changeSpeed: JTChangeSpeedTask;
        mixConfig: JTMixItemConfig[];
        mixElements: number[];
        constructor();
        create(): void;
        beforeStart(): void;
        private init;
        start(): void;
        onDataStandBy(): void;
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(useChangeData?: boolean): void;
        setRenderBeforeComplete(render: JTItemRender): boolean;
        /**
         *
         * @returns 横竖切换及层级还原时调用
         */
        updateRenderPosition(): void;
        /**
        * 重新设置有效渲染器，主要用于滚动介绍时零高度格子的坐标计算
        */
        resetRenderPoints(): void;
        setupRender(render: BaseSpinSlotView, p: JTLayoutPoint): void;
        setupStaticRenderPoint(): void;
        getRandomId(): number;
        /**
         * 获取元素实际显示长度
         * @param start
         * @param data
         * @param list
         * @returns
         */
        getMixItemFixLength(start: number, data: number, list: number[]): number;
        getMixIndexs(start: number, row: number, col: number): number[];
    }
    export class JTCreateColumnMixScrolling extends JTCreate {
        constructor();
        create(): void;
        destroy(): boolean;
    }
    export class JTOverColumnMixScrolling extends JTOverScrolling {
    }
    export class JTRunColumnMixScrolling extends JTRunning {
        private timer;
        private isChangedTime;
        private endScrollingDistance;
        private isRunSlowDown;
        private isRunSpeedUp;
        private speedUpEasing;
        private slowDownEasing;
        constructor();
        running(): void;
        continue(): void;
        dataStandby(): void;
        clear(): void;
        private onEnterFrame;
        private scrollingUp;
        private scrollingDown;
        private scrollingLeft;
        private scrollingRight;
        private overSlowDown;
        private beginSpeedUp;
        private adjustBeforeOver;
    }
    export class JTSingleElasticPipeline extends JTSingleScheduledPipeline {
        lineTimes: cc.ActionInterval[];
        constructor();
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(): void;
    }
    export class JTBeginElastic extends JTBeginRunning {
        constructor();
        beginRunning(): void;
    }
    export class JTElasticPipeline extends JTSingleScheduledPipeline {
        lineTimes: cc.ActionInterval[];
        constructor();
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(): void;
    }
    export class JTCreateElastic extends JTCreate {
        constructor();
        create(): void;
    }
    export class JTOverElastic extends JTOverRunning {
        constructor();
        overRunning(): void;
    }
    export class JTSingleBeginElastic extends JTBeginRunning {
        constructor();
        beginRunning(): void;
    }
    export class JTSingleCreateElastic extends JTCreate {
        constructor();
        create(): void;
    }
    export class JTSingleOverElastic extends JTOverRunning {
        constructor();
        overRunning(): void;
    }
    export class JTBeginEliminate extends JTBeginRunning {
        constructor();
        dataStandby(): void;
        beginRunning(): void;
        private disappearComplete;
    }
    /**
 * 消除类开始，表现为旧的格子全部消失
 */
    export class JTBeginEliminateDisppear extends JTBeginRunning {
        constructor();
        dataStandby(): void;
        beginRunning(): void;
        private disappearComplete;
    }
    export class JTCreateEliminate extends JTCreate {
        constructor();
        create(): void;
        destroy(): boolean;
    }
    export class JTEmptyBeginEliminate extends JTBeginRunning {
        constructor();
        dataStandby(): void;
        beginRunning(): void;
    }
    export class JTOverEliminate extends JTOverRunning {
        constructor();
        overRunning(): void;
        private eliminate;
        private processEnd;
        complete(): void;
    }
    export class JTOverEliminateFallByRow extends JTOverRunning {
        constructor();
        overRunning(): void;
        private eliminate;
        private processEnd;
        complete(): void;
    }
    export class JTRunEliminate extends JTRunning {
        constructor();
        running(): void;
        private dropItem;
        changeItem(): void;
        endComplete(): void;
    }
    export class JTRunEliminateFallAndDrop extends JTRunning {
        constructor();
        running(): void;
        private dropItem;
        endComplete(): void;
    }
    export class JTRunEliminateFallByRow extends JTRunning {
        constructor();
        running(): void;
        private dropItem;
        changeItem(): void;
        endComplete(): void;
    }
    export class JTBeginIrregular extends JTBeginScrolling {
    }
    export class JTCreateIrregular extends JTCreate {
        constructor();
        create(): void;
        private isRender;
    }
    export class JTIrregularPipeline extends JTScrollingPipeline {
        lineTime: cc.Tween;
        scatterRule: JTScatterTask;
        dynamicWild: JTDynamicWildTask;
        onceWild: JTOnceWildTask;
        combineRule: JTCombineTask;
        retainWild: JTRetainWildTask;
        dynamicCombine: JTDynamicCombineTask;
        constructor();
        lineTimeComplete(useChangeData?: boolean): void;
        private isRender;
    }
    export class JTOverIrregular extends JTOverScrolling {
    }
    export class JTRunIrregular extends JTRunScrolling {
        constructor();
    }
    export class JTLouverPipeline extends JTScheduledPipeline {
        lineTimes: cc.ActionInterval[];
        constructor();
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(): void;
        resetRenderPoints(): void;
    }
    export class JTBeginLouver extends JTBeginRunning {
        constructor();
        beginRunning(): void;
    }
    export class JTCreateLouver extends JTCreate {
        constructor();
        create(): void;
    }
    export class JTOverLouver extends JTOverRunning {
        constructor();
        overRunning(): void;
    }
    export class JTSingleLouverPipeline extends JTSingleScheduledPipeline {
        lineTimes: cc.ActionInterval[];
        constructor();
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(): void;
        resetRenderPoints(): void;
    }
    export class JTSingleBeginLouver extends JTBeginRunning {
        constructor();
        beginRunning(): void;
    }
    export class JTSingleCreateLouver extends JTCreate {
        constructor();
        create(): void;
    }
    export class JTSingleOverLouver extends JTOverRunning {
        constructor();
        overRunning(): void;
        complete(): void;
    }
    export class JTScrollingMixPipelinePlugin extends JTContainer {
        private static _librarys;
        private timer;
        private scrollerGroup;
        private container;
        private imageIndex;
        private isDataReady;
        isPending: boolean;
        private changedTimes;
        private isTogether;
        private runningCount;
        private runnnigs;
        private pendingList;
        constructor();
        static getMixPipelinePlugin(id: number, scrollerGroup: JTScrollerGroup): JTScrollingMixPipelinePlugin;
        start(index: number): void;
        running(index: number): void;
        private setItemsToMixLayer;
        continue(index: number): void;
        dataStandby(index: number): void;
        private onEnterFrame;
        private scrollingUp;
        private scrollingDown;
        private fixRendersVisible;
        setRenderBeforeComplete(render: BaseSpinSlotView, s: JTScroller): boolean;
        getExtraElement(col: number, index: number): number;
        resetRenderParent(): void;
        private readyToComplete;
        private fixImageIndex;
        callClear(index: number): void;
        clear(): void;
    }
    export class JTScrollingMixPipeline extends JTScheduledPipeline {
        lineTime: cc.Tween;
        scatterRule: JTScatterTask;
        dynamicWild: JTDynamicWildTask;
        onceWild: JTOnceWildTask;
        changeSpeed: JTChangeSpeedTask;
        mixConfig: JTMixItemConfig[];
        private elements;
        mixElements: number[];
        plugin: JTScrollingMixPipelinePlugin;
        constructor();
        create(): void;
        beforeStart(): void;
        private init;
        start(): void;
        onDataStandBy(): void;
        setTaskPending(): void;
        clear(): void;
        updateRenders(): void;
        lineTimeComplete(useChangeData?: boolean): void;
        setRenderBeforeComplete(render: JTItemRender): boolean;
        /**
         *
         * @returns 横竖切换及层级还原时调用
         */
        updateRenderPosition(): void;
        /**
        * 重新设置有效渲染器，主要用于滚动介绍时零高度格子的坐标计算
        */
        resetRenderPoints(): void;
        setupRender(render: BaseSpinSlotView, p: JTLayoutPoint): void;
        setupStaticRenderPoint(): void;
        getRandomId(): number;
        /**
         * 获取元素实际显示长度
         * @param start
         * @param data
         * @param list
         * @returns
         */
        getMixItemFixLength(start: number, data: number, list: number[]): number;
        isMixAcrossColumnScroller(useChangeData?: boolean): boolean;
        isMixAcrossColumnGrid(data: number, row: number, colCount: number, useChangeData?: boolean): boolean;
        getMixIndexs(start: number, row: number, col: number): number[];
    }
    export class JTBeginMixScrolling extends JTBeginRunning {
        beginRunning(): void;
    }
    export class JTCreateMixScrolling extends JTCreate {
        constructor();
        create(): void;
    }
    export class JTOverMixScrolling extends JTOverScrolling {
    }
    export class JTRunMixScrolling extends JTRunning {
        private timer;
        private isChangedTime;
        constructor();
        running(): void;
        continue(): void;
        dataStandby(): void;
        clear(): void;
    }
    export class JTAdvanceBeginScrolling extends JTBeginRunning {
        constructor();
        beginRunning(): void;
        advanceRuleComplete(): void;
    }
    export class JTOverScrollEliminate extends JTOverScrolling {
        constructor();
        scrollComplete(): void;
        private eliminate;
        private processEnd;
        complete(): void;
    }
    export class JTOverScrollEliminateFallByRow extends JTOverScrolling {
        constructor();
        scrollComplete(): void;
        private eliminate;
        private processEnd;
        complete(): void;
    }
    export class JTCreateUnfixedLength extends JTCreate {
        constructor();
        create(): void;
    }
    /**
     * DataConstant
     */
    export class DataConstant {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: {});
        static get instance(): DataConstant;
        private static _instance;
        constructor();
    }
    /**
     * DataGameFreeLines
     */
    export class DataGameFreeLines {
        getKeys(): any[];
        getIds(): any[];
        getData(key: any): any;
        private _data;
        private _keys;
        private _ids;
        set conf(obj: {});
        static get instance(): DataGameFreeLines;
        private static _instance;
        constructor();
    }
    /**
 * GameConfig
 */
    export class GameConfig {
        constructor();
        /**
         * 游戏ID（打包时有用)
         */
        gameId: number;
        /**
         * 是否启用资源版本管理(发布版会对资源的版本进行管理)
         */
        resVersionAvailable: boolean;
        /**
         * 游戏的模式（DEBUG, RELEASE）
         */
        mode: GameMode;
        /**
         * 测试token
         */
        testToken: string;
    }
    export enum IMaterialTypeTurnCoinView {
        GRAY = 1,
        NORMAL = 2
    }
    export class TurnCoinView extends game.View {
        bg: cc.Node;
        scaleNode: cc.Node;
        sky: cc.Node;
        nodeBlocks: cc.Node;
        spineLand: sp.Skeleton;
        spineCylinder: sp.Skeleton;
        spineFlower: sp.Skeleton;
        spineCube: sp.Skeleton;
        spineCoin: sp.Skeleton;
        spineRole: sp.Skeleton;
        guanbi: cc.Node;
        operateNode: cc.Node;
        nodeAvatar: cc.Node;
        nodeNum: cc.Node;
        nodeCashOut: cc.Node;
        avatarBtn: cc.Node;
        numBtn: cc.Node;
        gameIllustrate: cc.Node;
        curBase: cc.Label;
        nextReward: cc.Label;
        exchangeBtn: cc.Node;
        settlementNode1: cc.Node;
        settlementNode2: cc.Node;
        hashNode: cc.Node;
        serverHash: cc.Label;
        clientSeed: cc.Label;
        randomNum: cc.Label;
        gongpingxingBtn: cc.Node;
        refreshBtn: cc.Node;
        startMask: cc.Node;
        private netNode;
        private btnCall;
        private openBtnNode;
        private isWin;
        private isLoop;
        private isGbClick;
        private isNumClick;
        private isExchange;
        private isHashClick;
        private isStartPlay;
        private isCloseView;
        private isResultshow;
        private isAvatarClick;
        private isStartLayout;
        private isExchangeClick;
        private lastRoundResultAvatar;
        private nextNum;
        private startNum;
        private _RefreshNextNum;
        private _RefreshStartNum;
        private closeTimeout;
        private doubleCoin;
        private currentResult;
        private lastDoublCoin;
        onLoad(): void;
        start(): void;
        onOpen(fromUI: number, ...args: any[]): void;
        onClose(): void;
        private addEvent;
        private allInit;
        private setReceiveCallBack;
        onDestroy(): void;
        /**界面打开初始化 */
        private stertInit;
        /** 马里奥的入场动画播完了没 */
        private isSpineRoleOver;
        /**界面关闭初始化 */
        private closeInit;
        /**
         * 历史显示
         */
        private lastView;
        /**
         * 哈希显示
         */
        private hashView;
        layout(): void;
        /**
         * 打开界面动效
         */
        private onStartTween;
        delayToShowNode(node: cc.Node, delayTime: number): void;
        /**
        * 关闭界面动效
        */
        private onCloseTween;
        /**
         * 节点渐变
         * @param node 渐变节点
         * @opacity number = 255
         */
        gradientView(node: cc.Node, opacity?: number): void;
        /**
         * 窗口变化ui刷新
         */
        updateUi(): void;
        onAvatar(): void;
        onNum(): void;
        /**
         * 兑换
         */
        onExchange(): void;
        /** 按钮点击效果*/
        private btnTween;
        /**
         * 刷新客户端种子
         */
        onRefresh(): void;
        /**
        * 操作请求
        */
        doubleCoinReq(reqType: protoSlot.doubleCoinReqType, guessResult?: protoSlot.doubleCoinResult): void;
        /**
         * 服务器数据返回
         * @param data 数据
         */
        doubleCoinResp(data: any): void;
        /**
        * 服务器种子请求
        */
        doubleCoinInfoReq(): void;
        /**
         * 服务器数据返回
         * @param data 数据
         */
        doubleCoinInfoResp(data: any): void;
        /**
         * 金币动画
         * @param isAvatar 是否为头像面
         */
        coinAni(isAvatar: boolean): void;
        /**
         * 更新金币
         * @param coin 显示的金币
         */
        updateCoin(coin: number): void;
        set RefreshStartNum(value: number);
        get RefreshStartNum(): number;
        set RefreshNextNum(value: number);
        get RefreshNextNum(): number;
        /**数字滚动 */
        coinNum(start: number, end: number, isRefreshStartNum?: boolean): void;
        /**请求打开公平验证界面 */
        onOpenHash(): void;
        /**显示彩带 */
        viewStreamer(): void;
        /**
         * 按钮闪烁
         * @param node
         */
        onBtnView(node: cc.Node): void;
        /**
         * 禁用按钮
         * @param isAvatar 是否头像按钮
         */
        disabledBtn(isAvatar: boolean): void;
        /**
         * 恢复按钮
         */
        recoverBtn(): void;
        /**
         * 窗口关闭
         */
        private close;
        /**
        * 置灰节点以及子节点
        * @param node
        * @param type
        */
        grayAllChildren(node: cc.Node, type: IMaterialTypeTurnCoinView): void;
    }
    export class TopUi extends BaseView {
        gameName: cc.Label;
        times: cc.Label;
        onLoad(): void;
        onDestroy(): void;
        private updateTimeTxt;
        layoutLandscape(): void;
        layoutPortrait(): void;
        private initLayout;
    }
    /**
 * 滚动设置弹窗类,设置滚动的次数
 */
    export class TurnSetting extends BaseView {
        private autorotationCtrl;
        private timesLabel;
        private defaultColor;
        private themeColor;
        private nodes;
        winScore: cc.Label;
        allScore: cc.Label;
        betScore: cc.Label;
        touchLayer: cc.Node;
        private fastBtn;
        private normalBtn;
        private fastIcon;
        private statBtn;
        private touchIndex;
        /** 数字灰暗的透明度 80 */
        private opacityNumGrey;
        /** 数字和开始按钮点击变亮的透明度 230 */
        private opacityNumLight;
        onLoad(): void;
        onOpen(fromUI: number, ...args: any[]): void;
        start(): void;
        private onWinscoreChange;
        protected onEnable(): void;
        private popDown;
        private time;
        private times;
        private dataGame;
        loadTurnSetting(timesLabel: cc.Label[], autorotationCtrl: cc.Node[]): void;
        private touchEvent;
        callback(event: any): void;
        private updateTurboState;
        onClickNormalBtn(): void;
        onClickFastBtn(): void;
        onClickStart(): void;
        onDestroy(): void;
    }
    /**
     *  淡入淡出 效果动画
     *  备注:
     *      - 修改时请确认效果作用范围，若为子类独有，重写子类即可
     *      - 若子类中确认为统一效果，需整合到父类中
     */
    export class FadeUIAnimation extends core.UIAni_PG {
        fadeTime: number;
        fadeNodeList: cc.Node[];
        /**
         * 流程: 打开节点 -> 弹窗缓动 -> 渐出节点队列的渐出效果
         * @param finish
         */
        execAni_open(finish: Function): void;
    }
    /**
 *  余额弹窗 弹窗动画
 */
    export class BalanceUIAnimation extends FadeUIAnimation {
    }
    /**
 *  押分弹窗 弹窗动画
 */
    export class BetUIAnimation extends FadeUIAnimation {
    }
    /**
 *  赔付表弹窗 弹窗动画
 */
    export class CompensateUIAnimation extends FadeUIAnimation {
    }
    /**
 *  规则弹窗 弹窗动画
 */
    export class RuleUIAnimation extends FadeUIAnimation {
    }
    /**
 *  自动旋转弹窗 弹窗动画
 */
    export class TurnSettingUIAnimation extends FadeUIAnimation {
    }

}