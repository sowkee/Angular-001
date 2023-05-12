import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVehiculoComponent } from './table-vehiculo.component';

describe('TableVehiculoComponent', () => {
  let component: TableVehiculoComponent;
  let fixture: ComponentFixture<TableVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableVehiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
