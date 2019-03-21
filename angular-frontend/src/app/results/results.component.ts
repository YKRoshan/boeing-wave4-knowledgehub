import { Component, OnInit } from '@angular/core';
import { DataService } from '../domain/data-service';
import { SessionId } from '../domain/sessionId';
import { Router } from '@angular/router';
import { SocketService } from '../services/socket.service';
import { SearchinfoService } from '../services/searchinfo.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchTerm: string;
  object1:any;
  object2:any;
  object3:any;
  object4:any;
  object5:any;

  constructor(    private dataService: DataService,
    private result : SessionId,    private searchService : SearchinfoService,
    private router : Router,
    private session : SocketService
    ) { }

  ngOnInit() {
    this.searchTerm = this.dataService.dataService

  }
  search(){
    var output = {
      sessionId : this.result.SessionId,
      searchString : this.searchTerm
    };
    this.result.nlpresult=[];
    this.result.pdfresult=[];
    this.result.recommendation=[];
    this.result.searchfreq=[];
    this.result.webresult=[];
    this.dataService.dataService=this.searchTerm
    this.searchService.postResults(output).subscribe(data=>{ 
    this.object1 = this.result.pdfresult;
    this.object2 = this.result.webresult;
    this.object3 = this.result.recommendation;
    this.object4 = this.result.nlpresult;
    this.object5 = this.result.searchfreq;

    });
    this.router.navigateByUrl('/search', {skipLocationChange: true}).then(()=>
this.router.navigate(["/result"]));
 
  }


}
