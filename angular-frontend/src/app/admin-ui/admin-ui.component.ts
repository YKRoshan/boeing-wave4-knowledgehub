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
  publishDomainConceptName(){
    this.domainConceptService.postDomainConceptName(this.domain,this.concepts)
  }
}
