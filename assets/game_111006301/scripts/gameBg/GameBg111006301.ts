import { EventName } from "../GameEventName111006301";
import CommonNumAtlas111006301 from "../main/CommonNumAtlas111006301";

const { ccclass, property } = cc._decorator;

/**
 * 背景适配
 */
@ccclass
export default class GameBg111006301 extends slot.BaseView {
    @property(cc.Node)
    private p_nodeFree: cc.Node = null;

    /** 下面的背景图 */
    @property(cc.Node)
    private p_nodeBg2: cc.Node = null;

    @property(cc.Node)
    private p_nodeFreeGameNum: cc.Node = null;

    @property(cc.Node)
    private p_nodeShadow: cc.Node = null;

    @property(cc.Node)
    private p_nodeSprRemain: cc.Node = null;

    @property(cc.Node)
    private p_nodeLfs: cc.Node = null;



    onLoad() {
        game.EventManager.getInstance().addEventListener(EventName.FREE_GAME_START, this._onFreeGameStart, this);
        game.EventManager.getInstance().addEventListener(EventName.FREE_GAME_OVER, this._onFreeGameOver, this);
        game.EventManager.getInstance().addEventListener(EventName.EVENT_FREE_GAME_NUM, this._updateFreeGameNum, this);
        game.EventManager.getInstance().addEventListener(EventName.EVENT_ADD_FREE_GAME_NUM, this._addFreeGameNum, this);

        this.initLayer();
        this.scheduleOnce(() => {
            let menu = slot.MainView.instance.node.getChildByName("menu")
            let openBtn = slot.MainView.instance.node.getChildByName("menu").getChildByName("openBtn")
            menu.scale = 0.8
            menu.x += 30
            console.log("ywb", menu)
            for (let index = 0; index < menu.children.length; index++) {
                const element = menu.children[index];
                element.scale = 1.2
            }
            openBtn.scale = 0.8
        }, 1);

        if (slot.GData.curLanguage == "ru") {
            this.p_nodeFreeGameNum.y -= 30
        } else if (slot.GData.curLanguage == "nl") {
            this.p_nodeSprRemain.x -= 90
        } else if (slot.GData.curLanguage == "no") {
            this.p_nodeSprRemain.x -= 90
        } else if (slot.GData.curLanguage == "pl") {
            this.p_nodeSprRemain.x -= 90
        } else if (slot.GData.curLanguage == "ro") {
            this.p_nodeSprRemain.x -= 90
        } else if (slot.GData.curLanguage == "tr") {
            this.p_nodeSprRemain.x -= 90
        }
    }

    /**
     * 修改层级
     */
    private initLayer() {
        this.p_nodeBg2.removeFromParent();
        this.p_nodeBg2.scale = 0.9
        slot.EntranceView.instance.addNode(this.p_nodeBg2, slot.LayerManage.menu);
    }

    /**
     * 开始免费游戏
     */
    private _onFreeGameStart(event: string, gameNum?) {
        this.bAddFreeTime = false;
        slot.MainView.instance.node.getChildByName("gameControPrefab").opacity = 0
        console.log(slot.MainView.instance.node.getChildByName("gameControPrefab"))
        this.p_nodeBg2.active = this.p_nodeFree.active = true;
        this.p_nodeShadow.active = false;
        if (gameNum != null) this._updateFreeGameNum("", gameNum);
    }

    /**
     * 关闭免费游戏
     */
    private _onFreeGameOver(event: string) {
        console.log("ywb关闭免费游戏")
        slot.MainView.instance.node.getChildByName("gameControPrefab").opacity = 255
        game.EventManager.getInstance().raiseEvent(slot.GameEventNames.EVENT_GAMECONTROL_ALL_BTN_CLICK, true);
        this.p_nodeBg2.active = this.p_nodeFree.active = false;
        this.p_nodeShadow.active = true;
    }

    bAddFreeTime = false;
    // 更新免费游戏剩余免费次数
    private _updateFreeGameNum(event: string, gameNum: number) {
        if (this.bAddFreeTime) return;
        let isOver = (gameNum <= 0);
        this.p_nodeSprRemain.active = !isOver;
        this.p_nodeLfs.active = isOver;
        this.p_nodeFreeGameNum.getComponent(CommonNumAtlas111006301).string = "" + gameNum;
    }

    /** 增加免费次数 */
    private _addFreeGameNum(event: string, addNum: number, handler: slot.Handler) {
        let nowTimes = Number(this.p_nodeFreeGameNum.getComponent(CommonNumAtlas111006301).string);
        let countTimes = nowTimes + addNum;
        this.bAddFreeTime = true;
        let act = cc.sequence(
            cc.delayTime(0.3),
            cc.callFunc(() => {
                nowTimes++;
                if (nowTimes >= countTimes) {
                    this.p_nodeFreeGameNum.getComponent(CommonNumAtlas111006301).string = nowTimes.toString();
                    this.bAddFreeTime = false;
                    handler.run();
                } else {
                    this.p_nodeFreeGameNum.getComponent(CommonNumAtlas111006301).string = nowTimes.toString();
                }
            })
        )
        this.node.runAction(cc.repeat(act, addNum));
    }

    onDestroy() {
        game.EventManager.getInstance().removeEventListener(EventName.FREE_GAME_START, this._onFreeGameStart, this);
        game.EventManager.getInstance().removeEventListener(EventName.FREE_GAME_OVER, this._onFreeGameOver, this);
        game.EventManager.getInstance().removeEventListener(EventName.EVENT_FREE_GAME_NUM, this._updateFreeGameNum, this);
        game.EventManager.getInstance().removeEventListener(EventName.EVENT_ADD_FREE_GAME_NUM, this._addFreeGameNum, this);
    }
}