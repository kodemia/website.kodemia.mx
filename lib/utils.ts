
import _  from 'lodash'
import { NextRouter } from 'next/router'

export function removeNullishEntries (object: {[key: string]: any}): {[key: string]: any} {
  return Object.entries(object).reduce((cleanObject, [key, value]) => {
    if (value == null || _.isEmpty(value)) return cleanObject

    return {
      [key]: value,
      ...cleanObject
    }
  }, {})
}

export function getValueFromQuery (router: NextRouter, path: string): any {
  let value = _.get(router.query, path, null)

  // Handle array values
  if (Array.isArray(value)) value = _.first(value) as string

  // Handle undefined and null strings
  if (value === 'undefined') return undefined
  if (value === 'null') return null

  // Parse strings when is number value
  const valueAsNumber = parseInt(value as string)
  if (!isNaN(valueAsNumber)) return valueAsNumber

  return value
}
