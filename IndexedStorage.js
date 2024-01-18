import { IndexedDB } from "./IndexedDB.js";

export class IndexedStorage {
  static async create(name, ver) {
    const db = await IndexedDB.create(name, ["key", "value"], ver);
    return new IndexedStorage(db);
  }
  constructor(db) {
    this.db = db;
  }
  async length() {
    return this.db.length();
  }
  async key(idx) {
    const ids = await this.db.getAllIDs();
    ids.sort();
    const item = await this.db.getAt(ids[idx]);
    return item?.key;
  }
  async getItem(key) {
    const item = await this.db.get("key", key);
    if (!item.length) return null;
    return item[0].value;
  }
  async setItem(key, value) {
    const item = await this.db.get("key", key);
    if (item.length) {
      item[0].value = value;
      await this.db.put(item[0]);
    } else {
      await this.db.put({ key, value });
    }
  }
  async removeItem(key) {
    await this.db.remove("key", key);
  }
  async clear() {
    await this.db.removeAll();
  }
}
