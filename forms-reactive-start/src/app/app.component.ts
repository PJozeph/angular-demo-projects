import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenNamesList : ['Jozsef', 'Anna'];
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value)
    console.log("form is valid ?")
    console.log(this.signUpForm.valid)
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  get controls() {
    return (this.signUpForm.get("hobbies") as FormArray).controls;
  }

  forbiddenNames(formControl : FormControl) : {[key: string] : boolean} {
    return this.forbiddenNamesList.indexOf(formControl.value) !== -1 ? {'nameIsForbidden' : true} : null
  }

}
