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

}
