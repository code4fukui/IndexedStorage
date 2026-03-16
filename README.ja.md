# IndexedStorage

IndexedDBを使ったキーバリューストレージです。localStorageのようなシンプルな使い勝手を提供します。

## 機能
- IndexedDBを利用したキーバリューストレージ
- setItem、getItem、removeItem、clearなどの基本的な操作が可能

## 必要環境
- ブラウザ環境
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