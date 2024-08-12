import { mouseEvent } from "../../GameEventName111006301";

const { ccclass, property } = cc._decorator;

@ccclass
export default class JTTest111006301 extends slot.JTPerformanceTask {


    public addEventListenner(): void {

    }


    public runningTask(): void {
        this.caculate();
        this.nextStep();
    }

    private caculate(): void {
        this.addStepTask(mouseEvent.ROLL_END_STEP_TASK);
    }


}