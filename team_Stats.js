const team = {
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
  },
      {
        opponent: 'Football',
        teamPoints: 98,
        opponentPoints: 27
      },
          {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      }
  
  
  ],
    _players: [
      {
        firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 54
      },
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
      },
          {
        firstName: 'Klins',
        lastName: 'Man',
        age: 11
      }
  ],
  
    get games() {
      return this._games;
     },
    get players() {
       return this._players;
     },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
   
      this.players.push(player);
    },
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
  
  };
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  //console.log(team.players)
  
  
  team.addGame('Titans', 100, 98);
  team.addGame('Football', 100, 98);
  team.addGame('BasketBall', 100, 98);
  console.log(team.games)
  
  