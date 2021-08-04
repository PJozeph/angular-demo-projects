import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-custom-validator-init';

  form : FormGroup;

  constructor(private formBuilder : FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name : ['', [Validators.required]],
      age : ['', this.ageValidator(20,70)]
    })
  }

  ageValidator(min : number, max: number)  {
    return (control: AbstractControl) : {[key: string] : boolean} | null => {
      return control.value > max || control.value.min < min ? { validatorFailed : true} : null
    }
  }

  save() {
    console.log("submitted")
    console.log(this.form)
  }
}
