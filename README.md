# IndexedStorage

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A key-value storage system similar to `localStorage`, but built on top of IndexedDB.

## Usage

```js
import { IndexedStorage } from "https://code4fukui.github.io/IndexedStorage/IndexedStorage.js";

const storage = await IndexedStorage.create("storage1", 1);

await storage.setItem("key1", "value1");
await storage.setItem("key2", "value2");

t.assertEquals(await storage.getItem("key1"), "value1");
t.assertEquals(await storage.getItem("key2"), "value2");
```

## Dependencies

- [IndexedDB](https://github.com/code4fukui/IndexedDB)

## License

MIT License — see [LICENSE](LICENSE).