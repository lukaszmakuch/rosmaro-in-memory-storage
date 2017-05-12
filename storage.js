module.exports = () => {
  let data

  const storage = {
    get_data() {
      return Promise.resolve(data)
    },

    set_data(new_state) {
      data = new_state
      return Promise.resolve()
    },

    async remove_data() {
      data = undefined
      return Promise.resolve()
    }
  }

  return storage
}
