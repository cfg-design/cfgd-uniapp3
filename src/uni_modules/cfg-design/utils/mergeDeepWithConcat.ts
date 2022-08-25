import { mergeDeepWith, is } from 'ramda'

const concat = (v1: any, v2: any) => {
  const v1_isArray = is(Array, v1)
  const v2_isArray = is(Array, v2)

  if (v1_isArray || v2_isArray) {
    if (!v1_isArray) {
      v1 = [v1]
    }
    if (!v2_isArray) {
      v2 = [v2]
    }
    return [...v1, ...v2]
  }

  return v2
}

export default mergeDeepWith(concat)
