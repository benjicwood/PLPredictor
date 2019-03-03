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

public sortLeague(a, b): any {
  const teamA = a.points
  const teamB = b.points

  let comparison = 0

  if (teamA > teamB) { comparison = 1 } 
  else if (teamA < teamB) { comparison = -1 }

  return comparison
}

public matchResultsUpdateTable(MUScore, LVScore, THScore, ARScore): any {
  let newLeague = this.league

 let MUPoints = MUScore > LVScore ? 3 : MUScore === LVScore ? 1 : 0
 let LVPoints = LVScore > MUScore ? 3 : LVScore === MUScore ? 1 : 0
  let THPoints = THScore > ARScore ? 3 : THScore === ARScore ? 1 : 0
  let ARPoints = ARScore > THScore ? 3 : ARScore === THScore ? 1 : 0

  for(var i = 0; i < newLeague.length; i++) {
    if (newLeague[i]['team'] === 'Manchester United') {
       newLeague[i]['played'] += 1
       MUPoints === 3 ? newLeague[i]['won'] += 1 : MUPoints === 1 ? newLeague[i]['drawn'] += 1 : newLeague[i]['drawn'] += 1
       newLeague[i]['points'] += MUPoints
       newLeague[i]['gd'] += (MUScore - LVScore)
     }
    else if (newLeague[i]['team'] === 'Liverpool') {
       newLeague[i]['played'] += 1
       LVPoints === 3 ? newLeague[i]['won'] += 1 : LVPoints === 1 ? newLeague[i]['drawn'] += 1 : newLeague[i]['drawn'] += 1
       newLeague[i]['points'] += LVPoints
       newLeague[i]['gd'] += (LVScore - MUScore)
     } 
    else if (newLeague[i]['team'] === 'Tottenham Hotspur') {
       newLeague[i]['played'] += 1
       THPoints === 3 ? newLeague[i]['won'] += 1 : THPoints === 1 ? newLeague[i]['drawn'] += 1 : newLeague[i]['drawn'] += 1
       newLeague[i]['points'] += THPoints
       newLeague[i]['gd'] += (THScore - ARScore)
 
     }
     else if (newLeague[i]['team'] === 'Arsenal') {
       newLeague[i]['played'] += 1
       ARPoints === 3 ? newLeague[i]['won'] += 1 : ARPoints === 1 ? newLeague[i]['drawn'] += 1 : newLeague[i]['drawn'] += 1
       newLeague[i]['points'] += ARPoints
       newLeague[i]['gd'] += (ARScore - THScore)
 
     }
 
   }
   
   return newLeague.sort(this.sortLeague).reverse();

}
 
public reset() {
  this.league = [
    {team: 'Manchester United', points: 0, gd: 0},
    {team: 'Liverpool', points: 0,gd: 0},
    {team: 'Tottenham Hotspur', points: 0, gd: 0},
    {team: 'Arsenal', points: 0, gd: 0}
  ]  
}


}
