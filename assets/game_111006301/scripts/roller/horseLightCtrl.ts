import { EventName, mouseEvent } from "../GameEventName111006301";
import Tool from "../tool/Tool";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property([cc.SpriteAtlas])
    horseSprite: cc.SpriteAtlas[] = [];

    private startPos = cc.v2(0, 0)

    private randomNumberCtrl = null

    private chooseLanguageSp = null

    private interval = 0

    onLoad() {
        switch (slot.GData.curLanguage) {
            case "da": this.chooseLanguageSp = this.horseSprite[0]

                break;
            case "de": this.chooseLanguageSp = this.horseSprite[1]

                break;
            case "en": this.chooseLanguageSp = this.horseSprite[2]

                break;
            case "es": this.chooseLanguageSp = this.horseSprite[3]

                break;
            case "fi": this.chooseLanguageSp = this.horseSprite[4]

                break;
            case "fr": this.chooseLanguageSp = this.horseSprite[5]

                break;
            case "id": this.chooseLanguageSp = this.horseSprite[6]

                break;
            case "it": this.chooseLanguageSp = this.horseSprite[7]

                break;
            case "ja": this.chooseLanguageSp = this.horseSprite[8]

                break;
            case "ko": this.chooseLanguageSp = this.horseSprite[9]

                break;
            case "nl": this.chooseLanguageSp = this.horseSprite[10]

                break;
            case "no": this.chooseLanguageSp = this.horseSprite[11]

                break;
            case "pl": this.chooseLanguageSp = this.horseSprite[12]

                break;
            case "pt": this.chooseLanguageSp = this.horseSprite[13]

                break;
            case "ro": this.chooseLanguageSp = this.horseSprite[14]

                break;
            case "ru": this.chooseLanguageSp = this.horseSprite[15]

                break;
            case "sv": this.chooseLanguageSp = this.horseSprite[16]

                break;
            case "th": this.chooseLanguageSp = this.horseSprite[17]

                break;
            case "tr": this.chooseLanguageSp = this.horseSprite[18]

                break;
            case "vi": this.chooseLanguageSp = this.horseSprite[19]

                break;
            case "zh": this.chooseLanguageSp = this.horseSprite[20]

                break;

            default: this.chooseLanguageSp = this.horseSprite[2]
                break;
        }
        // this.startPos = cc.v2(this.node.x, this.node.y)
    }

    start() {
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_ANI_START, this.horstActive, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.FREE_GAME_ADD_TIME, this.horstActive, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_END_CALL_BACK, this.rollStop, this);
        this.horseLightCtrl()
    }

    private horstActive(event, number) {
        this.randomNumberCtrl = number
        this.interval = Tool.getNowTime() + 8000
        this.horseLightCtrl()
    }

    private rollStop() {
        this.randomNumberCtrl = null
        this.horseLightCtrl()
    }

    private horseLightCtrl() {
        // this.node.setPosition(this.startPos)
        // let random = slot.MathUtil.getRandomRange(0, 3, true)
        // if (this.randomNumberCtrl != null) {
        //     random = this.randomNumberCtrl
        // }
        // this.node.getComponent(cc.Sprite).spriteFrame = this.chooseLanguageSp.getSpriteFrame("info" + random)
        // this.node.stopAllActions()
        // if (random >= 2 && random <= 3) {
        //     this.horseLightAni()
        // }
    }

    private horseLightAni() {
        let moveTime = 5
        this.node.x += 50
        this.node.stopAllActions()
        let delay = cc.delayTime(2)
        let act = cc.moveBy(moveTime, cc.v2(-800, 0))
        let call = cc.callFunc(function () {
        }.bind(this))
        this.node.runAction(cc.sequence(delay, act, call))
    }

    protected onDestroy(): void {
        game.EventManager.getInstance().removeEventListener(mouseEvent.ROLL_ANI_START, this.horstActive, this);
        game.EventManager.getInstance().removeEventListener(mouseEvent.FREE_GAME_ADD_TIME, this.horstActive, this);
        game.EventManager.getInstance().addEventListener(mouseEvent.ROLL_END_CALL_BACK, this.rollStop, this);
    }


    update(dt) {
        if (Tool.isPastTime(this.interval)) {
            this.interval = Tool.getNowTime() + 8000
            // this.horseLightCtrl()
        }
    }
}
