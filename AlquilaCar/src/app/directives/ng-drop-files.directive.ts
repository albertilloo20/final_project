import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {
  @Input() archivos: FileItem[] = [];
  @Output() archivoSobre: EventEmitter<any> = new EventEmitter();

  constructor(public elemento: ElementRef) { }

  @HostListener('dragenter', ['$event'])
  public onDragEnter(event: any){
    this.archivoSobre.emit( true );
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any) {
    this.archivoSobre.emit( false );
  }

  @HostListener('dragover', ['$event'])
  public onDragOver(event: any) {
    let transferencia = this.getTransferencia(event);
    transferencia.dropEffect = 'copy';
    this.prevenirYDetener(event);
    this.archivoSobre.emit( true );
  }


  @HostListener('drop', ['$event'])
  public onDrop(event: any ){
    let transferencia = this.getTransferencia(event);
    if(!transferencia){
      return;
    }
    this._agregarArchivos(transferencia.files);
    this.archivoSobre.emit( false );
    this.prevenirYDetener(event);
  }

  private getTransferencia(evento: any){
    return evento.dataTransfer ? evento.dataTransfer : evento.originalEvent.dataTransfer;
  }

  private _agregarArchivos(archivosLista: FileList){

    for (let propiedad in Object.getOwnPropertyNames(archivosLista)) {
      let archTemporal = archivosLista[propiedad];
      if(this.archivoPuedeSerCargado(archTemporal)) {
        let nuevoArchivo = new FileItem(archTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }
  }

  private prevenirYDetener(event: any){
    event.preventDefault();
    event.stopPropagation();
  }

  private archivoPuedeSerCargado(archivo: File){
    if (!this.archivoYaFueDropeado(archivo.name) && this.esImagen(archivo.type) && !this.soloUnArchivo()){
      return true;
    }
    return false;


  }

  private archivoYaFueDropeado(nombreArchivo: string): boolean{
    for(let i in this.archivos){
      let arch = this.archivos[i];
      if(arch.archivo.name === nombreArchivo){
        console.log('Este archivo ya existe', nombreArchivo);
        return true;
      }
    }
    return false;
  }

  private soloUnArchivo(): boolean {
    if (this.archivos.length >= 1) {
      console.log('error mas de un archivo');
      return true;
    }
      return false;

  }

  private esImagen(tipoArchivo: string): boolean {
    return(tipoArchivo == '' || tipoArchivo == undefined) ? false : tipoArchivo.startsWith('image');
  }


}
