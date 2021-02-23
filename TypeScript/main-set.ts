import { question, questionInt } from 'readline-sync'
import Set from './data-structures/set/set'
// import Set from './data-structures/set/set-linked-list'

let option: number, el: unknown, choice: string, isSupersetStr: string
const setA = new Set(), setB = new Set()

do {
    option = questionInt(`
Menu de opcoes:
1  - Inserir elemento no conjunto
2  - Remover elemento do conjunto
3  - Obter quantidade de elementos no conjunto
4  - Realizar Operacoes com os conjuntos
5  - Imprimir os conjuntos
6  - Limpar os conjuntos
Opcao: `)

    if (option === 1) {

        choice = question("\nconjunto A ou conjunto B? ")

        if (choice === "A") {

            el = questionInt('\nDigite o elemento a ser inserido: ')

            setA.add(el)
            console.log(`\nA: ${setA.toString()}`)
            // console.log("\nA: %o", setA)

        } else if (choice === "B") {

            el = questionInt('\nDigite o elemento a ser inserido: ')

            setB.add(el)
            console.log(`\nB: ${setB.toString()}`)
            // console.log("\nB: %o", setB)

        } else {
            console.log("\nOpcao Inválida!")
        }

    } else if (option === 2) {

        choice = question("\nconjunto A ou conjunto B? ")

        if (choice === "A") {

            el = questionInt('\nDigite o elemento a ser removido: ')

            if (setA.delete(el)) {
                console.log(`\nA: ${setA.toString()}`)
                // console.log("\nA: %o", setA)

            } else {
                console.log('\nElemento nao encontrado!')
            }

        } else if (choice === "B") {

            el = questionInt('\nDigite o elemento a ser removido: ')

            if (setB.delete(el)) {
                console.log(`\nB: ${setB.toString()}`)
                // console.log("\nB: %o", setB)

            } else {
                console.log('\nElemento nao encontrado!')
            }

        } else {
            console.log("\nOpcao Invalida!")
        }

    } else if (option === 3) {

        console.log(`\nQuantidade de elementos no conjunto A: ${setA.size}`)
        console.log(`\nQuantidade de elementos no conjunto B: ${setB.size}`)

    } else if (option === 4) {

        console.log(`\nA: ${setA.toString()}`)
        console.log(`B: ${setB.toString()}`)
        // console.log("\nA: %o", setA)
        // console.log("B: %o", setB)

        const unionSet = setA.union(setB)
        console.log(`\nUniao: ${unionSet.toString()}`)
        // const unionSet = new Set([...setA, ...setB])
        // console.log("\nUniao: %o", unionSet)

        const intersecSet = setA.intersection(setB)
        console.log(`Intersecao: ${intersecSet.toString()}`)
        // const intersecSet = new Set([...setA].filter(el => setB.has(el)))
        // console.log("Intercessao: %o", intersecSet)

        const diffSet = setA.difference(setB)
        console.log(`Diferenca: ${diffSet.toString()}`)
        // const diffSet = new Set([...setA].filter(el => !setB.has(el)))
        // console.log("Diferenca: %o", diffSet)

        const symDiffSet = setA.symmetricDifference(setB)
        console.log(`Diferenca Simetrica: ${symDiffSet.toString()}`)
        // const symDiffSet = new Set([...unionSet].filter(el => {
            // return !intersecSet.has(el)
        // }))
        // console.log("Diferenca Simetrica: %o", symDiffSet)

        // const isSuperset = [...setB].every(el => setA.has(el) ? true : false)
        const isSuperset = setA.isSupersetOf(setB)
        isSupersetStr = isSuperset
            ? 'B esta contido em A'
            : 'B nao esta contido em A'

        console.log(isSupersetStr)

        unionSet.clear()
        intersecSet.clear()
        diffSet.clear()
        symDiffSet.clear()

    } else if (option === 5) {

        console.log(`\nA: ${setA.toString()}`)
        console.log(`B: ${setB.toString()}`)
        // console.log("\nA: %o", setA)
        // console.log("B: %o", setB)

    } else if (option === 6) {

        setA.clear()
        setB.clear()

        console.log(`\nA: ${setA.toString()}`)
        console.log(`B: ${setB.toString()}`)
        // console.log("\nA: %o", setA)
        // console.log("B: %o", setB)

    }
    else {
        console.log("\nOpcao Invalida!")
    }

} while (1)