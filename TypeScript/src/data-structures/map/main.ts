import Map from './entities/Map'

const technologies = new Map()
technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log('React: ', technologies.get('react'))
console.log('Angular: ', technologies.get('angular'))


// const variedKeys = new Map<unknown, unknown>([
const variedKeys = new Map([
  [function() { }, 'Function'],
  [{}, 'Object'],
  [123, 'Number']
])

console.log()
variedKeys.forEach((k, v) => console.log(k, v))

console.log('\nEntries: ', variedKeys.entries())
console.log('\nKeys:', variedKeys.keys())
console.log('Values:', variedKeys.values())
console.log('\nMap Size:', variedKeys.size)
console.log('\nHas 123: ', variedKeys.has(123))
console.log('Deleting 123...')
variedKeys.delete(123)
console.log('Has 123: ', variedKeys.has(123))

console.log()
variedKeys.clear()
variedKeys.set(456, 'a')
variedKeys.set(456, 'b')
variedKeys.set(789, 'b')
console.log(variedKeys.toString())
// console.log(variedKeys)
