import { Component, OnInit } from '@angular/core';
import{ AuthenticateService} from'../authenticate.service';
import{ Router} from '@angular/router';
import{ FormBuilder} from '@angular/forms';
import{Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform= this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(4)]],
    username:['',[Validators.required,Validators.minLength(8)]]
});

  registerdata= {}
  constructor(private auth: AuthenticateService,private fb:FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }
  get firstName(){
    return this.registerform.get('firstName');
  }
  
  get username(){
    return this.registerform.get('username');
  }
  onSubmit(){
    console.log(this.registerform.valid)
  }

  registerUser(){
    this.auth.registerUser(this.registerdata)
    .subscribe(
      res =>{ 
        console.log(res),
        localStorage.setItem('token' , res.token)
        alert("you have succesfully registered")
        this.router.navigate(['/login'])
      },
      err => console.log(err)
    
    )
  }
 
}
