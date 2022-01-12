class ZStorage {
  get(key: string, default_value?: string) {
    const value = localStorage.getItem(key)

    if (!value && default_value) {
      this.set(key, default_value)

      return default_value
    }

    return value
  }

  set(key: string, value: string) {
    return localStorage.setItem(key, value)
  }
}

export default new ZStorage()
