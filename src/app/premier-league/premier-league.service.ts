import { Injectable } from '@angular/core';

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
      { team: 'Arsenal', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Aston Villa', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Brentford', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Brighton & Hove Albion', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Burnley', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Chelsea', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Crystal Palace', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Everton', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Leeds United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Leicester City', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Liverpool', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Manchester City', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Manchester United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Newcastle United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Sheffield United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Southampton', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Tottenham Hotspur', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'West Bromwich Albion', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'West Ham United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
      { team: 'Wolverhampton Wanderers', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
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
}
