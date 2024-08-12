// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { mouseEvent, SOUND_NAME } from "../GameEventName111006301";
import CommonNumAtlas111006301 from "../main/CommonNumAtlas111006301";
import tool from "../tool/Tool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    SlightSkeleton: sp.Skeleton = null;

    @property(sp.Skeleton)
    lightPlist: sp.Skeleton = null;

    @property(cc.Node)
    lightNumber: cc.Node = null;

    @property(cc.Node)
    greyNumber: cc.Node = null;

    @property(cc.Node)
    lightBg: cc.Node = null;

    @property(cc.Node)
    progressMax: cc.Node = null;

    @property(cc.Node)
    barLight: cc.Node = null;

    private progress: cc.ProgressBar = null

    private progressStage = 0

    private isFirstStart = true

    onLoad() {
        tool.progressNode = this.node
        this.progress = this.node.getComponent(cc.ProgressBar)
    }

    start() {
        game.EventManager.getInstance().addEventListener(mouseEvent.RIDE_ANI_IN_TARGET, this.addProgressAni, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.FREE_GAME_CLOSE, this.progressStart, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.FREE_RECONNECTION_DATA, this.freeReconnetion, this);

    }

    protected onDestroy(): void {
        game.EventManager.getInstance().removeEventListener(mouseEvent.RIDE_ANI_IN_TARGET, this.addProgressAni, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.FREE_GAME_CLOSE, this.progressStart, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.FREE_RECONNECTION_DATA, this.freeReconnetion, this);
    }

    private freeReconnetion(event, data, wildNum) {
        if (data >= 20) {
            this.lightNumber.opacity = 255
            this.lightNumber.getComponent(CommonNumAtlas111006301).string = "*" + (data)
        } else {
            this.greyNumber.opacity = 255
            this.greyNumber.getComponent(CommonNumAtlas111006301).string = "*" + (data + 2)
        }
        this.progress.progress = 0.35 * wildNum
        if (wildNum != 0) {
            this.SlightSkeleton.node.opacity = 255
        }
        this.SlightSkeleton.node.x = Number(this.progress.totalLength) * Number(this.progress.progress)
    }

    private addProgressAni() {
        let rate = 10
        this.SlightSkeleton.node.opacity = 255;
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Multibar_Increase, false, null, null, null, 70);
        for (let index = 0; index < rate; index++) {
            let delay = index * 0.02;
            this.scheduleOnce(() => {
                this.progress.progress += (0.35 / rate)
                this.SlightSkeleton.node.x = Number(this.progress.totalLength) * Number(this.progress.progress)
                if (index == rate - 1) {
                    this.progressStage++
                    slot.SoundMger.instance.playEffect("Fs_Lotus_0" + this.progressStage, false);
                    if (this.progress.progress >= 1) {
                        this.progressComplete(() => {
                            game.EventManager.getInstance().raiseEvent(mouseEvent.PROGRESS_END);
                        })
                    } else {
                        game.EventManager.getInstance().raiseEvent(mouseEvent.PROGRESS_END);
                    }
                }
            }, delay);
        }
    }

    private progressComplete(callBack = null) {
        this.numberLightAni()
        slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Multibar_Nextlevel, false);
        this.SlightSkeleton.node.opacity = 0
        this.progressStage = 0
        let updateList = tool.respData.updateList
        let ratio = null
        if (updateList) {
            for (let index = 0; index < updateList.length; index++) {
                const element = updateList[index];
                if (element.type == 3) {
                    ratio = element.value.ratio
                }
            }
        }
        if (ratio >= 20) {
            tool.isCanAddRide = false
        }
        if (this.isFirstStart) {
            game.EventManager.getInstance().raiseEvent(mouseEvent.PLAY_ELEPHAN_ANI, "jindutiao-man");
        }
        this.isFirstStart = true
        let act1 = cc.fadeOut(1)
        let call = cc.callFunc(function () {
            this.progress.progress = 0
            this.node.opacity = 255
            typeof callBack === 'function' && callBack();
        }.bind(this))
        this.node.runAction(cc.sequence(act1, call))
    }

    private progressStart(event, data) {
        let rate = 40
        this.progress.progress = 0
        this.progressMax.opacity = 0
        this.lightNumber.opacity = 0
        this.isFirstStart = false
        this.SlightSkeleton.node.opacity = 255
        this.barLight.opacity = 255
        tool.isCanAddRide = true;
        this.greyNumber.opacity = 255;
        this.greyNumber.getComponent(CommonNumAtlas111006301).string = "*2"
        this.barLight.getComponent(cc.Animation).play("barLight")
        this.barLight.getComponent(cc.Animation).on("stop", () => {
            this.barLight.opacity = 0
        })
        game.EventManager.getInstance().raiseEvent(mouseEvent.PLAY_ELEPHAN_ANI, "win-huishou");
        for (let index = 0; index < rate; index++) {
            let delay = cc.delayTime(index * 0.02)
            let call = cc.callFunc(() => {
                if (index == rate - 1) {
                    this.progressComplete()
                }
                this.progress.progress += (1 / rate)
                this.SlightSkeleton.node.x = Number(this.progress.totalLength) * Number(this.progress.progress)
            })
            this.node.runAction(cc.sequence(delay, call))
        }
        let delay = cc.delayTime(2.5)
        let call = cc.callFunc(() => {
            data.run()
        })
        this.node.runAction(cc.sequence(delay, call))
    }

    private numberLightAni() {
        let updateList = tool.respData.updateList
        let ratio = null
        if (updateList) {
            for (let index = 0; index < updateList.length; index++) {
                const element = updateList[index];
                if (element.type == 3) {
                    ratio = element.value.ratio
                }
            }
        }
        if (ratio == null) {
            ratio = 2
        }
        if (ratio == 20) {
            this.progressMax.opacity = 255
            this.lightNumber.opacity = 255
            this.greyNumber.opacity = 0
            this.lightBg.opacity = 255
            this.lightBg.scale = 1
            this.setLightNumeber(ratio)
            game.EventManager.getInstance().raiseEvent(mouseEvent.RIDE_NUMEBER_GEGAN_FADOUT);
        } else {
            this.lightBgAni(ratio)
            this.setLightNumeber(ratio)
            // this.lightNumber.opacity = 255
            // this.greyNumber.opacity = 0
        }
    }

    private setLightNumeber(rate) {
        this.lightNumber.getComponent(CommonNumAtlas111006301).string = "*" + rate
    }

    private setGreyNumber(rate) {
        this.greyNumber.getComponent(CommonNumAtlas111006301).string = "*" + (rate + 2)
        let act2 = cc.fadeIn(0.5)
        this.greyNumber.runAction(act2)
    }

    private lightPlistAniCtrl() {
        this.lightPlist.node.opacity = 255
        this.lightPlist.setAnimation(0, "animation", false)
        this.lightPlist.setCompleteListener(() => {
            this.lightPlist.node.opacity = 0
        })
    }

    private lightBgAni(ratio) {
        this.lightPlistAniCtrl()


        cc.tween(this.greyNumber)
            .set({ opacity: 255 })
            .delay(0.4)
            .to(0.1, { opacity: 0 })
            .start();

        cc.tween(this.lightNumber)
            .set({ opacity: 0 })
            .delay(0.2)
            .to(0.3, { opacity: 255 })
            .call(() => {
                game.EventManager.getInstance().raiseEvent(mouseEvent.RIDE_NUMEBER_GEGAN_FADOUT);
            })
            .delay(0.6)
            .to(0.3, { opacity: 0 })
            .start();

        cc.tween(this.lightBg)
            .to(0.2, { opacity: 255 })
            .delay(0.6)
            .to(0.3, { opacity: 0 })
            .delay(0.75)
            .call(() => {
                this.setGreyNumber(ratio);
            })
            .start()
    }
}
