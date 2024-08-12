import WinAnimation111005201 from "../roller/WinAnimation111006301";

const { ccclass, property } = cc._decorator;

/**
 * 入口
 */
@ccclass
export default class Main111006301 extends slot.MainView {
    onLoad() {
        slot.GData.startLoad("game_111006301", this.initView.bind(this));

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

        game.BaseUIConf.getInstance().mergeUIConf(UICF);//弹窗
        let uiconf = game.BaseUIConf.getInstance().getUICF();
        game.UIManager.getInstance().initUIConf(uiconf);//注册
    }

    protected getWinAniManagerClass(): any {
        return WinAnimation111005201
    }
}

export enum UIID {
    /** 免费游戏弹窗 */
    BONUS_GAME_POPUP = 210101,
    /** 领取奖励弹窗 */
    FREE_GAME_RESULT = 210102,
}

export const UICF: { [key: number]: game.IUIConf } = {
    [UIID.BONUS_GAME_POPUP]: { bundleName: "game_111006301", path: "prefabs/bonusGame/bonusGame", preventKeyboard: true, preventTouch: false, quickClose: false, cache: true, showType: game.UIShowTypes.UI_FULLSCREEN, openAni: game.UIDefAni.UI_NONE, closeAni: game.UIDefAni.UI_NONE, zOrder: slot.LayerManage.tip },
    [UIID.FREE_GAME_RESULT]: { bundleName: "game_111006301", path: "prefabs/freeGameResult/freeGameResult", preventKeyboard: true, preventTouch: false, quickClose: false, cache: true, showType: game.UIShowTypes.UI_FULLSCREEN, openAni: game.UIDefAni.UI_NONE, closeAni: game.UIDefAni.UI_NONE, zOrder: slot.LayerManage.tip }
}
