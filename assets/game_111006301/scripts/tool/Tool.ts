import _slotFrameAniViewNodeCtrl from "../roller/SlotFrameAniViewNodeCtrl"

export default class tool {

    //服务端的全局变量数据
    public static respData = null

    public static totalEliminateTime = 0 //消除次数不受免费游戏影响，生命周期是滚轴开始，期间每消除一次加一，滚轴结束后清零

    public static eliminateTime = 0//消除次数受是否在免费游戏内影响，用来做地鼠举牌倍率显示

    public static clearData = []

    public static falseRollNode = []//假滚轴的元素

    public static acrossNodeArr = []//横行的假节点

    public static scatterNumber = 0

    public static progressNode: cc.Node = null

    public static currentWildArr = []

    public static currentWildTime = 0

    public static gameState = false//false是普通，true是免费

    public static isCanAddRide = true

    //对数据做去重处理
    public static cutRepeatdataHandle(neighborData, number, lineResulData) {
        let bool = true
        neighborData.forEach(element => {
            if (element == number) {
                bool = false
            }
        });
        lineResulData.forEach(element => {
            if (element == number) {
                bool = false
            }
        });
        return bool
    }

    //检测这个数是否在滚轴的下端
    public static otherOneDataHandle(number) {
        let bool = true
        if (number % 6 == 0) {
            bool = false
        }
        return bool
    }

    //检测这个数是否在滚轴的上顶端
    public static otherTwoDataHandle(number) {
        let bool = true
        if ((number - 1) % 6 == 0) {
            bool = false
        }
        return bool
    }

    //思路是逐个筛选数据如果相连就进行数据合并，并且将已经合并的数据从数组里删除，然后退出当次循环，将合并的数据对剩余的数组进行比较进行再次合并
    //画线数据处理
    public static drawLineDataHandle(eliminateTime, result = null) {
        let resultList = []
        if (result) {
            resultList = result
        } else {
            resultList = this.respData.updateList[0].value.handleState.game_10017.data.resultList
        }
        let lineResult = resultList[eliminateTime].spinResult.lineResult
        let winPosArr = []
        let lineData = []
        for (let index = 0; index < lineResult.length; index++) {
            if (lineResult[index].winPos[0]) {
                winPosArr.push(lineResult[index].winPos)
            }
        }
        for (let index = 0; index < winPosArr.length; index++) {
            const element = winPosArr[index];
            lineData.push(this.lineDataPush(element))
        }
        // for (let index = 0; index < this.data.length; index++) {
        //     const element = this.data[index];
        //     lineData.push(this.lineDataPush(element))
        // }
        return lineData
    }

    //检查两个数据是否相连，如果是就合并数据
    // public static checkDataIsLine(winPosArr) {
    //     let afterData = []
    //     for (let index = winPosArr.length - 1; index >= 0; index--) {
    //         let element1 = winPosArr[index];
    //         let firstData = []
    //         let time = 0
    //         let isLine = false
    //         if (element1 != null) {
    //             for (let i = winPosArr.length - 1; i >= 0; i--) {
    //                 const element2 = winPosArr[i];
    //                 if (this.putInTwoDataCheckRelation(element1, element2)) {
    //                     isLine = true
    //                     if (time == 0) {
    //                         time++
    //                         let data = this.putTwoDataMakeUp(element1, element2)
    //                         winPosArr = this.changeData(winPosArr, element1, element2)
    //                         for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
    //                             firstData.push(data[dataIndex])
    //                         }
    //                     } else {
    //                         winPosArr = this.changeData(winPosArr, element2)
    //                         for (let dataIndex = 0; dataIndex < element2.length; dataIndex++) {
    //                             firstData.push(element2[dataIndex])
    //                         }
    //                     }
    //                     element1 = firstData
    //                 }
    //             }
    //             if (!isLine) {
    //                 for (let index = 0; index < element1.length; index++) {
    //                     const element = element1[index];
    //                     firstData.push(element)
    //                 }
    //             }
    //         }

    //         afterData.push(firstData)
    //     }
    //     return afterData
    //     // this.screenData(winPosArr)
    // }

    //改变数据
    public static changeData(data1, data2, data3 = null) {
        let data = []
        for (let index = 0; index < data1.length; index++) {
            const element = data1[index];
            if (element == data2 || element == data3) {
            } else {
                data.push(element)
            }
        }
        return data
    }

    //传入两组数据将他们合并成一组
    public static putTwoDataMakeUp(data1, data2) {
        let data = []
        for (let index = 0; index < data1.length; index++) {
            const element = data1[index];
            data.push(element)
        }
        for (let index = 0; index < data2.length; index++) {
            const element = data2[index];
            data.push(element)
        }
        return data
    }

    //传入两组数据检测是否有关联
    public static putInTwoDataCheckRelation(data1, data2) {
        let bool = false
        for (let index = 0; index < data1.length; index++) {
            if (this.checkOneDataWithLine(data1[index].low, data2)) {
                bool = true
            }
        }
        return bool
    }

    //检查一个数据相对于另一条数据是否有关联
    public static checkOneDataWithLine(number, data) {
        let bool = false
        data.forEach(element => {
            if (number + 7 === element.low) {
                bool = true
                return
            } else if (number - 7 === element.low) {
                bool = true
                return
            } else if (number - 1 === element.low && this.otherTwoDataHandle(number)) {
                bool = true
                return
            } else if (number + 1 === element.low && this.otherOneDataHandle(number)) {
                bool = true
                return
            }
        });
        return bool
    }

    //获取当前滚轴框内所有元素
    public static getAllDataInRoller() {
        let scrollerData = []
        for (let index = 0; index < 60; index++) {
            let render = slot.SlotMachineView.instance.scroller.getRenderByIndex(index);
            if (render) {
                scrollerData.push(render)
            }
        }
        return scrollerData
    }

    //加入数据
    public static lineDataPush(winPos) {
        let winPosArr = []
        for (let index = 0; index < winPos.length; index++) {
            const element = winPos[index].low;
            winPosArr.push(this.checkOneDataWithSelfLine(element, winPos))
        }
        return winPosArr
    }

    //传入需要筛选的数据还有本身数组数据
    // public static putSelfDataAndNumber(number, data) {
    //     this.checkOneDataWithSelfLine(number, data)
    // }

    //检查一个数据相对于自己本身数据是否有关联
    public static checkOneDataWithSelfLine(number, data) {
        /**0是top，1是left，2是right，3是down,
         * 4是左下角有消除且左边没有元素消除，
         * 5是右下角有消除且右边没有元素消除，
         * 6是左上角有消除且左边没有元素消除，
         * 7是右上角有消除且右边没有元素消除,
         * 8是左下角有消除且下边没有元素消除，
         * 9是右下角有消除且下边没有元素消除，
         * 10是左上角有消除且上边没有元素消除，
         * 11是右上角有消除且上边没有元素消除,*/
        let result = [false, false, false, false, false, false, false, false, false, false, false, false]
        let lineResult = []
        data.forEach(element => {
            let low = element.low
            if (number + 6 === low) {
                result[2] = true
            } else if (number - 6 === low) {
                result[1] = true
            } else if (number - 1 === low && this.otherTwoDataHandle(number)) {
                result[0] = true
            } else if (number + 1 === low && this.otherOneDataHandle(number)) {
                result[3] = true
            }
        });
        data.forEach(element => {
            let low = element.low
            if (number - 5 === low && !result[1] && this.otherOneDataHandle(number)) {
                result[4] = true
            }
            if (number - 5 === low && !result[3] && this.otherOneDataHandle(number)) {
                result[8] = true
            }
            if (number + 7 === low && !result[2] && this.otherOneDataHandle(number)) {
                result[5] = true
            }
            if (number + 7 === low && !result[3] && this.otherOneDataHandle(number)) {
                result[9] = true
            }
            if (number - 7 === low && !result[1] && this.otherTwoDataHandle(number)) {
                result[6] = true
            }
            if (number - 7 === low && !result[0] && this.otherTwoDataHandle(number)) {
                result[10] = true
            }
            if (number + 5 === low && !result[2] && this.otherTwoDataHandle(number)) {
                result[7] = true
            }
            if (number + 5 === low && !result[0] && this.otherTwoDataHandle(number)) {
                result[11] = true
            }
        });
        let render = slot.SlotMachineView.instance.scroller.getRenderByIndex(number);
        lineResult.push(render)
        // lineResult.push(number)
        if (result[4]) {
            //4是左下角有消除且左边没有元素消除，
            lineResult.push("specialDownLeftCurved2")
        }
        if (result[5]) {
            //5是右下角有消除且右边没有元素消除，
            lineResult.push("specialDownRightCurved2")
        }
        if (result[8]) {
            //8是左下角有消除且下边没有元素消除，
            lineResult.push("specialDownLeftCurved1")
        }
        if (result[9]) {
            //9是右下角有消除且下边没有元素消除，
            lineResult.push("specialDownRightCurved1")
        }
        if (result[6]) {
            if (!result[4]) {
                if (result[3]) {
                    lineResult.push("shortLeft2")
                } else {
                    lineResult.push("downLeftCurved")
                }
            }
        }
        if (result[7]) {
            if (!result[5]) {
                if (result[3]) {
                    lineResult.push("shortRight2")
                } else {
                    lineResult.push("downRightCurved")
                }
            }
        }
        if (result[10]) {
            if (!result[11]) {
                if (result[2]) {
                    lineResult.push("shorttop2")
                } else {
                    lineResult.push("topRightCurved")
                }
            }
        }
        if (result[11]) {
            if (!result[10]) {
                if (result[2]) {
                    lineResult.push("shorttop1")
                } else {
                    lineResult.push("topLeftCurved")
                }
            }
        }

        if (!result[0]) {
            if (!result[10]) {
                if (!result[1]) {
                    lineResult.push("topLeftCurved")
                } else {
                    lineResult.push("shorttop1")
                }
            }
            if (!result[11]) {
                if (!result[2]) {
                    lineResult.push("topRightCurved")
                } else {
                    lineResult.push("shorttop2")
                }
            }

        }
        if (!result[1]) {
            if (!result[6]) {
                if (result[0]) {
                    lineResult.push("shortLeft1")
                }
            }
            if (!result[4]) {
                if (!result[3]) {
                    lineResult.push("downLeftCurved")
                } else {
                    lineResult.push("shortLeft2")
                }
            }
        }
        if (!result[2]) {
            if (!result[5]) {
                if (!result[3]) {
                    lineResult.push("downRightCurved")
                } else {
                    lineResult.push("shortRight2")
                }
            }
            if (!result[7]) {
                if (!result[0]) {
                    lineResult.push("topRightCurved")
                } else {
                    lineResult.push("shortRight1")
                }
            }
        }
        if (!result[3]) {
            if (!result[8]) {
                if (!result[1]) {
                    lineResult.push("downLeftCurved")
                } else {
                    lineResult.push("shortDown1")
                }
            }
            if (!result[9]) {
                if (!result[2]) {
                    lineResult.push("downRightCurved")
                } else {
                    lineResult.push("shortDown2")
                }
            }
        }
        return lineResult
    }

    //获取免费游戏中免费次数增加元素的位置还有增加的次数
    public static getFreeGameFreeTimePosAndTime(eliminateTime) {
        let grid = this.respData.updateList[0].value.handleState.game_10017.data.resultList[eliminateTime].spinResult.grid
        let resultArr = []
        for (let index = 0; index < grid.length; index++) {
            const element = grid[index];
            if (element >= 10) {
                let pos = slot.SlotMachineView.instance.getPosByIndex(index)
                if (element == 10) {
                    resultArr.push([pos, 1])
                }
                if (element == 11) {
                    resultArr.push([pos, 2])
                }
                if (element == 12) {
                    resultArr.push([pos, 3])
                }
            }
        }
        return resultArr
    }

    // public static bezierAct(node, target, time, height, callBack = null) {
    //     let act1 = cc.jumpTo(time, cc.v2(target.x, target.y), height, 1)
    //     let fadeOut = cc.fadeOut(0.3)
    //     let call = cc.callFunc(function () {
    //         typeof callBack === 'function' && callBack();
    //     }.bind(this))
    //     node.runAction(cc.sequence(act1, fadeOut, call))
    // }

    //贝赛尔曲线动画
    public static bezierAct(node, target, time, height, width, callBack = null) {
        let q1 = cc.v2(target.x, target.y);
        let q2 = cc.v2(node.x + width, node.y + height);
        let bezier = [q2, q1, cc.v2(target.x, target.y)];
        let bezierForward = cc.bezierTo(time, bezier);
        let call = cc.callFunc(function () {
            typeof callBack === 'function' && callBack();
        }.bind(this))
        node.runAction(cc.sequence(bezierForward, call))
    }

    //传入自身节点，获得相对于对方节点的坐标
    public static getPosByOtherNode(node, targetNode) {
        if (node) {
            let pos1 = node.convertToWorldSpaceAR(cc.v3());
            let pos = targetNode.convertToNodeSpaceAR(pos1)
            return pos
        } else {
            return cc.v2(0, 0)
        }
    }

    //判断某个位置在哪个列内
    public static getLineNumberByPos(pos) {
        pos = pos + 1
        let number = Math.floor(pos / 3)
        let remainder = pos % 3
        let lineNumber = 0
        if (remainder == 0) {
            lineNumber = number - 1
        } else {
            lineNumber = number
        }
        return lineNumber
    }

    //判断某个位置在哪个横内
    public static getAcrossNumberByPos(pos) {
        for (let index = 0; index < 6; index++) {
            for (let i = 0; i < 6; i++) {
                if (pos == (i * 6) + index) {
                    return index
                }
            }
        }
    }

    //得到当前消除有哪些列参与了消除
    public static getLineDataByResp(time) {
        let removePos = tool.respData.updateList[0].value.handleState.game_10017.data.resultList[time].removePos
        let lineData = []
        for (let index = 0; index < removePos.length; index++) {
            const element = removePos[index];
            const lineNumber = this.getLineNumberByPos(element) + 1
            let bool = true
            for (let lineDataIndex = 0; lineDataIndex < lineData.length; lineDataIndex++) {
                const lineDataElement = lineData[lineDataIndex];
                if (lineNumber == lineDataElement) {
                    bool = false
                }
            }
            if (bool) {
                lineData.push(lineNumber)
            }
        }
        return lineData
    }

    public static getFamaleMouseData() {
        let crushData = []
        if (tool.respData.updateList) {
            if (tool.respData.updateList[0].value.handleState.game_10017.data.resultList.length == 1) {
                crushData = tool.respData.updateList[0].value.handleState.game_10017.data.resultList[tool.totalEliminateTime].crushMoveGrid
            } else {
                crushData = tool.respData.updateList[0].value.handleState.game_10017.data.resultList[tool.totalEliminateTime].crushFixedGophersGrid
            }
        }
        let data = []
        for (let index = 0; index < crushData.length; index++) {
            const element = crushData[index];
            if (element.elem == 8) {
                data.push({ pos: element.pos, index: index })
            }
        }
        return data
    }

    public static getLastRespData() {
        let resultList = []
        if (tool.respData.updateList) {
            resultList = tool.respData.updateList[0].value.handleState.game_10017.data.resultList
        }
        let crushMoveGrid = []
        if (resultList.length == 1) {
            crushMoveGrid = []
        } else {
            if (resultList[0]) {
                crushMoveGrid = resultList[resultList.length - 2].crushMoveGrid
            }
        }
        return crushMoveGrid
    }

    //固定消除的元素筛选
    public static fixedDataDeduplication(allData) {
        let data = []
        let clearData = []
        for (let index = 0; index < allData.length; index++) {
            const element = allData[index];
            let bool = true
            for (let i = 0; i < this.clearData.length; i++) {
                const currentDataElem = this.clearData[i];
                if (element.pos == currentDataElem.pos) {
                    bool = false
                    break
                }
            }
            if (bool) {
                data.push(element)
            }
        }
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            clearData.push(element)
        }
        for (let index = 0; index < this.clearData.length; index++) {
            const element = this.clearData[index];
            clearData.push(element)
        }
        this.clearData = clearData
        return data
    }

    //播放滚轴元素内的背景高亮
    public static playRollDataBgAni() {
        let scrollerLayer = slot.SlotMachineView.instance.node.parent.parent
        this.getAcrossRollData()
        scrollerLayer.stopAllActions()
        this.setAllLightNode()
        let delay1 = cc.delayTime(2)
        let call1 = cc.callFunc(function () {
            this.setAllLightNode()
            for (let index = 0; index < 6; index++) {
                let delay2 = cc.delayTime(0.2 * index)
                let call2 = cc.callFunc(function () {
                    let acrossNode = this.acrossNodeArr[index]
                    let currentNode = []
                    if (index >= 1) {
                        currentNode = this.acrossNodeArr[index - 1]
                    }
                    slot.SoundMger.instance.playEffect("Line_Turn", false);
                    for (let i = 0; i < acrossNode.length; i++) {
                        const element = acrossNode[i];
                        if (index >= 1) {
                            const element1 = currentNode[i];
                            element1.getChildByName("lightBg").active = false
                        }
                        const spine = element.getChildByName("spine").getComponent(sp.Skeleton)
                        let data = element.getComponent(_slotFrameAniViewNodeCtrl).data
                        if (data < 9) {
                            spine.setAnimation(0, "win", false)
                            spine.setCompleteListener(() => {
                                //TODO可能需要加个判断不然别的地方播了动画这里监听到了
                                spine.setAnimation(0, "win_idle", true)
                            })
                        }


                        element.getChildByName("lightBg").active = true
                    }
                }.bind(this))
                scrollerLayer.runAction(cc.sequence(delay2, call2))
            }
        }.bind(this))
        scrollerLayer.runAction(cc.repeatForever(cc.sequence(delay1, call1)))
    }


    //初始化选中的元素节点
    public static setAllLightNode() {
        for (let index = 0; index < this.acrossNodeArr.length; index++) {
            const element = this.acrossNodeArr[index];
            for (let i = 0; i < element.length; i++) {
                const element1 = element[i];
                const spine = element1.getChildByName("spine").getComponent(sp.Skeleton)
                let data = element1.getComponent(_slotFrameAniViewNodeCtrl).data
                if (data < 9) {
                    spine.setToSetupPose()
                }
                element1.getChildByName("lightBg").active = false
            }
        }
    }

    //获取横轴的元素
    public static getAcrossRollData() {
        if (this.acrossNodeArr[0]) return
        for (let index = 0; index < 6; index++) {
            let firstNodeArr = []
            for (let i = 0; i < 6; i++) {
                let node = this.falseRollNode[(i * 6) + index]
                firstNodeArr.push(node)
            }
            this.acrossNodeArr.push(firstNodeArr)
        }
    }

    //检测当前是否是最后一次消除
    public static checkThisIsLastRemove() {
        let bool = false
        let resultListLenght = this.respData.updateList[0].value.handleState.game_10017.data.resultList.length - 1
        if (this.totalEliminateTime == resultListLenght) {
            bool = true
        }
        return bool
    }

    //得到当前时间
    public static getNowTime(): number {
        return new Date().valueOf()
    }

    //是否在将来
    public static isFutureTime(time: number): boolean {
        return this.getNowTime() < time
    }

    //是否已过去
    public static isPastTime(time: number): boolean {
        return this.getNowTime() > time
    }


}

window['tool111006301'] = tool;