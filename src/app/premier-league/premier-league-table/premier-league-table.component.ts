import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier-league-table',
  templateUrl: './premier-league-table.component.html',
  styleUrls: ['./premier-league-table.component.scss']
})
export class PremierLeagueTableComponent implements OnInit {

  public league: object[] = [
    { team: 'Arsenal', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Aston Villa', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Brentford', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Brighton & Hove Albion', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Burnley', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Chelsea', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Crystal Palace', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Everton', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Leeds United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Leicester City', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Liverpool', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Manchester City', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Manchester United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Newcastle United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Sheffield United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Southampton', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Tottenham Hotspur', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'West Bromwich Albion', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'West Ham United', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
    { team: 'Wolverhampton Wanderers', played: 0, won: 0, drawn: 0, lost: 0, gd: 0, points: 0 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
