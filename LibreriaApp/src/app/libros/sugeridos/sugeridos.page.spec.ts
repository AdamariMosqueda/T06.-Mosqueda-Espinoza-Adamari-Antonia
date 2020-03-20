import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SugeridosPage } from './sugeridos.page';

describe('SugeridosPage', () => {
  let component: SugeridosPage;
  let fixture: ComponentFixture<SugeridosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugeridosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SugeridosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
