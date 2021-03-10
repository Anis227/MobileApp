import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Nota1Page } from './nota1.page';

describe('Nota1Page', () => {
  let component: Nota1Page;
  let fixture: ComponentFixture<Nota1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nota1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Nota1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
