import { PageEvent } from '@angular/material';
// import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, Inject, PLATFORM_ID, Injector } from '@angular/core';
import { SearchinfoService } from '../service/searchinfo.service';
import { isPlatformServer } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from '../domain/data-service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
// import { Info } from '../domain/info.model';
const configKey = makeStateKey('CONFIG');
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-searchcard',
  templateUrl: './searchcard.component.html',
  styleUrls: ['./searchcard.component.css']
})
export class SearchcardComponent {
  title: any;
  info;
  pageLength: number;
  pageSize: 2;
  pageSizeOptions = [2, 4, 6, 8];
  splicedData: any;
  searchTerm: string;

  // viewChild- Property decorator that configures a view query
  // The change detector looks for the first element or the directive matching
  // the selector in the view DOM. If the view DOM changes, and a new child 
  // matches the selector, the property is updated.
  @ViewChild('gSearch') formSearch;
  @ViewChild('searchKey') hiddenSearchHandler;
  constructor(
    private injector: Injector,
    private state: TransferState,
    private search: SearchinfoService,
    private router: Router,
    private dataService: DataService,

    @Inject(PLATFORM_ID) private platformid: Object, private route: Router
  ) {
    this.title = 'Voice Search POC';
    //isPlatformServer -Returns whether a platform id represents a server platform.
    if (isPlatformServer(this.platformid)) {
      //this.injector.get - Retrieves an instance from the injector based on the provided token.
      //injector get - abstract get<T>(token: Type<T> | InjectionToken<T>, notFoundValue?: T, flags?: InjectFlags): T
      const envJson = this.injector.get('CONFIG') ? this.injector.get('CONFIG') : {};
      //state of TransferState set method- set<T>(key: StateKey<T>, value: T): void
      this.state.set(configKey, envJson as any);
    }
  }

  ngOnInit() {
    this.searchTerm = this.dataService.dataService
    this.search.getAll().subscribe((data) => {
      this.info = data;
      this.pageLength = this.info.length;
      console.log(this.pageLength);
      this.loadData(0)
    });
    

  }

  loadData(pageIndex) {
    this.splicedData = this.info.slice(pageIndex, pageIndex + 2);
  }

  pageChangeEvent(event) {
    const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
    this.splicedData = this.info.slice(offset).slice(0, event.pageSize);
  }



  public voiceSearch() {
    //we create the webkitSpeechRecognition object which provides the speech interface,
    // and set some of its attributes and event handlers.
    if ('webkitSpeechRecognition' in window) {
      const vSearch = new webkitSpeechRecognition();
      vSearch.continuous = false;
      vSearch.interimresults = false;
      vSearch.lang = 'en-US';
      // activate the speech recognizer by .start()
      vSearch.start();
      const voiceSearchForm = this.formSearch.nativeElement;
      const voiceHandler = this.hiddenSearchHandler.nativeElement;
      vSearch.onresult = function (event) {
        //storing the result in value
        //returns a string containing the transcript of the recognised word(s).
        voiceHandler.value = event.results[0][0].transcript;
        vSearch.stop();
        //submitting the form with the value
        // voiceSearchForm.submit();
      }
      //if error is encountered, show error in console and stop the speech recognition
      vSearch.onerror = function (event) {
        console.log(event);
        vSearch.stop();
      }
    }
    //if browser does not have webkitspeechrecognition
    else {
      console.log("Your browser does not support voice recognition feature.");
    }
  }
    
  getdata() {  
    this.dataService.dataService = this.searchTerm; 
    this.router.navigate(['/cards']);
  }

}
