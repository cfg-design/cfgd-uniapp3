const fs = require('fs')

const components = fs.readdirSync('./src/components')

let dts = `
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {`

components.forEach((item) => {
  dts += `\n    ${item.replace(/(^|-)(.)/g, (a, _, e) => e.toUpperCase())}: typeof import('./components/${item}/${item}.vue')['default']`
})

dts += `
  }
}

export {}
`

fs.writeFile('./src/components-app.d.ts', dts, (err) => err && console.error(err))
