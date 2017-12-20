import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2PaginationModule} from "ng2-pagination";
// Rutas
import { APP_ROUTING } from './app-routes';
// Servicios
import { CochesService } from './services/coches.service';
import { MarcasService } from './services/marcas.service';
import { ProvinciasService } from './services/provincias.service';
import { UserService} from './services/user.service';
import { FireServiceService } from './services/fire-service.service';
import { CargaImagenService } from './services/carga-imagen.service';
import { CargaCocheService } from './services/carga-coche.service';
// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FooterComponent } from './componentes/shared/footer/footer.component';
import { RegisterComponent } from './componentes/register/register.component';
import { SubidaCocheComponent } from './componentes/subida-coche/subida-coche.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { VistaCochesComponent } from './componentes/vista-coches/vista-coches.component';
import { LoginComponent } from './componentes/login/login.component';
import { VistaDetalladaComponent } from './componentes/vista-detallada/vista-detallada.component';
import { UserChangesComponent } from './componentes/user-changes/user-changes.component';
// Pipes
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PointReplacerPipe } from './pipes/point-replacer.pipe';
// Guards
import { RegisterGuard } from './guards/register.guard';
import { LoginGuard } from './guards/login.guard';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { ListadoCochesComponent } from './componentes/listado-coches/listado-coches.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    SubidaCocheComponent,
    InicioComponent,
    VistaCochesComponent,
    LoginComponent,
    VistaDetalladaComponent,
    UserChangesComponent,
    CapitalizePipe,
    PointReplacerPipe,
    NgDropFilesDirective,
    ListadoCochesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    Ng2PaginationModule
  ],
  providers: [
    MarcasService,
    CochesService,
    ProvinciasService,
    UserService,
    FireServiceService,
    RegisterGuard,
    LoginGuard,
    CargaImagenService,
    CargaCocheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
