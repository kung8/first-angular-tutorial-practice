import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  messageForm:FormGroup;
  //this is to check to see if these results have been submitted
  submitted: boolean = false;

  //this is to check to see if these were validated
  success: boolean = false;

  constructor(private formBuilder:FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name:['',Validators.required],
      message:['',Validators.required]
    })

   }

   onSubmit(){
     this.submitted = true;
     if(this.messageForm.invalid){
       return;
     } 

     //Right here is where you would send some info prob to backend like S3
     this.success = true;
   }

  ngOnInit() {
  }

}
