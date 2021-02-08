import Map from './data-structures/map-and-hash-table/map'

const technologies = new Map()
technologies.set('react', { framework: false })
technologies.set('angular', { framework: true })

console.log("React: ", technologies.get('react'))
console.log("Angular: ", technologies.get('angular'))


// const variedKeys = new Map<unknown, unknown>([
    const variedKeys = new Map([
    [function () { }, 'Function'],
    [{}, 'Object'],
    [123, 'Number'],
])


console.log("\n\n")
variedKeys.forEach((k, v) => console.log(k, v))

console.log("\nEntries: ", variedKeys.entries())
console.log("\nKeys:", variedKeys.keys())
console.log("Values:", variedKeys.values())
console.log("\nMap Size:", variedKeys.size)
console.log("\nHas 123: ", variedKeys.has(123))
console.log("Deleting 123...")
variedKeys.delete(123)
console.log("Has 123: ", variedKeys.has(123))

variedKeys.clear()
variedKeys.set(123, 'a')
variedKeys.set(123, 'b')
variedKeys.set(456, 'b')
console.log("\n\n", variedKeys.toString())
// console.log("\n\n", variedKeys)