// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchinfoService } from '../service/searchinfo.service';
// import { Info } from '../domain/info.model';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent  {
  title :any;
  info;

  constructor(private search:SearchinfoService ) { }

  ngOnInit() {   
    this.search.getAll().subscribe((data)=>{
      console.log(data);
      this.info=data,
    console.log("OnInit")});
  }

}
