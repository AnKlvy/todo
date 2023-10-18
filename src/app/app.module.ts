import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms'; // Импорт модуля FormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { HttpClientModule } from '@angular/common/http'; // Импортируйте HttpClientModule
import { ApiService } from './service/api.service';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    UserlistComponent,
    UserprofileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, // Добавление FormsModule в раздел imports
    HttpClientModule, // Добавьте HttpClientModule в список импортируемых модулей
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
