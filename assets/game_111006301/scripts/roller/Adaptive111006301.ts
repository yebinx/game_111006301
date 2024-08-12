import { EventName, WinType } from "../GameEventName111006301";

const { ccclass, property } = cc._decorator;

/**
 * 滚轴适配
 */
@ccclass
export default class Adaptive111006301 extends slot.BaseView {

    @property(cc.Node)
    sc1: cc.Node = null;
    @property(cc.Node)
    cs2: cc.Node = null;
    @property(cc.Node)
    cz: cc.Node = null;
    @property(cc.Node)
    logo: cc.Node = null;
    @property(cc.Node)
    bg_di: cc.Node = null;

    //提交代码注释----
    onLoad() {
        //设置添加跑马灯节点 "banner"
        game.EventManager.getInstance().raiseEvent(core.GameCoreConst.mess_openBanner, { parent: this.node.getChildByName('banner') });
        game.EventManager.getInstance().addEventListener(EventName.EVENT_WIN_GAME, this.showChuanzhangAni, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_WIN_MORE_THAN_BET, this.playAni, this);
        super.resize();
    }

    /**
     * 横屏适配
     */
    layoutLandscape() {
        this.sc1.active = false;
        this.cs2.active = false;
        this.cz.active = false;
        this.bg_di.active = false;
        this.logo.scale = 1;
        this.logo.setPosition(0, 445, 0);
    }

    /**
     * 竖屏适配
     */
    layoutPortrait() {
        this.sc1.active = true;
        this.cs2.active = true;
        this.cz.active = true;
        this.bg_di.active = true;
        this.cz.scale = 2.2;
        this.logo.scale = 1.2;
        this.logo.setPosition(0, 460, 0);
    }

    /**
     * 显示动画
     * @param event 
     * @param winType 
     */
    showChuanzhangAni(event: string, winType: WinType) {
        if (winType == WinType.fiveEven) {
            this.playAni();
            this.playSound();
        }
        let aniName: string = 'idle01';
        switch (winType) {
            case WinType.SuperWin:
                aniName = "idle02";
                break;
            case WinType.MargeWin:
                aniName = "idle02";
                break;
            case WinType.BigWin:
                aniName = "idle02";
                break;
            case WinType.win:
                aniName = "idle02";
                break;
        }
        if (aniName == "idle01") return;
        this.cz.getComponent(sp.Skeleton).setAnimation(0, aniName, false)
        this.cz.getComponent(sp.Skeleton).setCompleteListener(() => {
            this.cz.getComponent(sp.Skeleton).setAnimation(0, "idle01", true)
        });
    }

    /**
     * 动画播放
     */
    playAni() {
        slot.SoundMger.instance.playEffect('winPrize');
    }

    /**
     * 声音播放
     */
    playSound() {
        slot.SoundMger.instance.playEffect('Five_Prize');
        console.log("播放了五连音效");
    }

    onDestroy() {
        game.EventManager.getInstance().removeEventListener(EventName.EVENT_WIN_GAME, this.showChuanzhangAni, this);
        game.EventManager.getInstance().removeEventListener(slot.GameEventNames.EVENT_WIN_MORE_THAN_BET, this.playAni, this);
    }

    // update (dt) {}
}
