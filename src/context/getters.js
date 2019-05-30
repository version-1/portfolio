export default {
  messages: function() {
    const { key } = this.state.page
    return this.state.messages[key]
  },
  mobile: function() {
    if (!this.layout) {
      return null
    }
    return window
  },
}
