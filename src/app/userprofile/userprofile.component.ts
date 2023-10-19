import { Component, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  getId: any;
  updateForm: FormGroup;
  userData: any; // Добавьте переменную для хранения данных пользователя

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log(this.getId)

    this.updateForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    // Получите данные пользователя и предзаполните форму
    this.apiService.getStudent(this.getId).subscribe((res) => {
      this.userData = res;
      this.updateForm.patchValue(this.userData);
    });
  }

  onUpdate(): void {
   
      this.apiService.updateStudent(this.getId, this.updateForm.value)
      .subscribe(() => {
          console.log('Data updated successfully!');
          this.ngZone.run(() => {
            this.router.navigateByUrl('/'); // Перенаправление после успешного обновления
          });
      }, (err) => {
          console.log(err);
      });
    
    
  }
}
