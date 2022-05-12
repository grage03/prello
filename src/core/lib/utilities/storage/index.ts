export class Storage {
  // TODO: add type
  storage: any

  constructor(type: 'local' | 'session') {
    this.storage = type === 'local' ? localStorage : sessionStorage
  }

  public setItem(key: string, value: string, stringify = false) {
    return this.storage.setItem(key, stringify ? JSON.stringify(value) : value)
  }

  public getItem(key: string, parse = false) {
    const item = this.storage.getItem(key)
    if (!item) throw new Error(`The [${key}] variable was not found in the Storage`)

    return parse ? JSON.parse(item) : item
  }

  public removeItem(key: string) {
    return this.storage.removeItem(key)
  }
}
