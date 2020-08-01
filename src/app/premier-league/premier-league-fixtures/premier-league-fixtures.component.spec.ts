import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremierLeagueFixturesComponent } from './premier-league-fixtures.component';

describe('PremierLeagueFixturesComponent', () => {
  let component: PremierLeagueFixturesComponent;
  let fixture: ComponentFixture<PremierLeagueFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremierLeagueFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremierLeagueFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
