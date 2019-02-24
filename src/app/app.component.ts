import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../node_modules/bulma/css/bulma.css']
})
export class AppComponent {
  public title: string = 'PLPredictor'
  public league: object[] = [
    {team: 'Manchester United', points: 0, gd: 0},
    {team: 'Liverpool', points: 0, gd: 0},
    {team: 'Tottenham Hotspur', points: 0, gd: 0},
    {team: 'Arsenal', points: 0, gd: 0}
  ]

public sortLeague(a, b): any {
  const teamA = a.points
  const teamB = b.points

  let comparison = 0

  if (teamA > teamB) { comparison = 1 } 
  else if (teamA < teamB) { comparison = -1 }

  return comparison
}

public matchResultsUpdateTable(MU, LV, TH, AR): any {
  let newLeague = this.league

  let MUPoints = MU > LV ? 3 : MU === LV ? 1 : 0
  let LVPoints = LV > MU ? 3 : LV === MU ? 1 : 0
  let THPoints = TH > AR ? 3 : TH === AR ? 1 : 0
  let ARPoints = AR > TH ? 3 : AR === TH ? 1 : 0

  for(var i = 0; i < newLeague.length; i++) {
    if (newLeague[i]['team'] === 'Manchester United') {
       newLeague[i]['points'] += MUPoints
       newLeague[i]['gd'] += MU - LV
     }
    else if (newLeague[i]['team'] === 'Liverpool') {
       newLeague[i]['points'] += LVPoints
       newLeague[i]['gd'] += LV - MU
     } 
    else if (newLeague[i]['team'] === 'Tottenham Hotspur') {
       newLeague[i]['points'] += THPoints
       newLeague[i]['gd'] += TH - AR
 
     }
     else if (newLeague[i]['team'] === 'Arsenal') {
       newLeague[i]['points'] += ARPoints
       newLeague[i]['gd'] += AR - TH
 
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
