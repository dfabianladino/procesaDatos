import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import {UploadComponent} from './upload/upload.component'
import {AuthGuard} from './services/auth.guard'


const appRoutes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'main',
    component: UploadComponent,
    canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: '' }


]

export const routing = RouterModule.forRoot(appRoutes);
