import Queue from '../data-structures/queue/queue'

function hotPotato(elementsList: string[], num: number) {
  const queue = new Queue()
  const elimitatedList: string[] = []

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.length > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    elimitatedList.push(`${queue.dequeue()}`)
  }

  return {
    elimitated: elimitatedList,
    winner: queue.dequeue()
  }
}

const names = ['Jhon', 'Jack', 'Camila', 'Ingrid', 'Carl']
const game = hotPotato(names, 7)
game.elimitated.forEach(name => {
  console.log(`${name} esta fora do jogo`)
})

console.log(`\n${game.winner} ganhou o jogo`)
