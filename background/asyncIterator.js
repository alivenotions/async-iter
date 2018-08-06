const createStore = require('./fakeStoreSync')

const store = createStore()

const players = {
  [Symbol.iterator]() {
    let i = 0
    return {
      next() {
        i++
        const player = store.get('player', i)
        
        if(!player) {
          return { done: true }
        }

        player.teams = store.get('teams', i)
        return {
          value: player,
          done: false,
        }
      }
    }
  }
}

for (const player of players) {
  console.log(player)
}
