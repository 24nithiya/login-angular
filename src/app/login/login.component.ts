import { Component, OnInit } from '@angular/core';
import{ AuthenticateService} from'../authenticate.service';
import{ Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logindata= {}
  constructor(private auth: AuthenticateService,
             private router: Router) { }

  ngOnInit() {
  }
loginUser(){
  this.auth.loginUser(this.logindata)
  .subscribe(
    res =>{
    
        console.log(res),
        localStorage.setItem('token' , res.token)
        this.router.navigate(['/home'])
      },
    
    err => alert("error pls check ")
    
  )
}
}
