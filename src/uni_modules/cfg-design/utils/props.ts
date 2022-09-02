import mergeDeepWithConcat from './mergeDeepWithConcat'
import pickNoUndefined from './pickNoUndefined'
import { omit } from 'ramda'

type MergeProps = <T>(object: T, other: T) => T

export const getPropsBoolean = (v: any) => v !== undefined && v !== false
export const omitProps = omit(['props'])
export const mergeProps: MergeProps = (object, other) => {
  other = pickNoUndefined(other)
  return mergeDeepWithConcat(object, other)
}
