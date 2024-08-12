import { EventName, mouseEvent, RoleAniType, SOUND_NAME } from "../GameEventName111006301";
import CommonNumAtlas111006301 from "../main/CommonNumAtlas111006301";
import tool from "../tool/Tool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameRoller111006301 extends slot.BaseView {



    /**
     * layout分数节点
     */
    @property(cc.Node)
    private p_nodeLayoutWin: cc.Node = null;

    /**
     * 当前赢分node
     */
    @property(cc.Node)
    private p_nodeOwrWin: cc.Node = null;

    /**
     * 当前总赢分node
     */
    @property(cc.Node)
    private p_nodeCountWin: cc.Node = null;

    /**
     * 赢分数node
     */
    @property(cc.Node)
    private p_nodeWinNum: cc.Node = null;

    @property(cc.Node)
    private horseBoard: cc.Node = null;

    @property(cc.Node)
    private rideNode: cc.Node = null;

    @property(cc.Node)
    private coteNode: cc.Node = null;


    /**
     * 当前分数板的等级
     */
    private m_scoreLevel: number = 0;

    private m_arrMultiple = [];

    private m_isChufaFree: boolean = false;

    /**
     * 人物播放动画状态 0-待机 1-随机播放 2-倍数改变时 3-中奖 4-总结算
     */
    private m_roleAniState: number = 0;
    /**
     * 如果当前炮筒只亮一个，记录亮的最后一个下标
     */
    private m_cannonIndex: number = 0;

    //当前赢分
    private owrNumber = 0

    onLoad() {
        game.EventManager.getInstance().addEventListener(EventName.FREE_GAME_START, this._onFreeGameStart, this);
        game.EventManager.getInstance().addEventListener(EventName.FREE_GAME_OVER, this._onFreeGameOver, this);
        // game.EventManager.getInstance().addEventListener(EventName.EVENT_PLAY_ROLE_ANI, this._eventPlayRoleAni, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_UPDATE_WIN_ANI_END, this.winAniEnd, this);
        game.EventManager.getInstance().addEventListener(EventName.EVENT_PLAY_WIN_NUM_BEGIN, this._updateWinNum, this);
        game.EventManager.getInstance().addEventListener(EventName.EVENT_PLAY_SCORE_ANI, this._playRewardAni, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.NORMAL_RECONNECTION_DATA, this.reconnetion, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.FREE_RECONNECTION_DATA, this.freeReconnetion, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.RIDE_NUMEBER_GEGAN_FADOUT, this.rideNodeAddAni, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_PLAY, this.rollPlay, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.BEGAIN_RIDE_ANI, this.rideNodeMoveAni, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.BIG_WIN_ANI_END_CALL_BACK, this.coteBoardCtrl, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_STOP_SLOT_MACHINE_IMMEDIATELY, this.event_stop_slot_machine_immediately, this);

        // this.schedule(this._roleAniRound, 12);
    }

    //免费游戏断线重连
    private freeReconnetion(event, respData) {
        this.rideNodeAddAni()
    }

    private reconnetion(event, respData) {
    }

    private winAniEnd() {
        // this.getRewardDouble("", true)
    }

    private rollPlay() {
        this.bannerAndCoteCtrl(true)
    }

    private coteBoardCtrl(event, magnification, state = null) {

        if (tool.respData.state == 2) {
            if (state == 0) {
                this.coteBoardAniCtrl("a_fadein", false, () => {
                    this.coteBoardAniCtrl("a_loop", true)
                })
            } else {
                if (magnification < 5 && magnification >= 2.5) {
                    this.coteBoardAniCtrl("b_fadein", false, () => {
                        this.coteBoardAniCtrl("b_loop", true)
                    })
                }
            }
        } else {
            if (magnification >= 2.5) {
                this.coteBoardAniCtrl("b_fadein", false, () => {
                    this.coteBoardAniCtrl("b_loop", true)
                })
            } else {
                // slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_01, false);
                this.coteBoardAniCtrl("a_fadein", false, () => {
                    this.coteBoardAniCtrl("a_loop", true)
                })
            }
        }
        this.shineAniCtrl()
    }

    private coteBoardAniCtrl(name, isLoop, callBack = null) {
        let spine = this.coteNode.getComponent(sp.Skeleton)

        spine.setAnimation(0, name, isLoop)
        spine.setCompleteListener(() => {
            typeof callBack === 'function' && callBack();
        })
    }

    private shineAniCtrl() {
        let shineSpine = this.coteNode.getChildByName("shine").getComponent(sp.Skeleton)
        shineSpine.node.opacity = 255
        shineSpine.setAnimation(0, "shine", false)
        shineSpine.setCompleteListener(() => {
            shineSpine.node.opacity = 0
        })
    }



    private rideNodeAddAni() {
        let updateList = null
        let bgAni = this.rideNode.getChildByName("bgAni")
        let ratio = null
        if (tool.respData.updateList) {
            updateList = tool.respData.updateList
            for (let index = 0; index < updateList.length; index++) {
                const element = updateList[index];
                if (element.type == 3) {
                    ratio = element.value.ratio
                }
            }
        } else {
            if (tool.respData.state.freeData) {
                ratio = tool.respData.state.freeData.ratio
            }
        }

        if (ratio == null) {
            ratio = 2
        }
        this.rideNode.scale = 0
        this.rideNode.opacity = 0
        console.log("ywbaaaaaaaaaaaaaaaaaa", bgAni, this.rideNode)
        bgAni.opacity = 255
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Multi_Change_Central, false);
        this.rideNode.getChildByName("lightNumber").getComponent(CommonNumAtlas111006301).string = "*" + ratio
        let act1 = cc.fadeIn(0.5)
        let act2 = cc.scaleTo(0.5, 1)
        let spawn = cc.spawn(act1, act2)
        let call = cc.callFunc(function () {
            let act3 = cc.fadeOut(0.5)
            bgAni.runAction(act3)
        }.bind(this))
        this.rideNode.runAction(cc.sequence(spawn, call))
    }

    private rideNodeMoveAni() {
        let rideNodeClone = cc.instantiate(this.rideNode)
        this.rideNode.addChild(rideNodeClone)
        rideNodeClone.x = 0
        rideNodeClone.y = 0
        let pos = tool.getPosByOtherNode(this.coteNode, rideNodeClone)
        tool.bezierAct(rideNodeClone, pos, 0.5, 20, -210, () => {
            slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Multi_Num_To_Infoboard, false);
            this.getRewardDouble(null, true);
            rideNodeClone.destroy()
        })

    }

    /**
     * 人物播放动画
     * @owrAniName 当前播放动画名称
     * @owrIsLoop 当前动画是否继续播放
     * @callback 播放回调
     * @lastAniName 回调后播放动画名称 
     * @lastIsLoop 回调动画是否继续播放
     */
    private _playRoleAni(owrAniName: string, owrIsLoop: boolean, callBack?, lastAniName?, lastIsLoop?) {
    }

    /**
     * 滚轴急停的监听
     */
    private event_stop_slot_machine_immediately() {
        // console.log("slot.SpinManager.instance.customUpdateData.game_10017.data = ==== ", );
        let spinCoin = Number(slot.SpinManager.instance.rollingResult.spinResult.spinCoin);
        if (spinCoin > 0) {
            // 显示节点
            // this.p_nodeWin.active = true;
            // 关闭跑马灯
            // game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_WIN_NUM_BEGIN);
            // this._playCountWinNum(spinCoin);
        }
    }

    /** 
     * 刷新中奖动画、分数版等级
     * @level
     */
    private _playRewardAni(event: string, level: number) {
    }


    /**
     * 播放赢分
     * @owrNum 当前赢多少分
     * @countNum 总赢家值
     * @rate 倍率
     * @state 状态0是普通状态，1是大奖或免费状态
     */
    private _updateWinNum(event: string, owrNum: number, countNum = null, rate = null, state = null) {
        // 关闭跑马灯，跑马灯自动监听开关
        if (owrNum == undefined) return;
        rate = (rate > 1 ? rate : 1)
        this.owrNumber = owrNum;
        this.bannerAndCoteCtrl(false)
        // 显示节点
        // 播放动画，当前只需要显示 赢得+分数
        this.p_nodeOwrWin.active = true;
        this.p_nodeWinNum.active = true;
        this.p_nodeCountWin.active = false;
        let magnification = null
        this.p_nodeWinNum.getComponent(CommonNumAtlas111006301).string = slot.SlotUtils.formatNumber(Math.floor(owrNum / rate));
        let bet = Number(slot.SlotUtils.formatNumber(slot.SpinManager.instance.betCost))
        if (countNum != null) {
            this.p_nodeWinNum.getComponent(CommonNumAtlas111006301).string = slot.SlotUtils.formatNumber(countNum)
            magnification = (countNum / 100) / bet
            this.p_nodeOwrWin.active = false;
            this.p_nodeWinNum.active = true;
            this.p_nodeCountWin.active = true;
            // this._playCountWinNum(this.totalCoin);
            if (magnification >= 5 && state == 0) {
                slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_Coin, false);
            }
            if (state != 0) {
                slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_Total, false);
            }
        } else {
            magnification = (owrNum / 100) / bet
            if (magnification >= 2.5 && rate == 1 && magnification < 5) {
                this.winMoney = 0;
                let owrMonny = owrNum
                slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_Coin);
                // @ts-ignore
                cc.tween(this).to(0.7, { winMoney: owrMonny }).call(() => {
                    slot.SoundMger.instance.stopEffect(SOUND_NAME.Textbox_Coin);
                    slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_02, false);
                }).start();
            }
            this.coteBoardCtrl("", magnification, 0)
        }

        if (magnification / rate >= 3) {
            this.p_nodeOwrWin.active = false;
        }

        if (slot.SpinManager.instance.rollingResult.state == 1 && magnification < 5) {
            this.updataWinScroe(owrNum)
        }
        if (rate < 2) {
            if (magnification < 5) {
                slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_01);
            }
        } else {
            slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_01);
        }

    }

    private updataWinScroe(resultMony) {
        if (slot.FreeGameManager.instance.isTreateFromFreeGame) {
            if (slot.FreeGameManager.instance.isTreateFreeOver) {
                game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_UPDATE_WINSCORE, resultMony, true, true, false);
            } else {
                game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_UPDATE_WINSCORE, resultMony, true, true, false);
            }
        } else {
            game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_UPDATE_WINSCORE, resultMony, false, true);
        }
    }


    private _winMoney = 0;
    set winMoney(value: number) {
        this._winMoney = Number(value);
        this.p_nodeWinNum.getComponent(CommonNumAtlas111006301).string = slot.SlotUtils.formatNumber(value)
    }

    get winMoney(): number {
        return this._winMoney;
    }

    //获得奖励翻倍
    private getRewardDouble(event, isBigWinEnd = null) {
        // slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Multi_Infoboard_Bounce, false);
        let betCost = slot.SpinManager.instance.betCost;
        let bet = Number(slot.SlotUtils.formatNumber(slot.SpinManager.instance.betCost))
        let magnification = (this.owrNumber / 100) / bet;
        if (magnification >= 3) {
            this.p_nodeOwrWin.active = false;
        }

        if (magnification < 5) {
            this.coteBoardCtrl("", magnification, 1)
            this.updataWinScroe(this.owrNumber)
            if (magnification >= 2.5) {
                this.winMoney = 0;
                let owrMonny = this.owrNumber
                slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_Coin);
                // @ts-ignore
                cc.tween(this).to(1.8, { winMoney: owrMonny }).call(() => {
                    slot.SoundMger.instance.stopEffect(SOUND_NAME.Textbox_Coin);
                    slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_02, false);
                }).start();
            } else {
                this.p_nodeWinNum.getComponent(CommonNumAtlas111006301).string = slot.SlotUtils.formatNumber(this.owrNumber);
            }
        } else {
            if (isBigWinEnd) {
                this.p_nodeWinNum.getComponent(CommonNumAtlas111006301).string = slot.SlotUtils.formatNumber(this.owrNumber);
                this.updataWinScroe(this.owrNumber)
            }
        }

    }

    private bannerAndCoteCtrl(bool) {
        this.horseBoard.active = bool
        this.coteNode.active = !bool
    }


    /**
     * 播放总共赢得多少分
     */
    private _playCountWinNum(countNum: number, callBack?) {
        // slot.SoundMger.instance.playEffect(SOUND_NAME.Textbox_02);
        // 播放动画，当前只需要显示 共赢得+分数
        this.p_nodeOwrWin.active = false;
        this.p_nodeWinNum.active = true;
        this.p_nodeCountWin.active = true;
        // this._playWinSocre();
        this.p_nodeWinNum.getComponent(CommonNumAtlas111006301).string = slot.SlotUtils.formatNumber(countNum);

        cc.tween(this.p_nodeWinNum).delay(1).call(() => {
            // 播放完成
            callBack && callBack();
        }).start();
    }

    /**
     * 开始免费游戏
     */
    private _onFreeGameStart() {
        this.m_isChufaFree = true;
        this.rideNode.opacity = 0
        this.rideNode.scale = 0
    }

    /**
     * 关闭免费游戏
     */
    private _onFreeGameOver() {
        this.m_isChufaFree = false;
    }

    start() {
        this.p_nodeWinNum.getComponent(CommonNumAtlas111006301).anchorY = 1.8
    }

    onDestroy() {
        game.EventManager.getInstance().removeEventListener(EventName.FREE_GAME_START, this._onFreeGameStart, this);
        game.EventManager.getInstance().removeEventListener(EventName.FREE_GAME_OVER, this._onFreeGameOver, this);
        // game.EventManager.getInstance().removeEventListener(EventName.EVENT_PLAY_ROLE_ANI, this._eventPlayRoleAni, this);
        game.EventManager.getInstance().removeEventListener(EventName.EVENT_PLAY_WIN_NUM_BEGIN, this._updateWinNum, this);
        game.EventManager.getInstance().removeEventListener(EventName.EVENT_PLAY_SCORE_ANI, this._playRewardAni, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.FREE_RECONNECTION_DATA, this.freeReconnetion, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.ROLL_PLAY, this.rollPlay, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.RIDE_NUMEBER_GEGAN_FADOUT, this.rideNodeAddAni, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.BEGAIN_RIDE_ANI, this.rideNodeMoveAni, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.BIG_WIN_ANI_END_CALL_BACK, this.coteBoardCtrl, this);
        game.EventManager.getInstance().removeEventListener(slot.GameEventNames.EVENT_STOP_SLOT_MACHINE_IMMEDIATELY, this.event_stop_slot_machine_immediately, this);
    }
}
