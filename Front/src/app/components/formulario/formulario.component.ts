import { Component, OnInit } from '@angular/core';
import {producto} from '../../models/producto';
/* Importamos el modelo para que el form tenga acceso a el */
import {productoService} from '../../service/producto.service';
/* Importo el servicio para que el formulario tenga acceso a él */
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public Producto:producto; /* Instanciamos el modelo */
  constructor(private service:productoService) { /* Requerimos el servicio */
    this.Producto= new producto(); /*Crea y limpia el modelo cada vez que insertamos uno nuevo  */
  } 

  ngOnInit(): void {
  }

  FormularioUp(){
    /* Nos suscribimos al servicio crearProducto de nuestra API y esta nos puede responder con cualquier tipo de dato. */
    this.service.crearProducto(this.Producto).subscribe((res:any)=>{
      if(res.statusCode !==200){ /* Si statusCode es diferente a 200 no se ha creado correctamente el producto */
        alert("Error al crear el producto");
      }else{
        alert("Producto creado Correctamente")
      }
    })
  }

}
