// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { mouseEvent } from "../GameEventName111006301";
import tool from "../tool/Tool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(sp.Skeleton)
    spine1: sp.Skeleton = null;

    @property(sp.Skeleton)
    spine2: sp.Skeleton = null;

    private elephant1 = ["idle2", "idle3", "idle4", "win", "win2", "freespin_start", "freespin_idle", "freespin_exit", "bonus_idle2", "bonus_win", "bonus_win2", "jindutiao-man"]

    private elephant2 = ["win-huishou", "jindutiao-max", "win-niutou", "jindutiao-again", "jindutiao-man"]

    // onLoad () {}

    start() {
        game.EventManager.getInstance().addEventListener(mouseEvent.PLAY_ELEPHAN_ANI, this.elephantAniCtrl, this);
    }

    protected onDestroy(): void {
        game.EventManager.getInstance().removeEventListener(mouseEvent.PLAY_ELEPHAN_ANI, this.elephantAniCtrl, this);
    }


    private elephantAniCtrl(event, name) {
        let bool = true
        let resultSpine = null
        for (let index = 0; index < this.elephant2.length; index++) {
            const element = this.elephant2[index];
            if (name == element) {
                bool = false
            }
        }
        this.spine1.node.active = false
        this.spine2.node.active = false
        if (bool) {
            this.spine1.node.active = true
            resultSpine = this.spine1
        } else {
            this.spine2.node.active = true
            resultSpine = this.spine2
        }
        resultSpine.setAnimation(0, name, false)
        resultSpine.setCompleteListener(() => {
            let loopName = ""
            if (name == "fastspin_start") {
                loopName = "fastspin_idle"
            } else {
                loopName = "idle2"
                if (tool.gameState) {
                    loopName = "bonus_idle"
                }
                this.spine1.node.active = true
                this.spine2.node.active = false
            }
            resultSpine.setAnimation(0, loopName, true)
        })
    }

    // update (dt) {}
}
