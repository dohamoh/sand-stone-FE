import { SendEmailService } from './../../services/send-email.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit{
  formData: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(40)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    companyName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    quantity: new FormControl(null, [Validators.required]),
    notes: new FormControl(null, []),
  })
  constructor(private router: Router, private SendEmailService:SendEmailService) { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {

    this.SendEmailService.sendEmail(this.formData.value).subscribe((Data: any) => {
      if (Data.message == 'sended') {
        this.router.navigate(['/home'])
      }
    })
  }
}
