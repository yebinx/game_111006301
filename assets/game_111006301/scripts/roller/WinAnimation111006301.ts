import { SOUND_NAME, mouseEvent } from "../GameEventName111006301";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WinAnimation111005201 extends slot.WinAniManager {


    protected playWinStart(): void {
        slot.SoundMger.instance.playEffect(SOUND_NAME.Prize_Big, false);
        this.winCoinLabel.node.opacity = 0;
        this.scheduleOnce(() => {
            this.winCoinLabel.node.opacity = 255;
        }, 0.4)
    }

    protected updateCoinLabel(str: string): void {
        super.updateCoinLabel && super.updateCoinLabel(str)
    }

    /**
     * 大奖文字出现效果
     * @param textNode 
     * @param winType 
     * @returns 
     */
    protected playWinTextFadeIn(textNode: cc.Node, winType: slot.WinAniType): cc.Tween {
        let bigAniNode = textNode.parent
        bigAniNode.children.forEach(element => {
            cc.Tween.stopAllByTarget(element)
        });
        let property = this.getWinTextData(winType);
        slot.SoundMger.instance.playEffect(SOUND_NAME.Prize_Big_Switch, false);
        let delayTime = (winType == slot.WinAniType.Small ? 0.15 : 0);
        textNode.anchorY = 0;
        return cc.tween(textNode)
            .set({ scale: 0, opacity: 255 })
            .delay(delayTime)
            .to(0.3, { scale: property.scale + 0.2 })
            .to(0.1, { scale: property.scale })
            .start();
    }

    /**
     * 大奖文字消失效果
     * @param textNode 
     * @param winType 
     * @returns 
     */
    protected playWinTextFadeOut(textNode: cc.Node, winType: slot.WinAniType): cc.Tween {
        textNode.active = false;
        return;
    }

    /**
     * 分数变更到某个阶段
     * @param winType 
     */
    protected onStageChange(winType: slot.WinAniType): void {

    }
    /**
     * 点击时播放最终效果
     */
    protected onPlayFinalAnimation(): void {
        let textNode = this.getWinTextNode();
        let property = this.getWinTextData();
        textNode.anchorY = 0;
        textNode.scale = property.scale;
        textNode.opacity = 255;
        this.winCoinLabel.node.opacity = 255;
        slot.SoundMger.instance.stopEffect(SOUND_NAME.Prize_Big)
        slot.SoundMger.instance.playEffect(SOUND_NAME.Prize_Big_End, false);
    }

    /**
     * 金币增长完成
     */
    protected onCoinIncreaseEnd(): void {
        let textNode = this.getWinTextNode()
        let property = this.getWinTextData();
        textNode.anchorY = 0;
        textNode.scale = property.scale;

        cc.tween(this.node).to(0.3, { scale: 1.1 }).to(0.13, { scale: 1 }).start();

        slot.SoundMger.instance.stopEffect(SOUND_NAME.Prize_Big)
        slot.SoundMger.instance.playEffect(SOUND_NAME.Prize_Big_End, false);
    }




    /**
     * 大奖完全退出
     * @param hander 做完表现执行handler
     */
    protected playFadeOut(handler: slot.Handler): void {
        // let winAni: { [num: number]: { ani, aniName } } = {
        //     [slot.WinAniType.Small]: { ani: "bigwin_b", aniName: "bigwin_fadeout" },
        //     [slot.WinAniType.Middle]: { ani: "superwin_b", aniName: "superwin_fadeout" },
        //     [slot.WinAniType.Great]: { ani: "megawin_b", aniName: "megawin_fadeout" },
        // }
        // let winAniConfit = winAni[this.getWinAniType()];
        // let comp = this.getWinAniSkeByTag(winAniConfit.ani);
        // comp.node.active = true;
        // comp.play(winAniConfit.aniName, false);

        let winTextNode = this.getWinTextNode();
        let winCoinTextNode = this.winCoinLabel.node;
        cc.tween(winTextNode)
            .to(0.3, { opacity: 0 })
            .start();

        cc.tween(winCoinTextNode)
            .to(0.3, { opacity: 0 })
            .start();

        slot.SoundMger.instance.playEffect(SOUND_NAME.bigwin_fx_exit, false);
        slot.SoundMger.instance.stopEffect(SOUND_NAME.Prize_Big_End);
        slot.SoundMger.instance.stopEffect(SOUND_NAME.Prize_Big)
        this.scheduleOnce(() => {
            game.EventManager.getInstance().raiseEvent(mouseEvent.BIG_WIN_ANI_END_CALL_BACK, 1, 0);
            super.playFadeOut && super.playFadeOut(handler);
        }, 0.33)
    }


    getWinTextData(winType?) {
        if (winType == null) {
            winType = this.getWinAniType();
        }
        //@ts-ignore
        let property = this.winTextDataMap.get(winType);
        return property;
    }

    getWinAniSkeByTag(tag) {
        //@ts-ignore
        let comp = this.animationMap.get(tag) as slot.AnimationExtend;
        return comp;
    }

    getWinAniType() {
        //@ts-ignore
        return this.winAniType;
    }
}
