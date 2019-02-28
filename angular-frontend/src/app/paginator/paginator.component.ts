import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  length = 60;
  pageSize = 2;


  // MatPaginator Output
  pageEvent: PageEvent;

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //  // this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);

  // }

}
