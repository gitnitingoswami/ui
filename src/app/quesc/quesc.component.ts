import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quesc',
  templateUrl: './quesc.component.html',
  styleUrls: ['./quesc.component.css']
})
export class QuescComponent  {

  constructor() { }
 
Phonenumbers=[];
  

  addAddress() {
    this.Phonenumbers.push({
      id: this.Phonenumbers.length + 1,
      Phonenumbers: '',
     
    });
  }

  removeAddress(i: number) {
    this.Phonenumbers.splice(i, 1);
  }
  add() {
    this.Phonenumbers.push({
      id: this.Phonenumbers.length + 1,
      Phonenumbers: '',
     
    });
  }
  remove(i: number) {
    this.Phonenumbers.splice(i, 1);
  }

  logValue() {
    console.log(this.Phonenumbers);
  }

}
