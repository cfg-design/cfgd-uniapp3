const fs = require('fs')

const components = fs.readdirSync('./src/uni_modules/cfg-design/components')

// components.d.ts --- start
let dts = `
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {`

components.forEach((item) => {
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
// components.d.ts --- end

// components/index.d.ts --- start
let index = `export * from './uni.d'\n`

components.forEach((item) => {
  if (/^c-.+/.test(item)) {
    index += `export * from './${item}/types.d'\n`
  }
})

fs.writeFile('./src/uni_modules/cfg-design/components/index.d.ts', index, (err) => err && console.error(err))
// components/index.d.ts --- end

// components/index.d.ts --- start
let types = `export * from './components/index.d'\n`

components.forEach((item) => {
  if (/^c-.+/.test(item)) {
    const name = item.replace(/^c/, 'C').replace(/-(.)/g, (a, e) => e.toUpperCase())
    types += `\nimport ${name} from './components/${item}/${item}.vue'\n`
    types += `export type ${name}Instance = InstanceType<typeof ${name}>\n`
  }
})

fs.writeFile('./src/uni_modules/cfg-design/types.d.ts', types, (err) => err && console.error(err))
// components/index.d.ts --- end