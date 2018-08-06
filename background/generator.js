/** 
 * The following code is a refactored version of the custom iterable
 * object code in the background/iterators.js file.
 * This is to show that generators are nothing but thin syntactic
 * sugar over the iterator pattern.
 */

const roster = {
  firstTeam: {
    forwards: [ 'karim benzema', 'marco asensio', 'gareth bale' ],
    midfielders: [ 'luka modric', 'casemiro', 'toni kroos' ],
    defenders: [ 'sergio ramos', 'marcelo', 'raphael varane' ],
  },
  [Symbol.iterator]: function* () {
    const positions = Object.values(this.firstTeam)
    let currentPlayerIndex = 0
    let currentPositionIndex = 0
    
    while(true) {
      const players = positions[currentPositionIndex]
        const doesNotHaveMorePlayers = !!(currentPlayerIndex >= players.length)
        if(doesNotHaveMorePlayers) {
          currentPositionIndex++
          currentPlayerIndex = 0
        }

        const doesNotHaveMorePositions = !!(currentPositionIndex >= positions.length)
        if(doesNotHaveMorePositions) return
        yield positions[currentPositionIndex][currentPlayerIndex++]
    }
  }
}

for (const player of roster) {
  player
}
