import { Component, Input, OnInit } from '@angular/core';

import { PremierLeagueService } from '../premier-league.service';

@Component({
  selector: 'app-premier-league-table',
  templateUrl: './premier-league-table.component.html',
  styleUrls: ['./premier-league-table.component.scss']
})
export class PremierLeagueTableComponent implements OnInit {

  @Input() league: object;

  constructor(
    public premierLeagueService: PremierLeagueService,
  ) { }

  ngOnInit() {
    this.getLeague();
  }

  getLeague() {
    this.league = this.premierLeagueService.league;
  }

}
