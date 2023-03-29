const path = require(`node:path`)
module.exports = function (content) {
  const context = this

  console.log(`Running txt-loader.js at ${path.dirname(context.resourcePath)}`)
  context.addContextDependency(path.dirname(context.resourcePath))

  return `export default \`${content}\``
}