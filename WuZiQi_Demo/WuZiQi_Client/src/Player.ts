/**
 * 规则说明：
 * 首先五子棋黑方先下，理论上黑方必胜，所以五子棋中存在黑方禁手下法（三三、四四、长连等）
 * 这里为了简化算法，不对禁手做判断。
 * 主要判断活三、活四，冲三、冲四，跳三、跳四等（两边没有堵住是活，一边被堵住是冲，中间有空是跳）连成的五子
 * 算法描述：
 * 从落子处判断它的四个方向：即横、竖、左上到右下、左下到右上。
 * 每个方向从中间点开始，往两边数连子数，然后将两个方向的连子数加和在加一（中间落子），
 * 如果和大于等于5，即落子方赢。
 */
class Player {
    public static _instance: Player
    public static get instance(): Player {
        if (null == Player._instance) {
            Player._instance = new Player()
        }
        return Player._instance
    }
    public static set instance(player: Player) {
        Player._instance = player
    }
    public judgeWinner(index: number, chessDic: { [key: number]: number }): boolean {
        let row = index / 15 + 1
        let column = index % 15 + 1
        //横纵向判断连子
        return this.checkHorizontalChess(column, index, chessDic) || this.checkVerticalChess(row, index, chessDic)
            || this.checkLeftUpToRightDownChess(row, column, index, chessDic) || this.checkLeftDownToRightUpChess(row, column, index, chessDic)
    }
    //横向连子判断
    private checkHorizontalChess(column: number, index: number, chessDic: { [key: number]: number }): boolean {
        let chessColor = chessDic[index]
        let i = 1
        let j = 1
        //横向减,算i-1的连子数
        for (; i < 6;) {
            if (column - i < 1) {
                break
            }
            if (chessDic[index - i] == Const.space || chessDic[index - i] != chessColor) {
                if (i == 5) {
                    return true
                }
                break
            }
            i++
        }
        //横向加
        for (; j < 6;) {
            if (column + j > 15) {
                break
            }
            if (chessDic[index + j] == Const.space || chessDic[index + j] != chessColor) {
                if (j == 5) {
                    return true
                } else {
                    break
                }
            }
            j++
        }

        return (i - 1 + j) >= 5
    }

    //纵向连子判断
    private checkVerticalChess(row: number, index: number, chessDic: { [key: number]: number }): boolean {
        let chessColor = chessDic[index]
        let i = 1
        let j = 1
        //纵向减
        for (; i < 6;) {
            if (row - i < 1) {
                break
            }
            if (chessDic[index - 15 * i] == Const.space || chessDic[index - 15 * i] != chessColor) {
                if (i == 5) {
                    return true
                } else {
                    break
                }
            }
            i++
        }
        //纵向加
        for (; j < 6;) {
            if (row + j > 15) {
                break
            }
            if (chessDic[index + 15 * j] == Const.space || chessDic[index + 15 * j] != chessColor) {
                if (j == 5) {
                    return true
                } else {
                    break
                }
            }
            j++
        }
        return (i - 1 + j) >= 5
    }

    //135°方向连子判断
    private checkLeftUpToRightDownChess(row: number, column: number,
        index: number, chessDic: { [key: number]: number }): boolean {

        let chessColor = chessDic[index]
        let i = 1
        let j = 1
        //做减
        for (; i < 6;) {
            // if (row + j < 15 || column + j > 15) {
            //     break
            // }
            if (chessDic[index - 16 * i] == Const.space || chessDic[index - 16 * i] != chessColor) {
                if (i == 5) {
                    return true
                } else {
                    break
                }
            }
            i++
        }
        //做加
        for (; j < 6;) {
            // if (row -i < 1 || column - i < 1) {
            //     break
            // }
            if (chessDic[index + 16 * j] == Const.space || chessDic[index + 16 * j] != chessColor) {
                if (j == 5) {
                    return true
                } else {
                    break
                }
            }
            j++
        }
        return (i - 1 + j) >= 5
    }

    //45°方向连子判断
    private checkLeftDownToRightUpChess(row: number, column: number,
        index: number, chessDic: { [key: number]: number }): boolean {
        let chessColor = chessDic[index]
        let i = 1
        let j = 1
        //做减
        for (; i < 6;) {
            // if (row + j > 15 || column - j < 1) {
            //     break
            // }
            if (chessDic[index - 14 * i] == Const.space || chessDic[index - 14 * i] != chessColor) {
                if (i == 5) {
                    return true
                } else {
                    break
                }
            }
            i++
        }
        //做加
        for (; j < 6;) {
            // if (row - i < 1 || column + i > 15) {
            //     break
            // }
            if (chessDic[index + 14 * j] == Const.space || chessDic[index + 14 * j] != chessColor) {
                if (j == 5) {
                    return true
                } else {
                    break
                }
            }
            j++
        }
        return (i - 1 + j) >= 5
    }
}