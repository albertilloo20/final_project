import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent} from './login/login.component';

const APP_ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
