/** basic functionality of for...of */
const players = [
  'marcelo',
  'gareth bale',
  'luka modric',
  'karim benzema',
]

// the only reason for...of loop has any idea how to iterate
// over this array is because of iterators.
for (const player of players) {
  player
}

const iterator = players[Symbol.iterator]()

const roster = {
  firstTeam: {
    forwards: [ 'karim benzema', 'marco asensio', 'gareth bale' ],
    midfielders: [ 'luka modric', 'casemiro', 'toni kroos' ],
    defenders: [ 'sergio ramos', 'marcelo', 'raphael varane' ],
  },
  [Symbol.iterator]() {
    const positions = Object.values(this.firstTeam)
    let currentPlayerIndex = 0
    let currentPositionIndex = 0

    return {
      next() {
        const players = positions[currentPositionIndex]
        const doesNotHaveMorePlayers = !!(currentPlayerIndex >= players.length)
        if(doesNotHaveMorePlayers) {
          currentPositionIndex++
          currentPlayerIndex = 0
        }

        const doesNotHaveMorePositions = !!(currentPositionIndex >= positions.length)
        if(doesNotHaveMorePositions) {
          return {
            value: undefined,
            done: true
          }
        }

        return {
          value: positions[currentPositionIndex][currentPlayerIndex++],
          done: false
        }
      }
    }
  }
}

for (const player of roster) {
  player
}
