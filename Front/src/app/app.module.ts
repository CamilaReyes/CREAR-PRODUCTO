import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {productoService} from './service/producto.service';
/* Importamos o conectamos el servicio al modulo principal */
import{HttpClientModule} from '@angular/common/http';
import { FormularioComponent } from './components/formulario/formulario.component';
/* Habilitamos la llamadas HTTP GET,PUT,DELETE,POST y La cabecera en nuestro caso las RUTAS */
import {FormsModule} from '@angular/forms'
/* Nos permite convertir un formulario HTML a un formulario Angular y pueda utilizar el servicio */

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [productoService], /* Proveer el servicio en nuestra app Angular */
  bootstrap: [AppComponent]
})
export class AppModule { }
