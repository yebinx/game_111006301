
const { ccclass, property } = cc._decorator;

@ccclass
export default class poolManager extends cc.Component {

    enemyPool = new cc.NodePool()

    bulletChat: cc.Prefab = null;

    public static inst = null

    public static getInstance(): poolManager {
        if (this.inst == null) {
            this.inst = new poolManager();
        }
        return this.inst;
    }

    initPool(enemyPrefab) {
        let initCount = 20;
        this.bulletChat = enemyPrefab
        for (let i = 0; i < initCount; ++i) {
            let enemy = cc.instantiate(enemyPrefab); // 创建节点
            this.enemyPool.put(enemy); // 通过 put 接口放入对象池
        }
    }

    createEnemy(parentNode, data, sectionPos, pos = null) {
        // let enemy = null;
        // if (this.enemyPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
        //     enemy = this.enemyPool.get();
        // } else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
        //     enemy = cc.instantiate(this.bulletChat);
        // }
        // enemy.parent = parentNode; // 将生成的敌人加入节点树
        // enemy.getComponent(bulletChatCtrl).init(data, sectionPos, pos); //接下来就可以调用 enemy 身上的脚本进行初始化
    }

    onEnemyKilled(enemy) {
        // enemy 应该是一个 cc.Node
        this.enemyPool.put(enemy); // 和初始化时的方法一样，将节点放进对象池，这个方法会同时调用节点的 removeFromParent
    }

}
