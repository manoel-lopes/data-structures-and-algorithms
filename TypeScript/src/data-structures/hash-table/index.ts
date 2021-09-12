// import { HashTableSeparateChaining as HashTable } from './entities/HashTableSeparateChaining'
import { HashTable } from './entities/HashTable'

const technologies = new HashTable()
technologies.put('react', { framework: false })
technologies.put('angular', { framework: true })

console.log('React: ', technologies.get('react'))
console.log('Angular: ', technologies.get('angular'))

const variedKeys = new HashTable()
variedKeys.put('Function', function() { })
variedKeys.put('Object', {})
variedKeys.put('Number', 123)


console.log('\n\nFunction - ', variedKeys.get('Function'))
console.log('Object   - ', variedKeys.get('Object'))
console.log('Number   - ', variedKeys.get('Number'))


console.log(`\n${variedKeys.toString()}`)
console.log('\nKeys:', variedKeys.keys())
console.log('Values:', variedKeys.values())
console.log('\nEntries:', variedKeys.entries())
console.log('\nTable:', variedKeys.table)
console.log('\nHash Table Size:', variedKeys.size)

console.log()
console.log(variedKeys.get('Number'))
console.log('Deleting 123...')
variedKeys.delete('Number')
console.log(variedKeys.get('Number'))

variedKeys.clear()
variedKeys.put(123, 'a')
variedKeys.put(123, 'b')
variedKeys.put(456, 'b')

console.log(`\n${variedKeys.toString()}`)
console.log('123 - ', variedKeys.get(123))
console.log('456 - ', variedKeys.get(456))
