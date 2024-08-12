import { mouseEvent, SOUND_NAME } from "../GameEventName111006301";
import CommonNumAtlas111006301 from "../main/CommonNumAtlas111006301";
import { UIID } from "../main/Main111006301";
import tool from "../tool/Tool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BonusGame111006301 extends slot.AbstractBonusGameView {
    //赏金
    @property(cc.Node)
    private p_nodeTime: cc.Node = null;

    @property(cc.Node)
    private p_nodePb: cc.Node = null;

    @property(cc.Node)
    private progress: cc.Node = null;

    private callBack: slot.Handler = null;
    /**
     * 倒计时间
     */
    private m_time: number = 0;
    /**
     * 是否轮播
     */
    private m_isPlay: boolean = true;


    private m_isClose: boolean = false;


    @property(cc.Node)
    private bl_button: cc.Node = null;

    @property(cc.Node)
    private effct: cc.Node = null;

    @property(CommonNumAtlas111006301)
    private freeLabel: CommonNumAtlas111006301 = null;

    private cb = null
    private time = 0

    private score: cc.Node = null

    private bonusGameBg: cc.Node = null

    private isCanTouch = true



    onLoad() {
        game.EventManager.getInstance().addEventListener(slot.NetSlotConst.LGACTIONRESP, this.LGACTIONRESP, this);
        let score = slot.MainView.instance.node.getChildByName("scorePrefab")
        this.bonusGameBg = this.node.getChildByName("bonusGameBg")
        this.score = cc.instantiate(score)
        this.node.addChild(this.score, 99)
        this.score.opacity = 255
        this.score.active = true
        this.bl_button.opacity = 0
        this.score.setPosition(cc.v2(0, -650))
    }

    start() {
        // let delay = cc.delayTime(5)
        // let call = cc.callFunc(function () {
        this.brandAnimation()
        this.loadLableAni()
        slot.SoundMger.instance.playEffect(SOUND_NAME.Free_Start_Appear, false);
        // }.bind(this))
        // this.node.runAction(cc.sequence(delay, call))

    }

    buttonAnimation() {
        this.bl_button.opacity = 255
        this.effct.opacity = 255;
        let btnSpine = this.bl_button.getComponent(sp.Skeleton);
        btnSpine.setCompleteListener(null)
        btnSpine.setAnimation(0, "btn_fadein", false);
        this.isCanTouch = false;
        cc.tween(this.effct)
            .delay(0.3)
            .call(() => {
                btnSpine.setAnimation(0, "btn_loop", true);
                this.effct.opacity = 255;
                this.effct.getComponent(sp.Skeleton).setAnimation(0, "btn_hover", true);
            })
            .start();
        //按钮动画播放完成回调
        let index = 1;
        if (this.bl_button) {
            // 鼠标移动到目标节点区域，不论是否按下
            this.bl_button.on(cc.Node.EventType.MOUSE_ENTER, () => {
                this._onMouseEnterBrideNode();
            }, this);
            // 当鼠标移出目标节点区域时，不论是否按下
            this.bl_button.on(cc.Node.EventType.MOUSE_LEAVE, () => {
                this._onMouseLeaveBrideNode();
            }, this);
            //绑定编号（1-3）方便重连后恢复显示状态
            this.bl_button.attr({ chooseId: index });
            // this.carArr.push(this.bl_button.node);
            index++;
        }
    }

    brandAnimation() {
        let act1 = cc.fadeIn(1)
        this.bonusGameBg.runAction(act1)
    }

    loadLableAni() {
        let num = 0;
        let bEnd = false;
        this.schedule(() => {
            if (bEnd) return;
            this.p_nodeTime.getComponent(CommonNumAtlas111006301).string = num++ + '';
            if (num > 100) {
                bEnd = true;
                this.p_nodeTime.opacity = 0;
                this.progress.opacity = 0;
                this.buttonAnimation();
            }
        }, 0.02, 100);
    }

    LGACTIONRESP() {
        // this.onClose();
        cc.tween(this).delay(0.5).call(() => {
            this.next();
        }).start();
    }

    init() {
        this.m_time = 7;
        this.isTouch = false
        this.isCanTouch = true;
        this.p_nodePb.active = false;
        this.node.opacity = 255;
        this.p_nodeTime.opacity = 255
        this.bonusGameBg.opacity = 0
        this._updateTime(this.m_time);
        this.m_isPlay = true;
        this._playLoopLight();
        this._playBonusSelection();
        this.m_isClose = false;
        if (tool.respData.nextState) {
            this.freeLabel.string = tool.respData.nextState.freeData.times + ''
        } else {
            console.warn("ywb", tool.respData)
        }
    }

    onOpen(fromUI: number, ...args: any[]): void {
        this.callBack = args[0];
        this.cb = args[1]
        console.log("ywb", this.callBack, this.cb)
        // this.p_nodeWin.string = String(args[2])

        cc.Tween.stopAllByTarget(this.node);
        cc.tween(this.node)
            .set({ opacity: 0 })
            .to(0.4, { opacity: 255 })
            .call(() => {
                this.init();
            })
            .start();
        // this.onClose();
    }

    /**
     * 鼠标移动到目标节点区域，不论是否按下
     * @param index 
     */
    private _onMouseEnterBrideNode() {

    }

    /**
     * 当鼠标移出目标节点区域时，不论是否按下
     * @param index 
     */
    private _onMouseLeaveBrideNode() {

        // slot.SoundMger.instance.stopEffect(SOUND_NAME.Chosen_Stay);
    }

    /**
     *  循环轮播光标
     */
    private _playLoopLight() {
        // 从0开播
        this.playLight(0);
    }

    private playLight(index) {
    }

    /**
     * 播放免费游戏选择次数的提示
     */
    private _playBonusSelection() {
    }

    private nodeid = 0;
    private isTouch = false
    onClickBrideNode() {
        console.log("ywb点击了按钮", this.isTouch, this.isCanTouch)
        if (this.isTouch) return
        if (this.isCanTouch) return
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Start, false);
        this.onClickEff();
    }

    notHaveTimeClick() {
        if (this.isTouch) return
        if (this.isCanTouch) return
        this.onClickEff();
    }

    onClickEff() {
        this.isTouch = true;
        cc.Tween.stopAllByTarget(this.effct);
        let effctSpine = this.effct.getComponent(sp.Skeleton);
        effctSpine.setAnimation(0, "btn_click_light", false);

        this.scheduleOnce(() => {
            let btnSpine = this.bl_button.getComponent(sp.Skeleton);
            btnSpine.setAnimation(0, "btn_click", false);
            this.scheduleOnce(() => {
                this.bl_button.opacity = 0;
            }, 0.3)
        }, 0.6)

        cc.tween(this.node)
            .delay(0.9)
            .to(0.4, { opacity: 0 })
            .call(() => {
                this.cb.run();
                this.node.destroy();
            })
            .start();
    }


    protected onActionResult(): void {
        console.log("返回 ------------------- ");
        // this.onClose();
    }


    onDestroy(): void {
        super.onDestroy();
        game.EventManager.getInstance().removeEventListener(slot.NetSlotConst.LGACTIONRESP, this.LGACTIONRESP, this);
    }

    getLastActionResult(): protoSlot.lgResultType {
        this.onActionResult();
        return null;
    }

    onClose() {
        // super.onClose();
        // if (this.m_isClose == false){
        //     this.m_isClose = true;
        //     cc.tween(this.node).to(0.5, { opacity: 0 }).call(()=>{
        //         this.node.opacity = 255;
        //         this.callBack && this.callBack.run();
        //         this.next();
        //     }).start();
        // }
    }

    private numTime = 0;
    protected update(dt: number): void {
        if (this.m_isClose == false) {
            if (this.numTime <= 1) this.numTime += dt;
            if (this.numTime >= 1 && this.m_time >= 0) {
                this.numTime = 0;
                if (this.m_time >= 0) {
                    // slot.SoundMger.instance.playEffect(SOUND_NAME.Count_Down);
                    this._updateTime(this.m_time);
                    // 倒计时到，随机旋转一个免费游戏开始
                    if (this.m_time == 0) {
                        this.randSetGame();
                    }
                }
                this.m_time -= 1;
            }
        }
    }

    /**
     * 随机选择一个节点开始免费游戏
     */
    private randSetGame() {
        let rand = Math.ceil(Math.random() * 3) - 1;
        // let nodeComp = this.clickNode.children[rand];
        // 播放免费节点粒子特效   暂无

        // 模拟触摸免费游戏节点
        this._onMouseEnterBrideNode();
        // 打开不可点击触摸节点
        this.p_nodePb.active = true;
        // 模拟点击进入免费游戏
        this.notHaveTimeClick();

        // 模拟关闭
    }

    /**
     * 刷新倒计时
     * @param time 
     */
    private _updateTime(time: number) {
        // if (this.m_isClose == false) {
        //     let numAtlas = this.p_nodeTime.getComponent(CommonNumAtlas111006301);
        //     numAtlas.string = time.toString();
        // }
    }
}
