import { EventName, SOUND_NAME } from "../GameEventName111006301";
import CommonNumAtlas111006301 from "../main/CommonNumAtlas111006301";
import { UIID } from "../main/Main111006301";

/**
 * 免费游戏结算
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class FreeGameResult extends game.UIView {
    @property(cc.Node)
    bgNode: cc.Node = null;

    @property(cc.Node)
    private p_nodeSecond: cc.Node = null;

    @property(cc.Node)
    private p_nodeMoney: cc.Node = null;

    @property(cc.Button)
    private p_btnDraw: cc.Button = null;

    @property(cc.Node)
    private p_nodeNum: cc.Node = null;

    @property(cc.Node)
    private bl_button: cc.Node = null;

    @property(cc.Node)
    private spr_bg: cc.Node = null;

    /** 按钮特效node */
    @property(cc.Node)
    private effect: cc.Node = null;

    @property(sp.Skeleton)
    private shineEffect: sp.Skeleton = null;

    @property(cc.Node)
    private quick_button: cc.Node = null;

    private m_isUpdate: boolean = false;
    private callBack: slot.Handler = null;
    private m_sumSpinCoin: number = 0;
    private m_sumTimes: number = 0;

    onLoad() {
        super.onLoad && super.onLoad();
    }

    onOpen(fromUI: number, ...args: any[]): void {
        let arrArgs = args[0];
        this.callBack = arrArgs[0];
        this.m_sumSpinCoin = Number(arrArgs[1]);
        this.m_sumTimes = arrArgs[2];
        console.log("ywbm_sumSpinCoin", this.m_sumSpinCoin);

        this.init();
    }

    init(...args: any[]): void {
        slot.SoundMger.instance.playEffect(SOUND_NAME.Free_Game_Settlement, false);
        this.m_isUpdate = false;
        this.isTouch = false;
        this._setLabSecond(this.m_sumTimes);

        cc.Tween.stopAllByTarget(this.bgNode);
        cc.tween(this.bgNode)
            .set({ opacity: 0 })
            .delay(0.1)
            .to(0.55, { opacity: 255 })
            .start();

        this.setJinBiParticle(true);

        this.p_btnDraw.node.active = false;
        this.p_btnDraw.node.scale = 1;

        this.p_nodeNum.active = true;
        this.p_nodeNum.scale = 1;
        this.p_nodeNum.opacity = 255;
        this._setLabMoney(0);
        this.scheduleOnce(() => {
            this.quick_button.active = true;
            this._playLabMoney();
        }, 0.215)

        this.shineEffect.node.active = false;
    }

    setJinBiParticle(bActive) {
        let jinbilizi = this.node.getChildByName("jinbilizi").getComponent(cc.ParticleSystem);
        if (bActive) {
            jinbilizi.resetSystem();
        } else {
            jinbilizi.stopSystem();
        }
    }

    hideJinBiParticle() {
        let jinbilizi = this.node.getChildByName("jinbilizi").getComponent(cc.ParticleSystem);
        jinbilizi.resetSystem();
        jinbilizi.stopSystem();
    }

    onClose() {
        game.EventManager.getInstance().raiseEvent(EventName.EVENT_PLAY_WIN_NUM_BEGIN, 0, this.m_sumSpinCoin, 1, 1);
        slot.SpinManager.instance.totalWin = this.m_sumSpinCoin
        slot.SoundMger.instance.playMusic(slot.SOUND_NAME.Game_Back_Music);
    }

    isTouch = false
    onClickBtnDraw() {
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Start, false);
        this.scheduleOnce(() => {
            slot.SoundMger.instance.playEffect(SOUND_NAME.Free_Game_Settlement_End, false);
        }, 0.2)
        console.log("ywb点击了按钮")
        if (this.isTouch) return
        this.isTouch = true
        let effctSpine = this.effect.getComponent(sp.Skeleton)
        effctSpine.setAnimation(0, "btn_click_light", false)
        let delay = cc.delayTime(0.6)
        let call = cc.callFunc(function () {
            let btnSpine = this.p_btnDraw.getComponent(sp.Skeleton)
            btnSpine.setAnimation(0, "btn_click", false)
            btnSpine.setCompleteListener(() => {
                console.log("ywb按钮动画播放完成")
                this.p_btnDraw.opacity = 0
            })
        }.bind(this));

        this.scheduleOnce(() => {
            this.hidePage();
        }, 1.2)
        this.node.runAction(cc.sequence(delay, call));
    }

    hidePage() {
        cc.Tween.stopAllByTarget(this.p_nodeNum);
        cc.tween(this.p_nodeNum)
            .set({ scale: 1 })
            .to(0.5, { scale: 0 }, { easing: cc.easing.backInOut })
            .start();

        cc.tween(this.p_nodeNum)
            .set({ opacity: 1 })
            .to(0.2, { opacity: 200 })
            .start();

        cc.tween(this.bgNode)
            .set({ opacity: 255 })
            .to(1.1, { opacity: 0 }, { easing: cc.easing.backInOut })
            .call(() => {
                this.callBack && this.callBack.run();
                game.UIManager.getInstance().closeByUIID(UIID.FREE_GAME_RESULT);
            })
            .start();
    }

    notHaveTimeClick() {
        if (this.isTouch) return
        this.isTouch = true
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Start, false);

        let effctSpine = this.effect.getComponent(sp.Skeleton);
        effctSpine.setAnimation(0, "btn_click_light", false);

        this.scheduleOnce(() => {
            let btnSpine = this.bl_button.getComponent(sp.Skeleton);
            btnSpine.setAnimation(0, "btn_click", false);
            btnSpine.setCompleteListener(() => {
                btnSpine.setCompleteListener(null);
                this.bl_button.opacity = 0;
            })
        }, 0.6);

        this.scheduleOnce(() => {
            this.hidePage();
        }, 1.2)

        effctSpine.setCompleteListener(() => {
            effctSpine.setCompleteListener(null);
            this.effect.opacity = 0;
        })
    }

    // 播放获得总钱数
    private _playLabMoney() {
        this.m_isUpdate = true;
        this.m_money = 0;
        //2.5秒内播完
        this.m_speed = Math.ceil(this.m_sumSpinCoin / (this.totalTime * 1000));
    }

    // 设置免费次数显示
    private _setLabSecond(second: number) {
        this.p_nodeSecond.getComponent(CommonNumAtlas111006301).string = second.toString();
    }

    // 设置钱数显示
    private _setLabMoney(money: number) {
        this.p_nodeMoney.getComponent(CommonNumAtlas111006301).string = slot.SlotUtils.formatNumber(money, 2);
    }


    // 显示确定按钮
    private _playBtnDraw() {
        this.quick_button.active = false;
        this.shineEffect.node.active = true;
        this.shineEffect.setAnimation(0, 'shine', false);

        this.setJinBiParticle(false);

        slot.SoundMger.instance.stopEffect(SOUND_NAME.Free_Game_Settlement);
        slot.SoundMger.instance.playEffect(SOUND_NAME.Free_Game_Settlement_End);

        this.m_time = 0;

        let btnSpine = this.bl_button.getComponent(sp.Skeleton);
        this.scheduleOnce(() => {
            this.p_btnDraw.node.active = true;
            this.p_btnDraw.node.opacity = 255
            this.effect.opacity = 255
            this.bl_button.opacity = 255;
            this.effect.getComponent(sp.Skeleton).setAnimation(0, "btn_hover", false);
            btnSpine.setAnimation(0, "btn_fadein", false)
        }, 0.27);
    }
    onQuickOver() {
        if (this.m_money >= this.m_sumSpinCoin) {
            return;
        }
        this.m_isUpdate = false;
        this.m_money = this.m_sumSpinCoin;
        this._setLabMoney(this.m_sumSpinCoin);
        this._playBtnDraw();
    }
    private m_money: number = 1000;
    //每一毫秒增加的数值
    private m_speed: number = 3;
    private m_time: number = 0;
    private totalTime = 2.5
    update(dt) {
        if (this.m_isUpdate) {
            if (this.m_money < this.m_sumSpinCoin) {
                this.m_money += (this.m_speed * (dt * 1000));
            }

            if (this.m_money >= this.m_sumSpinCoin) {
                this.m_isUpdate = false;
                this.m_money = this.m_sumSpinCoin;
                this._playBtnDraw();
            }
            this._setLabMoney(this.m_money);
        }
        if (this.p_btnDraw.node.active == true) {
            this.m_time += dt;
            if (this.m_time >= this.totalTime) {
                this.notHaveTimeClick();
            }
        }
    }
}
