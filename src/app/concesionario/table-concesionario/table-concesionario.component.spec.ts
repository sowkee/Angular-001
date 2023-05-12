import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConcesionarioComponent } from './table-concesionario.component';

describe('TableConcesionarioComponent', () => {
  let component: TableConcesionarioComponent;
  let fixture: ComponentFixture<TableConcesionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableConcesionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableConcesionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
