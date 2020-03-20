import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibroDetallePage } from './libro-detalle.page';

describe('LibroDetallePage', () => {
  let component: LibroDetallePage;
  let fixture: ComponentFixture<LibroDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibroDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
