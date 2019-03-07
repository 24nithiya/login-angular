import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {
  registerUserdata = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {}

  registerUser(){
    //console.log(this.registerUserdata);
    this.apiService.store(this.registerUserdata)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
      }
}
