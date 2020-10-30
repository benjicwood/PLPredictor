import { EventEmitter, Injectable, Output } from '@angular/core';

import * as _ from 'lodash';

import { PremierLeagueFixturesService } from './premier-league-fixtures/premier-league-fixtures.service';
import { PremierLeagueTableService } from './premier-league-table/premier-league-table.service';

import { fixturesData } from './data/fixtures';
import { leagueData } from './data/league-table';

@Injectable({
  providedIn: 'root'
})
export class PremierLeagueService {

  constructor(
    public premierLeagueFixturesService: PremierLeagueFixturesService,
    public premierLeagueTableService: PremierLeagueTableService,
    ) { }

    public league: object[] = _.cloneDeep(leagueData);
    public fixtures: object[] = _.cloneDeep(fixturesData);

    @Output() leagueReset: EventEmitter<object> = new EventEmitter();
    @Output() fixturesReset: EventEmitter<object> = new EventEmitter();

    public matchResultsUpdateTable(fixtures): any {

      for (const fixture of fixtures) {
        for (let i = 0; i < this.league.length; i++) {
          if (fixture['home'] === this.league[i]['team']) {
            this.league[i]['played'] += 1;
            this.league[i]['won'] += fixture['homeScore'] > fixture['awayScore'] ? 1 : 0;
            this.league[i]['drawn'] += fixture['homeScore'] === fixture['awayScore'] ? 1 : 0;
            this.league[i]['lost'] += fixture['homeScore'] < fixture['awayScore'] ? 1 : 0;
            this.league[i]['gd'] += fixture['homeScore'] - fixture['awayScore'];
            this.league[i]['points'] += fixture['homeScore'] > fixture['awayScore'] ?
            3 : fixture['homeScore'] === fixture['awayScore'] ? 1 : 0;
          }
          if (fixture['away'] === this.league[i]['team']) {
            this.league[i]['played'] += 1;
            this.league[i]['won'] += fixture['awayScore'] > fixture['homeScore'] ? 1 : 0;
            this.league[i]['drawn'] += fixture['awayScore'] === fixture['homeScore'] ? 1 : 0;
            this.league[i]['lost'] += fixture['awayScore'] < fixture['homeScore'] ? 1 : 0;
            this.league[i]['gd'] += fixture['awayScore'] - fixture['homeScore'];
            this.league[i]['points'] += fixture['awayScore'] > fixture['homeScore'] ?
            3 : fixture['awayScore'] === fixture['homeScore'] ? 1 : 0;
          }
        }
      }

      this.league.sort(this.sortGd).sort(this.sortLeague).reverse();
    }

  public sortGd(a, b) { // sortGoalDifference
    const aGoalDiff = a.gd;
    const bGoalDiff = b.gd;

    let comparison = 0;

    if (aGoalDiff > bGoalDiff) { comparison = 1; }
    if (aGoalDiff < bGoalDiff) { comparison = -1; }

    return comparison;
  }

  public sortLeague(a, b) {
    const aPoints = a.points;
    const bPoints = b.points;

    const aGoalDiff = a.gd;
    const bGoalDiff = b.gd;

    let comparison = 0;

    if (aPoints > bPoints) { comparison = 1; }
    if (aPoints < bPoints) { comparison = -1; }

    return comparison;
  }

  public getLeague() {
    this.league = leagueData;
  }

  public resetTable() {
    this.league = _.cloneDeep(leagueData);
    this.fixtures = _.cloneDeep(fixturesData);
  }

}
