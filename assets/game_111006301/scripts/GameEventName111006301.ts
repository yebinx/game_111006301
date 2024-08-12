export enum EventName {
  /**
   * 游戏胜利
   */
  EVENT_WIN_GAME = "EVENT_WIN_GAME",
  /**
   * 倍数改变，人物动作+炮筒改变
   */
  EVENT_UPDATE_MULTIPLE = "EVENT_UPDATE_MULTIPLE",
  /**
   * 刷新炮筒倍数显示
   */
  EVENT_UPDATE_MULTIPLE_NUM = "EVENT_UPDATE_MULTIPLE_NUM",
  /**
   * 连续中奖，掉下来后还能继续
   */
  EVENT_CONTINUE_REWARD = "EVENT_CONTINUE_REWARD",
  /**
   * 连续中奖，最后一次中奖
   */
  EVENT_CONTINUE_REWARD_END = "EVENT_CONTINUE_REWARD_END",
  /**
    * 免费游戏开始
    */
  FREE_GAME_START = "FREE_GAME_START",
  /**
    * 免费游戏关闭
    */
  FREE_GAME_OVER = "FREE_GAME_OVER",
  /**
    * 刷新免费游戏剩余次数显示
    */
  EVENT_FREE_GAME_NUM = "EVENT_FREE_GAME_NUM",
  /** 增加免费游戏剩余次数显示 */
  EVENT_ADD_FREE_GAME_NUM = "EVENT_ADD_FREE_GAME_NUM",
  /**
    * 开始播放赢分动画
    */
  EVENT_PLAY_WIN_NUM_BEGIN = "EVENT_PLAY_WIN_NUM_BEGIN",
  /**
    * 停止播放赢分动画
    */
  EVENT_STOP_WIN_NUM = "EVENT_STOP_WIN_NUM",
  /**
    * 播放人物动画
    */
  EVENT_PLAY_ROLE_ANI = "EVENT_PLAY_ROLE_ANI",
  /**
   * 播放中奖动画
   */
  EVENT_PLAY_SCORE_ANI = "EVENT_PLAY_SCORE_ANI",
}

/**
 * 胜利类型
 */
export enum WinType {
  /**
   * 超级大奖
   */
  SuperWin = "SuperWin",
  /**
   * 巨奖
   */
  MargeWin = "MargeWin",
  /**
   * 大奖
   */
  BigWin = "BigWin",
  /**
   * 失败
   */
  Lose = "Lose",
  /**
   * 赢得
   */
  win = "win",
  /**
  * 五连
  */
  fiveEven = "fiveEven",
  /**
   * 百搭
   */
  wild = "wild"
}

/**
 * 人物动画类型
 */
export enum RoleAniType {
  /**
   * 随机状态
   */
  Random = 1,
  /**
   * 倍数改变动作
   */
  Multiplier = 2,
  /**
   * 大奖
   */
  WinMedium = 3,
  /**
   * 总结算动作，必须赢得奖励
   */
  WinSmall = 4,
  /**
   * 加速滚动时，人物动作
   */
  FastSpinIdle = 5,
}

export enum SOUND_NAME {
  /**游戏免费背景音乐 */
  FreeGame_Back_Music = "FreeGame_Back_Music",
  /** 免费游戏结算音效 */
  Free_Game_Settlement = "Free_Game_Settlement",
  /** 免费游戏结算结束音效 */
  Free_Game_Settlement_End = "Free_Game_Settlement_End",
  /**有2个wild时每列图案下落音效 */
  Scatter_Expectation_End = "Scatter_Expectation_End",
  /**有2个scatter时滚轴转出scatter音效 */
  Sym_Scatter_To_Fs = "Sym_Scatter_To_Fs",
  /**图案下落前播放 */
  Scatter_Expectation_Beat = "Scatter_Expectation_Beat",
  /**有2个scatter时等待图案下落音效 */
  Scatter_Expectation_Wait = "Scatter_Expectation_Wait",
  /**有2个scatter时图案下落音效 */
  Scatter_Expectation_Drop = "Scatter_Expectation_Drop",
  /**有2个wild时滚轴加速效果音效 */
  Reel_Quick = "Reel_Quick",
  /**滚轴出现3个scatter触发免费游戏音效 */
  Fs_Trigger = "Fs_Trigger",
  /**触发免费游戏音效 */
  Fs_Enter = "Fs_Enter",
  /**进入免费游戏开始界面时的转场白光音效 */
  Fs_Enter_Light = "Fs_Enter_Light",
  /**免费游戏下方展示倍数总数音效 */
  Fs_Mtp_Show = "Fs_Mtp_Show",
  /**wild播放倍数动画音效 */
  Wild_Shake = "Wild_Shake",
  /**wild出现的x2倍数数字移动到页面中间音效 */
  Wild_Mtp_Move = "Wild_Mtp_Move",
  /**免费游戏中wild出现的x2倍数数字移动到页面中间音效 */
  Fs_Wild_Mtp_Move = "Fs_Wild_Mtp_Move",
  /**普通游戏界面中间出现倍数总数音效 */
  Mtp_Sum = "Mtp_Sum",
  /**免费游戏界面中间出现倍数总数音效 */
  Mtp_Sum_Fs = "Mtp_Sum_Fs",
  /**wild参与中奖音效 */
  Wild_Win = "Wild_Win",
  /**转出scatter音效 */
  Scatter = "Scatter",
  /**转出Wild音效 */
  Wild = "Wild",
  /**"共赢得"信息框音效 */
  Textbox_Total = "Textbox_Total",

  /**免费开始界面出现音效 */
  Free_Start_Appear = "Free_Start_Appear",
  /**免费游戏出现增加免费次数符号音效 */
  Free_Add_Sym = "Free_Add_Sym",
  /**免费游戏增加免费次数音效 */
  Free_Add = "Free_Add",
  /**地鼠每次移动1格音效 */
  Role_Move = "Role_Move",
  /**地鼠在中奖消除时每次移动1格音效 */
  Role_Win_Move = "Role_Win_Move",
  /**倍数移动至信息框音效 */
  Mtp_Effect = "Mtp_Effect",
  /**倍数UI出现音效 */
  Mtp_Appear = "Mtp_Appear",
  /**图案中奖音效 */
  Symbol_Prize = "Symbol_Prize",
  /**1级信息框展示赢奖音效 */
  Textbox_01 = "Textbox_01",
  /**2级信息框展示赢奖的数字增加音效 */
  Textbox_Coin = "Textbox_Coin",
  /**2级信息框展示总赢奖 */
  Textbox_02 = "Textbox_02",
  /**1级信息框展示总赢奖音效 */
  Fs_Mg_Prize = "Fs_Mg_Prize",
  /**单列滚轴停止音效 */
  Reel_Stop = "Reel_Stop",
  /**快速旋转时滚轴停止音效 */
  Click_Reel_Stop = "Click_Reel_Stop",
  /**免费游戏开始按钮点击音效 */
  Fs_Start = "Fs_Start",
  /**结束按钮点击音效 */
  Fs_End = "Fs_End",
  /**大奖音效 */
  Prize_Big = "Prize_Big",
  /**大奖结束音效 */
  Prize_Big_End = "Prize_Big_End",
  /** 大奖切换音效*/
  Prize_Big_Switch = "Prize_Big_Switch",
  /**大奖刚出现 */
  Prize_Big_Start = "Prize_Big_Start",
  /**大奖数字结束滚动5s后退出音效 */
  bigwin_fx_exit = "bigwin_fx_exit",
  /** 5连中奖音效*/
  Five_Prize = "Five_Prize",
  /**图案消除音效 */
  Symbol_Explode = "Symbol_Explode",
  /**非中奖元素消除下落 */
  Symbol_Explode_Drop = "Symbol_Explode_Drop",
  /**点击滚轴图案音效 */
  Reel_Click = "Reel_Click",


  /**免费游戏中进度条集满后右侧倍数激活音效 */
  Fs_Multibar_Nextlevel = "Fs_Multibar_Nextlevel",
  /**免费游戏中进度条增加音效 */
  Fs_Multibar_Increase = "Fs_Multibar_Increase",
  /**免费游戏中上方倍数数字变化音效 */
  Fs_Multi_Change_Central = 'Fs_Multi_Change_Central',
  /**免费游戏中倍数乘以赢奖后展示赢奖音效 */
  Fs_Multi_Infoboard_Bounce = "Fs_Multi_Infoboard_Bounce",
  /**免费游戏倍数移动至信息框音效 */
  Fs_Multi_Num_To_Infoboard = "Fs_Multi_Num_To_Infoboard",
  /**免费游戏中收集百搭音效 */
  Fs_Sym_Wild_To_Infoboard = "Fs_Sym_Wild_To_Infoboard",

}





//地鼠事件
export enum mouseEvent {
  //获得了奖励抛出奖励次数还有是否在免费游戏中
  GET_REWARD_AND_POP_TIME = "GET_REWARD_AND_POP_TIME",

  //获得了奖励牌子的回调
  GET_REWARD_BOARD_CALL = "GET_REWARD_BOARD_CALL",

  //消除前抛出消息改变地鼠举的板子字体
  GET_REWARD_BEFOR = "GET_REWARD_BEFOR",

  //进入免费游戏事件
  INIT_TO_FREE_GAME = "INIT_TO_FREE_GAME",

  //进入免费游戏入口关闭事件
  FREE_GAME_CLOSE = "FREE_GAME_CLOSE",

  //初始化地鼠位置事件
  INIT_MOUSE_MOVE_POS = "INIT_MOUSE_MOVE_POS",

  //初始化地鼠中奖位置事件
  INIT_MOUSE_MOVE_POS_REWARD = "INIT_MOUSE_MOVE_POS_REWARD",

  //地鼠跑动位置事件
  MOUSE_MOVE_POS = "MOUSE_MOVE_POS",

  //消除后地鼠跑动事件
  CLEAR_MOUSE_MOVE = "CLEAR_MOUSE_MOVE",

  //服务端数据刷新事件
  SEVER_DATA_INIT = "SEVER_DATA_INIT",

  //消失动画结束回调事件
  ANIMATION_STOP_CALL_BACK = "ANIMATION_STOP_CALL_BACK",

  //普通模式重连发送数据事件
  NORMAL_RECONNECTION_DATA = "NORMAL_RECONNECTION_DATA",

  //免费模式重连发送数据事件
  FREE_RECONNECTION_DATA = "FREE_RECONNECTION_DATA",

  //滚轴动效出现
  ROLL_ANI_START = "ROLL_ANI_START",

  //滚轴动效出现哪一列
  ROLL_ANI_START_WHO = "ROLL_ANI_START_WHO",

  //滚轴动效结束
  ROLL_ANI_END = "ROLL_ANI_END",

  //免费游戏次数增加
  FREE_GAME_ADD_TIME = "FREE_GAME_ADD_TIME",

  //滚轴结束回调
  ROLL_END_CALL_BACK = "ROLL_END_CALL_BACK",

  //地鼠移动结束事件
  MOUSE_MOVE_END = "MOUSE_MOVE_END",

  //公地鼠大移动结束事件
  MOUSE_BIG_MOVE_END = "MOUSE_BIG_MOVE_END",

  //透明飘字结束结束事件
  OPACITY_END = "OPACITY_END",

  //赢奖时菜板子事件
  GET_RAWARD_FOOD = "GET_RAWARD_FOOD",

  //中奖开始时的事件
  GET_REWARD_BEGAN = "GET_REWARD_BEGAN",

  //中免费开始时地鼠背景光的事件
  GET_FREE_REWARD_BEGAN_MOUSE_BG = "GET_FREE_REWARD_BEGAN_MOUSE_BG",

  //开始播放爆裂动画事件
  PLAY_BURST_ANI_BEGAN = "PLAY_BURST_ANI_BEGAN",

  //滚轴加速动效结束遮罩出现事件
  PLAY_ROLL_ANI_BEGAN = "PLAY_ROLL_ANI_BEGAN",

  //滚轴加速动效结束遮罩消失事件
  PLAY_ROLL_ANI_END = "PLAY_ROLL_ANI_END",

  //滚轴加速动效结束遮罩消失事件
  TOP_ANI_START = "TOP_ANI_START",

  //滚轴加速动效结束遮罩消失事件
  TOP_ANI_END = "TOP_ANI_END",

  //滚轴结束流程
  ROLL_END_STEP_TASK = "ROLL_END_STEP_TASK",

  //没钱开始了滚轴
  NOT_HAVE_MONY_OPEN_ROLL = "NOT_HAVE_MONY_OPEN_ROLL",

  //滚轴开始
  ROLL_PLAY = "ROLL_PLAY",

  //相乘字到位事件回调
  RIDE_ANI_IN_TARGET = "RIDE_ANI_IN_TARGET",

  //滚轴中奖流程结束
  ROLL_REWARD_END = "ROLL_REWARD_END",

  //进度条流程走完
  PROGRESS_END = "PROGRESS_END",

  //圆环里倍数相乘字体开始消失
  RIDE_NUMEBER_GEGAN_FADOUT = "RIDE_NUMEBER_GEGAN_FADOUT",

  //开始倍数相乘
  BEGAIN_RIDE_ANI = "BEGAIN_RIDE_ANI",

  //大奖结束回调
  BIG_WIN_ANI_END_CALL_BACK = "BIG_WIN_ANI_END_CALL_BACK",

  //播放大奖动画事件
  PLAY_ELEPHAN_ANI = "PLAY_ELEPHAN_ANI"

}