
const { existsSync } = require('fs')

const extensions = [ '', '.js', '.ts', '.jsx', '.tsx']

module.exports = function resolveExtension (file) {
  for (ext of extensions) {
    const entry = file + ext
    if (existsSync(entry) === true) {
      return entry
    }
  }
}
