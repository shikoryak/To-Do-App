import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateAccountService } from './create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
    address: new FormControl('', Validators.required),
    suite: new FormControl(''),
    city: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)
  });

  constructor(
    private createAccountService: CreateAccountService,
    private router: Router
  ) { }

  onCreateAccount(): void {
    const formValue = this.form.value;
    const body = {
      name: formValue.fullName,
      username: formValue.userName,
      email: formValue.email,
      phone: formValue.phone,
      address: {
        street: formValue.address,
        suite: formValue.suite,
        city: formValue.city,
        zipcode: formValue.zip
      }
    }

    this.createAccountService.createAccount(body).subscribe(
      (result) => {
        if (result?.id) {
          this.router.navigate(['todo-list']);
        }
      }
    )
  }

}
