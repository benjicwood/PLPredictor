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
    { team: 'Liverpool', played: 17, won: 16, drawn: 1, lost: 0, gd: 28, points: 49 },
    { team: 'Leicester City', played: 18, won: 12, drawn: 3, lost: 3, gd: 27, points: 39 },
    { team: 'Manchester City', played: 18, won: 12, drawn: 2, lost: 4, gd: 30, points: 38 },
    { team: 'Chelsea', played: 18, won: 10, drawn: 2, lost: 6, gd: 8, points: 32 },
    { team: 'Sheffield United', played: 18, won: 7, drawn: 7, lost: 4, gd: 6, points: 28 },
    { team: 'Wolverhampton Wanderers', played: 18, won: 6, drawn: 9, lost: 3, gd: 4, points: 27 },
    { team: 'Tottenham Hotspur', played: 18, won: 7, drawn: 5, lost: 6, gd: 6, points: 26 },
    { team: 'Manchester United', played: 18, won: 6, drawn: 7, lost: 5, gd: 4, points: 25 },
    { team: 'Newcastle United', played: 18, won: 7, drawn: 4, lost: 7, gd: -6, points: 25 },
    { team: 'Burnley', played: 18, won: 7, drawn: 3, lost: 8, gd: -6, points: 24 },
    { team: 'Crystal Palace', played: 18, won: 6, drawn: 5, lost: 7, gd: -5, points: 23 },
    { team: 'Arsenal', played: 18, won: 5, drawn: 8, lost: 5, gd: -3, points: 23 },
    { team: 'Brighton & Hove Albion', played: 18, won: 5, drawn: 5, lost: 8, gd: -5, points: 20 },
    { team: 'Bournemouth', played: 17, won: 5, drawn: 4, lost: 9, gd: -6, points: 19 },
    { team: 'Everton', played: 18, won: 5, drawn: 4, lost: 9, gd: -9, points: 19 },
    { team: 'West Ham United', played: 17, won: 5, drawn: 4, lost: 8, gd: -9, points: 19 },
    { team: 'Southampton', played: 18, won: 5, drawn: 3, lost: 10, gd: -16, points: 18 },
    { team: 'Aston Villa', played: 18, won: 4, drawn: 3, lost: 11, gd: -9, points: 15 },
    { team: 'Norwich City', played: 18, won: 3, drawn: 3, lost: 12, gd: -18, points: 12 },
    { team: 'Watford', played: 18, won: 2, drawn: 6, lost: 10, gd: -21, points: 12 },
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
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Manchester United' }
    ],
    [
      { home: 'Everton', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Arsenal' }
    ],
    [
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Manchester United' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Newcastle United' }
    ],
    [
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
    ],
    [
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Newcastle United' }
    ],
    [
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Aston Villa' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Everton' }
    ],
    [
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Arsenal' }
    ],
    [
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
    ],
    [
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Liverpool' } // this game is being re-arranged
    ],
    */
    [
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Manchester City' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Sheffield United' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Sheffield United' }
    ],
    [
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Manchester City' }
    ],
    [
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Manchester United' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Liverpool' }
    ],
    [
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Norwich City' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Leicester City' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Bournemouth' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Mancheste City' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Watford' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Norwich City' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Watford', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Southampton' }
    ]
  ]

  // March

  /*

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


  */

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
      { team: 'Liverpool', played: 17, won: 16, drawn: 1, lost: 0, gd: 28, points: 49 },
      { team: 'Leicester City', played: 18, won: 12, drawn: 3, lost: 3, gd: 27, points: 39 },
      { team: 'Manchester City', played: 18, won: 12, drawn: 2, lost: 4, gd: 30, points: 38 },
      { team: 'Chelsea', played: 18, won: 10, drawn: 2, lost: 6, gd: 8, points: 32 },
      { team: 'Sheffield United', played: 18, won: 7, drawn: 7, lost: 4, gd: 6, points: 28 },
      { team: 'Wolverhampton Wanderers', played: 18, won: 6, drawn: 9, lost: 3, gd: 4, points: 27 },
      { team: 'Tottenham Hotspur', played: 18, won: 7, drawn: 5, lost: 6, gd: 6, points: 26 },
      { team: 'Manchester United', played: 18, won: 6, drawn: 7, lost: 5, gd: 4, points: 25 },
      { team: 'Newcastle United', played: 18, won: 7, drawn: 4, lost: 7, gd: -6, points: 25 },
      { team: 'Burnley', played: 18, won: 7, drawn: 3, lost: 8, gd: -6, points: 24 },
      { team: 'Crystal Palace', played: 18, won: 6, drawn: 5, lost: 7, gd: -5, points: 23 },
      { team: 'Arsenal', played: 18, won: 5, drawn: 8, lost: 5, gd: -3, points: 23 },
      { team: 'Brighton & Hove Albion', played: 18, won: 5, drawn: 5, lost: 8, gd: -5, points: 20 },
      { team: 'Bournemouth', played: 17, won: 5, drawn: 4, lost: 9, gd: -6, points: 19 },
      { team: 'Everton', played: 18, won: 5, drawn: 4, lost: 9, gd: -9, points: 19 },
      { team: 'West Ham United', played: 17, won: 5, drawn: 4, lost: 8, gd: -9, points: 19 },
      { team: 'Southampton', played: 18, won: 5, drawn: 3, lost: 10, gd: -16, points: 18 },
      { team: 'Aston Villa', played: 18, won: 4, drawn: 3, lost: 11, gd: -9, points: 15 },
      { team: 'Norwich City', played: 18, won: 3, drawn: 3, lost: 12, gd: -18, points: 12 },
      { team: 'Watford', played: 18, won: 2, drawn: 6, lost: 10, gd: -21, points: 12 },
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
      [
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Manchester City' }
      ],
      [
        { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Sheffield United' }
      ],
      [
        { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Sheffield United' }
      ],
      [
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Manchester City' }
      ],
      [
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Manchester United' }
      ],
      [
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Manchester City' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Liverpool' }
      ],
      [
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Southampton' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Norwich City' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Manchester City' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
      ],
      [
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Leicester City' }
      ],
      [
        { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Everton' },
        { home: 'Burnley', homeScore: null, awayScore: null, away: 'Bournemouth' },
        { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
        { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Newcastle United' },
        { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Mancheste City' },
        { home: 'Liverpool', homeScore: null, awayScore: null, away: 'West Ham United' },
        { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Watford' },
        { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
        { home: 'Southampton', homeScore: null, awayScore: null, away: 'Aston Villa' },
        { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Norwich City' }
      ],
      [
        { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Sheffield United' },
        { home: 'Bournemouth', homeScore: null, awayScore: null, away: 'Chelsea' },
        { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Crystal Palace' },
        { home: 'Everton', homeScore: null, awayScore: null, away: 'Manchester United' },
        { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Arsenal' },
        { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Burnley' },
        { home: 'Norwich City', homeScore: null, awayScore: null, away: 'Leicester City' },
        { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
        { home: 'Watford', homeScore: null, awayScore: null, away: 'Liverpool' },
        { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Southampton' }
      ]
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
