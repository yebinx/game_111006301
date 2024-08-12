import { serializeWithLong } from "../../../scenes/ex";
import BonusGame111006301 from "../bonusGame/BonusGame111006301";
import FreeGameResult from "../freeGameResult/FreeGameResult";
import { EventName, mouseEvent, RoleAniType, SOUND_NAME, WinType } from "../GameEventName111006301";
import CommonNumAtlas111006301 from "../main/CommonNumAtlas111006301";
import { UIID } from "../main/Main111006301";
import tool from "../tool/Tool";
import JTChildManager111006301 from "./scrollerSkins/JTChildManager111006301";
import JTLayerManager111006301 from "./scrollerSkins/JTLayerManager111006301";
import JTLogicFactroy111006301 from "./scrollerSkins/JTLogicFactroy111006301";
import SpinSlotViewExtend111006301 from "./SpinSlotViewExtend111006301";




const { ccclass, property } = cc._decorator;

/**
 * 游戏主界面类
 * 游戏元素资源命名规则:
 *  1. 普通状态：元素ID, 如:1
 *  2. 暗淡状态: ID_fade, 如:1_fade
 *  3. 模糊状态: 元素ID_blur, 如:1_blur
 */
/**
 * 游戏的主界面
 */

@ccclass
export default class GameLayer111006301 extends slot.AbstractMainView {
    @property(cc.Node)
    roller: cc.Node = null;

    @property(cc.Node)
    rollMarsk: cc.Node = null;

    @property(cc.Node)
    rollPushMarsk: cc.Node = null;

    @property(cc.Node)
    ordinaryGameNode: cc.Node = null;

    @property(cc.Node)
    freeGameNode: cc.Node = null;

    @property(cc.Node)
    blueMarsk: cc.Node = null;

    @property(cc.Node)
    topAniMarsk: cc.Node = null;

    @property(cc.Node)
    fiveStarNode: cc.Node = null;

    //免费游戏次数节点
    private freeLabelNode: cc.Node = null

    //大奖界面是否在
    private bigWinLayerIsThat = false

    /**滚轴滚到哪一列 */
    private rollLineTime = 0

    /**加速后掉落的间隔时间 */
    private scatterDopGapTime = 0.02

    /**加速后掉落的等待时间 */
    private scatterDopWaitTime = 1

    private isFirstInGame = true

    /**上一次倍数的倍率 */
    private lastTimeRide = 0

    onLoad() {
        slot.SlotConfigManager.instance.registerJPTypes(3);//*-*-*
        super.onLoad();
        window['GameLayer111006301'] = this;
        console.log("game111006301 onload", this.node);
        // this.isSetMask = true;
        game.EventManager.getInstance().addEventListener(slot.NetSlotConst.SPINRESP, this._onRollingResp, this);
        game.EventManager.getInstance().addEventListener(slot.NetSlotConst.RESTORERESP, this.setRespData, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_TREAT_FULL_LINE_IN_LOOP, this.playFullLine, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_ELEMENT_PAY_ID_SHOW, this.reelClick, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_ELEMENT_PAY_ID_HIDE, this.reelClickHide, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_END_STEP_TASK, this.stepTask, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.MOUSE_BIG_MOVE_END, this.onScrollerStartComplete, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.PROGRESS_END, this.sendPlayWildAni, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_STOP_SLOT_MACHINE_IMMEDIATELY, this.event_stop_slot_machine_immediately, this);
        game.EventManager.getInstance().addEventListener(slot.NetSlotConst.BUYFREESPINRESP, this._onBuyFreeRollingResp, this);

    }

    onDestroy() {
        this.dispose();
        game.EventManager.getInstance().removeEventListener(slot.NetSlotConst.SPINRESP, this._onRollingResp, this);
        game.EventManager.getInstance().removeEventListener(slot.NetSlotConst.RESTORERESP, this.setRespData, this);
        game.EventManager.getInstance().removeEventListener(slot.GameEventNames.EVENT_TREAT_FULL_LINE_IN_LOOP, this.playFullLine, this);
        game.EventManager.getInstance().removeEventListener(slot.GameEventNames.EVENT_ELEMENT_PAY_ID_SHOW, this.reelClick, this);
        game.EventManager.getInstance().removeEventListener(slot.GameEventNames.EVENT_ELEMENT_PAY_ID_HIDE, this.reelClickHide, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.MOUSE_BIG_MOVE_END, this.onScrollerStartComplete, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.ROLL_END_STEP_TASK, this.stepTask, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.PROGRESS_END, this.sendPlayWildAni, this);
        game.EventManager.getInstance().removeEventListener(slot.GameEventNames.EVENT_STOP_SLOT_MACHINE_IMMEDIATELY, this.event_stop_slot_machine_immediately, this);
        game.EventManager.getInstance().removeEventListener(slot.NetSlotConst.BUYFREESPINRESP, this._onBuyFreeRollingResp, this);
        //game.EventManager.getInstance().removeEventListener(slot.NetSlotConst.SPINRESP, this._onRollingResp, this);
    }

    private numTime = 0;
    private scatterM_time = 3;
    private TouchRollM_time = 3;
    private isCanScatter = true
    private isCanTouchRoll = true
    private interval = 0;
    private eleAniIndex = 0;
    eleConfig: { [num: number]: { interval, aniName } } = {
        [0]: { interval: 30 * 1000, aniName: "idle3" },
        [1]: { interval: 30 * 1000, aniName: "idle3" },
        [2]: { interval: 5 * 1000, aniName: "idle4" },
    };
    protected update(dt: number): void {
        if (this.numTime <= 1) this.numTime += dt;
        if (this.numTime >= 1) {
            this.numTime = 0;
            if (this.scatterM_time >= 0) {
                // 倒计时到，随机旋转一个免费游戏开始
                if (this.scatterM_time == 0) {
                    this.isCanScatter = true
                }
            }
            if (this.TouchRollM_time >= 0) {
                // 倒计时到，随机旋转一个免费游戏开始
                if (this.TouchRollM_time == 0) {
                    this.isCanTouchRoll = true
                }
            }
            this.TouchRollM_time -= 1;
            this.scatterM_time -= 1;
        }

        if (!tool.gameState && tool.respData) {
            if (tool.isPastTime(this.interval)) {
                let aniName = this.eleConfig[this.eleAniIndex++].aniName;
                if (this.eleAniIndex >= 3) {
                    this.eleAniIndex = 0;
                }
                let interval = this.eleConfig[this.eleAniIndex].interval;
                this.interval = tool.getNowTime() + interval;
                game.EventManager.getInstance().raiseEvent(mouseEvent.PLAY_ELEPHAN_ANI, aniName);
            }
        }
    }

    resetEleAni() {
        this.eleAniIndex = 0;
        this.interval = tool.getNowTime() + this.eleConfig[this.eleAniIndex].interval;
    }



    /**
     * 免费时炮筒倍数显示，默认显示20下标
     */
    private m_arrCannonNum = {
        5: [6, 12, 18, 40],
        10: [3, 6, 9, 20],
        20: [1, 2, 3, 5]
    }

    private m_isChufaFree: boolean = false;
    start() {
        console.log("ywb发送了消息")
        game.EventManager.getInstance().raiseEvent(EventName.EVENT_STOP_WIN_NUM);
        if (slot.EntranceView.instance.node.getChildByName("spr_bg2")) {
            this.freeLabelNode = slot.EntranceView.instance.node.getChildByName("spr_bg2").getChildByName("spr_remaining").getChildByName("lab_num")
            let pos = tool.getPosByOtherNode(this.freeLabelNode, this.roller.parent.parent)
        }
        this.resetEleAni();
    }

    private stepTaskCallBack = null
    stepTask(event, callBack) {
        if (this.isFirstInGame) {
            callBack.run()
            this.isFirstInGame = false
        } else {
            if (tool.respData?.state == 2) {
                let grid = tool.respData.spinResult.grid
                let resultMony = Number(tool.respData.spinResult.spinCoin)
                let isHaveWild = false
                let delayTime = 0
                tool.currentWildArr = []
                for (let index = 0; index < grid.length; index++) {
                    const element = grid[index];
                    if (element == 9) {
                        isHaveWild = true
                        let render = slot.SlotMachineView.instance.scroller.getRenderByIndex(index + 1);
                        tool.currentWildArr.push(render)
                    }
                }
                tool.currentWildTime = 0
                if (slot.GameControlBase.instance.fastBtnState == 1) {
                    slot.SoundMger.instance.playEffect(SOUND_NAME.Click_Reel_Stop, false);
                }
                if (isHaveWild && tool.isCanAddRide) {
                    this.stepTaskCallBack = callBack
                    this.scheduleOnce(() => {
                        this.sendPlayWildAni()
                    }, 0.1)
                } else {
                    if (resultMony) {
                        delayTime = 2
                        game.EventManager.getInstance().raiseEvent(mouseEvent.BEGAIN_RIDE_ANI);
                    }
                    let delay = cc.delayTime(delayTime)
                    let call = cc.callFunc(function () {
                        callBack.run()
                    }.bind(this))
                    this.node.runAction(cc.sequence(delay, call))
                }
            } else {
                console.log("ywb流程进入", tool.respData?.state)
                callBack.run()
            }
        }
    }

    private sendPlayWildAni() {
        let rate = 1
        if (tool.respData.state == 2 && tool.respData.updateList) {
            let updateList = tool.respData.updateList
            let ratio = null
            for (let index = 0; index < updateList.length; index++) {
                const element = updateList[index];
                if (element.type == 3) {
                    ratio = element.value.ratio
                }
            }
            rate = ratio
        }
        console.log("ywb测试", tool.currentWildTime)
        if (tool.currentWildTime >= tool.currentWildArr.length) {
            let resultMony = Number(tool.respData.spinResult.spinCoin)
            let delayTime = 0
            if (resultMony) {
                let moveTime = 0
                if (rate > this.lastTimeRide) {
                    delayTime = 3.5
                    moveTime = 1
                } else {
                    delayTime = 2
                }
                let delay = cc.delayTime(moveTime)
                let call = cc.callFunc(function () {
                    game.EventManager.getInstance().raiseEvent(mouseEvent.BEGAIN_RIDE_ANI);
                }.bind(this))
                this.node.runAction(cc.sequence(delay, call))
            }
            let delay = cc.delayTime(delayTime)
            let call = cc.callFunc(function () {
                this.stepTaskCallBack.run()
            }.bind(this))
            this.node.runAction(cc.sequence(delay, call))
            tool.currentWildArr = []
            this.lastTimeRide = rate
        } else {
            if (tool.isCanAddRide) {
                let wild = (tool.currentWildArr[tool.currentWildTime] as SpinSlotViewExtend111006301)
                wild && wild.playWildAni();
                tool.currentWildTime++;
            } else {
                this.stepTaskCallBack.run()
            }

        }
    }

    private reelClick() {
        slot.SoundMger.instance.playEffect(SOUND_NAME.Reel_Click, false);
        // this.rollMarsk.active = true

    }

    private reelClickHide() {
        // this.rollMarsk.active = false
    }

    /**
     * 窗口的初始化函数(请在此完成主界面的老虎机组件及竖屏下视频播放器组件的初始化工作)
     * @param slotMachine 老虎机实例
     * @param videoPlayer 动画播放器实例
     * @param sideLineSetter 侧边中奖线设置器
     */
    protected onInit() {
        // 关闭五连动画选项
        slot.SpinManager.instance.isFullLineAvailable = false;
        // 初始化滚轴
        this._initSlotMachineView();
        // 初始化侧边线设置按钮
        // this._initSideLineSetter(sideLineSetter);
        console.log("oninit");

        // slot.SpinManager.customResultCallBack = () => {
        //     // console.log("设置自定义结果（适用于消除类)----------------:", slot.SpinManager.instance.customUpdateData);
        //     return slot.SpinManager.instance.customUpdateData.game_10017.data.resultList;
        // }
        // cc.view.enableAntiAlias(false);
    }

    public scatterTask: slot.JTScatterTask = null;
    public wildTask: slot.JTWildTask = null;
    public scroller: slot.JTChannelScrollerGroup = null;
    private m_isRunning: boolean = false;

    protected onInitScroller(slotMachine: slot.SlotMachineView): void {
        let scroller = this.scroller = slotMachine.scroller;
        let gameConfig: any = slot.SlotConfigManager.instance.DataGame.getData(slot.SlotConfigManager.instance.gameID);
        scroller.setupFactory(new JTLayerManager111006301(), new JTChildManager111006301(), new JTLogicFactroy111006301());

        let option = scroller.options(slot.JTScrollingPipeline, slot.JTScrollerGroup.USE_CONVERT_MROE_LIST, gameConfig.column, slotMachine.scrollingComplete);
        option.childOption(slot.JTCreateScrolling, slot.JTOptionType.OPTION_CREATE);
        option.childOption(slot.JTBeginScrolling, slot.JTOptionType.OPTION_BEGIN_RUNNING, slotMachine.beginScrolling);
        option.childOption(slot.JTRunScrolling, slot.JTOptionType.OPTION_RUNNING, slotMachine.onSpinPreStop);
        option.childOption(slot.JTOverScrolling, slot.JTOptionType.OPTION_OVER_RUNNING, slotMachine.scrollingProgress);

        scroller.setupDefaultItemList(this.getSourceList, slot.SlotConfigManager.instance.DataElement.getKeys(), false);
        slot.JTDefaultItemRender.setPlayCoinIndex(1, 7, 2);

        let lastTime = 0;
        let onWatchRunning = (s: slot.JTScroller): void => {
            if (this.m_isRunning == false) {
                this.m_isRunning = true;
                game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_GAMECONTROL_ALL_BTN_CLICK, false);//不可点击
                if (this.isCanScatter) {
                    this.isCanScatter = false
                    this.scatterM_time = 3
                }
                this.resetEleAni();
                game.EventManager.getInstance().raiseEvent(mouseEvent.PLAY_ELEPHAN_ANI, "fastspin_start");
                game.EventManager.getInstance().raiseEvent(mouseEvent.ROLL_ANI_START, 4);
            }
            this.scheduleOnce(() => {
                s.skinLoader.y = -252;
                s.skinLoader.x = (s as any).x + 60;//+ this.slotMachine.gridWidth * s.skinLoader.scaleX * .5;
                s.skinLoader.scaleX = 1.5;
                s.skinLoader.scaleY = 1.6;
                // 播放音效
                slot.SoundMger.instance.playEffect(SOUND_NAME.Reel_Quick, false);
                let delay = cc.delayTime(0.05)
                let call = cc.callFunc(function () {
                    game.EventManager.getInstance().raiseEvent(mouseEvent.ROLL_ANI_START_WHO, s.index);
                }.bind(this))
                s.skinLoader.runAction(cc.sequence(delay, call))
                let rollPushMarskPos = tool.getPosByOtherNode(s.skinLoader, this.rollPushMarsk.parent)
                this.rollPushMarsk.x = rollPushMarskPos.x + 16
                this.rollPushMarsk.y = rollPushMarskPos.y
                this.rollPushMarsk.active = true;
                this.rollPushMarsk.zIndex = 10;
                cc.Tween.stopAllByTarget(this.rollPushMarsk);
                cc.tween(this.rollPushMarsk)
                    .to(0.8, { opacity: 255 }, { easing: cc.easing.quartInOut })
                    .start();
            }, 0.2)
        }

        this.scatterTask = new slot.JTScatterTask();
        this.scatterTask.callScatterComplete = function (s: slot.JTScroller) {
            slot.SoundMger.instance.stopEffect(SOUND_NAME.Reel_Quick);
            slot.SoundMger.instance.playEffect(SOUND_NAME.Scatter_Expectation_End);
            if (s.index == 4) {
                if (this.m_isRunning) {
                    game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_GAMECONTROL_ALL_BTN_CLICK, true)
                    this.resetEleAni();
                    game.EventManager.getInstance().raiseEvent(mouseEvent.PLAY_ELEPHAN_ANI, "fastspin_exit");
                    game.EventManager.getInstance().raiseEvent(mouseEvent.ROLL_ANI_END);
                }
                this.m_isRunning = false
            }
            cc.Tween.stopAllByTarget(this.rollPushMarsk);
            cc.tween(this.rollPushMarsk)
                .set({ opacity: 255 })
                .to((255 - this.rollPushMarsk.opacity) / 255 * 0.3, { opacity: 0 })
                .call(() => {
                    this.rollPushMarsk.active = false;
                })
                .start();
        }.bind(this)

        this.scatterTask.config(10, 2, "5-80-1", 1000, 1000, null, true, null, onWatchRunning, slot.JTScatterTask.ITEM_COUNT_MODE, null, false, false);//Game/Game_2505/res/card/cardFrame/swkeffect
        scroller.registerTask(slot.JTRuleTaskManager.TYPE_SCATTER, this.scatterTask, new slot.JTTaskContainer());
    }

    private event_stop_slot_machine_immediately() {
        this.m_isRunning = false;
        // slot.SoundMger.instance.playEffect(SOUND_NAME.Click_Reel_Stop, false);
    }

    /**
     * 初始化滚轴
     * @private
     * @method _initSlotMachineView
     * @param {Common.SlotMachineView} slotMachine 老虎机的滚轴组件
     * 
     * 本函数根据模板自动生成，请根据需要自行修改为需要的值
     */
    private _initSlotMachineView() {
        // 开启老虎机渲染优化
        slot.EliminateEffectUtils.setup(1500, 0.12, 0.08, 0.1, 0.8, 0.1, slot.EliminateDisappearUtils.disappearTime, slot.EliminateDisappearUtils.disappreaDelayTime, 0.05, this.scatterDopGapTime, this.scatterDopWaitTime);
        // 初始化老虎机
        // X轴间距
        this.slotMachine.spaceX = 0;
        // Y轴间距
        this.slotMachine.spaceY = 0;
        // 格子宽
        this.slotMachine.gridWidth = 151;
        // 格子高
        this.slotMachine.gridHeight = 168;
        // 调整位置,或在ＵＩ工程中调整其父容器的位置
        // slotMachine.setXY(4, 5);
        // slotMachine.setScale(1, 1);
        this.slotMachine.showLineInterval = 2000;
        this.slotMachine.playRenderInterval = 60;

        this.slotMachine.afterRender(this, this._rederAfter);
        /**
         * 设置渲染子项时的回调
         */
        this.slotMachine.onItemRender(this, this._onSpinSlotRender);

        this.slotMachine.playRenderInterval = 60

        /*** 注册各种类型的中奖动画回调*/
        this._registerSlotMachineAnimation();

        // console.log("ywb", slot.SlotMachineView.instance.getPosByIndex(1))
        // this.slotMachine.node.addChild(this.slotMachine.node);
    }

    beforeScrollerStartRolling() {
    }

    private setRespData(event, data) {
        tool.respData = data
        console.log("ywb", data)
    }

    private addMarskTime = true
    private _rederAfter() {
        slot.SpinManager.instance.spinTouchEnable = true;
        let allRender = tool.getAllDataInRoller()
        for (let index = 0; index < allRender.length; index++) {
            const element = allRender[index];
            (element as SpinSlotViewExtend111006301)._showFrameAniView(slot.SlotMachineView.instance, index)//消除前中奖元素的动画
        }
        // this.slotMachine.scroller.adjustScrollerPostion(0, cc.v2(-5, 0));
        this.slotMachine.scroller.adjustScrollerPostion(1, cc.v2(2, 0));
        this.slotMachine.scroller.adjustScrollerPostion(2, cc.v2(2, 0));
        // this.slotMachine.scroller.adjustScrollerPostion(3, cc.v2(-5, 0));
        // this.slotMachine.scroller.adjustScrollerPostion(4, cc.v2(0, 100));
        this.initRenderState();

        if (tool.respData) {
            let coin = 0;
            if (tool.respData.state.normalData) {
                coin = tool.respData.state.normalData.spinInfo.spinResult.spinCoin;
                if (!tool.respData.state.freeData) {
                    let sumSpinCoin = tool.respData.state.normalData.sumSpinCoin
                    if (sumSpinCoin > 0) {
                        coin = sumSpinCoin;
                    }
                }
            }
            if (coin > 0) {
                game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_WIN_NUM_BEGIN, Number(coin), null, 1, 1);
            }
        }
    }

    private initRenderState() {
        // let len = slot.SlotMachineView._instance.scroller.renders.length;
        // let data = null
        // let gridChanged = tool.respData.state.normalData.spinInfo.spinResult.gridChanged
        // for (let index = 0; index < gridChanged.length; index++) {
        //     const element = gridChanged[index];
        //     if (element == 9) {
        //         data = { pos: index + 1, elem: 9 }
        //     }
        // }
        // for (var i = 0; i < len; i++) {
        //     let render = slot.SlotMachineView._instance.scroller.renders[i] as SpinSlotViewExtend111006301;
        //     let curId = render.data;
        //     if (curId == 8 || curId == 9) {
        //         render.setAnimation(slot.JTGLoaderAssetType.Skeleton, "idle");
        //     }
        // }
    }



    /**
     * 注册各种动画回调
     * 如果当前开发的项目不需要播放某些动画，请注释掉
     * @param slotMachine 老虎机实例
     */
    private _registerSlotMachineAnimation() {
        // 连续未中奖
        this.slotMachine.onContinuousNotWinAnimation(this, this._playContinuousNotWinAnimation);
        // 播放总奖励动画
        this.slotMachine.onNormalRewardsAnimation(this, this._playNormalRewardsAnimation);
        // 某条线全中
        this.slotMachine.onFullLineAnimation(this, this._playFullLineAnimation);
        // 大奖
        this.slotMachine.onGreatRewardsAnimation(this, this._playGreatRewardsAnimation);
        // 中等奖
        this.slotMachine.onMiddleRewardsAnimation(this, this._playMiddleRewardsAnimation);
        // 小奖
        this.slotMachine.onSmallRewardsAnimation(this, this._playSmallRewardsAnimation);

        // 滚轴开始滚动（单个)
        this.slotMachine.onSpinStart(this, this._onSpinStart);
        // 滚轴停止时的回调(单个)
        this.slotMachine.onSpinStop(this, this._onSpinStop);

        // 所有滚轴停止回调
        this.slotMachine.onSpinComplete(this, this._onSpinComplete);
        // 滚轴开始滚动（全部）
        this.slotMachine.onSpinBegin(this, this._onSpinBegin);
    }

    /**
     * 所有滚轴停止回调
     */
    private _onSpinComplete() {
        console.log("ywb所有滚轴停止回调")
        let resultMony = null
        let rate = null
        if (tool.respData?.spinResult) {
            resultMony = Number(tool.respData.spinResult.spinCoin)
        }
        if (tool.respData?.state == 2 && tool.respData?.updateList) {
            let updateList = tool.respData.updateList
            let ratio = null
            for (let index = 0; index < updateList.length; index++) {
                const element = updateList[index];
                if (element.type == 3) {
                    ratio = element.value.ratio
                }
            }
            rate = ratio
        } else {
            rate = 1
        }
        if (resultMony != 0 && resultMony != null) {
            if (tool.respData.state == 1) {
                let name = ""
                let random = slot.MathUtil.getRandomRange(0, 1, true)
                if (random == 0) {
                    name = "win"
                } else {
                    name = "win2"
                }
                this.resetEleAni();
                game.EventManager.getInstance().raiseEvent(mouseEvent.PLAY_ELEPHAN_ANI, name);
            } else if (tool.respData.state == 2) {
                let name = ["jindutiao-max", "win-niutou", "jindutiao-again", "bonus_win", "bonus_win2"]
                let random = slot.MathUtil.getRandomRange(0, 4, true)
                game.EventManager.getInstance().raiseEvent(mouseEvent.PLAY_ELEPHAN_ANI, name[random]);
            }
            game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_WIN_NUM_BEGIN, resultMony, null, rate, 1);
        }
    }


    /**
     * 停止滚，单个
     */
    private _onSpinStop(spinIndex: number, slotMachine?: slot.SlotMachineView, ifSameTime?: boolean) {
        this.scheduleOnce(() => {
            this.addSpecalData(spinIndex, false, false);
        })
        slot.SoundMger.instance.playEffect(SOUND_NAME.Reel_Stop, false);
    }

    private addSpecalData(rollIndex, bInit, bFreeStart) {
        let gird = slot.SpinManager.instance.rollingResult.spinResult.grid;
        for (let index = rollIndex * 3; index <= rollIndex * 3 + 2; index++) {
            const element = gird[index];
            if (element == 10 || element == 9) {
                let render = slot.SlotMachineView.instance.scroller.getRenderByIndex(index + 1);
                render && ((render as SpinSlotViewExtend111006301).addDataSpine(bInit, bFreeStart));
            }
        }
    }



    private _onRollingResp(msg, resp: protoSlot.spinResp) {
        let t = serializeWithLong(resp);
        console.log(t);
        tool.respData = resp
        console.log("ywb", resp)
        // tool.respDataHandle(resp)
    }

    /**
     * 滚轴停止时的环绕动画数组，当滚轴是同时停止时，使用此数组存放引用
     * 请将动画的类型设置为正确类型（由fairygui导出)
     */
    private _spinAniViews: any[] = [];//FUISpinReelAniView*-*-*

    /**
     * @param spinIndex 停止滚轴的索引
     */
    private _onSpinStart(spinIndex: number) {
        // 滚轴停止时，清理掉所有的滚轴动画
        // console.log("ywb滚轴开始")
        this.unschedule(this._clearSpinReelAni);
        this._clearSpinReelAni();
    }

    /**
     * 开始滚动回调（所有）
     */
    private _onSpinBegin() {
        let selfMony = null
        this.fiveStarNode.opacity = 0
        if (slot.GameControlBase.instance.fastBtnState != 1) {
            this.beforeScorllerStartRoller()
            this.scheduleOnce(function () {
                this.onScrollerStartComplete()
            }, 1.5)
        }
        tool.scatterNumber = 0
        tool.clearData = []
        this.rollLineTime = 0
        this.blueMarsk.active = false
        game.EventManager.getInstance().raiseEvent(mouseEvent.ROLL_PLAY);

        if (tool.respData) {
            if (tool.respData.userInfo) {
                selfMony = Number(tool.respData.userInfo.balance)
            } else {
                selfMony = Number(tool.respData.balance)
            }
            if (selfMony < slot.SpinManager.instance.betCost) {
                game.EventManager.getInstance().raiseEvent(mouseEvent.NOT_HAVE_MONY_OPEN_ROLL);
            }
        }

        game.EventManager.getInstance().raiseEvent(EventName.EVENT_STOP_WIN_NUM);
        if (this.m_isChufaFree) {
            game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_SCORE_ANI, slot.WinAniType.Small);
        } else {
            game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_SCORE_ANI, slot.WinAniType.Normal);
        }
        tool.respData = null;
    }

    private beforeScorllerStartRoller(): void {
        this.slotMachine.scroller.setOncePendingSchedule()
    }

    private onScrollerStartComplete(): void {
        this.slotMachine.scroller.continuePendingTask()
    }

    /**
     * 清理滚轴动画
     */
    private _clearSpinReelAni() {
    }

    /**
     * 当连续N（3）次未中奖时的动画回调
     * 根据模板自动生成，请根据需要自行修改
     * @param {Laya.Handler} completeHandler
     */
    private _playContinuousNotWinAnimation(winCoin: number, completeHandler: slot.Handler) {
        completeHandler.run();
    }

    /**
     * 普通中奖时的动画回调
     * @param {Laya.Handler} completeHandler
     */
    private _playNormalRewardsAnimation(winCoin: number, completeHandler: slot.Handler) {
        this.showWinAniView(slot.WinAniType.Normal, winCoin, completeHandler, slot.FreeGameManager.instance.isTreateFromFreeGame ? false : true);
        game.EventManager.getInstance().raiseEvent(EventName.EVENT_WIN_GAME, WinType.win);
    }

    /**
     * 五连
     * @param {Laya.Handler} completeHandler
     */
    private _playFullLineAnimation(winCoin: number, completeHandler: slot.Handler) {
        //this._showWinAniView(slot.WinType.FullLine, winCoin, completeHandler);
        game.EventManager.getInstance().raiseEvent(EventName.EVENT_WIN_GAME, WinType.fiveEven);
        completeHandler.run();
    }

    /**
     * 五星连珠
     * @param {Laya.Handler} completeHandler
     */
    private playFullLine(): void {
        this.fiveStarNode.opacity = 255
        slot.SoundMger.instance.playEffect(SOUND_NAME.Five_Prize, false);
        let starSpine = this.fiveStarNode.getChildByName("fiveStarSpine").getComponent(sp.Skeleton)
        let starSprit = this.fiveStarNode.getChildByName("fiveStarSprit")
        starSprit.opacity = 0
        starSprit.x = -20
        starSpine.setAnimation(0, "fx-5lian", false)
        let act1 = cc.moveBy(0.5, cc.v2(20, 0))
        let act2 = cc.fadeIn(0.5)
        let spawn = cc.spawn(act1, act2)
        starSprit.runAction(spawn)
        let delay = cc.delayTime(1.3)
        let fiveNodeAct = cc.fadeOut(0.5)
        let delay2 = cc.delayTime(1)
        this.fiveStarNode.runAction(cc.sequence(delay, fiveNodeAct, delay2))
    }


    /**
    * 大奖时的动画回调
    * 根据模板自动生成，请根据需要自行修改
    * @param {Handler} completeHandler
    */
    private _playGreatRewardsAnimation(winCoin: number, completeHandler: slot.Handler) {

        let handler = slot.Handler.create(this, () => {
            if (this.m_isChufaFree) game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_SCORE_ANI, slot.WinAniType.Great);
            completeHandler.run();
        })
        this.showWinAniView(slot.WinAniType.Great, winCoin, handler, slot.FreeGameManager.instance.isTreateFromFreeGame ? false : true);
    }

    /**
     * 中等奖时的动画回调
     * 根据模板自动生成，请根据需要自行修改
     * @param {Handler} completeHandler
     */
    private _playMiddleRewardsAnimation(winCoin: number, completeHandler: slot.Handler) {

        this.showWinAniView(slot.WinAniType.Middle, winCoin, completeHandler, slot.FreeGameManager.instance.isTreateFromFreeGame ? false : true);
    }

    /**
     * 小奖时的动画回调
     * 根据模板自动生成，请根据需要自行修改
     * @param {Handler} completeHandler
     */
    private _playSmallRewardsAnimation(winCoin: number, completeHandler: slot.Handler) {

        this.showWinAniView(slot.WinAniType.Small, winCoin, completeHandler, slot.FreeGameManager.instance.isTreateFromFreeGame ? false : true);
        if (this.m_isChufaFree) {
            game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_SCORE_ANI, slot.WinAniType.Middle);
        } else {
            game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_SCORE_ANI, slot.WinAniType.Small);
        }
    }



    /**
     * 当老虎机渲染各个格子时的回调，根据模板自动生成，请根据需要自行修改
     * @private
     * @method _onSpinSlotRender
     * @param {number} index 当前正在渲染的格子的索引
     * @param {Common.SpinSlotData} data 该格子携带的数据
     * @param {SpinSlotView} spinSlot 单元格视图
     */
    private _onSpinSlotRender(index: number, data: slot.SpinSlotData, spinSlot: slot.SpinSlotView) {
        //spinSlot.setData(data);
    }

    /**
     * 添加事件监听
     * 重写前请确保先行调用父类的接口
     */
    protected addEventListener() {
        super.addEventListener();
    }

    /**
     * 移除事件监听
     * 重写前请确保先行调用父类的接口
     */
    protected removeEventListener() {
        super.removeEventListener();
    }

    private isNeedToFreeGame = false
    private freeGameInfo = null
    //免费游戏进程动画
    addFreeSpinsAni(event: string, freeGameInfo: slot.FreeGameInfo = null, cb: slot.Handler): void {
        console.log("进入了免费游戏")
        this.isNeedToFreeGame = true
        this.freeGameInfo = freeGameInfo
        if (this.bigWinLayerIsThat) return
        this.isNeedToFreeGame = false
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Enter_Light, false);
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Trigger, false);
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Enter, false);

        game.EventManager.getInstance().raiseEvent(mouseEvent.INIT_TO_FREE_GAME);
        slot.SoundMger.instance.playMusic(SOUND_NAME.FreeGame_Back_Music);
        cb && cb.run();
    }

    //免费游戏改变背景图
    private isInFast = false
    private freeGameChangeBg(bool) {
        let freeBgAni = this.node.getChildByName("scrollerLayer").getChildByName("freeBgAni")
        let normalBg = this.node.getChildByName("scrollerLayer").getChildByName("normalBg")
        tool.gameState = bool
        if (bool) {
            if (slot.GameControlBase.instance.fastBtnState == 1) {
                this.isInFast = true
            } else {
                this.isInFast = false
            }
            slot.SpinManager.instance.isInTurbo = false;
            this.freeGameNode.opacity = 255
            this.ordinaryGameNode.opacity = 0
            freeBgAni.opacity = 255
            normalBg.opacity = 0
        } else {
            if (this.isInFast) {
                slot.SpinManager.instance.isInTurbo = true;
            }
            this.freeGameNode.opacity = 0
            this.ordinaryGameNode.opacity = 255
            freeBgAni.opacity = 0
            normalBg.opacity = 255
        }
    }


    //初次进房间，切换房间，重连 后回调
    refreshRoom(): void {
        //每次重连时把分散和百搭元素加上动画
        let state = tool.respData.state
        if (state.freeData) {
            this.scheduleOnce(() => {
                slot.SoundMger.instance.playMusic(SOUND_NAME.FreeGame_Back_Music);
            }, 1.8)
            let rate = state.freeData.ratio
            let low = Number(state.normalData.spinInfo.spinResult.spinCoin)
            let wildNum = state.freeData.wildNum
            let times = state.freeData.times
            let nodeOpenBtn = slot.MainView.instance.node.getChildByName("menu");
            nodeOpenBtn.opacity = 0;
            game.EventManager.getInstance().raiseEvent(mouseEvent.FREE_RECONNECTION_DATA, rate, wildNum);
            if (low != 0) {
                // game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_WIN_NUM_BEGIN, low, null, 1, 1);
            }
            this.scheduleOnce(() => {
                game.EventManager.getInstance().raiseEvent(EventName.EVENT_FREE_GAME_NUM, times);
            }, 0.2)
            this.freeGameChangeBg(true)
        } else if (state.normalData) {
            let low = Number(state.normalData.spinInfo.spinResult.spinCoin);
            if (Number(state.normalData.sumSpinCoin) != 0) {
                low = Number(state.normalData.sumSpinCoin)
                // game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_WIN_NUM_BEGIN, low, low, 1, 1);
            } else {
                if (low != 0) {
                    // game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_WIN_NUM_BEGIN, low, null, 1, 1);
                }
            }

        }
    }

    //================================================  免费游戏相关  =============================================
    //================================================  免费游戏相关===============================================
    //================================================  免费游戏相关  =============================================
    // 以下接口大部分既可用于免费游戏，也可用于重转，请自行判断属于哪种
    // 请自行根据freeGameInfo.type判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.type
    /*** 如果项目包含了免费游戏(包括重转)，请解开注释并正确重写本函数
     * 当本接口被回调时，意味着有上次的免费游戏（或重转）等待完成,请在此完成界面的相关显示初始化
     * 请自行根据freeGameInfo.type判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.type
     * @param freeGameInfo 免费游戏信息
     * @param completeHandler 处理完成后的回调接口
     */
    //免费游戏初始化
    protected onInitFreeGame(freeGameInfo: slot.FreeGameInfo, completeHandler: slot.Handler) {
        console.log("oniniffreegame", freeGameInfo);
        // // 请在此处进行免费游戏的初始化
        game.EventManager.getInstance().raiseEvent(EventName.FREE_GAME_START, freeGameInfo.sumTimes);

        completeHandler.runWith(true);
    }

    private _onBuyFreeRollingResp(eventName: string, resp: protoSlot.buyFreeImdResp) {
        if (resp) {
            tool.respData.updateList = null
            tool.respData.nextState! = resp.nextState;
        }
    }

    /**
     * 触发了免费游戏(包括重转)
     * 如果项目包含了免费游戏(包括重转)，请解开注释并正确重写本函数
     * 请自行根据freeGameInfo.type判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.id
     * @param freeGameInfo 
     * @param {Handler} completeHandler 处理完成后的回调(如，可能需要在触发小游戏后播放动画，此时则可以在播放完成后，调用此回调通知框架已经处理完成，继续下一步,如继续播放线动画)
     */
    protected onFreeGameTriggered(freeGameInfo: slot.FreeGameInfo, completeHandler: slot.Handler): void {
        console.log("onFreeGameTriggered", freeGameInfo);

        this.scheduleOnce(() => {
            let handler = slot.Handler.create(this, () => {
                game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_RESET_SCROLLER);
                this.scheduleOnce(() => {
                    for (let i = 0; i < 5; i++) {
                        this.addSpecalData(i, true, true);
                    }
                    game.EventManager.getInstance().raiseEvent(mouseEvent.ROLL_ANI_END);
                }, 0.1)
                let nodeOpenBtn = slot.MainView.instance.node.getChildByName("menu");
                nodeOpenBtn.opacity = 0;
                game.EventManager.getInstance().raiseEvent(EventName.FREE_GAME_START, freeGameInfo.sumTimes);
                this.freeGameChangeBg(true)
                this.m_isChufaFree = true;
                game.EventManager.getInstance().raiseEvent(mouseEvent.FREE_GAME_CLOSE, completeHandler);
            })
            this.showBounsGamePrefab(UIID.BONUS_GAME_POPUP, null, handler, (tool.eliminateTime + 1));
        }, 1.3)
    }

    /**
     * 免费游戏更新了(包括重转)
     * 如果项目包含了免费游戏(包括重转)，请解开注释并正确重写本函数
     * 请自行根据freeGameInfo.type判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.type
     * @param freeGameInfo 
     */
    protected onFreeGameInfoUpdated(freeGameInfo: slot.FreeGameInfo): void {
        console.log("onFreeGameInfoUpdated", freeGameInfo);

        switch (freeGameInfo.type) {
            case slot.OperationState.Free:
                // 请在此处进行免费游戏的数据更新
                break;
            case slot.OperationState.ReSpin:
                // 请在此处进行重转游戏的数据更新
                break;
            default:
                break;
        }
    }


    /**
     * 免费游戏结束了(包括重转)
     * 如果项目包含了免费游戏(包括重转)，请解开注释并正确重写本函数
     * 请自行根据freeGameInfo.type判断是免费游戏还是重转如:OperationType.Free === freeGameInfo.type
     * @param freeGameInfo 
     * @param completeHandler 
     */
    protected onFreeGameOver?(freeGameInfo: slot.FreeGameInfo, completeHandler: slot.Handler) {
        console.log("onFreeGameOver", freeGameInfo);
        this.isNeedToFreeGame = false
        let nodeOpenBtn = slot.MainView.instance.node.getChildByName("menu");
        nodeOpenBtn.opacity = 255;
        game.EventManager.getInstance().raiseEvent(EventName.FREE_GAME_OVER);
        this.freeGameChangeBg(false)
        this.m_isChufaFree = false;
        // 炮筒倍数还原
        completeHandler.runWith(true);
        let handler = slot.Handler.create(this, () => {

        })
        game.UIManager.getInstance().open(UIID.FREE_GAME_RESULT, [handler, freeGameInfo.sumSpinCoin, freeGameInfo.sumTimes]);
        game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_RESET_SCROLLER);
        this.scheduleOnce(() => {
            for (let i = 0; i < 5; i++) {
                this.addSpecalData(i, true, true);
            }
        }, 0.1)
    }

    /**
     * 免费中免费 当局的数据
     * @param freeGameInfo 
     * @param completeHandler 
     */
    protected onFreeGameTriggerAgain(freeGameInfo: slot.FreeGameInfo, completeHandler: slot.Handler): void {
        // freeGameInfo.times
        /**
         * 请在此做小游戏触发后需要做的逻辑，如播放动画等
         * 并请在处理完毕后调用 completeHandler,通知框架处理完毕
         */
        switch (freeGameInfo.type) {
            case slot.OperationState.Free:
                let handler = slot.Handler.create(this, () => {
                    completeHandler.run()
                })
                game.EventManager.getInstance().raiseEvent(EventName.EVENT_ADD_FREE_GAME_NUM, freeGameInfo.times, handler);

                break;
            case slot.OperationState.ReSpin:
                // 请在此处进行重转游戏的触发处理
                //this.openFreeGameView(freeGameInfo.commonSpinTotalCoin, freeGameInfo.sumCoin, FreeGameType.MoreFreeGame, true, completeHandler);
                break;
            default:
                break;
        }
        // completeHandler.run();
    }

    /**
     * 免费游戏次数更新了
     * 如果项目包含了免费游戏，请解开注释并正确重写本函数
     * @param {number} nowTimes 
     * @param {number = null} totalTimes 
     */
    protected onFreeGameTimesUpdated?(nowTimes: number, totalTimes?: number) {
        game.EventManager.getInstance().raiseEvent(EventName.EVENT_FREE_GAME_NUM, nowTimes);
    }

    /** 触发了小游戏 （免费游戏之前的选场次页面也算是小游戏）*/
    protected onBonusGameTriggered(bonusGameInfo: slot.BonusGameInfo, completeHandler?: slot.Handler) {
        let handler = slot.Handler.create(this, () => {

        })
        completeHandler.runWith(true);

        //可以用弹窗的方式
        // game.UIManager.getInstance().open(UIID.BONUS_GAME_POPUP, handler);

        //也可以用自己加载预制的方式
        // this.showBounsGamePrefab(UIID.BONUS_GAME_POPUP, handler);

    }

    /** 小游戏结束 */
    protected onBonusGameOver(bonusGameInfo: slot.BonusGameInfo, completeHandler?: slot.Handler) {
        completeHandler.runWith(true);
        this.hideBounsGamePrefab();
        // game.UIManager.getInstance().closeByUIID(UIID.BONUS_GAME_POPUP);
    }


    /**
     * 小游戏预制
     */
    @property({ type: cc.Prefab, tooltip: '小游戏过场动画' })
    bounsGamePrefab: cc.Prefab = null;

    private bounsGamePrefabNode: cc.Node = null;
    private showBounsGamePrefab(fromUI: number, handler, cb: slot.Handler, eliminateTime) {
        this.bounsGamePrefabNode = cc.instantiate(this.bounsGamePrefab);
        let canvas = cc.Canvas.instance.node;
        this.bounsGamePrefabNode.getComponent(cc.Widget).target = canvas;
        canvas.addChild(this.bounsGamePrefabNode, slot.LayerManage.effect);
        console.log("ywbbbbbbbbbbbb", fromUI, handler, cb)
        this.bounsGamePrefabNode.getComponent(BonusGame111006301).onOpen(fromUI, handler, cb);
        //  }

    }

    private hideBounsGamePrefab() {
        if (this.bounsGamePrefabNode) {
            this.bounsGamePrefabNode.active = false
            cc.Canvas.instance.node.removeChild(this.bounsGamePrefabNode);

            //  this.bounsGamePrefabNode = null;
        }
    }

    /**
    * 免费游戏结算预制
    */
    @property({ type: cc.Prefab, tooltip: '免费游戏结算预制' })
    freeGameResultPrefab: cc.Prefab = null;

    private freeGameResultNode: cc.Node = null;
    private showFreeGameResultPrefab(fromUI: number, handler, sumSpinCoin, sumTimes) {
        this.freeGameResultNode = cc.instantiate(this.freeGameResultPrefab);
        let canvas = cc.Canvas.instance.node;
        this.freeGameResultNode.getComponent(cc.Widget).target = canvas;
        canvas.addChild(this.freeGameResultNode, slot.LayerManage.effect);
        this.freeGameResultNode.getComponent(FreeGameResult).onOpen(fromUI, handler, sumSpinCoin, sumTimes);
        //  }

    }

    private hideFreeGameResultPrefab() {
        if (this.freeGameResultNode) {
            this.freeGameResultNode.active = false
            cc.Canvas.instance.node.removeChild(this.freeGameResultNode);

            //   this.freeGameResultNode = null;
        }
    }

}
