import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterComponent } from './componentes/register/register.component';
import { SubidaCocheComponent} from './componentes/subida-coche/subida-coche.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { VistaCochesComponent } from './componentes/vista-coches/vista-coches.component';
import { LoginComponent } from './componentes/login/login.component';
import { VistaDetalladaComponent } from './componentes/vista-detallada/vista-detallada.component';
import { UserChangesComponent } from './componentes/user-changes/user-changes.component';
import { RegisterGuard } from './guards/register.guard';
import { LoginGuard } from './guards/login.guard';
import { UserDataGuard } from './guards/user-data.guard';
import { ListadoCochesComponent } from './componentes/listado-coches/listado-coches.component';
import { AdiosComponent } from './componentes/adios/adios.component';
import { UploadCarGuard } from './guards/upload-car.guard';
import { ListadoCochesCarGuard } from './guards/listado-coches-car.guard';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: InicioComponent},
  { path: 'coches', component: VistaCochesComponent},
  { path: 'coche/:id', component: VistaDetalladaComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterGuard] },
  { path: 'userData', component: UserChangesComponent, canActivate: [UserDataGuard]},
  { path: 'uploadCar', component: SubidaCocheComponent, canActivate: [UploadCarGuard]},
  { path: 'miscoches', component: ListadoCochesComponent, canActivate: [ListadoCochesCarGuard]},
  { path: 'adios', component: AdiosComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'coches' }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
