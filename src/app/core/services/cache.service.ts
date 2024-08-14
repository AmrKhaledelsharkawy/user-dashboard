import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  // The cache map is used to store key-value pairs
  private cache = new Map<string, any>();

  /**
   * Sets a value in the cache with the specified key.
   * 
   * @param key - The key to identify the cached value.
   * @param value - The value to be cached.
   */
  set<T>(key: string, value: T): void {
    this.cache.set(key, value);
  }

  /**
   * Retrieves a cached value by its key.
   * 
   * @param key - The key of the cached value.
   * @returns The cached value, or undefined if the key does not exist.
   */
  get<T>(key: string): T | undefined {
    return this.cache.get(key);
  }

  /**
   * Checks if a given key exists in the cache.
   * 
   * @param key - The key to check in the cache.
   * @returns True if the key exists in the cache, otherwise false.
   */
  has(key: string): boolean {
    return this.cache.has(key);
  }

  /**
   * Clears all key-value pairs in the cache.
   */
  clear(): void {
    this.cache.clear();
  }
}
