import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// Rutas
import { APP_ROUTING } from './app-routes';
// Servicios
import { LoginService } from './services/login.service';
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
    UserChangesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
