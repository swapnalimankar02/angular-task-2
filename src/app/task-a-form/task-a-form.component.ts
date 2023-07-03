import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-a-form',
  templateUrl: './task-a-form.component.html',
  styleUrls: ['./task-a-form.component.css']
})
export class TaskAFormComponent {
  firstName: string = '';
  lastName: string = '';
  selectedOption: string = '';
  phoneNumber:string = '';
  email: string ='';
  myForm: FormGroup;

  constructor(){
    this.myForm = new FormGroup({
      selectedOption: new FormControl('')
    });
  }

  onOptionChange(){
    if(this.selectedOption !== 'phone'){
      this.phoneNumber= '';
    }
    if(this.selectedOption !== 'email'){
      this.email = '';
    }
  }
}
