import { Component, OnInit } from '@angular/core';

import { PremierLeagueService } from './premier-league.service';

@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  styleUrls: ['./premier-league.component.scss']
})

export class PremierLeagueComponent implements OnInit {

  public league;
  public fixtures;

  public gameweek = 0;
  public hasRemainingFixtures = true;

  constructor(
    public premierLeagueService: PremierLeagueService,
  ) {}

  ngOnInit() {
      this.getData();
  }


  getData() {
    this.league = this.premierLeagueService.league;
    this.fixtures = this.premierLeagueService.fixtures;
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
    this.premierLeagueService.resetTable();
    this.fixtures = this.premierLeagueService.fixtures;
    this.league = this.premierLeagueService.league;
  }


}
