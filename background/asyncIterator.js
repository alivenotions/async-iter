const createStore = require('./fakeStoreAsync')

const store = createStore()

const players = {
  [Symbol.asyncIterator]() {
    let i = 0
    return {
      next: async function() {
        i++
        const player = await store.get('player', i)
        
        if(!player) {
          return { done: true }
        }

        player.teams = await store.get('teams', i)
        return {
          value: player,
          done: false,
        }
      }
    }
  }
}

;(async function() {
  for await (const player of players) {
    console.log(player)
  }
})()
