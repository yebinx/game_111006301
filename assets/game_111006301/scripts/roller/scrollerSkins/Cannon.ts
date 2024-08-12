import CommonNumAtlas111006301 from "../../main/CommonNumAtlas111006301";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Cannon extends cc.Component {

    /**
     * 暗的数字
     */
    @property(cc.Node)
    private p_nodeNumAn: cc.Node = null;

    /**
     * 亮的数字
     */
    @property(cc.Node)
    private p_nodeNumLiang: cc.Node = null;

    /**
     * 炮筒亮光
     */
    @property(cc.Node)
    private p_nodeLiang: cc.Node = null;

    /**
     * 炮筒闪光
     */
    @property(cc.Node)
    private p_nodeSprShanGuang: cc.Node = null;

    /**
     * 炮筒升级时闪烁动画节点
     */
    @property(cc.Node)
    private p_nodeFxAni: cc.Node = null;

    /** 炮筒升级显示框 */
    @property({ type: [cc.Node] })
    private p_nodeUpShow = [];

    /**
     * 炮筒升级时闪烁动画名称
     */
    @property(cc.String)
    private p_strFxAniName: string = "";

    /**
     * 暗数字类
     */
    private m_anCommonNumAtlas: CommonNumAtlas111006301 = null;
    /**
     * 亮数字类
     */
    private m_liangCommonNumAtlas: CommonNumAtlas111006301 = null;
    /**
     * 当前炮筒是否是亮的状态
     */
    private m_isLiang: boolean = false;


    onLoad() {
        this.m_anCommonNumAtlas = this.p_nodeNumAn.getComponent("CommonNumAtlas111006301");
        this.m_liangCommonNumAtlas = this.p_nodeNumLiang.getComponent("CommonNumAtlas111006301");
        // this.init();
    }

    /**
     * 初始化对象
     */
    public init() {
        this.p_nodeNumAn.active = true;
        this.p_nodeNumLiang.active = false;
        this.p_nodeSprShanGuang.active = false;
        this.m_anCommonNumAtlas.string = "";
        this.m_liangCommonNumAtlas.string = "";
        this.node.scale = 1;
    }

    /**
     * 设置炮筒是否点亮
     * @param isLiang 是否点亮
     * @param isInit 是否初始化，初始化时不播放动画  可选参数
     */
    public setOnline(isLiang: boolean, isInit: boolean = false, isUp: boolean = false) {
        // this.p_nodeLiang.active = isLiang;
        if (isInit) {
            this.p_nodeLiang.active = isLiang;
            if (isLiang) {
                this.node.scale = 1.1;
            } else {
                this.node.scale = 1;
            }
        } else {
            this.playAction(isLiang, isUp);
        }
    }

    /**设置炮筒升级是否显示 */
    public setArrCannonUp(isShow: boolean) {
        for (let i = 0; i < this.p_nodeUpShow.length; i++) {
            let nodeUp = this.p_nodeUpShow[i];
            nodeUp.active = isShow;
            if (isShow) {
                nodeUp.active = true;
                nodeUp.opacity = 0;
                cc.tween(nodeUp).to(0.3, { opacity: 255 }).start();
            } else {
                // nodeUp.active = false;
                nodeUp.opacity = 255;
                cc.tween(nodeUp).to(0.3, { opacity: 0 }).call(() => {
                    nodeUp.opacity = 255;
                    nodeUp.active = false;
                }).start();
            }
        }
    }

    /**开启免费模式时，放大炮筒然后缩小中去掉透明度 */
    public playCannonUp(num: number) {
        this.setCommonNum(num);
        // 如果当前是亮的，那么将恢复到1.1
        if (this.p_nodeLiang.active == true) {
            cc.tween(this.node).to(0.2, { scale: 1.2 }).call(() => {
                cc.tween(this.node).to(0.2, { scale: 1.1 }).call(() => {
                    this.setArrCannonUp(false);
                }).start();
            }).start();
            // 如果当前是不亮的恢复到1
        } else {
            this.p_nodeLiang.active = true;
            cc.tween(this.node).to(0.3, { scale: 1.2 }).call(() => {
                cc.tween(this.node).to(0.3, { scale: 1 }).call(() => {
                    this.setArrCannonUp(false);
                }).start();
            }).start();
            cc.tween(this.p_nodeLiang).delay(0.3).to(1, { opacity: 0 }).call(() => {
                this.p_nodeLiang.opacity = 255;
                this.p_nodeLiang.active = false;

            }).start();
        }

    }

    /**
     * 播放炮筒动画
     */
    private playAction(isLiang, isUp: boolean = false) {
        if (isLiang == true) {

            if (this.m_isLiang == true && isUp == true) {
                this._playUpAni();
            } else if (this.m_isLiang == false && isUp == true) {
                cc.tween(this).delay(0.5).call(() => {
                    this.p_nodeLiang.active = true;
                    this.playLight();
                }).start();
            } else {
                this.p_nodeLiang.active = true;
                this.playLight();
            }
            this.m_isLiang = true;
        } else {
            this.playDark(isUp);
        }
    }

    /**
     * 炮筒变亮时动画
     */
    private playLight() {
        this.p_nodeSprShanGuang.active = true;
        this.p_nodeSprShanGuang.scale = 0.5;
        cc.tween(this.p_nodeSprShanGuang).to(0.3, { scale: 0.8 }).call(() => {
            this.p_nodeSprShanGuang.active = false;
        }).start();
        let seq = cc.sequence(
            cc.scaleTo(0.5, 1.2, 1.2),
            cc.callFunc(() => {
                this.p_nodeNumAn.active = false;
                this.p_nodeLiang.active = true;
            }),
            cc.scaleTo(0.1, 1.1, 1.1),
        )
        this.node.runAction(seq);
    }

    private _playUpAni(callBack?) {
        this.p_nodeFxAni.active = true;
        this.p_nodeFxAni.getComponent(sp.Skeleton).setAnimation(0, this.p_strFxAniName, false);
        this.p_nodeFxAni.getComponent(sp.Skeleton).setCompleteListener(() => {
            this.p_nodeFxAni.active = false;
            callBack && callBack();
            cc.tween(this.node).to(0.2, { scale: 1 }).start();
        })
    }

    /**
     * 炮筒变暗时动画
     * @isUp 是否播放升级动画
     */
    private playDark(isUp?) {
        if (isUp && this.p_strFxAniName.length > 0 && this.m_isLiang == true) {
            this._playUpAni(() => {
                this.p_nodeNumAn.active = true;
                this.p_nodeLiang.active = false;
            })
        } else {
            this.p_nodeNumAn.active = true;
            this.p_nodeLiang.active = false;
            cc.tween(this.node).to(0.2, { scale: 1 }).start();
        }
        this.m_isLiang = false;
    }

    /**
     * 设置炮筒倍数显示数字
     */
    public setCommonNum(mustle: number) {
        // this.m_anCommonNumAtlas.string = "x" + mustle;
        // this.m_liangCommonNumAtlas.string = "x" + mustle;
    }

    start() {
        
    }
}
