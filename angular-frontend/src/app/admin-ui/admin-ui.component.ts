import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUiComponent implements OnInit {
  domain:string;
  concept:string;
  conceptArray : String[];

  constructor() { }

  ngOnInit() {
  }
  display(){
  
    this.conceptArray=this.concept.split(",");
    console.log(this.domain);
    console.log(this.concept);
    console.log(this.conceptArray);

  }
}
