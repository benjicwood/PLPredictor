import { Component, Input, OnInit } from '@angular/core';

import { PremierLeagueService } from '../premier-league.service';

@Component({
  selector: 'app-premier-league-fixtures',
  templateUrl: './premier-league-fixtures.component.html',
  styleUrls: ['./premier-league-fixtures.component.scss']
})
export class PremierLeagueFixturesComponent implements OnInit {

  @Input() gameweek: number = 0;

  public hasRemainingFixtures = true;

  public fixtures: object[] = [
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Brentford', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Crystal Palace' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Brentford' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
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

  constructor(
    public premierLeagueService: PremierLeagueService
    ) { }

  ngOnInit() {
  }

  public matchResultsUpdateTable(fixtures) {
    if (!fixtures) {
      this.hasRemainingFixtures = false;
      return;
    }
    this.premierLeagueService.matchResultsUpdateTable(fixtures);
    this.gameweek ++;
  }

  public resetTable() {
    this.gameweek = 0;
    this.hasRemainingFixtures = true;
  }

}
