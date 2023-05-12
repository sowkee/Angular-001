import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { MenuComponent } from './templates/menu/menu.component';
import { TablePeopleComponent } from './people/table-people/table-people.component';
import { FormPeopleComponent } from './people/form-people/form-people.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { ServiceUserService } from 'src/app/service/service-user.service';
import { FormConcesionarioComponent } from './concesionario/form-concesionario/form-concesionario.component';
import { TableConcesionarioComponent } from './concesionario/table-concesionario/table-concesionario.component';
import { FormVentaComponent } from './venta/form-venta/form-venta.component';
import { TableVentaComponent } from './venta/table-venta/table-venta.component';
import { FormVehiculoComponent } from './vehiculo/form-vehiculo/form-vehiculo.component';
import { TableVehiculoComponent } from './vehiculo/table-vehiculo/table-vehiculo.component';
import { ConcesionarioService } from './service/concesionario.service';
import { VehiculoService } from './service/vehiculo.service';
import { VentaService } from './service/venta.service';
import { DashboardComponent } from './templates/dashboard/dashboard.component';
import { MenuAccionesComponent } from './people/menu-acciones/menu-acciones.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    TablePeopleComponent,
    FormPeopleComponent,
    FormConcesionarioComponent,
    TableConcesionarioComponent,
    FormVentaComponent,
    TableVentaComponent,
    FormVehiculoComponent,
    TableVehiculoComponent,
    DashboardComponent,
    MenuAccionesComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
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
