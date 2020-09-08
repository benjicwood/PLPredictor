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
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Manchester United' }
    ],
    [
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'West Bromwich Albion' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Wst Ham United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Aston Villa' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Leeds United' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Arsenal' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'West Bromwich Albion' }
    ],
    [
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'West Ham United' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Liverpool' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
    ],
    [
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Leicester City' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Leeds United' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Sheffield United' }
    ],
    [
      { home: 'Arsenal', homeScore: null, awayScore: null, away: 'Manchester City' },
      { home: 'Aston Villa', homeScore: null, awayScore: null, away: 'Leicester City' },
      { home: 'Brighton & Hove Albion', homeScore: null, awayScore: null, away: 'Crystal Palace' },
      { home: 'Burnley', homeScore: null, awayScore: null, away: 'West Bromwich Albion' },
      { home: 'Fulham', homeScore: null, awayScore: null, away: 'Sheffield United' },
      { home: 'Liverpool', homeScore: null, awayScore: null, away: 'Everton' },
      { home: 'Manchester United', homeScore: null, awayScore: null, away: 'Newcastle United' },
      { home: 'Southampton', homeScore: null, awayScore: null, away: 'Chelsea' },
      { home: 'West Ham United', homeScore: null, awayScore: null, away: 'Tottenham Hotspur' },
      { home: 'Wolverhampton Wanderers', homeScore: null, awayScore: null, away: 'Leeds United' }
    ],
    [
      { home: 'Chelsea', homeScore: null, awayScore: null, away: 'Manchester United' },
      { home: 'Crystal Palace', homeScore: null, awayScore: null, away: 'Fulham' },
      { home: 'Everton', homeScore: null, awayScore: null, away: 'Southampton' },
      { home: 'Leeds United', homeScore: null, awayScore: null, away: 'Aston Villa' },
      { home: 'Leicester City', homeScore: null, awayScore: null, away: 'Arsenal' },
      { home: 'Manchester City', homeScore: null, awayScore: null, away: 'West Ham United' },
      { home: 'Newcastle United', homeScore: null, awayScore: null, away: 'Wolverhampton Wanderers' },
      { home: 'Sheffield United', homeScore: null, awayScore: null, away: 'Liverpool' },
      { home: 'Tottenham Hotspur', homeScore: null, awayScore: null, away: 'Burnley' },
      { home: 'West Bromwich Albion', homeScore: null, awayScore: null, away: 'Brighton & Hove Albion' }
    ]
    // up to March
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
