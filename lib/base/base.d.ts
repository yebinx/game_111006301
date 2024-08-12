declare namespace game {
    export class RedefineLabel extends cc.Component {
        static list: any[];
        onLoad(): void;
        init(): void;
        update(dt: number): void;
    }
    export interface IControl {
        init(): void;
        initfinish(): void;
        start(): void;
        end(): void;
    }
    /**
     * 全局常量 ，不可变动
     */
    export class Const {
        static ResDesignSize: cc.Size;
        static mess_windowResize: string;
        static mess_pageHideShow: string;
        static mess_refreshLanguage: string;
        static mess_netclose: string;
        static mess_netconnected: string;
    }
    export class ComUtils {
        static checkURL(url: string): boolean;
        /**
         * 查找子串位置
         * @param str 源字符串
         * @param cha 子串
         * @param num 第几个子串
         */
        static findCharPos(str: string, cha: string, num: number): number;
        /**
         * 获取堆栈信息
         * @param popCount 剔除前几段内容
         */
        static getCallStack(popCount: number): string;
        static formatStr(num: any, saveNum: any): string;
        static deepClone(srcObj: any, dstObj: any): any;
        static comma(strCoin: any): string;
        static randomString(len: any): string;
        static getFloatRandom(start: any, end: any): number;
        static getIntRandom(start: any, end: any): number;
        static getIntRandomNoLoop(num: number, start: number, end: number): number;
        static array_noRepeat(a: any): any[];
        static array_intersection(a: any, b: any): any[];
        static array_difference(a: any, b: any): any[];
        static array_union(a: any, b: any): any[];
        /**
         * 将数组中元素顺序打乱返回一个新的数组，原数组不会改变
         */
        static disorderArray(array: any[]): any[];
        static GetTwoPosDistance(point1: any, point2: any): number;
        static GetAngleTwoPos(point1: any, point2: any): number;
        static GetLinePos(posArray: any, t: any): cc.Vec2;
        /**
         * 获取已知两点组成线段的垂线的函数 返回k、b值
         * @param startVec2
         * @param endVec2
         */
        static getVlineKB(startVec2: cc.Vec2, endVec2: cc.Vec2): number[];
        static GetMiddlePoint(startPos: cc.Vec2, endPos: cc.Vec2): cc.Vec2;
        static GetCirlePos(radius: number, centerPos: cc.Vec2): cc.Vec2;
        static GetCirlePosByAngle(radius: number, centerPos: cc.Vec2, ang: number): cc.Vec2;
        static GetTwoLevelBezier(posArray: any, t: any): cc.Vec2;
        static GetThreeLevelBezier(posArray: any, t: any): cc.Vec2;
        /**
         *  PC = 1; //PC
            IOS_WIDTH = 2; // IOS横
            IOS_HIGHT = 3; // IOS竖
            AND_WIDTH = 4; // android横
            AND_HIGHT = 5; // android竖
            OTR_WIGHT = 6; // 其他横
            ORT_HIGHT = 7; // 其他
         * @param code
         */
        static GetPlatformType(): number;
        /**
         * 服务器传过来的筹码，转换为千分号
         *  @param v 要转换的数字，默认是分制
         *  @param n 保留几位小数点，默认为2
         *  @param c 除数
         *  @param  isReserved 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理)
         *  @param  thousandSign 千分位符号
         *  @param  decimalPointSymbol 小数点符号
         */
        static formatNumber(v: number | Long, n?: number, c?: number, isReserved?: boolean, thousandSign?: string, decimalPointSymbol?: string): string;
        static getUrlParam(url: string, key?: string): any;
        static GetUrlPara(): string[];
        static getUrl(): string;
        static GetUrlRelativePath(): string;
        static verifyPhone(phone: string): string;
        static verifyPassword(psw: string): string;
        /**
         * 得到合法的名字显示
         */
        static GetLegalNameStr(str: string): string;
        /**
         * 截取指定长度的String,  末尾加...
         *
         * @static
         * @param {string} initialString 初始String
         * @param {number} len 字长或字节数
         * @param {boolean} [isByByte] 是否通过字节数判断
         * @param {string} [endStr="..."] 修饰字符
         * @returns {string} 返回结果
         * @memberof Utils
         */
        static cutStringByLength(initialString: string, len: number, isByByte?: boolean, endStr?: string): string;
        /**
         * 转化金币展示格式
         * @param coin 金币
         * @param places 保留几位小数点，默认为2 参数isReserved为true才有效，isReserved默认true
         * @param c 除数
         * @param  isReserved 是否保留小数点位数(默认保留，如果不保留按原值显示,不进行四舍五入处理)
         */
        static formatNumToKMB(coin: number, places?: number, c?: number, isReserved?: boolean): string;
        static toDecimal3(str: string, pos?: number): string;
        static toDecimal2(num: any, pos: any): string;
        /**
         * 去除字符串数组 中 字符串的空格
         * @param value 字符串数组
         */
        static RemoveSpaceByArrayStr(value: Array<string>): Array<string>;
        static RemoveAllSpace(str: any): any;
        /**
        * 将字符串中包含的"{0},{1}..."替换成自定义参数
        * @param str 要替换的字符串
        * @param params 要替换的参数
        */
        static substitute(str: string, ...params: any[]): string;
        /**
         * 检测横竖屏幕 返回true 是横屏，否则是竖屏
         * 返回true 就是横屏 ，返回 false 是竖屏
         */
        static checkHorOrVec(): boolean;
        /**
         * 判断canvas节点是否横版
         */
        static isCanvasLand(): boolean;
        /**
         * //资源设计是 1920
         * 根据当前分辨率缩放节点
         * @param node
         */
        static setNodeResolutionSize(node: cc.Node): void;
        /**
         * 获取一个随机的哈希值，每次获取都是一个新的
         * 获取 crypto 生成的Uint8Array(16) ,然后转16位进制的 字符串
         * 如果拿到不到 window.crypto 那么用 Math.random 做相同的操作
        */
        static getUUid(): string;
        /**
         * 通过FingerprintJS 库获取指纹，固定的uuid识别码.
         * @param target 回调函数上下文
         * @param callFun 回调函数 callFun(visitorId:string){}
         */
        static getFingerprint(target: any, callFun: (visitorId: string) => void): void;
        static camelize(label: string): any;
        static camelize_prefix(prefix: string, label: string): string;
        static getRealBundle(bundleName: string, path?: string | string[]): string;
    }
    export type FilterCallback = (urlOruuid: string) => boolean;
    export class ResLeakChecker {
        private static _instance;
        private resFilter;
        private _checking;
        private _log;
        private constructor();
        static getInstance(): ResLeakChecker;
        setFilterCallback(cb: FilterCallback): void;
        checkFilter(urlOruuid: string): boolean;
        logLoad(uuid: string, use: string, stack?: string): void;
        logRelease(uuid: string, use: string): void;
        startCheck(): void;
        stopCheck(): void;
        getLog(): Map<string, Map<string, string>>;
        resetLog(): void;
        dump(showStack?: boolean): void;
    }
    export let resLeakChecker: ResLeakChecker;
    /**
     * 日志
     */
    export class zLog {
        /**所有不打印 */
        static LEVEL_NONE: number;
        /**打印trace信息 */
        static LEVEL_TRACE: number;
        /**打印日志信息 */
        static LEVEL_LOG: number;
        /**打印调试信息 */
        static LEVEL_DEBUG: number;
        /**打印警告信息 */
        static LEVEL_WARN: number;
        /**打印错误信息 */
        static LEVEL_ERROR: number;
        /**打印自定义信息 */
        static LEVEL_INFO: number;
        /**打印全部信息 */
        static LEVEL_ALL: number;
        private static _isInit;
        /**打印开关 */
        static enabled: boolean;
        private static _consoleTrace;
        private static _consoleLog;
        private static _consoleWarn;
        private static _consoleDebug;
        private static _consoleError;
        /**打印信息等级 */
        static level: number;
        /**替换原生方法 */
        static init(): void;
        static dispose(): void;
        private static insertHead;
        private static execLogFun;
        /**
         * 打印信息
         */
        static trace(message?: any, ...optionalParams: any[]): void;
        /**
         * 日志信息
         */
        static log(message?: any, ...optionalParams: any[]): void;
        /**
         * 调试信息
         */
        static debug(message?: any, ...optionalParams: any[]): void;
        /**
         * 警告信息
         */
        static warn(message?: any, ...optionalParams: any[]): void;
        /**
         * 错误信息
         */
        static error(message?: any, ...optionalParams: any[]): void;
        /**
         * 自定义信息
         */
        static info(message?: any, ...optionalParams: any[]): void;
        private static get isIE();
    }
    export class LogManager {
        private static instance;
        private _log;
        _display: boolean;
        static getInstance(): LogManager;
        private constructor();
        /**
         * 是否开启console.log
         */
        set enableConsoleLog(value: boolean);
        /**
         * 这个在build之后依然可以在 控制台中打印日志
         * @param arg 需要打印的内容
         */
        console(message?: any, ...optionalParams: any[]): void;
        /**
         * 这个只在Debug在控制台中打印日
         * @param arg 需要打印的内容
         */
        log(message?: any, ...optionalParams: any[]): void;
        /**
         * 这个只在Debug在控制台中打印错误日志
         * @param arg 需要打印的内容
         */
        error(message?: any, ...optionalParams: any[]): void;
        /**
         * 这个只在Debug在控制台中打印警告日志
         * @param arg 需要打印的内容
         */
        warn(message?: any, ...optionalParams: any[]): void;
        private recoder;
        displayAll(): void;
        getlog(): string[];
        sendserver(): void;
        savelocal(): void;
        clearlog(): void;
    }
    export let logMgr: LogManager;
    /** 自动释放配置 */
    export interface IAutoResInfo {
        asset: cc.Asset;
        use: string;
    }
    export class ResKeeper extends cc.Component {
        private _autoResInfo;
        /**
         * 完成一个Item的加载
         * @param item 资源对象实例
         * @param use 资源使用key
         */
        private _finishItem;
        /**
         * 缓存一个Item
         * @param item 资源对象实例
         * @param use 资源使用key
         */
        private _cacheItem;
        /**
         * 加载资源
         * @param paths 资源路径
         * @param type 资源类型
         * @param onProgress 加载进度回调函数
         * @param onComplete 加载完成回调函数
         * @param bundleName 包名
         * @param use 资源使用key
         */
        loadRes(paths: string | string[], type: typeof cc.Asset, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadRes(paths: string | string[], onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadRes(paths: string | string[], type: typeof cc.Asset, onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadRes(paths: string | string[], onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadRes(paths: string | string[], type: typeof cc.Asset, bundleName: string, use?: string): void;
        loadRes(paths: string | string[], bundleName: string, use?: string): void;
        /**
         * 加载资源
         * @param dir 文件夹路径
         * @param type 资源类型
         * @param onProgress 加载进度回调函数
         * @param onComplete 加载完成回调函数
         * @param bundleName 包名
         * @param use 资源使用key
         */
        loadResDir(dir: string, type: typeof cc.Asset, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadResDir(dir: string, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadResDir(dir: string, type: typeof cc.Asset, onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadResDir(dir: string, onComplete: CompleteCallback, bundleName: string, use?: string): void;
        loadResDir(dir: string, type: typeof cc.Asset, bundleName: string, use?: string): void;
        loadResDir(dir: string, bundleName: string, use?: string): void;
        /**
         * 加载远端资源
         * @param resArgs
         * @param url 远端地址
         * @param options 可选参数
         * @param onComplete 完成回调
         * @param use 资源使用key
         */
        loadRemote(url: string, options: Record<string, any>, onComplete: CompleteCallback, use?: string): void;
        loadRemote(url: string, options: Record<string, any>, use?: string): void;
        loadRemote(url: string, onComplete: CompleteCallback, use?: string): void;
        loadRemote(url: string, use?: string): void;
        /**
         * 组件销毁时自动释放所有keep的资源
         */
        onDestroy(): void;
        /**
         * 释放资源，组件销毁时自动调用
         */
        releaseAutoRes(): void;
        /**
         * 加入一个自动释放的资源
         */
        addAutoRes(resConf: IAutoResInfo): void;
    }
    export type ProgressCallback = (finish: number, total: number, item: any) => void;
    export type CompleteCallback = (err: Error, assets: any | any[]) => void;
    /**
     * LoadRes方法的参数结构
     * @param url 单个资源路径
     * @param urls 资源路径数组
     * @param type 资源类型
     * @param onProgress 进度回调
     * @param onComplete 完成回调
     * @param bundleName 包名
     * @param use 资源使用key
     */
    export class LoadResArgs {
        url?: string;
        urls?: string[];
        type?: typeof cc.Asset;
        onProgress?: ProgressCallback;
        onComplete?: CompleteCallback;
        bundleName?: string;
        use?: string;
    }
    /**
     * loadRemote方法的参数结构
     * @param url 单个资源路径
     * @param options 可选参数
     * @param onComplete 完成回调
     * @param use 资源使用key
     *
     */
    export class LoadRemoteArgs {
        url?: string;
        options?: Record<string, any>;
        onComplete?: CompleteCallback;
        use?: string;
    }
    /**
     * preloadResMix方法的参数结构（url、urls、dir互斥，择一填充）
     * @param url 单个资源路径
     * @param urls 资源路径数组
     * @param dir 资源目录
     * @param type 资源类型
     * @param bundleName 包名
     */
    export class LoadResMixArgs {
        url?: string;
        urls?: string[];
        dir?: string;
        type?: typeof cc.Asset;
        bundleName?: string;
    }
    export interface ICacheResInfo {
        bundleName: string;
        uses: Set<string>;
    }
    export class ResUtils {
        /**
         * ResLoader 加载接口参数预处理
         */
        static makeLoadResArgs(): LoadResArgs;
        /**
         * ResLoaderManager.loadRemote 方法的参数预处理
         */
        static makeLoadRemoteArgs(): LoadRemoteArgs;
        /**
         * 从目标节点或其父节点递归查找一个资源挂载组件
         * @param attachNode 目标节点
         * @param autoCreate 当目标节点找不到ResKeeper时是否自动创建一个
         */
        static getResKeeper(attachNode: cc.Node, autoCreate?: boolean): ResKeeper;
        /**
         * 赋值srcAsset（通过框架接口动态加载），并使其跟随targetNode自动释放，用法如下
         * mySprite.spriteFrame = AssignWith(otherSpriteFrame, mySpriteNode);
         * @param srcAsset 用于赋值的资源，如cc.SpriteFrame、cc.Texture等等
         * @param targetNode
         * @param autoCreate
         */
        static assignWith(srcAsset: any, targetNode: cc.Node, autoCreate?: boolean): any;
        static dumpRes(): void;
        static dumpBundle(): void;
    }
    export class ResLoader {
        private static _instance;
        private _usedId;
        private _resMap;
        private constructor();
        static getInstance(): ResLoader;
        destroy(): void;
        dump(): void;
        /**
         * 生成一个资源使用Key
         * @param where 在哪里使用，如Scene、UI、Pool
         * @param who 使用者，如Login、UIHelp...
         * @param why 使用原因，自定义...
         */
        makeUseKey(where: string, who?: string, why?: string): string;
        /**
         * 自动生成一个唯一的资源id
         */
        nextUseKey(): string;
        /**
         * 获取资源缓存信息
         * @param uuid 资源uuid
         */
        getCacheResInfo(uuid: string): ICacheResInfo;
        /**
         * 完成一个Item的加载
         * @param item 资源对象实例
         * @param bundleName 包名
         * @param use 资源使用key
         * @param stack 堆栈信息
         */
        private _finishItem;
        /**
         * 缓存一个Item
         * @param item 资源对象实例
         * @param bundleName 包名
         * @param use 资源使用key
         * @param stack 堆栈信息
         */
        private _cacheItem;
        /**
         * 为某资源增加一个新的use
         * @param key 资源的uuid
         * @param use 新的use字符串
         */
        addUse(key: string, use: string): boolean;
        /**
         * 加载单个或一组资源
         * @param resArgs
         * @param paths 资源路径（数组）
         * @param type 资源类型
         * @param onProgress 加载进度回调函数
         * @param onComplete 加载完成回调函数
         * @param bundleName 包名
         * @param use 资源使用key
         */
        loadRes(resArgs: LoadResArgs): void;
        loadRes(paths: string | string[], type: typeof cc.Asset, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadRes(paths: string | string[], onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadRes(paths: string | string[], type: typeof cc.Asset, onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadRes(paths: string | string[], onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadRes(paths: string | string[], type: typeof cc.Asset, bundleName: string, use: string): void;
        loadRes(paths: string | string[], bundleName: string, use: string): void;
        /**
         * 预加载单个或一组资源
         * @param resArgs
         * @param paths 资源路径（数组）
         * @param type 资源类型
         * @param onProgress 加载进度回调函数
         * @param onComplete 加载完成回调函数
         * @param bundleName 包名
         */
        preloadRes(resArgs: LoadResArgs): void;
        preloadRes(paths: string | string[], type: typeof cc.Asset, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string): void;
        preloadRes(paths: string | string[], onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string): void;
        preloadRes(paths: string | string[], type: typeof cc.Asset, onComplete: CompleteCallback, bundleName: string): void;
        preloadRes(paths: string | string[], onComplete: CompleteCallback, bundleName: string): void;
        preloadRes(paths: string | string[], type: typeof cc.Asset, bundleName: string): void;
        preloadRes(paths: string | string[], bundleName: string): void;
        /**
         * 加载目标文件夹资源
         * @param resArgs
         * @param dir 文件夹路径
         * @param type 资源类型
         * @param onProgress 加载进度回调函数
         * @param onComplete 加载完成回调函数
         * @param bundleName 包名
         * @param use 资源使用key
         */
        loadResDir(resArgs: LoadResArgs): void;
        loadResDir(dir: string, type: typeof cc.Asset, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadResDir(dir: string, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadResDir(dir: string, type: typeof cc.Asset, onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadResDir(dir: string, type: typeof cc.Asset, bundleName: string, use: string): void;
        loadResDir(dir: string, onComplete: CompleteCallback, bundleName: string, use: string): void;
        loadResDir(dir: string, bundleName: string, use: string): void;
        /**
         * 预加载目标文件夹资源
         * @param resArgs
         * @param dir 文件夹路径
         * @param type 资源类型
         * @param onProgress 加载进度回调函数
         * @param onComplete 加载完成回调函数
         * @param bundleName 包名
         */
        preloadResDir(resArgs: LoadResArgs): void;
        preloadResDir(dir: string, type: typeof cc.Asset, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string): void;
        preloadResDir(dir: string, onProgress: ProgressCallback, onComplete: CompleteCallback, bundleName: string): void;
        preloadResDir(dir: string, type: typeof cc.Asset, onComplete: CompleteCallback, bundleName: string): void;
        preloadResDir(dir: string, type: typeof cc.Asset, bundleName: string): void;
        preloadResDir(dir: string, onComplete: CompleteCallback, bundleName: string): void;
        preloadResDir(dir: string, bundleName: string): void;
        /**
         * 预加载一堆资源
         * @param res 混合资源结构体
         * @param onProgress 加载进度回调（因不可控原因，进度存在回跳可能，需自行处理）
         * @param onComplete 加载完成回调（res数组任意元素完成预载入都会回调）
         */
        preloadResMix(res: LoadResMixArgs[], onProgress: ProgressCallback, onComplete: CompleteCallback): void;
        /**
         * 加载远端资源
         * @param resArgs
         * @param url 远端地址
         * @param options 可选参数
         * @param onComplete 完成回调
         * @param use 资源使用key
         */
        loadRemote(resArgs: LoadRemoteArgs): void;
        loadRemote(url: string, options: Record<string, any>, onComplete: CompleteCallback, use: string): void;
        loadRemote(url: string, options: Record<string, any>, use: string): void;
        loadRemote(url: string, onComplete: CompleteCallback, use: string): void;
        loadRemote(url: string, use: string): void;
        /**
         * 直接通过asset释放资源（如cc.Prefab、cc.SpriteFrame）
         * @param asset 要释放的asset
         * @param use 资源使用key
         */
        releaseAsset(asset: any, use: string): void;
        /**
         * 释放一组asset
         * @param assets 要释放的asset数组
         * @param use 资源使用key
         */
        releaseArray(assets: cc.Asset[], use: string): void;
        /**
         * 释放包中所有资源
         * @param bundleName 包名，不填则删除全部网络资源
         */
        releaseAll(bundleName?: string): void;
    }
    export let resLoader: ResLoader;
    export class NodeUiConfig extends cc.Component {
        controlActive: boolean;
        controlSpriteFrame: boolean;
        controlSize: boolean;
        controlOpacity: boolean;
        ui_config: string;
    }
    /**
     * 控制器插件
     */
    export class MController extends cc.Component {
        static inheritedAttrList: {
            "cc.Node": {
                x: number;
                y: number;
                scaleX: number;
                scaleY: number;
                anchorX: number;
                anchorY: number;
                width: number;
                height: number;
                active: boolean;
                opacity: number;
                color: {
                    r: number;
                    g: number;
                    b: number;
                };
                angle: number;
            };
            "cc.Label": {
                enabled: boolean;
                horizontalAlign: number;
                verticalAlign: number;
                overflow: number;
                fontSize: number;
            };
            "cc.Widget": {
                isAlignBottom: boolean;
                isAlignLeft: boolean;
                isAlignRight: boolean;
                isAlignTop: boolean;
                isAlignHorizontalCenter: boolean;
                isAlignVerticalCenter: boolean;
                _isAbsBottom: boolean;
                _isAbsHorizontalCenter: boolean;
                _isAbsLeft: boolean;
                _isAbsRight: boolean;
                _isAbsTop: boolean;
                _isAbsVerticalCenter: boolean;
                top: number;
                bottom: number;
                left: number;
                right: number;
                horizontalCenter: number;
                verticalCenter: number;
                enabled: boolean;
            };
            "cc.Sprite": {
                enabled: boolean;
                spriteFrame: {};
            };
            "cc.Layout": {
                enabled: boolean;
                type: number;
                resizeMode: number;
                paddingBottom: number;
                paddingLeft: number;
                paddingRight: number;
                paddingTop: number;
                spacingX: number;
                spacingY: number;
                horizontalDirection: number;
                verticalDirection: number;
                startAxis: number;
                affectedByScale: boolean;
            };
            "cc.ScrollView": {
                enabled: boolean;
                horizontal: boolean;
                vertical: boolean;
                inertia: boolean;
                brake: number;
                elastic: boolean;
                bounceDuration: number;
            };
            "cc.BoxCollider": {
                enabled: boolean;
                tag: number;
                offset: {
                    x: number;
                    y: number;
                };
                size: {
                    width: number;
                    height: number;
                };
            };
            "cc.CircleCollider": {
                enabled: boolean;
                tag: number;
                offset: {
                    x: number;
                    y: number;
                };
                radius: number;
            };
            "cc.PolygonCollider": {
                enabled: boolean;
                threshold: number;
                tag: number;
                offset: {
                    x: number;
                    y: number;
                };
                points: {
                    x: number;
                    y: number;
                }[];
            };
        };
        protected m_saveConfig: boolean;
        get saveConfig(): boolean;
        set saveConfig(value: boolean);
        protected _stateIndex: number;
        get stateIndex(): number;
        set stateIndex(value: number);
        start(): void;
        private setEnumAttr;
        protected readChildrenProp(node: cc.Node): void;
        /**
         * 遍历读取属性
         * @param node
         */
        protected readNodeProp(node: cc.Node): void;
        /**
         * 遍历设置属性
         */
        protected setChildrenProp(node: cc.Node): void;
        protected changeSpriteFrame(comp: cc.Sprite, sobj: any): void;
        protected delaySetWidget(node: cc.Node, cfgObj: any): void;
        protected resetLayoutChildPosition(node: cc.Node): void;
        /**
         * 更新配置
         */
        protected updateConfig(): void;
        /**
         * 更新页面布局
         */
        protected updateLayout(): void;
        protected isExistFileByUuid(uuid: any): any;
    }
    export type EventManagerCallFunc = (eventName: string, eventdata?: any, ...optionalParams: any[]) => void;
    export interface CallBackTarget {
        callBack: EventManagerCallFunc;
        target: any;
        order: number;
    }
    export class EventManager {
        private static instance;
        static getInstance(): EventManager;
        static destroy(): void;
        private constructor();
        /**
         * 消息执行顺序 排序
         * @param a
         * @param b
         */
        private sortListener;
        private _eventListeners;
        private getEventListenersIndex;
        addEventListener(eventName: string, callBack: EventManagerCallFunc, target?: any, order?: number): boolean;
        setEventListener(eventName: string, callBack: EventManagerCallFunc, target?: any): boolean;
        removeEventListener(eventName: string, callBack: EventManagerCallFunc, target?: any): void;
        raiseEvent(eventName: string, ...eventdata: any[]): void;
    }
    export type NetData = (string | ArrayBufferLike | Blob | ArrayBufferView);
    export type NetCallFunc = (cmd: number, data: any) => void;
    export interface CallbackObject {
        /**
         * 回调对象，不为null时调用target.callback(xxx)
         */
        target: any;
        /**
         * 回调函数
         */
        callback: NetCallFunc;
    }
    export interface RequestObject {
        /**
         * 是否需要重发，在断线之前发送了，重连上来之后再次重发
         */
        resend: boolean;
        /**
         * 请求的Buffer
         */
        buffer: NetData;
        /**
         * 发送指令 （错误码返回，不会走响应指令，只能用发送指令判定）
         */
        rqestCmd: number;
        /**
         * 等待响应指令
         */
        rspCmd: number;
        /**
         *  等待响应的回调对象
         */
        rspObject: CallbackObject;
    }
    export interface IProtocolHelper {
        getHeadlen(): number;
        getHearbeat(): NetData;
        getPackageLen(msg: NetData): number;
        checkPackage(msg: NetData): boolean;
        getPackageId(msg: NetData): number[];
    }
    export class DefStringProtocol implements IProtocolHelper {
        getHeadlen(): number;
        getHearbeat(): NetData;
        getPackageLen(msg: NetData): number;
        checkPackage(msg: NetData): boolean;
        getPackageId(msg: NetData): number[];
        getBuffData(msg: any): any;
    }
    export interface ISocket {
        onConnected: (event: any) => void;
        onMessage: (msg: NetData) => void;
        onError: (event: any) => void;
        onClosed: (event: any) => void;
        connect(options: any): any;
        send(buffer: NetData): any;
        close(code?: number, reason?: string): any;
    }
    export interface INetworkTips {
        connectTips(isShow: boolean): void;
        reconnectTips(isShow: boolean): void;
        requestTips(isShow: boolean): void;
        /**
         * 网络异常，导致网络关闭 弹出的提示框
         * @param isShow 是否展示
         * @param netnode 当前网络节点，如果isShow false 可以传null
         * @param closeState 关闭状态值 是服务器推送的 errorcode ，如果isShow false 可以传null
         */
        netCloseTips(isShow: boolean, netnode: any, closeState: number): any;
    }
    /**
     * 协议接口
     */
    export interface IProtoMess {
        /**
         * 协议大头
         */
        cmd: number;
        /**
        * 协议小头
        */
        com: number;
        /**
         * 协议数据
         */
        proBuff: any;
    }
    /**
     * message数据类型兼容接口
     */
    export interface ProtoType<T> {
        verify(message: {
            [k: string]: any;
        }): (null | string);
        create(properties?: T): T;
        encode(message: T, writer?: protobuf.Writer): protobuf.Writer;
        decode(reader: (protobuf.Reader | Uint8Array), length?: number): any;
    }
    type ExecuterFunc = (callback: CallbackObject, buffer: NetData) => void;
    type BoolFunc = () => boolean;
    export enum NetTipsType {
        Connecting = 0,
        ReConnecting = 1,
        Requesting = 2
    }
    export enum NetNodeState {
        Closed = 0,
        Connecting = 1,
        Checking = 2,
        Working = 3
    }
    export interface NetConnectOptions {
        host?: string;
        port?: number;
        url?: string;
        autoReconnect?: number;
    }
    export class NetNode {
        protected _connectOptions: NetConnectOptions;
        protected _autoReconnect: number;
        protected _isSocketInit: boolean;
        protected _isSocketOpen: boolean;
        protected _state: NetNodeState;
        protected _socket: ISocket;
        protected _closeCode: number;
        protected _networkTips: INetworkTips;
        protected _protocolHelper: IProtocolHelper;
        protected _connectedCallback: Function;
        protected _disconnectCallback: BoolFunc;
        protected _callbackExecuter: ExecuterFunc;
        protected _keepAliveTimer: any;
        protected _receiveMsgTimer: any;
        protected _reconnectTimer: any;
        protected _heartTime: number;
        protected _receiveTime: number;
        protected _reconnetTimeOut: number;
        protected _requests: RequestObject[];
        protected _listener: {
            [key: number]: CallbackObject[];
        };
        protected _urls: string[];
        protected _curUrlIndex: number;
        protected _isUrlEffect: boolean;
        protected _heartBeatReqFunc: Function;
        /********************** 网络相关处理 *********************/
        init(socket: ISocket, protocol: IProtocolHelper, networkTips?: any, execFunc?: ExecuterFunc): void;
        setUrls(urls: string[]): void;
        getUrls(): string[];
        nextUrl(): any;
        connect(options: NetConnectOptions): boolean;
        protected initSocket(): void;
        protected updateNetTips(tipsType: NetTipsType, isShow: boolean): void;
        protected onConnected(event: any): void;
        protected onChecked(): void;
        protected onMessage(msg: any): void;
        protected onError(event: any): void;
        /**
         * 网络关闭原因处理附带了关闭原因， 需要加工下 arraybuffer ,不然解析值有问题，
         * @param reason 网络关闭 断开原因
         */
        protected closeReasonHandle(reason: string): ArrayBuffer;
        protected onClosed(event: any): void;
        private closeTips;
        reconnect(): void;
        close(code?: number, reason?: string): void;
        closeSocket(code?: number, reason?: string): void;
        send(buf: NetData, _resend?: boolean, force?: boolean): boolean;
        request(buf: NetData, _rspCmd: number | number[], rspObject: CallbackObject, _resend?: boolean, showTips?: boolean, force?: boolean): void;
        requestUnique(buf: NetData, _rspCmd: number | number[], rspObject: CallbackObject, _resend?: boolean, showTips?: boolean, force?: boolean): boolean;
        setConectCallback(callback: Function): void;
        setDisconnectCallback(callback: BoolFunc): void;
        getProtoHelper(): IProtocolHelper;
        /********************** 回调相关处理 *********************/
        /** respon 响应指令 二维转化成一维 */
        private responCmdTransform;
        /** request 发送指令 二维转化成一维 */
        private requestCmdTransform;
        setResponeHandler(cmd: number | number[], callback: NetCallFunc, target?: any): boolean;
        addResponeHandler(cmd: number | number[], callback: NetCallFunc, target?: any): boolean;
        removeResponeHandler(cmd: number | number[], callback: NetCallFunc, target?: any): void;
        cleanListeners(cmd?: number | number[]): void;
        protected getNetListenersIndex(cmd: number | number[], rspObject: CallbackObject): number;
        /********************** 心跳、超时相关处理 *********************/
        protected resetReceiveMsgTimer(): void;
        protected startHeartBeat(): void;
        setHeartBeatReqFunc(func: Function): void;
        protected clearTimer(): void;
        isAutoReconnect(): boolean;
        /**
         * 拒绝重连，一般是异地登陆，账号异常等导致不重连
         * @param errorCode 服务器推送的错误码
         */
        rejectReconnect(errorCode?: number): void;
        resetAutoReconnect(): void;
        /**
         * 清理没有回复的resp
         * 部分协议错误码那边统一的处理，没有回复对应的协议
         * cmd ccmd 是发送指令，错误码里的result.cmd 是发送指令
         */
        clearNotRespMess(cmd: number, ccmd: number): void;
        getState(): number;
        setCloseErrorCode(code: number): void;
        isSocketClose(): boolean;
    }
    export class NetManager {
        private static _instance;
        protected _channels: {
            [key: number]: NetNode;
        };
        static getInstance(): NetManager;
        setNetNode(newNode: NetNode, channelId?: number): void;
        removeNetNode(channelId: number): void;
        connect(options: NetConnectOptions, channelId?: number): boolean;
        /**
         * 调用Node发送
         * @param buf           发送给服务器的数据包
         * @param resend        重连之后 是否重发
         * @param force         强制发送，即使在 连接中或者checking 都发送
         * @param channelId     渠道id ，用于不同的socket节点
         */
        send(buf: NetData, resend?: boolean, force?: boolean, channelId?: number): boolean;
        /**
         * // 发起请求，并在在结果返回时调用指定好的回调函数
         * @param buf           发送给服务器的数据包
         * @param rspCmd        编号用于回调函数识别，可以是单个 和数组，如果是数组   [ respon接收大模块id， respon接收小模块id ， request发出的小模块id]
         * @param rspObject     回调函数对象上下文
         * @param resend        重连之后 是否重发
         * @param showTips      提示对象，可以自己定制提示对象
         * @param force         强制发送
         * @param channelId     渠道id ，用于不同的socket节点
         */
        request(buf: NetData, rspCmd: number | number[], rspObject: CallbackObject, resend?: boolean, showTips?: boolean, force?: boolean, channelId?: number): void;
        /**
         *  同request，但在request之前会先判断队列中是否已有rspCmd，如有重复的则直接返回
         * @param buf           发送给服务器的数据包
         * @param rspCmd        编号用于回调函数编号识别
         * @param rspObject     回调函数对象上下文
         * @param resend        重连之后 是否重发
         * @param showTips      提示对象，可以自己定制提示对象
         * @param force         强制发送
         * @param channelId     渠道id ，用于不同的socket节点
         */
        requestUnique(buf: NetData, rspCmd: number, rspObject: CallbackObject, resend?: boolean, showTips?: boolean, force?: boolean, channelId?: number): boolean;
        close(code?: number, reason?: string, channelId?: number): void;
        /**
         * getNodeNode 获取socket节点
         * @param channelId  sockect渠道id
         *
         */
        getNetNode(channelId?: number): NetNode;
        /**
         * 获取连接状态
         * @param channelId sockect渠道id
         */
        getState(channelId?: number): number;
        socketIsClose(channelId?: number): boolean;
    }
    export class PageHideShow {
        private static instance;
        private comeinOnce;
        private pageShow;
        private setimeId;
        constructor();
        static getInstance(): PageHideShow;
        Init(): void;
        onDisable(): void;
        private PauseCallBack;
        private RestoreCallBack;
        PageIsShow(): boolean;
    }
    export type TaskFinishCallback = () => void;
    export type TaskCallback = (finishCb: TaskFinishCallback) => void;
    export class TaskQueue {
        private _curTask;
        private _taskQueue;
        pushTask(task: TaskCallback, priority?: number): void;
        clearTask(): void;
        private executeNextTask;
    }
    export class TaskManager {
        private static _instance;
        private _taskQueues;
        static getInstance(): TaskManager;
        private constructor();
        pushTask(task: TaskCallback, priority?: number): void;
        pushTaskByTag(task: TaskCallback, tag: number, priority?: number): void;
        clearTaskQueue(tag?: number): void;
        clearAllTaskQueue(): void;
        private getTaskQueue;
    }
    /**
     * 布局类，提供了layout和widget布局设置,以及根据当前分辨率缩放节点的方法
     */
    export class Utils {
        static get isLandscape(): boolean;
        /**
         * 设置横向布局
         * @param node
         * @param spacingX 相邻节点的水平间隔
         * @param containerHeight 容器高度 默认设为第一个子元素高度
         * @param direction 排列子点方向
         * @param resizeMode 缩放模式
         */
        static setHorizontalLayout(node: cc.Node, spacingX?: number, containerHeight?: number, direction?: number, resizeMode?: number): void;
        /**
        * 设置纵向布局
        * @param node
        * @param spacingY 相邻节点的垂直间隔
        * @param containerWidth 容器宽度 默认为第一个子节点宽度
        * @param direction 排列子点方向
        * @param resizeMode 缩放模式
        */
        static setVerticalLayout(node: cc.Node, spacingY?: number, containerWidth?: number, direction?: number, resizeMode?: number): void;
        /**
         * 根据配置设置Layout
         * @param node 要设置的节点
         * @param data 配置数据(例:{
                "landscape": {
                    "spacingY": 30,
                    "spacingX": 0,
                },
                "portrait": {
                    "spacingX": 30,
                    "spacingY": 0,
                }
            })
         */
        static setLayout(node: cc.Node, data: any): void;
        /**
         * 根据配置设置widget
         * @param node
         * @param data 配置数据(例: {
                "landscape": {
                    "top": 180,
                    "left": 50
                },
                "portrait": {
                    "top": 860,
                    "left": 50
                },
                "horizontalCenter":0,
                "verticalCenter":0
            })
         */
        static setWidget(node: cc.Node, data: any, target?: cc.Node): void;
        private static openWidgetProperty;
        static cloneObj(obj: any): {};
        /**
         * 文件是否存在
         * @param filePath 文件路径
         * @param bundleName bundleName名
         * @returns
         */
        static isFileExist(filePath: string, bundleName?: string): boolean;
    }
    /**
     * 多语言配置
     */
    /**
     * 语种
     * @param ZH 简中
     * @param EN 英文
     * @param JA 日语
     * @param KO 韩语
     * @param TH 泰语
     * @param VI 越南语
     * @param PT 葡语
     * @param ID 印尼语
     * @param ES 西班牙语
     * @param RU 俄语
     * @param DE 德语
     * @param sv 瑞典文
     * @param IT 意大利
     * @param DA 丹麦文
     * @param NL 荷兰文
     * @param FI 芬兰
     * @param FR 法文
     * @param NO 挪威
     * @param PL 波兰
     * @param RO 罗马尼亚
     * @param TR 土耳其
     * @param MY 缅甸
     */
    export enum LanguageType {
        ZH = "zh",
        EN = "en",
        JA = "ja",
        KO = "ko",
        TH = "th",
        VI = "vi",
        PT = "pt",
        ID = "id",
        ES = "es",
        RU = "ru",
        DE = "de",
        SV = "sv",
        IT = "it",
        DA = "da",
        NL = "nl",
        FI = "fi",
        FR = "fr",
        NO = "no",
        PL = "pl",
        RO = "ro",
        TR = "tr",
        MY = "my"
    }
    /**
     * 语种文件配置
     * @param bundleName 文件位于哪一个bundle下
     * @param path 文件于bundle下的相对路径
     */
    export interface ILangFileConf {
        bundleName?: string;
        path: string;
    }
    /**
     * 多语言json配置 值
     */
    export interface IJsonPngValue {
        /**相对于bundle 路径 */
        path: string;
        /** bundle名称 */
        bundle: string;
        /** 图集名称 */
        atlas: string;
        /** 精灵帧名称 */
        frame: string;
        /** 如果仅部分语言有资源，则填写此项*/
        onlyInLanguages: string[];
    }
    export class BaseLangConf {
        private static _instance;
        private _langCf;
        static getInstance(): BaseLangConf;
        /**
         * 合并配置至该处
         * @param conf
         */
        mergeLangConf(conf: {
            [key: number]: ILangFileConf[];
        }): void;
        getLangConf(): {
            [key: string]: ILangFileConf[];
        };
        private constructor();
    }
    export class UIAnimation extends cc.Component {
        execAni_open(finish: Function): void;
        execAni_close(finish: Function): void;
    }
    /**
     * 界面基础类
     *
     * 1. 快速关闭与屏蔽点击的选项配置
     * 2. 界面缓存设置（开启后界面关闭不会被释放，以便下次快速打开）
     * 3. 界面显示类型配置
     *
     * 4. 加载资源接口（随界面释放自动释放），this.loadRes(xxx)
     * 5. 由UIManager释放
     *
     * 5. 界面初始化回调（只调用一次）
     * 6. 界面打开回调（每次打开回调）
     * 7. 界面打开动画播放结束回调（动画播放完回调）
     * 8. 界面关闭回调
     * 9. 界面置顶回调
     */
    /**
* 界面展示类型
* @param UI_FULLSCREEN 全屏显示，全屏界面使用该选项可获得更高性能
* @param UI_ADDITION 叠加显示，性能较差
* @param UI_SINGLE 单界面显示，只显示当前界面和背景界面，性能较好
*/
    export enum UIShowTypes {
        UI_FULLSCREEN = 0,
        UI_ADDITION = 1,
        UI_SINGLE = 2
    }
    export class UIView extends ResKeeper {
        private _quickClose;
        get quickClose(): boolean;
        private _cache;
        get cache(): boolean;
        private _showType;
        get showType(): UIShowTypes;
        private _uiId;
        get uiId(): number;
        /**
         * 当界面被创建时回调，生命周期内只调用一次
         * @param uiId 界面id
         * @param uiConf 界面配置
         */
        initProperty(uiId: number, uiConf: IUIConf): void;
        /**
         * 当界面被创建时回调，生命周期内只调用一次
         * @param args 可变参数
         */
        init(...args: any[]): void;
        /**
         * 当界面被打开时回调，每次调用open时回调
         * @param fromUI 从哪个UI打开的
         * @param args 可变参数
         */
        onOpen(fromUI: number, ...args: any[]): void;
        /**
         * 每次界面open动画播放完毕时回调
         */
        onOpenAniOver(): void;
        /**
         * 当界面被关闭时回调，每次调用close时回调
         * 返回值传递给下一个界面
         */
        onClose(): any;
        /**
         * 当界面被置顶时回调，open时不会调用
         * @param preId 前一个界面id
         * @param args 可变参数
         */
        onTop(preId: number, ...args: any[]): void;
    }
    /**
* UI栈结构体
* @param uiId 界面id
* @param uiView UIView对象
* @param uiArgs 附加参数
* @param preventNode 遮罩层
* @param zOrder 层级
* @param isClose 是否关闭
* @param resToClear 待清理资源数组（预留）
* @param resCache 带缓冲资源数组（预留）
*/
    export interface IUIInfo {
        uiId: number;
        uiView: UIView;
        uiArgs: any;
        preventNode?: cc.Node;
        zOrder?: number;
        isClose?: boolean;
        resToClear?: string[];
        resCache?: string[];
    }
    /**
     * UI配置结构体
     * @param bundleName 包名，默认'resources'
     * @param path prefab路径
     * @param preventTouch 是否需要创建遮罩层，默认 false
     * @param preventKeyboard 是否拦截按键，默认 false（行为意识，不做实际事件拦截，使用 UIManager.getInstance().preventKeyboard 判定当前整体状态）
     * @param quickClose 是否支持快速关闭，默认 false
     * @param cache 界面关闭是否缓存，默认 false
     * @param showType 界面展示类型，默认 UIShowTypes.UI_SINGLE
     * @param openAni 界面开启动画，默认 UIDefAni.UI_OPEN
     * @param closeAni 界面关闭动画，默认 UIDefAni.UI_CLOSE
     * @param zOrder 层级
     * @param loadingAni 是否显示加载loading动画 默认 true
     * @param preventTouchOpacity 遮罩透明度，0~255,默认 180
     */
    export interface IUIConf {
        /**bundle */
        bundleName?: string;
        /**prefab路径 */
        path: string;
        /**是否需要创建遮罩层，默认 false */
        preventTouch?: boolean;
        /**是否拦截按键，默认 false（行为意识，不做实际事件拦截，使用 UIManager.getInstance().preventKeyboard 判定当前整体状态） */
        preventKeyboard?: boolean;
        /**是否支持快速关闭，默认 false */
        quickClose?: boolean;
        /**界面关闭是否缓存，默认 false */
        cache?: boolean;
        /**界面展示类型，默认 UIShowTypes.UI_SINGLE */
        showType?: UIShowTypes;
        /**界面开启动画，默认 UIDefAni.UI_OPEN */
        openAni?: string;
        /**界面关闭动画，默认 UIDefAni.UI_CLOSE */
        closeAni?: string;
        /**层级 */
        zOrder?: number;
        /**是否显示加载loading动画 默认 true */
        loadingAni?: boolean;
        /**遮罩透明度，0~255,默认 180 */
        preventTouchOpacity?: number;
        /**是否手动调用隐藏loading*/
        isHideLoadingOnCb?: boolean;
        /**显示加载延时*/
        showLoadingDelayTime?: number;
    }
    /**
     * 附加参数基类(按需继承，非必要)
     * @param openType 界面打开类型，'quiet'时忽略open动画配置，不播动画直接打开
     */
    export interface IUIArgs {
        openType?: 'quiet' | 'other';
    }
    /**
     * UI默认动画
     * @param UI_NONE 无动画
     * @param UI_OPEN 打开
     * @param UI_CLOSE 关闭
     */
    export enum UIDefAni {
        UI_NONE = "uiNone",
        UI_OPEN = "uiOpen",
        UI_CLOSE = "uiClose"
    }
    export class UIManager {
        private static _instance;
        private _rootNode;
        private _backgroundUI;
        private _isClosing;
        private _isOpening;
        private _uiCache;
        private _uiStack;
        private _uiOpenQueue;
        private _uiCloseQueue;
        private _uiConf;
        private _pureWhiteSPF;
        private _pureWhiteLoading;
        private _preventKeyboard;
        private _loadingIconSPF;
        private _loadingIconLoading;
        private _loadingMaskNode;
        private _loadingIconNode;
        private _loadingEffectNode;
        private _loadingEffectMask;
        private constructor();
        static getInstance(): UIManager;
        getPureWhiteSPF(): cc.SpriteFrame;
        private getLoadingIcon;
        setRootNode(node: cc.Node): void;
        getRootNode(): cc.Node;
        setBackgroundUI(count: number): void;
        /**
         * 初始化所有UI配置对象
         * @param conf 配置对象
         */
        initUIConf(conf: {
            [key: number]: IUIConf;
        }): void;
        /**
         * 设置或覆盖某界面配置
         * @param uiId 待设置界面id
         * @param conf 配置对象
         */
        setUIConf(uiId: number, conf: IUIConf): void;
        /**
         * 添加防触摸层
         * @param zOrder 屏蔽层层级
         */
        private _preventTouch;
        private showLoadingIcon;
        /**隐藏loading加载转圈动画 */
        hideLoadingIcon(): void;
        /**
         * 主动显示加载特效
         */
        showLoadingEffect(): void;
        /**
         * 主动隐藏加载特效
         */
        hideLoadingEffect(): void;
        private _autoExecNextUI;
        /**
         * 自动检测动画组件及特定动画，如存在则播放，无论动画是否播放，都执行回调
         * @param uiView ui对象
         * @param aniName 动画名
         * @param aniOverCallback 动画播放完成回调
         */
        private _autoExecAnimation;
        /**
         * 自动检测资源预加载组件，如果存在则加载完成后调用onComplete，否则直接调用
         * @param uiView ui对象
         * @param onComplete 资源加载完成回调
         */
        private _autoLoadRes;
        private _sortUIStack;
        private _updateUI;
        private _checkKeyboard;
        get preventKeyboard(): boolean;
        private _getOrCreateUI;
        private _loadUI;
        /**
         * 打开界面并添加进界面栈
         * @param uiId _uiConf 中的key值
         * @param uiArgs 附加参数
         * @param onProgress 进程回调
         */
        open(uiId: number, uiArgs?: any, onProgress?: ProgressCallback): void;
        /**
         * UI被打开时回调，对UI进行初始化设置，刷新其他界面的显示，并根据
         * @param uiId 哪个界面被打开了
         * @param uiView 界面对象
         * @param uiInfo 界面栈对应的信息结构
         * @param uiArgs 界面初始化参数
         */
        private _onUIOpen;
        /**
         * 关闭界面
         * @param closeUI ui对象（不填则关闭栈顶ui）
         */
        close(closeUI?: UIView): void;
        /**
         * 关闭界面，一直关闭到顶部为uiId的界面，为避免循环打开UI导致UI栈溢出
         * @param uiId 要关闭到的uiId，关闭其顶部UI
         * @param uiArgs 附加参数
         */
        closeToUI(uiId: number, uiArgs: any): void;
        /**
         * 关闭界面
         * @param uiId 界面id（不填则关闭栈顶ui）
         */
        closeByUIID(uiId?: number): boolean;
        closeAll(): void;
        clearCache(): void;
        replace(uiId: number, uiArgs?: any): void;
        isTopUI(uiId: number): boolean;
        getUIIndex(uiId: number): number;
        getUI(uiId: number): UIView;
        getTopUI(): UIView;
    }
    export let uiMgr: UIManager;
    /**
     * UI界面配置
     */
    /**
 * UIID(base库 0-199，core库 200-399，slot库 400-599，hunter库 600-799，arcade库 800-999，子项目 >= 1000)
 * @param UI_DIALOG 模态对话框
 */
    export enum BASEUIID {
        UI_DIALOG = 0,
        UI_KEYBOARD = 1
    }
    export class BaseUIConf {
        private static _instance;
        private _uicf;
        static getInstance(): BaseUIConf;
        static BASELAYER_BG: number;
        static BASELAYER_GAME: number;
        static BASELAYER_UI: number;
        static BASELAYER_EFFECT: number;
        static BASELAYER_LOADING: number;
        static BASELAYER_TIPS: number;
        /**
         * 合并配置至该处
         * @param conf
         */
        mergeUIConf(conf: {
            [key: number]: IUIConf;
        }): void;
        getUICF(): {
            [key: number]: IUIConf;
        };
        private constructor();
    }
    export class ListViewItem extends cc.Component {
        protected _index: number;
        protected _data: any;
        protected _target: any;
        protected _extParams: any;
        /**
         * 子类实现此方法
         * @param index 索引
         * @param data 数据
         * @param params 附加数据（预留参数）
         */
        updateItem(index: number, data: any, params?: any): void;
        bindTarget(target: any): void;
        get index(): number;
        get data(): any;
        getExtParams(): any;
        setExtParams(params: any): void;
    }
    enum Direction {
        Horizontal = 0,
        Vertical = 1
    }
    export enum ListViewEvent {
        DATA_RUNOUT = 0
    }
    export interface IListViewCallback {
        callback: (sender: any, event: any) => void;
        target?: any;
    }
    /**
     * ListView参数
     * @param list 列表数据
     * @param eventCb ListView事件回调
     * @param itemTemplate ListViewItem使用模板
     */
    export interface IListViewArgs {
        list?: any[];
        eventCb?: IListViewCallback;
        itemTemplate?: cc.Prefab;
    }
    export class ListView extends cc.Component {
        scrollView: cc.ScrollView;
        itemTemplate: cc.Prefab;
        spawnCount: number;
        spacingX: number;
        spacingY: number;
        colNum: number;
        rowNum: number;
        paddingLeft: number;
        paddingRight: number;
        paddingTop: number;
        paddingBottom: number;
        protected _extParams: any;
        protected _isReady: boolean;
        protected _direction: Direction;
        protected _totalCount: number;
        protected _itemHeight: number;
        protected _itemWidth: number;
        protected _itemBeginX: number;
        protected _itemBeginY: number;
        protected _dataList: any[];
        protected _itemList: cc.Node[];
        protected _updateTime: number;
        protected _updateInterval: number;
        protected _bufferZoneY: number;
        protected _bufferZoneX: number;
        protected _lastContentY: number;
        protected _lastContentX: number;
        protected _content: cc.Node;
        protected _eventCb: IListViewCallback;
        protected _eventSendTag: Map<number, boolean>;
        getExtParams(): any;
        setExtParams(params: any): void;
        get isReady(): boolean;
        _resetData(): void;
        init(args: IListViewArgs): void;
        protected _clearSpawnItem(): void;
        /**
         * 列表初始化
         * @param needCreate 是否需要创建spawnItem
         */
        protected _initialize(needCreate?: boolean): void;
        protected getPositionInView(item: cc.Node): cc.Vec3;
        protected _getPositionByIndex(index: number): cc.Vec2;
        update(dt: number): void;
        scrollToItem(index: number, seconds?: number): void;
        /**
         * 追加数据，并重设content尺寸
         * @param list 不填则不会修改本对象记录数据列表，填了会重新赋值内部列表且不改动外部列表(
         * 因本对象记录数据列表为外部列表的浅拷贝，故建议该值不填写，以保同时刻只需维护一份列表数据，而不用内外不同列表保持同步)
         *
         */
        addDataList(list?: any[]): boolean;
        getDataList(): any[];
        getItemList(): cc.Node[];
        get totalCount(): number;
        getLatelyIndex(): number;
        /**
         * 列表数据更新后手动刷新列表显示
         */
        updateList(): void;
        /**
         * 更新列表宽高
         */
        protected _updateContentWH(): void;
    }
    export class Combox extends cc.Component {
        curSel: cc.Label;
        dropBoxTemplate: cc.Prefab;
        btnDrop: cc.Node;
        protected _curSelIndex: number;
        get curSelIndex(): number;
        protected _curSelData: any;
        get curSelData(): any;
        private _selCb;
        private _offsetX;
        private _offsetY;
        private _preventNode;
        dropBox: ListView;
        start(): void;
        protected _registerEvent(): void;
        protected _unRegisterEvent(): void;
        setDropBoxOffset(x: number, y: number): void;
        init(args: IListViewArgs, selCallback?: Function): void;
        protected _bindTarget(): void;
        /**
         * 选择item
         * @param index 索引
         * @param data 数据
         * @param manual 是否手动选择
         */
        selItem(index: number, data?: any, manual?: boolean): void;
        showDropBox(): void;
        hideDropBox(): void;
        protected _btnDropOnTouch(event: cc.Event.EventTouch): void;
        onDestroy(): void;
        /**
         * 添加防触摸层
         * @param zOrder 屏蔽层层级
         */
        private _preventTouch;
    }
    export class SoundVO {
        clip: cc.AudioClip;
        clipId: number;
        /**原始音量最大占比 */
        maxVolumePercentage: number;
        /**音效单独的音量大小 */
        volume: number;
        path: string;
        bundle: string;
    }
    export class SoundManager {
        static IGNORE_VOLUME: number;
        private static instance;
        /**音乐音量的百分比 */
        private musicVolume;
        /**音效音量的百分比 */
        private effectVolume;
        /**正在播放等音效列表 */
        private effectList;
        private currentMusic;
        private musicList;
        private defaultBtn;
        private showHideVolume;
        private isInit;
        constructor();
        /**
         * 获取实例
         */
        static getInstance(): SoundManager;
        /**
         * 初始化
         */
        init(): void;
        private gameHide;
        private gameShow;
        private setHideShowVolume;
        /**
         * 加载本地声音缓存，存储用户设置音量大小，
         * @param gameId 游戏id
         */
        loadLocalVolume(gameId?: string): void;
        /**
         * 获取声音值（背景音乐）
         */
        getMusicVolume(): number;
        /**
         * 获取音效值（音效）
         */
        getEffectVolume(): number;
        /**
         * 设置音乐大小，并且缓存本地
         * @param volume 音量大小 （0--1）
         * @param gameId 游戏id
         */
        setMusicVolume(volume: number, gameId?: string): void;
        /**
         * 设置指定单个音乐的音量大小
         * @param path 音效路径
         * @param volume 音量大小（值范围：[0,1]，当某个音乐不想被总开关控制，例如需要同步音轨，可以设置成game.SoundManager.IGNORE_VOLUME）
         */
        setSingleMusicVolume(path: string, volume: number): void;
        /**
        * 设置音效大小，并且缓存本地
        * @param volume 音量大小 （0--1）
        * @param gameId 游戏id
        */
        setEffectVolume(volume: number, gameId?: string): void;
        /**
         * 设置指定单个音效的音量大小
         * @param path 音效路径
         * @param volume 音量大小（值范围：[0,1]，当某个音效不想被总开关控制，例如需要同步音轨，可以设置成game.SoundManager.IGNORE_VOLUME）
         */
        setSingleEffectVolume(path: string, volume: number): void;
        /**
         * 播放背景音乐
         * @param path 音乐资源路径
         * @param loop 是否循环播放
         * @param bundle bundle名
         * @param endFunc 播放结束后的回调 可选
         * @param loadFunc 加载完成的回调  可选
         * @param maxVolume 原始音量最大值,默认值100（0，100）
         * @param isStopPrev 是否停止之前的背景音乐（默认停止，只有一个背景音乐）
         */
        playMusic(path: string, loop: boolean, bundle: string, endFunc?: Function, loadFunc?: Function, maxVolume?: number, isStopPrev?: boolean): void;
        /**
         * 播放音效文件
         * @param path 音效路径，相对于bundle
         * @param bool 是否循环
         * @param bundle bundle名
         * @param isSpecial 是否特殊音乐（可能捕猎一些长音效）
         * @param loadfinish 加载完成的回调
         * @param playfinish 播放完成的回调
         * @param maxVolume 原始音量最大值,默认值100（0，100）
         */
        playEffect(path: string, loop: boolean, bundle: string, loadfinish?: Function, playfinish?: Function, maxVolume?: number): void;
        /**
         * 播放音效结束回调函数
         * @param soundId 声音的id
         */
        private onFinishSound;
        /**
         * 获取音效对象 cc.AudioClip ,有些传入相同的路径名字。 进行playEffect。
         * @param path  播放声音资源路径
         */
        getClipByPath(path: string): SoundVO | SoundVO[];
        /**
         * 暂停背景音乐的播放
         * @param path 背景音乐资源路径
         */
        pauseMusic(path?: string): void;
        /**
         * 恢复背景音乐资源的播放
         * @param path 背景音乐路径
         */
        resumeMusic(path?: string): void;
        /**
         * 暂停所有背景音乐的播放
         */
        pauseAllMusic(): void;
        /**
         * 恢复所有背景音乐的播放
         */
        resumeAllMusic(): void;
        /**
         * 暂停音效资源的播放
         * @param path 音效资源路径
         */
        pauseEffect(path: string): void;
        /**
         * 恢复音效资源的播放
         * @param path 音效资源路径
         */
        resumeEffect(path: string): void;
        /**
         * 暂停所有音效的播放
         */
        pauseAllEffect(): void;
        /**
         * 恢复所有音效的播放
         */
        resumeAllEffect(): void;
        /**
         * 暂停所有背景音乐和音效
         */
        pauseAll(): void;
        /**
         * 恢复所有背景音乐和音效
         */
        resumeAll(): void;
        /**
         * 获取音效当前到播放时长
         * @param path 声音资源路径
         */
        getMusicCurPlayTime(path?: string): number;
        /**
         * 停止背景音乐
         * @param path 传入播放声音资源路径 ,若不传，停止当前的音乐
         */
        stopMusic(path?: string): void;
        /**
         * 停止所有背景声音，并且在列表中的也全部清理
         */
        stopAllMusic(): void;
        /** 列表中是否存在 背景音乐 */
        hasMusicClip(path: string): boolean;
        /**
         * 停止某个音效  可能存在多个音效，但是会自动加后缀，所以遍历的时候 查找字符
         * @param path 音效资源路径
         */
        stopEffect(path: string): void;
        /**
         * 停止全部音效
         */
        stopAllEffect(): void;
        /**
         * 设置当前的音频时间。
         * @param path 音效资源路径
         * @param sec 时间
         */
        setMusicCurrentTime(path: string, sec: number): void;
        /**
         * 设置当前的音频时间。
         * @param path 音效资源路径
         * @param sec 时间
         */
        setEffectCurrentTime(path: string, sec: number): void;
        /**
         * 设置默认的音效资源路径
         * @param path 音效的资源路径
         */
        setDefaultButton(path: string, bundle: string): void;
        /**
         * 播放默认的按钮音效
         */
        playBtnSound(): void;
    }
    export class ComboxItem extends ListViewItem {
        start(): void;
        protected _itemOnTouch(event: cc.Event.EventTouch): void;
        protected _registerEvent(): void;
        protected _unRegisterEvent(): void;
        onDestroy(): void;
    }
    export interface ISliderFixData {
        progress: number;
        index: number;
    }
    export class SliderFix extends cc.Slider {
        protected _fixProgressArr: number[];
        get fixProgressArr(): number[];
        set fixProgressArr(arr: number[]);
        protected _fixData: ISliderFixData;
        get fixProgress(): number;
        get fixIndex(): number;
        protected _fixDataFunc(progress: number): void;
        protected _updateProgress(touch: any): void;
        protected _updateHandlePosition(): void;
    }
    export interface IReqInfo {
        method: string;
        url: string;
        dynamicUrl?: string;
        data?: string | FormData;
        headerList?: {
            name: string;
            value: string;
        }[];
        sync?: boolean;
        successCb?: Function;
        failCb?: Function;
        timeoutCb?: Function;
        outTime?: number;
        showTipsType?: HttpType;
        isAutoRetry?: boolean;
        reqTimes?: number;
        needSign?: boolean;
        maxReqTimes?: number;
    }
    export enum HttpType {
        None = 0,
        ReqSuccess = 1,
        OpSuccess = 2,
        OpFail = 4,
        ReqFail = 8,
        ReqTimeout = 16,
        All = 31
    }
    export class HttpRequest {
        private static _instance;
        private constructor();
        static getInstance(): HttpRequest;
        /**
         * 发送http消息通用接口
         */
        send(baseInfo: IReqInfo): boolean;
        successHandler(_xhr: XMLHttpRequest, baseInfo: IReqInfo): boolean;
        failHandler(_xhr: XMLHttpRequest, baseInfo: IReqInfo): void;
        timeoutHandler(_xhr: XMLHttpRequest, baseInfo: IReqInfo): void;
        /**
         * 重发失败消息
         * @param {object} baseInfo
         * @param {string} reason 重发原因(fail、timeout)
         * @param {string} _xhr XMLHttpRequest
         */
        reSendFailureRequest(baseInfo: IReqInfo, reason: string, _xhr: XMLHttpRequest): boolean;
    }
    /**
     * 多语言管理类
     */
    export class LanguageManager {
        private static _instance;
        private constructor();
        static getInstance(): LanguageManager;
        private _curLangType;
        private _langCf;
        private _langMapBase;
        private _langMapCore;
        private _langMapDefault;
        private _langMapGame;
        private _isReady;
        /** 更换图片的时候 ，保存这个资源 ，便于后面的释放 */
        private _resArray;
        private _finishCb;
        private _resList;
        private _loadingIdx;
        private _cfArr;
        /**
         * 初始化语言配置文件信息
         * @param conf 语言配置文件信息
         */
        initLangConf(conf: {
            [key: string]: ILangFileConf[];
        }): void;
        /**
         * 初始化语言键值对
         * @param langType 语种
         * @param finishCb 完成回调
         */
        initLangMap(langType: LanguageType, finishCb: () => void): void;
        private loadConfig;
        private getKeyFromMap;
        getJsonIndex(cfArr: ILangFileConf[], jsonName: string): number;
        /**
         * 初始化结束
         */
        private _initFinish;
        /**
         * 模块是否准备好
         */
        get isReady(): boolean;
        /**
         * 切换语言
         * @param langType 语种
         * @param finishCb 完成回调
         */
        switchLang(langType: LanguageType, finishCb: () => void): void;
        /**
         * 获取当前语种
         */
        getCurLang(): LanguageType;
        /**
         * 获取key值对应字符串（通配符替换后）
         * @param key 键值
         * @param args 可变参数 ， 如果传入的是数组，那么只能传一个，后面不能在添加继续参数
         */
        getDstStr(key: string, ...args: any[]): string;
        getDstToStr(...args: string[]): string;
        /**
         * 获取key值对应字符串（通配符替换前）
         * @param key 键值
         */
        getSrcStr(key: string): string;
        /**
         * 获取key值对应字符串（通配符替换前）
         * @param key 键值
         */
        getSrcPng(key: string): IJsonPngValue;
        /**
         *
         * @param key 加载多语言的key的图片资源
         * @param sprite 传进来需要去更改图片的节点
         */
        setSpriteFrame(key: string, sprite: cc.Sprite): void;
        private loadImageAtlas;
        private loadImageFrame;
        private getResPathFromList;
        /**
         * 释放资源，动态加载的资源 需要手动去释放
         * @param key 多语言图片的key值
         */
        releaseAsset(key: string): void;
        resetLangMap(): void;
    }
    class LanuguageItem {
        item: cc.Node;
        key: string;
    }
    export class LanguageComp extends cc.Component {
        items: LanuguageItem[];
        private _labelList;
        private _flag;
        private _refrush;
        get refrush(): boolean;
        set refrush(value: boolean);
        private sortItem;
        onLoad(): void;
        start(): void;
        onDestroy(): void;
        private onRefreshLanguage;
        /** 刷新多语言 */
        refresh(): void;
        private updateLabel;
    }
    export type NodePoolCallback = (err: Error, nodePool: NodePool) => void;
    export class NodePool {
        private _isReady;
        private _createCount;
        private _warterMark;
        private _res;
        private _bundleName;
        private _nodes;
        private _resIsPrefab;
        isReady(): boolean;
        /**
         * 初始化NodePool(每个pool只调用一次)
         * 如果使用url来初始化，需要检查isReady，否则获取node会返回null
         * @param url 资源路径
         * @param finishCallback 完成回调
         * @param bundleName 包名
         */
        init(url: string | cc.Prefab, finishCallback: NodePoolCallback, bundleName: string): void;
        /**
         * 获取或创建一个Prefab实例Node
         */
        getNode(): cc.Node;
        /**
         * 回收Node实例
         * @param node 要回收的Prefab实例
         */
        freeNode(node: cc.Node): void;
        /**
         * 设置回收水位
         * @param waterMakr 水位
         */
        setWaterMark(waterMakr: number): void;
        /**
         * 池子里的prefab是否都没有使用
         */
        isUnuse(): boolean;
        /**
         * 清空prefab
         */
        destory(): void;
    }
    export class View extends UIView {
        private isLandscape;
        protected resize(): void;
        private onResize;
        private setLayout;
        onDestroy(): void;
        /**
         * 只要有屏幕尺寸改变就会调用
         */
        layout(): void;
        /**
         * 切换到横屏
         */
        layoutLandscape(): void;
        /**
        * 切换到竖屏
        */
        layoutPortrait(): void;
    }
    /**
     * 覆盖引擎方法
     */
    export class EngineUtils {
        private static _instance;
        static get instance(): EngineUtils;
        init(): void;
    }
    export class IntersectUtils {
        static LineInterCircle(ptStart: any, ptEnd: any, ptCenter: any, Radius: any, ptInter1: any, ptInter2: any): boolean;
    }
    export class NodeUtils {
        /**
         * 获取p点绕center点旋转后坐标
         * @param p 旋转点
         * @param angle 旋转角度
         * @param center 旋转中心点
         */
        static getRotatePoint(p: cc.Vec2, angle: number, center: cc.Vec2): cc.Vec2;
        /**
         * 矩形绕center点旋转后坐标
         * @param rect 旋转矩形
         * @param angle 旋转角度
         * @param center 旋转中心点
         */
        static getRectRotatePoints(rect: cc.Rect, angle: number, center: cc.Vec2): cc.Vec2[];
        /**
         * 获取htmlelement位置信息
         * @param element
         */
        static getHTMLElementPosition(element: any): {
            left: any;
            top: any;
            width: any;
            height: any;
        };
        /**
         * 转换世界坐标为html坐标
         * @param x 世界坐标系x
         * @param y 世界坐标系y
         */
        static convertToHtmlSpaceAR(x: number, y: number): {
            pt: cc.Vec2;
            rect: any;
        };
        /**
         * 模拟点击
         * @param x 世界坐标系x
         * @param y 世界坐标系y
         * @param duration 按下至抬起的间隔时间（ms）
         */
        static simulation_click(x: number, y: number, duration?: number): void;
        /**
         * 模拟触摸移动
         * @param startPos 开始世界坐标
         * @param endPos 结束世界坐标
         * @param duration 历时（ms）
         */
        static simulation_touchMove(startPos: cc.Vec2, endPos: cc.Vec2, duration?: number): void;
        /**
         * 模拟点击节点
         * @param node 节点
         * @param duration 按下至抬起的间隔时间（ms）
         */
        static simulation_clickNode(node: cc.Node, duration?: number): void;
    }
    /**
     * 对象池
     */
    export class ObjectPool {
        private static _list;
        /**
         * 存入对象池
         * @param key 标识
         * @param obj 对象
         */
        static put(key: string, obj: any): void;
        /**
         * 从对象池取出
         * @param key 标识
         */
        static get(key: any): any;
        /**
         * 清理
         * @param key 标识
         */
        static clear(key: string): void;
        /**
         * 清理所有
         */
        static clearAll(): void;
    }
    /**
     * spine动画工具类
     */
    export class SpineUtils {
        /**
         * 获取动画时长（s）
         * @param sp spine对象
         * @param aniName 动画名
         */
        static getAniTime(sp: sp.Skeleton, aniName: string): any;
        /**
         * 指定时长播放动画
         * @param sp spine对象
         * @param aniName 动画名
         * @param loop 是否循环
         * @param duration 播放历时（s）
         * @param onlySpeedUp 只加速或原速播放
         */
        static playAniByTime(sp: sp.Skeleton, aniName: string, loop?: boolean, duration?: number, onlySpeedUp?: boolean): void;
    }
    export class TimeUtil {
        /**
         * 获取当地的时间
         * @param i 输入时区 默认是大西洋时区，西四区
         */
        static getLocalTime(i?: number): Date;
        /**
         * 获取本机的时间戳，这里的时区就是当前所在时区，获取毫秒
         */
        static getTimestamp(): number;
        /**
         *  获取当地时间戳
         * @param i 输入时区 默认是大西洋时区，西四区，获取毫秒
         */
        static getLocalTimestamp(i?: number): number;
        /**
         * 通过传入一个时间戳转成另外一个时区的时间
         * @param time 传入时间戳，需要被转化的时间
         * @param index 需要转化之后的时区，默认是大西洋时区，西四区
         */
        static getTimeByTimeZone(time: number, index?: number): Date;
        /**
         * 通过传入一个格式化的时间字符串eg:"2017/6/28/12/0/0",转成另外一个时区的时间
         * @param timeStr 需要被转化的，格式化的时间字符串eg:"2017/6/28/12/0/0"
         * @param index 需要转化后的时区，默认是大西洋时区，西四区
         */
        static getTimeFormOtherZone(timeStr: string, index?: number): Date;
        /**
         * 时间戳转化成 一定格式化样式的 时间字符串 eg:2017/6/6 19:09:00
         * @param cdt 时间戳
         * @param isNewline 是否换行，
         */
        static getTimeFormat(cdt: Date, isNewline?: boolean): string;
        /**
         * 通过秒数 返回 格式化时间 19:09:00
         * @param second 秒数
         */
        static getTimeFormat2(second: number): string;
        /**
         * 通过时间戳 返回 格式化时间 12月30日 8:00
         * @param cdt 时间戳
         */
        static getTimeFormat3(cdt: Date): string;
        /**
         * 时间戳转化成 一定格式化样式的 时间字符串 eg:2017/6/6 19:09:00
         * @param cdt 时间戳
         */
        static getTimeFormat4(cdt: Date): string;
        /**
         * 时间戳转化成 一定格式化样式的 时间字符串 eg:2017/06/06-19:09:00
         * @param cdt 时间戳
         */
        static getTimeFormat5(cdt: Date): string;
        /**
         * 时间戳转化成 一定格式化样式的 时间字符串 eg:2017-06-06 08:09:00
         * @param cdt 时间戳
         * @param isNewline 是否换行，
         */
        static getTimeFormat6(cdt: Date, isNewline?: boolean): string;
        /**
       * 时间戳转化成 一定格式化样式的 时间字符串 eg: 19:09:00:000
       * @param cdt 时间戳
       */
        static getTimeFormat7(cdt: Date): string;
    }

}