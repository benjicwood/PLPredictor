import { Component } from '@angular/core';

import { PremierLeagueTableComponent } from './premier-league-table/premier-league-table.component';

import { PremierLeagueFixturesComponent } from './premier-league-fixtures/premier-league-fixtures.component';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss']
})

export class PremierLeagueComponent {

  public league = this.premierLeagueTableComponent.league;
  public fixtures = this.premierLeagueFixturesComponent.fixtures;
  public gameweek = 0;

  constructor(
    public premierLeagueFixturesComponent: PremierLeagueFixturesComponent,
    public premierLeagueTableComponent: PremierLeagueTableComponent,
  ) {}

  public sortGd(a, b): any {
    const aGoalDiff = a.gd
    const bGoalDiff = b.gd

    let comparison = 0

    if (aGoalDiff > bGoalDiff) { comparison = 1 }
    if (aGoalDiff < bGoalDiff) { comparison = -1 }

    return comparison
  }

  public sortLeague(a, b): any {
    const aPoints = a.points
    const bPoints = b.points

    const aGoalDiff = a.gd
    const bGoalDiff = b.gd

    let comparison = 0

    if (aPoints > bPoints) { comparison = 1 }
    if (aPoints < bPoints) { comparison = -1 }

    return comparison
  }

  public matchResultsUpdateTable(fixtures): any {

    let newLeague = this.league

    for (let fixture of fixtures)
      for (var i = 0; i < this.league.length; i++) {
        if (fixture['home'] === this.league[i]['team']) {
          this.league[i]['played'] += 1
          this.league[i]['won'] += fixture['homeScore'] > fixture['awayScore'] ? 1 : 0
          this.league[i]['drawn'] += fixture['homeScore'] === fixture['awayScore'] ? 1 : 0
          this.league[i]['lost'] += fixture['homeScore'] < fixture['awayScore'] ? 1 : 0
          this.league[i]['gd'] += fixture['homeScore'] - fixture['awayScore']
          this.league[i]['points'] += fixture['homeScore'] > fixture['awayScore'] ? 3 : fixture['homeScore'] === fixture['awayScore'] ? 1 : 0
        }
        else if (fixture['away'] === this.league[i]['team']) {
          this.league[i]['played'] += 1
          this.league[i]['won'] += fixture['awayScore'] > fixture['homeScore'] ? 1 : 0
          this.league[i]['drawn'] += fixture['awayScore'] === fixture['homeScore'] ? 1 : 0
          this.league[i]['lost'] += fixture['awayScore'] < fixture['homeScore'] ? 1 : 0
          this.league[i]['gd'] += fixture['awayScore'] - fixture['homeScore']
          this.league[i]['points'] += fixture['awayScore'] > fixture['homeScore'] ? 3 : fixture['awayScore'] === fixture['homeScore'] ? 1 : 0

        }
      }

    this.gameweek += 1
    return newLeague.sort(this.sortGd).sort(this.sortLeague).reverse()
  }

  public reset() {
    this.league = [
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

    /*

        this.league = [
          { team: 'Arsenal', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Aston Villa', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Bournemouth', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Brighton and Hove Albion', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Burnley', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Chelsea', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Crystal Palace', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Everton', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Leicester City', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Liverpool', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Manchester City', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Manchester United', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Newcastle United', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Norwich City', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Sheffield United', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Southampton', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Tottenham Hotspur', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Watford', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'West Ham United', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
          { team: 'Wolverhampton Wanderers', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0 },
        ]

    */

    this.fixtures = [
      // [
      //   { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Leicester City' },
      //   { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Manchester United' },
      //   { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      //   { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Liverpool' },
      //   { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Chelsea' },
      //   { home: 'Everton', homeScore: null, awayScore: null, away: 'Southampton' },
      //   { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Newcastle United' },
      //   { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      //   { home: 'Watford', homeScore: null, awayScore: null, away: 'Norwich City' },
      //   { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Burnley' }
      // ],
      [
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Manchester City' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Everton' }
      ],
      [
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Watford' }
      ],
      [
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Manchester City' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Crystal Palace' }
      ],
      [
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Aston Villa' }
      ],
    ]

    /*
          [
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' },
            { home: '', homeScore: null, awayScore: null, away: '' }
         ]
    */

    this.gameweek = 0
  }

}
