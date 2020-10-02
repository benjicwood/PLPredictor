import { Injectable } from '@angular/core';
import { TextAst } from '@angular/compiler';

// import { PremierLeagueTableComponent } from './premier-league-table/premier-league-table.component';
// import { PremierLeagueFixturesComponent } from './premier-league-fixtures/premier-league-fixtures.component';

@Injectable({
  providedIn: 'root'
})
export class PremierLeagueService {

  constructor(
    // public premierLeagueFixturesComponent: PremierLeagueFixturesComponent,
   //  public premierLeagueTableComponent: PremierLeagueTableComponent,
    ) { }

    public league: object[] = [
      { team: 'Leicester City', icon: 'leicestercity', played: 3, won: 3, drawn: 0, lost: 0, gd: 8, points: 9 },
      { team: 'Liverpool', icon: 'liverpool', played: 3, won: 3, drawn: 0, lost: 0, gd: 5, points: 9 },
      { team: 'Everton', icon: 'everton', played: 3, won: 3, drawn: 0, lost: 0, gd: 5, points: 9 },
      { team: 'Aston Villa', icon: 'astonvilla', played: 2, won: 2, drawn: 0, lost: 0, gd: 4, points: 6 },
      { team: 'Arsenal', icon: 'arsenal', played: 3, won: 2, drawn: 0, lost: 1, gd: 2, points: 6 },
      { team: 'Crystal Palace', icon: 'crystalpalace', played: 3, won: 2, drawn: 0, lost: 1, gd: 2, points: 6 },
      { team: 'Leeds United', icon: 'leedsunited', played: 3, won: 2, drawn: 0, lost: 1, gd: 1, points: 6 },
      { team: 'Tottenham Hotspur', icon: 'tottenhamhotspur', played: 3, won: 1, drawn: 1, lost: 1, gd: 2, points: 4 },
      { team: 'Chelsea', icon: 'chelsea', played: 3, won: 1, drawn: 1, lost: 1, gd: 0, points: 4 },
      { team: 'Newcastle United', icon: 'newcastleunited', played: 3, won: 1, drawn: 1, lost: 1, gd: -1, points: 4 },
      { team: 'West Ham United', icon: 'westhamunited', played: 3, won: 1, drawn: 0, lost: 2, gd: 1, points: 3 },
      { team: 'Brighton & Hove Albion', icon: 'brightonandhovealbion', played: 3, won: 1, drawn: 0, lost: 2, gd: 0, points: 3 },
      { team: 'Manchester City', icon: 'manchestercity', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, points: 3 },
      { team: 'Manchester United', icon: 'manchesterunited', played: 2, won: 1, drawn: 0, lost: 1, gd: -1, points: 3 },
      { team: 'Southampton', icon: 'southampton', played: 3, won: 1, drawn: 0, lost: 2, gd: -3, points: 3 },
      { team: 'Wolverhampton Wanderers', icon: 'wolverhamptonwanderers', played: 3, won: 1, drawn: 0, lost: 2, gd: -4, points: 3 },
      { team: 'West Bromwich Albion', icon: 'westbromwichalbion', played: 3, won: 0, drawn: 1, lost: 2, gd: -6, points: 1 },
      { team: 'Burnley', icon: 'burnley', played: 2, won: 0, drawn: 0, lost: 2, gd: -3, points: 0 },
      { team: 'Sheffield United', icon: 'sheffieldunited', played: 3, won: 0, drawn: 0, lost: 3, gd: -4, points: 0 },
      { team: 'Fulham', icon: 'fulham', played: 3, won: 0, drawn: 0, lost: 3, gd: -7, points: 0 },
    ];

    public matchResultsUpdateTable(fixtures): any {

      for (const fixture of fixtures) {
        for (let i = 0; i < this.league.length; i++) {
          if (fixture['home'] === this.league[i]['team']) {
            this.league[i]['played'] += 1;
            this.league[i]['won'] += fixture['homeScore'] > fixture['awayScore'] ? 1 : 0;
            this.league[i]['drawn'] += fixture['homeScore'] === fixture['awayScore'] ? 1 : 0;
            this.league[i]['lost'] += fixture['homeScore'] < fixture['awayScore'] ? 1 : 0;
            this.league[i]['gd'] += fixture['homeScore'] - fixture['awayScore'];
            this.league[i]['points'] += fixture['homeScore'] > fixture['awayScore'] ?
            3 : fixture['homeScore'] === fixture['awayScore'] ? 1 : 0;
          }
          if (fixture['away'] === this.league[i]['team']) {
            this.league[i]['played'] += 1;
            this.league[i]['won'] += fixture['awayScore'] > fixture['homeScore'] ? 1 : 0;
            this.league[i]['drawn'] += fixture['awayScore'] === fixture['homeScore'] ? 1 : 0;
            this.league[i]['lost'] += fixture['awayScore'] < fixture['homeScore'] ? 1 : 0;
            this.league[i]['gd'] += fixture['awayScore'] - fixture['homeScore'];
            this.league[i]['points'] += fixture['awayScore'] > fixture['homeScore'] ?
            3 : fixture['awayScore'] === fixture['homeScore'] ? 1 : 0;
          }
        }
      }

      this.league.sort(this.sortGd).sort(this.sortLeague).reverse();
    }

  public sortGd(a, b) { // sortGoalDifference
    const aGoalDiff = a.gd;
    const bGoalDiff = b.gd;

    let comparison = 0;

    if (aGoalDiff > bGoalDiff) { comparison = 1; }
    if (aGoalDiff < bGoalDiff) { comparison = -1; }

    return comparison;
  }

  public sortLeague(a, b) {
    const aPoints = a.points;
    const bPoints = b.points;

    const aGoalDiff = a.gd;
    const bGoalDiff = b.gd;

    let comparison = 0;

    if (aPoints > bPoints) { comparison = 1; }
    if (aPoints < bPoints) { comparison = -1; }

    return comparison;
  }

  public resetTable() {
    // this.league = this.league2;
    this.league.forEach(team => this.resetTeam(team));
  }

  public resetTeam(team) {
    team.played = 0;
    team.won = 0;
    team.drawn = 0;
    team.lost = 0;
    team.gd = 0;
    team.points = 0;
  }
}
