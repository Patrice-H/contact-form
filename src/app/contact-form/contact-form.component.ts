import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  formContainer!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formContainer = this.formBuilder.group({
      firstName: null,
      lastName: null,
      companyName: null,
      eMail: null,
      subject: null,
      message: null,
    });
  }

  onSubmitForm(): void {
    console.log(this.formContainer.value);
  }
}
