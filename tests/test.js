import yamlDocuments from './directory'

console.log(yamlDocuments)
if (yamlDocuments.length === 3) {
  console.log('YAML docs parsed!')
} else {
  console.log('Something went wrong')
  process.exit(1)
}
