const path = require(`node:path`)
module.exports = function (content) {
  const context = this

  console.log(`\n[!!!] Running txt-loader.js at ${path.dirname(context.resourcePath)}\n`)
  context.addContextDependency(path.dirname(context.resourcePath))

  return `export default \`${content}\``
}