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

export const debounce = <T, U extends any[]>(fn: () => T, ms: number) => {
  let timeout: any
  return (...args: U) => {
    clearTimeout(timeout)
    // @ts-ignore
    timeout = setTimeout(() => fn.apply(this, args), ms)
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
