import Queue from '../data-structures/queue/entities/Queue'

function hotPotato(array: string[], num: number) {
  const queue = new Queue()
  const eliminatedList: string[] = []

  for (let i = 0; i < array.length; i++) {
    queue.enqueue(array[i])
  }

  while (queue.length > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    eliminatedList.push(`${queue.dequeue()}`)
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

const names = ['Jhon', 'Jack', 'Camila', 'Ingrid', 'Carl']
const game = hotPotato(names, 7)
game.eliminated.forEach(name => {
  console.log(`${name} is out of game`)
})

console.log(`\n${game.winner} won the game!`)
