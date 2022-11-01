import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitsCartesComponent } from './liste-produits-cartes.component';

describe('ListeProduitsCartesComponent', () => {
  let component: ListeProduitsCartesComponent;
  let fixture: ComponentFixture<ListeProduitsCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProduitsCartesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProduitsCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
