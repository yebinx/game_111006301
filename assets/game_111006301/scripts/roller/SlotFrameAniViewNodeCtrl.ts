// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { EventName, mouseEvent, SOUND_NAME } from "../GameEventName111006301";
import CommonNumAtlas111006301 from "../main/CommonNumAtlas111006301";
import tool from "../tool/Tool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class _slotFrameAniViewNodeCtrl extends cc.Component {

    @property([sp.SkeletonData])
    SkeletonData: sp.SkeletonData[] = [];

    @property([sp.SkeletonData])
    wildSkeletonData: sp.SkeletonData[] = [];

    @property([sp.SkeletonData])
    scatterSkeletonData: sp.SkeletonData[] = [];

    @property([cc.SpriteFrame])
    spriteData: cc.SpriteFrame[] = [];

    @property(sp.Skeleton)
    Skeleton: sp.Skeleton = null;

    @property(sp.Skeleton)
    plistAni: sp.Skeleton = null;

    @property(sp.Skeleton)
    rewardPlistAni: sp.Skeleton = null;

    @property(cc.Node)
    purpleBg: cc.Node = null;

    @property(cc.Prefab)
    emptyWild: cc.Prefab = null;


    /**元素的ID */
    data = null

    /**是否在播放滚轴加速动画 */
    private isInRollSpeed = false

    /**该元素的位置 */
    private pos = 0

    onLoad() {

    }

    start() {
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_ANI_START_WHO, this.roolAniStart, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_ANI_END, this.rollAniEnd, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_PLAY, this.initAllNodeState, this);
        game.EventManager.getInstance().addEventListener(slot.GameEventNames.EVENT_RESET_SCROLLER, this.initAllNodeState, this);
    }

    init(pos) {
        this.pos = pos
    }

    private initAllNodeState() {
        this.data = null
        this.Skeleton.node.opacity = 0
        this.purpleBg.opacity = 0
    }

    initNodeState(elem) {
        if (elem == 10 || elem == 9) return
        this.Skeleton.node.opacity = 0
    }

    changeSpine(elem, bInit, bFreeStart) {
        this.data = elem
        if (elem >= 9) {
            this.Skeleton.node.opacity = 255
            if (slot.GData.curLanguage == "zh") {
                if (elem == 9) {
                    this.Skeleton.skeletonData = this.wildSkeletonData[1]
                } else {
                    this.Skeleton.skeletonData = this.scatterSkeletonData[1]
                }
            } else {
                if (elem == 9) {
                    this.Skeleton.skeletonData = this.wildSkeletonData[0]
                } else {
                    this.Skeleton.skeletonData = this.scatterSkeletonData[0]
                }
            }
        }
        if (elem == 10) {
            tool.scatterNumber++
            if (!bInit) {
                if (tool.scatterNumber > 2) {
                    slot.SoundMger.instance.playEffect(SOUND_NAME.Sym_Scatter_To_Fs, false);
                }
                slot.SoundMger.instance.playEffect(SOUND_NAME.Scatter, false);
            }

            this.playSpineAnimation("idle", true)
            if (!bFreeStart) {
                this.playplistAnimation("fx-fensan", false)
            }
        }
        if (elem == 9) {
            if (tool.respData?.state == 2) {
                this.fadinAni(this.purpleBg)
            }
            if (!bInit) {
                slot.SoundMger.instance.playEffect(SOUND_NAME.Wild, false);
            }
            this.playSpineAnimation("idle", true)
        }
    }

    onPlayAnimation(elem) {
        if (elem == 9) {
            this.playSpineAnimation("win", true)
        }
    }

    playPlistAni() {
        this.rewardPlistAni.node.opacity = 255
        this.rewardPlistAni.setAnimation(0, "fx-lizi", false)
        this.rewardPlistAni.setCompleteListener(() => {
            this.rewardPlistAni.node.opacity = 0
        })
    }

    private roolAniStart(event, rollerIndex) {
        if (this.data == 10) {
            let list = tool.getLineNumberByPos(this.pos)
            console.log("ywb", rollerIndex, this.isInRollSpeed)
            if (rollerIndex > list && !this.isInRollSpeed) {
                this.isInRollSpeed = true
                this.playSpineAnimation("idle_fastpin", true)
            }
        }
    }

    private rollAniEnd() {
        if (this.data == 10) {
            this.isInRollSpeed = false
            this.playSpineAnimation("idle", true)
        }
    }

    private fadinAni(node) {
        let act = cc.fadeIn(0.5)
        node.runAction(act)
    }

    private fadOutAni(node, callBack = null) {
        let act = cc.fadeOut(0.5)
        let call = cc.callFunc(function () {
            typeof callBack === 'function' && callBack();
        }.bind(this))
        node.runAction(cc.sequence(act, call))
    }

    private playSpineAnimation(name, isLoop, callBack = null) {
        this.Skeleton.setAnimation(0, name, isLoop)
        this.Skeleton.setCompleteListener(() => {
            typeof callBack === 'function' && callBack();
        })
    }

    private playplistAnimation(name, isLoop, callBack = null) {
        this.plistAni.node.opacity = 255
        this.plistAni.setAnimation(0, name, isLoop)
        this.plistAni.setCompleteListener(() => {
            this.plistAni.node.opacity = 0
            typeof callBack === 'function' && callBack();
        })
    }

    playWildRideAni() {
        if (this.data != 9) return
        let handler = () => {
            let node = cc.instantiate(this.emptyWild)
            this.node.addChild(node)
            let callBack = () => {
                node.destroy();
                game.EventManager.getInstance().raiseEvent(mouseEvent.RIDE_ANI_IN_TARGET);
            }
            let rollMarsk = slot.SlotMachineView.instance.node.parent.parent
            node.parent = rollMarsk;
            let parentPos = tool.getPosByOtherNode(this.node, rollMarsk)
            node.x = parentPos.x
            node.y = parentPos.y
            slot.SoundMger.instance.playEffect(SOUND_NAME.Fs_Sym_Wild_To_Infoboard, false, null, null, null, 40);
            let targetPos = tool.getPosByOtherNode(tool.progressNode, node.parent)
            tool.bezierAct(node, targetPos, 0.3, 20, 200, callBack)
        }
        this.fadOutAni(this.purpleBg, handler)
    }

    protected onDestroy(): void {
        game.EventManager.getInstance().removeEventListener(mouseEvent.ROLL_ANI_START_WHO, this.roolAniStart, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.ROLL_ANI_END, this.rollAniEnd, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.ROLL_PLAY, this.initAllNodeState, this);
    }

    // update (dt) {}
}
