import { PersistentLruCache, PresitentType } from "../../src/index";
import { employs, Employ } from "../mocks/Datas";

describe("PersistentLruCache::LocalStorage set/get로직 확인", () => {
  const persistentLruCacheOfLocal = new PersistentLruCache<any>(
    PresitentType.Local,
    {
      max: 5
    }
  );
  const employOne: Employ = employs[0];

  test("Date 객체 string으로 변환됨 확인", () => {
    persistentLruCacheOfLocal.setStorage("key1", employOne);
    const ioEmployOne = persistentLruCacheOfLocal.getStorage("key1");
    const parsedDate = new Date(ioEmployOne?.createDate);
    return expect(parsedDate).toEqual(employOne.createDate);
  });
});

describe("PersistentLruCache::Lru로직 확인", () => {
  const persistentLruCacheOfLocal = new PersistentLruCache<any>(
    PresitentType.Local,
    {
      max: 4
    }
  );

  test("Lru Max 4값을 넘길 경우 최초 가장 오래된 키부터 삭제", () => {
    persistentLruCacheOfLocal.clearCaches();
    persistentLruCacheOfLocal.setStorage("key1", employs[0]);
    expect(persistentLruCacheOfLocal.length()).toEqual(1);
    persistentLruCacheOfLocal.setStorage("key2", employs[1]);
    expect(persistentLruCacheOfLocal.length()).toEqual(2);
    persistentLruCacheOfLocal.setStorage("key3", employs[2]);
    expect(persistentLruCacheOfLocal.length()).toEqual(3);
    persistentLruCacheOfLocal.setStorage("key4", employs[3]);
    expect(persistentLruCacheOfLocal.length()).toEqual(4);
    persistentLruCacheOfLocal.setStorage("key5", employs[4]);
    expect(persistentLruCacheOfLocal.length()).toEqual(4);
    expect(persistentLruCacheOfLocal.savedKeys).toEqual([
      "key2",
      "key3",
      "key4",
      "key5"
    ]);
  });

  test("같은 키 값 넣을 경우 update", () => {
    persistentLruCacheOfLocal.clearCaches();
    const empmodify = employs[0];
    persistentLruCacheOfLocal.setStorage("key1", empmodify);
    expect(empmodify.name).toEqual(employs[0].name);

    empmodify.name = "같은키 값이지만 값이 다름";
    persistentLruCacheOfLocal.setStorage("key1", empmodify);
    expect(empmodify.name).toEqual("같은키 값이지만 값이 다름");
  });
});
