import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public MUScore: number;
  public LVScore: number;
  public THScore: number;
  public ARScore: number;


  public title: string = 'PLPredictor'
  public league: object[] = [
    {team: 'Manchester United', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0},
    {team: 'Liverpool', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0},
    {team: 'Tottenham Hotspur', played: 0, won: 0, drawn: 0, lost: 0,points: 0, gd: 0},
    {team: 'Arsenal', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0}
  ]

  public fixtures: object[] = [
    {home: 'Manchester United', homeScore: 'MUScore', awayScore: 'LVScore', away: 'Liverpool'},
    {home: 'Tottenham Hotspur', homeScore: 'THScore', awayScore: 'ARScore', away: 'Arsenal'}
  ]

public sortLeague(a, b): any {
  const teamA = a.points
  const teamB = b.points

  let comparison = 0

  if (teamA > teamB) { comparison = 1 } 
  else if (teamA < teamB) { comparison = -1 }

  return comparison
}

public matchResultsUpdateTable(fixtures): any {
  
  let newLeague = this.league

 for (let fixture of fixtures)
 for (var i = 0; i < this.league.length; i++) {
   if (fixture['home'] === this.league[i]['team']){
     this.league[i]['played'] += 1
     this.league[i]['won'] += fixture['homeScore'] > fixture['awayScore'] ? 1 : 0
     this.league[i]['drawn'] += fixture['homeScore'] === fixture['awayScore'] ? 1 : 0
     this.league[i]['lost'] += fixture['homeScore'] < fixture['awayScore'] ? 1 : 0
     this.league[i]['gd'] += fixture['homeScore'] - fixture['awayScore']
     this.league[i]['points'] += fixture['homeScore']  > fixture['awayScore'] ? 3 : fixture['homeScore'] === fixture['awayScore'] ? 1 : 0
   }
   else if (fixture['away'] === this.league[i]['team']){
     this.league[i]['played'] += 1
     this.league[i]['won'] += fixture['awayScore'] > fixture['homeScore'] ? 1 : 0
     this.league[i]['drawn'] += fixture['awayScore'] === fixture['homeScore'] ? 1 : 0
     this.league[i]['lost'] += fixture['awayScore'] < fixture['homeScore'] ? 1 : 0
     this.league[i]['gd'] += fixture['awayScore'] - fixture['homeScore']
     this.league[i]['points'] += fixture['awayScore']  > fixture['homeScore'] ? 3 : fixture['awayScore'] === fixture['homeScore'] ? 1 : 0

   }
 }

   return newLeague.sort(this.sortLeague).reverse();
}
 
public reset() {
  this.league = [
    {team: 'Manchester United', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0},
    {team: 'Liverpool', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0},
    {team: 'Tottenham Hotspur', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0},
    {team: 'Arsenal', played: 0, won: 0, drawn: 0, lost: 0, points: 0, gd: 0}
  ]  
}

}
