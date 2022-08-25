import { pickBy } from 'ramda'

export default pickBy(item => item !== undefined)
