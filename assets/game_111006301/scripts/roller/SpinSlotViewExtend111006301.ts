import { EventName, mouseEvent, SOUND_NAME, WinType } from "../GameEventName111006301";
import tool from "../tool/Tool";
import Adaptive111006301 from "./Adaptive111006301";
import _slotFrameAniViewNodeCtrl from "./SlotFrameAniViewNodeCtrl";


/**
 * 老虎机的格子类
 * 本文件根据模板自动生成，请自行完善内容
 */
export default class SpinSlotViewExtend111006301 extends slot.SpinSlotView {
    constructor() {
        super();
        // 是否开启模糊效果（默认开启）
        this.isBlur = true;
        // 是否开启暗淡效果（默认开启）
        this.isFade = true;
        // 是否用遮罩模拟暗淡效果 (如果美术不提供暗淡图标资源 暗淡效果又开启了 这个选项必须为true);
        this.isFadeMask = false;
        this.skinLoader.skeletonNode.scale = this.skelentScale;
    }

    skelentScale = 0.93;


    /**
     * 当slot中奖状态时要播放动画时的回调
     * @param {RollingResult} [lineResult=null] 该中奖线的结果
     * @param {number} [indexInLine=null] 元素在线中的索引
     * @param {number} [indexInSlotMachine=null] 元素老虎机中的索引
     * @param {ISlotMachine} slotMachine 所在的老虎机
     */
    public onPlayAnimation(lineResult?: slot.RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: slot.SlotMachineView) {

        //this._showFrameAniView(slotMachine, indexInSlotMachine);

        let comp = this.getEffctParent().getChildByName("effectNode" + this.index)
        if (comp) {
            comp.getComponent(_slotFrameAniViewNodeCtrl).initNodeState(this.data)
            comp.getComponent(_slotFrameAniViewNodeCtrl).onPlayAnimation(this.data)
        }

        if (!this._slotFrameAniView) this._slotFrameAniView = this._getSlotFrameAniView();
        // 避免播放不同步的问题
        this._slotFrameAniView.setScale(1);
        this._slotFrameAniView.active = true;
        this.addEffectNode(this._slotFrameAniView, false)

        if (this.data >= 10) {
            this.setAnimation(slot.JTGLoaderAssetType.Skeleton, "spawn", false);
            let spine = this.skinLoader.skeletonNode.getComponent(sp.Skeleton)
            spine.setCompleteListener(() => {
                spine.setAnimation(0, "idle", false)
            })
            slot.SoundMger.instance.playEffect(SOUND_NAME.Free_Add_Sym, false);
        } else {
            this.playPlistSpine()
            this.setAnimation(slot.JTGLoaderAssetType.Skeleton, "win", false);
        }
        if (this.data <= 4) {
            this.dataAni()
        }
    }

    getEffctParent() {
        let comp = slot.SlotMachineView.instance.scroller.effectBelowContainer;
        return comp;
    }

    private dataAni() {
        let act1 = cc.scaleTo(0.2, 1.15)
        let act2 = cc.scaleTo(0.2, 0.95)
        let act3 = cc.scaleTo(0.2, 1)
        this.skinLoader.spriteNode.runAction(cc.sequence(act1, act2, act3))
    }

    private purpleBg: cc.Node = null
    onDataOrStageChange() {
        if (this.purpleBg) {
            this.purpleBg.opacity = 0
        }
        if (this.currentFrame == slot.JTItemRender.STATE_ROLLING && tool.respData?.state == 2) {
            if (this.data == 9) {
                if (this.purpleBg) {
                    this.purpleBg.opacity = 255
                } else {
                    game.ResLoader.getInstance().loadRes("prefabs/gameItem/purpleBg", (err, prefab: cc.Prefab) => {
                        if (!err) {
                            let gameNoe = cc.instantiate(prefab);
                            this.purpleBg = gameNoe
                            this.addEffectNode(gameNoe, false)
                            console.log(gameNoe)
                        } else {
                        }
                        // @ts-ignore
                    }, "game_" + core.Global.clientGameId, "configkey");
                }
            }
        }
    }

    /**
     * 停止动画播放（格子动画)时的回调
     */
    public onStopAnimation() {
        //this.gotoAndStop(0)
        this._recoverSlotFrameAniView();
    }

    private static _rewardsView: cc.Node = null;
    /**
     * 当slot中奖状态时要播放的中奖金额动画，如向上飘中奖金额等
     * @param {RollingResult} [lineResult=null] 该中奖线的结果
     * @param {number} [indexInLine=null] 元素在线中的索引
     * @param {number} [indexInSlotMachine=null] 元素老虎机中的索引
     * @param {Common.ISlotMachineView} slotMachine 所在的老虎机
     */
    protected onPlayRewardsAnimation?(lineResult?: slot.RollingResult, indexInLine?: number, indexInSlotMachine?: number, slotMachine?: slot.SlotMachineView) {
        // console.log("-----------", lineResult, "-----", indexInLine, "-----", indexInSlotMachine, "-----", slotMachine);
    }

    /**
     * 停止播放奖金动画时的回调
     */
    protected onStopRewardsAnimation() {
        if (SpinSlotViewExtend111006301._rewardsView) {
            SpinSlotViewExtend111006301._rewardsView.removeFromParent();
            // SpinSlotView2505._rewardsView = null;
        }

    }

    // 一些其它动画回调
    /**
     * 播放百搭动画的回调，如果游戏需要单独播放百搭动画，请在此进行播放
     * @param {RollingResult} [lineResult=null] 该中奖线的结果
     * @param {number} [indexInLine=null] 元素在线中的索引
     * @param {number} [indexInSlotMachine=null] 元素老虎机中的索引
     * @param {Common.ISlotMachineView} slotMachine 所在的老虎机
     */
    // protected onPlayWildAnimation?(lineResult?:slot.RollingResult, indexInLine?:number, indexInSlotMachine?:number, slotMachine?:slot.SlotMachineView):void
    // {

    // }

    /**
     * 停止播放百搭动画时的回调，如果游戏需要单独播放百搭动画，请在此进行播放
     */
    // protected onStopWildAnimation()
    // {

    // }


    /**
     * 播放分散动画的回调，如果游戏需要单独播放分散动画，请在此进行
     * @param {RollingResult} [lineResult=null] 该中奖线的结果
     * @param {number} [indexInLine=null] 元素在线中的索引
     * @param {number} [indexInSlotMachine=null] 元素老虎机中的索引
     * @param {Common.ISlotMachineView} slotMachine 所在的老虎机
     */
    // protected onPlayScatterAnimation(lineResult?:slot.RollingResult, indexInLine?:number, indexInSlotMachine?:number, slotMachine?:slot.SlotMachineView):void
    // {

    // }

    /**
     * 停止播放分散动画的回调，如果游戏需要单独播放分散动画，请在此进行
     */
    // protected onStopScatterAnimation()
    // {

    // }

    private _getRewardsAnimation(lineResult?: slot.RollingResult, indexInLine?: number) {

    }


    //每个元素的动画
    addEffectElement() {
        let act1 = cc.scaleTo(0.5, 0)
        let call = cc.callFunc(function () {
            this.skinLoader.spriteNode.opacity = 0
            this.skinLoader.spriteNode.scale = 1
            this.playBombAni()
        }.bind(this))
        this.skinLoader.spriteNode.runAction(cc.sequence(act1, call))
        // this.setAnimation(slot.JTGLoaderAssetType.Skeleton, "win");
    }

    addDataSpine(bInit, bFreeStart = false) {
        let comp = this.getEffctParent().getChildByName("effectNode" + this.index);
        if (comp)
            comp.getComponent(_slotFrameAniViewNodeCtrl).changeSpine(this.data, bInit, bFreeStart);
    }

    playPlistSpine() {
        let comp = this.getEffctParent().getChildByName("effectNode" + this.index)
        if (comp)
            comp.getComponent(_slotFrameAniViewNodeCtrl).playPlistAni();
    }

    playWildAni() {
        let comp = this.getEffctParent().getChildByName("effectNode" + this.index);
        if (comp)
            comp.getComponent(_slotFrameAniViewNodeCtrl).playWildRideAni()
    }

    // -----------------------------------------------------------------------------------------
    /**
     * 本格子持有的边框动画的引用(可以将类型改为自己的类型,由fairygui导出)
     */
    private _slotFrameAniView: cc.Node = null;
    // /**
    //  * 显示格子的边框动画
    //  * 如果边框动画是GLoader,为了避免播放不同步的问题，建议在fairyGUI编辑器中，不要勾选"播放"选项
    //  * 而是在代码中设置播放
    //  * @param slotMachine 老虎机 
    //  * @param indexInSlotMachine 该格子在老虎机上的索引位置 
    //  */
    public _showFrameAniView(slotMachine?: slot.SlotMachineView, indexInSlotMachine?: number, callBack = null, endCallBack = null) {
        game.ResLoader.getInstance().loadRes("prefabs/gameItem/_slotFrameAniViewNode", (err, prefab: cc.Prefab) => {
            if (!err) {
                let gameNoe = cc.instantiate(prefab);
                gameNoe.scale = this.skelentScale;
                this.getEffctParent().addChild(gameNoe, indexInSlotMachine + 2, "effectNode" + indexInSlotMachine)
                gameNoe.getComponent(_slotFrameAniViewNodeCtrl).init(indexInSlotMachine)
                let point: cc.Vec2 = slotMachine.getPosByIndex(indexInSlotMachine);
                gameNoe.y = point.y;
                gameNoe.x = point.x;
                if (this.data == 10 || this.data == 9) {
                    this.addDataSpine(true);
                }
            } else {
            }
        }, "game_" + core.Global.clientGameId, "configkey");
    }


    // 格子的边框动画回收标记
    private _slotFrameAniViewSign: string = "___SLOT_FRAME_ANI_VIEW_SIGN";
    /**
     * 获取一个格子的边框动画
     */
    private _getSlotFrameAniView(): cc.Node {
        if (this._slotFrameAniView) return this._slotFrameAniView;
        this._slotFrameAniView = new cc.Node();
        let comp = this._slotFrameAniView.addComponent(slot.AnimationExtend);
        let aniParm = new slot.AniParam(slot.ANIMATION_TYPE.SKELETON, "skeleton/slotMachine/infoBarGrow/zhongjiang", slot.GData.bundleName, "fx-fazhenloop");
        comp.init(aniParm);
        this._slotFrameAniView.opacity = 0
        this._slotFrameAniView.scale = 0
        let act1 = cc.scaleTo(0.2, this.skelentScale)
        let act2 = cc.fadeIn(0.2)
        let spawn = cc.spawn(act1, act2)
        this._slotFrameAniView.runAction(spawn)
        let complete = slot.Handler.create(this, () => {
            this._recoverSlotFrameAniView();
        });
        comp.play("fazhenloop", false, complete);
        return this._slotFrameAniView;
    }

    //元素对应的ID
    public ID = null
    //播放帧动画
    public playAnimaiton(ID) {

    }

    //播放消除后的骨骼动画
    private animationSpineNodeCtrl(animationName) {
    }

    //中奖元素前添加特效
    public addAnimationBeforeWin() {


    }

    //播放消除前的骨骼动画
    private beforeWinSpineNodeCtrl(animationName) {
    }

    private lightFrame: cc.Node = null
    //消除背景添加高亮
    addLightBg() {
        // let bool = true
        // if (this.lightFrame) {
        //     bool = false
        // }
        // if (bool) {
        //     game.ResLoader.getInstance().loadRes("prefabs/gameItem/lightFrame", (err, prefab: cc.Prefab) => {
        //         if (!err) {
        //             let gameNoe = cc.instantiate(prefab);
        //             this.lightFrame = gameNoe
        //             this.addEffectNode(gameNoe, false)
        //         } else {
        //         }
        //         // @ts-ignore
        //     }, "game_" + core.Global.clientGameId, "configkey");
        // } else {
        //     this.setLightBgOpacity(255)
        // }
    }

    //设置背景高亮透明度
    private setLightBgOpacity(number) {
        if (this.lightFrame) {
            this.lightFrame.opacity = number
        }
    }


    //改变他的data
    changeData(data, node) {
        this.data = data
    }

    /**
         * 回收格子的边框动画
         */
    private _recoverSlotFrameAniView() {
        if (!this._slotFrameAniView) return;
        this._slotFrameAniView.removeFromParent();
        // 避免播放不同步的问题
        this._slotFrameAniView.active = false;
        this._slotFrameAniView = null;
    }
    // -----------------------------------------------------------------------------------------
}