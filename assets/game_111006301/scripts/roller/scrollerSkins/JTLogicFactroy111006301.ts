import JTTest111006301 from "./JTTest111006301";


const { ccclass, property } = cc._decorator;

@ccclass
export default class JTLogicFactroy111006301 extends slot.JTLogicFactroy {

    public adjustFlowOptions() {
        // this.childOption(JTTest111006301, slot.JTTaskPriority.JTGLOBAL_DISPLAY_LINES - 1); //轮播线之前
        this.childOption(JTTest111006301, slot.JTTaskPriority.JTGLOBAL_DISPLAY_LINES + 1); //轮播线之后
        // this.childOption(JTCollectTask111006301, slot.JTTaskPriority.JTCONVERT_PLAYLINES - 1); //轮播线之前
    }
}