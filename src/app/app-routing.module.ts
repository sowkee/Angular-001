import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPeopleComponent } from './people/form-people/form-people.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { FormVehiculoComponent } from './vehiculo/form-vehiculo/form-vehiculo.component';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { TableConcesionarioComponent } from './concesionario/table-concesionario/table-concesionario.component';
import { TableVehiculoComponent } from './vehiculo/table-vehiculo/table-vehiculo.component';
import { TableVentaComponent } from './venta/table-venta/table-venta.component';
import { TablePeopleComponent } from './people/table-people/table-people.component';
 

const appRoutes: Routes = [

  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      { path: 'concesionarios', component: TableConcesionarioComponent },
      { path: 'usuarios', component: TablePeopleComponent },
      { path: 'vehiculos', component: TableVehiculoComponent },
      { path: 'ventas', component: TableVentaComponent },
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
