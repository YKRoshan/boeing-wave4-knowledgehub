import { Component, OnInit } from '@angular/core';
import { DomainConceptService } from '../service/domain-conceptName-service';


@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css'],
  providers:[DomainConceptService]
})
export class AdminUiComponent implements OnInit {
  private domain:string;
  private concepts:string;
  constructor(private domainConceptService:DomainConceptService){

  }
  ngOnInit() {
  }
<<<<<<< HEAD
  display(){
  
    this.conceptArray=this.concept.split(",");
    console.log(this.domain);
    console.log(this.concept);
    console.log(this.conceptArray);
    this.http.post("http://localhost:8099/domain",{
      "domain":this.domain,
      "conceptName":this.conceptArray
    }).subscribe((data)=>{
      console.log(data);
    })  
=======
  publishDomainConceptName(){
    this.domainConceptService.postDomainConceptName(this.domain,this.concepts)
>>>>>>> be45cb62f3b36fc883e18ee3138bd848cffa7deb
  }
}
