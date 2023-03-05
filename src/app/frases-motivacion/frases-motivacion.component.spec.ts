import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesMotivacionComponent } from './frases-motivacion.component';

describe('FrasesMotivacionComponent', () => {
  let component: FrasesMotivacionComponent;
  let fixture: ComponentFixture<FrasesMotivacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrasesMotivacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrasesMotivacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
