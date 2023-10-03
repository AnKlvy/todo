import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' }, // Перенаправление на маршрут "registration" при загрузке приложения
  { path: 'registration', component: RegistrationComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'userprofile', component: UserprofileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
