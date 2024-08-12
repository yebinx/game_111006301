import { EventName } from "./GameEventName111006301";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Banner111006301 extends slot.SlotBanner {

    @property(cc.Node)
    p_nodeBanner: cc.Node = null;

    private setNodeBanner(isOpen: boolean) {
        this.p_nodeBanner.active = isOpen;
        this.scheduleOnce(() => {
            this.banner.node.active = isOpen
        }, 0.1)
    }

    onLoad(): void {
        super.onLoad();
        game.EventManager.getInstance().addEventListener(EventName.EVENT_STOP_WIN_NUM, () => {
            this.setNodeBanner(true);
        }, this);
        game.EventManager.getInstance().addEventListener(EventName.EVENT_PLAY_WIN_NUM_BEGIN, () => {
            this.setNodeBanner(false);
        }, this);
        game.EventManager.getInstance().addEventListener(EventName.FREE_GAME_START, this._freeGameStart, this);
        game.EventManager.getInstance().addEventListener(EventName.FREE_GAME_OVER, this._freeGameOver, this);
    }

    private m_isfreeGame: boolean = false;
    private _freeGameStart(event: string, curNum: number) {
        this.m_isfreeGame = false;
        let index = 0;
        if (curNum == 20) {
            index = 0;
        } else if (curNum == 10) {
            index = 1;
        } else if (curNum == 5) {
            index = 2;
        }
    }

    private _freeGameOver(event: string) {
        this.m_isfreeGame = false;
    }

    onDestroy(): void {
        super.onDestroy();
        game.EventManager.getInstance().removeEventListener(EventName.EVENT_STOP_WIN_NUM, () => {
            this.setNodeBanner(true);
        }, this);
        game.EventManager.getInstance().removeEventListener(EventName.EVENT_PLAY_WIN_NUM_BEGIN, () => {
            this.setNodeBanner(false);
        }, this);
        game.EventManager.getInstance().removeEventListener(EventName.FREE_GAME_START, this._freeGameStart, this);
        game.EventManager.getInstance().removeEventListener(EventName.FREE_GAME_OVER, this._freeGameOver, this);
    }
}
