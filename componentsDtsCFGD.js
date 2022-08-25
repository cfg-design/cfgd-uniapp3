const fs = require('fs')

const ui = fs.readdirSync('./src/uni_modules/cfg-design/components')

let dts = `
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {`

ui.forEach((item) => {
  if (/^c-.+/.test(item)) {
    dts += `\n    ${item.replace(/^c/, 'C').replace(/-(.)/g, (a, e) => e.toUpperCase())}: typeof import('./components/${item}/${item}.vue')['default']`
  }
})

dts += `
  }
}

export {}
`

fs.writeFile('./src/uni_modules/cfg-design/components.d.ts', dts, (err) => err && console.error(err))
