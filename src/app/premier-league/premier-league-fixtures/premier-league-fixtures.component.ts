import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier-league-fixtures',
  templateUrl: './premier-league-fixtures.component.html',
  styleUrls: ['./premier-league-fixtures.component.scss']
})
export class PremierLeagueFixturesComponent implements OnInit {

  public gameweek = 0;

  public fixtures: object[] = [
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
  ];

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

  constructor() { }

  ngOnInit() {
  }

}
