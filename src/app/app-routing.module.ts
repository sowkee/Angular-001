import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { TableConcesionarioComponent } from './concesionario/table-concesionario/table-concesionario.component';
import { TableVehiculoComponent } from './vehiculo/table-vehiculo/table-vehiculo.component';
import { TableVentaComponent } from './venta/table-venta/table-venta.component';
import { TablePeopleComponent } from './people/table-people/table-people.component';
import { InicioComponent } from './templates/inicio/inicio.component';
import { NosotrosComponent } from './templates/nosotros/nosotros.component';
import { OopsComponent } from './templates/oops/oops.component';
import { ActualizarComponent } from './people/formularios/actualizar/actualizar.component';
 

const appRoutes: Routes = [


  //Rutas header
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: "inicio", component: InicioComponent},
  {path: "nosotros", component: NosotrosComponent},
  {path: "sedes", component: OopsComponent},
  {path: "vehiculos", component: OopsComponent},
  
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      //Rutas hijas del dashboard
      { path: 'concesionarios', component: TableConcesionarioComponent },
      { path: 'usuarios', component: TablePeopleComponent },
      { path: 'vehiculos', component: TableVehiculoComponent },
      { path: 'ventas', component: TableVentaComponent },
      
      { path: 'actualizar', component: ActualizarComponent } //Actualiar usuario
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
