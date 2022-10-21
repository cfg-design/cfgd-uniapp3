import type { ComponentInternalInstance } from 'vue'

export default <T extends true | false | unknown>(that: ComponentInternalInstance, selector: string, all?: boolean): Promise<T extends true ? UniApp.NodeInfo[] : UniApp.NodeInfo> =>
  new Promise((resolve, reject) =>
    uni.createSelectorQuery()
      .in(that)[all ? 'selectAll' : 'select'](selector)
      .boundingClientRect(rect => {
        all && Array.isArray(rect) && rect.length
          ? resolve(rect as any)
          : !all && rect
          ? resolve(rect as any)
          : reject(rect)
      })
      .exec()
  )
