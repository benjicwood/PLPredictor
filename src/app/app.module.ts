import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { PremierLeagueComponent } from './premier-league/premier-league.component'

import { AppRoutingModule } from './app-routing.module'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PremierLeagueTableComponent } from './premier-league/premier-league-table/premier-league-table.component';
import { PremierLeagueFixturesComponent } from './premier-league/premier-league-fixtures/premier-league-fixtures.component';

@NgModule({
  declarations: [
    AppComponent,
    PremierLeagueComponent,
    HeaderComponent,
    FooterComponent,
    PremierLeagueTableComponent,
    PremierLeagueFixturesComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule
  ],
  providers: [
    PremierLeagueFixturesComponent,
    PremierLeagueTableComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
