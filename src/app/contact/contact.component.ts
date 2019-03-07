import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private contacts: Array<object> = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getContacts();
}
public getContacts(){
  this.apiService.getContacts().subscribe((data: Array<object>)=>{
    this.contacts = data;
    console.log(data);
  });
}
}
