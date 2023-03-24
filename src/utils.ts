import {logo} from "./data";





export const getClubLogo = (name) => {
    const club_logo=logo.filter((data)=>{ return data.name === name})[0].url
    return club_logo;

}



export const getLeagueTableStats=(data:any) =>{
    const teams = {}
    
    // Loop through data and calculate stats for each team
    for (let i = 0; i < data.length; i++) {
      const { score, date } = data[i]
      const currentDate = new Date('2021-05-05T14:00:00')
      const gameDate = new Date(date)
      
      // Skip games in the future
      if (gameDate > currentDate) {
        continue
      }
      
      // Calculate stats for each team
      for (let [team, goals] of Object.entries(score)) {
        if (!teams[team]) {
          teams[team] = {
            name: team,
            gamesPlayed: 0,
            wins: 0,
            losses: 0,
            draws: 0,
            goalsScored: 0,
            goalsConceded: 0,
            goalDifference: 0,
            points: 0
          }
        }
        
        teams[team].gamesPlayed += 1
        teams[team].goalsScored += goals || 0
        
        if (goals === null) {
          // Game was not played
          continue
        }
        
        teams[team].goalsConceded += Object.values(score).reduce((a, b) => a + (b || 0), 0) - goals
        teams[team].goalDifference = teams[team].goalsScored - teams[team].goalsConceded
        
        if (goals > Object.values(score).reduce((a, b) => a + (b || 0), 0) - goals) {
          // Team won the game
          teams[team].wins += 1
          teams[team].points += 3
        } else if (goals < Object.values(score).reduce((a, b) => a + (b || 0), 0) - goals) {
          // Team lost the game
          teams[team].losses += 1
        } else {
          // Game was a draw
          teams[team].draws += 1
          teams[team].points += 1
        }
      }
    }
    
    // Sort teams by points, goal difference and then goals scored
    const sortedTeams = Object.values(teams).sort((a, b) => {
      if (a.points !== b.points) {
        return b.points - a.points
      }
      if (a.goalDifference !== b.goalDifference) {
        return b.goalDifference - a.goalDifference
      }
      return b.goalsScored - a.goalsScored
    })
    
    // Format and return league table statistics
    const table = sortedTeams.map((team, index) => ({
      position: index + 1,
      name: team.name,
      gamesPlayed: team.gamesPlayed,
      wins: team.wins,
      losses: team.losses,
      draws: team.draws,
      goalsScored: team.goalsScored,
      goalsConceded: team.goalsConceded,
      goalDifference: team.goalDifference,
      points: team.points,
    }))
    
    return table
  }

