const makeStorage = require('./storage').default
const assert = require('assert')

describe("in-memory storage", function () {
  let storage;

  beforeEach(() => {
    storage = makeStorage();
  });

  it("returns a nullify value if nothing is stored", () => {
    const read = storage.get();
    assert(!read);
  });

  it("allows to read the stored data", () => {
    const exampleData = {a: 123, b: 456};
    storage.set(exampleData);
    const read = storage.get();
    assert.deepEqual(exampleData, read);
  });

  it("allows to delete the stored data", () => {
    storage.set({a: 123});
    storage.set(undefined);
    const read = storage.get();
    assert(!read);
  });
});
