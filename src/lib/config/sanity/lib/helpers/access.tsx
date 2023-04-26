import {Eye, EyeSlash, EyeClosed, Circle} from '@phosphor-icons/react'

export const hasAccess = (start, end, isHidden) => {
  const now = new Date().getTime()
  const startDate = start ? new Date(start).getTime() : null
  const endDate = end ? new Date(end).getTime() : null

  if (isHidden) {
    return false
  } else if ((startDate < now || startDate == null) && (endDate == null || endDate > now)) {
    return true
  } else {
    return true
  }
}
