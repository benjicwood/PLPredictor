import { Component, Input, OnInit } from '@angular/core';

import { PremierLeagueService } from '../premier-league.service';
import { PremierLeagueFixturesService } from './premier-league-fixtures.service';

@Component({
  selector: 'app-premier-league-fixtures',
  templateUrl: './premier-league-fixtures.component.html',
  styleUrls: ['./premier-league-fixtures.component.scss']
})
export class PremierLeagueFixturesComponent {

  @Input() fixtures: object;
  @Input() gameweek: number;

  public hasRemainingFixtures = true;

  constructor(
    public premierLeagueService: PremierLeagueService,
    public premierLeagueFixturesService: PremierLeagueFixturesService,
    ) { }


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
    this.premierLeagueService.resetTable();
    this.fixtures = this.premierLeagueService.fixtures;
  }

}
