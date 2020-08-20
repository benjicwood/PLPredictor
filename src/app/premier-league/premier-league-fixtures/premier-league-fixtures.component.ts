import { Component, Input, OnInit } from '@angular/core';

import { PremierLeagueService } from '../premier-league.service';

@Component({
  selector: 'app-premier-league-fixtures',
  templateUrl: './premier-league-fixtures.component.html',
  styleUrls: ['./premier-league-fixtures.component.scss']
})
export class PremierLeagueFixturesComponent implements OnInit {

  @Input() gameweek = 0;

  public hasRemainingFixtures = true;

  public fixtures: object[] = [
    [
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Manchester City' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Fulham' }
    ],
    [
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Burnley' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Newcastle United' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Crystal Palace' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Fulham' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Southampton' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Aston Villa' }
    ]
    // up to December
  ];

  public fixtures2: object[] = [
    [
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Manchester City' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Fulham' }
    ],
    [
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Burnley' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Newcastle United' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Crystal Palace' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Fulham' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Southampton' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Aston Villa' }
    ]
    // up to December
  ];

  public fixturesCopy: object[];

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
    this.fixturesCopy = this.fixtures.slice(0);
    console.log(this.fixturesCopy)
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
    this.fixtures = this.fixtures2;
    this.premierLeagueService.resetTable();
    // debugger;
  }

}
