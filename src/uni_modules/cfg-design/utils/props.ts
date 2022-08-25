import mergeDeepWithConcat from './mergeDeepWithConcat'
import pickNoUndefined from './pickNoUndefined'

type MergeProps = <T>(object: T, other: T) => T

export const getPropsBoolean = (v: any) => v !== undefined && v !== false
export const mergeProps: MergeProps = (object, other) => {
  other = pickNoUndefined(other)
  return mergeDeepWithConcat(object, other)
}
