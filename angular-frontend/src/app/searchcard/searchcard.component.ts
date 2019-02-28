// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SearchinfoService } from '../service/searchinfo.service';
// import { Info } from '../domain/info.model';
import {PageEvent, MatTableDataSource} from '@angular/material'
import { DataService } from '../domain/data-service';

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent  {
  title :any;
  info;
  index:any;

  length = 60;
  pageSize = 2;


  // MatPaginator Output
  pageEvent: PageEvent;
  searchTerm:string

  datasource:MatTableDataSource<Object>;

  constructor(private search:SearchinfoService ,private dataService:DataService) { }

 
  ngOnInit() {   
    this.searchTerm = this.dataService.dataService;
    this.search.getAll().subscribe((data)=>{
      // console.log(data);
      this.info=data;
      this.pageSize=this.info.length;
      length = this.info.length;
      this.loadData(0) });
      
   }
  loadData(pageIndex){
    this.datasource= this.info.slice(pageIndex,pageIndex+2)
    this.index = pageIndex; 
  }

  pageevent(event){
      this.loadData(this.index+2);

  }
}
