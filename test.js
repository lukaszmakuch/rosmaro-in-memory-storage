const make_storage = require('./storage')
const assert = require('assert')

describe("in-memory storage", function () {
  let storage

  beforeEach(() => {
    storage = make_storage()
  })

  it("returns a nullify value if nothing is stored", async function () {
    const read = await storage.get_data()
    assert(!read)
  })

  it("allows to read the stored data", async function () {
    const example_data = {a: 123, b: 456}
    await storage.set_data(example_data)
    const read = await storage.get_data()
    assert.deepEqual(example_data, read)
  })

  it("allows to delete the stored data", async function () {
    await storage.set_data({a: 123})
    await storage.remove_data()
    const read = await storage.get_data()
    assert(!read)
  })
})
