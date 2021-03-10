import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Nota2Page } from './nota2.page';

describe('Nota2Page', () => {
  let component: Nota2Page;
  let fixture: ComponentFixture<Nota2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nota2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Nota2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
