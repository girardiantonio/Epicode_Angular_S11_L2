import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = ''
  password: string = ''

  submit(){
    this.username = ''
    this.password = ''
    alert('Login Successful')
  }

  check(){
    if(this.username === '' && this.password === ''){
      return true;
    }
    return false
  }

}
