import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


tcode ;
ram;
submit() {
  var arr=[2,3,10,15,26,35,50,63,69];
    console.log("the code :" + this.tcode);
    this.ram = this.tcode ;

   this.tcode= this.ram - 1;
    console.log(this.ram);
    this.ram=arr[this.tcode]
     document.getElementById('display').innerHTML=this.ram;
}
  ngOnInit(): void {
  }

}
