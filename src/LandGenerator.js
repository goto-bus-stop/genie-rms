const Module = require('./Module')

class LandGenerator extends Module {
  constructor (map, parent, data) {
    super(map, parent, true)
    this.data = data

    this.priority = 1.0
  }

  generate () {
  }
}

module.exports = LandGenerator
