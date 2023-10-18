import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service'; // Импортируйте ваш сервис для взаимодействия с API

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.registrationForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      
      // Пример отправки данных с использованием HttpClient
this.apiService.addStudent(userData).subscribe(
  () => {
    console.log('Пользователь успешно зарегистрирован:');
    // Вы можете выполнить дополнительные действия после успешной регистрации
  },
  (error: any) => {
    console.log(userData)
    console.error('Ошибка при регистрации пользователя:', error);
    // Обработайте ошибку, например, показав сообщение об ошибке на фронтенде
  }
);

    }
  }
}
