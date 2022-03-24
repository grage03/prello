export const throttle = <T, U extends any[]>(fn: () => T, ms: number) => {
  let throttled: boolean = false

  return (...args: U) => {
    if (!throttled) {
      throttled = true
      setTimeout(() => {
        throttled = false
      }, ms)

      // @ts-ignore
      fn.apply(this, args)
    }
  }
}

export const scrollToTop = () => {
  const isScrollTop = true

  if (isScrollTop) {
    const { pageYOffset } = window

    if (pageYOffset) {
      window.scrollBy({
        top: -Math.max(document.body.scrollTop, document.documentElement.scrollTop),
        behavior: 'smooth',
      })
    }
  }
}
