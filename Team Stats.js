const team = {
    _players: [
      {firstName: 'Sadio', lastName: 'Mane', age: 28},
      {firstName: 'Mohammed', lastName: 'Salah', age: 28},
      {firstName: 'Jordan', lastName: 'Henderson', age: 30}
    ],
    _games: [
      {opponent: 'Fulham', teamPoints: 0, opponentPoints: 3},
      {opponent: 'Southampton', teampoints: 1, opponentPoints: 1},
      {opponent: 'Spurs', teamPoints: 3, opponentPoints: 0},
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
    addGame(oppName, points, oppPoints){
      const game = {
        opponent: oppName,
        points: points,
        opponentPoints: oppPoints
      }
      this.games.push(game);
    }
  }
  team.addPlayer('Andy', 'Robertson', 26);
  team.addPlayer('Bobby', 'Firmino', 28);
  team.addPlayer('Virgil', 'Van Dijk', 29)
  
  // check to see that the new players have been added
  console.log(team.players)
  
  team.addGame('West Brom', 1, 1);
  team.addGame('West Hame', 3, 0);
  team.addGame('Man City', 0, 3);
  
  // check to see that the new games have been added
  console.log(team.games);
    