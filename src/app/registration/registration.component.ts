import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  @Output() userRegistered = new EventEmitter<any>();


  onSubmit() {
    if (this.registrationForm.valid) {
      // Вы можете отправить данные формы на сервер или выполнить другую логику регистрации
      console.log('Данные формы:', this.registrationForm.value);
         // Получите существующий массив пользователей из localStorage или создайте новый
    const existingUsersJson = localStorage.getItem('users');
    const existingUsers = existingUsersJson ? JSON.parse(existingUsersJson) : [];

    // Добавьте нового пользователя в массив
    existingUsers.push(this.registrationForm.value);

    // Сохраните массив пользователей обратно в localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));
  }
    }
    
}

