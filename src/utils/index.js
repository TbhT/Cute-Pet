export function getRemoteAvatar(userId) {
  return `/user/avatar?uid=${userId}`
}

export const imgFilterReg = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i

export function getLocaleDatetime() {
  const today = new Date()
  const y = today.getUTCFullYear(),
    m = today.getUTCMonth() + 1,
    d = today.getUTCDay(),
    h = today.getUTCHours() + 8,
    mi = today.getUTCMinutes(),
    s = today.getUTCSeconds()

  return new Date(Date.UTC(y, m, d, h, mi, s))
}

export function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate()
}

export function getDaysInMonthAsArray(year, month) {
  const d = new Date(year, month, 0).getDate()
  const da = []

  for (let index = 0; index < d; index++) {
    da[index] = index + 1
  }

  return da
}

export const MONTHS = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月'
]

export const HOURS = (() => {
  const h = []

  for (let index = 0; index < 24; index++) {
    h[index] = index + 1
  }

  return h
})()


export const MINUTES = (() => {
  const m = []

  for (let index = 0; index < 60; index++) {
    m[index] = index < 10 ? `0${index}` : index
  }

  return m
})()
