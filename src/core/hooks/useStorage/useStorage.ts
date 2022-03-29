export const useStorage = (type: 'local' | 'session') => {
  const getCurrentStorage = () => {
    return type === 'local' ? localStorage : sessionStorage
  }

  const storage = getCurrentStorage()

  return {
    setItem(key: string, value: string, stringify = false) {
      return storage.setItem(key, stringify ? JSON.stringify(value) : value)
    },

    getItem(key: string, parse = false) {
      const item = storage.getItem(key)
      if (!item) throw new Error(`The [${key}] variable was not found in the ${type}Storage`)

      return parse ? JSON.parse(item) : item
    },

    removeItem(key: string) {
      return storage.removeItem(key)
    },
  }
}
