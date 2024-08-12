window.gameConfig = {
    gameID: "111006301",
    gameType: "slot",                           //(start 启动工程, base 基础库 , game_core 核心库,slotLib slot库 , hunterLib 捕猎库 , arcadeLib 街机库 , slot slot游戏 , hunter 捕猎游戏 , arcade 街机游戏)
    server: "ws://172.16.129.21:9020",          //本地测试用，如果线上通过 http 请求配置
    // pluginsDir: "https://cdn-api-game-pg.jc-dev.xyz/",     //本地测试用，如果是线上模式，会根据浏览的地址赋值
    // pluginsDir: "http://localhost:8080",
    pluginsDir: "https://plugins.gngqyxxk.com/",
        // pluginsDir: "http://cpf.nat300.top/plugins/",
    bundleUrls: {
        base: '1.10.2',
        game_core: '1.10.2',
        slot: '1.10.4',
        hunter: '1.0.0',
        arcade: '1.0.0',
    },                              // 远端各bundle版本
}

//如果是线上模式 ，获取协议和域名
// var url = window.location.href;
// if (url.indexOf("api_game") > -1) {
//     var domain = url.split('/'); //以“/”进行分割
//     // window.gameConfig.pluginsDir = domain[0] + "//" + domain[2];
//     window.gameConfig.pluginsDir = url.substring(0, url.indexOf('/start'));
// }

// 获取子游戏bundle地址，如无版本数据，默认1.0.0
window.getGameBundleUrl = function (bundleName) {
    let ver = window.gameConfig.bundleUrls[bundleName] || '1.0.0';
    let url = `${window.gameConfig.pluginsDir}/${bundleName}/${ver}`;
    return url;
}

// 获取其它bundle地址，不设置默认版本
window.getOtherBundleUrl = function (bundleName) {
    let ver = window.gameConfig.bundleUrls[bundleName];
    let url = `${window.gameConfig.pluginsDir}/${bundleName}/${ver}`;
    return url;
}
