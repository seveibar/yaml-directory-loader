var readdir = require('recursive-readdir')
var fs = require('fs')
var YAML = require('yamljs')

module.exports = function() {
  var callback = this.async()
  readdir(this.resourcePath, [f => !f.match(/.*\.ya?ml/)])
    .then(files => {
      const documents = files.map(f => YAML.parse(fs.readFileSync(f)))
      callback(null, `module.exports = ${JSON.stringify(documents)}`)
    })
    .catch(callback)
}
