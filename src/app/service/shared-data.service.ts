import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  selectedRows: any[] = [];

  constructor() { }

  setSelectedRows(rows: any[]): void {
    this.selectedRows = rows;
  }

  getSelectedRows(): any[] {
    return this.selectedRows;
  }
}
