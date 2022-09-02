import type { ComponentInternalInstance } from 'vue'

export default (that: ComponentInternalInstance, selector: string, all?: boolean): Promise<UniApp.NodeInfo> =>
  new Promise((resolve, reject) =>
    uni.createSelectorQuery()
      .in(that)[all ? 'selectAll' : 'select'](selector)
      .boundingClientRect(rect => {
        all && Array.isArray(rect) && rect.length
          ? resolve(rect)
          : !all && rect
          ? resolve(rect)
          : reject(rect)
      })
      .exec()
  )
