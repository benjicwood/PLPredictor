import { Component } from '@angular/core'

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss']
})

export class PremierLeagueComponent {

  public title: string = 'PLPredictor'
  public position: number = 0
  public gameweek: number = 0

  public league: object[] = [
    { team: 'Liverpool', played: 2, won: 2, drawn: 0, lost: 0, points: 6, gd: 4 },
    { team: 'Arsenal', played: 2, won: 2, drawn: 0, lost: 0, points: 6, gd: 2 },
    { team: 'Manchester City', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 5 },
    { team: 'Manchester United', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 4 },
    { team: 'Brighton and Hove Albion', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 3 },
    { team: 'Tottenham Hotspur', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 2 },
    { team: 'Bournemouth', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 1 },
    { team: 'Sheffield United', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 1 },
    { team: 'Everton', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 1 },
    { team: 'Burnley', played: 2, won: 1, drawn: 0, lost: 1, points: 3, gd: 2 },
    { team: 'Norwich City', played: 2, won: 1, drawn: 0, lost: 1, points: 3, gd: -1 },
    { team: 'Leicester City', played: 2, won: 0, drawn: 2, lost: 0, points: 2, gd: 0 },
    { team: 'Wolverhampton Wanderers', played: 2, won: 0, drawn: 2, lost: 0, points: 2, gd: 0 },
    { team: 'Crystal Palace', played: 2, won: 0, drawn: 1, lost: 1, points: 1, gd: -1 },
    { team: 'Chelsea', played: 2, won: 0, drawn: 1, lost: 1, points: 1, gd: -4 },
    { team: 'West Ham United', played: 2, won: 0, drawn: 1, lost: 1, points: 1, gd: -5 },
    { team: 'Aston Villa', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -3 },
    { team: 'Newcastle United', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -3 },
    { team: 'Southampton', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -4 },
    { team: 'Watford', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -4 },
  ]

  public fixtures: object[] = [
    /*
        [
          { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Norwich City' },
          { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Manchester City' },
          { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Sheffield United' },
          { home: 'Burnley', homeScore: null, awayScore: null, away: 'Southampton' },
          { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Everton' },
          { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
          { home: 'Watford', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
          { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Aston Villa' },
          { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Arsenal' },
          { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Chelsea' }
        ],
        [
          { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Burnley' },
          { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Bournemouth' },
          { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'West Ham United' },
          { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Leicester City' },
          { home: 'Everton', homeScore: null, awayScore: null, away: 'Watford' },
          { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
          { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Newcastle United' },
          { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
          { home: 'Southampton', homeScore: null, awayScore: null, away: 'Liverpool' },
          { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Manchester United' }
        ],
    */
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Burnley' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Norwich City' }
    ],
    [
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'West Ham United' }
    ],
    [
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Liverpool' }
    ],
    [
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Arsenal' }
    ],
    [
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Manchester United' }
    ],
  ]

  // 8 game weeks

  // public fixtures2: object[] =

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
      { team: 'Liverpool', played: 2, won: 2, drawn: 0, lost: 0, points: 6, gd: 4 },
      { team: 'Arsenal', played: 2, won: 2, drawn: 0, lost: 0, points: 6, gd: 2 },
      { team: 'Manchester City', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 5 },
      { team: 'Manchester United', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 4 },
      { team: 'Brighton and Hove Albion', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 3 },
      { team: 'Tottenham Hotspur', played: 1, won: 1, drawn: 1, lost: 0, points: 4, gd: 2 },
      { team: 'Bournemouth', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 1 },
      { team: 'Sheffield United', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 1 },
      { team: 'Everton', played: 2, won: 1, drawn: 1, lost: 0, points: 4, gd: 1 },
      { team: 'Burnley', played: 2, won: 1, drawn: 0, lost: 1, points: 3, gd: 2 },
      { team: 'Norwich City', played: 2, won: 1, drawn: 0, lost: 1, points: 0, gd: -1 },
      { team: 'Leicester City', played: 2, won: 0, drawn: 2, lost: 0, points: 2, gd: 0 },
      { team: 'Wolverhampton Wanderers', played: 1, won: 0, drawn: 2, lost: 0, points: 2, gd: 0 },
      { team: 'Crystal Palace', played: 2, won: 0, drawn: 1, lost: 1, points: 1, gd: -1 },
      { team: 'Chelsea', played: 2, won: 0, drawn: 1, lost: 1, points: 1, gd: -4 },
      { team: 'West Ham United', played: 2, won: 0, drawn: 1, lost: 1, points: 1, gd: -5 },
      { team: 'Aston Villa', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -3 },
      { team: 'Newcastle United', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -3 },
      { team: 'Southampton', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -4 },
      { team: 'Watford', played: 2, won: 0, drawn: 0, lost: 2, points: 0, gd: -4 },
    ]

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
      /*
                  [
                    { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Norwich City' },
                    { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Manchester City' },
                    { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Sheffield United' },
                    { home: 'Burnley', homeScore: null, awayScore: null, away: 'Southampton' },
                    { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Everton' },
                    { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
                    { home: 'Watford', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
                    { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Aston Villa' },
                    { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Arsenal' },
                    { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Chelsea' }
                  ],

            [
              { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Burnley' },
              { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Bournemouth' },
              { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'West Ham United' },
              { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Leicester City' },
              { home: 'Everton', homeScore: null, awayScore: null, away: 'Watford' },
              { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
              { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Newcastle United' },
              { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
              { home: 'Southampton', homeScore: null, awayScore: null, away: 'Liverpool' },
              { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Manchester United' }
            ],
      */
      [
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Manchester City' },
        { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Burnley' }
      ],
      [
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Norwich City' }
      ],
      [
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Manchester City' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'West Ham United' }
      ],
      [
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Liverpool' }
      ],
      [
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Brighton and Hove Albion' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Manchester City' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Arsenal' }
      ],
      [
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Brighton and Hove Albion', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Manchester United' }
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
