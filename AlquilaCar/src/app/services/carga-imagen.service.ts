import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FileItem } from '../models/file-item';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CargaImagenService {
  URLCoches = 'https://alquilacar-a9f10.firebaseio.com/coches';
  private CARPETA_IMAGENES: string = 'img/coches';
  constructor(
    public db: AngularFireDatabase, private httpClient: HttpClient
  ) {

  }

  cargaImagenCoche( id ): Observable<any[]> {
    return this.db.list(
      `/${ this.CARPETA_IMAGENES }/${id}`
    ).valueChanges();
  }

  cargar_imagenes_firebase( id, archivos: FileItem[] ){
    let idFinal = id.name;
    let storageRef = firebase.storage().ref();
    for(let item of archivos){
      item.estaSubiendo = true;

      let uploadTask: firebase.storage.UploadTask = storageRef.child(`${ this.CARPETA_IMAGENES }/${idFinal}/${ item.nombreArchivo }`).put( item.archivo );
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot ) => item.progreso = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100,
        ( error ) => console.error( "Error al subir ", error),
        () =>{
          item.url = uploadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarImagen( idFinal,  item.url);
        }
      ); //on
    }
  }

  private guardarImagen( id, contenido ){
    var ref = this.db.list('coches/');
    ref.update(id, {
        imageurl: contenido,
      }
    );}

}
