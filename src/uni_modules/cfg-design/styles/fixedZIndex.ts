/**
 * 记录 { position: fixed; } 的 z-index 当前最大值
 */

let current = 2000

export const getFixedZIndex = () => current++
export const setFixedZIndex = (index: number) => current = index
