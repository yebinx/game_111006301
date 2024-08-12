import SpinSlotViewExtend111006301 from "../SpinSlotViewExtend111006301";

/*
* 注册class类型
*/
export default class JTChildManager111006301 extends slot.JTChildFactory {
    constructor() {
        super();
    }

    protected registerClassAlias() {
        this.registerClass(slot.JTChildFactory.SCROLLER_TYPE, slot.JTScroller);
        this.registerClass(slot.JTChildFactory.ITEMRENDER_TYPE, SpinSlotViewExtend111006301);
        this.registerClass(slot.JTChildFactory.GIRD_TYPE, slot.JTSkinnableGridRender)
        this.registerClass(slot.JTChildFactory.SCATTER_TYPE, slot.JTScatterGridRender)
        this.registerClass(slot.JTChildFactory.LINE_TYPE, slot.JTSkinnableRuntimeLineAnimationRender);
        return this;
    }

    public changedLine(lineRender, lineInfo: slot.JTLineInfo): void {
        super.changedLine(lineRender, lineInfo);
        //if (ReWild.instance.isReSpin && SlotConfigManager.instance.DataPayLine.getData(lineInfo.line.lineId))
        // ReWild.instance.drawWildRect(SlotConfigManager.instance.DataPayLine.getData(lineInfo.line.lineId).lineColor[0].color);
    }
}