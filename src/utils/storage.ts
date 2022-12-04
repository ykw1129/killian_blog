import { DEFAULT_CACHE_TIME } from '@/constants'

export type LocalStorageType = 'theme'

/**
 * Create a local cache object
 * @param {string} prefixKey - set key prefix
 * @param {Object} [storage=localStorage] - sessionStorage | localStorage
 */
export const createStorage = ({
  prefixKey = '',
  storage = typeof window !== 'undefined' ? window.localStorage : null,
} = {}) => {
  /**
   * local cache class
   * @class Storage
   */
  const Storage = class {
    private storage = storage
    private prefixKey?: string = prefixKey

    private getKey(key: string) {
      return `${this.prefixKey}${key}`.toUpperCase()
    }

    /**
     * @description set cache
     * @param {string} key cache key
     * @param {*} value cache value
     * @param expire Validity period (ms)
     */
    set(
      key: LocalStorageType,
      value: any,
      expire: number | null = DEFAULT_CACHE_TIME,
    ) {
      const stringData = JSON.stringify({
        value,
        expire: expire !== null ? new Date().getTime() + expire : null,
      })
      this.storage?.setItem(this.getKey(key), stringData)
    }

    /**
     * read cache
     * @param {LocalStorageType} key cache key
     * @param {*=} def Defaults
     */
    get<T extends any = null>(key: LocalStorageType, def = null): T | null {
      const item = this.storage?.getItem(this.getKey(key))
      if (item) {
        try {
          const data = JSON.parse(item)
          const { value, expire } = data
          // return directly within the validity period
          if (expire === null || expire >= Date.now()) {
            return value
          }
          // Expired delete
          this.remove(this.getKey(key))
        } catch (e) {
          return def
        }
      }
      return def
    }

    /**
     * delete an item from the cache
     * @param {string} key
     */
    remove(key: string) {
      this.storage?.removeItem(this.getKey(key))
    }

    /**
     * clear all cache
     * @memberOf Cache
     */
    clear(): void {
      this.storage?.clear()
    }
  }
  return new Storage()
}

export const storage = createStorage()
