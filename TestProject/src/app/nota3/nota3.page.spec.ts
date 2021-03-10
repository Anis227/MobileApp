import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Nota3Page } from './nota3.page';

describe('Nota3Page', () => {
  let component: Nota3Page;
  let fixture: ComponentFixture<Nota3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nota3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Nota3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
