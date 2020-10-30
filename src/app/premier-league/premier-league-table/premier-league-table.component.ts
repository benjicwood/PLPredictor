import { Component, Input } from '@angular/core';

import { PremierLeagueService } from '../premier-league.service';
import { PremierLeagueTableService } from './premier-league-table.service';

@Component({
  selector: 'app-premier-league-table',
  templateUrl: './premier-league-table.component.html',
  styleUrls: ['./premier-league-table.component.scss']
})
export class PremierLeagueTableComponent {

  @Input() league: object;

  constructor(
    public premierLeagueService: PremierLeagueService,
    public premierLeagueTableService: PremierLeagueTableService,
  ) { }

}
