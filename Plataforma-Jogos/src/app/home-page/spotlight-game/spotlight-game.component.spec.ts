import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightGameComponent } from './spotlight-game.component';

describe('SpotlightGameComponent', () => {
  let component: SpotlightGameComponent;
  let fixture: ComponentFixture<SpotlightGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotlightGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
