import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionb',
  templateUrl: './questionb.component.html',
  styleUrls: ['./questionb.component.css']
})
export class QuestionbComponent implements OnInit {

  constructor() { }
  public Phonenumbers: any[] = [{
    id: 1,
    Phonenumber: '',
    
  }];

  

  addAddress() {
    this.Phonenumbers.push({
      id: this.Phonenumbers.length + 1,
      Phonenumbers: '',
     
    });
  }

  removeAddress(i: number) {
    this.Phonenumbers.splice(i, 1);
  }

  logValue() {
    console.log(this.Phonenumbers);
  }


  ngOnInit(): void {
  }

}
