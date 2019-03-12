import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUiComponent implements OnInit {
  domain:string;
  concept:string;
  conceptArray : String[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  display(){
  
    this.conceptArray=this.concept.split(",");
    console.log(this.domain);
    console.log(this.concept);
    console.log(this.conceptArray);
    this.http.post("http://localhost:8080/domain",{
      "domain":this.domain,
      "conceptName":this.conceptArray
    }).subscribe((data)=>{
      console.log(data);
    })
  }
}
