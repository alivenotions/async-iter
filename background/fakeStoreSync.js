module.exports = function createStore() {
  const tables = {
    player: {
      1: { name: 'Lionel Messi' },
      2: { name: 'Paul Pogba' },
      3: { name: 'Gareth Bale' },
      4: { name: 'Cristiano Ronaldo'},
    },
    teams: {
      1: [ 'Barcelona' ],
      2: [ 'Manchester United', 'Juventus' ],
      3: [ 'Southampton', 'Tottenham Hotspurs', 'Real Madrid' ],
      4: [ 'Sporting Lisbon', 'Manchester United', 'Real Madrid', 'Juventus' ],
    }
  }

  return {
    get: (table, id) => tables[table][id]
  }
}
