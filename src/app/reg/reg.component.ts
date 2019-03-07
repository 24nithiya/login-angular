import{ Component, OnInit} from '@angular/core';
import{ FormBuilder} from '@angular/forms';
import{Validators} from '@angular/forms';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'] 
  })
  export class RegComponent implements OnInit{
      registerform= this.fb.group({
          firstName:['',[Validators.required,Validators.minLength(4)]],
          username:['',[Validators.required,Validators.minLength(8)]]
      });
      registerdata= {}
constructor(private fb:FormBuilder){}

ngOnInit(){}
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
      console.log(this.registerdata)
    }
}

