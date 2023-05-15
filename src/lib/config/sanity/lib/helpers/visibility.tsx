import {Eye, EyeSlash, EyeClosed, Circle} from '@phosphor-icons/react'

export const getVisibilityState = (start, end, isHidden, showGreen) => {
  const now = new Date().getTime()
  const startDate = start ? new Date(start).getTime() : null
  const endDate = end ? new Date(end).getTime() : null
  const showGreenBullet = showGreen || false

  if (isHidden) {
    return '⭕ '
  } else if ((startDate < now || startDate == null) && (endDate == null || endDate > now)) {
    return showGreenBullet ? '🟩 ' : ' '
  } else {
    return ' '
  }
}

export const getVisibilityMedia = (start, end, isHidden, media) => {
  const now = new Date().getTime()
  const startDate = start ? new Date(start).getTime() : null
  const endDate = end ? new Date(end).getTime() : null
  const showGreenBullet = showGreen || false

  return media
  // if (isHidden) {
  //   return '⭕ '
  // } else if ((startDate < now || startDate == null) && (endDate == null || endDate > now)) {
  //   return showGreenBullet ? '🟢 ' : ' '
  // } else {
  //   return ' '
  // }
}
