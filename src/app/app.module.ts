import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { MenuComponent } from './templates/menu/menu.component';
import { TablePeopleComponent } from './people/table-people/table-people.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { TableConcesionarioComponent } from './concesionario/table-concesionario/table-concesionario.component';
import { TableVentaComponent } from './venta/table-venta/table-venta.component';
import { TableVehiculoComponent } from './vehiculo/table-vehiculo/table-vehiculo.component';
import { ConcesionarioService } from './service/concesionario.service';
import { VehiculoService } from './service/vehiculo.service';
import { VentaService } from './service/venta.service';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { MenuAccionesComponent } from './people/menu-acciones/menu-acciones.component';
import { MatDialogModule} from '@angular/material/dialog';
import { AgregarComponent } from './people/formularios/agregar/agregar.component';
import { ActualizarComponent } from './people/formularios/actualizar/actualizar.component';
import { ActualizarConcesionarioComponent } from './concesionario/formularios/actualizar-concesionario/actualizar-concesionario.component';
import { AgregarConcesionarioComponent } from './concesionario/formularios/agregar-concesionario/agregar-concesionario.component';
import { MatIconModule } from '@angular/material/icon';
import { MenuConcesionarioComponent } from './concesionario/menu-concesionario/menu-concesionario.component';
import { MenuVehiculoComponent } from './vehiculo/menu-vehiculo/menu-vehiculo.component';
import { ActualizarVentaComponent } from './venta/formularios/actualizar-venta/actualizar-venta.component';
import { AgregarVentaComponent } from './venta/formularios/agregar-venta/agregar-venta.component';
import { MenuVentaComponent } from './venta/menu-venta/menu-venta.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgregarVehiculoComponent } from './vehiculo/formularios/agregar-vehiculo/agregar-vehiculo.component';
import { ActualizarVehiculoComponent } from './vehiculo/formularios/actualizar-vehiculo/actualizar-vehiculo.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { InicioComponent } from './templates/inicio/inicio.component';
import { NosotrosComponent } from './templates/nosotros/nosotros.component';
import { OopsComponent } from './templates/oops/oops.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    TablePeopleComponent,
    TableConcesionarioComponent,
    TableVentaComponent,
    TableVehiculoComponent,
    DashboardComponent,
    MenuAccionesComponent,
    AgregarComponent,
    ActualizarComponent,
    ActualizarConcesionarioComponent,
    AgregarConcesionarioComponent,
    MenuConcesionarioComponent,
    MenuVehiculoComponent,
    ActualizarVentaComponent,
    AgregarVentaComponent,
    MenuVentaComponent,
    AgregarVehiculoComponent,
    ActualizarVehiculoComponent,
    MenuVehiculoComponent,
    InicioComponent,
    NosotrosComponent,
    OopsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule,
    
  ],
  providers: [
    ServiceUserService,
    ConcesionarioService,
    VehiculoService,
    VentaService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
