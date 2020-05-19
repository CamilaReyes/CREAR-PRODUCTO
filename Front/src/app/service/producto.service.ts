/* ESTE ARCHIVO  NOS PERMITE CONECTARNOS Y CREAR LOS METODOS PARA CONSUMIR LA FUNCIONES DE NUESTRA API- crearProducto(), obtenerProducto()etc  */

import {Injectable} from '@angular/core';
/* Indica a Angular que la clase productoService  puede necesitar dependencias/funciones externas */
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* Estos me permiten usar los metodos http y las rutas de nuestra api */
import {Observable} from 'rxjs';
/* Se encarga de recoger la informacion de angular, enviarla a la API y recoge la respuesta */

@Injectable()
export class productoService{
    apiUrl= 'http://localhost:3000/api'
    /* Creamos una variable que va a tener la ruta de neustra API */
    /* Creamos el constructo con una variable privada que contiene los metodos HTTP */
    constructor(private http:HttpClient){}

    crearProducto(productoNuevo){
        const params= JSON.stringify(productoNuevo);
        /* Creamos la constante quien recibe los datos en forma JS y los convierte en un JSON */
        const options= {headers: new HttpHeaders({'Content-type':'application/json'})};
        /* Creamo sun constante la cual nos servira para indicar que lo que se enviara es de tipo JSON */

        return this.http.post( /* Estamos retornando un objeto el cual por medio del modulo http le estamos enviando por post los datos */
            this.apiUrl + '/crear', /* Le indicamos la ruta de nuestra API */
            params,/* Le indicamos los datos que se estan enviando */
            options /* Le indicamos que se esta enviando un JSON */
        ).pipe(res=>res)
        /* el metodo pipe convierte datos de entrada(Lo que se ingreso en el formulario) en datos de salida para que llegue a nuestra API en forma de respuesta y nos trae la respuesta de nuestra API */
    }

}