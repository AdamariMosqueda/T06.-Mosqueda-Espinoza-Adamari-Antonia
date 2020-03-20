import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SugeridoDetallePage } from './sugerido-detalle.page';

describe('SugeridoDetallePage', () => {
  let component: SugeridoDetallePage;
  let fixture: ComponentFixture<SugeridoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugeridoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SugeridoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
