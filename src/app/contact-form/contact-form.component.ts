import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  formContainer!: FormGroup;
  eMailRegex!: RegExp;
  formErrors!: Boolean;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.eMailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.formContainer = this.formBuilder.group({
      firstName: [null],
      lastName: [null],
      companyName: [null],
      eMail: ['', [Validators.required, Validators.pattern(this.eMailRegex)]],
      subject: [null],
      message: [null],
    });
    this.formErrors = false;
  }

  onSubmitForm(): void {
    console.log(this.formContainer.value);
  }

  isConform(): boolean {
    if (Validators.pattern(this.eMailRegex)) {
      return true;
    }

    return false;
  }
}
