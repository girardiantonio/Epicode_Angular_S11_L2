import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form!:FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.form = this.fb.group({
      name:this.fb.control(null, [Validators.required]),
      surname:this.fb.control(null, [Validators.required]),
      username: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null,[Validators.required]),
      confirmPassword: this.fb.control(null, [Validators.required]),
      genre: this.fb.control(null, [Validators.required]),
      image: this.fb.control(null, [Validators.required]),
      bio: this.fb.control(null, [Validators.required]),
    },
    {
      validators: this.matchPsw()
    })
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid
   }
   isTouched(fieldName: string) {
     return this.form.get(fieldName)?.touched
   }

   matchPsw(): ValidatorFn {
    return (control : AbstractControl): ValidationErrors | null => {
      let psw = control.get('password')?.value
      let confirmPsw = control.get('confirmPassword')?.value
      if(psw!== confirmPsw){
        return { matchPswControl: true }
      }
    return null
    }
  }

  register(){
    console.log(this.form.value)
    alert('Registered Successfully')
    this.form.reset()
  }

}
