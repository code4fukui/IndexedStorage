# IndexedStorage

IndexedDBによるlocalStorageのようなKVSストレージ

## デモ
オンラインデモはありません。

## 機能
- IndexedDBを使ったKVSストレージ
- 基本的なsetItem、getItem、removeItem、clearなどの操作が可能

## 必要環境
- ブラウザ上で動作
- IndexedDBがサポートされている必要がある

## 使い方
```js
import { IndexedStorage } from "https://code4fukui.github.io/IndexedStorage/IndexedStorage.js";

const storage = await IndexedStorage.create("storage1", 1);

await storage.setItem("key1", "value1");
await storage.setItem("key2", "value2");

console.log(await storage.getItem("key1")); // "value1"
console.log(await storage.getItem("key2")); // "value2"
```

## ライセンス
MIT License