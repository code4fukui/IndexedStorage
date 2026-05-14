# IndexedStorage

IndexedDBをベースに構築された、`localStorage`に似たキーバリューストレージシステムです。

## 使い方

```js
import { IndexedStorage } from "https://code4fukui.github.io/IndexedStorage/IndexedStorage.js";

const storage = await IndexedStorage.create("storage1", 1);

await storage.setItem("key1", "value1");
await storage.setItem("key2", "value2");

t.assertEquals(await storage.getItem("key1"), "value1");
t.assertEquals(await storage.getItem("key2"), "value2");
```

## 依存関係

- [IndexedDB](https://github.com/code4fukui/IndexedDB)

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
