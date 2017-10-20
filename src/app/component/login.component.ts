import { Component,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnChanges  {
  username: string;
  password: string;
  invalid_login: boolean;

  ngOnChanges(changes:any) {
   
  }

  constructor(private router: Router, private LoginService: LoginService) {
   debugger;
    this.username = '';
    this.password = '';

    this.invalid_login = true;
    LoginService.logout();
  }

  getUserCredentials() {
 
    this.LoginService.getUserCredentials(this.username,this.password)
      .subscribe(queryResults => {
       
        if(queryResults == true){
          window.location.reload();
          this.invalid_login = false;
          this.router.navigate(['search']);
        }
        else{
         
          this.invalid_login = true;
          this.router.navigate(['login']);
        }
      });

     
  }
  onSubmit() {
    
    if (this.username == '' || this.password == '') {
      console.log("No username/password");
      return;
    }

    this.getUserCredentials();

  }
  

}
