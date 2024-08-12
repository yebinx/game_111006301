
/* 

*滚轴层级定义 

*/

export default class JTLayerManager111006301 extends slot.JTLayerFactory {

    constructor() {
        super();
    }

    //自定义一个容器节点类型，公共库使用的均是整百的数值，需自定义非整百数以免跟跟公共库冲突 

    public static FRAME_IMAGE_CONTAINER: number = 999;

    public initialize(scroller: slot.JTScrollerGroup): void {

        //分散加速的暗淡元素会添加到此节点 
        let contaner1 = this.addChildNode(slot.JTLayerFactory.LAYER_SORT_SCATTER_STOP_CONTAINER, scroller) as slot.JTLayerSortMaskContainer;
        //分散加速的黑色背景 
        let scatterBackGround = this.addChildNode(slot.JTLayerFactory.SCATTER_BLACK_BACK_GROUND, scroller) as slot.JTBlackBackGround;
        //分散加速动画所在节点 
        this.addChildNode(slot.JTLayerFactory.SKIN_LOADER_CONTAINER, scroller);

        //滚轴滚动元素时的遮罩，预制里的mask组件要删掉 
        let mask = this.addChildNode(slot.JTLayerFactory.SCROLLER_MASK_CONTAINER, scroller) as slot.JTScrollerGroupMask;
        //滚轴滚动元素时所在节点，必需添加到遮罩上 
        this.addChildNode(slot.JTLayerFactory.SCROLLER_CONTAINER, mask);
        //分散加速的点亮元素添加到此节点 
        let contaner2 = this.addChildNode(slot.JTLayerFactory.LAYER_SORT_SCATTER_PLAY_CONTAINER, scroller) as slot.JTLayerSortMaskContainer;
        //轮播时非中奖元素会添加到此在节点 

        let contaner3 = this.addChildNode(slot.JTLayerFactory.LAYER_SORT_STOP_RENDER, scroller) as slot.JTLayerSortMaskContainer;

        //轮播时的黑色背景 

        let backGround = this.addChildNode(slot.JTLayerFactory.SCOLLER_GROUP_BLACK_BACK_GROUND, scroller) as slot.JTBlackBackGround;

        //自定义的节点，比如把滚轴的部分框图片添加到此节点frameImageContainer上，让轮播时的中奖元素在这些图片的上面 
        let frameImageContainer = this.addChildNode(JTLayerManager111006301.FRAME_IMAGE_CONTAINER, scroller);
        //轮播时中奖元素会添加到此在节点 
        let contaner4 = this.addChildNode(slot.JTLayerFactory.LAYER_SORT_PLAY_RENDER, scroller) as slot.JTLayerSortMaskContainer;
        //slotmachine.addEffect isAbove为false时会添加到的节点 
        this.addChildNode(slot.JTLayerFactory.EFFECT_BELOW_CONTAINER, scroller);
        //slotmachine.addEffect isAbove为true时会添加到此节点 
        this.addChildNode(slot.JTLayerFactory.EFFECT_ABOVE_CONTAINER, scroller);

        //中奖线所在的节点 
        this.addChildNode(slot.JTLayerFactory.LINE_CONTAINER, scroller);


        //中奖线ID所在节点 
        this.addChildNode(slot.JTLayerFactory.LINE_NUMBER_CONTAINER, scroller);

        //设定遮罩范围 
        mask.launch(scroller);
        mask.height = 505;
        //黑色背景设定透明度及宽高，如不规则则会根据设定的滚轴的maskPolygon绘制 
        backGround.setup(scroller.config.getWidth(), scroller.config.getHeight(), 100);
        scatterBackGround.setup(scroller.config.getWidth(), scroller.config.getHeight(), 0);
        contaner1.setupMask(scroller.config.getWidth(), scroller.config.getHeight());
        contaner2.setupMask(scroller.config.getWidth(), scroller.config.getHeight());
        contaner3.setupMask(scroller.config.getWidth(), scroller.config.getHeight());
        contaner4.setupMask(scroller.config.getWidth(), scroller.config.getHeight());

    }


    /** 
     * 注册各层容器使用的类，需注册后才能在initialize添加节点，黑色背景不注册则不会显示
    * 中奖元素节点不注册中奖时所有元素会保留在 slot.JTLayerFactory.SCROLLER_CONTAINER 
     * @returns  

     */
    protected registerClassAlias() {
        this.registerClass(slot.JTLayerFactory.EFFECT_BELOW_CONTAINER, slot.JTGComponent);
        this.registerClass(slot.JTLayerFactory.SCROLLER_CONTAINER, slot.JTGComponent);
        this.registerClass(slot.JTLayerFactory.LINE_CONTAINER, slot.JTGComponent);
        this.registerClass(slot.JTLayerFactory.GIRD_CONTAINER, slot.JTGComponent);
        this.registerClass(slot.JTLayerFactory.SCROLLER_MASK_CONTAINER, slot.JTScrollerGroupMask);
        this.registerClass(slot.JTLayerFactory.EFFECT_ABOVE_CONTAINER, slot.JTGComponent);
        this.registerClass(slot.JTLayerFactory.SCATTER_GRID_CONTAINER, slot.JTGComponent);
        this.registerClass(slot.JTLayerFactory.SKIN_LOADER_CONTAINER, slot.JTGComponent);
        this.registerClass(slot.JTLayerFactory.SCOLLER_GROUP_BLACK_BACK_GROUND, slot.JTBlackBackGround);
        //不规则滚轴需把slot.JTLayerSortContainer替换成slot.JTLayerSortMaskContainer 

        this.registerClass(slot.JTLayerFactory.LAYER_SORT_PLAY_RENDER, slot.JTLayerSortMaskContainer);
        this.registerClass(slot.JTLayerFactory.LAYER_SORT_STOP_RENDER, slot.JTLayerSortMaskContainer);
        this.registerClass(slot.JTLayerFactory.LAYER_SORT_SCATTER_PLAY_CONTAINER, slot.JTLayerSortMaskContainer);
        this.registerClass(slot.JTLayerFactory.LAYER_SORT_SCATTER_STOP_CONTAINER, slot.JTLayerSortMaskContainer);
        this.registerClass(slot.JTLayerFactory.SCATTER_BLACK_BACK_GROUND, slot.JTBlackBackGround);
        this.registerClass(slot.JTLayerFactory.LINE_NUMBER_CONTAINER, slot.JTGComponent);
        //注册自定义的图片容器，可直接自定义一个类继承slot.JTGComponent，在自定义的类里自己添加图片节点 
        this.registerClass(JTLayerManager111006301.FRAME_IMAGE_CONTAINER, slot.JTGComponent);
        return this;
    }

} 